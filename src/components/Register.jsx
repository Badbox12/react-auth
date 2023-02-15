import React, {useState} from 'react'
import axios from "axios";
import { Form, Button } from 'react-bootstrap'
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const configuration = {
    method: "post",
    url: "https://authentication-full-stack.herokuapp.com/register",
    data: {
      email,
      password,
    },
  };
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
   // set configurations
   
     // make the API call
     axios(configuration)
     .then((result) => {
       setRegister(true);
     })
     .catch((error) => {
       error = new Error();
     });
  };

  
  return (
    <>
    <h2>Register</h2>
    <Form>
        <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
           type="email"
           name="email"
           value={email}
           placeholder="Enter email"
            onChange={(e) => {setEmail(e.target.value)}}
            />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
             type="password"
             name="password"
             value={password}
             placeholder="Password"
             onChange={(e) => {setPassword(e.target.value)}}
            

            />
        </Form.Group>
        <Button 
        variant='primary' 
        type='submit'
        onClick={(e) => handleSubmit(e)}
        >
            Submit
        </Button>
    </Form>
     {/* display success message */}
     {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
    </>
  )
}

export default Register