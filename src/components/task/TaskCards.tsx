import React from "react";
import styled from "styled-components";
import { TaskCard } from "../task/TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";

export const TaskCards = () => {
	return (
		<STaskCardsArea>
			<TaskCard />
			<AddTaskCardButton />
		</STaskCardsArea>
	);
};

const STaskCardsArea = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
`; // flex-boxのflex-wrap: wrap;は自動で折り返しを行ってくれる
