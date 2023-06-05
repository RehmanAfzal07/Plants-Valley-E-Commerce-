import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Cart from "../screens/Cart";
import { useNavigation } from "@react-navigation/native";
import DATA from "../Data";

const data1 = [
  {
    id: "1",
    title: "Calathes",
    type: "Indoor",
    description: "This is plant, description of plant is given.",
    price: 30,
    image: require("../../assets/plants/calathes.png"),
  },
  {
    id: "2",
    title: "Zemlucus",
    type: "Indoor",
    description: "This is plant, description of plant is given.",
    price: 25,
    image: require("../../assets/plants/lady-palm.png"),
  },
  {
    id: "3",
    title: "Lady-palm",
    type: "Indoor",
    description: "This is plant, description of plant is given.",
    price: 15,
    image: require("../../assets/plants/zemlucus.png"),
  },
  {
    id: "4",
    title: "Palm-Tree",
    type: "Outdoor",
    description: "This is plant, description of plant is given.",
    price: 12,
    image: require("../../assets/plants/palm-tree.png"),
  },
];

const data2 = [
  {
    id: "1",
    title: "Philo",
    type: "Indoor",
    description: "This is plant, description of plant is given.",
    price: 25,
    image: require("../../assets/plants/philo.png"),
  },
  {
    id: "2",
    title: "Succulent",
    type: "Indoor",
    description: "This is plant, description of plant is given.",
    price: 10,
    image: require("../../assets/plants/succulent.png"),
  },
];
const data3 = [
  {
    id: "1",
    title: "Nascud",
    type: "Outdoor",
    description: "This is plant, description of plant is given.",
    price: 35,
    image: require("../../assets/plants/nascus.png"),
  },
];

const Card = ({ item }) => {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const toggleFavorite = () => {
    navigation.navigate('Favorite', { DATA, itemId: item.id });
  };
  

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleButtonPress = () => {
    navigation.navigate("Cart"); // Replace 'Cart' with the name of your screen component
  };

  return (
    <>
    <View style={styles.card}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.bold}>{item.type}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity title="Go to Details" onPress={handleButtonPress}>
          <Text>
            <Icon name="add-shopping-cart" size={25} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.price}> ${item.price} </Text>
      </View>
      
    </View>
  
     </>
  );
};

const Recomended = () => {
  return (
    <View>
      <FlatList
        data={data1}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Indoor = () => {
  return (
    <View>
      <FlatList
        data={data2}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Outdoor = () => {
  return (
    <View>
      <FlatList
        data={data3}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export { Recomended, Indoor, Outdoor };

const styles = StyleSheet.create({
  card: {
    width: 190,
    backgroundColor: "#f4f4f4",
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
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
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  price: {
    marginHorizontal: "60%",
    width: 40,
    height: 25,
    backgroundColor: "green",
    borderRadius: 15,
    marginRight: 5,
    color: "white",
    padding: 3,
  },
  bold: {
    fontWeight: "700",
    fontSize: 15,
  },
});
