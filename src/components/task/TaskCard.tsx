import React, { FC, useState, useContext } from "react";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";
import { TaskListContext } from "../providers/TaskListProvider";
import styled from "styled-components";

/**
 * タスク一覧を表示するコンポーネント(親コンポーネント)
 *
 * @returns タスク一覧を構成する要素
 */
export const TaskCard: FC = () => {
	// タスク追加入力欄(input要素)を監視するState(初期値: "")
	const [inputText, setInputText] = useState<string>("");

	// Contextから値を取得
	const { taskList, setTaskList } = useContext(TaskListContext);

	return (
		<STaskCard>
			<STaskCardTitleAndTaskCardDeleteButtonArea>
				<TaskCardTitle />
				<TaskCardDeleteButton />
			</STaskCardTitleAndTaskCardDeleteButtonArea>
			<TaskAddInput
				inputText={inputText}
				setInputText={setInputText}
				taskList={taskList}
				setTaskList={setTaskList}
			/>
			<Tasks taskList={taskList} />
		</STaskCard>
	);
};

const STaskCardTitleAndTaskCardDeleteButtonArea = styled.div`
	display: flex;
	justify-content: space-between;
`;

const STaskCard = styled.div`
	width: 250px;
	padding: 10px 25px;
	margin: 10px 1%;
	background-color: rgb(228, 228, 228);
	border-radius: 5px;
`;
