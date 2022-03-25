import { Button, ButtonGroup, Card, Collapsible, Scrollable, RangeSlider } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { EDIT_IMAGE } from '../../../scripts/constants'
const MAX_WIDTH = 1600
const MIN_WIDTH = 0
const MAX_HEIGHT = 1600
const MIN_HEIGHT = 0

export default function ImageConfigElement({ updateElement, item }) {
    const [toggleButton, setToggleButton] = useState(false);
    const [height, setHeight] = useState(item?.size || '500');
    const [width, setWidth] = useState(item?.size || '500');
    const [x, setX] = useState(item?.x || '1100');
    const [y, setY] = useState(item?.y || '500');
    const [image, setImage] = useState(null);
    const fileRef = useRef();
    const onFileChange = (event) => {
        const file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            setImage(reader.result);
        }
    }
    useEffect(() => {
        updateElement({ 'configId': item.id, 'updatedConfig': { type: EDIT_IMAGE, height, width, image, x, y } })
    }, [height, width, image, x, y])

    return (
        <>
            <input type={'file'} hidden ref={fileRef} onChange={onFileChange} />
            <Button primary={toggleButton} fullWidth onClick={() => setToggleButton(!toggleButton)}>{item.id}</Button>
            <Collapsible open={toggleButton} id={item.id} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}>
                <br />
                <Card title={item.id} sectioned actions={[{ content: 'Change Image', onAction: () => fileRef.current.click() }]} primaryFooterAction={{ content: 'Insert', onAction: () => alert("454654") }}>
                    <Scrollable shadow style={{ height: '60vh' }} focusable horizontal={false}>
                        <div style={{ 'display': 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ 'maxWidth': '80%' }}>
                                <img src={image} style={{ 'maxWidth': '100%', alignSelf: 'center' }} />
                            </div>
                        </div>
                        <Card.Section>
                            <div>
                                <ButtonGroup segmented fullWidth>
                                    <div style={{ 'paddingRight': '5px' }}>
                                        <RangeSlider
                                            max={MAX_WIDTH}
                                            min={MIN_WIDTH}
                                            label="Width"
                                            value={width}
                                            onChange={setWidth}
                                            output
                                        />
                                    </div>
                                    <div>
                                        <RangeSlider
                                            max={MAX_HEIGHT}
                                            min={MIN_HEIGHT}
                                            label="Height"
                                            value={height}
                                            onChange={setHeight}
                                            output
                                        />
                                        {/* <TextField label='Position : Y' value={y} onChange={setY} type='number' /> */}
                                    </div>
                                </ButtonGroup>
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
                        </Card.Section>
                    </Scrollable>
                </Card>
            </Collapsible>
        </>
    )
}
