import React from "react";
import "./style.scss";
import { FaHeart, FaEye } from "react-icons/fa";
const Filters = ({ sortLikes, sortViews }) => (

	<div className="filters">
		<span>
			Ordernar por:
			</span>
		<div className="filters__container">
			<div className="filters__container__item" onClick={() => sortLikes()}>
				<FaHeart className="filters__container__item__icon" />
				Likes
			</div>
			<div className="filters__container__item" onClick={() => sortViews()}>
				<FaEye className="filters__container__item__icon" />
				Visualizações
			</div>
		</div>
	</div>
)

export default Filters;