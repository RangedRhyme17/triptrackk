import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {styles} from '../styles/register.js'

export default function Register(props) {
  const { navigation } = props;
  const [selectedImage, setSelectedImage] = useState(null);


  const goToLogin = () => {
    navigation.navigate("Login");
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
      
  };


  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.firstSection}>
            <View>
                <View>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View>
                    <Text style={styles.formTitle}>It takes a few steps</Text>
                </View>
           
                <View style={styles.spacing}>
                    <Text style={styles.label}>Username</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="black"                
                            placeholder="Username"
                        />
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
                        <Text style={styles.label}>Confirm your password</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="black"                
                            placeholder="Confirm Password"
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.spacing}>
                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={pickImage}>Choose your profile picture</Text>
                            {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100 }} />} 
                        </TouchableOpacity>
                    </View>

                </View> 

                    <View style={[styles.spacing, styles.row]}>
                        <Text style={styles.label}>Already have an account? |</Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text style={styles.signUp}>Login</Text>
                        </TouchableOpacity>
                    </View>
      </View>
    </SafeAreaView>
  );
}



