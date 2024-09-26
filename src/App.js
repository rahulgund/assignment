import React from "react";
import ReactDom from "react-dom/client";
import TodoApp from "./components/TodoApp";


const Applayout = () => {
    
    return (
     
         <div className="app">
            <TodoApp/>
        </div>
    
       
    );
}



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Applayout/>)



