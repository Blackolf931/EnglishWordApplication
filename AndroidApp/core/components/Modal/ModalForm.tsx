import React, { useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from './style'

interface ModalFormProps {
    isOpen: boolean,
    setOpen: any
}
const FormModal: React.FC<ModalFormProps> = ({ isOpen, setOpen }) => {
    const [modalVisible, setModalVisible] = useState(isOpen);
    const [englishWord, setEnglishWord] = useState("");
    const [translateWord, setTranslateWord] = useState<string>("");
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput value={englishWord} onChangeText={setEnglishWord} placeholder={"Enter english word"} style={styles.input} />
                        <TextInput value={translateWord} onChangeText={setTranslateWord} placeholder={"Enter translate word"} style={styles.input} />
                        <View style={styles.buttonView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setOpen(false)
                                    // navigation.navigate("Information", { isClose: true })
                                }}
                            >
                                <Text style={styles.textStyle}>Save words</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setOpen(false)
                                    // navigation.navigate("Information", { isClose: true })
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FormModal;