import React, { FC, useState } from "react";
import styled from "styled-components";
import { TaskCard } from "../task/TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import type { Card } from "../../types/card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

/**
 * タスクカードを作成するコンポーネント
 *
 * @returns タスクカードを構成する要素
 */
export const TaskCards: FC = () => {
	// タスクカードを配列で監視するState(初期値: Card[0]={id: "0", draggableId: "item0"})
	// 初期値があることによって、画面描画時にタスクカードが1つデフォルト表示される
	const [taskCardsList, setTaskCardsList] = useState<Card[]>([
		{
			id: "0",
			draggableId: "item0",
		},
	]);

	/**
	 * ドラッグ&ドロップ時の挙動を扱う処理
	 *
	 * @param result ドラッグ&ドロップハンドラーの情報
	 */
	const handleDragEnd = (result: any) => {
		/// タスクカードの並び替えを行う処理の呼び出し
		reorder(taskCardsList, result.source.index, result.destination.index);
		// 並び替えたタスクカードをStateに設定する
		setTaskCardsList(taskCardsList);
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="droppable" direction="horizontal">
				{(provided) => (
					<STaskCardsArea {...provided.droppableProps} ref={provided.innerRef}>
						{taskCardsList.map((taskCard, index) => (
							<TaskCard
								key={taskCard.id}
								index={index}
								taskCardsList={taskCardsList}
								setTaskCardsList={setTaskCardsList}
								taskCard={taskCard}
							/>
						))}
						{provided.placeholder}
						<AddTaskCardButton
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
						/>
					</STaskCardsArea>
				)}
			</Droppable>
		</DragDropContext>
	);
};

/**
 * タスクの並び替えを行う処理
 *
 * @param taskCardsList Card配列
 * @param startIndex 開始位置(タスクカード削除位置)
 * @param endIndex 終了位置(タスクカード挿入位置)
 */
const reorder = (
	taskCardsList: Card[],
	startIndex: number,
	endIndex: number
) => {
	// タスクカードを並び替える
	const removeTaskCard = taskCardsList.splice(startIndex, 1);

	taskCardsList.splice(endIndex, 0, removeTaskCard[0]);
};

const STaskCardsArea = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
`; // flex-boxのflex-wrap: wrap;は自動で折り返しを行ってくれる
