import React from 'react';
import CardItem from './CardItem';

const Card=(props)=>{
        const {items}=props;
        return (
            <div className="cart row row-flex">
                {items.map((item)=>{
                    return(
                         <CardItem 
                            item={item} 
                         />
                    )
                })}
            </div>
        );
}

export default Card;