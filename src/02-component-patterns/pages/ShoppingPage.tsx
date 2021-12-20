import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";

import '../styles/custom-styles.css';
import {Product} from "../interfaces/interfaces";
import {products} from "../data/products";

const product: Product = products[0]
export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    (productCartHandlers) => (
                        <>
                            <ProductImage className="custom-image"
                                          style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                            <ProductTitle title={productCartHandlers.product.title}
                                          className="text-white text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                            <button onClick={productCartHandlers.reset}>Reset</button>
                            <button onClick={() => productCartHandlers.increaseBy(-2)}>-2</button>
                            {
                                !productCartHandlers.isMaxCountReached && (
                                    <button onClick={() => productCartHandlers.increaseBy(+2)}>+2</button>)
                            }

                            <span>{productCartHandlers.count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
}
