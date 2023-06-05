// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const PlantCard = ({ item, addToCart }) => {
//   const handleAddToCart = () => {
//     addToCart(item);
//   };

//   return (
//     <TouchableOpacity style={styles.container} onPress={() => alert('Plant selected')}>
//       <View style={styles.imageContainer}>
//         <Image source={item.image} style={styles.image} resizeMode="cover" />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.type}>{item.type}</Text>
//         <Text style={styles.description}>{item.description}</Text>
//         <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
//           <Text style={styles.buttonText}>Add to Cart</Text>
//         </TouchableOpacity>
//         <Text style={styles.price}>${item.price}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     width: '100%',
//     height: 150,
//   },
//   textContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   type: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     color: '#999',
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#00C2CB',
//     padding: 10,
//     borderRadius: 5,
//     width:70,
    
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize:8,
//     textAlign: 'center',
//   },
// });

// export default PlantCard;




















// // import React from 'react';
// // import { View, Image, Text, StyleSheet } from 'react-native';

// // const PlantCard = ({ item }) => {
// //   if (!item) {
// //     return null; // return null if item is undefined
// //   }

// //   return (
// //     <View style={styles.card}>
// //       <Image source={item.image} style={styles.image} />
// //       <View style={styles.details}>
// //         <Text style={styles.title}>{item.title}</Text>
// //         <Text style={styles.type}>{item.type}</Text>
// //         <Text style={styles.price}>${item.price}</Text>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   card: {
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //     width: 150,
// //     marginRight: 20,
// //   },
// //   image: {
// //     width: '100%',
// //     height: 150,
// //   },
// //   details: {
// //     padding: 10,
// //   },
// //   title: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   type: {
// //     fontSize: 14,
// //     color: '#777',
// //     marginBottom: 5,
// //   },
// //   price: {
// //     fontSize: 14,
// //     fontWeight: 'bold',
// //     color: '#2ecc71',
// //   },
// // });

// // export default PlantCard;
