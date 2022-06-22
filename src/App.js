import logo from './logo.svg';
import './App.css';
import React, { component } from 'react'
import './componnets/Items'
import NewItem from './componnets/NewItem';
import ProductTable from './componnets/ProductTable';

function App() {
  const products = [
    { id: 1, productName: 'Denim Jeans', price: 1350, description: 'Men Blue 32 Regular Distress' },
    { id: 2, productName: `Levi's Jeans`, price: 1400, description: 'Women Black 30 Slim' },
    { id: 3, productName: 'Puma Shorts', price: 900, description: 'Men Grey L Sports-Shorts' },
    { id: 4, productName: 'YFB Couple T-Shirts', price: 600, description: 'Printed Men&Women Round-Neck White T-Shirt (Pack of 2)' },
  ]
  return (
    <div className='container mx-0 mw-100 mh-auto'>
      <h1 className='mx-5 pt-5'>Lead the Market</h1>
      <ProductTable Products={products}/>

      <NewItem />

    </div>
  );
}

export default App;
