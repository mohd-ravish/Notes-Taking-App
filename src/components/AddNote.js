import { useState } from 'react';

const AddNote = ({ addNote }) => {
	const [noteContent, setNoteContent] = useState('');
	const [noteTitle, setNoteTitle] = useState('');
	const [addNoteSection, setAddNoteSection] = useState(false)
	const characterLimit = 300;

	const handleTitleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value);
		}
	};

	const handleContentChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteContent(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0) {
			addNote(noteTitle, noteContent);
			setNoteContent('');
			setNoteTitle('');
		}
	};

	return (
		<div>
			{!addNoteSection ? (
				<div className="sectionInputArea">
					<input
						onClick={() => { setAddNoteSection(true) }}
						type="text"
						placeholder="Type Here..." />
				</div>
			) : (
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
						rows="6" />
					<small>
						{characterLimit - noteContent.length} Remaining
					</small>
					<button onClick={handleSaveClick}>+</button>
				</div>
			)}
		</div>

	);
};

export default AddNote;
