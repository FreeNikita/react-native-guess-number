import {StyleSheet, Platform} from "react-native";
import {THEME} from "../../constants/theme";

export const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: THEME.COLOR.PRIMARY,
        borderBottomColor: "transparent",
        borderBottomWidth: 0,
    },
    title: {
        color: Platform.OS === 'ios' ? THEME.COLOR.PRIMARY : 'white',
        fontSize: 18
    }
})