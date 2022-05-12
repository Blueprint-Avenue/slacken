import React from "react";
import {Avatar} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import styled from "styled-components";

function Header() {
	return (
		<HeaderContainer>
			{/* Header Left */}
			<HeaderLeft>
				<HeaderAvatar />
				<AccessTimeIcon />
			</HeaderLeft>
			{/* Header Search */}
			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search Slacken" />
			</HeaderSearch>
			{/* Header Right */}
			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--slacken-color);
	color: white;
`;

const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	background-color: #251d3a;
	text-align: center;
	display: flex;
	padding: 0 50px;
	color: gray;
	border: 1px #e04d01 solid;

	> input {
		min-width: 30vw;
		background-color: transparent;
		outline: none;
		border: none;
		text-align: center;
		color: white;
	}
`;

const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;
