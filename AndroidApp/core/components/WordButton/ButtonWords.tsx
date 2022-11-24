import React, { FC } from "react"
import { Button, View } from "react-native"
import { styles } from "./style"


interface ButtonWithWordsProps {
    word: string
}

export const ButtonWithWords: FC<ButtonWithWordsProps> = ({ word }) => {
    return <Button title={word}/>
}
