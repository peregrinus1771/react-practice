import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'Rea', label: 'React' },
    { value: 'Vue', label: 'Vue' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Svelte', label: 'Svelte' },
]

export const ReactSelect = () => {
    const [value, setvalue] = useState(null)

    console.log(value)

    return (
        <>
            <Select
                defaultValue={value}
                onChange={setvalue}
                options={options}
                isSearchable={true}
                placeholder={'Select JavaScript Framework or Library'}
                isClearable={true}
            />
            <a href="https://react-select.com/advanced">
                <button type="submit">go</button>
            </a>
        </>
    )
}
