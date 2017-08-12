export const newSlide = (type) =>{
    console.log('You want to add a new slide ' + type);
    return{
        type: 'NEW_SLIDE',
        payload: type
    }
}
