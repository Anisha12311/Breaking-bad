import React from 'react'
import Spinner from '../unique/Spinner'
import CharacterItem from './CharacterItem'

const Character = ({items, isLoading}) =>{
    return isLoading ? (<Spinner/>) : (<section className = "cards">
           
           {items.map((item) => (<CharacterItem key = {item.char_id} item = {item}></CharacterItem>))}

    </section>)
    
     
}
export default Character