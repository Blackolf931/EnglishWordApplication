import React, { FC, useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { ButtonWithWords } from "../WordButton/ButtonWords"
import { styles } from "./style"

interface WordsProps {
    englishWord: string,
    translateWord: string,
    translatedWords: string[]
}

export const Words: FC<WordsProps> = () => {

    const [firstWordPair, setFirstPair] = useState<string[]>([]);
    const [secondWordPair, setSecondPair] = useState<string[]>([]);
    const [englishWord, setEnglishWord] = useState<string>("");

    const getWords = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
          } catch (error) {
            console.error(error);
          } finally {
           // setLoading(false);
          }
        // try {
        //     const response = fetch('http://http://localhost:5000/EnglishWord/GetALL', {
        //         method: 'GET', headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     });
        // } catch (error) {
        //     console.error(error)
        // }
        // finally {
        // }
    }


    const words = useState<WordsProps[]>([
        { englishWord: "test1", translateWord: "test1", translatedWords: ["test1", "test2", "test3"] },
        { englishWord: "test2", translateWord: "test2", translatedWords: ["test1", "test2", "test3"] },
        { englishWord: "test3", translateWord: "test3", translatedWords: ["test1", "test2", "test3"] },
        { englishWord: "test4", translateWord: "test4", translatedWords: ["test1", "test2", "test3"] },
    ]);
    const [data, setData] = useState<WordsProps>(words[0].shift());
    console.log(words)
    useEffect(() => {
        getWords();
        // data?.translatedWords.push(data.translateWord)
        //setFirstPair(data.translatedWords.slice(0, 2))
        //setSecondPair(data.translatedWords.slice(2))
    }, [])
    return (

        <View style={styles.centeredView}>
            <Text style={styles.text}>{data?.englishWord}</Text>
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
                title="Next Word" onPress={() => { }}>
            </Button>
        </View>
    )
}