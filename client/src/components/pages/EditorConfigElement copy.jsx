import React from 'react'
import { EDIT_TEXT } from '../../scripts/constants'
import ImageConfigElement from '../elements/canvas/ImageConfigElement'
import TextConfigElement from '../elements/canvas/TextConfigElement'

export default function EditorConfigElement({ type, id }) {
  
  if (type == EDIT_TEXT)
    return (
      <TextConfigElement label={"Texting"}/>
    )
  else
    return (
      <ImageConfigElement label={"Test Image"} />
    )
}
