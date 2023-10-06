import axios from "axios";

//acciones: exportarlas

export const SELECT_DATE = "SELECT_DATE"
export const REMOVE_DATE = "REMOVE_DATE"
export const ADD_DATE = "ADD_DATE"



export const selectDate = (payload) => { // 
    return ({
        type: 'SELECT_DATE',
        payload
    })
}

export const removeDate = (payload) => { // 
    return ({
        type: 'REMOVE_DATE',
        payload
    })
}

export const addDate = (payload) => { // 
    return ({
        type: 'ADD_DATE',
        payload
    })
}




/*

export const getDogs = () => {
    return async function (dispatch) { 
        const response = await axios.get('http://localhost:3001/dogs'); //busca datos de la api
        const dogs = response.data; // los guarda en una constante
        dispatch({type: GET_DOGS, payload:dogs}); // despacha el nombre de la accion y la respuesta
   
   }
}

// este tipo de funciones solo recibe un contenido y y lo devuelve ocmo una accion. 
export const searchbar = (payload) => { // 
    return ({
        type: 'SEARCHBAR',
        payload
    })
}

*/


