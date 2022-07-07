import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';


const Home = (props) => {
    const description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";


  
    return (
    <View style={styles.container}>

    <View style={styles.homeTop}>
    <Image 
    resizeMode="contain"
    style={styles.image} source={require("../../assets/educationtwo.jpg")} />

    <Text style={[styles.textStyle, {color:"blue", marginTop:20}]}>Welcome </Text>

    <Text style={[styles.textStyle, {color:"black"}] }> {props.channelName}</Text>

    <Text style={styles.description }> {description}</Text>

    </View>

    <View style={styles.menu }>
    <Menu/>
    </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    height:"100%",
    display:"flex",
    justifyContent:"space-between",
    backgroundColor: '#fff',
    textAlign:"center",
    paddingHorizontal:20

  },
image: {
  height:undefined,
  width:"100%",
  display:"flex",
  
  aspectRatio:1,
  marginTop:50,
  borderRadius:20



  },
  textStyle: {
    
    alignContent:"center",
    
    textAlign:"center",
    fontFamily:"JosefinSans_400Regular",
    marginHorizontal:20,
    fontSize:25,
    color:"#344055",
    textTransform:"uppercase"


  },
 homeTop:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  paddingBottom:20,
  paddingHorizontal:10



  },

  description:{
    textAlign:"left",
    fontSize:19,
    fontFamily:"JosefinSans_400Regular",
    color:"#7d7d7d7d",
    marginTop:30


  },

  menu:{
    
   marginBottom:20


  }


});

export default Home;