import React from 'react';
import { ScrollView, TextInput, ImageBackground, StyleSheet, Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import TimePicker from 'react-native-simple-time-picker';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default function ScheduleTestDriveScreen(Props) {
  const [name, changeName] = React.useState('');
  const [email, changeEmail] = React.useState('');
  const [phone, changePhone] = React.useState('');
  const [value, onChangevalue3] = React.useState('');
  const [time, changeTime] = React.useState('');
  const [info, changeInfo] = React.useState('');
  const [timePickerVisible, isDatePickerVisible] = React.useState(false)
  const [date, setDate] = React.useState('')
  // const [time, setTime] = React.useState('')
  // const [selectedHours, selectedHourSet] = React.useState(0)
  // const [selectedMinutes, selectedMinuteSet] = React.useState(0)

  const [timePicker, setTimePicker] = React.useState(false)
  const [selectedTime, setSelectedTime] = React.useState('')

  const handleTimePick = (time) => {
    console.log("Time", time);
    const timeData = moment(time).format('hh:mm a')
    setSelectedTime(timeData)
    setTimePicker(false)
  }

  const showDatePicker = (val) => {
    isDatePickerVisible(val);
    console.log("this is showDateTimePicker")
  };

  const hideDatePicker = () => {
    isDatePickerVisible(false);
  };

  const handleDatePicked = (date) => {
    setDate((moment(date).format("DD-MM-YYYY")).toString())
 
  };


  return (
    <>

      <ScrollView style={styles.container}>
      
        <View>
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changeName(text)}
            value={name}
            placeholder="Name"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changeEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#9fa2a7"
          />
          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center' }}
            onChangeText={text => changePhone(text)}
            value={phone}
            placeholder="Phone"
            keyboardType="phone-pad"
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
                onFocus={() => showDatePicker(true)}
                onBlur={() => showDatePicker(false)}
              />
            </View>

            <DateTimePicker
              isVisible={timePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={() => showDatePicker(false)}
            />

            {/* <View style={{ justifyContent: 'flex-end', marginLeft: 110, marginBottom: 8 }}>
              <TouchableOpacity
                onPress={showDateTimePicker}
              >
                <ImageBackground
                  style={{ width: 15, height: 10, position: 'relative', marginBottom: 5 }}
                  source={require('../assets/images/down_icon.png')}>
                </ImageBackground>
              </TouchableOpacity>
            </View> */}
          </View>


          <View style={{ flexDirection: 'row', borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, }}>
            <View>
              <TextInput
                style={{ height: 40, fontSize: 12, alignContent: 'center' }}
                onChangeText={value4 => changeTime(value4)}
                value={selectedTime}
                placeholder="What time do you like to schedule a test drive"
                placeholderTextColor="#9fa2a7"
                onFocus={() => setTimePicker(true)}
                onBlur={() => setTimePicker(false)}
              />
            </View>
            <DateTimePicker
              isVisible={timePicker}
              onConfirm={handleTimePick}
              onCancel={() => setTimePicker(false)}
              mode="time"
              is24Hour={false}
            />
          </View>


          <TextInput
            style={{ height: 40, fontSize: 12, borderColor: '#b1bacb', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, alignContent: 'center', }}
            onChangeText={text => changeInfo(text)}
            value={info}
            placeholder="Additional info"
            placeholderTextColor="#9fa2a7"
          />
        </View>
        <View>
          <TouchableOpacity>
            <LinearGradient
              colors={['#1e508d', '#3c7a6b', '#67b639']}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.button}>
              <Text onPress={()=>Props.navigation.navigate('CarListing')} style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
}

ScheduleTestDriveScreen.navigationOptions = ({navigation}) => ({
  headerTitle: (
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Schedule Test Drive</Text>
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    marginTop: -25
  },
  headerLeft: (
    <TouchableOpacity onPress={ () => navigation.goBack(null)}>
      <ImageBackground
        style={{ width: 20, height: 20, marginTop: 3, position: 'relative', marginLeft: 20}}
        source={require('../assets/images/back_icon.png')}>
      </ImageBackground>
      {/* <Icon name="md-arrow-back" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20 }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
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
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
