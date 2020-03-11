import React, {useState}from 'react';
import CreateComp from './CreateComp';
import ShowComp from './ShowComp';

const BoxWrapper = () =>{

    const [colorState, setColorState] = useState("")
    const [boxState, setBoxState] = useState([])

    const onChangeHandler = (event) =>{
        setColorState(event.target.value)
        // this is grabbing the "event" or input from the onChangeHandler in html portion
    }

    const onSubmitHandler = (event) => {
        event.preventDefault() 
        setBoxState([...boxState, colorState])
        setColorState("")  
    }

    return(
        <div>
            <CreateComp changeHandler={onChangeHandler} submitHandler={onSubmitHandler}/>
            <ShowComp boxList={boxState}/>
        </div>
    )
}

export default BoxWrapper;