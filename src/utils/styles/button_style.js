import { StyleSheet } from "react-native";

export function buttonStyleGenerator (buttonColor) {
    const buttonStyle = StyleSheet.create({
        button: {
            flexDirection: "row",
            borderRadius: 8,
            paddingVertical: 14,
            paddingHorizontal: 10,
            backgroundColor: buttonColor,
            marginHorizontal: 20,
            justifyContent: "center"
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 16,
            textAlign: 'center',
        },
        icon: {
            marginRight: 10
        }
    });
    return buttonStyle;
}