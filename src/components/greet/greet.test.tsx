import {render, screen} from "@testing-library/react"
import {Greet} from "./greet"

describe('Greet', () => {
    test('Renders correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {

        test('Renders with a name', () => {
            render(<Greet firstName="Brian"/>)
            const textElement = screen.getByText("Hello Brian")
            expect(textElement).toBeInTheDocument()
        })

        test('Renders with first and last name', () => {
            render(<Greet firstName="Brian" lastName="Liang"/>)
            const textElement = screen.getByText("Hello Brian Liang")
            expect(textElement).toBeInTheDocument()

        })
    })
})


/*
* Greet should render the text hello and if a name is passed into the component it should render hellow followed by the name
*/


// test.only('Only runs this test', () =>{
//     render(<Greet name="Brian"/>)
//     const textElement = screen.getByText("Hello Brian")
//     expect(textElement).toBeInTheDocument()
// })

// test.skip('Skipps test', () =>{
//     render(<Greet name="Brian"/>)
//     const textElement = screen.getByText("Hello Brian")
//     expect(textElement).toBeInTheDocument()
// })
