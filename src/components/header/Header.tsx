import React, { FC } from "react";
import styled from "styled-components";

/**
 * ヘッダーの描画を行うコンポーネント
 *
 * @returns ヘッダーを表示する要素
 */
export const Header: FC = () => {
	return (
		<div>
			<SHeader>
				<SHeaderTitle>Simple Trello</SHeaderTitle>
			</SHeader>
		</div>
	);
};

const SHeader = styled.header`
	text-align: center;
	padding: 4px 10%;
	margin-bottom: 50px;
	background-color: rgb(102, 94, 74);
`;

const SHeaderTitle = styled.h1`
	font-size: 45px;
	color: aliceblue;
	font-weight: 600;
	text-shadow: 2px 2px 2px black;
`;
