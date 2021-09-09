import { useState } from "react";
import { Button, Form } from "react-bootstrap"


const StudentForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [dob,setDob] = useState('');
    const [clss,setClss] = useState("");
    const [percent,setPercent] = useState("");

    return (
        <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" onChange={(e)=> {setName(e.target.value);  }}  />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=> {setEmail(e.target.value); }}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Mobile" onChange={(e)=> {setMobile(e.target.value); }}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dob">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" placeholder="" onChange={(e)=> {setDob(e.target.value); }}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="classs">
                <Form.Label>Class</Form.Label>
                <Form.Control type="text" placeholder="class" onChange={(e)=> {setClss(e.target.value); }}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="percent">
                <Form.Label>Percentage</Form.Label>
                <Form.Control type="text" placeholder="percent" onChange={(e)=> {setPercent(e.target.value); }}  />
            </Form.Group>
            <Button variant="primary" onClick={ async()=>{console.log(name,email,mobile,dob,clss,percent);}}>
                Submit
            </Button>
        </Form>
    )
}

export default StudentForm;