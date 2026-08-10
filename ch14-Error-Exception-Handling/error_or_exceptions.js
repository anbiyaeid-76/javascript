try {
    // open the database connection
  // let firstName = "ahmed"
  // console.log(firstName.toUpperCase());
  // console.log("hello");
  // console.log("hello2");
  let dbError = new Error("could not coonect to the database");
  throw dbError;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("this will run regardless of the error");
//   close the database connection
}
