import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();
    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200){
            alert("Successfully edited the exercise");
        }else{
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };
    

    return (
        <div>
            <h3>Edit Exercise</h3>
            <div className='createAndEdit'>
            <input className='editPageOnly'
                type="text"
               // placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            </div>
            <div className='createAndEdit'>
            <input className='editPageOnly'
                type="number"
                value={reps}
                //placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            </div>
            <div className='createAndEdit'>
            <input className='editPageOnly'
                type="number"
               // placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            </div>
            <div className='createAndEdit'>
            <select className='editPageOnly' onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                 
            </select>
            </div>
            <div className='createAndEdit'>
            <input className='editPageOnly'
                type="text"
                //placeholder="Enter date (xx-xx-xx) here"
                value={date}
                onChange={e => setDate(e.target.value)} /> 
            </div> 
            <p><h3><span class='blink'>Click Save to keep Changes and return to the Log</span></h3></p>
            <div> 
            
            <button className='buttonCreate'
                onClick={editExercise}
            >Save</button>
            </div>
        </div>
    );

    return (
        <div>
            <h1>Edit Exercise</h1>
        </div>
    );

}

export default EditExercisePage;