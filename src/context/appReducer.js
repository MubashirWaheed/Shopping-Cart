export  const  reducer= (state, action )=>{
    switch (action.type) {
        case "add":
            return {
                ...state,
                items: [ ...state.items, action.payload] 
            };
    
        default:
            break;
    }
}
