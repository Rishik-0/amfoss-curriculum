package com.example.melofiapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.melofiapp.ui.theme.MelofiAppTheme
import screens.HomeScreen
import screens.LoginScreen
import screens.MusicPlayerScreen
import screens.PlaylistScreen
import screens.PlaylistsScreen
import screens.SearchScreen
import screens.SettingsScreen
import screens.SignupScreen

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MelofiAppTheme {
                var navController = rememberNavController()
                NavHost(navController = navController, startDestination = "LoginScreen") {
                    composable("LoginScreen") {
                        LoginScreen(navController = navController)
                    }
                    composable("HomeScreen") {
                        HomeScreen(navController = navController)
                    }
                    composable("SignupScreen") {
                        SignupScreen(navController = navController)
                    }
                    composable("SearchScreen") {
                        SearchScreen(navController = navController)
                    }
                    composable("PlaylistsScreen") {
                        PlaylistsScreen(navController = navController)
                    }
                    composable("PlaylistScreen") {
                        PlaylistScreen(navController = navController)
                    }
                    composable("SettingsScreen") {
                        SettingsScreen(navController = navController)
                    }
                    composable("MusicPlayerScreen") {
                        MusicPlayerScreen(navController = navController)
                    }

                }


            }
        }
    }
}



