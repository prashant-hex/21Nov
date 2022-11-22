import React , {useState, useEffect} from 'react'

const LoginForm = (props) => {
    const [name, setName] = useState("");
    const [isClicked, setIsClicked] = useState("User");
    const [counter, setCounter] = useState(0);
    const clickedFn = ()=>{
        setIsClicked(name);
        sessionStorage.setItem("username",name)
        localStorage.setItem("username",name)
    }

    useEffect(()=>{
        // const interval = setInterval(() => {
        //     setCounter((prevCounter) => prevCounter + 1);
        //   }, 1000);

        //   return () => clearInterval(interval);

        // setTimeout(() => {
        //   alert('Hello, World!')
        // }, 3000);
    },[])

    const TimeFn = () => {

        setTimeout(() => {
            alert('Hello, World!')
          }, 3000);
        const interval = setInterval(() => {
            setCounter((prev) => prev + 1);
          }, 1000);

        return () => clearInterval(interval);
        
    }

    // props.func('My name is Dean Winchester & this is my brother Sammie');

  return (
    <>
        <h5>{props.data.name}</h5>
        <h5>{props.data.age}  {props.data.car}</h5>
        <form>
      <label>Enter your name:
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      </label>
    </form>
    <button className="btn btn-primary" onClick={clickedFn}>Login</button>
    <h5>{isClicked}</h5>
    <h5>session storage {sessionStorage.getItem("username")}</h5>
    <h5>local storage {localStorage.getItem("username")}</h5>
    <button className="btn btn-primary" onClick={TimeFn}>Try it</button>
    <p className='text-danger'>{counter}</p>
    </>
  )
}

export default LoginForm