import React, { useCallback, useEffect } from "react";
import useCodeMirror from "./useCodeMirror";
import "./Editor.css";
import { EditorState } from "@codemirror/state";

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // noting for now
    }
  }, [editorView]);

  return <div className="editor" ref={refContainer}></div>;
};

export default Editor;
