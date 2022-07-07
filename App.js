import React from 'react';
import Home from './src/screen/Home';

import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';
import About from './src/About';
import CourseDetail from './src/screen/CourseDetail';

import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,

  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,

} from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [loaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  });

  const Stack = createNativeStackNavigator();

  if(!loaded){
    <AppLoading/>
  }

  return (

    <NavigationContainer>


      <Stack.Navigator initialRouteName="Home"
      options={{
        headerShown:false
      }

      }
      >
        <Stack.Screen 
        name="Home"
        options={{
          headerShown: false,
        }}>
          {(props) => <Home {...props} channelName={"Bhawa Prakash"} />}
        </Stack.Screen>


        <Stack.Screen name="Course" component={Course}

          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily:"JosefinSans_500Medium"
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center"


          }}

        />


        <Stack.Screen
          name="Contact"
          component={Contact}
        />

        <Stack.Screen name="UserData" component={UserData} />


        <Stack.Screen name="About" component={About} />

        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>








  );
}





