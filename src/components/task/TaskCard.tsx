import React from "react";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
	return (
		<div>
			<TaskCardTitle />
			<TaskCardDeleteButton />
			<TaskAddInput />
			<Tasks />
		</div>
	);
};
