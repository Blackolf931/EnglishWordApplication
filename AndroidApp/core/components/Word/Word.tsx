import React, {useEffect} from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import {WordsData} from '../../interfaces/Word';
import {styles} from './style';
import {FlatGrid} from 'react-native-super-grid';
import {Button} from 'react-native-paper';

interface WordProps {
  word: WordsData;
  numberQuestion: any;
  setIndex: any;
}

export const Word: React.FC<WordProps> = ({word, numberQuestion, setIndex}) => {
  const [rightButtonIndex, setRightButtonIndex] = useState(0);
  useEffect(() => {
    word.translatedWords.map((x, indexRightAnswer) => {
      if (x == word.translatedWord) {
        setRightButtonIndex(indexRightAnswer), console.log(indexRightAnswer);
      }
    });
  }, [word]);

  const [state, setState] = useState({
    isRightAnswer: false,
    disabled: false,
    buttonKey: -1,
  });

  const checkanswer = (chosenWord: string, buttonIndex: number) => {
    if (chosenWord === word.translatedWord) {
      setState({isRightAnswer: true, disabled: true, buttonKey: buttonIndex});
    } else {
      setState({isRightAnswer: false, disabled: true, buttonKey: buttonIndex});
    }
  };

  return (
    <View style={styles.app}>
      <Text style={styles.text}>{word.englishWord}</Text>
      <FlatGrid
        itemDimension={130}
        data={word.translatedWords}
        renderItem={({item, index}) => (
          <Button
            key={index}
            mode="contained"
            disabled={state.disabled}
            onPress={() => checkanswer(item, index)}
            contentStyle={
              state.buttonKey === index && state.isRightAnswer
                ? styles.correctAnswer
                : state.buttonKey === index && !state.isRightAnswer
                ? styles.incorrectAnswer
                : rightButtonIndex === index && state.disabled === true
                ? styles.correctAnswer
                : styles.buttons
            }>
            {item}
          </Button>
        )}
      />
      <Button
        onPress={() => {
          setIndex(numberQuestion + 1);
        }}>
        {' '}
        Next Word
      </Button>
    </View>
  );
};
