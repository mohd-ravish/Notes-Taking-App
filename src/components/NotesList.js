import AddNote from './AddNote';
import { RiDeleteBin6Line } from "react-icons/ri";

const NotesList = ({ notes, addNote, deleteNote,
}) => {

	var date = new Date();
	
	return (
		<div>
			<div>
				<AddNote addNote={addNote} />
			</div>
			<div className='notes-list'>
				{notes.map((note, index) => (
					<div key={index} className='note' style={{ backgroundColor: note.color }}>
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
