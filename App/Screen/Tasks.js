import React, { useState } from 'react';
import { View } from 'react-native';

import CreateTask from './CreateTask';
import Assign from './Assign';
import FinalTask from './FinalTask';

const Task = () => {

    const [screen, setScreen] = useState("createTask")
    const [showAssigne, setShowAssigne] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [title, setTitle] = useState(null)
    const [date, setDate] = useState(null)
    const [description, setDescription] = useState(null)
    const [attachment, setAttachment] = useState([])


    const changeScreen = (screen) => {
        setScreen(screen)
    }

    const setTaskData = (label, data) => {
        switch (label) {
            case "title": setTitle(data); break;
            case "date": setDate(data); break;
            case "description": setDescription(data); break;
            case "attachment": setAttachment(data); break;
        }
        if (title !== null && date !== null && description !== null && showAssigne === true) {
            setSubmit(true)
        }
    }

    const clearData = () => {
        setScreen("createTask")
        setShowAssigne(false)
        setSubmit(false)
        setTitle(null)
        setDate(null)
        setDescription(null)
        setAttachment([])
    }

    return (
        <View style={{ flex: 1 }}>
            {
                screen === "createTask" ?
                    <CreateTask
                        changeScreen={changeScreen}
                        setTaskData={setTaskData}
                        showAssigne={showAssigne}
                        submit={submit}
                        title={title}
                        date={date}
                        description={description}
                        attachment={attachment}
                    />
                    :
                    screen === "assign" ?
                        <Assign
                            setTaskData={setTaskData}
                            changeScreen={changeScreen}
                            setAssigne={() => setShowAssigne(true)} />
                        :
                        <FinalTask
                            changeScreen={changeScreen}
                            close={clearData}
                            title={title}
                            date={date}
                            description={description}
                            attachment={attachment}
                        />

            }

        </View>
    )
}

export default Task
