import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import RenderProductData from "./renderProductData";


function App() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    axios
    .get("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
    .then((data) => {
      setProductData(data.data);
    });

  }, []);


  return (
    <div className="App">
      <h1>FruitKart</h1>
      {}
      {productData && <RenderProductData data={productData.store_items}/>}
      {}
    </div>
  );
}

export default App;
