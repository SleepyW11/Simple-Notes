import "../css/AddNote.css";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";

const AddNote = (props) => {
  const dispatch = useDispatch();
  let note = {
    name: "",
    body: "",
  };

  return (
    <div
      className="add-note-screen"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.toggleAdd();
        }
      }}
    >
      <div className="add-note-container">
        <div className="title-bar">
          <div className="name-input">
            <input
              className="input"
              type="text"
              placeholder="Name"
              onChange={(e) => (note.name = e.target.value)}
            ></input>
          </div>
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tick"
            onClick={() => {
              if (note.name !== "") {
                props.toggleAdd();
                dispatch(addNote({ name: note.name, body: note.body }));
              } else {
                alert("Please Add a Note Name.");
              }
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21H0ZM19.8016 29.988L31.892 14.8736L29.708 13.1264L19.3984 26.0092L12.096 19.9248L10.304 22.0752L19.8016 29.9908V29.988Z"
              fill="#008DDC"
            />
          </svg>
        </div>
        <div className="body-input">
          <textarea
            className="input"
            type="textarea"
            placeholder="Note"
            onChange={(e) => (note.body = e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
