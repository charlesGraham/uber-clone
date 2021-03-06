
import React from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from './screens/MapScreen';
import tw from 'tailwind-react-native-classnames';



export default function App() {

  // prep for "stack" of pages to navigate through
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={tw`flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
              />
              <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
          


          
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider>
    
  );
}

