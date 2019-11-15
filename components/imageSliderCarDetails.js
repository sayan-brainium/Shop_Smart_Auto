import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../components/productDetails_Style/slideEntryStyle';
import { SliderEntry } from '../components/productDetails_Style/slideEntry';
import styles from '../components/productDetails_Style/indexStyle';
import { CARDETAILSENTRIES } from '../components/productDetails_Style/carDetailsEntries'

const SLIDER_1_FIRST_ITEM = 0;

export default class CarDetailsImageSlider extends React.Component {

  state = {
    slider1ActiveSlide: SLIDER_1_FIRST_ITEM

  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    console.log("item data",item.title)
    return (
      <SliderEntry
        imageName={item.illustration}
        title={item.title}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  render() {
    const { slider1ActiveSlide } = this.state
    const { pagination } = this.props
    // console.log('pagination',props);
    
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={CARDETAILSENTRIES}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          activeSlideAlignment={'center'}
          inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={ this.props.autoslide === true ?true : false}
          loopClonesPerSide={2}
          autoplay={this.props.autoslide === true ?true : false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
        {this.props.pagination === true ?
          <Pagination
            dotsLength={CARDETAILSENTRIES.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotColor={'yellow'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={"#5A75C1"}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
            activeAnimationType={'spring'}

          />
          : null

        }




      </View>
    );
  }

}

// import React, { Component } from 'react';
// import { StyleSheet, Text, View,Dimensions } from 'react-native';

// import { SliderBox } from 'react-native-image-slider-box';
// import styles from '../Commoms/productDetails_Style/indexStyle';
// import { sliderWidth, sliderheight } from '../Commoms/productDetails_Style/slideEntryStyle';
// const DeviceWidth = Dimensions.get('window').DeviceWidth;
// export default class ImageSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         'https://source.unsplash.com/1024x768/?nature',
//         'https://source.unsplash.com/1024x768/?water',
//         'https://source.unsplash.com/1024x768/?girl',
//         'https://source.unsplash.com/1024x768/?tree'
//       ]
//     };
//   }

//   render() {
//     return (
//       <View style={styles.slideInnerContainer}>
//         <SliderBox
//         style={styles.slideInnerContainer}
//           sliderBoxHeight={sliderheight}
//           sliderBoxWidth={sliderWidth}
//           images={this.state.images}
//           onCurrentImagePressed={index =>
//             console.warn(`image ${index} pressed`)
//           }
//           dotColor="#FFEE58"
//           inactiveDotColor="#90A4AE"
//           paginationBoxVerticalPadding={20}
//           paginationBoxStyle={{
//             position: 'absolute',
//             bottom: 0,
//             padding: 0,
//             alignItems: 'center',
//             alignSelf: 'center',
//             justifyContent: 'center',
//             paddingVertical: 10
//           }}
//           dotStyle={{
//             width: 10,
//             height: 10,
//             borderRadius: 5,
//             marginHorizontal: 0,
//             padding: 0,
//             margin: 0,
//             backgroundColor: 'rgba(128, 128, 128, 0.92)'
//           }}
//           circleLoop
//         />
//       </View>
//     );
//   }
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     // flex: 1
// //   }
// // });