import React from 'react';
import Item from './Item';

const Items = (props) => {
    
    const {itemz} = props

    const renderComponents = ()=>{
        if (itemz.length === 0){
            return <p>no items</p>
        }
        return itemz.map( item => {
            return <Item key={item.id} {...item}/>
            // return <Item 
            //          key={item.id}
            //          name={item.name} 
            //          description={item.description}
            //          likes={item.likes}
            //          category={item.category}
            //          />
        })
    }
    return (
        <div>
            <h1>Item.js component</h1>
            {renderComponents()}
        </div>
    )
}

export default Items 