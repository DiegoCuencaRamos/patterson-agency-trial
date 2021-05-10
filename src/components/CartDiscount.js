import React from 'react'

const Discount = () => {
    const onApplyDiscount = (e) => {
        e.preventDefault()
        
        const discount = e.target.elements.discount.trim().toLowerCase()
        
        if(discount === 'dto50') {
            
        }

        if(discount === 'dto10') {

        }
    }    
    
    return (
        <form className="cart-discount" onSubmit={onApplyDiscount} >
            <input name="discount" type="text" placeholder="Código descuento" />
            <button>Aplicar</button>
        </form>
    )
}

export default Discount