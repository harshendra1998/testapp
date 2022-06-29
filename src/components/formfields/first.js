import React,{useState} from 'react'
import InputBox from '../InputBox';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text, Button as ButtonInbuilt, Image,TextInput, Linking } from 'react-native';
import Button from '../button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {DateTimePicker} from '@react-native-community/datetimepicker'

export default function First(props) {

    const [submitted, setsubmitted] = useState(false);


    
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode('date');
  };


    const SignupSchema = Yup.object().shape({
      fullname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      Position: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      bithday: Yup.date(),
      city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      phone: Yup.number().required().positive().integer(),
    });


  return (
      <View style={{marginTop: 8, flex: 1, marginBottom:100}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={{fontSize: 22, marginBottom: 5, color: '#7A4ED9'}}>
          Personal Info
        </Text>

        <Formik
          initialValues={{
            fullname: '',
            Position: '',
            bithday: null,
            city: '',
            phone: null,
          }}
          validationSchema={SignupSchema}
          onSubmit={values => { dispatch({
            type: 'COUNTER_CHANGE',
            payload: values
            }); props.callback()}}>
          {({handleChange, handleBlur, errors, handleSubmit, values}) => (
            <View>
              <InputBox
                label="Full name"
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
                error={errors.fullname}
                submitted={submitted}
                require={true}
                style={{marginBottom: 10}}
              />

              <InputBox
                label="Position"
                onChangeText={handleChange('Position')}
                onBlur={handleBlur('Position')}
                value={values.Position}
                error={errors.Position}
                submitted={submitted}
                require={true}
                style={{marginBottom: 10}}
              />

              <InputBox
                label="Your birthday"
                require={true}
                onChangeText={handleChange('bithday')}
                onBlur={handleBlur('bithday')}
                value={values.bithday}
                error={errors.bithday}
                submitted={submitted}
                style={{marginBottom: 10}}
              />

              <InputBox
                label="City"
                require={true}
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                error={errors.city}
                submitted={submitted}
                style={{marginBottom: 10}}
              />

              <InputBox
                label="Phone number"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                require={true}
                numeric={true}
                submitted={submitted}
                error={errors.phone}
                style={{marginBottom: 10}}
              />
              <View>
         {/* <ButtonInbuilt onPress={displayDatepicker} title="Show date picker!" /> */}
            </View>
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
                  setsubmitted(true);
                  handleSubmit();
                }}
                label={props.label}
              />
            </View>
          )}
        </Formik>

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
    </ScrollView>
      </View>
  );
}
