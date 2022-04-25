import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
    const convertData = (data) => {
        const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
    };
    const {
        isLoading,
        error,
        sendRequest: fetchTasks,
    } = useHttp(
        {
            url: "https://practice-http-react-default-rtdb.firebaseio.com//tasks.json",
        },
        convertData
    );
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
