import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';

import {
    BodyText,
    TitleText,
    MainButton
} from '../../components/common'
import {styles as style}from './styles'

export const GameOverScreen = props => {
    const [dimensions, setDimensions] = useState(Dimensions.get('window'))
    const styles = style(dimensions)

    useEffect(() => {
        const updateLayout = () => setDimensions(Dimensions.get('window'))

        Dimensions.addEventListener('change', updateLayout)
        return () => Dimensions.addEventListener('change', updateLayout)
    })

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/success.png')}
                        // source={{
                        //   uri:
                        //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
                        // }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
                        guess the number{' '}
                        <Text style={styles.highlight}>{props.userNumber}</Text>.
                    </BodyText>
                </View>

                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

