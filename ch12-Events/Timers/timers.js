function sayMyName(name) {
 console.log("hello " + "Ahmed");
}

// setTimeout(sayMyName,5000)

// setInterval(sayMyName,1000)

let timer = setInterval(sayMyName,1000)

setTimeout(function(){
    clearInterval(timer)
},10000)