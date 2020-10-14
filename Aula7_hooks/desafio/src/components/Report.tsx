import React from 'react';
import IAnimalQty from '../apifake/Interfaces/IAnimalQty';


type Props = {
    list: IAnimalQty[]
}

function Report(props: Props) { 
    debugger;
    console.log()
    let tdList = props.list
        .sort((a, b) => {
            if (a.qty < b.qty) return -1;
            else if (a.qty > b.qty) return 1;
            return 0;
        })
        .map((dono) => <tr>
            <td>{dono.ownerName}</td>
            <td>{dono.qty}</td>
        </tr>);


    return (
        <table id="reportList">
            <thead>
                <tr>
                    <th>Dono</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {tdList}
            </tbody>
        </table>
    );
}
export default Report;

