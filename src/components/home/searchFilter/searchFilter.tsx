import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        const getDataAll = async () => {
            const api = await fetch('/mock.json')
            const result = await api.json()
            setJsonData(result)
        }
        getDataAll()
    }, [])

    return (
        <Container>
            <Input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {jsonData
                .filter((val) => {
                    if (searchTerm === '') {
                        return val
                    } else if (
                        val.first_name
                            .toLocaleLowerCase()
                            .includes(searchTerm.toLowerCase())
                    ) {
                        return val
                    }
                })
                .map((val, key) => {
                    return (
                        <User key={key}>
                            <FirstName>{val.first_name}</FirstName>
                        </User>
                    )
                })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`

const Input = styled.input`
    margin-top: 20px;
    width: 350px;
    height: 40px;
    font-size: 20px;
    padding-left: 10px;
`

const User = styled.div``

const FirstName = styled.p`
    margin: 10px;
    font-size: 18px;
`
