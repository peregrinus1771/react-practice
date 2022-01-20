// eslint-disable-next-line react/prop-types
export const Increment = ({ increment }) => {
    console.log(increment)

    return (
        <>
            <button onClick={increment}>increment</button>
        </>
    )
}
