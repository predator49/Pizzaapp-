export async function apiCall(URL){
    try{
   const response =await fetch(URL);//async way}
   return response;
    }
catch(err){
    throw err;
}
}