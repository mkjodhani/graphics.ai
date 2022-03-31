import PageHeader from '../../elements/supplementary/PageHeader'
import React, { useCallback, useEffect, useState } from 'react';
import { Caption, DropZone, Stack, Thumbnail, Button, Heading } from '@shopify/polaris';
import { NoteMinor } from '@shopify/polaris-icons';
import axios from 'axios';

export default function BlurBackground() {
    const [file, setFile] = useState();
    const [fileSource, setFileSource] = useState();
    const [reposnseFile, setResponseFile] = useState(null);
    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
            setFile((file) => acceptedFiles[0]),
        [],
    );
    function readURL(file) {
        if (!file) return
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
            setFileSource(e.target.result);
            console.log(e.target.result);
        };
    }
    useEffect(() => {
        readURL(file);
    }, [file])
    const sendFileToConvert = () => {
        if (!file) {
            alert("Select One Image to blur...");
            return
        }
        const formData = new FormData();
        formData.append('image',file);
        axios.post('/uploader',formData)
    }
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    const fileUpload = !file && <DropZone.FileUpload />;
    const uploadedFile = file && (
        <Stack>
            <Thumbnail
                size="large"
                alt={file.name}
                source={
                    validImageTypes.includes(file.type)
                        ? window.URL.createObjectURL(file)
                        : NoteMinor
                }
            />
            <div>
                {file.name} <Caption>{file.size} bytes</Caption>
            </div>
        </Stack>
    );
    return (
        <div>
            <PageHeader />
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '20px' }}>
                <div>
                    <Heading>Image for making the background blur</Heading>
                    <br></br>
                    <div style={{ 'width': '500px' }}>
                        <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
                            {uploadedFile}
                            {fileUpload}
                        </DropZone>
                        {
                            file ? <img src={fileSource} width={250} /> : <div style={{ 'width': '100%', 'height': '250px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                <p>No Image Selected</p>
                            </div>
                        }
                    </div>
                    <Button primary fullWidth onClick={sendFileToConvert}>Convert</Button>
                </div>
            </div>
        </div>
    )
}
