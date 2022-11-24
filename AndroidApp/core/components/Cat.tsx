/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { CatData } from '../interfaces/CatData';

interface CatProps {
  cat: CatData;
}

const Cat: React.FC<CatProps> = ({ cat }) => {
  
  const navigation = useNavigation();
  const [catName] = useState<string>(cat?.name);
  const [isHungry, setIsHungry] = useState<boolean>(cat?.isHungry);
  return (
    <View
      style={{
        width: '100%',
        height: '33%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text style={{ textAlign: 'center' }}>
        I am {catName}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please' : 'Thank you!'}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Information', {isClose: true})}
      />
    </View>
  );
};

export default Cat;