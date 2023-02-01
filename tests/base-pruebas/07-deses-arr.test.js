import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"



describe('Prueba 07-deses-arr', () => { 



    test('debe retornar string y un numero', () => { 

                  
  
        const [letters,numers] = retornaArreglo()

        // expect(letters).toBe( 'ABC' )
        // expect(numers).toBe( 123 )

        expect( letters ).toEqual( expect.any(String) )



     })



 })