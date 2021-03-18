import styled from 'styled-components';

const Product=styled.aside`
        width:320px;
        height:500px;
        padding:2rem 1rem;
        background-color:grey;
`
function ProductCard(){
    return(
        <Product>
            this is a product
        </Product>
    )
}
export default ProductCard;