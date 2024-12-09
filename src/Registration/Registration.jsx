import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Registration} from './Registration.css';
import { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';


// Registration component to handle user registration process.
export function RegistrationComp(){
    let user = {
        username: '',
        email: '',
        phone: '',
        address: '',
        index: ''    
    } 
    let [userData, setUserData] = useState(user);
    let [userList, setUserList] = useState([]);
    
    const [errors, setErrors] = useState({});
    const handleSubmit =(event) => {
        event.preventDefault();
        let isFormValid = true;
        // Validate all fields when submitting the form
        Object.keys(userData).forEach((field) => {
            if (!validate(field)) {
                isFormValid = false;
            }
        });
        if(isFormValid){
            let emailExists = false;
            let phoneExists = false;
            console.log(userData);
           let prevData=  userList[parseInt(userData.index,10)-1];
            console.log(prevData);  
            console.log(userData);
            userList.map((user,index) =>{
                if(userData.index === '' || (!(userData.index === '')&& !(userData.email === prevData.email))){
                if(userData.email.toLowerCase() == user.email.toLowerCase()){                    
                    emailExists = true;
                }
            }
            if(userData.index === '' || (!(userData.index === '')&&!(userData.phone === prevData.phone))){
                if(userData.phone.toLowerCase() == user.phone.toLowerCase()){
                    phoneExists = true;
                }
            }
            })
            if(emailExists){
                toast.error('Email already exists',{
                    position: "top-right"
                });
            }
            if(phoneExists){
                toast.error('Phone number already exists',{
                    position: "top-right"
                });
            }
        
            if(!emailExists && !phoneExists)
            {
                if(!userData.index===''){
                    userList[userData.index] = userData;
                    setUserList(userList);

                    toast.success('User updated successfully',{
                        position: "top-right"
                    });
                    setUserData({username: '', email: '', phone: '', address: '', index: ''});
                }
                else{
            userList.push(userData);
            setUserList(userList);

            setUserData({username: '', email: '', phone: '', address: '', index: ''});
            toast.success('Registration Successful',{
                position: "top-right"
            });
        }
        }
            // clear the form fields
        }
    }

    const validate = (field) => {
        let isValid = true; // Assume form is valid initially
        const errorMsg = {}; // To hold validation error messages
      
        // Username validation
        if (field === 'username' && !userData.username.trim()) {
          errorMsg.username = "Username is required";
          isValid = false;
        }
      
        // Email validation
        if (field === 'email' && !userData.email.trim()) {
          errorMsg.email = "Email is required";
          isValid = false;
        } else if (
            field === 'email' &&  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)
        ) {
          errorMsg.email = "Invalid email address";
          isValid = false;
        }
      
        // Phone validation
        if (field === 'phone' && !userData.phone.trim()) {
          errorMsg.phone = "Phone number is required";
          isValid = false;
        } else if (!/^\d{10}$/.test(userData.phone) && field === 'phone' ) {
          errorMsg.phone = "Invalid phone number";
          isValid = false;
        }
      
        // Address validation
        if (field === 'address' &&!userData.address.trim()) {
          errorMsg.address = "Address is required";
          isValid = false;
        }
        
        // Update errors state
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: errorMsg[field] || '',
          }));
      
      
        // Return the final validity status
        return isValid;
      };
      
    const handleChange = (event) => {
        event.preventDefault();
        let inputName = event.target.name;
        let inputValue = event.target.value;
        userData.index = userList.length+1;
        setUserData({...userData, [inputName]: inputValue });
        setErrors({ ...errors, [inputName]: "" });
    }
    const handleBlur = (field) => {
        // Trigger validation for a specific field when it loses focus
        validate(field);
      };
      
    return(
        <div>
            <div className="userList">
            <div className='container'>
                <div className='card-header'>
                    <h2>Registration</h2>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input type='text' value={userData.username} onChange={(e)=>handleChange(e)} 
                                onBlur={() => handleBlur('username')}  className={`form-control ${errors.username ? 'is-invalid' : ''}`} name='username' />
                                {errors.username && <p className='errorMsg'>{errors.username}</p>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' value={userData.email} 
                                onBlur={() => handleBlur('email')}  
                                onChange={(e)=>handleChange(e)} className={`form-control ${errors.email ? 'is-invalid' : ''}`} name='email' />
                                {errors.email && <p className='errorMsg'>{errors.email}</p>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'>Phone</label>
                                <input type='number'  value={userData.phone}
                                 onBlur={() => handleBlur('phone')}  onChange={(e)=>handleChange(e)}  className={`form-control ${errors.phone ? 'is-invalid' : ''}`} name='phone' />
                                {errors.phone && <p className='errorMsg'>{errors.phone}</p>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='address'>Address</label>
                                <input type='textarea' value={userData.address} 
                                 onBlur={() => handleBlur('address')}  
                                 onChange={(e)=>handleChange(e)}  className={`form-control ${errors.address ? 'is-invalid' : ''}`} name='address' />
                                {errors.address && <p className='errorMsg'>{errors.address}</p>}
                            </div>
                            <div >
                            <button type='submit' 
                            className='btn btn-primary' >{(userData.index===''? <span>Register</span>: <span>Update</span> )}</button>
                            <button type='reset' className='btn btn-warning'>Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <ShowUserDataInTable userList={userList} setUserList={setUserList} setUserData={setUserData}/>
            </div>
            <ToastContainer/>
        </div>
    );
}


 function ShowUserDataInTable({userList,setUserList,setUserData}) {
    const deleteUserData = (index) => {
        let updatedUserList = [...userList];
        updatedUserList.splice(index, 1);
        setUserList(updatedUserList);
        toast.success('User deleted successfully',{
            position: "top-right"
        });
    }
    const updateUserRecord = (user) => {
        setUserData(user);
        // userList[user.index] = user;
        // setUserList(userList);
        // console.log(user);
        // toast.success('User updated successfully',{
        //     position: "top-right"
        // });
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user, index) => (
                    <tr key={index}>
                        <td>{user.index}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>updateUserRecord(user)} ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>  &nbsp;
                            <button className='btn btn-danger' key={index} onClick={() => deleteUserData(index)}>  <FontAwesomeIcon icon={faTrash} /> </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
   
  
} 


