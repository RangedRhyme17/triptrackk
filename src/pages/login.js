import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from '../styles/login.js'

export default function Login(props) {

    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.firstSection}>
                    <Image
                        source={
                           require("../images/ttlogo.jpg")
                        }
                        style={{ width: "100%", height: "120%", resizeMode: "cover" }}
                    />
            
            </View>
               
            <View style={styles.secondSection}>
                
                
                <View>
                <View> 
                    <Text style={styles.ttname}>TripTrack</Text>
                </View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="black"                
                            placeholder="Email..."
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={styles.spacing}> 
                        <Text style={styles.label}>Password</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="black"                
                            placeholder="Password..."
                            secureTextEntry={true} 
                        />
                    </View>
                    
                    <View style={styles.spacing}>
                        <Text style={styles.forgotPassword}>I forgot my password</Text>
                    </View>

                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.spacing, styles.row]}>
                    <Text style={styles.label}>I don't have an account |</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={styles.singup}>Register</Text>
                    </TouchableOpacity>
                </View>
               
            </View>

        </SafeAreaView>
    );
}

