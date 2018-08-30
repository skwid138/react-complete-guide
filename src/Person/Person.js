import React from 'react'
import './Person.css'

/* When using class based components this.props must be used */
/* props,children allows you to access anything passed between the component tags */
const person = props => {

    // <p>This is a random number { Math.floor(Math.random() * 30) }</p>

    return (
        <div className="Person">
            <p onClick={ props.click }>I'm {props.name} and I'm { props.age } years old.</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name }/>
        </div>
    )
}

export default person