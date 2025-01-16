Hooks in React

1. useState - It is used to handle variables in React
2. useEffect

<!-- E-Commerce Website
Categories -- Electronics, Clothes, Footwears
Electronics - 100 items

item 1, item 2 ....... item 100

100 items more to be added

item 101, item 102 item 103

Rather than creating each item on frontend separately,
we create a reusable item component on frontend and fetch all items from backend via an API

API - Application Programming Interface

Dish - Frontend
Kitchen - Backend

          DISH

Kitchen -------- You
API

useEffect -- This is used to call an API and save the API Data in state and render the state on frontend

requirement to implement Routing in react

package -> react-router-dom
imports -> BrowserRouter, Routes, Route
utility hook -> useNavigate
utility function provided by useNavigate - navigate('<route-name>') -->

<!-- Asynchronous Calls - Calls which we have to wait for to get completed

Synchronous Calls - Immediate response

To handle asynchronous calls, JAVASCRIPT PROMISES were introduced

Callbacks
To prevent callback hell, promises were introduced in javascript

Stable promises were introduced in ES6
Promises
async await -->

<!-- const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  const isError = true;
  if (isError) {
    setTimeout(() => {
      console.log("Async task has completed");
      reject("Something went wrong");
    }, 500);
  } else {
    setTimeout(() => {
      console.log("Async task has completed");
      resolve();
    }, 500);
  }
});

.then
.catch

if resolved is called, .then will run
promiseOne
  .then(() => {
    return "fetch items";
  })
  .then((result) => {
    console.log(result);
    return "purchase item";
  })
  .then((result) => {
    console.log(result);
    return "ship item";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://jsonplaceholder.typicode.com/todos/10")
  .then((result) => result.json())
  .then((response) => console.log(response));

async await

async function callTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
  const result = await response.json();
  console.log(result);
}

callTodos();

const ecommerce = () => {
  function fetchItem() {
    function purchaseItem() {
      function shipItem() {
        function deliverItem() {
          function receiveItem() {}
        }
      }
    }
  }
};

// callback hell
ecommerce(); -->

<!-- useMemo & useCallback -->

useMemo => it is used to memoize a variable

useCallback => it is used to memoize a function

= assigning
== compare value
=== compare value and data type
