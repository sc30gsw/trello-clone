import React from "react";
import styled from "styled-components";

export const TaskAddInput = () => {
	/**
	 * Formが送信された時、画面が更新されないようにする処理
	 *
	 * @param e Form要素の送信(submit)Event
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<STaskAddInput type="text" placeholder="add a task" />
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
