import React from 'react'

const Starts = ({ rate }) => {
    // 1. Variables
    let starsArray = []
    for (let i = 0; i <= rate; i++) {
        starsArray.push(
            <i key={i} className="fas fa-star"></i>
            )
    }

    // 2. Render
    return (
        <ul className="product__starts">
            {starsArray}
        </ul>
    )
}

export default Starts