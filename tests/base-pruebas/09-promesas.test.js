import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"


describe('Pruebas 09-promesas', () => { 



    test(' getHeroeByIdAsync debe retornar un heroe ', (done) => { 

          const id = 1

          getHeroeByIdAsync(id).then(hero => { 

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
                     
            done()

          } )
     })


    test(' getHeroeByIdAsync debe retornar un error si heroe noe xiste', (done) => { 

          const id = 100

          getHeroeByIdAsync(id)
          .then(hero => {

            expect(hero).toBeFalsy()


            done()
          })
          .catch(error => { 

            console.log(error)

            expect(error).toBe('No se pudo encontrar el héroe')
                     
            done()

          } )
     })





 })