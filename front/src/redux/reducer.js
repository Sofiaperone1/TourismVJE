import {SELECT_DATE} from "./actions.js"


const initialState = {
  selectedDates:[] ,
  selectedDay:""
};

const rootReducer = (state = initialState ,action) => {

switch(action.type) {
    // encuentra la accion adecuada y retorna el cambio en el estado inicial
    
    case SELECT_DATE: 
    console.log("soy la hora guardada", action.payload)
    return {...state, selectedDay: action.payload};
    /*
    

    case FILTER_BY_TEMP:    
    const result = state.allDogs;
    if (action.payload === "Todos") {
        console.log(action.payload)
        return {
            ...state,
            dogs: result,
        }
    } else {
        const filteredDogs=[];
        result.map((dog) => {
            const temperament = dog.temperament;
           if (temperament !== undefined) {
           const array = temperament.split(", ");
          
            const included = array.includes(action.payload);
           
            if (included === true) {filteredDogs.push(dog)}
            
        }});
        return {...state, dogs: filteredDogs};
}; */



    default:
        return {...state}
}
}

export default rootReducer;
