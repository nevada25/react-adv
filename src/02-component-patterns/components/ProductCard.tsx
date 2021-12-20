import styles from '../styles/styles.module.css';

import {useProduct} from "../hooks/useProduct";
import React, {createContext} from "react";
import {onChangeArgs, Product, ProductContextProps} from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}


export const ProductCard = ({children, product, className, style, onChange, value}: Props) => {
    const {counter, increaseBy} = useProduct({onChange, product, value});
    return (
        <Provider value={{counter, increaseBy, product, value}}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>

    );
}

/*
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;*/
