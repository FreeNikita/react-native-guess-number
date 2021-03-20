import React from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles";

export const Header = () => (
    <View style={styles.header}>
        <Text style={styles.title}>Guess number</Text>
    </View>
)
