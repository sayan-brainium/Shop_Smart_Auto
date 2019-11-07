import React from 'react';
import { ScrollView, TextInput, ImageBackground, StyleSheet, Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import TimePicker from "react-native-24h-timepicker";

export default function NewCarScreen() {
  const [value, onChangeText] = React.useState('');
  const [value1, onChangeText1] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [value3, onChangevalue3] = React.useState('');
  const [value4, onChangevalue4] = React.useState('');
  const [value5, onChangeText5] = React.useState('');
  const [timePickerVisible, isDateTimePickerVisible] = React.useState(false)
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('')


  const showDateTimePicker = () => {
    isDateTimePickerVisible(true);
    console.log("this is showDateTimePicker")
  };

  const hideDateTimePicker = () => {
    isDateTimePickerVisible(false);
  };

  const handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    setDate((moment(date).format("DD-MM-YYYY")).toString())
    hideDateTimePicker();
  };
  const onCancel = () => {
   TimePicker.close();
  };

  const onConfirm = (hour, minute) => {
    setTime({ time: `${hour}:${minute}` });
    TimePicker.close();
  };

  return (
    <>

      <ScrollView style={styles.container}>
        {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
        {/* <ExpoLinksView /> */}

        <View>
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="Name"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Email"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => onChangeText2(text)}
            value={value2}
            placeholder="Phone"
            placeholderTextColor="#9fa2a7"
          />

          <View style={{ flexDirection: 'row', borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, }}>
            <View>
              <TextInput
                style={{ height: 40, fontSize: 12, alignContent: 'center' }}
                disableFullscreenUI={false}
                onChangeText={value3 => onChangevalue3(value3)}
                value={date}
                placeholder="What day do you like to schedule a test drive"
                placeholderTextColor="#9fa2a7"
              />
            </View>

            <DateTimePicker
              isVisible={timePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={hideDateTimePicker}
            />

            <View style={{ justifyContent: 'flex-end', marginLeft: 110 }}>
              <TouchableOpacity
                onPress={showDateTimePicker}
              >
                <ImageBackground
                  style={{ width: 15, height: 10, position: 'relative', marginBottom: 5 }}
                  source={require('../assets/images/down_icon.png')}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>


          <View style={{ flexDirection: 'row', borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, }}>
            <View>
              <TextInput
                style={{ height: 40, fontSize: 12, alignContent: 'center' }}
                onChangeText={value4 => onChangevalue4(value4)}
                value={time}
                placeholder="What time do you like to schedule a test drive"
                placeholderTextColor="#9fa2a7"
              />
            </View>

            <TimePicker
              ref={ref => {
              this.TimePicker = ref;
              }}
              onCancel={() =>onCancel()}
              onConfirm={(hour, minute) =>onConfirm(hour, minute)}
            />
            <View style={{ justifyContent: 'flex-end', marginLeft: 105 }}>
              <TouchableOpacity
                onPress={()=>this.TimePicker.open()}
              >
                <ImageBackground
                  style={{ width: 15, height: 10, position: 'relative', marginBottom: 5 }}
                  source={require('../assets/images/down_icon.png')}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>


          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center', }}
            onChangeText={text => onChangeText5(text)}
            value={value5}
            placeholder="Additional info"
            placeholderTextColor="#9fa2a7"
          />
        </View>
        <View>
          <TouchableOpacity >
            <LinearGradient
              colors={['#1e508d', '#3c7a6b', '#67b639']}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.button}>
              <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
}

NewCarScreen.navigationOptions = {
  headerTitle: (
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Schedule Test Drive</Text>
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
  },
  headerLeft: (
    <TouchableOpacity>
     <ImageBackground
          style={{ width: 20, height: 20,marginTop:3,position:'relative',marginLeft:20,color: '#fff' }}
          source={require('../assets/images/back_icon.png')}>
        </ImageBackground>
      {/* <Icon name="md-arrow-back" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20, color: '#fff' }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="ios-search" style={{ paddingRight: 20 }} size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  ),

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#3a786e",
    width: 170,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,


  },
});
