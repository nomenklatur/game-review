import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  paragraphText: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginHorizontal: 20,
    marginBottom: 10
  },
  button: {
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
  }
});

export const images = {
  ratings: {
    '1': require('../assets/images/rating-1.png'),
    '2': require('../assets/images/rating-2.png'),
    '3': require('../assets/images/rating-3.png'),
    '4': require('../assets/images/rating-4.png'),
    '5': require('../assets/images/rating-5.png'),
  }
};