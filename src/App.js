import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	
	const getRandomColor = () => {
		const colors = ['#ff8572', '#72beed', '#8be874', '#fcca5f', '#dca8ff', '#a1e5f4'];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			title: '',
			content: '',
			date: '',
			color: getRandomColor()
		}
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title, content) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title: title,
			content: content,
			date: date.toLocaleDateString(),
			color: getRandomColor()
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header 
					handleToggleDarkMode={setDarkMode}
					handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.title.toLowerCase().includes(searchText) || note.title.includes(searchText) || note.date.includes(searchText) 
					)}
					addNote={addNote}
					deleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
