import React, { useState, useEffect } from 'react'
import { Button, Card, Icon, Label, Modal, Scrollable, Select, TextField } from '@shopify/polaris'
import { CircleCancelMajor } from '@shopify/polaris-icons';
import EditorConfigElement from './EditorConfigElement.jsx'
import { EDIT_TEXT } from '../../scripts/constants.js';
const types = [{ value: 'image', label: 'Image' }, { value: 'text', label: "Text" }];
function DummyConfig({ config, setConfig, setIsNewVisible ,size}) {
  const [id, setId] = useState('');
  const [type, setType] = useState('text');
  const [error, setError] = useState('');
  const onAdd = () => {
    const item = config.find(item => item.id === id);
    if (item) {
      setError("Provided ID is not available!");
      return;
    }
    if (id && type && !error) {
      let obj = {};
      if (type == EDIT_TEXT)
        obj = {
          "value": "Primary Header",
          "size": "800",
          "x": size.width/2,
          "y": size.height/2,
          "fontFamily": "BlackSwan",
          "textAlign": "center",
          "color": "#006A60",
          "textStyle": {
            "bold": false,
            "underline": false,
            "italic": false,
            "strike": false
          }
        }
      else
        obj = {
          image: "",
          width: 500,
          height: 500,
          x: 500,
          y: 500,
        }
      setConfig(old => [...old, { id, type, ...obj }]);
      setIsNewVisible(false);
    }
    else
      setError("Enter Valid ID!")
  }
  useEffect(() => {
    const item = config.find(item => item.id === id);
    if (item) {
      setError("Provided ID is not available!");
    }
    else
      setError('');
  }, [id])
  return (
    <Card sectioned title='Provide a Unique ID' primaryFooterAction={{ content: 'Add', onAction: onAdd }}>
      <Select options={types} value={type} onChange={setType} />
      <br />
      <TextField error={error} label="ID" placeholder='Enter Unique ID' suffix={id && <div onClick={() => setId('')}><Icon source={CircleCancelMajor} /></div>} value={id} onChange={setId} />
    </Card>
  )
}
export default function EditorConfig({ config, setConfig ,size}) {
  const [isNewVisible, setIsNewVisible] = useState(true);
  const updateElement = ({ configId, updatedConfig }) => {
    const newConfig = config.map((item) => {
      if (item.id === configId)
        return ({ id: configId, ...updatedConfig });
      else
        return item
    })
    setConfig(newConfig);
  }
  return (
    <div style={{ 'height': '100%','maxHeight':'85vh','overflow':'auto' }}>
      <Card sectioned title='Items' primaryFooterAction={{ 'content': isNewVisible ? "Cancel" : 'Add', 'onAction': () => setIsNewVisible(value => !value) }}>
        <Scrollable horizontal={false} style={{ 'maxHeight': '100%' }}>
          {config.map((item, idx) => <EditorConfigElement key={idx} item={item} updateElement={updateElement} />)}
          {
            isNewVisible && <DummyConfig size={size} config={config} setConfig={setConfig} setIsNewVisible={setIsNewVisible} />
          }
        </Scrollable>
      </Card>
    </div>
  )
}
