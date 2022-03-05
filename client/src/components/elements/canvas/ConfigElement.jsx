import { Button, ButtonGroup, Card, Icon, Collapsible, TextField, Tooltip, Select, Scrollable } from '@shopify/polaris'
import React, { useState, useEffect } from 'react'
import { CircleCancelMajor } from '@shopify/polaris-icons';
import { SketchPicker } from 'react-color';
const alignValues = [{ label: "Start", value: 'start' }, { label: "End", value: 'end' }, { label: "Center", value: 'center' }, { label: "Left", value: 'left' }, { label: "Right", value: 'right' }]
const fontFamilies = [{ label: "Dancing Script", value: 'DancingScript' }, { label: "Black Swan", value: 'BlackSwan' }, { label: "Palatino", value: 'PalatinoLinotype' }]
export default function ConfigElement({ open, label, id, config, setConfig }) {
    const [toggleButton, setToggleButton] = useState(false);
    const [string, setString] = useState(config?.value || label);
    const [size, setSize] = useState(config?.size || '500');
    const [x, setX] = useState(config?.x || '1100');
    const [y, setY] = useState(config?.y || '500');
    const [fontFamily, setFontFamily] = useState(config?.fontFamily || 'DancingScript');
    const [textAlign, setTextAlign] = useState(config?.textAlign || 'center');
    const [buttons, setButtons] = useState(config?.textStyle || {
        bold: false,
        underline: false,
        italic: false,
        strike: false
    });
    const [color, setColor] = useState({ hex: config.color || '#333' });
    useEffect(() => {
        setTimeout(() => {
            setConfig({
                value: string,
                size,
                x,
                y,
                color: color.hex,
                textStyle: buttons,
                textAlign,
                fontFamily
            })
        }, 500)
    }, [string, size, x, y, color, buttons, textAlign, fontFamily])
    return (
        <>
            <Button primary={toggleButton} fullWidth onClick={() => setToggleButton(!toggleButton)}>{label}</Button>
            <Collapsible open={toggleButton} id={id} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}>
                <br />
                <Card title={label} sectioned>
                    <Scrollable style={{'height':'50vh'}}>
                        <Card.Section>
                            <TextField type={label === "Date of Certification" ? 'date' : 'text'} label='String' value={string} onChange={setString} suffix={string && <div onClick={() => setString('')}><Icon source={CircleCancelMajor} /></div>} />
                            <div>
                                <Select label='Font Family' options={fontFamilies} value={fontFamily} onChange={setFontFamily} />
                                <ButtonGroup segmented>
                                    <div style={{ 'paddingRight': '5px', 'minWidth': '100px' }}>
                                        <Select label='Alignment' options={alignValues} value={textAlign} onChange={setTextAlign} />
                                    </div>
                                    <div>
                                        <TextField label='Size' value={size} onChange={setSize} type='number' />
                                    </div>
                                </ButtonGroup>
                                <ButtonGroup segmented fullWidth>
                                    <div style={{ 'paddingRight': '5px' }}>
                                        <TextField label='Position : X' value={x} onChange={setX} type='number' />
                                    </div>
                                    <div>
                                        <TextField label='Position : Y' value={y} onChange={setY} type='number' />
                                    </div>
                                </ButtonGroup>
                            </div>
                            <br />
                            <ButtonGroup segmented fullWidth>
                                <Tooltip content="Bold" dismissOnMouseOut>
                                    <Button primary={buttons.bold} onClick={() => setButtons(oldButtons => ({ ...oldButtons, bold: !oldButtons.bold }))}>B</Button>
                                </Tooltip>
                                <Tooltip content="Italic" dismissOnMouseOut>
                                    <Button primary={buttons.italic} onClick={() => setButtons(oldButtons => ({ ...oldButtons, italic: !oldButtons.italic }))}>I</Button>
                                </Tooltip>
                                {/* <Tooltip content="Underline" dismissOnMouseOut>
                            <Button primary={buttons.underline} onClick={() => setButtons(oldButtons => ({ ...oldButtons, underline: !oldButtons.underline }))}>U</Button>
                        </Tooltip>
                        <Tooltip content="Strikethrough" dismissOnMouseOut>
                            <Button primary={buttons.strike} onClick={() => setButtons(oldButtons => ({ ...oldButtons, strike: !oldButtons.strike }))}>S</Button>
                        </Tooltip> */}
                            </ButtonGroup>
                            <br />
                            <div style={{ 'display': 'flex', alignItems: 'flex-start', 'justifyContent': 'space-between' }}>
                                <div>
                                    <h1>Color : </h1>
                                    <div style={{ 'width': '30px', 'backgroundColor': color.hex, 'height': '30px', 'margin': '5px' }}></div>
                                </div>
                                <SketchPicker
                                    color={color.hex}
                                    onChangeComplete={setColor}
                                />
                            </div>
                        </Card.Section>
                    </Scrollable>
                </Card>
            </Collapsible>
        </>
    )
}
