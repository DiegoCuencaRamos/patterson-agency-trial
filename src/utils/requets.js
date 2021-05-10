const getProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=4`)

    if(response.status === 200) {
        return await response.json()
    } 

    throw new Error('Unable to fetch produtcs.')
}

export default getProducts