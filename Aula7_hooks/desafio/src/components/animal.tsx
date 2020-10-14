import React from 'react';
import IAnimal from '../apifake/Interfaces/IAnimal';

type Props = {
    id: string,
    label?: string,
    animals: IAnimal[]
}

function Animal(props: Props) {

    let optionList = props.animals
    .sort((a, b) => {

        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    })
    .map((animals) => <option key={animals.id}>{animals.name}</option>);


return (
    <section id="animals-section">
        <label htmlFor={props.id}>{props.label}</label>
        <select id={props.id} >
            {optionList}                
        </select>
    </section>);
}
export default Animal;
