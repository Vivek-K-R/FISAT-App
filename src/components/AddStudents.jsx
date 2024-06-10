import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudents = () => {
    const [data, setData] = useState(
        {
            "firstname": "",
            "lastname": "",
            "dob": "",
            "college": "",
            "mobile": "",
            "email": "",
            "address": "",
            "course": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Inserted!!!")
                }
                else {
                    alert("Insertion Error")
                }
            }
        ).catch()

    }

    return (
        <div>
            <Navbar />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date Of Birth</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                                    <option value=""></option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddStudents