
import './App.css';
import { useState } from 'react'

function App() {
  const [value, setValue] = useState([]);
  const [todo, setTodo] = useState("");
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    let li = document.getElementById('li');
    li.remove();
  };
  const HandleClick = (e) =>{
      e.preventDefault()
      setValue([...value,todo]);
      setTodo('');
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return(
    <div className="App">
    <h2>Todos</h2>
    <form onSubmit={HandleClick}>
      <label>
        New Todo
        <input value={todo} onChange={handleChange} />
        <button value={todo} onClick={handleChange}>add</button>
      </label>
    </form>

    <ul >
      {value.map((t, i) => (
        <li id='li' style={{width:'300px',textAlign:'left',marginLeft:'47%'}} type="1" key={i}>{t} {visible && (
          <button onClick={removeElement}>x</button>
        )}</li> 
        
      ))}
    </ul>
  </div>
    
  )
}


export default App;
