import {StyleSheet} from "react-native";
import { THEME } from "../../constants/theme";

export const styles = (dimensions) => StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: dimensions.width < 500 ? dimensions.width * 0.7 : dimensions.width * 0.5,
        height: dimensions.width < 500 ? dimensions.width * 0.7 : dimensions.width * 0.5,
        borderRadius: (dimensions.width * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: dimensions.height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: dimensions.height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: dimensions.height < 400 ? 16 : 20
    },
    highlight: {
        color: THEME.COLOR.PRIMARY,
        fontFamily: 'open-sans-bold'
    }
});