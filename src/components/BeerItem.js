import React from 'react';


const BeerItem = ({beer})=> {
    return(
        <div  className="ui card" style={{width:'75vw'}}>
            <div className="content">
                <br />
                <div className="meta">{beer.name}</div>
                <div className="meta">Description: {beer.description}</div>
                <br />
                <div className="meta">Tips: {beer.brewers_tips}</div>
                <div className="meta">Pair With: {beer.food_pairing}</div>
                <br />
            </div> 
        </div>
    )
};


export default BeerItem;