import { useState } from "react";

function App(){
  const [data,setData] = useState([])
  const [formData,setFormData] = useState({Name:'',Age:''})

  const handleChange = (e)=>{
    // console.log(e.target);
    const {name,value}=e.target
    setFormData((prv)=>({...prv,[name]:value}))
    // console.log(formData);
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setData((prv)=>[...prv,formData])
    setFormData({Name:'',Age:''})
    console.log(data);
    
  }
  return(
    <>
    <h1> Welcome to all</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="Name" id="name" placeholder="Enter name" value={formData.Name} onChange={handleChange}/>
      <input type="number" name="Age" id="age" placeholder="Enter age" value={formData.Age} onChange={handleChange}/><br />
      <input type="submit" value="Add" />
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value,index)=>(
          <tr key={index}>
            <td>{value.Name}</td>
            <td>{value.Age}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default App