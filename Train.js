import React, { useEffect, useState } from "react";
// import getall from 
import axios from 'axios'
function Train(){
    const [train, setTrain]= useState([]) 
    useEffect(()=>{

        axios.get('http://localhost:5000/')
        .then(res=> setTrain(res.data))
        .catch(err=> console.log(err));
    })

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-70 bg-white rounded p-3'>
                    <button className="btn btn-success" href="getall.js">Findby ID</button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Train ID</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Departure</th>
                                <th>Arrival</th>
                                <th>Seats</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               train.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.sou}</td>
                                    <td>{data.des}</td>
                                    <td>{data.dep_time}</td>
                                    <td>{data.arr_time}</td>
                                    <td>{data.seats}</td>
                                    <td>{data.price}</td>
                                
                                </tr>
                            )) 
                            }
                                
                        </tbody>

                    </table>

            </div>        
        </div>
    )
}

export default Train