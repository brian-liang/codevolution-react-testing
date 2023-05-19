interface GreetProps {
    firstName?: string,
    lastName?: string
}

export const Greet = ({firstName, lastName}: GreetProps) => {
    return (
        <div>Hello {firstName} {lastName}</div>
    )
}
