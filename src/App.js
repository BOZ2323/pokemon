import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import PokemonList from './components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    // state = {
    //         pokemons: [{
    //                 id: 1,
    //                 name: undefined
    //             },
    //             {
    //                 id: 2,
    //                 name: undefined
    //             }
    //         ]
    //     }
    // getPokemonData = async(e) => {
    //     e.preventDefault();
    //     const name = e.target.element.name.value;
    //     // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    //     const api_call = await fetch('https://pokeapi.co/api/v2/pokemon-species/{name}')
    //     const data = await api_call.json();
    //     console.log(data);




    // }


    render() {
        return ( <
            div className = "App" >
                <Navbar/>
                <PokemonList/>


            </div>
        );
    }
}

export default App;
