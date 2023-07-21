import { RiDeleteBin6Line } from "react-icons/ri";

const Note = ({ note, deleteNote }) => {
    
    const style = {
        backgroundColor: note.color,
    };

    return (
        <div style={style} className='note'>
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