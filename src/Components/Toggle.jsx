import useState from 'react';

function Toggle(){
 const[toggled, setToggled] = useState('Toggle Me');

 const changeToggle=()=>{
    setToggled('Toggled');
 }

    return(
        <div>
            <button onClick={changeToggle}> {toggled?"toggle":" Already Toggled"} </button>
            {toggled && <p>The toggle is ON</p>}
        </div>
    );
}



export default Toggle;