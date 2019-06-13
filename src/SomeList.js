import React from 'react'

export default function SomeList(props) {
    const lista =props.lista.map(li=>{
        return <li> <span className="name">{li.name}</span> <span className="surname">{li.surname}</span> <span className="date">{li.date}</span></li>
    })
    return (
       <ul className="list">
            {lista}
        </ul>
    )
}


