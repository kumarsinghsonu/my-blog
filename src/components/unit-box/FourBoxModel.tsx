import { Section, UnitDataModel } from "@/app/create-note/page";
import BoxUnit from "./BoxUnit"

interface PropsInterface{
    content:Section
}

const FourBoxModel =( props:PropsInterface )=>{
    return(
        <div className="grid grid-cols-4 gap-1">
            {/* <div className="">
                <BoxUnit></BoxUnit>
            </div>
            <div className="">
                <BoxUnit></BoxUnit>
            </div>
            <div className="">
                <BoxUnit></BoxUnit>
            </div>
            <div className="">
                <BoxUnit></BoxUnit>
            </div> */}
        </div>
    )
}

export default FourBoxModel;