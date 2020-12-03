import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Header = (props) => {
    return (
        <View style={style.headerConatiner}>
            {
                props.back &&
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.onBack()}
                    style={style.iconContainer}>
                    <EntypoIcon name="chevron-left" size={wp("6%")} color="#FFF" />
                </TouchableOpacity>
            }
            <View style={props.back ? style.titleContainer : style.mainTitleContainer}>
                <Text
                    numberOfLines={1}
                    style={style.titleTextStyle}>
                    {props.title}
                </Text>
            </View>
            {
                props.option &&
                <TouchableOpacity activeOpacity={0.5} style={style.iconContainer}>
                    <EntypoIcon name="dots-three-vertical" size={wp("6%")} color="#FFF" />
                </TouchableOpacity>
            }

        </View>
    )
}

export default Header

const style = StyleSheet.create({
    headerConatiner: {
        height: hp("10%"),
        backgroundColor: "#7053ed",
        flexDirection: "row",
    },
    mainTitleContainer: {
        height: hp("9%"),
        width: wp("100%"),
        justifyContent: "center",
        paddingHorizontal: wp("5%")
    },
    titleContainer: {
        height: hp("9%"),
        width: wp("70%"),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: wp("5%")
    },
    titleTextStyle: {
        fontWeight: "bold",
        fontSize: wp("6%"),
        color: "#FFF"
    },
    iconContainer: {
        height: hp("9%"),
        width: wp("15%"),
        justifyContent: "center",
        alignItems: "center",
    }
})