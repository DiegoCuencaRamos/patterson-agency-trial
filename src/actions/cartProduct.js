const addCartProduct = (product) => ({
    type: 'cartProduct/addProduct',
    payload: product
})

const removeCartProduct = (id) => ({
    type: 'cartProduct/removeProduct',
    payload: id
})

export {
    addCartProduct,
    removeCartProduct
}