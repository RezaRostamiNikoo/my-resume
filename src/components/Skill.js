import React from 'react'

const Skill = (props) => {
    if (props.value)
        return (
            <li>
                <label>{props.title}</label>
                <progress max="100" value={props.value}></progress>
            </li>
        )
    else
        return (
            <span class="rounded-xl bg-gray-300 px-3">{props.title}</span>
        )
}

export default Skill