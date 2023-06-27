import React, {useEffect, useState} from "react";
import "./../assets/Casillero.css";
import PropTypes from "prop-types";

function Casillero({max = 4}) {
	const [value, setValue] = useState("");
	const [classColors, setClassColor] = useState("casillero");

	const changeColor = value => {
		const relativePercentage = value / max;
		if (relativePercentage <= 0.25) setClassColor("casillero");

		else if (relativePercentage > 0.25 && relativePercentage <= 0.5)
			setClassColor("casillero min");

		else if (relativePercentage > 0.5 && relativePercentage <= 0.75)
			setClassColor("casillero med");
		else if (relativePercentage > 0.75) setClassColor("casillero max");
	};

	function handleChange(event) {
		const regex = /^\d{0,1}(?:\.)?$/;
		const isValid = regex.test(event.target.value);
		const newValue = isValid
		? event.target.value
		: event.target.value.toString()[1];
		
		console.log(event.target.value.length);
		const sanitizedValue = newValue > max ? max : newValue;
		setValue(sanitizedValue === "" ? "" : sanitizedValue.toString());

		changeColor(sanitizedValue);
	}

	return (
		<input
			type="number"
			className={classColors}
			value={value}
			onChange={handleChange}
		/>
	);
}

Casillero.propTypes = {
	max: PropTypes.number,
};

export default Casillero;
