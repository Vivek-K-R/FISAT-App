import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewStudents = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata")
        .then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log("Error 404")
            }
        ).finally()
    }

    useEffect(() => {fetchData()},[])

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th scope="row"></th>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.college}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.course}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                </tr>
                                }
                               )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudents