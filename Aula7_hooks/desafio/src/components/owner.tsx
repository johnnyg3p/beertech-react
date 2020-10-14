import React from 'react';
import IOwner from '../apifake/Interfaces/IOwner';

type Props = {
    id: string,
    label?: string,
    donos: IOwner[],
    onChangeClick?: any
}

function Owner(props: Props) {

    let optionList = props.donos
        .sort((a, b) => {

            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        })
        .map((dono) => <option key={dono.email} value={dono.id} >{dono.name}</option>);



    return (
        <section id="owners-section">
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} onChange={props.onChangeClick} >
                {optionList}
            </select>
        </section>);
}

export default Owner;

