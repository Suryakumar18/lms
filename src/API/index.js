export const addedCourses=()=>{
   return fetch('https://dummyjson.com/carts/1') .then((res)=> res.json()) ;
}



export const getRrecords=()=>{
    return fetch('https://dummyjson.com/carts').then(res => res.json())
   
}


export const getAllCourses=()=>{
    return fetch('https://dummyjson.com/products').then(res => res.json())
    
}