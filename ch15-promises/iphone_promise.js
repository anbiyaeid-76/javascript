// creating promise
function motherPromise(boyBehaved) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (boyBehaved) {
        resolve("You behaved well! I will buy you a phone 📱");
      } else {
        reject("You did not behave! No phone 😢");
      }
    }, 3000); // wait 3 seconds
  });
}
// consume the promise
// motherPromise(false)
//   .then((message) => {
//     console.log("mothers promise fulfilled " + message);
//   })

//   .catch((error) => {
//     console.log("mothers promise failed " + error);
//   });

async function askMother() {
  try {
    
    let answer = await motherPromise(true);

    console.log("Mother:", answer);
  } catch (error) {
    console.log("Mother:", error);
  } finally {
    console.log("The promise has been settled.");
  }
}
askMother();
