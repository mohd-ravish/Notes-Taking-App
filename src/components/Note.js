// import { MdDeleteForever } from 'react-icons/md';
import { RiDeleteBin6Line } from "react-icons/ri";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<RiDeleteBin6Line
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.2em'
				/>
			</div>
		</div>
	);
};

export default Note;
