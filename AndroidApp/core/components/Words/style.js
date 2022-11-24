import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'normal',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%'
    },
    buttonView: {
        marginRight: '2%',
        width: '40%'
    }
})