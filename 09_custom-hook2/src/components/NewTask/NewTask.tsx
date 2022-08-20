import { useState } from "react";
import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { Task } from "../../types/task";

const NewTask = ({ onAddTask }: { onAddTask: (task: Task) => void }) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

    const createTask = (taskText: string, data: { name: string }) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        onAddTask(createdTask);
    };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/jsom");

    const enterTaskHandler = async (taskText: string) => {
        sendTaskRequest(
            {
                url: "https://practice-http-react-default-rtdb.firebaseio.com//tasks.json",
                method: "POST",
                body: { text: taskText },
                headers: requestHeaders,
            },
            createTask.bind(null, taskText)
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
