import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas 11-async-await', () => { 



    test('should first', async () => { 


        const url = await getImagen()

        console.log(url)

        expect( url ).toBe('No se encontro la imagen')



     })


 })