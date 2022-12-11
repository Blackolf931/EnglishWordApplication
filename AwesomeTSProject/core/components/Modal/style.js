import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.45,
        shadowRadius: 4,
        elevation: 5,
        width: '70%',
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: '5%',
        marginLeft: '2%',
        width: '50%'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        marginBottom: '2%'
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'flex-start'
    }
});