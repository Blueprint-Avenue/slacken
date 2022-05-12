import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import {
	Add,
	Apps,
	BookmarkBorder,
	Drafts,
	ExpandLess,
	ExpandMore,
	FileCopy,
	Inbox,
	InsertComment,
	PeopleAlt,
} from "@material-ui/icons";
import {useCollection} from "react-firebase-hooks/firestore";
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

function Sidebar() {
	const [channels] = useCollection(db.collection("rooms"));
	const [user] = useAuthState(auth);
	return (
		<SidebarContainer>
			{/* Sidebar Header */}
			<SidebarHeader>
				{/* Left Section */}
				<SidebarInfo>
					<h2>Mac's Ventures</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.displayName}
					</h3>
				</SidebarInfo>
				{/* Right Section */}
				<CreateIcon />
			</SidebarHeader>
			<SidebarOption Icon={InsertComment} title="Threads" />
			<SidebarOption Icon={Inbox} title="Mentions & reactions" />
			<SidebarOption Icon={Drafts} title="Saved items" />
			<SidebarOption Icon={BookmarkBorder} title="Channel browser" />
			<SidebarOption Icon={PeopleAlt} title="People & user groups" />
			<SidebarOption Icon={Apps} title="Apps" />
			<SidebarOption Icon={FileCopy} title="File browser" />
			<SidebarOption Icon={ExpandLess} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMore} title="Channels" />
			<hr />
			<SidebarOption Icon={Add} addChannelOption title="Add Channel" />
			{channels?.docs.map((doc) => (
				<SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
			))}
		</SidebarContainer>
	);
}

export default Sidebar;

const SidebarContainer = styled.div`
	background-color: var(--slacken-color);
	color: white;
	flex: 0.3;
	border-top: 1px solid #e04d01;
	max-width: 260px;
	margin-top: 60px;

	hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid #e04d01;
	}
`;

const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #e04d01;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #2a2550;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;

const SidebarInfo = styled.div`
	flex: 1;
	> h2 {
		font-weight: 900;
		font-size: 15px;
		margin-bottom: 5px;
	}
	h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
	}

	h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;
