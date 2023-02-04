import { useEffect, useState,useContext } from "react";
import { Link, useParams } from "react-router-dom"
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";

function SingleProductPage(){
    const {id}=useParams();
    const [data,setData]=useState({});
    const [loader,setLoader]=useState(true);
    const {userAuth,addToCart}=useContext(AuthContext);

    useEffect(()=>{
        fething();
    },[id])

    const fething=async()=>{
        let a=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
        let b=await a.json();
        setData(b.data);
        setLoader(false);
    }

    if(loader)
    return <Loader />
    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">
                    {data.brand}
                </h3>
            </div>
            <div >
            <img data-testid="product-image" src={data.image} alt={data.brand} />
            </div>
            <div data-testid="product-category">
                {data.category}
            </div>
            <div data-testid="product-details">
                {data.title}
            </div>
            <div data-testid="product-price">
                {data.price}
            </div>
           <Link to="/cart"><button onClick={()=>addToCart(data)}>Add to Cart</button></Link>
            </div>
    )
}
export default SingleProductPage