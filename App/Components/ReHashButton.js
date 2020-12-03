import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ReHashInput = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={props.disable ? 1 : 0.5}
            onPress={() => props.onPress()}
            style={[style.containerStyle, props.disable ? style.disable : null]}>
            <Text style={style.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ReHashInput

const style = StyleSheet.create({
    containerStyle: {
        width: wp('90%'),
        height: hp("7%"),
        borderRadius: hp("1%"),
        backgroundColor: "#7053ed",
        justifyContent: "center",
        alignItems: "center",
    },
    disable: {
        backgroundColor: "rgba(112,83,237,0.5)"
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: wp("5%"),
        color: "#FFF"
    }
})