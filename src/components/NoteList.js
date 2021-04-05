import "../css/NoteList.css";
import Note from "./Note";
import { useSelector } from "react-redux";

const NoteList = () => {
  const notes = useSelector((state) => state.note);
  const searchTerm = useSelector((state) => state.search);
  const getNote = () => {
    if (notes.length > 0) {
      return notes
        .filter((note) =>
          note.note_name.toUpperCase().includes(searchTerm.toUpperCase())
        )
        .map((note) => <Note key={note.note_id} note={note} />);
    } else {
      return "";
    }
  };

  return <div className="note-list">{getNote()}</div>;
};

export default NoteList;
