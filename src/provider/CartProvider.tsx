import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from '../types';

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
}


const CartContext = createContext<CartType>({
    items: [],
    addItem: () => { }
});

export const CartProvider = ({ children }: PropsWithChildren) => {
    
    const [items, setItems] = useState<CartItem[]>([])

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)