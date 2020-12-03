import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Content } from 'native-base';

import Header from '../Components/Header';
import ReHashLabel from '../Components/ReHashLabel';
import ReHashInput from '../Components/ReHashInput';
import ReHashInputArea from '../Components/ReHashInputArea';
import ReHashButton from '../Components/ReHashButton';
import DatePicker from '../Components/DatePicker';

const List = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"
]
const CreateTask = (props) => {
    const [showDatePicker, setShowDatePicker] = useState(false)

    const addAttachment = () => {
        let data = [...props.attachment]
        data.push(data.length)
        props.setTaskData("attachment", data)
    }
    const removeAttachment = () => {
        let data = [...props.attachment]
        data.pop()
        props.setTaskData("attachment", data)
    }
    const addAssigne = () => {
        props.changeScreen("assign")
    }

    return (
        <View style={{ flex: 1 }}>
            <Header back={false} option={false} title={"Create task"} />
            <Content>
                <View style={style.pageContent}>
                    <View style={{ marginTop: hp("2%") }}>
                        <ReHashLabel mainLabel={"Summary"} />
                        <ReHashInput
                            label={"title"}
                            onChangeText={props.setTaskData}
                            placeholder={"Title"}
                            value={props.title}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => { Keyboard.dismiss(), setShowDatePicker(true) }}
                        >
                            <ReHashInput
                                label={"date"}
                                onChangeText={props.setTaskData}
                                placeholder={"Due date"}
                                iconName="calendar"
                                value={props.date}
                                editable={false}
                            />
                            <DatePicker show={showDatePicker} close={() => setShowDatePicker(false)} setDate={props.setTaskData} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: hp("2%") }}>
                        <ReHashLabel mainLabel={"Employee"} iconName={"plus"} sideLabel={"Assisgn"} onClick={addAssigne} />
                        {props.showAssigne &&
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    {
                                        List.map((item, index) => {
                                            return (
                                                <Image
                                                    key={index}
                                                    style={[style.tinyLogo, index === 0 ? null : { marginLeft: -15 }]}
                                                    source={{ uri: item }}
                                                />
                                            )
                                        })
                                    }
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={[style.tinyLogo, style.addAssigne]}>
                                        <EntypoIcon name={"plus"} size={wp("8%")} color="#FFF" style={{ paddingRight: wp("1%") }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={{ marginTop: hp("2%") }}>
                        <ReHashLabel mainLabel={"Description"} />
                        <ReHashInputArea
                            onChangeText={props.setTaskData}
                            placeholder={"Text"}
                            label={"description"}
                            value={props.description}
                        />
                    </View>
                    <View style={{ marginTop: hp("2%"), marginBottom: hp("6%") }}>
                        <ReHashLabel mainLabel={"Attachment"} iconName={"attach"} sideLabel={"Add"} onClick={addAttachment} />
                        {
                            props.attachment.length ?
                                props.attachment.map((item, index) => {
                                    return (
                                        <View key={index} style={style.attachItemBox}>
                                            <View style={style.attachItemBoxIcon}>
                                                <IonIcons name={"attach"} size={wp("6%")} color="#000" style={{ paddingRight: wp("1%") }} />
                                            </View>
                                            <View style={style.attachItemBoxTitle}>
                                                <Text numberOfLines={1} style={{ fontSize: wp("4%") }}>File-name-example.docx</Text>
                                            </View>
                                            <TouchableOpacity
                                                activeOpacity={0.5}
                                                onPress={() => removeAttachment()}
                                                style={style.attachItemBoxIcon}>
                                                <MaterialIcons name={"delete-outline"} size={wp("6%")} color="red" style={{ paddingRight: wp("1%") }} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                                :
                                null
                        }
                    </View>
                    <View style={{ marginBottom: hp("3%") }}>
                        <ReHashButton title={"Create Task"} disable={props.submit ? false : true} onPress={() => props.changeScreen("finalTask")} />
                    </View>
                </View>
            </Content>
        </View>
    )
}

export default CreateTask

const style = StyleSheet.create({
    pageContent: {
        flex: 1,
        paddingHorizontal: wp("5%")
    },
    attachItemBox: {
        height: hp("6%"),
        borderWidth: 1,
        borderColor: "#bdc4d2",
        borderRadius: hp("1%"),
        flexDirection: "row",
        marginTop: hp("1%")
    },
    attachItemBoxIcon: {
        flex: .15,
        justifyContent: "center",
        alignItems: "center"
    },
    attachItemBoxTitle: {
        flex: 1,
        justifyContent: "center"
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#FFF"
    },
    addAssigne: {
        backgroundColor: "#7053ed",
        marginLeft: -15,
        justifyContent: "center",
        alignItems: "center"
    }
})
