import React from 'react';
import {View, Text, Platform} from "react-native";
import { styles } from "./styles";

export const Header = () => (
    <View
        style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid,
            })
        }}
    >
        <Text style={styles.title}>Guess number</Text>
    </View>
)
