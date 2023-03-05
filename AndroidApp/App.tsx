import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import HomeScreen from './core/components/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CatInformation} from './core/components/CatInformation';
import {Cafe} from './core/components/Cafe';
import AppLoading from 'expo-app-loading';
import {Words} from './core/components/Words/Words';

const Stack = createNativeStackNavigator();

const App = () => {
  const [font, setFont] = useState(true);
  if (font) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
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
            }}
          />
          <Stack.Screen name="Information" component={CatInformation} />
          <Stack.Screen name="Cafe" component={Cafe} />
          <Stack.Screen
            name="Words"
            component={Words}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading onFinish={() => setFont(true)} onError={console.warn} />;
  }
};

export default App;
