import React from 'react'
import { EDIT_TEXT } from '../../scripts/constants'
import ImageConfigElement from '../elements/canvas/ImageConfigElement'
import TextConfigElement from '../elements/canvas/TextConfigElement'

export default function EditorConfigElement({  updateElement,item }) {
  if (item.type === EDIT_TEXT)
    return (
      <TextConfigElement updateElement={updateElement} item={item} />
    )
  else
    return (
      <ImageConfigElement updateElement={updateElement} item={item} />
    )
}
