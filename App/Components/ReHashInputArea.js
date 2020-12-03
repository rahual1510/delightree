import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ReHashInputArea = (props) => {
    const [value, setValue] = React.useState("");

    const onChangeText = (text) => {
        if (text.length <= 500) {
            setValue(text)
            props.onChangeText(props.label, text)
        }
    }
    return (
        <View style={style.containerStyle}>
            <TextInput
                placeholder={props.placeholder}
                style={{ paddingHorizontal: wp("4%"), maxHeight: hp("17%") }}
                value={props.value}
                onChangeText={text => onChangeText(text)}
                multiline
                numberOfLines={1}
            />
            <View style={style.countConatiner}>
                <Text style={style.textCount}>{value.length}/500</Text>
            </View>
        </View>
    )
}

export default ReHashInputArea

const style = StyleSheet.create({
    containerStyle: {
        marginTop: hp("2%"),
        height: hp("20%"),
        width: wp('90%'),
        borderRadius: hp(".5%"),
        borderColor: "#bdc4d2",
        borderWidth: 1,
        justifyContent: "space-between"
    },
    countConatiner: {
        alignSelf: "flex-end",
        height: hp("3%"),
        paddingRight: wp("3%"),
    },
    textCount: {
        color: "#bdc4d2",
        fontSize: wp("3.5%")
    }
})