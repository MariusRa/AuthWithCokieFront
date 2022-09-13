import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

const Login = (props) => {
    const {setName} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://localhost:44352/api/auth/login`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password  
            })
        });

        const content = await response.json();
        
        setRedirect(true);
        
        setName(content.name);      
    }

    if (redirect){
        return <Navigate to='/'/>  
      }

    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="name@example.com" required onChange={e=>setEmail(e.target.value)}/>
            <input type="password" className="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}required/>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
};

export default Login;