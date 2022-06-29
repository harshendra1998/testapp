import React,{useState} from 'react'
import InputBox from '../InputBox';
// import DateTimePicker from '@react-native-community/datetimepicker'
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Image, Linking } from 'react-native';
import Button from '../button';

export default function Third(props) {

    const [edorganization, setedorganization] = useState('');
    const [course, setcourse] = useState('');
    const [date, setdate] = useState(new Date(1598051730000));

  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
  const currentDate = selectedDate || mydate;
  setDate(currentDate);
};
const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};
const displayDatepicker = () => {
  showMode('date');
};


const handleSubmit = ()=>{ props.callback()}



  return (
    <View style={{ marginTop: '20%', flex:1 }}>
    <Text style={{fontSize:22, marginBottom:22, color: '#7A4ED9'}}>COURSES</Text>
    <InputBox
        label="Educational Organization"
        value={edorganization}
        onChangeText={text => setedorganization(text)}
        style={{ marginBottom: 20 }}
    />

    <InputBox
        label="Course"
        value={course}
        onChangeText={text => setcourse(text)}
        style={{ marginBottom: 20 }}
    />

    <InputBox
        label="Finish Date"
        value={date}
        onChangeText={text => setdate(text)}
        style={{ marginBottom: 20 }}
    />


{/* <View>
         <Button onPress={displayDatepicker} title="Show date picker!" />
            </View> */}
               {/* {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )} */}
         <Button
        callback={() => {
          handleSubmit();
        }}
        label={props.label}
      />

</View>
  )
}
