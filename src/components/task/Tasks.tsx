import React, { FC } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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
		<DragDropContext onDragEnd={() => {}}>
			{/* ドラッグ&ドロップ可能領域 */}
			<Droppable droppableId="droppable">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{taskList.map((task) => (
							<div key={task.id}>
								<TaskElement task={task} />
							</div>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
