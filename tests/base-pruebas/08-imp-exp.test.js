import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"



describe('Prueba 08-imp-ext', () => { 
    

    // test('getHeroeById debe retornar un heroe por id', () => { 

    //     const id = 1

    //     const hero = getHeroeById(id)

    //     console.log(hero)


    //     expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })


    //  })

    // test('getHeroeById debe retornar undefined si no existe id ', () => { 

    //     const id = 100

    //     const hero = getHeroeById(id)

    //     console.log(hero)


    //     expect(hero).toBeFalsy()


    //  })


    test('getHeroesByOwner deber retornar largo 3 DC ', () => { 


        const hero = getHeroesByOwner('DC')

        console.log(hero)

        expect(hero).toHaveLength(3)
        expect(hero).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])

        // expect(hero).toBeFalsy()


     })


    test('getHeroesByOwner deber retornar largo 2 Marvel ', () => { 


        const hero = getHeroesByOwner('Marvel')

        console.log(hero)

        expect(hero).toHaveLength(2)
        expect(hero).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])

        // expect(hero).toBeFalsy()


     })



 })