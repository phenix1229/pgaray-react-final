import React  from 'react';
import BeerItem from './BeerItem';


const Beers = (props) => {
    if(props.beers.length > 0){
        return (
            <div id='main'>
                {props.beers.map((beer,idx)=>{
                    return (
                        <BeerItem  key={beer.id} beer={beer} />
                    )
                })}
            </div>
        )
    } else {
        return null
    };
};


export default Beers;