import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ReHashInput = (props) => {
    return (
        <View style={style.containerStyle}>
            <TextInput
                editable={props.editable}
                placeholder={props.placeholder}
                style={{ flex: 1, paddingLeft: wp("4%") }}
                onChangeText={text => props.onChangeText(props.label, text)}
                value={props.value}
            />
            {
                props.iconName &&
                <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: wp("2%") }}>
                    <FontAwesome name={props.iconName} size={wp("6%")} color="#bdc4d2" />
                </View>
            }
        </View>
    )
}

export default ReHashInput

const style = StyleSheet.create({
    containerStyle: {
        marginTop: hp("2%"),
        width: wp('90%'),
        height: hp("6%"),
        borderRadius: hp(".5%"),
        borderColor: "#bdc4d2",
        borderWidth: 1,
        flexDirection: "row"
    }
})