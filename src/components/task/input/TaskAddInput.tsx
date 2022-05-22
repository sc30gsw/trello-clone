import React, { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export const TaskAddInput: FC<{
	inputText: string;
	setInputText: Dispatch<SetStateAction<string>>;
	taskList: never[];
	setTaskList: Dispatch<SetStateAction<never[]>>;
}> = ({ inputText, setInputText, taskList, setTaskList }) => {
	/**
	 * Formが送信された時、画面が更新されないようにする処理
	 *
	 * @param e Form要素の送信(submit)Event
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	/**
	 * Input要素に入力された値をinputTextにセットする処理
	 *
	 * @param e Input要素のChangeEvent
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<STaskAddInput
					type="text"
					placeholder="add a task"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

const STaskAddInput = styled.input`
	width: 100%;
	font-size: 1.3rem;
	padding: 10px 15px;
	border-radius: 3px;
	border: none;
	outline: none;
`;
