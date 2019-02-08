import React from 'react';

const Form = props => (
    <form onSubmit = {props.getPokemonData}>
        <input type="text" name="name" placeholder="name"/>

        <button>Get Pokemon data</button>
    </form>
)

export default Form;
