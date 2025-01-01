Hooks in React

1. useState - It is used to handle variables in React

E-Commerce Website
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

Kitchen --------> You
API

useEffect --> This is used to call an API and save the API Data in state and render the state on frontend

Asynchronous Calls - Calls which we have to wait for to get completed

Synchronous Calls - Immediate response

To handle asynchronous calls, JAVASCRIPT PROMISES were introduced

Promises
.then
async await

requirement to implement Routing in react

package -> react-router-dom
imports -> BrowserRouter, Routes, Route
utility hook -> useNavigate
utility function provided by useNavigate - navigate('<route-name>')
