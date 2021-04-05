const noteReducer = (state = { search: "", note: [] }, action) => {
  // const initialState = {
  //     note_id: -1,
  //     note_name: "",
  //     note_body: ""
  // }
  switch (action.type) {
    case "note-add":
      return {
        search: state.search,
        note: [
          ...state.note,
          {
            note_id: state.note.length + 1,
            note_name: action.payload.name,
            note_body: action.payload.body,
          },
        ],
      };
    case "note-delete":
      return {
        search: state.search,
        note: state.note.filter((note) => note.note_id !== action.payload),
      };
    case "set-search":
      return {
        search: action.payload,
        note: state.note,
      };
    default:
      return state;
  }
};

export default noteReducer;
