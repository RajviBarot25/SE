import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hospitals = () => {
    const navigate = useNavigate();
    const [hospitals, setHospitals] = useState({
        hosp_name: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHospitals({ ...hospitals, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted!");

        try {
            const response = await axios.post('http://localhost:3000/api/v1/hospitals/add', hospitals, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.success) {
                alert(response.data.message);
                navigate('/hospitals');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    return (
        <div>
            <h1>Add hospitals</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='hosp_name'>Hospital Name</label>
                    <input type="text" name='hosp_name' onChange={handleChange} placeholder='Enter Hospital name' required />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input type="text" name='address' onChange={handleChange} placeholder='Enter Hospital Address' required />
                </div>
                <button type='submit'>Submit changes</button>
            </form>
        </div>
    );
};

export default Hospitals;

// import { handle } from 'express/lib/router'
// import React from 'react'
// import {Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'

// const AddHospitals = () => {
//     const navigate = useNavigate();
//     const [hospitals, setHospitals] = useState({
//         hosp_name: '',
//         address: ''
//     })

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setHospitals({
//             ...hospitals,
//             [name]: value
//         })  
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const token = localStorage.getItem("token");
//         console.log("Token being sent:", token); // Debugging Step
    
//         if (!token) {
//             alert("You must log in first.");
//             return;
//         }
    
//         try {
//             const response = await axios.post(
//                 "http://localhost:3000/api/v1/hospitals/add",
//                 hospitals,
//                 {
//                     headers: {
//                         "Authorization": `Bearer ${token}`,
//                         "Content-Type": "application/json"
//                     }
//                 }
//             );
    
//             if (response.data.success) {
//                 alert(response.data.message);
//                 navigate("/hospitals");
//             }
//         } catch (error) {
//             console.error("Error adding hospital:", error);
//             alert(error.response?.data?.error || "Failed to add hospital");
//         }
//     };
//   return (
//     <div>
//       <div>
//         <h1>Add hospitals</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//     <div>
//         <label htmlFor='hosp_name'>Hospital Name</label>
//         <input 
//             type="text" 
//             name='hosp_name' 
//             value={hospitals.hosp_name} 
//             onChange={handleChange} 
//             placeholder='Enter Hospital Name' 
//             required
//         />
//     </div>
//     <div>
//         <label htmlFor='address'>Address</label>
//         <input 
//             type="text" 
//             name='address' 
//             value={hospitals.address} 
//             onChange={handleChange} 
//             placeholder='Enter Hospital Address' 
//             required
//         />  
//     </div>
//     <button type='submit'>Submit changes</button>
//     </form>
//     </div>
//   )
// }

// export default AddHospitals