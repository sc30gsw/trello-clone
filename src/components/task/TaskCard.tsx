import React, { FC, useState } from "react";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";
import styled from "styled-components";

export const TaskCard: FC = () => {
	// タスク追加入力欄(input要素)を監視するState(初期値: "")
	const [inputText, setInputText] = useState<string>("");
	// タスクを配列で保持するState(初期値: 空の配列[])
	const [taskList, setTaskList] = useState([]);
	return (
		<STaskCard>
			<TaskCardTitle />
			<TaskCardDeleteButton />
			<TaskAddInput
				inputText={inputText}
				setInputText={setInputText}
				taskList={taskList}
				setTaskList={setTaskList}
			/>
			<Tasks />
		</STaskCard>
	);
};

const STaskCard = styled.div`
	width: 250px;
	padding: 10px 25px;
	margin: 10px 1%;
	background-color: rgb(228, 228, 228);
	border-radius: 5px;
`;
