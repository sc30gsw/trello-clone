import React, { useState } from "react";
import styled from "styled-components";

export const TaskCardTitle = () => {
	// クリックしたかどうかを監視するState(初期値: false)
	const [isClick, setIsClick] = useState(false);
	// タスクカードのタイトルを監視するState(初期値: Today)
	const [inputCardTitle, setInputCardTitle] = useState("Today");

	/**
	 * クリックした時isClickをtrueにする処理
	 */
	const handleClick = () => {
		setIsClick(true);
	};

	/**
	 * Input要素に入力された値をinputCardTitleにセットする処理
	 *
	 * @param e Input要素のChangeEvent
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputCardTitle(e.target.value);
	};

	/**
	 * Input要素外をクリックした時、Input要素を非表示にし、inputCardTitleを更新する
	 */
	const handleBlur = () => {
		setIsClick(false);
	};

	/**
	 * Formが送信された時、タスクカードのタイトルを表示する処理
	 *
	 * @param e Form要素の送信(submit)Event
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		// formが送信された際に、画面が更新されないようにする
		e.preventDefault();

		// form送信が完了した時、フォーム入力要素を消し、h3要素を表示する
		setIsClick(false);
	};

	return (
		// クリックされた時、関数実行
		<STaskCartTitleInputArea onClick={handleClick}>
			{/* isClickがtrueの時formをレンダリング */}
			{isClick ? (
				// フォームを送信した時、関数実行
				<form onSubmit={handleSubmit}>
					{/* input要素の値に変化があった時、関数実行(onChange) */}
					{/* input要素外部をクリックした時、関数実行(onBlur) */}
					<STaskCardTitleInput
						autoFocus
						type="text"
						onChange={handleChange}
						onBlur={handleBlur}
						// inputに入力される文字(初期状態: Today)
						value={inputCardTitle}
						// 最大文字数
						maxLength={10}
					/>
				</form>
			) : (
				<h3>{inputCardTitle}</h3>
			)}
		</STaskCartTitleInputArea>
	);
};

const STaskCartTitleInputArea = styled.div`
	margin-bottom: 10px;
	width: 30%;
	cursor: pointer;
`;

const STaskCardTitleInput = styled.input`
	width: 80px;
	font-size: 1.1rem;
	padding: 4px 6px;
	border-radius: 3px;
	border: none;
	outline: none;
`;
