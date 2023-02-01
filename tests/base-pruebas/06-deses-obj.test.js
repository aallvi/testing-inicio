import { usContext } from "../../src/base-pruebas/06-deses-obj"



describe('Pruebas en 06-deses-obj', () => { 


    test('usContext debe retornar objeto', () => { 

        const clave= 'alvi'

        const edad =13

       const deses = usContext({clave, edad})


       expect(deses).toStrictEqual({
           nombreClave: clave,
           anios: edad,
           latlng: {
               lat: 14.1232,
               lng: -12.3232
           }
       })


     })

        


 })