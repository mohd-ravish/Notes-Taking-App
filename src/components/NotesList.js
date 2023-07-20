import AddNote from './AddNote';
import NewNote from './NewNote';
import Footer from './Footer';
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
	arrayMove,
} from "@dnd-kit/sortable";

const NotesList = ({ notes, addNote, deleteNote, setNotes }) => {


	const handleDragEnd = (event) => {
		const { active, over } = event;
		console.log("active", active.id);
		console.log("over", over.id);

		if (!active.id !== over.id) {
			setNotes((notes) => {
				const oldIndex = notes.findIndex((note) => note.id === active.id);
				const newIndex = notes.findIndex((note) => note.id === over.id);

				console.log(arrayMove(notes, oldIndex, newIndex));
				return arrayMove(notes, oldIndex, newIndex);
			});
		}

		console.log("drag end");
	};

	return (
		<div>
			<div>
				<AddNote addNote={addNote} />
			</div>
			<DndContext
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className='notes-list'>
					<SortableContext
						items={notes}
						strategy={verticalListSortingStrategy}
					>
						{notes.map((note) => (
							<NewNote
								note={note}
								deleteNote={deleteNote}
							/>
						))}
					</SortableContext>
				</div>
			</DndContext>
			<Footer />

		</div>

	);
};

export default NotesList;
