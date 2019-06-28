import React, { Component } from 'react';

export default class HelloWorld extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render () {
        const myName = "YTT"
        return (
            <div>Hello World!! I'm {myName}</div>
        )
    }
}