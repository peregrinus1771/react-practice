import React from 'react'
import { ReactHooksForm, ReactSelect } from './index'
import styled from 'styled-components'

const FormDiv = styled.div`
    display: grid;
    row-gap: 30px;
`
export const FormParent = () => {
    return (
        <FormDiv>
            <ReactHooksForm />
            <ReactSelect />
        </FormDiv>
    )
}
