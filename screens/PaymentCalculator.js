import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, StyleSheet, ProgressBarAndroid, Text, ImageBackground, TouchableOpacity, StatusBar, View, Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { LinearGradient } from 'expo-linear-gradient';
import CustomMarker from './../components/customSlider'

export default function PaymentCalculator() {
  const [sliderOneChanging, setSliderOneChanging] = useState(false);
  const [sliderTwoChanging, setSliderTwoChanging] = useState(false);
  const [sliderThreeChanging, setSliderThreeChanging] = useState(false);
  const [sliderFourChanging, setSliderFourChanging] = useState(false);
  const [sliderOneValue, setSliderOneValue] = useState([0]);
  const [sliderTwoValue, setSliderTwoValue] = useState([0]);
  const [sliderThreeValue, setSliderThreeValue] = useState([0]);
  const [sliderFourValue, setSliderFourValue] = useState([0]);

  sliderOneValuesChangeStart = () => {
    setSliderOneChanging(true);
  };

  sliderTwoValuesChangeStart = () => {
    setSliderTwoChanging(true);
  };

  sliderThreeValuesChangeStart = () => {
      setSliderThreeChanging(true);
  };
  sliderFourValuesChangeStart = () => {
    setSliderFourChanging(true);
};

  sliderOneValuesChange = values => {
    console.log("hellotune:", values)
    let newValues = [0];
    newValues[0] = values[0];
    setSliderOneValue({
      sliderOneValue: newValues,
    });
  };

  sliderTwoValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    setSliderTwoValue({
      sliderTwoValue: newValues,
    });
  };

  sliderThreeValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    setSliderThreeValue({
      sliderThreeValue: newValues,
    });
  };
  sliderFourValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    setSliderFourValue({
      sliderFourValue: newValues,
    });
  };

  sliderOneValuesChangeFinish = () => {
    setSliderOneChanging(false);
  };

  sliderTwoValuesChangeFinish = () => {
    setSliderTwoChanging(false);
  };

  sliderThreeValuesChangeFinish = () => {
    setSliderThreeChanging(false);
  };
  sliderFourValuesChangeFinish = () => {
    setSliderFourChanging(false);
  };
  return (
    <>

      <ScrollView style={styles.container}>

        <View style={{ marginHorizontal: 40, marginBottom: 20, marginTop: 30 }}>
          <Text style={{ marginBottom: 8, fontSize: 14, color: '#535353' }}>APR</Text>
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: -8 }}>
            <MultiSlider
              values={sliderOneValue}
              sliderLength={300}
              onValuesChangeStart={sliderOneValuesChangeStart}
              onValuesChange={sliderOneValuesChange}
              onValuesChangeFinish={sliderOneValuesChangeFinish}
              customMarker={CustomMarker}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: 40, marginBottom: 20 }}>
          <Text style={{ marginBottom: 8, fontSize: 14, color: '#535353' }}>Term</Text>
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: -8 }}>
            <MultiSlider
              values={sliderTwoValue}
              sliderLength={300}
              onValuesChangeStart={sliderTwoValuesChangeStart}
              onValuesChange={sliderTwoValuesChange}
              onValuesChangeFinish={sliderTwoValuesChangeFinish}
              customMarker={CustomMarker}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: 40, marginBottom: 20 }}>
          <Text style={{ marginBottom: 8, fontSize: 14, color: '#535353' }}>Down Payment</Text>
           <View style={{ alignItems: "center", justifyContent: "center", marginTop: -8 }}>
          <MultiSlider
            values={sliderThreeValue}
            sliderLength={300}
            onValuesChangeStart={sliderThreeValuesChangeStart}
            onValuesChange={sliderThreeValuesChange}
            onValuesChangeFinish={sliderThreeValuesChangeFinish}
            customMarker={CustomMarker}
          />
          </View>
        </View>
      <View style={{ marginHorizontal: 40, marginBottom:20 }}>
        <Text style={{ marginBottom: 8, fontSize: 14, color: '#535353' }}>Trade in</Text>
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: -8 }}>
          <MultiSlider
            values={sliderFourValue}
            sliderLength={300}
            onValuesChangeStart={sliderFourValuesChangeStart}
            onValuesChange={sliderFourValuesChange}
            onValuesChangeFinish={sliderFourValuesChangeFinish}
            customMarker={CustomMarker}
          />
          </View>
      </View>
      <View style={{ marginBottom: 20, alignSelf: 'center' }}>
        <TouchableOpacity style={{ height: 65, width: 170, borderWidth: 1, borderColor: '#e4e4e4', borderRadius: 5, justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center', fontSize: 16, color: '#535353' }}>Payment : $298</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </>
  );
}

PaymentCalculator.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    'Payment Calculator'
  ),

  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    fontSize: '18',
    fontWeight: 'bold',
    // marginTop: -10,
    // height:50
    height: Platform.OS === 'android' ? 30 : 55,
    marginTop: Platform.OS === 'ios' ? -10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 0 : 25,
    ...Platform.select({
      ios: { backgroundColor: '#0e3ba0' },
      android: { backgroundColor: '#0e3ba0' }
    }),
  },
  // headerLeft: (
  //   <TouchableOpacity>
  //     <ImageBackground
  //           style={{ width: 20, height: 20,marginTop:3,position:'relative',color: '#fff' }}
  //           source={require('../assets/images/back_icon.png')}>
  //         </ImageBackground>
  //     {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
  //   </TouchableOpacity>
  // ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20, color: '#fff' }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HeaderSearch')}>
        <Icon name="ios-search" style={{ paddingRight: 20 }} size={25} color="#fff" />
      </TouchableOpacity>

    </View>
  ),

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  sliders: {
    margin: 10,
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});
