import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import type { Card } from "../../../types/card";
import { v4 as uuid } from "uuid";

/**
 * 追加ボタンを描画・押下し、タスクカードを追加するコンポーネント
 *
 * @param taskCardList
 * @param setTaskCardList
 * @returns タスクカードを追加するボタンを構成する要素
 */
export const AddTaskCardButton: FC<{
	taskCardsList: Card[];
	setTaskCardsList: Dispatch<SetStateAction<Card[]>>;
}> = ({ taskCardsList, setTaskCardsList }) => {
	/**
	 * 追加ボタン押下時タスクカードを追加する処理
	 */
	const addTaskCard = () => {
		const taskCardId = uuid();
		// タスクカードを追加する
		setTaskCardsList([
			...taskCardsList,
			{
				id: taskCardId,
				draggableId: `item${taskCardId}`,
			},
		]);
	};

	return (
		<SAddTaskCardButtonArea>
			<SAddTaskCardButton onClick={addTaskCard}>+</SAddTaskCardButton>
		</SAddTaskCardButtonArea>
	);
};

const SAddTaskCardButtonArea = styled.div`
	margin-left: 1%;
	margin-top: 25px;
`;

const SAddTaskCardButton = styled.button`
	padding: 10px 18px;
	border-radius: 9999px;
	font-size: 30px;
	background-color: rgb(221, 194, 162);
	box-shadow: 3px 3px 8px 1px black;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		box-shadow: none;
		transform: translate(3px, 3px);
	}
`;
