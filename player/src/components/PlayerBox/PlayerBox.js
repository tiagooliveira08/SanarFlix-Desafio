import React from "react";
import "./style.scss";

import { Title } from "./../../components/";

import { FaHeart, FaEye, FaPlayCircle } from "react-icons/fa";

const PlayerBox = ({ id, title, views, likes, licked, onClick }) => (
	<div className="PlayerBox" onClick={() => onClick()} >
		<div className="PlayerBox__image">
			<img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
			<FaPlayCircle />
		</div>
		<div className="PlayerBox__title">
			<Title text={title} font="20px" margin="10px 0" />
		</div>
		<div className="PlayerBox__container">
			<div className="PlayerBox__container__views">
				<FaEye />
				<span>{views}</span>
			</div>
			<div className="PlayerBox__container__likes">
				<span><FaHeart className={licked ? "licked" : null} /></span>
				<span>{likes}</span>
			</div>
		</div>
	</div >
)

export default PlayerBox;