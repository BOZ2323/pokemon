import React, { Component } from 'react'

import PokemonList from '../PokemonList'

export default class Dashboard extends Component {
    render() {
        return ( <
            div >
                <div className="row">
                    <div className="column">
                        <PokemonList/>
                    </div>
                </div>

                <h1 > Dashboard < /h1>

            <
            /div>
        )
    }
}
