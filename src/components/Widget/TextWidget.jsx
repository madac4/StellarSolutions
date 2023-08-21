import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      {/* <img src={logoSrc} alt={logoAlt} /> */}
      <h4 className="cs-header_logo"><span>S</span>tellar <span>S</span>olutions</h4>
      <p>{text}</p>
    </Div>
  )
}