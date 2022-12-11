import React, { FC, useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { getAllWordsData } from "../../redux/thunk/wordsThunk"
import { ButtonWithWords } from "../WordButton/ButtonWords"
import { styles } from "./style"
import { useDispatch } from 'react-redux';
import axios from "axios"
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
    const dispatch = useDispatch();
    const getWords = () => {
        // try {
        //     // setEnglishWord('+1');
        //     // console.log(1);
        //     // const response = await fetch('https://127.0.0.1:5001/EnglishWord/GetALL');
        //     // console.log(2);
        //     // const json = await response.json();
        //     // console.log(json)
        //     // setData(json.movies);
        //   } catch (error) {
        //     console.error(error);
        //   } finally {
        //    // setLoading(false);
        //   }
        try {
            const response = fetch('https://localhost:5001/EnglishWord', {
                method: 'GET', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(x=> console.log(x)).catch(error => console.log(error));
        } catch (error) {
            console.error(error)
        }
        finally {
        }
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
        // const result = axios.get('http://localhost:5000/EnglishWord').then((res) => setFirstPair(res.data)).catch((error)=>{
        //     console.log(error);
        // //  });
        // console.log(result);
        console.log(1)
        // dispatch(getAllWordsData())
         console.log(2)
         // data?.translatedWords.push(data.translateWord)
        //setFirstPair(data.translatedWords.slice(0, 2))
        //setSecondPair(data.translatedWords.slice(2))
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
                title="Next Word" onPress={() => {getWords}}>
            </Button>
        </View> 
    )
}

