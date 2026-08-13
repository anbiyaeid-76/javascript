// function listNames(){
//     console.log("ahmed");
//     console.log("fatima");
//     console.log("ali");
//     console.log("hassan");
//     console.log("moha");


// }
// listNames()

function* listNames() {
    yield "ahmed";
    yield "fatima";
    yield "ali";
    yield "hassan";
    yield "moha";
}

let names = listNames();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showNames() {
    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value); 
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
}

showNames();