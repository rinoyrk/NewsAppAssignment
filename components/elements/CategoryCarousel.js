import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { categorySliderWidth, categoryItemWidth } from '../styles/SliderEntry.style';
import CategoryEntry from './CategoryEntry';

const SLIDER_1_FIRST_ITEM = 1;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.18;


class CategoryCarousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem = ({item, index}) => {
        return <CategoryEntry image={item.image} url={item.url} title={item.title} even={(index + 1) % 2 === 0} />;
    }

    render () {
        const post_items = this.props.posts;
        return (
            <View style={styles.viewContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={post_items}
                  renderItem={this._renderItem}
                  sliderWidth={categorySliderWidth}
                  itemWidth={categoryItemWidth}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={false}
                  loopClonesPerSide={2}
                  autoplay={false}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
            </View>
        );
    }
}


const colors = {
    black: '#1a1917',
    gray: '#888888',
    white: '#ffffff',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    scrollview: {
        flex: 1
    },
    viewContainer: {
        paddingVertical: 30,
    },
    slider: {
        marginTop: 0,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        height: slideHeight,
    },
    paginationContainer: {
        paddingVertical: 8,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: '#ffffff'
    }
});

export default CategoryCarousel;
