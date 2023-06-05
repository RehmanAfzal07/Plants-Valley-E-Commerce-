import React,{ useState,useEffect } from "react";
import { TextInput, View,  Image,StyleSheet, Text, } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../services/firebaseConfig';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import Button from "../components/Button";



function Register({navigation}) {
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [IsValid, setIsValid]=React.useState(false);

  const onSubmitPress=()=>{
     
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
 
        const user = userCredential.user;
        console.log(user.uid);
        setDoc(doc(db,'users',user.uid),{email,firstName,lastName})
        .then(dbResponse =>{
          setLoading(false);
          if(dbResponse===true)
          navigation.navigate("Home");
          alert('User is Registerd');
          
        }).catch(dbError =>{
          setLoading(false);
          alert(dbError.message)
        })
        navigation.navigate("Login");
      })
      .catch((authError) => {
       setLoading(false);
       alert(authError.message)
      });
      
  }

 useEffect(()=>{
    checkValidForm()
  },[email,firstName,lastName,password,confirmPassword])
   

  const checkValidForm=()=>{
    if(email === "" && firstName === "" && lastName === "" &&
      password === "" && confirmPassword === "" ){
    setIsValid(false);
    return
    }
    setIsValid(true)
  }  
  


  const onSubmit = () => {
    if (firstName === "") {
      alert("please enter name");
      return;
    }

    if (lastName === "") {
      alert("please enter last name");
      return;
    }

    if (email === "") {
      alert("please enter email");
      return;
    }

    if (password === "") {
      alert("please enter password");
      return;
    }

    if (confirmPassword === "") {
      alert("please enter confirm password");
      return;
    }

    if (confirmPassword !== password) {
      alert("passwords dont match");
      return;
    }

    setLoading(false);
  }
 

  return (
    <View style={Styles.container}>
          <Image source={require('../../assets/login-image.png')} 
      style={{width:"100%", height:"20%",marginBottom:10,  borderBottomRightRadius:200}}
    />
    <Text style={{fontSize:24, fontWeight:800, textAlign:"center", color:"#349302"}}>Welcome to Plants Valley</Text>
     <Text style={{fontSize:10, textAlign:"center" }}>New Registration</Text>
  
      <View style={Styles.formCon}>
        <View style={Styles.form}>
          <TextInput
            onChangeText={setFirstName}
            placeholder="first Name"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setLastName}
            placeholder="last Name"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setEmail}
            placeholder="email"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setPassword}
            placeholder="password"
            style={Styles.inputCon}
          />
          <TextInput
            onChangeText={setConfirmPassword}
            placeholder="confirm Passowrd"
            style={Styles.inputCon}
          />
       
           <View style={{ width:"60%",margin:20, marginHorizontal:70,backgroundColor: 'rgba(52, 147, 2, 0.9)',borderRadius:15,}}>
          
            <Button title="Register"  onPress={()=>{onSubmitPress(); onSubmit();}} disabled={IsValid===false} />
          
          </View> 
           
        </View>
      </View>
    

      <Spinner visible={loading} textContent={"Loading..."} />

      
    </View>
  );
}

export default  Register;


const Styles = StyleSheet.create({
  container:{
      flex:1.5,
      backgroundColor:"white",
  },
  formCon:{
      backgroundColor:"white",
      flex:0.8,
  },
  inputCon:{
    width: "85%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding:10,
    margin:25,
    borderWidth:2,
    borderBottomColor:"#349302",
  },
    registerButton:{
      color:"white",
      height:40,
      margin:30,
      backgroundColor: "#349302",
      width:"80%",
      padding:10,
      borderRadius: 20,
      alignItems:"center",
    },
  
})































// import React, { useState, useEffect } from "react";
// import { TextInput, View, Button, Image, StyleSheet, Text } from "react-native";
// import Spinner from 'react-native-loading-spinner-overlay';
// import { auth, db } from '../services/firebaseConfig';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";

// function Register({ navigation }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isValid, setIsValid] = useState(false);

//   const onSubmitPress = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//       // Signed in
//       const user = userCredential.user;

//       // Add user registration data to Firestore
//       await addDoc(collection(db, "users"), {
//         firstName: firstName,
//         lastName: lastName,
//         email: email
//       });

//       navigation.navigate("Login");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // Handle error
//     }
//   }

//   useEffect(() => {
//     checkValidForm();
//   }, [email, firstName, lastName, password, confirmPassword])

//   const checkValidForm = () => {
//     if (email === "" && firstName === "" && lastName === "" &&
//       password === "" && confirmPassword === "") {
//       setIsValid(false);
//       return;
//     }
//     setIsValid(true);
//   }

//   const onSubmit = () => {
//     if (firstName === "") {
//       alert("Please enter a first name");
//       return;
//     }

//     if (lastName === "") {
//       alert("Please enter a last name");
//       return;
//     }

//     if (email === "") {
//       alert("Please enter an email");
//       return;
//     }

//     if (password === "") {
//       alert("Please enter a password");
//       return;
//     }

//     if (confirmPassword === "") {
//       alert("Please enter a confirm password");
//       return;
//     }

//     if (confirmPassword !== password) {
//       alert("Passwords don't match");
//       return;
//     }

//     setLoading(false);
//   }

//   return (
//     <View style={Styles.container}>
//       <Image
//         source={require('../../assets/login-image.png')}
//         style={{ width: "100%", height: "20%", marginBottom: 10, borderBottomRightRadius: 200 }}
//       />
//       <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#349302" }}>Welcome to Plants Valley</Text>
//       <Text style={{ fontSize: 10, textAlign: "center" }}>New Registration</Text>

//       <View style={Styles.formCon}>
//         <View style={Styles.form}>
//           <TextInput
//            onChangeText={setFirstName}
// placeholder="First Name"
// style={Styles.inputCon}
// />
// <TextInput
//          onChangeText={setLastName}
//          placeholder="Last Name"
//          style={Styles.inputCon}
//        />
// <TextInput
//          onChangeText={setEmail}
//          placeholder="Email"
//          style={Styles.inputCon}
//        />
// <TextInput
//          onChangeText={setPassword}
//          placeholder="Password"
//          style={Styles.inputCon}
//        />
// <TextInput
//          onChangeText={setConfirmPassword}
//          placeholder="Confirm Password"
//          style={Styles.inputCon}
//        />
//  <Button
//         title="Register"
//         onPress={() => { onSubmitPress(); onSubmit(); }}
//         disabled={!isValid}
//       />
//     </View>
//   </View>

//   <Spinner visible={loading} textContent={"Loading..."} />

// </View>
// );
// }

// export default Register;