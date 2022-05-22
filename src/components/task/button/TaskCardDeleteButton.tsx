import React from "react";
import styled from "styled-components";

export const TaskCardDeleteButton = () => {
	return (
		<div>
			<STaskCardDeleteButton>
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
