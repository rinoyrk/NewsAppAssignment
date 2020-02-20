import { StyleSheet, Dimensions, Platform } from 'react-native';


const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.25;
const slideWidth = wp(75);
const categorySlideWidth = wp(50);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const categorySliderWidth = viewportWidth - 20;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const categoryItemWidth = categorySlideWidth + itemHorizontalMargin * 2;


export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
    },
   
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
    },
    
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    imageTextStyle: {
        fontFamily: 'Roboto',
        color: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold',
    }
   
});
