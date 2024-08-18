import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{name,email,password})
    .then(navigate('/login'))
    .catch(err=>console.log(err))
  }
  return (
    <div className="flex justify-center align-center p-6 m-7">
      <form onSubmit={handleSubmit} className="flex flex-col align-center w-64  bg-slate-100 rounded-2xl shadow-2xl p-3 my-2">
        <div className="self-center my-4  ">
          <input
            type="text"
            className=" rounded-sm h-18"
            placeholder="Enter Name"
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="self-center my-4 ">
          <input
            type="text"
            className="h-6 rounded-sm"
            placeholder="Enter Email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="self-center my-4 ">
          <input
            type="text"
            className="h-6 rounded-sm"
            placeholder="Enter Password"
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className=" my-5 p-1 self-center font-serif text-lg">
          <button type="submit" className="rounded-sm p-1 bg-green-500 w-100">
            Register
          </button>
        </div>
        <div className="flex flex-row space-x-2 justify-center align-center text-sm">
          <p>Already have an account?</p>
          <Link to="/login" className="italic underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
