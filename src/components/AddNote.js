import { useState } from 'react';

const AddNote = ({ addNote }) => {
	const [noteContent, setNoteContent] = useState('');
	const [noteTitle, setNoteTitle] = useState('');
	// const characterLimit = 200;

	const handleTitleChange = (event) => {
		// if (characterLimit - event.target.value.length >= 0) {
		setNoteTitle(event.target.value);

		// }
	};

	const handleContentChange = (event) => {
		// if (characterLimit - event.target.value.length >= 0) {
		setNoteContent(event.target.value);
		// }
	};

	const handleSaveClick = () => {
		if (noteContent.trim().length > 0 && noteTitle.trim().length > 0) {
			addNote(noteTitle, noteContent);
			setNoteContent('');
			setNoteTitle('');
		}
	};

	return (
		<div className="inputArea">
			<input
				value={noteTitle}
				type="text"
				onChange={handleTitleChange}
				placeholder="Title" />
			<textarea
				value={noteContent}
				type="text"
				onChange={handleContentChange}
				placeholder="Take a note..."
				rows="1" />
			<button onClick={handleSaveClick}>+</button>
		</div>
	);
};

export default AddNote;
