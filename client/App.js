// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/MainPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import NewCampaign from "./components/NewCampaign";
import CampaignSuccess from "./components/CampaignSuccess";
import Drawer from "./components/Drawer";
import Profile from "./components/Profile";
import TotalDonations from "./components/UserData/TotalDonations";
import MyCampaigns from "./components/UserData/MyCampaigns";
import TotalRecieved from "./components/UserData/TotalRecieved";
import CardDetails from "./components/UserData/CardDetails";
import { UserProvider } from "./components/context/userContext";
import Tech from "./components/category/Tech";
import Medical from "./components/category/Medical";
import Art from "./components/category/Art";
import Music from "./components/category/Music";
import Illustration from "./components/category/Illustration";
import HowItWorks from "./components/DrawerComponents/HowItWorks";
import ContactUs from "./components/DrawerComponents/ContactUs";
import Donate from "./components/Donate/Donate"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainPage"
          component={MainPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LandingPage"
          component={LandingPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NewCampaign"
          component={NewCampaign}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CampaignSuccess"
          component={CampaignSuccess}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Drawer"
          component={Drawer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyCampaigns"
          component={MyCampaigns}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TotalDonations"
          component={TotalDonations}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TotalRecieved"
          component={TotalRecieved}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CardDetails"
          component={CardDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tech"
          component={Tech}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Medical"
          component={Medical}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Art"
          component={Art}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Music"
          component={Music}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Illustration"
          component={Illustration}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HowItWorks"
          component={HowItWorks}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ContactUs"
          component={ContactUs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Donate"
          component={Donate}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}

export default App;
