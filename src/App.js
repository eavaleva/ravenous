
import {Component} from "react";
import './App.css';
import Business from "./components/Business/Business";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "../src/components/SearchBar/SearchBar";


const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'ELEONORAS Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}
const businesses = [business,business,business,business,business,business];

class App extends Component {
    searchYelp(term, location, sortBy){
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    }
    render() {
        return (
            <div className="App">
                <h1>Ravenous</h1>
                <SearchBar searchYelp = {this.searchYelp}/>
                <BusinessList business ={businesses}/>
            </div>
        );
    }
}
export default App;
