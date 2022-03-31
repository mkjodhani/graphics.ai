import PageHeader from '../../elements/supplementary/PageHeader'
import React, { useCallback, useEffect, useState } from 'react';
import { Caption, DropZone, Stack, Thumbnail, Button, Heading } from '@shopify/polaris';
import { NoteMinor } from '@shopify/polaris-icons';

export default function TransformBackground() {
    const [fetchInterval, setFetchInterval] = useState();
    const [mainFile, setMainFile] = useState();
    const [backgroundFile, setBackgroundFile] = useState();
    const [mainFileSource, setMainFileource] = useState();
    const [backgroundFileSource, setBackgroundFileource] = useState();
    const [reposnseFile, setResponseFile] = useState(null);
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    const fileUploadImage = !mainFile && <DropZone.FileUpload />;
    const fileUploadBackground = !backgroundFile && <DropZone.FileUpload />;
    const rootURL = "http://localhost:5000/public/images/converted/"
    const checkForFileExist = () => {
        setInterval(() => {
            fetch("")
        }, 1000)
    }
    const uploadedFileImage = mainFile && (
        <Stack>
            <Thumbnail
                size="large"
                alt={mainFile.name}
                source={
                    validImageTypes.includes(mainFile.type)
                        ? window.URL.createObjectURL(mainFile)
                        : NoteMinor
                }
            />
            <div>
                {mainFile.name} <Caption>{mainFile.size} bytes</Caption>
            </div>
        </Stack>
    );
    const uploadedFileBackground = backgroundFile && (
        <Stack>
            <Thumbnail
                size="large"
                alt={backgroundFile.name}
                source={
                    validImageTypes.includes(backgroundFile.type)
                        ? window.URL.createObjectURL(backgroundFile)
                        : NoteMinor
                }
            />
            <div>
                {backgroundFile.name} <Caption>{backgroundFile.size} bytes</Caption>
            </div>
        </Stack>
    );
    const handleDropZoneDropBackgroundFile = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
            setBackgroundFile((file) => acceptedFiles[0]),
        [],
    );
    const handleDropZoneDropMainFile = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
            setMainFile((file) => acceptedFiles[0]),
        [],
    );
    function readURLImage(file) {
        if (!file) return
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
            setMainFileource(e.target.result);
        };
    }
    function readURLBackground(file) {
        if (!file) return
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
            setBackgroundFileource(e.target.result);
        };
    }
    function download() {
        window.open(rootURL + reposnseFile)
        var a = document.createElement("a");
        a.href = rootURL + reposnseFile;
        a.setAttribute("download", reposnseFile);
        a.click();
    }
    useEffect(() => {
        readURLImage(mainFile);
    }, [mainFile])
    useEffect(() => {
        readURLBackground(backgroundFile);
    }, [backgroundFile])
    const sendFileToTransform = async () => {
        if (!mainFile || !backgroundFile) {
            alert("Select two images...");
            return
        }
        const formData = new FormData();
        formData.append('image', mainFile);
        formData.append('background', backgroundFile);
        await fetch('http://localhost:5000/uploader/changeBackground', {
            method: "POST",
            body: formData
        }).then(data => data.json())
            .then(({ fileName, status, message }) => {
                console.log( rootURL+ fileName);
                setResponseFile( fileName)
                // const interval =  setInterval(async () => {
                //     fetch("http://localhost:5000/public/images/converted/" + fileName).then(data => {
                //         setResponseFile(data);
                //         console.log(data);
                //         clearInterval(fetchInterval)
                //     })
                // }, 500);
                // setFetchInterval(interval);
            })
        // axios.post('/uploader',formData).then(res => console.log(res))
    }
    return (
        <div>
            <PageHeader />
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-evenly', 'margin': '20px' }}>
                <div>
                    <Heading>Image to Convert</Heading>
                    <br></br>
                    <div style={{ 'width': '500px' }}>
                        <DropZone allowMultiple={false} onDrop={handleDropZoneDropMainFile}>
                            {uploadedFileImage}
                            {fileUploadImage}
                        </DropZone>
                        {
                            mainFile ? <img src={mainFileSource} width={'100%'} /> : <div style={{ 'width': '100%', 'height': '250px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                <p>No Image Selected</p>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <Heading>Background Image</Heading>
                    <br></br>
                    <div style={{ 'width': '500px' }}>
                        <DropZone allowMultiple={false} onDrop={handleDropZoneDropBackgroundFile}>
                            {uploadedFileBackground}
                            {fileUploadBackground}
                        </DropZone>
                        {
                            backgroundFile ? <img src={backgroundFileSource} width={'100%'} /> : <div style={{ 'width': '100%', 'height': '250px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                                <p>No Image Selected</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '20px' }}>
                <div style={{ 'margin': '5px' }}>
                    <Button size='large' primary onClick={sendFileToTransform}>Convert</Button>
                </div>
                <div style={{ 'margin': '5px' }}>
                    <Button disabled={!reposnseFile} size='large' primary onClick={download}>Download</Button>
                </div>
            </div>
        </div>
    )
}
