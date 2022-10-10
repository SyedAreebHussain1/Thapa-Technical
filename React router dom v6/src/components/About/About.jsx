import React from "react"
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const goToContact = () => {
        // alert('Hello')
        navigate("/contact")
    }
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => goToContact()}>go to Contat Page</button>

            {/*navigate(-1) karny se jis page se is pe aye gy us page pe ly jaye ga  */}
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    )
}
export default About
