import React, { useState } from 'react'
import css from "./Products.module.css"
import Plane from "../../assets/plane.png"
import { ProductsData } from '../../data/products'

const Products = () => {

    const [MenuProducts, setMenuProducts] = useState(ProductsData)
    const filter = (type) => {
        // {
        //     type === 'all'?
        //     setMenuProducts(ProductsData)
        // }
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }
    return (
        <div className={css.container}>
            <img src={Plane} alt="plane" />
            <h1>our Featured Products</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                    <li onClick={()=>filter("skin care")}>Skin Care</li>
                    <li onClick={()=>filter("conditioner")}>Conditioners</li>
                    <li onClick={()=>filter("foundation")}>Foundations</li>
                </ul>
                <div className={css.list}>
                    {
                        MenuProducts.map((product, i) => (
                            <div className={css.product}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}$</span>
                                </div>
                                <img src={product.img} alt="product" className='img-p' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
