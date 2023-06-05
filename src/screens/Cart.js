import React, { useState } from "react";
import { View,Text,Image,FlatList,StyleSheet,TouchableOpacity,} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


import DATA from "../Data";
import Payment from "./Payment";


const Card = ({image, title, description,price,onPress}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};


const Cart = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItesm]=React.useState([]);

  const gotoPayment = () => {
    navigation.navigate('Payment');
  };

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.cardContainer} >
      <Card  
        image={item.image}
        title={item.title}
        price={item.price}
        onPress={() => addToCart(item)}
        
      />
    </View>
    </View>
  );

  const getTotalPricePayment = () => {
    let price = 0;
    selectedItems.forEach(item => {
      price += item.price; // Assuming each item has a 'price' property
    });
    return price;
  };

  const addToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  };

  const removeItem = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const increaseQuantity = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  };

  const decreaseQuantity = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newCart[index].quantity -= 1;
      if (newCart[index].quantity <= 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  };

  

  const getTotalPrice = () => {
    return  cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
    <View style={{marginHorizontal:"25%", marginTop:3}} >
      <Text style={{fontSize:22, color:"#349302", fontWeight:"700"}}>Pick Your Choice</Text>
    </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.cart}>
        <Text style={styles.cartText}>
          Grand Total: ${getTotalPrice().toFixed(2)}  - 
          <Icon name="cart-arrow-down" size={30} margin="20"/>
            ({cart.reduce((total, item) => total + item.quantity, 0)}) 
        </Text>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.cartItemText}>
                {item.title}:  ${item.price.toFixed(2)} x {item.quantity}
              </Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => decreaseQuantity(item)}
              >
                <Text style={styles.quantityButtonTextMinus}>
                <Icon name="minus-square" size={20} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => increaseQuantity(item)}
              >
                <Text style={styles.quantityButtonText}>
                  <Icon name="plus-square" size={20}/>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeItem(item)}
              >
                <Icon name="trash-o" style={styles.removeButtonText} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
         <TouchableOpacity style={styles.heading} onPress={gotoPayment}>
    <Text>Select Your Payment Method</Text>
    <Icon name='mail-forward' size={20} style={{marginLeft:80, }} />
    </TouchableOpacity>
        
        <Payment totalPrice={getTotalPrice()}  />
   
            </View>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor:"white"
  },
  heading:{
    display:"flex",
    flexDirection:"row",
    fontSize:20,
    color:"white",
    fontWeight: 900,
    backgroundColor:"white",
    padding:5,
    borderRadius:2,
    
  },
  card: {
    flexDirection: "row",
    alignItems: "baseline", // Align content to the baseline
    margin:1,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding:5,
    borderRadius: 5,
    elevation: 3,
    height:100,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
  },
  description: {
    fontSize: 10,
    margin: 3,
  },
  price: {
    fontSize: 10,
    fontWeight: "bold",
    margin: 5,
    
  },
  image: {
    width: 75,
    height: 70,
    margin: 3,
  },
  button: {
    width:75,
    height:20,
    backgroundColor: "#349302",
    padding: 2,
    borderRadius: 5,
    marginTop: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 11,
  },
  cart: {
    marginTop: 10,
    padding: 25,
    backgroundColor: "#349302",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  cartText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:20,
    color: "white",
    alignItems:"center",
    alignContent:"center",
    marginHorizontal:25,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cartItemText: {
    fontSize: 14,
    color:"white",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 17,
  },
  quantityButtonTextMinus:{
    color:"silver",
    fontSize:15,
  },
  quantityButtonText:{
    color:"#ffff00",
    fontSize:15,
  },
  quantityButton:{
    color:"white",
    fontSize:15,
  }  
});
