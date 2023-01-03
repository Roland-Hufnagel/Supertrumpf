import * as React from "react";

import "./Card.css"
import Animal from "./Animal"


export default function Card({animal, uncovered}){
    console.log(animal)
    //const elephant = new Animal('Elefant', "Elefant.jpeg", 3.3, 6000, 70, 1, 40)
    const front =
        <div className="card">
            <h2>{animal.name ? animal.name : "Unbekannt"}</h2>
            {animal.image && <img src={animal.image} alt={animal.name} height="200" width="200" /> }
            <table>
                <tbody>
                    {Object.keys(Animal.properties).map(property =>{
                        const animalProperty = Animal.properties[property];
                        return (
                            <tr key={property}>
                                <td>{animalProperty.label}</td>
                                <td>{animal[property]}&nbsp;
                                {animalProperty.unit}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>;
    const back =
        <div className="card back" />
    ;
    if (uncovered){
        return front;
    }else{
        return back;
    }
}