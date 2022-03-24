import { useState } from 'react'
import { Button, Card, Page } from '@shopify/polaris';
import { useRef } from 'react';
import { useEffect } from 'react';
import PhotoViwer from './PhotoViwer';
import EditorConfig from './EditorConfig';
import CanvasOrder from '../../elements/supplementary/CanvasOrder';
import PageHeader from '../../elements/supplementary/PageHeader'
export default function Editor() {
    const [image, setImage] = useState(null);
    const [config, setConfig] = useState([]);
    const [showReorder, setShowReorder] = useState(false);
    const [size, setSize] = useState({ width: 2200, height: 1700 });
    const fileRef = useRef();
    const onFileChange = (event) => {
        const file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            const img = new Image();
            img.src = reader.result;
            img.onload = (e) => {
                setSize({ 'height': img.naturalHeight, 'width': img.naturalWidth })
            }
            setImage(reader.result);
        }
    }
    const deleteItem = (id) => {
        const updatedList = config.filter(item => item.id !== id);
        setConfig(updatedList);
    }
    const reset = () => {
        setSize({ width: 2200, height: 1700 });
        setConfig([]);
        setImage(null);
    }
    return (
        <>
            <PageHeader/>
            <input type={'file'} hidden ref={fileRef} onChange={onFileChange} />
            {
                image ?
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'alignItems': 'flex-start', 'padding': '10px' }}>
                        <div style={{ 'height': '90vh', 'width': '30%' }}>
                            <Card sectioned actions={[
                                { 'content': showReorder ? "Manage Items" : 'Reorder Items', 'onAction': () => setShowReorder(value => !value) },
                                { 'content': 'Clear', 'onAction': reset }
                            ]}>
                                {
                                    showReorder ? <CanvasOrder characters={config} updateCharacters={setConfig} deleteItem={deleteItem} />
                                        :
                                        <EditorConfig size={size} config={config} setConfig={setConfig} />
                                }
                            </Card>
                        </div>
                        <div style={{ 'height': '90vh', 'width': '65%' }}>
                            <Card sectioned actions={[{ 'content': 'Upload Image', 'onAction': () => fileRef.current.click() }]}>
                                <PhotoViwer image={image} config={config} size={size} />
                            </Card>
                        </div>
                    </div>
                    :
                    <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'padding': '10px', 'height': '98vh' }}>
                        <Button primary onClick={() => fileRef.current.click()}>Select Image</Button>
                    </div>
            }

        </>

    )
}