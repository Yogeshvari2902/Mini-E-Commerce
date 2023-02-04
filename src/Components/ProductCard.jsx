import { Link } from "react-router-dom";

 function ProductCard({
    brand,
    category,
    price,
    id,
    image,
    title
})

{
    return (
        <tr data-testid="item" key={id}>
            <td>{id}</td>
            <td><img src={image} alt={title} /></td>
            <td>{title}</td>
         <Link to={`/products/${id}`} data-testid="brand">
            {brand}</Link>   
            <td data-testid="category">
            {category}
            </td>
          
            <td data-testid="price"> {price}
            </td>
                    </tr>
                    
    )
}

export default ProductCard