import React , {useState,useEffect} from 'react'
import './App.css'  
import axios from 'axios'  

import Header from './components/unique/Header';
import Character from './components/Character/Character';
import Search from './components/unique/Search';

const App = () =>  {

  const [items, setItems] = useState([])
  const[isLoading,setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {

    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()

  },[query])

  return (
    <div className="App">
      <Header/>
      <Search getQuery = {(q) => setQuery(q)}/>
      <Character isLoading = {isLoading}  items = {items}/>
    </div>
  );
}

export default App;
