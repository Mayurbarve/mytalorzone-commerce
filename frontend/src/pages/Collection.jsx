import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy =productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
  }

  // const applyFilter = () => {
  //   let productsCopy = (products || []).slice();
  //   if (showSearch && search) {
  //     productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  //   }
  //   if (category.length > 0) {
  //     productsCopy = productsCopy.filter(item => category.includes(item.category));
  //   }
  //   if (subCategory.length > 0) {
  //     productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
  //   }
  //   setFilterProducts(productsCopy);
  // };



  const sortProducts = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case '2':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case '3':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }


  }


  useEffect(() => {
    applyFilter();
  }, [subCategory, category, search, showSearch, products])

  useEffect(() => {
    sortProducts();
  }, [sortType])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*Filter Option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-19' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/*Category Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 textsm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kurti'} onChange={toggleCategory} /> Kurti
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Saree'} onChange={toggleCategory} /> Saree
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Lehnga'} onChange={toggleCategory} /> Lehnga
            </p>
          </div>
        </div>

        {/*Sub Category Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 textsm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Silk'} onChange={toggleSubCategory} /> Silk
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Cotton'} onChange={toggleSubCategory} /> Cotton
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Banarasi'} onChange={toggleSubCategory} /> Banarasi
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Traditional'} onChange={toggleSubCategory} /> Traditional
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'StraightFit'} onChange={toggleSubCategory} /> Straight Fit
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Embroidered'} onChange={toggleSubCategory} /> Embroidered
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bride'} onChange={toggleSubCategory} /> Bride
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Party'} onChange={toggleSubCategory} /> Party wear
            </p>
          </div>
        </div>
      </div>

      {/*Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />


          {/*Product Sort*/}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="2">Sort by: Low to High</option>
            <option value="3">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Product*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection