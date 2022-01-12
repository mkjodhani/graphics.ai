import { Button, Stack } from '@shopify/polaris';
import React, { useRef, useEffect, useState } from 'react'
const makeFont = (config) =>{
    var font = "";
    const {bold,italic}  = config.textStyle;
    if(bold) font += "bold "
    if(italic) font += "italic "
    font += config.size + "% " + "BlackSwan"
    return font;
}
export default function Canvas(props) {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null)
    const image = new Image();
    const drawCanvas = ({ configTheme,
        configPrimaryHeader,
        configSecondaryHeader,
        configFirstBody,
        configSecondBody,
        configName,
        configThirdBody,
        configForthBody,
        configDate,
        configCertificate }) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        image.src = "img/certificates/blank/Certificate" + configTheme + ".png";
        image.onload = function () {
            if (!context) return;
            context.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height)
            
            //College Name Line 1
            context.fillStyle = configPrimaryHeader.color;//"#3F3F41"
            context.font = makeFont(configPrimaryHeader)
            context.textAlign = "center";
            context.fillText(configPrimaryHeader.value, configPrimaryHeader.x, configPrimaryHeader.y);

            //College Name Line 2
            context.fillStyle = configSecondaryHeader.color;//"#3F3F41"
            context.font = makeFont(configSecondaryHeader);
            context.textAlign = "center";
            context.fillText(configSecondaryHeader.value, configSecondaryHeader.x, configSecondaryHeader.y);

            //Action Name Line 1
            context.fillStyle = configFirstBody.color;//"#3F3F41"
            context.font = makeFont(configFirstBody);
            context.textAlign = "center";
            context.fillText(configFirstBody.value, configFirstBody.x, configFirstBody.y);
            // context.fillText(configFirstBody.value, 1100, 600);

            //Action Name Line 2
            context.fillStyle = configSecondBody.color;//"#3F3F41"
            context.font = makeFont(configSecondBody);
            context.textAlign = "center";
            context.fillText(configSecondBody.value, configSecondBody.x, configSecondBody.y);
            // context.fillText(configSecondBody.value, 1100, 680);

            //User Name 1
            context.fillStyle = configName.color;//"#3F3F41"
            context.font = makeFont(configName);
            context.textAlign = "center";
            context.fillText(configName.value, configName.x, configName.y);
            // context.fillText(configName.value, 1100, 890);

            //Reason Line 1
            context.fillStyle = configThirdBody.color;//"#3F3F41"
            context.font = makeFont(configThirdBody);
            context.textAlign = "center";
            context.fillText(configThirdBody.value, configThirdBody.x, configThirdBody.y);
            // context.fillText(configThirdBody.value, 1100, 1000);


            //Reason Line 2
            context.fillStyle = configForthBody.color;//"#3F3F41"
            context.font = makeFont(configForthBody);
            context.textAlign = "center";
            context.fillText(configForthBody.value, configForthBody.x, configForthBody.y);
            // context.fillText(configForthBody.value, 1100, 1070);

            //Date Line 1
            context.fillStyle = configDate.color;//"#3F3F41"
            context.font = makeFont(configDate);
            context.textAlign = "center";
            context.fillText(configDate.value, configDate.x, configDate.y);
            // context.fillText(configDate.value, 600, 1300);

            //Date Line 2
            context.fillStyle = "#3F3F41"
            context.font = "bold 350% DancingScript";
            context.textAlign = "center";
            // context.fillText(configSecondaryHeader.value,configSecondaryHeader.x,configSecondaryHeader.y);
            context.fillText("Date of certification.", 600, 1360);

            //Date Line 1
            context.fillStyle = configCertificate.color;//"#3F3F41"
            context.font = makeFont(configCertificate);
            context.textAlign = "center";
            context.fillText(configCertificate.value, configCertificate.x, configCertificate.y);
            // context.fillText(configCertificate.value, 1600, 1300);

            //Date Line 2
            context.fillStyle = "#3F3F41"
            context.font = "bold 350% DancingScript";
            context.textAlign = "center";
            // context.fillText(configSecondaryHeader.value,configSecondaryHeader.x,configSecondaryHeader.y);
            context.fillText("Certificate No.", 1600, 1360);

            setContext(context);
        }
    }
    useEffect(() => {
        drawCanvas({ ...props.config })
    }, [props])
    const onDownload = () => {
        var link = document.createElement('a');
        link.setAttribute('download', 'Certificate.png');
        link.setAttribute('href', canvasRef.current.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        link.click();
    }
    return (
        <div>
            <div style={{ 'width': '800px', height: '600px' }}>
                <canvas ref={canvasRef} {...props} width={2200} height={1700} style={{ 'width': '800px', height: '600px', 'border': '1px solid black' }} />
            </div>
            <br/>
            <Button fullWidth  primary onClick={onDownload} >Download</Button>
        </div>
    )
}
