import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import Routes from "./src/Routes";

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}

registerRootComponent(App);
