import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const ReactHooksFormForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
`
const SubmitInput = styled.input`
    width: 200px;
`

export const ReactHooksForm = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <ReactHooksFormForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">fistname</label>
                <input
                    name="firstName"
                    ref={register({ required: true, maxLength: 20 })}
                />
                {errors.firstName?.type === 'required' &&
                    'First name is required'}
                {errors.firstName?.type === 'maxLength' &&
                    'Your input exceed maxLength'}
                <label htmlFor="lastName">lastname</label>
                <input
                    name="lastName"
                    ref={register({
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                    })}
                />
                {errors.lastName?.type === 'required' &&
                    'First name is required'}
                {errors.lastName?.type === 'pattern' &&
                    'Your input includes number or something'}
                <label htmlFor="age">age</label>
                <input
                    name="age"
                    type="number"
                    ref={register({ min: 18, max: 65 })}
                />
                {errors.age?.type === 'min' &&
                    'Your input does not exceed minimumLength'}
                {errors.ageName?.type === 'min' &&
                    'Your input exceed maxLength'}
                <SubmitInput type="submit" />
            </ReactHooksFormForm>
        </>
    )
}
