import React, { FC } from "react";
import type { Task } from "../../types/task";

export const Tasks: FC<{ inputText: string; taskList: Task[] }> = ({
	inputText,
	taskList,
}) => {
	return (
		<div>
			{taskList.map((list, index) => (
				<div key={index}>{list.text}</div>
			))}
		</div>
	);
};
