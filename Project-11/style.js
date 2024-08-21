const value = fetch('https://jsonplaceholder.typicode.com/todos/1'); // Created the promise
// For the consumption phase

value
.then((data) => {
   const response = data.json(); // Async operation which returns a promise
   response
    .then((output) => console.log(output))
    .catch((error) => console.log(error))
    .finally(() => console.log('Promise is done'))
})
.catch((error) => console.log(error))
.finally(() => console.log('Promise is done'))
