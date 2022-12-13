import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { regAction,getAction } from "../redux/actions/action";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userList);
  const { loading, users, error,isAuth } = userData;
  // console.log(userData)
  useEffect(()=>{
    dispatch(getAction())
  },[dispatch])

  useEffect(()=>{
    if(isAuth){
      navigate('/')
    }
  },[dispatch,isAuth,navigate])

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      dispatch(regAction(user));
      setUser({ name: "", email: "", password: "" });
    } else {
      Swal.fire("failed!", "all form field is required");
    }
  };
  return (
    <div>
      <div className="form-wrap">
        <form className="w-25 mx-auto shadow p-5 mt-5">
          <h4 className="text-center mb-3">Signup</h4>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="name"
              value={user.name}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={inputHandler}
            />
          </div>
          <p>
            All ready have an Account? <Link to="/login">Login</Link>
          </p>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
