package screens


import android.R.color.black
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.input.key.Key.Companion.I
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ModifierLocalBeyondBoundsLayout
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.currentBackStackEntryAsState
import com.example.melofiapp.R


@Composable
fun HomeScreen(navController: NavHostController){
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFEFEFDF)),

        ) {


        TopBar(navController = navController)
        LazyColumn(modifier = Modifier.weight(1f)) {
            item{Spacer(modifier = Modifier.height(40.dp))}
            item{SongSuggestions()}
            item{Spacer(modifier = Modifier.height(20.dp))}
            item{ArtistsSuggestions()}
            item{Spacer(modifier = Modifier.height(20.dp))}
            item{PlaylistSuggestions()}
            item{Spacer(modifier = Modifier.height(20.dp))}
            item{RecentlyPlayed()}

        }
        MiniPlayer(navController = navController)}
}

@Composable
fun TopBar(navController: NavHostController){
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route
    Row(modifier = Modifier
        .fillMaxWidth()
        .padding(20.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        IconButton(onClick = {navController.navigate("HomeScreen")}) {
            if (currentRoute == "HomeScreen") {
                Box(modifier = Modifier
                    .size(55.dp)
                    .clip(CircleShape)
                    .background(Color(0xF7EFE8FF))
                    .border(width = 1.dp, color = Color.Black , shape = CircleShape),
            )}
            Icon(painter = painterResource(id = R.drawable.sound_waves), contentDescription =  "Home", modifier = Modifier.size(size = 35.dp))
        }
        IconButton(onClick = {navController.navigate("SearchScreen")}) {
            if (currentRoute == "SearchScreen") {
                Box(modifier = Modifier
                    .size(55.dp)
                    .clip(CircleShape)
                    .background(Color(0xF7EFE8FF))
                    .border(width = 1.dp, color = Color.Black , shape = CircleShape),
                )}
            Icon(painter = painterResource(id = R.drawable.baseline_explore_24), contentDescription =  "Home", modifier = Modifier.size(size = 35.dp))
        }
        IconButton(onClick = {navController.navigate("PlaylistsScreen")}) {
            if (currentRoute == "PlaylistsScreen") {
                Box(modifier = Modifier
                    .size(55.dp)
                    .clip(CircleShape)
                    .background(Color(0xF7EFE8FF))
                    .border(width = 1.dp, color = Color.Black , shape = CircleShape),
                )}
            Icon(painter = painterResource(id = R.drawable.queue_music_24dp_000000_fill0_wght400_grad0_opsz24), contentDescription =  "Home", modifier = Modifier.size(size = 35.dp))
        }

        IconButton(onClick = {navController.navigate("SettingsScreen")}) {
            if (currentRoute == "SettingsScreen") {
                Box(modifier = Modifier
                    .size(55.dp)
                    .clip(CircleShape)
                    .background(Color(0xF7EFE8FF))
                    .border(width = 1.dp, color = Color.Black , shape = CircleShape),
                )}
            Icon(painter = painterResource(id = R.drawable.settings_24dp_000000_fill0_wght400_grad0_opsz24), contentDescription =  "Home", modifier = Modifier.size(size = 35.dp))
        }
    }
}

@Composable
fun MiniPlayer(navController: NavHostController){
    Row(modifier = Modifier
        .fillMaxWidth()
        .background(Color(0xF7EFE8FF))
        .height(80.dp)
        .padding(horizontal = 16.dp)
        .clickable {
            navController.navigate("MusicPlayerScreen")
        },
        verticalAlignment = Alignment.CenterVertically
    ) {
        Row(verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center) {
            Box(modifier = Modifier
                .background(Color.White)
                .size(60.dp)
                .padding(10.dp),) { }
            Column(
                modifier = Modifier
                    .padding(15.dp)
            ) {
                Text(text = "Song Name", fontSize = 15.sp, fontWeight = FontWeight.Bold)
                Text(text = "Artist Name", fontSize = 10.sp)
            }

        }
        Spacer(modifier = Modifier.width(30.dp))
        Row(modifier = Modifier
            .padding(10.dp),
            verticalAlignment = Alignment.CenterVertically) {
            IconButton(onClick = {}) {
                Icon(painter = painterResource(id = R.drawable.previous), contentDescription =  "PreviousSong", modifier = Modifier.size(size = 25.dp))
            }
            IconButton(onClick = {}) {
                Icon(painter = painterResource(id = R.drawable.pause), contentDescription =  "PauseSong", modifier = Modifier.size(size = 35.dp))
            }
            IconButton(onClick = {}) {
                Icon(painter = painterResource(id = R.drawable.next ), contentDescription =  "NextSong", modifier = Modifier.size(size = 25.dp))
            }
        }

    }
}

@Composable
fun SongSuggestions(){
    Column(){
        Text(text = "Song Suggestions", fontSize = 25.sp , fontWeight = FontWeight.Medium)
        Spacer(modifier = Modifier.height(10.dp))
        LazyRow(modifier = Modifier
            .fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            item{SongSuggestionsCard()}
            item{SongSuggestionsCard()}
            item{SongSuggestionsCard()}
            item{SongSuggestionsCard()}
            item{SongSuggestionsCard()}
        }
    }
}

@Composable
fun SongSuggestionsCard(){
    Column(modifier = Modifier
        .padding(10.dp)
        ) {
        Box(modifier = Modifier
            .background(Color.White)
            .size(100.dp)
            .padding(10.dp),) { }
        Spacer(modifier = Modifier.height(10.dp))
        Text(text = "Song Name")
        Text(text = "Artist Name")
    }
}

@Composable
fun ArtistsSuggestions(){
    Column(){
        Text(text = "Favorite Artists", fontSize = 25.sp , fontWeight = FontWeight.Medium)
        Spacer(modifier = Modifier.height(10.dp))
        LazyRow(modifier = Modifier
            .fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            item{ArtistSuggestionsCard()}
            item{ArtistSuggestionsCard()}
            item{ArtistSuggestionsCard()}
            item{ArtistSuggestionsCard()}
            item{ArtistSuggestionsCard()}
        }
    }
}

@Composable
fun ArtistSuggestionsCard(){
    Column(modifier = Modifier
        .padding(10.dp)) {
        Box(modifier = Modifier
            .size(100.dp)
            .clip(CircleShape)
            .background(Color.White),) { }
        Spacer(modifier = Modifier.height(10.dp))
        Text(text = "Artist Name")
    }
}

@Composable
fun PlaylistSuggestions(){
    Column(){
        Text(text = "Playlists", fontSize = 25.sp , fontWeight = FontWeight.Medium)
        Spacer(modifier = Modifier.height(10.dp))
        LazyRow(modifier = Modifier
            .fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            item{PlaylistSuggestionsCard()}
            item{PlaylistSuggestionsCard()}
            item{PlaylistSuggestionsCard()}
            item{PlaylistSuggestionsCard()}

        }
    }
}

@Composable
fun PlaylistSuggestionsCard(){
    Column(modifier = Modifier
        .padding(10.dp)) {
        Box(modifier = Modifier
            .background(Color.White)
            .size(100.dp)
            .padding(10.dp),) { }
        Spacer(modifier = Modifier.height(10.dp))
        Text(text = "Playlist Name")
    }
}

@Composable
fun RecentlyPlayed(){
    Column(){
        Text(text = "Recently Played", fontSize = 25.sp , fontWeight = FontWeight.Medium)
        Spacer(modifier = Modifier.height(10.dp))
        LazyRow(modifier = Modifier
            .fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            item{RecentlyPlayedCard()}
            item{RecentlyPlayedCard()}
            item{RecentlyPlayedCard()}
            item{RecentlyPlayedCard()}
            item{RecentlyPlayedCard()}
        }
    }
}
@Composable
fun RecentlyPlayedCard(){
    Column(modifier = Modifier
        .padding(10.dp)
    ) {
        Box(modifier = Modifier
            .background(Color.White)
            .size(100.dp)
            .padding(10.dp),) { }
        Spacer(modifier = Modifier.height(10.dp))
        Text(text = "Song Name")
        Text(text = "Artist Name")
    }
}
