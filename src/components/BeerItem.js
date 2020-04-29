import React from 'react';


const BeerItem = ({beer})=> {
    return(
        <div  className="ui card" style={{width:'75vw'}}>
            <div className="img"><img src={beer.image_url} alt='...' ></img></div>
            <div className="content">
                <br />
                <h3 className="title">{beer.name}</h3>
                <b>Description: </b>{beer.description}
                <br />
                <br />
                <b>Tips: </b>{beer.brewers_tips}
                <br />
                <br />
                <b>Pair With: </b>{beer.food_pairing}
            </div> 
        </div>
    )
};


export default BeerItem;