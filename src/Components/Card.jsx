import React from 'react'
import{useState} from 'react'
import styles from './card.module.css'

function Card(){
    const [x, setx] = useState(0)
    function add(){
        setx(x+1);
      }

  return (
    <div className={styles.card}>
     <p>This is my Card</p>
     <p>{x}</p>
     <button onClick={add} className={styles.button}> Increase Number </button>
     {/*Instead of using getElementById and adding an event listener, I can directly
     use onClick to trigger a function*/}
     {/*When calling a function inside of jsx, you dont puy parenthesis()*/}
    </div>
  )
}


export default Card