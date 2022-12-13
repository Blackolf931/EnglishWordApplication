import React from "react";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { WordsData } from "../../interfaces/Word";
import { styles } from "./style";

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
        if (chosenWord === word.translateWord) {
            setState({ numberOfButton: numberOfButton, isRightAnswer: true, disabled: true });
        } else {
            setState({ numberOfButton: numberOfButton, isRightAnswer: false, disabled: true });
        }
    }
    const Col = ({ numRows, children }) => {
        return (
            <View style={styles[`${numRows}col`]}>{children}</View>
        )
    }

    const Row = ({ children }) => (
        <View style={styles.row}>{children}</View>
    )

    return (
        <View style={styles.app}>
            <Row>
                <Text style={styles.text}>{word.englishWord}</Text>
            </Row>
            <Row>
                <Col numRows={2}>
                    <TouchableOpacity key={index} disabled={state.disabled} onPress={() => checkanswer(word.firstTranslatedWord, 0)} style={state.numberOfButton === 0 && state.isRightAnswer ? styles.rightButton : !state.isRightAnswer && state.numberOfButton === 0 ? styles.incorrectButton : styles.buttons}>
                        <Text style={styles.touchableText}>{word.firstTranslatedWord}</Text>
                    </TouchableOpacity>
                </Col>
                <Col numRows={2}>
                    <TouchableOpacity key={index} disabled={state.disabled} onPress={() => checkanswer(word.secondTranslatedWord, 1)} style={state.numberOfButton === 1 && state.isRightAnswer ? styles.rightButton : !state.isRightAnswer && state.numberOfButton === 1 ? styles.incorrectButton : styles.buttons}>
                        <Text style={styles.touchableText}>{word.secondTranslatedWord}</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
            <Row>
                <Col numRows={2}>
                    <TouchableOpacity key={index} disabled={state.disabled} onPress={() => checkanswer(word.thirdTranslatedWord, 2)} style={state.numberOfButton === 2 && state.isRightAnswer ? styles.rightButton : !state.isRightAnswer && state.numberOfButton === 2 ? styles.incorrectButton : styles.buttons}>
                        <Text style={styles.touchableText}>{word.thirdTranslatedWord}</Text>
                    </TouchableOpacity></Col>
                <Col numRows={2}>
                    <TouchableOpacity key={index} disabled={state.disabled} onPress={() => checkanswer(word.fourthTranslatedWord, 3)} style={state.numberOfButton === 3 && state.isRightAnswer ? styles.rightButton : !state.isRightAnswer && state.numberOfButton === 3 ? styles.incorrectButton : styles.buttons}>
                        <Text style={styles.touchableText}>{word.fourthTranslatedWord}</Text>
                    </TouchableOpacity></Col>
            </Row>
            <Row>
                <Button
                    title="Next Word" onPress={() => { setIndex(++index) }} />
            </Row>
        </View>
    )
}