import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funcoines', () => { 


    // test('getUser debe retornar un objeto', () => { 

    //       const testUser = {
    //          uid: 'ABC123',
    //          username:'El_Papi1502'
    //       }

    //       const user = getUser()

    //       expect(user).toEqual(testUser)


    //  })


     test('getUsuarioActivo debe retordar un objeto ', () => {
       
        const name = 'Alvaro'

        const user = getUsuarioActivo(name)

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })


      })





 })