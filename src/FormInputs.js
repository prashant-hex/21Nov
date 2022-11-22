import React , {useState} from 'react'

const FormInputs = () => {

  const [userDetails,setUserDetails] = useState({
    fname:"",
    lname:""
  })

  const handleUserInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({[name]:value})
    console.log(userDetails)
  }
  return (
    <>
        <input type="text"/>
        <form onSubmit={handleUserInput}>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" onChange={(e)=>handleUserInput(e)}/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/><br/>
            <label for="password">password:</label>
            <input type="password" id="pass" name="pass"/>
            <br/>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">HTML</label><br/>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label for="css">CSS</label><br/>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
            <label for="javascript">JavaScript</label>
            <br/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label>
            <button type="submit">Submit</button>
        </form>
        
    </>
  )
}

export default FormInputs