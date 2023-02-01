import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"



describe('Pruebas component Countert app', () => { 

    const valor =100

//    test('debe calzar con el snap', () => { 


//           const {container} = render ( <CounterApp value={valor} /> )

//           expect(container).toMatchSnapshot()



//     })
//    test('debe ser de 100', () => { 


//            render ( <CounterApp value={valor} /> )

//            expect(screen.getByText(100)).toBeTruthy()

//     })


    test('should increment with button +1', () => { 

        render ( <CounterApp value={10} /> )

           fireEvent.click( screen.getByText('+1') )

           expect( screen.getByText('11') ).toBeTruthy()


     })
    test('should less with button +1', () => { 

        render ( <CounterApp value={10} /> )

           fireEvent.click( screen.getByText('-1') )

           expect( screen.getByText('9') ).toBeTruthy()


     })


    test('should reset with button reset', () => { 

        render ( <CounterApp value={10} /> )

        fireEvent.click( screen.getByText('-1') )
        fireEvent.click( screen.getByText('-1') )
        fireEvent.click( screen.getByText('-1') )

        //    fireEvent.click( screen.getByText('Reset') )

        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'} ) )

           expect(screen.getByText(10)).toBeTruthy()


     })


 })