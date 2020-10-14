import React, { useEffect, useState } from 'react';

//API
import Animals from './apifake/Animals';
import Owners from './apifake/Owners';

//Components
import Owner from './components/owner'
import Animal from './components/animal'
import Report from './components/Report';

import "./style.css";
import IOwner from './apifake/Interfaces/IOwner';
import IAnimal from './apifake/Interfaces/IAnimal';
import IAnimalQty from './apifake/Interfaces/IAnimalQty';


const owners: Owners = new Owners();
const animals: Animals = new Animals();



function App() {

  const [ownerList, setOwners] = useState<IOwner[]>([]);
  const [animalByOwnerList, setAnimalByOwner] = useState<IAnimal[]>([]);
  const [animalList, setAnimals] = useState<IAnimal[]>([]);
  const [ animalQuantity, setAnimalsQty] = useState< IAnimalQty[]>([])

  const getAnimalByOwnerId = (e: any) => {
    animals.getByOwnerId(Number(e.target.value)).then((response) => {
      setAnimalByOwner(response)
      JSON.stringify(response)
    })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }

  const orderList = () => {
    let newList: IAnimalQty[] = ownerList.map((owner) => {
      return {
        ownerName: owner.name,
        qty: animalList.filter(element => element.ownerId === owner.id).length
      }
    })
    setAnimalsQty(newList);
  }


  useEffect(() => {
    owners.getAll().then((response) => {
      setOwners(response)
      JSON.stringify(response)
    })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

    animals.getAll().then((response) => {
      setAnimals(response)
      JSON.stringify(response)
    })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

  })

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Owner id="owner" label="Donos: " donos={ownerList} onChangeClick={getAnimalByOwnerId} />
      <Animal id="animal" label="Animais: " animals={animalByOwnerList} />
      <section id="report">
        <button onClick={orderList}>Ordenar donos com mais animais</button>
        <Report list={animalQuantity} />
      </section>

    </div>
  );
}

export default App;
