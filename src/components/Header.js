import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md"

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='toggle'
			>
				<MdOutlineDarkMode />
			</button>
		</div>
	);
};

export default Header;
