package screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.melofiapp.R.drawable.dots_vertical_svgrepo_com

@Composable
fun PlaylistScreen (navController: NavHostController){
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFEFEFDF)),

        ) {


        TopBar(navController = navController)
        Spacer(modifier = Modifier.height(1.dp))
        SearchBarcomp()
        Column(modifier = Modifier.weight(1f)) {

            PlaylistIcon()
            PlaylistSongs()
            PlaylistSongs()
            PlaylistSongs()
            PlaylistSongs()

        }



        MiniPlayer(navController = navController)}
}

@Composable
fun PlaylistIcon(){
    Column(modifier = Modifier
        .fillMaxWidth()
        .padding(vertical = 24.dp),
    horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Box(modifier = Modifier
            .size(150.dp)
            .background(Color(0xF7EFE8FF))
        ) { }
        Spacer(modifier = Modifier.height(16.dp))
        Text(text = "Playlist")
    }
}

@Composable
fun PlaylistSongs(){
    Row(modifier = Modifier
        .fillMaxWidth()
        .padding(15.dp),

        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .background(Color.White)
                .size(90.dp)
                .padding(10.dp),
        ) { }

        Column() {
            Text(text = "Song name")
            Text(text = "Artist name")
        }

        IconButton(onClick = {}) {
            Icon(painter = painterResource(id = dots_vertical_svgrepo_com), contentDescription =  "NextSong", modifier = Modifier.size(size = 25.dp))
        }

    }
}
