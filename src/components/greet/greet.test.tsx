import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', () => {
    test('Greet renders correctly', () =>{
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {

        test('Greet renders with a name', () =>{
            render(<Greet name="Brian"/>)
            const textElement = screen.getByText("Hello Brian")
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
