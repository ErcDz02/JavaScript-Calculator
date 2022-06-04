const numList = [
  {
  'value': '0',
  'id': 'zero'
  },
  
  {
  'value': '1',
  'id': 'one'
  },
  
    {
  'value': '2',
  'id': 'two'
  },
  
    {
  'value': '3',
  'id': 'three'
  },
  
    {
  'value': '4',
  'id': 'four'
  },
  
    {
  'value': '5',
  'id': 'five'
  },
  
    {
  'value': '6',
  'id': 'six'
  },
  
    {
  'value': '7',
  'id': 'seven'
  },
  
    {
  'value': '8',
  'id': 'eight'
  },
  
    {
  'value': '9',
  'id': 'nine'
  },
        
]
const opList = [
  {
  'value': ' + ',
  'id': 'add'
  },
  {
  'value': ' - ',
  'id': 'subtract'
  },
    {
  'value': ' * ',
  'id': 'multiply'
  },
    {
  'value': ' / ',
  'id': 'divide'
  },
]

//If previous input is an operator, you can't click it 
//Once something is solved, and you insert a new input it restarts

const {useState} = React

const App = () => { 
    const [display, setDisplay] = useState('0')
    const [isSolved, setIsSolved] = useState(false) 
    
    const clearAll = () => {
      setDisplay('0')
    }
    
    const deleteLastNum = () => {
			if (display.length === 1) {
				setDisplay('0')
			} else {
    		setDisplay(display.slice(0, -1));
			}
	}
    
    const solvedFunc = () => {
      setDisplay(eval(display))
      setIsSolved(true)
    }
    
 return (
 <div>
     <div id="main-div-all">
     <h1 id="display">{display.length >= 23 ? 'Large Input' : display}</h1>
     <div id='number-div'>
       {numList.map((num, id) => 
     <Numbers value={num.value} id={num.id} onClick={() => setDisplay(prev => display === '0' ? num.value :  prev + num.value)}/>
     )}
       
     </div>
     

     
     <div id='operator-div'>
     {opList.map((op, id) => 
     <Ops value={op.value} id={op.id} onClick={() => setDisplay(prev => display === '0' ? '0' : prev + op.value)}/>
     )}
     </div>
     
     <div id='result-btn' className="clearBoth">
     <button className='safe-btn' onClick={() => solvedFunc()}>=</button>
     <button className= 'danger-btn' onClick={() => clearAll()}>Clear</button>
     <button className='delete-btn' onClick={() => deleteLastNum()}>Delete</button>
     </div>
       
     </div>
     <div className="clearBoth"></div>
     </div>
 ) 

}


const Numbers = ({value, onClick}) => {
  return (
  <div className="numbers">
      <h1 onClick={onClick}>{value}</h1>
  </div>
  )
}

const Ops = ({value, onClick}) => {
  return (
  <div className="operators">
      <h1 onClick={onClick}>{value}</h1>
  </div>
  )
}	

ReactDOM.render(<App/>, document.getElementById('root'))


