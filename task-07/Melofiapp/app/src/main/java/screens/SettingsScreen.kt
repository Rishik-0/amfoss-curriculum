package screens

import android.R.color.black
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.melofiapp.R

@Composable
fun SettingsScreen(navController: NavHostController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFEFEFDF)),

        ) {



        TopBar(navController = navController)
        Spacer(modifier = Modifier.height(1.dp))
        ProfileIcon()
        LazyColumn(modifier = Modifier.weight(1f)) {
            item{Button(
                onClick = {},
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(15.dp)
                    .background(Color(0xF7EFE8FF))
                    .border(width = 1.dp, color = Color.Black ),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xF7EFE8FF),
                    contentColor = Color.Black)
                ) {
                Text(text = "User Settings")
            }}
            item{Button(
                onClick = {},
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(15.dp)
                    .background(Color(0xF7EFE8FF))
                    .border(width = 1.dp, color = Color.Black ),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xF7EFE8FF),
                    contentColor = Color.Black)
            ) {
                Text(text = "Log Out")
            }}

        }



        MiniPlayer(navController = navController)}

}

@Composable
fun ProfileIcon(){
    Column(modifier = Modifier
        .fillMaxWidth()
        .padding(vertical = 24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Icon(painter = painterResource(id = R.drawable.profile_round_1342_svgrepo_com), contentDescription =  "PauseSong", modifier = Modifier.size(size = 100.dp))
        Spacer(modifier = Modifier.height(16.dp))
        Text(text = "Username")
        Text(text = "User Id")
    }
}