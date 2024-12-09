import { useState } from "react"

export function Mobile(){
    let [name,setName] = useState('');
    let[message,setMessage] = useState();
    let[color,setColor]=useState('');

    const handleSubmit=(e)=>{
        // e.preventDefault();
        // const jdj=e.target.name.value; 
        //  setName(jdj); 
        setName(e.target.name.value); 
        if(name.toLowerCase()==="sandeep"){
            setMessage('Wow You Are Successfully Login');
            setColor('green');
        }else{
            setMessage('Invalid Credentials');
            setColor('red');
        }
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
        <div>
            <h3 style={{ color: color }}>{message}</h3>
        </div>
    </div>

    )
}



