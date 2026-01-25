from flask import Flask,jsonify,request,session
from flask_cors import CORS
import requests
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_login import UserMixin


app = Flask(__name__)

CORS(app)

#________________________________________________________________________________________________________________________________________________________
#------------------------------LOGIN AND SIGNUP--------------------------------------------------------------------------------------------------------------

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "supersecretkeythatonlyrishikknows"

db = SQLAlchemy(app)

class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), nullable = False, unique = True)
    email = db.Column(db.String(120), unique = True , nullable = False)
    password = db.Column(db.String(200), nullable = False)





@app.route("/api/signup", methods = ["POST"])
def register():
    userdata = {}
    userdata = request.get_json()
    username = userdata.get('username')
    password = userdata.get('password')
    email = userdata.get('email')

    existing_user = Users.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message" : "user already exists"}),400
    if not username or not password or not email:
        return jsonify({"message": "All fields are required"}), 400

    else:
        hashed_password = generate_password_hash(password)
        new_user = Users(username=username,email=email,password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message" : "Registeration successful"})

@app.route("/api/login",methods = ["POST","GET"])
def login():
    login_data = request.get_json()
    username = login_data.get('username')
    password_attempt = login_data.get('password')

    user = Users.query.filter_by(username=username).first()

    if user and check_password_hash(user.password,password_attempt):
        # session['user_id'] = user.id
        return jsonify({"message":"Login successful","user_id":user.id}),200
    else:
        return jsonify({"message":"Invalid Username or Password"}),401



#________________________________________________________________________________________________________________________________________________________
#------------------------------API FETCHING--------------------------------------------------------------------------------------------------------------



@app.route('/api/songs', methods=['GET'])
def get_songs():
    try:
        search_song = request.args.get('search_song','pop')
        MUSIC_API_LINK_SONG_SUGGESTION = f"https://itunes.apple.com/search?term={search_song}&media=music&entity=song&limit=30"
        response = requests.get(MUSIC_API_LINK_SONG_SUGGESTION)
        song_data = response.json()
        return jsonify(song_data)
    
    except Exception as e:
        return jsonify({"error":str(e)})



#________________________________________________________________________________________________________________________________________________________
#------------------------------PLAYLISTS--------------------------------------------------------------------------------------------------------------

class Playlists(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100),nullable = False)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))



@app.route("/api/playlists",methods=["POST","GET"])
def handle_playlists():
    if request.method == "POST":
        playlist_data = request.get_json()
        name = playlist_data.get('playlist_name')
        user_id = playlist_data.get('user_id')

        if name and user_id:
            new_playlist = Playlists(name = name, user_id = user_id)
            db.session.add(new_playlist)
            db.session.commit()
            return jsonify({"message":"Playlist created successfully","id": new_playlist.id}),201
        else:
            return jsonify({"message":"missing data"}),400
    
    if request.method == "GET":
        current_user_id = request.args.get('user_id')
        if current_user_id:
            user_playlists = Playlists.query.filter_by(user_id = current_user_id).all()
        else:
            user_playlists = []
        playlists_result = []
        for i in user_playlists:
            playlists_result.append({"id":i.id,"name":i.name,"user_id": i.user_id})
        return jsonify(playlists_result)


class playlistSongs(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'),nullable = False)
    song_url = db.Column(db.String(400),nullable = False)
    song_icon = db.Column(db.String(300),nullable = False)
    song_name = db.Column(db.String(100),nullable = False)
    song_artist = db.Column(db.String(100),nullable = False)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable = False)
    
@app.route("/api/playlistsongs", methods = ["GET","POST"])
def handlePlaylistSongs():
    if request.method == "POST":
        playlist_song = request.get_json()
        playlist_id = playlist_song.get("playlist_id")
        song_url = playlist_song.get("song_url")
        song_icon = playlist_song.get("song_icon")
        song_name = playlist_song.get("song_name")
        song_artist = playlist_song.get("song_artist")
        user_id = playlist_song.get('user_id',1)

        if user_id and playlist_id and song_url:
            addedSong = playlistSongs(playlist_id = playlist_id,song_url = song_url,song_icon = song_icon,song_name = song_name,song_artist = song_artist,user_id = user_id)
            db.session.add(addedSong)
            db.session.commit()
            return jsonify({"message":"Song added to playlist successfully"}),201

    if request.method == "GET":
        target_pid = request.args.get('playlist_id')
        if not target_pid:
            return jsonify({"message":"missing playlist selection"})
        playlist_songs = playlistSongs.query.filter_by(playlist_id = target_pid).all()
        pSongs_result = []
        for i in playlist_songs:
            pSongs_result.append({"playlist_id" : i.playlist_id,"song_url" : i.song_url,"song_icon":i.song_icon,"song_name":i.song_name,"song_artist":i.song_artist,"user_id":i.user_id})
        return jsonify(pSongs_result)



with app.app_context():
    db.create_all()    


if __name__ == "__main__":
    app.run(debug=True,port=5000)