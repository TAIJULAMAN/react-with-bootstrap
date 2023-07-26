import React from 'react';
import Card
 from '../Card/Card';
const CardGroup = () => {
    const Products =[
        {id:1,name:'laptop',price:1000},
        {id:2,name:'tab',price:2000},
        {id:3,name:'mobile',price:3000},

      ]
    return (
        <div className="card-group">
            {Products.map(product=><Card 
     product={product}
     key={product.id}
     ></Card>)}
        </div>
    );
};

export default CardGroup;