import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";
import { Task } from "./types/task";

interface convertDataProp {
    [key: string]: {
        text: string;
    };
}

function App() {
    const { isLoading, error, sendRequest: fetchTasks } = useHttp();
    const [tasks, setTasks] = useState<Task[]>([]);
    const convertData = (data: convertDataProp) => {
        const loadedTasks = [];
        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
        setTasks(loadedTasks);
    };

    useEffect(() => {
        fetchTasks(
            {
                url: "https://practice-http-react-default-rtdb.firebaseio.com//tasks.json",
            },
            convertData
        );
    }, [fetchTasks]);

    const taskAddHandler = (task: Task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
        </React.Fragment>
    );
}

export default App;
