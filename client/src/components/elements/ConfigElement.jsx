import { Button, ButtonGroup, Card, ColorPicker, Icon, Collapsible, Stack, TextField, Tooltip } from '@shopify/polaris'
import React, { useState, useEffect } from 'react'
import { CircleCancelMajor } from '@shopify/polaris-icons';
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }
export default function ConfigElement({ open, label, id, config, setConfig }) {
    const [toggleButton, setToggleButton] = useState(false);
    const [string, setString] = useState(config?.value ||label);
    const [size, setSize] = useState(config?.size||'500');
    const [x, setX] = useState(config?.x || '1100');
    const [y, setY] = useState(config?.y || '500');
    const [colorString, setColorString] = useState(config?.color || '');
    const [buttons, setButtons] = useState(config?.textStyle || {
        bold: false,
        underline: false,
        italic: false,
        strike: false
    });
    const [color, setColor] = useState({
        hue: 180,
        saturation: 0.5,
        brightness: 0.5,
        alpha: 0.7,
    })
    const hsbaString = (color) => {
        return hslToHex(color.hue,color.saturation,color.brightness);
        // return `hsl(${color.hue},${color.saturation * 100}%,${color.brightness * 100}%)`
    }
    useEffect(() =>{
        console.log(hsbaString(color),color);
        setColorString(hsbaString(color))
    },[color]);
    useEffect(() => {
        setConfig({
            value:string,
            size,
            x,
            y,
            color,
            textStyle:buttons
        })
    }, [string, size, x, y, colorString, buttons])
    return (
        <>
        <Button primary={toggleButton} fullWidth onClick={() => setToggleButton(!toggleButton)}>{label}</Button>
        <Collapsible open={toggleButton} id={id} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }} expandOnPrint>
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
                        {/* <Tooltip content="Underline" dismissOnMouseOut>
                            <Button primary={buttons.underline} onClick={() => setButtons(oldButtons => ({ ...oldButtons, underline: !oldButtons.underline }))}>U</Button>
                        </Tooltip>
                        <Tooltip content="Strikethrough" dismissOnMouseOut>
                            <Button primary={buttons.strike} onClick={() => setButtons(oldButtons => ({ ...oldButtons, strike: !oldButtons.strike }))}>S</Button>
                        </Tooltip> */}
                    </ButtonGroup>
                    <br />
                    <div style={{ 'display': 'flex', alignItems: 'center', 'justifyContent': 'flex-start' }}>
                        <h1>Color : </h1>
                        <div style={{ 'width': '30px', 'height': '30px', backgroundColor: hsbaString(color), 'margin': '5px' }}></div>
                    </div>
                    <div style={{ 'width': '100%' }}>
                        <ColorPicker fullWidth color={color} onChange={setColor} allowAlpha />
                    </div>
                </Card.Section>
            </Card>
        </Collapsible>
        </>
    )
}
