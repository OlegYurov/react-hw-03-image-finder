import React from 'react'
import { Oval } from 'react-loader-spinner'
import css from './Loader.module.css'

function Loader() {
  return (
    <div className = {css.loader}>
      <h1>Загружаем</h1>
      <Oval className = {css.oval}
        color='#3f51b5'
        secondaryColor="#3f51b5" />
    </div> 
  )
}

export default Loader