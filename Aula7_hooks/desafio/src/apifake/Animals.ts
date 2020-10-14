import IAnimal from "./Interfaces/IAnimal";

export default class Animals {

    animals: IAnimal[] = [
        {
            id: 1,
            name: "Bingo",
            type: "dog",
            ownerId: 1
        },
        {
            id: 2,
            name: "Nina",
            type: "dog",
            ownerId: 2
        },
        {
            id: 3,
            name: "Roger",
            type: "dog",
            ownerId: 2
        },
        {
            id: 4,
            name: "Cort",
            type: "cat",
            ownerId: 3
        },
        {
            id: 5,
            name: "Ruby",
            type: "cat",
            ownerId: 3
        },
        {
            id: 6,
            name: "Lion",
            type: "cat",
            ownerId: 3
        },
        {
            id: 7,
            name: "Mimi",
            type: "cat",
            ownerId: 4
        },
        {
            id: 8,
            name: "Kity",
            type: "cat",
            ownerId: 2
        },
    ];



    getByOwnerId(ownerId: number): Promise<IAnimal[]> {   
        return new Promise(resolve => {
            setTimeout(() => resolve(this.animals.filter((animal) => animal.ownerId === ownerId)), 1000);
        });
    }

    getAll(): Promise<IAnimal[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.animals), 1000);
        });
    }
}