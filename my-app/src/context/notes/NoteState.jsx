import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "68152afd0107448885552f78",
      user: "68021920e33e0d3c11173dcc",
      title: "My Title",
      description: "She's so adorable",
      tag: "Personal",
      Date: "2025-05-02T20:28:45.060Z",
      __v: 0,
    },
    {
      _id: "68152b0f0107448885552f7a",
      user: "68021920e33e0d3c11173dcc",
      title: "My Title",
      description: "She's my babyee",
      tag: "Personal",
      Date: "2025-05-02T20:29:03.286Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
