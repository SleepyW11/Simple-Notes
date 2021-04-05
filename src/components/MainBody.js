import "../css/MainBody.css";
import BodyHeading from "./BodyHeading";
import NoteList from "./NoteList";

const MainBody = () => {
  return (
    <div className="main-body">
      <BodyHeading />
      <NoteList />
    </div>
  );
};

export default MainBody;
