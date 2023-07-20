import { RiDeleteBin6Line } from "react-icons/ri";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Note = ({ note, deleteNote }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: note.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: note.color,
    };
    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners} className='note'>
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
    );
};
export default Note;