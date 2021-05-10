const getSumary = (products) => {
    const count = products.length

    const price = products.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
        }, 0)
 
    return { 
        count,
        price: price.toFixed(2) }
}

export {
    getSumary
}
