import React from "react";
import 'draft-js/dist/Draft.css';
import TextEditor from "./TextEditor";
import { UnitDataModel } from "@/app/create-note/page";
import { EditorState } from "draft-js";


const BoxUnit = ( { content, updateContent }:{ content:UnitDataModel, updateContent:(arg:UnitDataModel)=>void} ) =>{

    const handleTypeSelect = ( type:'img'|'text'|'code' ) =>{
        return ()=>{
            const data = content
            data.type = type;
            if(type === 'text'){
                data.text = EditorState.createEmpty();
            }
            updateContent(data)
        }
    }

    const updateTextContent = ( text:EditorState )=>{
        const data = content
        data.text = text
        updateContent(data)
    }

    return(
        <div>
            {!content.type?<div className="bg-gray-100 flex flex-col justify-center items-center hover:bg-gray-200" style={{ minHeight:'200px' }}>
                <button className="p-2 px-4 hover:bg-green-500" onClick={handleTypeSelect('text')}>Add text</button>
                <button className="p-2 px-4 hover:bg-green-500" onClick={handleTypeSelect('img')}>Add image</button>
                <button className="p-2 px-4 hover:bg-green-500"onClick={handleTypeSelect('code')}>Code</button>
            </div>:<></>}
            { content.type==='text'?<TextEditor content={content.text?content.text:EditorState.createEmpty()} updateContent={ updateTextContent }></TextEditor>:<></> }
        </div>
        
    )
}

export default BoxUnit;