import React, { Component } from 'react'

export class SomeList extends Component {
    render() {
        const lista =this.props.lista.map(li=>{
            return <li> <span className="name">{li.name}</span> <span className="surname">{li.surname}</span> <span className="date">{li.date}</span></li>
        })
        return (
            <ul className="list">
            {lista}
            </ul>
        )
    }
}

export default SomeList
