import React from "react"
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={goToHome}>go to Home Page</button>
            
            {/*navigate(-1) karny se jis page se is pe aye gy us page pe ly jaye ga  */}
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    )
}
export default Contact
