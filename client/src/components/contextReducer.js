import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':

            const existingItem = state.find(item => item.id === action.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.id ? { ...item, quantity:action.quantity ,singleTotal:action.singleTotal+existingItem.singleTotal} : item
                );
            } else {
                return [
                    ...state,
                    {
                        id: action.id,
                        name: action.name,
                        category: action.category,
                        singleTotal: action.singleTotal,
                        singlePrice: action.singlePrice,
                        quantity: action.quantity,
                        size: action.size,
                        image:action.image
                    }
                ];
            }
        case 'Remove':
            return state.filter(item => item.id !== action.id);
            case 'empty':
                return []
        default:
            throw new Error('Unhandled action type in reducer');
    }
};


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
