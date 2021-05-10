import React from 'react'
import Container from '../Container'
import Breadcrumb from './Breadcrumb'

const Title = () => {
    // 1. Variables
    const breadcrums = ['Todos los productos', 'Cocina', 'Productos destacados']

    // 2. Render
    return (
        <section className="page-title">
            <Container>
                <h1 className="page-title__title">Productos destacados</h1>
                <ul className="breadcrumbs">
                    { breadcrums.map((item, index) => (
                        <Breadcrumb
                            key={index}
                            item={item}
                            length={breadcrums.length}
                        />
                    )) }
                </ul>
            </Container>
        </section>
    )
}

export default Title