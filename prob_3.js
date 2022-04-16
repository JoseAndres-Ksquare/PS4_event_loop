
const slice = (arr, cutFunc) => {
    for(let i = 0; i<arr.length; i++){
        if(!cutFunc(arr[0])){
            arr.shift();
        }
    }
    return console.log(arr)
}
const cutFunc = (n) =>{
    if(n >= 3){
        return true;
    }else{
        return false;
    }
}

slice([1,2,3,4], cutFunc)
