import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import HomeScreen from './core/components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatInformation } from './core/components/CatInformation';
import { Cafe } from './core/components/Cafe';
import AppLoading from 'expo-app-loading';
import { Words } from './core/components/Words/Words';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';


const Stack = createNativeStackNavigator();

const App = () => {
  const [font, setFont] = useState(true);
  if (font) {
    return (
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home"
              component={HomeScreen}
              options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }} />
            <Stack.Screen name="Information" component={CatInformation} />
            <Stack.Screen name="Cafe" component={Cafe} />
            <Stack.Screen name="Words" component={Words} options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  } else {
    return (
      <AppLoading startAsync={images}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    )
  }
};


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const images = async () => {
  await fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(response => response.json())
    .then(json => console.log(json))
}

export default App;