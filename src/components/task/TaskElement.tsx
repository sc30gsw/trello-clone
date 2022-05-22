import React, { FC } from "react";
import type { Task } from "../../types/task";
import styled from "styled-components";

/**
 * 個々のタスクを描画するコンポーネント
 *
 * @param task 個々のタスク
 * @returns 個々のタスクを構成する要素
 */
export const TaskElement: FC<{ task: Task }> = ({ task }) => {
	return (
		<STaskBox>
			<STaskText>{task.text}</STaskText>
			<STaskButton>
				<i className="fas fa-trash-alt"></i>
			</STaskButton>
		</STaskBox>
	);
};

const STaskBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 17px 0;
	margin-top: 10px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 1px 1px 1px 1px rgb(75, 75, 75);
`;

const STaskText = styled.p`
	margin-left: 12px;
`;

const STaskButton = styled.button`
	margin-right: 9px;
	border: none;
`;
