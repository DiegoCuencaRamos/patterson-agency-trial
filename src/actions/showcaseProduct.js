import getProducts from "../utils/requets"

const setShowcaseProducts = (products) => ({
    type: 'showcaseProduct/setProducts',
    payload: products
})

const startSetShowcaseProducts = () => {
    return async (dispatch, getState) => {
        const products = await getProducts()
        dispatch(setShowcaseProducts(addRate(products)))
    }   
}

const addRate = (products) => {
    let finalProducts = []

    products.forEach(product => {
        const rate = Math.floor((Math.random() * 5))

        finalProducts.push({
            ...product,
            rate
        })
    })

    return finalProducts    
}

export {
    setShowcaseProducts,
    startSetShowcaseProducts
}