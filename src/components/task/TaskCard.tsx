import React from "react";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";
import styled from "styled-components";

export const TaskCard = () => {
	return (
		<STaskCard>
			<TaskCardTitle />
			<TaskCardDeleteButton />
			<TaskAddInput />
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
