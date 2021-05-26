import React, {useState} from 'react'
import ItemForm from './ItemForm'
<ItemForm />

const Item = (props) =>{
    const [showForm, setShowForm] = useState(false)
    const {id, name, description, likes, category, updateItem} = props
    
    return (
        <div style={{border:'3px solid', margin:'20px'}}>
            <h1>{name} <span>{category} likes: {likes}</span></h1>
            <button onClick={()=>setShowForm(!showForm)}>edit</button>
            {showForm && <ItemForm 
                           updateItem={updateItem}
                           id={id} 
                           name={name} 
                           description={description} 
                           likes={likes} 
                           category={category}
                           /> }
            <p>{description}</p>
        </div>
    )
}

export default Item