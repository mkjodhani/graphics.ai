import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { drawImage, drawText } from '../../scripts/canvasActions';
import { EDIT_IMAGE, EDIT_TEXT } from '../../scripts/constants';
const renderCanvas = ({ config, context }) => {
  for (let idx in config) {
    switch (config[idx].type) {
      case EDIT_TEXT:
        drawText({ context, config: config[idx] });
        break;
      case EDIT_IMAGE:
        drawImage({ context, config: config[idx] });
        break;
    }
  }
  requestAnimationFrame(renderCanvas)
}
export default function PhotoViwer({ image, config, size }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const drawCanvas = ({ image, config }) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (image) {
      const imageElement = new Image();
      imageElement.src = image;
      imageElement.onload = function () {
        context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
        renderCanvas({ config, context })
      }
    }
    else {
      renderCanvas({ config, context })
    }
  }
  useEffect(() => {
    drawCanvas({ image, config })
  }, [image, config])
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
    }, 1000)
  }
  return (
    <div style={{ 'width': '100%', 'height': '100%', 'boxShadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset','alignSelf':'center','display':'flex',justifyContent :'center'}}>
      <canvas ref={canvasRef} onClick={onDownload} width={size.width} height={size.height} style={{ 'width': '100%', 'height': '100%'}} />
    </div>
  )
}
