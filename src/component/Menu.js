import { StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const Menu = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.menu}>
            <TouchableOpacity

                onPress={() => navigation.navigate("Course")}>
                <Image  style={styles.Imagestyle} source={{ uri: "https://img.icons8.com/color/344/cross-country-skiing.png" }} />


            </TouchableOpacity>

            <TouchableOpacity

                onPress={() => navigation.navigate("Contact")}>
                <Image  style={styles.Imagestyle} source={{ uri: "https://img.icons8.com/cotton/344/christmas-deer--v1.png" }} />


            </TouchableOpacity>

            <TouchableOpacity

                onPress={() => navigation.navigate("UserData")}>
                <Image  style={styles.Imagestyle} source={{ uri: "https://img.icons8.com/fluency/344/santa.png" }} />


            </TouchableOpacity>


            <TouchableOpacity

                onPress={() => navigation.navigate("About")}>
                <Image  style={styles.Imagestyle} source={{ uri: "https://img.icons8.com/color-glass/344/unpack-luggage.png" }} />


            </TouchableOpacity>

        </View>
    );
}



const styles = StyleSheet.create({

    menu: {

        flexDirection: "row",
        textAlign: "center",

        justifyContent: "space-evenly",



    },

    Imagestyle: {

       width:"100%",
       height:40,
       aspectRatio:1





    }

})

export default Menu;