let text=document.querySelector("input");

function debounce(func,delay){

    let timer;

    return function(...args){
         clearInterval(timer)
         timer=setTimeout(()=>{
            func(...args)
        },delay)
    }
}

function throttle(func,delay){
    let timer=0;
    return function(...args){
     let new_time=Date.now();
     if(new_time-timer>=delay){
        timer=new_time
        func(...args)
     }
    }
}


text.addEventListener("input",throttle(function(){
    console.log("hello")
},1000))
