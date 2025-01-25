import { Section, UnitDataModel } from "@/app/create-note/page";
import BoxUnit from "./BoxUnit"
import { useContext, useEffect } from "react";
import { NoteContext } from "@/app/create-note/ContextProvider";

interface PropsInterface{
    content:Section, 
    updateData:(arg:Section, id:string)=>void, 
    onEditingBoxChange:(arg:string,index:number)=>void
}

const SingleBox =( { content, updateData, onEditingBoxChange }:PropsInterface)=>{
      const context = useContext(NoteContext);
      useEffect(()=>{
        if(context?.boxSelectRef){
          context?.boxSelectRef.current?.addEventListener('change',()=>{})
        }
        return()=>{
          context?.boxSelectRef.current?.removeEventListener('change',()=>{})
        }
      },[context])
    const updateFirstBoxContent = ( unitData:UnitDataModel ) =>{
        const data = content;
        updateData( { ...content, content:[{...unitData}] }, data.id )
    }

    const insideBoxClick = ()=>{
        onEditingBoxChange(content.id , 0)
    }
    return(
        <div className="border hover:border-gray-500" onClick={insideBoxClick}> 
            <BoxUnit content={content.content[0]} updateContent={ updateFirstBoxContent } ></BoxUnit>
        </div>
    )
}

export default SingleBox;