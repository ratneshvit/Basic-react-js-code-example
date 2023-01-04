export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// import React, { useReducer } from 'react'
// type Actions=
//     {type:'add',payload:string}
//     |    {type:'remove',payload:number}
//     |    {type:'done',payload:number}
// const TodoReducer=(state:Todo[],action:Actions)=>{
//     switch(action.type){

//     }

// }

// const ReducerExample = () => {
//     const[state,dispatch]=useReducer(TodoReducer,[])
//   return (
//     <div>ReducerExample</div>
//   )
// }

// export default ReducerExample
