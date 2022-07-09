import React from 'react'
import { products } from '../Components/product_lists.json'
import Card from '../Components/Card'
import '../Components/css/Card.css'
const Homes = () => {
    return (
        <div>

            <section className='cards__container'>{
                products.details.map((v) => {
                    return (
                        <div>
                            <Card name={v.name}
                                Img={v.imageURL}
                                price={v.price} />
                        </div>
                    )
                })
            }
            </section>
        </div>
    )
}

export default Homes