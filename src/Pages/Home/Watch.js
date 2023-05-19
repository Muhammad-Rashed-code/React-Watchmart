import React from 'react';
import './Watch.css';

const Watch = ({ watch }) => {
    const { id, name, Details, company, Price, img, address } = watch;

    return (

        <div className="col">

            <div className="card">

                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <span className="card-text Priceee">Price: $<span className='Price'>{Price}</span></span>
                    <p className="card-text Brand">Brand: <span>{company}</span></p>
                    <button className='add-cart'>Buy Now</button>


                </div>
            </div>
        </div>
    );
};

export default Watch;