// eslint-disable-next-line react/prop-types
export const Decrement = ({ decrement }) => {
    console.log(decrement)

    return (
        <>
            <button onClick={decrement}>decrement</button>
        </>
    )
}
