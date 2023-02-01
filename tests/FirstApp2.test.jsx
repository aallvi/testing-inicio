import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en FirstApp', () => { 
 

    const title = 'Hola, Soy Goku'

    
    test('debe hacer match con el snapshop', () => { 


        const {container} = render( <FirstApp title={title} /> )

        expect(container).toMatchSnapshot()


     })


     test('debe de mostrar el mensaje "Hola, Soy Goku', () => { 

       

        render( <FirstApp title={title} /> )

        // screen.debug()

        expect(screen.getByText(title) ).toBeTruthy()


      })


      test('debe mostrar el titulo en un h1', () => { 


        render( <FirstApp title={title} /> )

        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title)




       })



 })