import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md"
import { AiOutlineLogout } from "react-icons/ai"
import { MdSearch } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Header = ({ handleToggleDarkMode, handleSearchNote }) => {

	const navigate = useNavigate();

	function logout() {
		navigate("/login");
	}

	return (
		<div>
			<div className='header'>
				<h1>Notes</h1>
				<div className='search'>
					<MdSearch className='search-icons' size='1.3em' />
					<input
						onChange={(event) =>
							handleSearchNote(event.target.value)
						}
						type='text'
						placeholder='Search Notes...'
					/>
				</div>
				<button
					onClick={() =>
						handleToggleDarkMode(
							(previousDarkMode) => !previousDarkMode
						)
					}
					className='dark-mode-button'
				>
					<MdOutlineDarkMode />
				</button>
				<button
					onClick={logout}
					className='dark-mode-button'
				>
					<AiOutlineLogout />
				</button>

			</div>
		</div>

	);
};

export default Header;
