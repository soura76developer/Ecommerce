import '../../css/global.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState,useEffect} from 'react';

const Register = ()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cnfpasswrd,setCnfpassrd]=useState("");
    const[blockone,setBlockone]=useState("none");
    const[blocktwo,setBlocktwo]=useState("none");
    const[errMsg,setErrMsg]=useState("");
    var emailEmailRex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    var emailPasswordRex=/^[^\s@]+[0-9]+[!@#$%^&*]+$/ 

    function submitForm(){
        
        if(emailEmailRex.test(email)){
            
            if(emailPasswordRex.test(password) && password.length >= 5){
                
                localStorage.setItem("f_name",name);
                localStorage.setItem("f_email",email);
                localStorage.setItem("f_password",password);
                localStorage.setItem("f_cnfpasswrd",cnfpasswrd);
                if(password == cnfpasswrd){
                    window.location.href="/";
                }else{
                    setErrMsg('Password and confirm password does not match')
                    setBlockone('block');
                    
                }
                
            }else{
                setErrMsg('Password should contain Special charecter')
                setBlockone('block');
            }
        }else{
            setErrMsg('Please enter a valid Email id')
            setBlockone('block');
        }
        
    }


    return(
        <Container fluid style={{backgroundColor:"var(--logo_colour)"}}>
            <Row className="justify-content-center align-items-center" style={{height:"100vh"}}>
                
                <Col className="py-5 px-2" md={3} style={{border:"1px solid black",borderRadius:"15px",backgroundColor:"var(--header_blue)"}}>
                    <Row className="justify-content-center">
                        <Col md={6} >
                            <div className="p-2 temp_header mb-4 text-center" >E-Shop</div>
                        </Col>
                    </Row>
                    <form >
                    <Row className="pt-3">
                        <Col className="text-center px-2">

                            <input className="mb-2 input_box_style" type="text"  value={name} id="R_name" placeholder='First Name' onChange={(e)=>{setName(e.target.value)}} /><br />
                            <input className="mb-2 input_box_style" type="email"  value={email} id="R_Email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} /><br />
                            <input className="mb-2 input_box_style" type="password"  value={password} id="R_password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} /><br />
                            <input className="input_box_style" type="password"  value={cnfpasswrd} id="R_cnfrmPassword" placeholder='Confirm Password'onChange={(e)=>{setCnfpassrd(e.target.value)}} /><br />
                            {/* <p className='errMsgStyle' id="err_password" style={{display:blocktwo}}>Confirm password does not match</p> */}
                            <span className='errMsgStyle' id="err_email" style={{display:blockone}}>{errMsg}</span>

                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4} >
                            <div className="p-2 temp_header_R_btn mt-5 text-center" id="R_btn" onClick={submitForm}>Sign In</div>
                        </Col>
                    </Row>
                    </form>
                    {/* <Row className="px-3 justify-content-end">
                        <Col md={10} className="p-2" >
                        </Col>
                    </Row> */}

                </Col>
                
            </Row>
        </Container>
    )
}
export default Register;