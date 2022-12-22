import React from "react";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { WordsData } from "../../interfaces/Word";
import { styles } from "./style";
import { FlatGrid } from 'react-native-super-grid';

interface WordProps {
    word: WordsData,
    index: any,
    setIndex: any,
}

export const Word: React.FC<WordProps> = ({ word, index, setIndex }) => {
    const [state, setState] = useState({
        isRightAnswer: false,
        disabled: false
    });

    const checkanswer = (chosenWord: string, ) => {
        console.log(chosenWord)
        console.log(word.translateWord)
        if (chosenWord === word.translateWord) {
            setState({ isRightAnswer: true, disabled: true });
            console.log(state.isRightAnswer)
        } else {
            console.log(2);
            setState({ isRightAnswer: false, disabled: true });
        }
    }

    return (
        <View style={styles.app}>
            <Text style={styles.text}>{word.englishWord}</Text>
            <FlatGrid
                itemDimension={130}
                data={word.translatedWords}
                renderItem={({ item }) => (
                <TouchableOpacity key={index} disabled={state.disabled} onPress={() => checkanswer(item)} 
                style={styles.buttons}>
                    <Text style={state.isRightAnswer && state.disabled ? styles.correctAnswer : styles.touchableText}>{item}</Text>
                </TouchableOpacity>)}
            />
            <Button
                title="Next Word" onPress={() => { setIndex(++index) }} />
        </View>
    )
}