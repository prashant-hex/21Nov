import React, {useEffect, useState} from 'react';

let array = [1,2,3,4,5,6]

const Recursion = () => {

    const [answer, setAnswer] = useState('')

    // program to count down numbers to 1
    function countDown(number) {
        console.log(number);
        const newNumber = number - 1;
        if (newNumber > 0) {
            countDown(newNumber);
        }
    }

    useEffect(()=>{
        countDown(4)
        const num = 5;
        // if(num>0){
        //     let result = factorial(num)
        //     console.log(`the factorials of ${num} is ${result}`)
        // }
    },[])

    const handleChange = (e)=>{
        console.log(e.target.value)
    }

    function factorial(x){
        if(x===0){
            return 1;
        }else{
            return x * factorial(x-1);
        }
    }

    const factorialNumber= (e) => {
        setAnswer(e.target.value)
        let num = e.target.value; 
        if(num>0){
            let result = factorial(num)
            setAnswer(result)
            console.log(`the factorials of ${num} is ${result}`)
        }
    }
  return (
    <>
        <h1 className='text-info'>Recursion</h1>
        <h2>factorial example</h2>
        <input type="number" onChange={(e)=>factorialNumber(e)}/>
        <h2>answer is {answer}</h2>
        <label>select</label><select onChange={(e)=>handleChange(e)}>
            <option value="1">
                1
            </option>
            <option value="2">
               2
            </option>
            <option value="3">
                3
            </option>
            <option value="4">
                4
            </option>
        </select>
        <label>select</label><select onChange={(e)=>handleChange(e)}>
            {
                array.map((item,index)=>{
                    return <option value={index+1}>{item}</option>
                })
            }
        </select>
    </>
  )
}

export default Recursion