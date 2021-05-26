import React, {useDebugValue, useState} from 'react'
import axios from 'axios'

const ItemForm = (props) =>{
    const { addItem } = props
    const [name, setName] = useState('')
    const [likes, setLikes] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async (e) =>{
        // this prevent page from refreshing
        e.preventDefault()
        setErrorMessage(null)
        // these log the same thing
        // console.log({name:name, likes:likes, description:description, category:category})
        console.log({name, likes, description, category})
        const item = {name, likes, description, category}
        
        try {
            let response = await axios.post('/items', item)
            addItem(response.data)
            setName('')
            setLikes('')
            setDescription('')
            setCategory('')
        } catch (err) {
            console.log(err.response.data)
            setErrorMessage(err.response.data.join(','))
        }
    
    }
    return(
        <div>
            <h1>Add/Edit</h1>
            {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
             <form onSubmit={handleSubmit}>
                 <p>name</p>
                 <input value={name} onChange={((e)=> setName(e.target.value))}/>
                 <p>likes</p>
                 <input  value={likes} onChange={((e)=> setLikes(e.target.value))}/>
                 <p>description</p>
                 <input value={description} onChange={((e)=> setDescription(e.target.value))}/>
                 <p>category</p>
                 <input value={category} onChange={((e)=> setCategory(e.target.value))}/>
                 <button>add/edit</button>
             </form>
        </div>
    )
}

export default ItemForm