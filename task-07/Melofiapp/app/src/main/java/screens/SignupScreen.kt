package screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
@Composable

fun SignupScreen(navController: NavHostController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFEFEFDF)),

        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,



        ) {
        Text(text = "Signup")
        var email by remember{ mutableStateOf("") }
        OutlinedTextField(
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color(0xFCEFF5EE),
                unfocusedContainerColor = Color(0xFCEFF5EE)
            ),
            value = email,
            onValueChange = {
                    newEmail -> email = newEmail
            },
            label = {
                Text(text = "E-mail")
            },
            singleLine = true,
        )
        Spacer(modifier = Modifier.height(16.dp))
        var username by remember{ mutableStateOf("") }
        OutlinedTextField(
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color(0xFCEFF5EE),
                unfocusedContainerColor = Color(0xFCEFF5EE)
            ),
            value = username,
            onValueChange = {
                    newUsername -> username = newUsername
            },
            label = {
                Text(text = "Username")
            },
            singleLine = true,
        )
        Spacer(modifier = Modifier.height(16.dp))
        var password by remember{ mutableStateOf("") }
        OutlinedTextField(
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color(0xFCEFF5EE),
                unfocusedContainerColor = Color(0xFCEFF5EE)
            ),
            value = password,
            onValueChange = {
                    newPassword -> password = newPassword
            },
            label = {
                Text(text = "Password")
            },
            singleLine = true,
        )
        Spacer(modifier = Modifier.height(16.dp))
        var repassword by remember{ mutableStateOf("") }
        OutlinedTextField(
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = Color(0xFCEFF5EE),
                unfocusedContainerColor = Color(0xFCEFF5EE)
            ),
            value = repassword,
            onValueChange = {
                    newRePassword -> repassword = newRePassword
            },
            label = {
                Text(text = "Password")
            },
            singleLine = true,
        )
        ElevatedButton(
            modifier = Modifier.padding(20.dp),
            onClick = {navController.navigate("LoginScreen")},
            colors = ButtonDefaults.elevatedButtonColors(
                containerColor = Color(0xFCEFF5EE),
                contentColor = Color.Black,
            )

        ) {
            Text("SIGN IN")
        }

}}