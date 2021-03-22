import React, {useEffect, useState} from 'react';
import {
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';

import {
    Card,
    Input,
    NumberContainer,
    BodyText,
    TitleText,
    MainButtonAndroid,
} from '../../components/common'
import { THEME } from '../../constants/theme';
import { styles as style } from './styles'

export const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [dimensions, setDimensions] = useState(Dimensions.get('window'))
    const styles = style(dimensions)

    useEffect(() => {
        const updateLayout = () => setDimensions(Dimensions.get('window'))

        Dimensions.addEventListener('change', updateLayout)
        return () => Dimensions.addEventListener('change', updateLayout)
    })

    const numberInputHandler = inputText =>
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButtonAndroid onPress={() => props.onStartGame(selectedNumber)}>
                    START GAME
                </MainButtonAndroid>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior='position'
                keyboardVerticalOffset={30}
            >
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                >
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a New Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a Number</BodyText>
                            <Input
                                style={styles.input}
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    <Button
                                        title="Reset"
                                        onPress={resetInputHandler}
                                        color={THEME.COLOR.SECONDARY}
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Confirm"
                                        onPress={confirmInputHandler}
                                        color={THEME.COLOR.PRIMARY}
                                    />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
