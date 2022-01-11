import { Button, ButtonGroup, Card, ColorPicker, Icon, Collapsible, Stack, TextField, Tooltip } from '@shopify/polaris'
import React, { useState, useEffect } from 'react'
import { CircleCancelMajor } from '@shopify/polaris-icons';
export default function ConfigElement({ open, label, id, config, setConfig }) {
    const [string, setString] = useState('1st Line of Title');
    const [size, setSize] = useState('500');
    const [x, setX] = useState('1100');
    const [y, setY] = useState('500');
    const [colorString, setColorString] = useState('');
    const [buttons, setButtons] = useState({
        bold: false,
        underline: false,
        italic: false,
        strike: false
    });
    const [color, setColor] = useState({
        hue: 180,
        saturation: 0.5,
        brightness: 0.5,
    })
    const hsbaString = (color) => {
        return `hsl(${color.hue},${color.saturation * 100}%,${color.brightness * 100}%)`
    }
    useEffect(() => {
        console.log("Chnaged");
    }, [string, size, x, y, colorString, buttons])
    return (
        <Collapsible open={open} id={id} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }} expandOnPrint>
            <br/>
            <Card title={label} sectioned>
                <Card.Section>
                    <TextField label='Value' value={string} onChange={setString} suffix={string && <div onClick={() => setString('')}><Icon source={CircleCancelMajor} /></div>} />
                    <br />
                    <Stack distribution="fillEvenly">
                        <TextField label='Size' value={size} onChange={setSize} type='number' />
                        <TextField label='Position : X' value={x} onChange={setX} type='number' />
                        <TextField label='Position : Y' value={y} onChange={setY} type='number' />
                    </Stack>
                    <br />
                    <ButtonGroup segmented fullWidth>
                        <Tooltip content="Bold" dismissOnMouseOut>
                            <Button primary={buttons.bold} onClick={() => setButtons(oldButtons => ({ ...oldButtons, bold: !oldButtons.bold }))}>B</Button>
                        </Tooltip>
                        <Tooltip content="Italic" dismissOnMouseOut>
                            <Button primary={buttons.italic} onClick={() => setButtons(oldButtons => ({ ...oldButtons, italic: !oldButtons.italic }))}>I</Button>
                        </Tooltip>
                        <Tooltip content="Underline" dismissOnMouseOut>
                            <Button primary={buttons.underline} onClick={() => setButtons(oldButtons => ({ ...oldButtons, underline: !oldButtons.underline }))}>U</Button>
                        </Tooltip>
                        <Tooltip content="Strikethrough" dismissOnMouseOut>
                            <Button primary={buttons.strike} onClick={() => setButtons(oldButtons => ({ ...oldButtons, strike: !oldButtons.strike }))}>S</Button>
                        </Tooltip>
                    </ButtonGroup>
                    <br />
                    <div style={{ 'display': 'flex', alignItems: 'center', 'justifyContent': 'flex-start' }}>
                        <h1>Color : </h1>
                        <div style={{ 'width': '30px', 'height': '30px', backgroundColor: hsbaString(color), 'margin': '5px' }}></div>
                    </div>
                    <div style={{ 'width': '100%' }}>
                        <ColorPicker fullWidth color={color} onChange={(obj) => {
                            setColor(obj);
                            setColorString(hsbaString(obj));
                        }} />
                    </div>
                </Card.Section>
            </Card>
        </Collapsible>
    )
}
