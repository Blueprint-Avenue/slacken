import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from "./components/Login";
import logo from "./assets/img/storm.png";
import Spinner from "react-spinkit";

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContents>
					<img src={logo} alt="logo img" />
					<Spinner name="ball-spin-fade-loader" color="#251D3A" fadeIn="none" />
				</AppLoadingContents>
			</AppLoading>
		);
	}

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						{/* Header */}
						<Header />
						<AppBody>
							<Sidebar />
							<Switch>
								<Route path="/" exact>
									{/* Chat */}
									<Chat />
								</Route>
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

const AppLoading = styled.div`
	height: 100vh;
	display: grid;
`;

const AppLoadingContents = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e04d01;
	img {
		height: 100px;
		padding: 20px;
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
`;
