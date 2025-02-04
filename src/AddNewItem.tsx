import React,{useState} from "react"
import { AddItemButton } from "./styles"

interface AddNewItemProps{
onAdd(text:string):void
toggleButtonText:string
dark?:boolean
}


const AddNewItem = (props:AddNewItemProps) => {
    const[showForm,setShowForm]=useState(false);
    const{ onAdd, toggleButtonText, dark}=props;

    if(showForm){

    }

  return (
    <AddItemButton dark={dark} onClick={()=>setShowForm(true)}>
        {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem