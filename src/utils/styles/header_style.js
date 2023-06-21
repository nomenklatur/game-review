import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1
    },
    icon: {
      position: 'absolute',
      left: 10
    },
    headerImage: {
      width: 26,
      height: 26,
      marginHorizontal: 10
    },
    headerTitle: {
      flexDirection: 'row'
    }
  });