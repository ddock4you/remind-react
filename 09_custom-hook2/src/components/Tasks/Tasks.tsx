import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";
import { Task } from "../../types/task";
import { SystemError, LoadingProp } from "../../types/system";
import { FetchType } from "../../types/fetchType";

const Tasks = (props: {
    items: Task[];
    error: SystemError;
    loading: LoadingProp;
    onFetch: (requestConfig: FetchType, applyData: () => void) => void;
}) => {
    let taskList = <h2>No tasks found. Start adding some!</h2>;

    if (props.items.length > 0) {
        taskList = (
            <ul>
                {props.items.map((task) => (
                    <TaskItem key={task.id}>{task.text}</TaskItem>
                ))}
            </ul>
        );
    }

    let content: string | JSX.Element = taskList;

    if (props.error) {
        content = <button onClick={() => props.onFetch}>Try again</button>;
    }

    if (props.loading) {
        content = "Loading tasks...";
    }

    return (
        <Section>
            <div className={classes.container}>{content}</div>
        </Section>
    );
};

export default Tasks;
