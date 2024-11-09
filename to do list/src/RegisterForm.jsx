import React, { useState } from "react";
import './Register.css'
function RegisterForm() {

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [sex, setsex] = useState('')
    const [dob, setdob] = useState('')
    const [degree, setdegree] = useState('')
    const [college, setcollege] = useState('')
    const [year, setyear] = useState('')
    const [course, setcourse] = useState('')
    const [error, seterror] = useState({})


    const validate = () => {
        const newerrors = {};
        if (!name) newerrors.name = "name is required";
        if (!age) newerrors.age = "Age is required";
        if (!dob) newerrors.dob = "Date of Birth is required";
        if (!sex) newerrors.sex = "Sex is required";
        if (!college) newerrors.college = "College Name is required";
        if (!year) newerrors.year = "year is required";
        if (!degree) newerrors.degree = "Degree is required";
        if (!course) newerrors.course = "Course is required";
        seterror(newerrors);
        return Object.keys(newerrors).length === 0;
    };


    const handlesubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            const formdata = {
                name, age, sex, dob, degree, college, year, course
            }
            console.log('Form submitted:', formdata);

            alert("Registration successful!");
        }
        else {
            alert("Please fill in all required fields.");
          }


    }

    return (
        <div className="container">
            <div className="form-wrapper">

                <h3 className="title">STUDENT DETAILS</h3>

                <form onSubmit={handlesubmit}>

                    <input
                        type="text"
                        placeholder="enter your name"
                        onChange={(e) => setname(e.target.value)}
                    />
                    {error.name && <p className="error">{error.name}</p>}

                    <input
                        type="date"
                        onChange={(e) => setdob(e.target.value)}
                        required
                    />

                    {error.dob && <p className="error">{error.dob}</p>}
                    <input
                        type="text"
                        placeholder="enter your age"
                        onChange={(e) => setage(e.target.value)}
                        required
                    />
                    {error.age && <p className="error">{error.age}</p>}

                    <select
                        onChange={(e) => setsex(e.target.value)}
                    >
                        <option value="select">Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Other</option>
                    </select>

                    {error.sex && <p className="error">{error.sex}</p>}

                    <input
                        type="text"
                        placeholder="Degree"
                        onChange={(e) => setdegree(e.target.value)}
                        required
                    />
                    {error.degree && <p className="error">{error.degree}</p>}


                    <input type="text"
                        placeholder="Institute Name"
                        onChange={(e) => setcollege(e.target.value)}
                        required
                    />

                    {error.college && <p className="error">{error.college}</p>}

                    <input type="number"
                        placeholder="Year of Passing"
                        onChange={(e) => setyear(e.target.value)}
                        required
                    />
                    {error.year && <p className="error">{error.year}</p>}

                    <select
                        onChange={(e) => setcourse(e.target.value)}
                    >
                        <option>Course</option>
                        <option>AWS clouding</option>
                        <option>Data Analyst</option>
                        <option>Datascience</option>
                        <option>Fullstack Development</option>
                        <option>Machine Learning</option>
                    </select>
                    {error.course && <p className="error">{error.course}</p>}


                    <button type="submit">REGISTER</button>



                </form >

            </div>

        </div >
    )
}

export default RegisterForm