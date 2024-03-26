import '../../css/global.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';

const Login = ()=>{

    const[toggleStyle,setToggleStyle]=useState("toggle-btn-child");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")

    const toggleFunction = ()=>{
        console.time("Time Logged in Toggle Function: ");
        if(toggleStyle == "toggle-btn-child"){
            setToggleStyle("toggle-btn-child-animated");
        }else{

            setToggleStyle("toggle-btn-child");
        }
        // console.timeEnd("this");
        console.timeLog("Time Logged in Toggle Function: ");
    }

    const dashBoard = ()=>{

        var tempEmail=localStorage.getItem("f_email");
        var tempPassword=localStorage.getItem("f_password");
        if(email == tempEmail && password == tempPassword){
            window.location.href="/dashBoard";
        }else{
            alert("Password or Email does not match");
        }
    }

    return(
        <Container fluid style={{backgroundColor:"var(--logo_colour)"}}>
           
            <Row className="justify-content-center align-items-center" style={{height:"100vh"}}>
                <Col className="py-3 px-2" md={3} style={{border:"1px solid black",borderRadius:"15px",backgroundColor:"var(--header_blue)"}}>
                    <Row className="justify-content-center mt-3">
                        <Col md={6} >
                            <div className="p-2 temp_header mb-4 text-center" >E-Shop</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="text-center px-2">
                            <input className="mb-2 input_box_style" type="text"  value={email} id="R_Email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/><br />
                            <input className="mb-2 input_box_style" type="password"  value={password} id="R_password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/><br />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4} >
                            <div className="p-2 temp_header_R_btn mt-5 text-center" id="R_btn" onClick={dashBoard}>Log In</div>
                        </Col>
                    </Row>
                    <Row className="px-3 mt-3 justify-content-end">
                        <Col md={5} className="p-2">
                            <p style={{color:"white"}}>Remember Me</p>
                        </Col>
                        <Col md={3} className="p-2" >
                            <div className="toggle-btn p-1" style={{}}>
                                <div className={toggleStyle} onClick={toggleFunction}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="px-3 mt-3 justify-content-center">
                        <Col md={10} className="p-2">
                            <p style={{color:"white"}}>Dont Have an Account? <span style={{color:"black",fontWeight:"800"}}>Sign Up</span></p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
        
    )
}
export default Login;