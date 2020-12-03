import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

const ReHashLabel = (props) => {
    return (
        <View style={style.labelContainer}>
            <View style={style.mainLabelStyle}>
                <Text style={[style.mainLabelTextStyle, props.mainLabelStyle]}>{props.mainLabel}</Text>
            </View>
            {
                props.sideLabel &&
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.onClick()}
                    style={style.sideLabelStyle}>
                    {props.iconName &&
                        props.iconName === "attach" ?
                        <IonIcons name={props.iconName} size={wp("6%")} color="#7053ed" style={{ paddingRight: wp("1%") }} />
                        :
                        <EntypoIcon name={props.iconName} size={wp("6%")} color="#7053ed" style={{ paddingRight: wp("1%") }} />
                    }
                    <Text style={style.sideLabelTextStyle}>{props.sideLabel}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default ReHashLabel

const style = StyleSheet.create({
    labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: hp("6%"),
        alignItems: "center",
    },
    mainLabelStyle: {
        justifyContent: "center",
        flex: 1
    },
    mainLabelTextStyle: {
        fontWeight: "bold",
        fontSize: wp("4.5%")
    },
    sideLabelStyle: {
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        flex: 0.3
    },
    sideLabelTextStyle: {
        fontWeight: "bold",
        fontSize: wp("4%"),
        color: "#7053ed"
    },
})