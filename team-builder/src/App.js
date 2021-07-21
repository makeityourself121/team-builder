import './App.css';
import React, { useState } from 'react'
import Form from './Form'
import Member from './Member'


const initialValue={
  name: '',
  email: '',
  role: '',
}

function App() {
  const [member, setMember]=useState([])
  const [formValue, setFormValue]=useState(initialValue)
  
  const update = (inputName, inputValue) => {
    setFormValue({...formValue, [inputName]: inputValue})

  }

  const submitForm=()=>{
    const newMember={
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role,
    }
        setMember([newMember, ...member])
        setFormValue(initialValue)
   
  }

  return (
    <div className="App">

    <Form key={member}value={formValue} update={update} submit={submitForm}/>
   
 
  {
    member.map(member=>{
      return(
        <Member key={member.id} details={member}/>
      )
    })
  }
   </div>
    );
}

export default App;
