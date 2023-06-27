import React from "react";
import Casillero from "./Casillero";
import "./../assets/Ronda.css"
import Counter from "./Counter";

function Ronda({nCasilleros= 6}) {
	
	
	const getCasilleros = () => {
		let casilleros = []
		for (let i = 0; i < nCasilleros; i++) {
			casilleros.push(<Casillero key={i}></Casillero>);
		}

		return casilleros
	};

	return (
		<>
			<ul className="ronda">{getCasilleros()}
			<Counter></Counter>
			</ul>

		</>
	)
}

export default Ronda;
