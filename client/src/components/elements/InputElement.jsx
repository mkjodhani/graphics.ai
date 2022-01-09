import { TextField } from '@shopify/polaris'
import React from 'react'
import { Select } from '@shopify/polaris'
export default function InputElement({ label, value, setValue }) {
    const options = [
        { label: 'Today', value: 'today' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last 7 days', value: 'lastWeek' },
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
