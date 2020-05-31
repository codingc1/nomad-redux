import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerHTML = 0;
const ADD = "ADD";
const MINUS ="MINUS";

const counterModifier = (count = 0, action) =>{
  switch(action.type){
    case ADD:
      return count +1;
    case MINUS:
      return count -1;
    default:
      return count;
  }
  
};

const countStore = createStore(counterModifier);

const onChange=()=>{
  number.innerHTML = countStore.getState();
}
countStore.subscribe(onChange);

const handleAdd =()=>{
  countStore.dispatch({ type:ADD  });
}
const handleMinus =()=>{
  countStore.dispatch({ type:MINUS  });
}
add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)
// countStore.dispatch({type: "ADD"})
// console.log(countStore);