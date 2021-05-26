import React, { useState } from 'react'
import Items from './Items'
import axios from 'axios'

const App = (props) => {
   const [items, setItems] = useState([])

   const getItems = async () =>{
    // this call is asyncroynous so I need for this to finish
    let response = await axios.get('/items')
    console.log(response)
    setItems(response.data)
   }

   return (
       <div>
           <h1>App.js Page</h1>
           <button onClick={getItems}>getItems from database</button>
           {/* I could render Items Here renderItems() */}
           <Items itemz={items} />
       </div>
   )
}

export default App

