import React from 'react'

const Item = (props) =>{
    const {name, description, likes, category} = props
    
    return (
        <div>
            <h1>{name} <span>{category} likes: {likes}</span></h1>
            <p>{description}</p>
        </div>
    )
}

export default Item