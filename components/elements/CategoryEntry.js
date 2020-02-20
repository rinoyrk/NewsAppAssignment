import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/SliderEntry.style';

export default class CategoryEntry extends Component {


    get image () {
        const {  image, url, title } = this.props;

        return (
            <ImageBackground source={{ uri: image }} style={styles.imageStyle}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.imageTextStyle}>{title}</Text>
                </View>
            </ImageBackground>
        );
    }

    render () {
        const {  url, title } = this.props;

       

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { Linking.openURL(url) }}
              >
                <View style={styles.shadow} />
                <View style={styles.imageContainer}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>
                
            </TouchableOpacity>
        );
    }
}