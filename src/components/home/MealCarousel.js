import React, { useRef, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, Image, Pressable } from 'react-native';
import ViewPropTypes from 'deprecated-react-native-prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AppText from '../../utils/components/AppText'
import MealModal from './MealModal';

const SLIDER_WIDTH = Dimensions.get('window').width + 30;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const MealCarousel = ({ meals }) => {
  const [index, setIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const chefRecommendedMeals = meals.filter((item) => {
    return item.recommended === true;
  })
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <Pressable className=' bg-transparent items-center' onPress={handlePress}>
        <Image className='object-cover h-full w-full rounded-xl' source={{url: item.photo}} />
        <AppText className='absolute text-center top-4 left-5 text-white text-xl'>{item.name}</AppText>
      </Pressable>
    )
  };

  const handlePress = () => {
    // console.log('pressed!')
    carouselRef.current.stopAutoplay();
    setIsClicked(true);
  };


  return (
    <View className="flex-1 justify-center">
      <View className='h-44'>
        <Carousel
          ref={(c) => (carouselRef.current = c)}
          data={chefRecommendedMeals}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          loop={true}
          autoplay={true}
          autoplayInterval={4000}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={chefRecommendedMeals.length}
          activeDotIndex={index}
          carouselRef={carouselRef}
          dotStyle={{
            width:10,
            height:10,
            borderRadius:10,
            marginHorizontal: 5,
            backgroundColor: 'white'
          }}
        />
        {isClicked && <MealModal />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center'
  }
})

export default MealCarousel;