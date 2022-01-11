import { TextField } from '@shopify/polaris'
import React from 'react'
import { Select } from '@shopify/polaris'
export default function InputElement({ label, value, setValue }) {
    const options = [
        { label: 'School of Hard Knocks', value: '1' },
        { label: 'The College of Life', value: '2' },
        { label: 'Classic Congratulation', value: '3' },
        { label: 'Silver Success', value: '4' },
        { label: 'Regal reward', value: '5' },
        { label: 'Wavy winner', value: '6' },
        { label: 'Turquoise triumph', value: '7' },
        { label: 'Blue success', value: '8' },
        { label: 'Golden performance', value: '9' },
    ];
    return (
        <>
            {
                label === "Theme" ?
                    <Select
                        label={label}
                        options={options}
                        onChange={setValue}
                        value={value}
                    />
                    :
                    <TextField type={label === 'Date' ? 'date' : 'text'} label={label} value={value} onChange={setValue} />
            }
        </>
    )
}
