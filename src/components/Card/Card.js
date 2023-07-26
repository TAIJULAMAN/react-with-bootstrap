import React from 'react';

const Card = (props) => {
    const {name,id,price}=props.product
    return (
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Name:{name}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Price:{price}</small></p>
          </div>
         </div>
    );
};

export default Card;