import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import FormModal from "./Modal/ModalForm"

export const CatInformation = () => {
    const [isClicked, setClicked] = useState(false)
    return (
        <View>
            <Text>Information</Text>
            <Button title="Click me" onPress={() => setClicked(!isClicked)} />
            {isClicked && <FormModal isOpen={isClicked} setOpen={setClicked}/>}
        </View>
    )
}