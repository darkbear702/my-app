import React, { useState, useEffect } from "react";
import data from './data.json'
import styled from 'styled-components'
import './App.css'
const WhiteBox = styled.ul`
  list-style-type: none;
  padding: 50px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;


const ItemSlot = styled.li`
 width: 400px;
 margin: 10px;
 padding: 10px;

`;
function App() {
  const [products, setProducts] = useState(data);
  const [productList, setProductList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchPrice, setSearchPrice] = useState(99999999999);
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter(product => {
      if(searchPrice === '')
      setSearchPrice(999999999999);
      if(product.LowestPriceWeb === "PhongVu")
      return product.Name.toLowerCase().includes(searchName.toLowerCase()) && product.PhongVu.Price <= searchPrice;
      else if(product.LowestPriceWeb === "FPT")
      return product.Name.toLowerCase().includes(searchName.toLowerCase()) && product.FPT.Price <= searchPrice;
      else
      return product.Name.toLowerCase().includes(searchName.toLowerCase()) && product.Hacom.Price <= searchPrice;
    });
    setProductList(filteredProducts);
  };

  const handleShow = (product) => {
    if(product.LowestPriceWeb === "PhongVu")
      return <>
      
          <ItemSlot>
            <div class="product-list-container">
              
              <div class="product-card"><a href={product.PhongVu.LinkWeb}>
                <img  src={product.PhongVu.Photo} alt={product.Name}/></a>
                <br />
                <strong class="product-title">Name: {product.Name}</strong>
                <a href={product.PhongVu?.LinkWeb}><p class="product-price">Best price: PhongVu: {product.PhongVu.Price} VND</p></a>
                {product.FPT?.LinkWeb && (
                  <a href={product.FPT?.LinkWeb}><p class="product-description">FPT Price: {product.FPT?.Price} VND</p></a>
                )}
                {product.Hacom?.LinkWeb && (
                  <a href={product.Hacom.LinkWeb}><p class="product-description">Hacom Price: {product.Hacom.Price} VND</p></a>
                )}
                <br></br>
              </div>
            </div>
          </ItemSlot>
      </>
    else if(product?.LowestPriceWeb === "FPT")
    return <>
          <ItemSlot>
            <div class="product-list-container">
              
              <div class="product-card"><a href={product.FPT.LinkWeb}>
                <img  src={product.FPT.Photo} alt={product.Name}/></a>
                <br />
                <strong class="product-title">Name: {product.Name}</strong>
                <a href={product.FPT?.LinkWeb}><p class="product-price">Best price: FPT: {product.FPT.Price} VND</p></a>
                {product.PhongVu?.LinkWeb && (
                <a href={product.PhongVu?.LinkWeb}><p class="product-description" >PhongVu Price: {product.PhongVu?.Price} VND</p></a>
                )}
                
                {product.Hacom?.LinkWeb && (
                  <a href={product.Hacom.LinkWeb}><p class="product-description">Hacom Price: {product.Hacom.Price} VND</p></a>
                )}
                <br></br>
              </div>
            </div>
          </ItemSlot>
      </>
    else
    return <>
      <li>
      <ItemSlot>
            <div class="product-list-container">
              
              <div class="product-card"><a href={product.Hacom.LinkWeb}>
                <img  src={product.Hacom.Photo} alt={product.Name}/></a>
                <br />
                <strong class="product-title">Name: {product.Name}</strong>
                <a href={product.Hacom?.LinkWeb}><p class="product-price">Best price: Hacom: {product.Hacom.Price} VND</p></a>
                {product.FPT?.LinkWeb && (
                  <a href={product.FPT?.LinkWeb}><p class="product-description">FPT Price: {product.FPT?.Price} VND</p></a>
                )}
                
                {product.PhongVu?.LinkWeb && (
                <a href={product.PhongVu?.LinkWeb}><p class="product-description" >PhongVu Price: {product.PhongVu?.Price} VND</p></a>
                )}
                <br></br>
              </div>
            </div>
          </ItemSlot>
      </li>
      </>
  };

  return (
    <div>
      <h1>Comparison shopping website</h1>
      <br/><br/>
      <div>
        <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Name"
          value={searchName}
          onChange={(e)=>setSearchName(e.target.value)}
        />
        <input
          type="int"
          placeholder="Maximun Price"
          value={searchPrice}
          onChange={(e)=>setSearchPrice(e.target.value)}
        
        /><input type="submit" className="addbtn"/>
        </form>
      </div>
      <ul>
        <WhiteBox>
        {productList.map((product)  => (handleShow(product)
        ))}
        </WhiteBox>
      </ul>
    </div>
  );
};

export default App;
