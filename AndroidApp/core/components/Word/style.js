import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f4511e',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'normal',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc00cc',
  },

  checkButtonView: {
    marginTop: '5%',
    width: '50%',
  },

  app: {
    flex: 1, 
    marginTop: '50%',
    // the number of columns you want to devide the screen into
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#d4785b',
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    width: '85%'
  },

  touchableText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'normal',
    fontSize: 20,
    color: 'black'
  },
  rightButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  incorrectButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  correctAnswer:{
    backgroundColor: 'green',
  },
  incorrectAnswer:{
    backgroundColor: 'red',
  }

})

