import React, {useState} from "react";

export const ClItem = ({item, setItem, itemList, setItemList}) => {
    
    const itemId = `${item}Input`

    const handleNewItem = () => {
        setItem(newItem)
        setItemList((prevItem) => [...prevItem, item])
    }


    return (
        <>
            <label htmlFor={itemId}>{item}</label>
            <input 
                type="radio"
                id={itemId}
                value={item}
                onChange={}
            />
        </>
    )


}

