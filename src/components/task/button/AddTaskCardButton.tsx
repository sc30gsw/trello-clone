import React from "react";
import styled from "styled-components";

export const AddTaskCardButton = () => {
	return (
		<SAddTaskCardButtonArea>
			<SAddTaskCardButton>+</SAddTaskCardButton>
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
