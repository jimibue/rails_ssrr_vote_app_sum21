import React, {useDebugValue, useState} from 'react'
import axios from 'axios'

const ItemForm = (props) =>{
    const { addItem, id, updateItem} = props
    const [name, setName] = useState(props.name ? props.name: '')
    const [likes, setLikes] = useState(props.likes ? props.likes: '')
    const [description, setDescription] = useState(props.description ? props.description  : '')
    const [category, setCategory] = useState(props.category ? props.category : '' )
    const [errorMessage, setErrorMessage] = useState(props.errorMessage ? props.errorMessage :'')

    const handleSubmit = async (e) =>{
        // this prevent page from refreshing
        e.preventDefault()
        setErrorMessage(null)
        // these log the same thing
        // console.log({name:name, likes:likes, description:description, category:category})
        console.log({name, likes, description, category})
        const item = {name, likes, description, category}

           
            try {
                if(id){
                    let response = await axios.put(`/items/${id}`, item)
                    // addItem(response.data)
                    updateItem(response.data)
                } else{
                    // create
                  let response = await axios.post('/items', item)
                  addItem(response.data)
                }
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
            <h1>{id ? "Edit": "New"}</h1>
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
                 <button>{id ? "Update": "Add"}</button>
             </form>
        </div>
    )
}

export default ItemForm