import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Table } from "react-bootstrap";

const Details = () => {
    const [students, setStud] = useState([]);
    const fetchStud = async () => {
        try{
            const res = await axios.get('http://localhost:3001/view')
            let temp = [];
            res.data.map((stud)=>{
                temp.push(stud)
            })
            setStud(temp);
        }
        catch(err){
            console.log(err);
        }
        
    }
    useEffect(() => {
        fetchStud();
    }, []);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Reg No.</th>
                    <th> Name</th>
                    <th> Class</th>
                    <th> Percentage</th>
                    <th> DOB</th>
                    <th> Email</th>
                    <th> MObile</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student, index) => {
                        <StudentDetails student={student} index={index} />
                    })
                }
            </tbody>
        </Table>
    );
}
export default Details;

export const StudentDetails = (student, index) => {
    if (student) {
        return (
            <tr>
                <td>{index+1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.clss}</td>
                <td>{student.percent}</td>
                <td>{student.dob}</td>
                <td>{student.email}</td>
                <td>{student.mobie}</td>
                <td><Button className="btn btn-sm btn-danger" onClick="deleteStudent">Delete</Button></td>
            </tr>
        );
    }
    else {
        return null;
    }
}

