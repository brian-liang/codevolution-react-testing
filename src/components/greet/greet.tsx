import {GreetProps} from "./greet.types";

export const Greet = ({firstName, lastName}: GreetProps) => {
    return (
        <div>Hello {firstName} {lastName}</div>
    )
}
