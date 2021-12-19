import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";

import '../styles/custom-styles.css';

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
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'Pruebas'} className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle title={''}
                                  className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}>
                    <ProductImage style={{
                        borderRadius: '20px',
                        padding: '10px',
                        width: 'calc(100% - 20px)',
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle style={{fontWeight: 'bold'}}/>
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>
            </div>
        </div>
    );
}
