import React , {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Beers from './Beers';
import './index.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            beers: []
        };
    };
    loadBeers = () => {
        axios.get("https://api.punkapi.com/v2/beers").then((result) => {
            this.setState({beers: result.data})
        })
    };
    componentDidMount(){
        console.log(this.loadBeers());
    };
    render () {
        return (
            <div id='app'>
                <Header />
                <Beers beers={this.state.beers} />
            </div>       
        );
    };
};

export default App;