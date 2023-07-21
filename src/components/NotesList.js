import AddNote from './AddNote';
import NewNote from './NewNote';
import Footer from './Footer';

const NotesList = ({ notes, addNote, deleteNote }) => {

	return (
		<div>
			<div>
				<AddNote addNote={addNote} />
			</div>
			<div className='notes-list'>
				{notes.map((note) => (
					<NewNote
						note={note}
						deleteNote={deleteNote}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default NotesList;
