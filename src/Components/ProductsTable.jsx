import ProductCard from "./ProductCard";

function ProductsTable({data=[]}){
    console.log(data);
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>image</th>
                        <th>title</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {data.map((item,i) => {
                      return  <ProductCard  id={item.id} brand={item.brand} category={item.category} price={item.price} title={item.title} image={item.image}/>
                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable