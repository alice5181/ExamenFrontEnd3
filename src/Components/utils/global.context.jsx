import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Estado inicial del contexto global
export const initialState = {
  theme: 'light', // Tema por defecto 'light'
  data: [],
};

// Creación del contexto global
export const ContextGlobal = createContext(undefined);


/* Definimos el reductor que gestionará el estado global
...state : Esto crea una copia del estado actual (state) para mantener la inmutabilidad del estado
action.payload: valor que se pasa como argumento cuando se despacha una acción en el reductor*/
const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload }; 
    case "SET_DATA":
      return { ...state, data: action.payload }; 
    default:
      return state;
  }
};

/*Componente ContextProvider que proporciona el contexto global a la aplicación
-state: Esta constante almacena el estado actual de la aplicación. 
Inicialmente, tiene el valor que se proporciona como segundo argumento a useReducer
-dispatch es la función que se utiliza para disparar acciones 
que luego son procesadas por (globalReducer) para actualizar el estado global de la aplicación.*/
export const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(globalReducer, initialState);//useReducer gestiona el estado global
  
  // Al cargar el componente, obtiene el tema del localStorage
  useEffect(() => {
    const themeStored = localStorage.getItem('theme'); 
    if (themeStored) {
      dispatch({ type: "SET_THEME", payload: themeStored }); // actualiza el tema desde localStorage
    }
  }, []); 

  // Función para cambiar el tema del contexto global y actualizar el localStorage
  const setTheme = (theme) => {
    localStorage.setItem('theme', theme); // Guarda el tema en localStorage para futuras sesiones
    dispatch({ type: "SET_THEME", payload: theme }); // Actualiza el tema en el estado global
  };

  // Acción para establecer los datos (cambiar)
  const setData = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };

  return (
    <ContextGlobal.Provider value={{ theme: state.theme, setTheme, data: state.data, setData }}>
      {children}
    </ContextGlobal.Provider>
  );
}; 


// Hook personalizado para acceder al contexto global
export const useContextGlobal = () => useContext(ContextGlobal);
