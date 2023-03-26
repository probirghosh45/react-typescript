type GreetingProps = {
    name: string
}

export const Greet = (props:GreetingProps) =>{
    return(
        <div>
            <h2>I'm {props.name}, Start Learning TypeScript !</h2>
        </div>
    )
}