import { Button, ButtonGroup, Card, Icon, Collapsible, TextField, Tooltip, Select, Scrollable, RangeSlider } from '@shopify/polaris'
import React, { useState, useEffect } from 'react'
import { CircleCancelMajor } from '@shopify/polaris-icons';
import { SketchPicker } from 'react-color';
import { CirclePlusMinor } from '@shopify/polaris-icons';
import { ALIGN_LIST, FONT_FAMILY_LIST, MAX_FONT_SIZE, MIN_FONT_SIZE, MAX_WIDTH, MIN_WIDTH, MAX_HEIGHT, MIN_HEIGHT, EDIT_TEXT } from '../../../scripts/constants';
export default function TextConfigElement({ updateElement, item }) {
    const [toggleButton, setToggleButton] = useState(false);
    const [string, setString] = useState(item?.value || item.id);
    const [size, setSize] = useState(item?.size || '500');
    const [x, setX] = useState(item?.x || '1100');
    const [y, setY] = useState(item?.y || '500');
    const [color, setColor] = useState({ hex: item?.color || '#333' });
    const [buttons, setButtons] = useState(item?.textStyle || {
        bold: false,
        underline: false,
        italic: false,
        strike: false
    });
    const [textAlign, setTextAlign] = useState(item?.textAlign || 'center');
    const [fontFamily, setFontFamily] = useState(item?.fontFamily || 'DancingScript');
    useEffect(() => {
        updateElement({ 'configId': item.id, 'updatedConfig': { type: EDIT_TEXT, value: string, size, x, y, color: color.hex, textStyle: buttons, textAlign, fontFamily } })
    }, [string, size, x, y, color, buttons, textAlign, fontFamily])
    return (
        <Card title={item.id} sectioned actions={[{ 'content': toggleButton ? <Icon source={CircleCancelMajor} /> : <Icon source={CirclePlusMinor} />, 'onAction': () => setToggleButton(toggleButton => !toggleButton) }]}>
            <p>{string}</p>
            <Collapsible open={toggleButton} id={item.id} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}>
                <Scrollable  shadow style={{ height: '100%' }} focusable horizontal={false}>
                    <Card.Section>
                        <TextField type={item.id === "Date of Certification" ? 'date' : 'text'} label='String' value={string} onChange={setString} suffix={string && <div onClick={() => setString('')}><Icon source={CircleCancelMajor} /></div>} />
                        <div>
                            <ButtonGroup segmented fullWidth>
                                <Select label='Font Family' options={FONT_FAMILY_LIST} value={fontFamily} onChange={setFontFamily} />
                                <Select label='Alignment' options={ALIGN_LIST} value={textAlign} onChange={setTextAlign} />
                            </ButtonGroup>
                            <RangeSlider
                                max={MAX_FONT_SIZE}
                                min={MIN_FONT_SIZE}
                                label="Size"
                                value={size}
                                onChange={setSize}
                                output
                            />
                            <ButtonGroup segmented fullWidth>
                                <div style={{ 'paddingRight': '5px' }}>
                                    <RangeSlider
                                        max={MAX_WIDTH}
                                        min={MIN_WIDTH}
                                        label="Position : X"
                                        value={x}
                                        onChange={setX}
                                        output
                                    />
                                    {/* <TextField label='Position : X' value={x} onChange={setX} type='number' /> */}
                                </div>
                                <div>
                                    <RangeSlider
                                        max={MAX_HEIGHT}
                                        min={MIN_HEIGHT}
                                        label="Position : Y"
                                        value={y}
                                        onChange={setY}
                                        output
                                    />
                                    {/* <TextField label='Position : Y' value={y} onChange={setY} type='number' /> */}
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
                        </ButtonGroup>
                        <br />
                        <div>
                            <div style={{ 'display': 'flex', alignItems: 'center', 'justifyContent': 'space-between' }}>
                                <h1>Color : </h1>
                                <div style={{ 'width': '30px', 'backgroundColor': color.hex, 'height': '30px', 'margin': '5px' }}></div>
                            </div>
                            <br/>
                            <SketchPicker
                                color={color.hex}
                                onChangeComplete={setColor}
                            />
                        </div>
                    </Card.Section>
                </Scrollable>
            </Collapsible>
        </Card>
    )
}
