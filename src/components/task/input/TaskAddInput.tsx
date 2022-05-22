import React, { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import type { Task } from "../../../types/task";

/**
 * タスクを入力し、formでタスクを送信するコンポーネント
 *
 * @param inputText 入力されたタスク
 * @param setInputText
 * @param taskList 追加されたタスク配列
 * @param setTaskList
 * @returns タスク入力フォーム
 */
export const TaskAddInput: FC<{
	inputText: string;
	setInputText: Dispatch<SetStateAction<string>>;
	taskList: Task[];
	setTaskList: Dispatch<SetStateAction<Task[]>>;
}> = ({ inputText, setInputText, taskList, setTaskList }) => {
	/**
	 * Formが送信された時、画面が更新されないようにする処理
	 *
	 * @param e Form要素の送信(submit)Event
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		// formが送信された際に、画面が更新されないようにする
		e.preventDefault();

		// 入力されたタスクが空なら処理を中断する
		if (inputText === "") {
			return;
		}

		// form送信(submit)時、タスクを追加する
		setTaskList([
			...taskList,
			{
				id: taskList.length,
				draggableId: `task-${taskList.length}`,
				text: inputText,
			},
		]);

		// form送信時、Inputテキストを空にする
		setInputText("");
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
					value={inputText}
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
