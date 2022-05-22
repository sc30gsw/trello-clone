import React, { FC, useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import type { Task } from "../../types/task";
import { TaskListContext } from "../providers/TaskListProvider";
import { TaskElement } from "./TaskElement";

/**
 * タスク配列の描画を行うコンポーネント
 *
 * @param taskList Stateに設定されているタスク配列
 * @returns タスクリストを表示する要素
 */
export const Tasks: FC<{ taskList: Task[] }> = ({ taskList }) => {
	// Contextから値を取得
	const { setTaskList } = useContext(TaskListContext);

	/**
	 * ドラッグ&ドロップ時の挙動を扱う処理
	 *
	 * @param result ドラッグ&ドロップハンドラーの情報
	 */
	const handleDragEnd = (result: any) => {
		// タスクの並び替えを行う処理の呼び出し
		reorder(taskList, result.source.index, result.destination.index);
		// 並び替えたタスクをStateに設定する
		setTaskList(taskList);
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			{/* ドラッグ&ドロップ可能領域 */}
			<Droppable droppableId="droppable">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{taskList.map((task, index) => (
							<div key={task.id}>
								<TaskElement index={index} task={task} />
							</div>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

/**
 * タスクの並び替えを行う処理
 *
 * @param taskList Task配列
 * @param startIndex 開始位置(タスク削除位置)
 * @param endIndex 終了位置(タスク挿入位置)
 */
const reorder = (taskList: Task[], startIndex: number, endIndex: number) => {
	// タスクを並び替える
	const removeTask = taskList.splice(startIndex, 1);

	taskList.splice(endIndex, 0, removeTask[0]);
};
