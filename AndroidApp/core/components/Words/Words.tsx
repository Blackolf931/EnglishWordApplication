import React, { useEffect, useState } from "react"
import { Button, View } from "react-native"
import { styles } from "./style"
import { WordsData } from "../../interfaces/Word"
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator"
import { Word } from "../Word/Word"

export const Words = () => {
    const [englishWords, setEnglishWords] = useState<WordsData[]>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const nextWord = () => {
        if (index + 1 < englishWords.length) {
            setIndex(index + 1)
        }
    }

    const getWords = async () => {
        try {
            const response = await fetch('http://192.168.0.105:8089/EnglishWord');
            const words = await response.json();
            console.log(words);
            setEnglishWords(words);
            return words;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getWords();
    }, [])
    return (
        <View style={styles.centeredView}>
            {isLoading ? <LoadingIndicator /> : (
                <View style={{flex: 1}}>
                    <Word word={englishWords[index]} index={index} setIndex={nextWord} key={index} />
                </View>
            )}
        </View>
    )
}

