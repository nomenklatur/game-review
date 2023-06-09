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
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
  },
  flexContainer: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    maxHeight: "15%",
  }
});

export const images = {
  ratings: {
    '1': require('../../../assets/images/rating-1.png'),
    '2': require('../../../assets/images/rating-2.png'),
    '3': require('../../../assets/images/rating-3.png'),
    '4': require('../../../assets/images/rating-4.png'),
    '5': require('../../../assets/images/rating-5.png'),
  }
};