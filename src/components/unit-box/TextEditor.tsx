import { NoteContext } from "@/app/create-note/ContextProvider";
import { Editor, EditorState } from "draft-js";
import { useContext } from "react";

const TextEditor = ({content,updateContent}:{ content:EditorState,updateContent:(arg:EditorState)=>void }) => {
    const context = useContext(NoteContext)

    const onEditorChange = (editorState:any)=>{
       updateContent(editorState)
    }

    return (
        <>
          <Editor editorState={content} onChange={onEditorChange}></Editor>
        </>
    )
}

export default TextEditor;