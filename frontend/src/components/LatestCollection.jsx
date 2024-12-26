import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latetestProducts, setLatestproduct] = useState([]);

    // useEffect(()=>{
    //     setLatestproduct(products.slice(0,10))
    // },[])
    useEffect(() => {
        if (products && products.length > 0) {
          setLatestproduct(products.slice(0, 10));
        }
      }, [products]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'NEW'} text2={'ARRIVALS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover the perfect blend of style and comfort with our Latest Collection - crafted just for you!
            </p>
        </div>

        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'> 
            {
                latetestProducts.map((item,index)=>(
                    <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection