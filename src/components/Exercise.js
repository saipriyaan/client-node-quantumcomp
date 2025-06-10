import React from 'react';
//import {DeleteForeverIcon} from 'react-md-icons/lib/icons/DeleteForeverIcon';
import {RiDeleteBin2Fill} from 'react-icons/ri';
import { FaMarker } from "react-icons/fa";


function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaMarker onClick={() => onEdit(exercise)} /></td>
            <td><RiDeleteBin2Fill onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;