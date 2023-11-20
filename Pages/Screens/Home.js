import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextIn from '../../TextIn'; // Assuming this is your custom text input component
import DatePickerModal from '../DatePickerModal';

const Home = () => {
  const [sample, setSample] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateChange = (date) => {
    setSample(date); // Assuming you want to update 'sample'
    hideDatePicker();
  };

  return (
    <View>
      <TextIn
        label="Sample"
        onChangeText={(text) => setSample(text)}
        value={sample}
      />
      <TouchableOpacity onPress={showDatePicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>
      {sample !== '' && <Text>Selected Date: {sample}</Text>}
      <DatePickerModal
        isVisible={isDatePickerVisible}
        onConfirm={handleDateChange}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Home;
