import { Card } from '@shopify/polaris';
import React, { useRef, useEffect, useState, Suspense } from 'react'
import PageLoading from '../supplementary/PageLoading';
import Skeleton from '../supplementary/Skeleton';
const makeFont = (config) => {
    var font = "";
    const { bold, italic } = config.textStyle;
    if (bold) font += "bold "
    if (italic) font += "italic "
    font += config.size + "% " + config?.fontFamily;
    return font;
}
export default function Canvas(props) {

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null)
    const [loading, setLoading] = useState(true);
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

        image.src = "/certified/img/certificates/blank/Certificate" + configTheme + ".png";
        image.onload = function () {
            if (!context) return;
            context.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height)
            //College Name Line 1
            context.fillStyle = configPrimaryHeader.color;
            context.font = makeFont(configPrimaryHeader)
            context.textAlign = configPrimaryHeader.textAlign;
            context.fillText(configPrimaryHeader.value, configPrimaryHeader.x, configPrimaryHeader.y);

            //College Name Line 2
            context.fillStyle = configSecondaryHeader.color;
            context.font = makeFont(configSecondaryHeader);
            context.textAlign = configSecondaryHeader.textAlign;
            context.fillText(configSecondaryHeader.value, configSecondaryHeader.x, configSecondaryHeader.y);

            //Action Name Line 1
            context.fillStyle = configFirstBody.color;
            context.font = makeFont(configFirstBody);
            context.textAlign = configFirstBody.textAlign;
            context.fillText(configFirstBody.value, configFirstBody.x, configFirstBody.y);

            //Action Name Line 2
            context.fillStyle = configSecondBody.color;
            context.font = makeFont(configSecondBody);
            context.textAlign = configSecondBody.textAlign;
            context.fillText(configSecondBody.value, configSecondBody.x, configSecondBody.y);

            //User Name 1
            context.fillStyle = configName.color;
            context.font = makeFont(configName);
            context.textAlign = configName.textAlign;
            context.fillText(configName.value, configName.x, configName.y);

            //Reason Line 1
            context.fillStyle = configThirdBody.color;
            context.font = makeFont(configThirdBody);
            context.textAlign = configThirdBody.textAlign;
            context.fillText(configThirdBody.value, configThirdBody.x, configThirdBody.y);


            //Reason Line 2
            context.fillStyle = configForthBody.color;
            context.font = makeFont(configForthBody);
            context.textAlign = configForthBody.textAlign;
            context.fillText(configForthBody.value, configForthBody.x, configForthBody.y);

            //Date Line 1
            context.fillStyle = configDate.color;
            context.font = makeFont(configDate);
            context.textAlign = configDate.textAlign;
            context.fillText(configDate.value, configDate.x, configDate.y);

            //Date Line 2
            context.fillStyle = "#3F3F41"
            context.font = "bold 350% DancingScript";
            context.textAlign = "center";
            context.fillText("Date of certification.", 600, 1360);

            //Date Line 1
            context.fillStyle = configCertificate.color;
            context.font = makeFont(configCertificate);
            context.textAlign = configCertificate.textAlign;
            context.fillText(configCertificate.value, configCertificate.x, configCertificate.y);

            //Date Line 2
            context.fillStyle = "#3F3F41"
            context.font = "bold 350% DancingScript";
            context.textAlign = "center";
            context.fillText("Certificate No.", 1600, 1360);

            setContext(context);
        }
    }
    useEffect(() => {
        drawCanvas({ ...props.config })
    }, [props])
    useEffect(() => {
        setLoading(false);
    }, [])
    const onDownload = () => {
        setLoading(true);
        var link = document.createElement('a');
        link.setAttribute('download', 'Certificate.png');
        link.setAttribute('href', canvasRef.current.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        setTimeout(() => {
            link.click();
            setLoading(false);
        }, 1500)
    }
    return (
        <Suspense fallback={<Skeleton/>}>
            <Card sectioned>
                {
                    loading && <PageLoading label={"Downloading..."} />
                }
                <div style={{ 'boxSizing': 'border-box', 'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                    <div>
                        <canvas ref={canvasRef} onClick={onDownload}  {...props} width={2200} height={1700} style={{ 'height': '600px', 'border': '1px solid black' }} />
                    </div>
                </div>
            </Card>
        </Suspense>
    )
}
