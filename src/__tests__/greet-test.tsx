import {render, screen} from "@testing-library/react"
import {Greet} from "../components/greet/greet"

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {

        test('Greet renders with a name', () => {
            render(<Greet firstName="Brian"/>)
            const textElement = screen.getByText("Hello Brian")
            expect(textElement).toBeInTheDocument()
        })
    })
})
