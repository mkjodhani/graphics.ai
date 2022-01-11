import React, { useRef, useEffect, useState } from 'react'

export default function Canvas(props) {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null)
    const image = new Image();
    const drawCanvas = ({ theme, firstTitle, secondTitle, first_desc, second_desc, action3, name, third_desc, forth_desc, date, certificateNumber }) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        image.src = "img/certificates/blank/Certificate"+theme+".png";
        image.onload = function () {
            if(!context) return;
            context.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height)
            //College Name Line 1
            context.fillStyle = "#3F3F41"
            context.font = "1000% BlackSwan";
            context.textAlign = "center";
            context.fillText(firstTitle, 1100, 350);

            //College Name Line 2
            context.fillStyle = "#3F3F41"
            context.font = "750% BlackSwan";
            context.textAlign = "center";
            context.fillText(secondTitle, 1100, 500);

            //Action Name Line 1
            context.fillStyle = "#3F3F41"
            context.font = "350% DancingScript";
            context.textAlign = "center";
            context.fillText(first_desc, 1100, 600);

            //Action Name Line 2
            context.fillStyle = "#3F3F41"
            context.font = "350% DancingScript";
            context.textAlign = "center";
            context.fillText(second_desc, 1100, 680);

            //User Name 1
            context.fillStyle = "#3F3F41"
            context.font = "bold 700% DancingScript";
            context.textAlign = "center";
            context.fillText(name, 1100, 890);

            //Reason Line 1
            context.fillStyle = "#3F3F41"
            context.font = "350% DancingScript";
            context.textAlign = "center";
            context.fillText(third_desc, 1100, 1000);


            //Reason Line 2
            context.fillStyle = "#3F3F41"
            context.font = "350% DancingScript";
            context.textAlign = "center";
            context.fillText(forth_desc, 1100, 1070);

            //Date Line 1
            context.fillStyle = "#3F3F41"
            context.font = "240% DancingScript";
            context.textAlign = "center";
            context.fillText(date, 600, 1300);

            //Date Line 2
            context.fillStyle = "#3F3F41"
            context.font = "bold 350% DancingScript";
            context.textAlign = "center";
            context.fillText("Date of certification.", 600, 1360);

            //Date Line 1
            context.fillStyle = "#3F3F41"
            context.font = "240% DancingScript";
            context.textAlign = "center";
            context.fillText(certificateNumber, 1600, 1300);

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
    return (
        <div style={{ 'width': '800px', height: '600px' }}>
            <canvas ref={canvasRef} {...props} width={2200} height={1700} style={{ 'width': '800px', height: '600px', 'border': '1px solid black' }} />
        </div>
    )
}
