import React, { Component } from 'react';
import { Platform, View, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../elements/SliderEntry';

const SLIDER_1_FIRST_ITEM = 1;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.25;


class MainCarousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem = ({item, index}) => {
        return <SliderEntry image={item.image} url={item.url} even={(index + 1) % 2 === 0} />;
    }

    render () {
        const banner_items = this.props.banners;
        const {slider1ActiveSlide} = this.state;
        return (
            <View style={styles.viewContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={banner_items}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={banner_items.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'#bd0000'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.white}
                  inactiveDotOpacity={1}
                  inactiveDotScale={1}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
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

export default MainCarousel;
