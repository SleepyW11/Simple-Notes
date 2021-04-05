export const addNote = (note = { name: "", body: "" }) => {
  return {
    type: "note-add",
    payload: note,
  };
};

export const deleteNote = (note_id) => {
  return {
    type: "note-delete",
    payload: note_id,
  };
};

export const setSearch = (search_term) => {
  return {
    type: "set-search",
    payload: search_term,
  };
};
