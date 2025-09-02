import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./form.css";

function HariNadh1() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [contact, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    async function senddata(e) {
        e.preventDefault();
        
        try {
            await axios.post("/saveuser", {
                userId,
                contact,
                email,
                reEnterPassword  // sending password directly without hashing
            });
            navigate('/home/success');
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleContactNo = (e) => {
        setPhone(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(reEnterPassword !== e.target.value){
            setIsButtonDisabled(true)
        }
        else{
            setIsButtonDisabled(false)
        }
    };

    const handleRePassword = (e) => {
        setReEnterPassword(e.target.value)
        if (password !== e.target.value) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    };

    const buttonStyle = {
        backgroundColor: isButtonDisabled ? '#cccccc' : '#007bff',
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
        border: isButtonDisabled ? '1px solid #999' : '1px solid #ccc',
        color: 'white'
    };

    return (
        <div className="form-container">
            <form className="styled-form" onSubmit={senddata}>
                <h2>Contact Us</h2>

                <label htmlFor="userId">UserID</label>
                <input 
                    type="text" 
                    id="userId" 
                    name="userId" 
                    placeholder="Ex: Harinadh14" 
                    value={userId} 
                    onChange={handleUserIdChange} 
                    required
                />

                <label htmlFor="contact">Contact</label>
                <input 
                    type="text" 
                    id="contact" 
                    name="contact" 
                    placeholder="Ex: +91 1234567890" 
                    value={contact} 
                    onChange={handleContactNo} 
                    required
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Ex: example@gmail.com" 
                    value={email} 
                    onChange={handleEmailChange} 
                    required
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={handlePassword} 
                    required
                />

                <label htmlFor="reEnterPassword">ReEnter Password</label>
                <input 
                    type="password" 
                    id="reEnterPassword" 
                    name="reEnterPassword" 
                    placeholder="Re-Enter Password" 
                    value={reEnterPassword} 
                    onChange={handleRePassword} 
                    required
                />

                <button type="submit" disabled={isButtonDisabled} style={buttonStyle}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default HariNadh1;

