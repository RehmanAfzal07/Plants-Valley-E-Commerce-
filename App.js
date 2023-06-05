//---------------------------------Bottom Tab navigation-----------------------//
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Cart from "./src/screens/Cart";
import Payment from "./src/screens/Payment";
import Register from "./src/screens/Register";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Login") {
              iconName = "login";
            } else if (route.name === "Register") {
              iconName = "plussquareo";
            } else if (route.name === "Favorite") {
              iconName = "hearto";
            } else if (route.name === "Cart") {
              iconName = "shoppingcart";
            } else if (route.name === "Payment") {
              iconName = "pay-circle-o1";
            }

            return (
              <Icon
                name={iconName}
                focused={focused}
                size={size}
                color={"green"}
              />
            );
          },
          headerShown: false, // This line hides the header name
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Payment" component={Payment} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigation />
    </NavigationContainer>
  );
};

export default App;























// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Component1, Component2, Component3 } from './src/components/Collections';

// const App = () => {
//   const [currentComponent, setCurrentComponent] = useState('Component1');
//   const components = {
//     Component1: Component1,
//     Component2: Component2,
//     Component3: Component3,
//   };

//   const onPress = (component) => {
//     setCurrentComponent(component);
//   };

//   const CurrentComponent = components[currentComponent];

//   return (
//     <View style={{marginTop:40, width:"100%"}}>
//       <CurrentComponent />
//       <TouchableOpacity onPress={() => onPress('Component1')}>
//         <Text>Component 1 One </Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => onPress('Component2')}>
//         <Text>Component 2 Two</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => onPress('Component3')}>
//         <Text>Component 3 Three</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import MainNavigator from './MainNavigator';
// import {NavigationContainer} from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MainNavigator />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//----------------------------------Tab Navigator----------------------//
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import SettingsScreen from './SettingsScreen';

// const Tab = createBottomTabNavigator();

// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = 'home';
//           } else if (route.name === 'Profile') {
//             iconName = 'user';
//           } else if (route.name === 'Settings') {
//             iconName = 'cog';
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'blue',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainTabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;
