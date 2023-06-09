import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { Button } from "react-native-elements";
// import { Text, View, StyleSheet, Pressable } from 'react-native';

import { auth, provider } from "./src/firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
// import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  // console.log("auth", auth);
  // console.log("provider", provider);
  // const [user, setUser] = useState(null);

  // const handleGithubLogin = () => {
  //   console.log("handle function");
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log("result", result);
  //       setUser(result.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <NavigationContainer>
      {/* <TailwindProvider> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* </TailwindProvider> */}

      {/* <View>
      <Text>
        {" "}
        {user ? (
          // show user data with a logout button if we have user
          <>
            <Button title="Logout" onPress={handleLogout} />
            <h3>Welcome {user.displayName}</h3>
            <p>{user.email}</p>
            <div className="photo">
              <img src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
            </div>
          </>
        ) : (
          // otherwise show a button to login user with github
          <Button
            className="bg-black"
            title="Signin"
            onPress={handleGithubLogin}
          />
        )}
      </Text>
    </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "black",
//   },
// });
