import React, {FC} from 'react';
import {Button} from 'react-native';

interface ButtonWithWordsProps {
  word: string;
}

export const ButtonWithWords: FC<ButtonWithWordsProps> = ({word}) => {
  return <Button title={word} />;
};
