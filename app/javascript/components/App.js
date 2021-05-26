import React, { useState } from 'react'
import Items from './Items'
import axios from 'axios'
import ItemForm from './ItemForm'

const App = (props) => {
   const [items, setItems] = useState([])
   const [showForm, setShowForm] = useState(true)

   const getItems = async () =>{
    // this call is asyncroynous so I need for this to finish
    let response = await axios.get('/items')
    console.log(response)
    setItems(response.data)
   }

   const addItem = (item) => {
       let updateItems = [item, ...items]
       setItems(updateItems)
   }

   return (
       <div>
           <h1>App.js Page</h1>
           <button onClick={getItems}>getItems from database</button>
           <button onClick={()=> setShowForm(!showForm)}>toggle form</button>
           {showForm && <ItemForm addItem={addItem}/>}
           
           {/* I could render Items Here renderItems() */}
           <Items itemz={items} />
       </div>
   )
}

export default App

