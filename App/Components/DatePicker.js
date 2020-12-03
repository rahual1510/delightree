import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

const DatePicker = (props) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        props.setDate("date", String(moment(currentDate).format('DD.MM.YYYY')));
        props.close()
    };


    return (
        <View>
            {props.show && (
                <DateTimePicker
                    style={{ backgroundColor: "red" }}
                    testID="dateTimePicker"
                    value={date}
                    mode={"date"}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DatePicker