'use client'
import SingleBox from '@/components/unit-box/SingleBox';
import ThreeBoxModel from '@/components/unit-box/ThreeBoxModel';
import TwoBox from '@/components/unit-box/TwoBox';
import { convertToRaw, EditorState, RichUtils } from 'draft-js';
import React, { useState } from 'react';
import { NoteContextProvider } from './ContextProvider';

export interface Section {
  id: string;
  type: 'one' | 'two' | 'three' | 'four'; 
  content: UnitDataModel[];
}

export interface UnitDataModel{
  type: 'img' | 'text' | 'code' | ''
  file?: File
  text?: EditorState
  code?:string
}

const CreateNoteComponenet: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [ editingSectionId, setEditingSectionId ] = useState({boxId:'', index:-1})
  const handleAddSection = (e:any)=>{
    const x = Math.random()*1000
    const y = Math.random()*1000
    const id = x.toString()+y.toString()
    const type = e.target.value;
   
    if(type === 'one'){
      setSections([...sections,{ id:id, type:e.target.value,content:[{type:''}] }])
    }
    if(type === 'two'){
      setSections([...sections,{ id:id, type:e.target.value,content:[{type:''},{type:''}] }])
    }
    if(type === 'three'){
      setSections([...sections,{ id:id, type:e.target.value,content:[{type:''},{type:''},{type:''}] }])
    }
  }

  const handleDataChange = (updatedData:Section,id:string)=>{
      const index = sections.findIndex(s=>s.id===id)
      const data = sections
      data[index] = updatedData;
      setSections([...data]);
  }

  const onEditingBoxChange = (id:string,index:number)=>{
    setEditingSectionId({boxId:id,index:index})
  }



  const toggleBold = () => {
    const index = sections.findIndex(s=>s.id===editingSectionId.boxId)
    const data = sections
    const textContent = data[index].content[editingSectionId.index].text
    const newState = RichUtils.toggleInlineStyle(textContent?textContent:EditorState.createEmpty(), 'BOLD');
    data[index].content[editingSectionId.index].text = newState;
    setSections([...data])
  };

  const toggleItalic = () => {
    const index = sections.findIndex(s=>s.id===editingSectionId.boxId)
    const data = sections
    const textContent = data[index].content[editingSectionId.index].text
    const newState = RichUtils.toggleInlineStyle(textContent?textContent:EditorState.createEmpty(), 'ITALIC');
    data[index].content[editingSectionId.index].text = newState;
    setSections([...data])
  };

  const toggleHeader = (headerType: string) => {

    const index = sections.findIndex(s=>s.id===editingSectionId.boxId)
    const data = sections
    const textContent = data[index].content[editingSectionId.index].text
    const newState = RichUtils.toggleBlockType(textContent?textContent:EditorState.createEmpty(), headerType);
    data[index].content[editingSectionId.index].text = newState;
    setSections([...data])

    const rawContent = convertToRaw(newState.getCurrentContent());
    console.log(rawContent,'rawContent')
    console.log(JSON.stringify(rawContent));
    console.log(newState.getCurrentContent().getAllEntities(),'content');
  };


    // Toggle the unordered list (bulleted list)
    // const toggleUnorderedList = () => {
    //   const index = sections.findIndex(s=>s.id===editingSectionId.boxId)
    //   const data = sections
    //   const textContent = data[index].content[editingSectionId.index].text
    //   const newState = RichUtils.toggleBlockType(textContent?textContent:EditorState.createEmpty(), 'unordered-list-item');
    //   data[index].content[editingSectionId.index].text = newState;
    //   setSections([...data])
    //   };

    //   const toggleOrderedList = () => {
    //     const newEditorState = RichUtils.toggleBlockType(content, 'ordered-list-item');
    //     updateContent(newEditorState);
    //   };

  return (
      <>
        <div className='sticky top-0 mb-1 p-1 bg-blue-50'>
          <div className='flex flex-row justify-between items-center'>
            <select name="model" id="model" onChange={handleAddSection}>
              <option value="">Select box model</option>
              <option value="one">One box</option>
              <option value="two">Two box</option>
              <option value="three">Three box</option>
            </select>
            <div>
            <div className="bottom-0 border border-gray-500 p-1" >
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={toggleBold}><b>B</b></button>
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={toggleItalic}><i>I</i></button>
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={()=>{toggleHeader('header-one')}}>H1</button>
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={()=>{toggleHeader('header-two')}}>H2</button>
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={()=>{toggleHeader('header-three')}}>H3</button>
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={()=>{toggleHeader('unordered-list-item')}}>UL</button>
              <button className="px-1 mr-1 bg-gray-200 hover:bg-gray-400 border border-gray-500" onClick={()=>{toggleHeader('ordered-list-item')}}>OL</button>
          </div>
            </div>
            <div>
              <button className='px-1 mr-1 bg-green-200 hover:bg-green-400 border border-green-500' >View mode</button>
              <button className='px-1 mr-1 bg-green-200 hover:bg-green-400 border border-green-500' >Save</button>
            </div>
          </div> 
        </div>
        <div className='shadow-2xl h-screen'>
          {sections.map((s)=>{
            return <div key={s.id}>
                {s.type==='one'&&<SingleBox content={s} updateData={handleDataChange} onEditingBoxChange={onEditingBoxChange}></SingleBox>}
                {s.type==='two'&&<TwoBox content={s} updateData={handleDataChange} onEditingBoxChange={onEditingBoxChange}></TwoBox>}
                {s.type==='three'&&<ThreeBoxModel content={s} updateData={handleDataChange} onEditingBoxChange={onEditingBoxChange}></ThreeBoxModel>}
                {/* {s.type==='four'&&<FourBoxModel content={s} updateData={handleDataChange}></FourBoxModel>} */}
            </div>
          })}
        </div>
      </>

  );
};

const App =()=>{
  return(
    <NoteContextProvider>
      <CreateNoteComponenet></CreateNoteComponenet>
    </NoteContextProvider>
  )
}

export default App;
