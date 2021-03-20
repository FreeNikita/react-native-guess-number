import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',

        // shadow for IOS
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,

        // shadow for Android
        elevation: 5,
    },
})