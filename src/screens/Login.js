import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user); // Add this console.log statement
        setIsSignedIn(true); // Update the signed-in state
        alert("Welcome to Plants Valley");
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("Sign-in error:", error); // Add this console.log statement
        alert("Failed to sign in: " + error.message);
      });
  };
  

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsSignedIn(false); // Update the signed-in state
        alert("Signed out successfully");
      })
      .catch((error) => {
        alert("Failed to sign out: " + error.message);
      });
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true); // Update the signed-in state
        navigation.navigate("Home");
      } else {
        setIsSignedIn(false); // Update the signed-in state
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <View style={styles.headerImage}>
        <Image
          source={require("../../assets/login-image.png")}
          style={{
            width: "100%",
            height: "60%",
            marginBottom: 10,
            borderBottomLeftRadius: 100,
          }}
        />
        <View style={styles.logoStyle}>
          <Image source={require("../../assets/Picture1.jpg")} />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "#349302",
          }}
        >
          Welcome back to Plants Valley
        </Text>
        <Text style={{ fontSize: 10, textAlign: "center" }}>
          Login to your account
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={{display:"flex", flexDirection:"row",}}>
          <TouchableOpacity
            style={[styles.button, isSignedIn && styles.disabledButton]}
            onPress={login}
            disabled={isSignedIn} // Disable the button if signed in
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, !isSignedIn && styles.disabledButton]}
            onPress={logout}
            disabled={!isSignedIn} // Disable the button if not signed in
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonregister}
        onPress={navigateToRegister}
      >
        <Text style={styles.registernow}>Register Now</Text>
      </TouchableOpacity>
    </>
  );
};


export default Login;



const styles = StyleSheet.create({
  headerImage: {
    flex: 1.6,
    height: 200,
  },
  container: {
    flex: 1.4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: "-10%",
  },
  logoStyle: {
    marginTop: -130,
    alignItems: "center",
  },
  input: {
    flex: 0.15,
    width: "90%",
    marginTop: 3,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderBottomColor: "#349302",
  },
  button: {
    backgroundColor: "#349302",
    marginTop: 3,
    width: "30%",
    padding: -5,
    borderRadius: 20,
    height: 30,
    margin:10,
    backgroundColor: 'rgba(52, 147, 2, 0.9)',
  },
  disabledButton: {
    opacity: 0.6, // Example: reduce opacity for a disabled button
    backgroundColor: "#349302", // Example: change background color for a disabled button
  
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 2,
  },
  registernow: {
    marginLeft: "70%",
    fontWeight: "bold",
    marginTop: -25,
    marginBottom: 15,
  },
});



// import React, { useState,useEffect } from "react";
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
// } from "react-native";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigateToRegister = () => {
//     navigation.navigate("Register");
//   };

//   const login = () => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         alert("Welcome to Palnts Valley");
//         navigation.navigate("Home");
//       } else {
//         alert("Not Singed In");
//       }
//     });
//   };

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         // Perform any necessary actions for a signed-in user
//         // ...

//         // You can redirect to the home screen or perform any other navigation logic here
//         navigation.navigate('Home');
//       } else {
//         // User is not signed in
//         // Display the sign-in form or other authentication UI
//         // ...
//       }
//     });

//     // Cleanup the listener when the component unmounts
//     return () => unsubscribe();
//   }, []);

//   return (
//     <>
//       <View style={styles.headerImage}>
//         <Image
//           source={require("../../assets/login-image.png")}
//           style={{
//             width: "100%",
//             height: "60%",
//             marginBottom: 10,
//             borderBottomLeftRadius: 100,
//           }}
//         />
//         <View style={styles.logoStyle}>
//           <Image source={require("../../assets/Picture1.jpg")} />
//         </View>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             textAlign: "center",
//             color: "#349302",
//           }}
//         >
//           Welcome back to Plants Valley
//         </Text>
//         <Text style={{ fontSize: 10, textAlign: "center" }}>
//           Login to your account
//         </Text>
//       </View>

//       <View style={styles.container}>
//         <TextInput
//           placeholder="Email"
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           placeholder="Password"
//           style={styles.input}
//           secureTextEntry={true}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity style={styles.button} onPress={login}>
//           <Text style={styles.buttonText}>Sign In</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.buttonregister} onPress={login}>
//         <Text style={styles.registernow} onPress={navigateToRegister}>
//           Register Now
//         </Text>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default Login;

