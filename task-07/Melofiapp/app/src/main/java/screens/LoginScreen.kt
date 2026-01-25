package screens

import android.R.attr.fontFamily
import android.R.attr.label
import android.R.attr.onClick
import android.R.attr.singleLine
import android.R.attr.text
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Color.Companion.Cyan
import androidx.compose.ui.res.colorResource
import androidx.navigation.NavHostController
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlin.math.sign


@Composable
fun LoginScreen(navController: NavHostController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFEFEFDF)),

        verticalArrangement =Arrangement.Center,
        horizontalAlignment =Alignment.CenterHorizontally,



    ) {
    Text(text = "WELCOME BACK", fontSize = 30.sp)
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
        ElevatedButton(
            modifier = Modifier.padding(20.dp),
            onClick = {navController.navigate("HomeScreen")},
            colors = ButtonDefaults.elevatedButtonColors(
                containerColor = Color(0xFCEFF5EE),
                contentColor = Color.Black,
            )

        ) {
            Text("SIGN IN")
        }
        Text(text = "OR", fontSize = 15.sp)
        ElevatedButton(
            modifier = Modifier.padding(20.dp),
            onClick = {navController.navigate("SignupScreen")},
            colors = ButtonDefaults.elevatedButtonColors(
                containerColor = Color(0xFCEFF5EE),
                contentColor = Color.Black,
            )
        ) {
            Text("SIGN UP")
        }

    }
}