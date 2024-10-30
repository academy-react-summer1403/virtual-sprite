const setItem =(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}

const getItem =(key)=>{
    if(localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
    return false;
}

export{getItem,setItem};