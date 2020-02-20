import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component {


    get image () {
        const {  image, url } = this.props;

        return (
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
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