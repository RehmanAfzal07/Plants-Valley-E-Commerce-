


import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Recomended, Indoor, Outdoor } from "../components/Collections";
import DATA from "../Data";
import LockScreen from "../components/ScreenLock";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import ImagePicker from 'react-native-image-picker';



const Home = ({ navigation }) => {
  const [currentComponent, setCurrentComponent] = useState("Recomended");
  const [searchValue, setSearchValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [avatarSource, setAvatarSource] = useState(require("../../assets/plants/RehmanAfzal.jpg"));


  const components = {
    Recomended: Recomended,
    Indoor: Indoor,
    Outdoor: Outdoor,
  };

  const onPress = (component) => {
    setCurrentComponent(component);
  };

  const CurrentComponent = components[currentComponent];


  const selectAvatarImage = () => {
    ImagePicker.showImagePicker({ title: "Select Avatar Image" }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  };



  const handleSearch = () => {
    const searchResults = DATA.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (searchResults.length > 0) {
      return (
        <ScrollView horizontal={true}>
          {searchResults.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return <Text>Item not found</Text>;
    }
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };



  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            padding: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
           
           
        <View style={styles.header}>
        <TouchableOpacity onPress={selectAvatarImage} style={styles.avatarContainer}>
            <Avatar size={50} rounded source={avatarSource} />
          </TouchableOpacity>
          
        </View>
        <View>
            <LockScreen isLocked={isLocked} onPress={toggleLock} />
          </View>
        {/* Rest of the code... */}
      
         
        </View>
        <Text style={styles.homeHeading}>Let's Find your Plants!</Text>
        <View style={styles.findPlant}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={{ flex: 1, margin: 2 }}
              placeholder="Searching . . . "
              value={searchValue}
              onChangeText={(text) => setSearchValue(text)}
              editable={!isLocked} // Disable input when screen is locked
            />
            <Icon name="search" size={20} style={{ margin: 10 }} />
          </View>
        </View>

        <View>
          <ScrollView horizontal={true} style={{ marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => onPress("Recomended")}
              style={styles.button}
              disabled={isLocked} // Disable button when screen is locked
            >
              <Text style={styles.buttonText}>Recomended </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress("Indoor")}
              style={styles.button}
              disabled={isLocked} // Disable button when screen is locked
            >
              <Text style={styles.buttonText}>Indoor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPress("Outdoor")}
              style={styles.button}
              disabled={isLocked} // Disable button when screen is locked
            >
              <Text style={styles.buttonText}>Outdoor</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {searchValue.trim() !== "" ? (
          handleSearch()
        ) : isLocked ? (
          <Text>Screen locked</Text>
        ) : (
          <CurrentComponent />
        )}
      </View>

      <View></View>
    </>
  );
};

export default Home;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fff",
  },
  homeHeading: {
    fontWeight: 900,
    fontSize: 38,
    padding: 35,
    marginLeft:20,
    color: "#349302",
  },
  findPlant: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    padding: 5,
    margin: 10,
    borderWidth: 2,
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#349302",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderBottomColor: "#349302",
  },
  avatar: {
    marginLeft: 10,
    width: 15,
    height: 15,
    borderRadius: 5,
  },
  button: {
    margin:3,
    width:"auto",
    backgroundColor: "#349302", 
    padding:10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign:"center",
    fontSize:14,
  },
  addButton: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "green",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width:180,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
   image: {
    width: '90%',
    height: 140,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  price:{
    marginHorizontal:"60%", 
    width:40,
    height:25,
    backgroundColor:"green",
    borderRadius:15,
    marginRight:5,
    color:"white",
    padding:3,
  },
  bold:{
    fontWeight:"700",
    fontSize:15
  }
});























// import React, { useState,useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
// import { Recomended, Indoor, Outdoor } from "../components/Collections";
// import DATA from "../Data";
// import LockScreen from "../components/ScreenLock";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Avatar } from "react-native-elements";
// import { getAuth, signOut } from 'firebase/auth';


// const Home = ({navigation}) => {
//   const [currentComponent, setCurrentComponent] = useState("Recomended");
//   const [searchValue, setSearchValue] = useState("");
//   const components = {
//     Recomended: Recomended,
//     Indoor: Indoor,
//     Outdoor: Outdoor,
//   };

//   const onPress = (component) => {
//     setCurrentComponent(component);
//   };

//   const CurrentComponent = components[currentComponent];

//   const handleSearch = () => {
//     const searchResults = DATA.filter((item) =>
//       item.title.toLowerCase().includes(searchValue.toLowerCase())
//     );

