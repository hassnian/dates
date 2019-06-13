import React, { Component } from 'react'

export class SomeList extends Component {
    render() {
        const lista =this.props.lista.map(li=>{
            return <li>{li.name}</li>
        })
        return (
            <ul className="list">
            {lista}
         
            </ul>
        )
    }
}

export default SomeList
