import './App.css';
import StudentForm from './StudentForm';
import Details from './Details';


function App() {
  return (
    <div className="container my-3 ">
      <h1>Student Details</h1>
      <h4>Register</h4>
      <StudentForm />
      <br/>
      <h4>Registered User</h4>
      <Details/>
    </div>
  );
}

export default App;
