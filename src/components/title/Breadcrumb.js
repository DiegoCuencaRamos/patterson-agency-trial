import React from 'react'

const Breadcrumb = ({ item, index, length }) => (
    <li className="breadcrumbs__item">
        <span>{item}</span>
        {index !== length -1 && <span>/</span>}
    </li>
)

export default Breadcrumb