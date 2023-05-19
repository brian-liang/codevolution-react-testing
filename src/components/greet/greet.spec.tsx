import {render, screen} from "@testing-library/react"
import {Greet} from "./greet"

describe('Greet', () => {
    it('Greet renders correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {

        it('Greet renders with a name', () => {
            render(<Greet firstName="Brian"/>)
            const textElement = screen.getByText("Hello Brian")
            expect(textElement).toBeInTheDocument()
        })
    })
})
