import AddNote from './AddNote';
import { RiDeleteBin6Line } from "react-icons/ri";

const NotesList = ({ notes, addNote, deleteNote,
}) => {
	const colors = ['#ff8572', '#72beed', '#8be874', '#fcca5f', '#dca8ff', '#a1e5f4'];
	var date = new Date();
	return (
		<div>
			<div>
				<AddNote addNote={addNote} />
			</div>
			<div className='notes-list'>
				{notes.map((note) => (
					<div className='note' style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
						<h2>{note.title}</h2>
						<p>{note.content}</p>
						<div className='note-footer'>
							<small>{note.date}</small>
							<RiDeleteBin6Line
								onClick={() => deleteNote(note.id)}
								className='delete-icon'
								size='1.2em'
							/>
						</div>
					</div>
				))}
			</div>
			<footer>
				<p class="copyright">
					Copyright ⓒ {date.getFullYear()}
				</p>
			</footer>
		</div>

	);
};

export default NotesList;
