import React from 'react'
import './App.css';
export default function Form(props){
    const {value,update,submit}=props

    const onChange=evt=>{
        const {name, value}=evt.target
        update(name,value)
    }

    const onSubmit=evt=>{
        evt.preventDefault()
        submit()
    }
    return(
        <form onSubmit={onSubmit}>
        <div>
            <label htmlFor='name'>Name: 
                <input id='name' type='text' name='name' onChange={onChange} value={value.name}/>
            </label>
            <label htmlFor='email'>Email: 
                <input id='email' type='email' name='email' onChange={onChange} value={value.email}/>
            </label>
            <label htmlFor='role'>Role: 
               <select id='role' name='role' onChange={onChange} value={value.role}>
                   <option value=''>--Select a Role--</option>
                   <option value='Backend'>Backend Engineer</option>
                   <option value='Frontend'>frontend Engineer</option>
                   <option value='Designer'>Designer</option>
                   <option value='Data'>Data Scientists</option>
                   <option value='IOS'>IOS Developer</option>
               </select>
            </label>

            <div className='submit'>
          <button>submit</button>
        </div>
        </div>
        </form>
    )
}