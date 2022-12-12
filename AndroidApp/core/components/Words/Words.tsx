import React, { FC, useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { getAllWordsData } from "../../redux/thunk/wordsThunk"
import { ButtonWithWords } from "../WordButton/ButtonWords"
import { styles } from "./style"
import { WordsData } from "../../interfaces/Word"

interface WordsProps {
    englishWord: string,
    translateWord: string,
    translatedWords: string[],
    title: string
}

export const Words = () => {

    const [firstWordPair, setFirstPair] = useState<WordsData[]>([]);
    const [secondWordPair, setSecondPair] = useState<string[]>([]);
    const [englishWord, setEnglishWord] = useState<string>("");
    const getWords = () => {
        return fetch('http://192.168.0.105:8089/EnglishWord')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    /*   const words = useState<WordsProps[]>([
           { englishWord: "test1", translateWord: "test1", translatedWords: ["test1", "test2", "test3"] },
           { englishWord: "test2", translateWord: "test2", translatedWords: ["test1", "test2", "test3"] },
           { englishWord: "test3", translateWord: "test3", translatedWords: ["test1", "test2", "test3"] },
           { englishWord: "test4", translateWord: "test4", translatedWords: ["test1", "test2", "test3"] },
       ]);*/
    // const [data, setData] = useState<WordsProps>(words[0].shift());
    //console.log(words)
    useEffect(() => {
        getWords();
    }, [])
    return (
        <View style={styles.centeredView}>
            {/* <Text style={styles.text}>{data?.title}</Text> */}
            <Text style={styles.text}>Test12</Text>
            <Text style={styles.text}>{englishWord}</Text>
            <View style={styles.buttonsView}>
                {firstWordPair.map((word, index) => (
                    <View style={styles.buttonView}>
                        <ButtonWithWords word={word} key={index} />
                    </View>
                ))}</View>
            <View style={styles.buttonsView}>
                {secondWordPair.map((word, index) => (
                    <View style={styles.buttonView}>
                        <ButtonWithWords word={word} key={index} />
                    </View>
                ))}
            </View>
            <Button
                title="Next Word" onPress={() => { getWords }}>
            </Button>
        </View>
    )
}

