import { Link } from "react-router-dom"
import "../styles/thankyou.css"

function Thankyou() {
    return(
        <div className="thankyou">
            <h1>Thank you for the message!</h1>
            <h1>Click here to go back</h1>
            <br/>
            <Link className="back-button" to="/contact">Go Back</Link>
        </div>
    )
}

export default Thankyou