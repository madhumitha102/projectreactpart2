import React, { useEffect, useState } from "react";
import axios from "axios";
// import './App.css'
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";



function Lists() {

    const [data, setdata] = useState([])
    const [input, setinput] = useState("")

    const handlefetch = async () => {
        let res = await axios.get("http://localhost:3000/todoList")

        setdata(res.data)
    }

    const handleinput = (e) => {
        setinput(e.target.value)
    }
    
    const handlepost = () => {
        let body = {
            grocery: input
        }
        let post = axios.post("http://localhost:3000/todoList", body)
        alert("task added")
        handlefetch()
    }

    const handledelete = async (id) => {
       let de = await axios.delete(`http://localhost:3000/todoList/${id}`)
        handlefetch()
    }

    const handleedit= async(no)=>{
        let rs = prompt("enter task",data[no].grocery)

        let body = {
            id:data[no].id,
            grocery:rs,
        }

        let up = await axios.put(`http://localhost:3000/todoList/${data[no].id}`,body)

        handlefetch()
    }

    useEffect(() => {
        handlefetch()
    }, [])


    return (
        <div className="box1">
            
            <h1>HI MADHUMITHA</h1>
            <h3>WHAT IS YOUR PLAN ?</h3>

            <input onChange={handleinput} placeholder="Enter your task" />

            <button onClick={handlepost}>Add task</button>


            {data.map((da, i) => (
                <div className="fic">
                    
                
                        {""}
                       <input type="checkbox" />
                        <label>
                            {da.grocery}</label>
                    


                    <h6 onClick={() => handleedit(i)}><BiSolidEdit /></h6>
                    <h6 onClick={() => handledelete(da.id)} ><MdDelete /></h6>
                    
                </div>
                

            ))}



        </div>
    )
}







export default Lists