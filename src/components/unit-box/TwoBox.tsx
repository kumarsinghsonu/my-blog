import { Section, UnitDataModel } from "@/app/create-note/page";
import BoxUnit from "./BoxUnit"

interface PropsInterface{
    content:Section, 
    updateData:(arg:Section, id:string)=>void, 
    onEditingBoxChange:(arg:string,index:number)=>void
}

const TwoBox =( { content, updateData, onEditingBoxChange }:PropsInterface )=>{
    const updateFirstBoxContent = ( unitData:UnitDataModel ) =>{
        updateSectionData(0,unitData)
    }
    const updateSecondBoxContent = ( unitData:UnitDataModel ) =>{
        updateSectionData(1,unitData)
    }

    const updateSectionData = (index:number, unitData:UnitDataModel)=>{
        const data = content;
        data.content[index] = unitData;
        updateData( data, data.id )
    }
    const onBoxClick = ( index:number )=>{
        return ()=>{
            onEditingBoxChange(content.id, index)
        }
    }
    return(
        <div className="grid grid-cols-2 gap-1">
            <div className="border hover:border-gray-500" onClick={onBoxClick(0)}>
                <BoxUnit content={content.content[0]} updateContent={ updateFirstBoxContent } ></BoxUnit>
            </div>
            <div className="border hover:border-gray-500" onClick={onBoxClick(1)}>
                <BoxUnit content={content.content[1]} updateContent={ updateSecondBoxContent } ></BoxUnit>
            </div>
        </div>
    )
}

export default TwoBox;