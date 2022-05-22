import React from "react";
import { TaskCard } from "../task/TaskCard";
import { AddTaskCardButton } from "../task/AddTaskCardButton";

export const TaskCards = () => {
	return (
		<div>
			<TaskCard />
			<AddTaskCardButton />
		</div>
	);
};
