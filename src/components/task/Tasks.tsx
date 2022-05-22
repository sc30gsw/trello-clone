import React, { FC } from "react";
import type { Task } from "../../types/task";
import { TaskElement } from "./TaskElement";

export const Tasks: FC<{ taskList: Task[] }> = ({ taskList }) => {
	return (
		<div>
			{taskList.map((task, index) => (
				<div key={index}>
					<TaskElement task={task} />
				</div>
			))}
		</div>
	);
};
