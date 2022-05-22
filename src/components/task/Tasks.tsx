import React, { FC } from "react";
import type { Task } from "../../types/task";
import { TaskElement } from "./TaskElement";

/**
 * タスク配列の描画を行うコンポーネント
 *
 * @param taskList Stateに設定されているタスク配列
 * @returns タスクリストを表示する要素
 */
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
