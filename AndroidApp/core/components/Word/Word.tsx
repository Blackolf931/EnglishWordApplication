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
        numberOfButton: -1,
        isRightAnswer: false,
        disabled: false
    });

    const checkanswer = (chosenWord: string, numberOfButton: number) => {
        console.log(chosenWord)
        if (chosenWord === word.translateWord) {
            setState({ numberOfButton: numberOfButton, isRightAnswer: true, disabled: true });
        } else {
            setState({ numberOfButton: numberOfButton, isRightAnswer: false, disabled: true });
        }
    }

    return (
        <View style={styles.app}>
            <Text style={styles.text}>{word.englishWord}</Text>
            <FlatGrid
                itemDimension={130}
                data={word.translatedWords}
                renderItem={({ item }) => (
                <TouchableOpacity key={index} disabled={state.disabled} onPress={() => checkanswer(item, 0)} 
                style={state.numberOfButton === 0 && state.isRightAnswer ? styles.rightButton : !state.isRightAnswer && state.numberOfButton === 0 ? styles.incorrectButton : styles.buttons}>
                    <Text style={styles.touchableText}>{item}</Text>
                </TouchableOpacity>)}
            />
            <Button
                title="Next Word" onPress={() => { setIndex(++index) }} />
        </View>
    )
}