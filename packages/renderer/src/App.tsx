import React, { useCallback, useState } from "react";
import Editor from "./Editor";
import "./App.css";
import Preview from "./Preview";

const App: React.FC = () => {
  const [doc, setDoc] = useState("# Hello, World!\n");

  const handleDocChange = useCallback((newDoc: string) => setDoc(newDoc), []);

  return (
    <div className="app">
      <Editor initialDoc={doc} onChange={handleDocChange} />
      <Preview doc={doc} />
    </div>
  );
};

export default App;
