import {Button} from "@material-ui/core";
import React, {useRef, useState} from "react";
import styled from "styled-components";
import {db} from "../firebase";
import firebase from "firebase";

function ChatInput({channelId, channelName}) {
	const [input, setInput] = useState("");

	const sendMessage = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}

		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: "Samiya McIntosh",
			userImage:
				"https://www.pinclipart.com/picdir/big/389-3899824_new-minnesota-timberwolves-logos-png-download-minnesota-timberwolves.png",
		});
		setInput("");
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder={`Message #${channelName}`}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;
	background-color: #ff7700;

	form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid #251d3a;
		border-radius: 5px;
		padding: 20px;
		outline: none;
	}
	form > button {
		display: none !important;
	}
`;
