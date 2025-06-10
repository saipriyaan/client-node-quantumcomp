import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();
    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201){
            alert("Successfully added the exercise");
        }else{
            alert(`Failed to create exercise.Complete all information, status code = ${response.status}`);
        }
        history.push("/");
    };
    

    return (
        <div>
            <h3>Create Exercise</h3>
            <div className='createAndEdit'>
            <input className='createInput'
                type="text"
                placeholder="Enter exercise name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            </div>
            <div className='createAndEdit'>
            <input className='createInput'
                type="number"
                value={reps}
                placeholder="Enter repititions here"
                onChange={e => setReps(e.target.value)} />
            </div>
            <div className='createAndEdit'>
            <input className='createInput'
                type="number"
                placeholder="Enter weight(lbs or kgs)"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            </div>
            <div className='createAndEdit'>   
            <select className = 'createInput' onClick={e => setUnit(e.target.value)}>
                
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                 
            </select>
            </div>
            <div className='createAndEdit'>
            <input className='createInput'
                type="text"
                placeholder="Enter date (xx-xx-xx) here"
                value={date}
                onChange={e => setDate(e.target.value)} /> 
            </div> 
            <p><h3><span class='blink'>Click Create to add the excersize and return to Log</span></h3></p>      
            <button className='buttonCreate'
                onClick={createExercise}
            >Create</button>
        </div>
    );
}

export default CreateExercisePage;