// import PageHeader from '../../elements/supplementary/PageHeader'
import React, { useCallback, useEffect, useState } from 'react';
import { Caption, DropZone, Stack, Thumbnail, Button, Heading } from '@shopify/polaris';
import { NoteMinor } from '@shopify/polaris-icons';
import AppAppBar from '../../home/modules/views/AppAppBar';
import withRoot from '../../home/modules/withRoot';
const rootURL = "http://localhost:5000/public/images/converted/";

function BlurBackground() {
    const [file, setFile] = useState();
    const [loading,setLoading] = useState(false);
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
        };
    }
    useEffect(() => {
        readURL(file);
    }, [file])
    const sendFileToConvert = async () => {
        setLoading(true);
        if (!file) {
            alert("Select one Image...");
            setLoading(false);
                return
        }
        const formData = new FormData();
        formData.append('image', file);
        await fetch('http://localhost:5000/uploader/blur', {
            method: "POST",
            body: formData
        }).then(data => data.json())
            .then(({ fileName, status, message }) => {
                setResponseFile(fileName);
            })
        .catch((e) =>{
            console.log(e);
            alert(e.message)
        })
        .finally(() =>{
            setLoading(false);
        })
    }
    function download() {
        window.open(rootURL + reposnseFile)
        // var a = document.createElement("a");
        // a.href = rootURL + reposnseFile;
        // a.setAttribute("download", reposnseFile);
        // a.click();
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
                    <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '20px' }}>
                        <div style={{ 'margin': '5px' }}>
                            <Button loading={loading} size='large' primary onClick={sendFileToConvert}>Convert</Button>
                        </div>
                        <div style={{ 'margin': '5px' }}>
                            <Button disabled={!reposnseFile} size='large' primary onClick={download}>Download</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRoot(BlurBackground)