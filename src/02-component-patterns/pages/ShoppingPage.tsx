import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";


const product = {
    id: '1545',
    title: 'Coffee mug -card',
    img: './coffee-mug.png'
}
export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoppin Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title={'Pruebas'}/>
                    <ProductCard.Buttons/>
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title={''}/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    );
}
