import React, { Component } from 'react'

export default class Pokemon extends Component {

    state = {
        name: "",
        imageurl: "",
        uniqueIndex: ""
    }



    render() {
        const name = this.props.name;
        const url = this.props.url;


        return ( <
            div>
                <div className="card">
                    <h1>{name}</h1>
                </div>


            <
            /div>
        )
    }
}
