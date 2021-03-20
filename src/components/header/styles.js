import {StyleSheet} from "react-native";
import {THEME} from "../../constants/theme";

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: THEME.color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 18
    }
})