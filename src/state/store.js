// store.js

import { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const reducer = (state, action) => {
    // Implement reducer logic based on action types
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { /* initial state */ });

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
};

export const useAppState = () => useContext(AppStateContext);
export const useAppDispatch = () => useContext(AppDispatchContext);
