import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {login} from "./features/user"
import {logout} from "./features/user"
import { changTheme } from "./features/theme";
import { useState } from "react";
function App() {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch();
  return (
    <div className="App" style={{backgroundColor: theme }}>
      <h1>name: {user.name} </h1>
      <h1>age: {user.age} </h1>
      <h1>email:{user.email} </h1>
      <button onClick={() => {
        dispatch(login({name:"omar" , age:"21" , email:'of405789@gmail.com'}));
      }}>login</button>
      <button onClick={() => {
        dispatch(logout());
      }}>logout</button>
      <br/>
      <br/>
      <br/>
      <button onClick={() => {
        dispatch(changTheme(theme=== 'black' ? 'white' : "black"));
      }}>change theme</button>
    </div>
  );
}

export default App;
