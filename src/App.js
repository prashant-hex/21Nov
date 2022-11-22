import { useEffect, useState } from 'react';
import './App.css';
import Component from './Component';
import ClassComponent from './ClassComponent';
import LoginForm from './LoginForm';
import FormInputs from './FormInputs';
import Recursion from './Recursion';
import Callback from './Callback';
let apiData = {"name":"John", "age":30, "car":null}

function App() {

  const [childData, setChildData] = useState("");

  //window load

  useEffect(()=>{
    window.onload = function (){ 
      console.log("window loaded success")
      loops();
    }
  },[])

  function loops(){
    let myName = "Prashant Singh";
    for (let i=0;i<=10;i++){
      console.log(i)
      if(i===2){
        console.log("if",i)
      }else if(i===4){
        console.log("else",i)
      }else{
        console.log("default else")
      }
    }
    consoleWarn(myName)
  }

  function consoleWarn(data){
    console.warn(data)
  }

  // const pull_data = (data) => {
  //   console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  //   setChildData(data) //func={pull_data}
  // }

  return (
    <div className="App text-center">
    <p>App.js</p>
    <Recursion/>
    <Callback/>
    {/* <FormInputs/> */}
    <h3 className='h3text'>text</h3>
    <Component name="Data send as props"/>
    <ClassComponent value={{name:"abc", age:13}}/>
    <LoginForm data={apiData}/>
    {
      apiData.name==="John" ? <ClassComponent value={{name:"abc", age:13}}/> : <p>noNe to be displayed</p>
    }
    </div>
  );
}

export default App;
