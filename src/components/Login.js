import {Button} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import logo from "../assets/img/storm.png";
import {auth, provider} from "../firebase";

function Login() {
	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img src={logo} alt="logo img" />
				<h1>Sign in to Slacken</h1>
				<p>mac.slacken.com</p>

				<Button onClick={signIn}>Sign in with Google</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
}

export default Login;

const LoginContainer = styled.div`
	background-color: #251d3a;
	display: grid;
	height: 100vh;
	place-items: center;
`;

const LoginInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: #e04d01;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
		animation: pulse-white 2s infinite;
		@keyframes pulse-white {
			0% {
				transform: scale(0.95);
			}

			70% {
				transform: scale(1);
			}

			100% {
				transform: scale(0.95);
			}
		}
	}
	button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #2a2550 !important;
		color: white;
	}
`;
