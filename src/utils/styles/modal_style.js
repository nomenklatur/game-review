import { StyleSheet } from "react-native";

export const modalStyle  = StyleSheet.create({
    modalToggle: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center'
    },
    modalClosed: {
      marginTop: 20,
      marginBottom: 0
    },
    modalContent: {
      flex: 1
    }
  });