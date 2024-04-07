import {
    GAMES,
    DETAILS,
    PAGESNUM,
  
}from './actions'

const initialState={
    character: [],
    charById:[],
    pageNumber:[],
    currentPage: 1,
}

const reducer= (state = initialState, {type, payload})=>{
        switch(type){
            case GAMES:
                return{
                    ...state,
                    character:payload.results,
                    pageNumber:payload.info.pages,
                }
            case PAGESNUM:
                return{
                    ...state,
                    currentPage:payload,
                }
            case DETAILS:
                return{
                    ...state,
                    charById:payload,
                }
            default: 
            return {
                ...state,
            }
           
        }
};

export default reducer;