//     if (searchResults.length > 0) {
//       return (
//         <ScrollView 
//           horizontal={true}
//         >
//           {searchResults.map((item) => (
//             <View key={item.id} style={styles.card}>
//             <Image source={item.image} style={styles.image} />
//               <View style={styles.cardContent}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.description}>{item.description}</Text>
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       );
//     } else {
//       return <Text>Item not found</Text>;
//     }
//   };


  

//   return (
//     <>
//       <View style={styles.container}>
//         <View
//           style={{
//             padding: 15,
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           <View style={styles.avatar}>
//            <Avatar
//            size={50}
//            rounded
//             source={require('../../assets/plants/RehmanAfzal.jpg')}
//            />
           
//           </View>

          
          
//         </View>
//         <Text style={styles.homeHeading}>Let's Find your Plants!</Text>
//         <View style={styles.findPlant}>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <TextInput
//               style={{ flex: 1,margin:2,  }}
//               placeholder="Searching . . . "
//               value={searchValue}
//               onChangeText={(text) => setSearchValue(text)}
//             />
//             <Icon name="search" size={20} style={{ margin: 10 }} />
//           </View>
//         </View>

//         <View >
//           <ScrollView horizontal={true} style={{ marginLeft:10,  }}>
//             <TouchableOpacity
//               onPress={() => onPress("Recomended")}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Recomended </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => onPress("Indoor")}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Indoor</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => onPress("Outdoor")}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>Outdoor</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>

//         {searchValue.trim() !== "" ? (
//           handleSearch()
//         ) : (
//           <CurrentComponent />
//         )}
//       </View>

//     </>
//   );
// };

// export default Home;




// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import React from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { TextInput } from "react-native-gesture-handler";
// import { Avatar } from "react-native-elements";
// import { Recomended, Indoor, Outdoor } from "../components/Collections";



// const Home = () => {
//   const [currentComponent, setCurrentComponent] = React.useState("Recomended");
//   const components = {
//     Recomended: Recomended,
//     Indoor: Indoor,
//     Outdoor: Outdoor,
//   };

//   const onPress = (component) => {
//     setCurrentComponent(component);
//   };

//   const CurrentComponent = components[currentComponent];

//   return (
//     <>
//       <View style={styles.container}>
//         <View
//           style={{
//             padding: 15,
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           <View style={styles.avatar}>
//             <Avatar
//               rounded
//               source={{
//                 uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
//               }}
//             />
//           </View>
//           <View style={{}}>
//             <Icon name="lock" size={30} />
//           </View>
//         </View>
//         <Text style={styles.homeHeaing}>Let's Find your Plants!</Text>
//         <View style={styles.findPlant}>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <TextInput
//               style={{ flex: 1, marginLeft: 10, margin: 5 }}
//               placeholder="Search..."
//             />
//             <Icon name="search" size={20} style={{ margin: 10 }} />
//           </View>
//         </View>
      
      
//       <View style={{ margin: 15, }}>
//           <View>
//           <ScrollView horizontal={true} >
//         <TouchableOpacity onPress={() => onPress("Recomended")}
//          style={styles.button}  >
//           <Text style={styles.buttonText}>Recomended </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => onPress("Indoor")}
//         style={styles.button}>
//           <Text style={styles.buttonText}>Indoor</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => onPress("Outdoor")}
//         style={styles.button}>
//           <Text style={styles.buttonText}>Outdoor</Text>
//         </TouchableOpacity>
//         </ScrollView> 
//           </View>     
//         <CurrentComponent />
//         </View >
     
//       </View >
      
//       <View>
       
//       </View>
//     </>
//   );
// };

// export default Home;

























// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   const renderItem = ({ item }) => (
//     <View>
//       <Card  style={styles.item}
//       title={item.title}
//       description={item.description}
//       image={item.image}
//       price={item.price}
//       onPress={() => addToCart(item)}
//     />
//     </View>
//   );

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const removeItem = (item) => {
//     setCart(cart.filter((cartItem) => cartItem.id !== item.id));
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />

//       <View style={styles.cart}>
//         <Text style={styles.cartText}>Cart ({cart.length}) - Total: ${getTotalPrice().toFixed(2)}</Text>
//         <FlatList
//           data={cart}
//           renderItem={({ item }) => (
//             <View style={styles.cartItem}>
//               <Text style={styles.cartItemText}>{item.title} - ${item.price.toFixed(2)}</Text>
//               <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item)}>
//                 <Icon name="trash-o"  style={styles.removeButtonText}/>
//               </TouchableOpacity>
//             </View>
//           )}
//           keyExtractor={item => item.id}
//         />
//       </View>

//     </View>
//   );
// };