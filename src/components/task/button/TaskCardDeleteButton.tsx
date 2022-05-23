import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { Card } from "../../../types/card";

/**
 * タスクカードの削除ボタンを描画し、タスクカードを削除するコンポーネント
 *
 * @param taskCardsList タスクカード一覧
 * @param setTaskCardsList
 * @param taskCard 個々のタスクカード
 * @returns タスクカードの削除ボタンを構成する要素
 */
export const TaskCardDeleteButton: FC<{
	taskCardsList: Card[];
	setTaskCardsList: Dispatch<SetStateAction<Card[]>>;
	taskCard: Card;
}> = ({ taskCardsList, setTaskCardsList, taskCard }) => {
	/**
	 * タスクカードを削除する処理
	 *
	 * @param id 削除ボタンが押されたタスクカードのID
	 */
	const taskCardDeleteButton = (id: string) => {
		// タスクカードを削除する
		// タスクカードのIDと削除ボタンが押されたタスクカードのIDが等しくないタスクカードのみ設定する
		// IDが一致するもののみ削除する
		setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
	};
	return (
		<div>
			<STaskCardDeleteButton onClick={() => taskCardDeleteButton(taskCard.id)}>
				<i className="fas fa-times"></i>
			</STaskCardDeleteButton>
		</div>
	);
};

const STaskCardDeleteButton = styled.button`
	border: none;
	background-color: rgb(228, 228, 228);
	cursor: pointer;
	font-size: 16px;
	color: rgb(158, 46, 46);
`;
