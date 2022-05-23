import React, { FC, useState } from "react";
import styled from "styled-components";
import { TaskCard } from "../task/TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import type { Card } from "../../types/card";

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
	return (
		<STaskCardsArea>
			{taskCardsList.map((taskCard) => (
				<TaskCard
					key={taskCard.id}
					taskCardsList={taskCardsList}
					setTaskCardsList={setTaskCardsList}
					taskCard={taskCard}
				/>
			))}
			<AddTaskCardButton
				taskCardsList={taskCardsList}
				setTaskCardsList={setTaskCardsList}
			/>
		</STaskCardsArea>
	);
};

const STaskCardsArea = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
`; // flex-boxのflex-wrap: wrap;は自動で折り返しを行ってくれる
