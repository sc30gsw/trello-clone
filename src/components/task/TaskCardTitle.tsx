import React, { useState } from "react";

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
	 * Input要素に入力された値をinputCardTitleに代入する処理
	 *
	 * @param e Input要素のChangeEvent
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputCardTitle(e.target.value);
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
		<div onClick={handleClick}>
			{/* isClickがtrueの時formをレンダリング */}
			{isClick ? (
				// フォームを送信した時、関数実行
				<form onSubmit={handleSubmit}>
					{/* input要素の値に変化があった時、関数実行 */}
					<input type="text" onChange={handleChange} />
				</form>
			) : (
				<h3>{inputCardTitle}</h3>
			)}
		</div>
	);
};
