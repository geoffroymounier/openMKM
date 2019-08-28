import React , {useState} from 'react'
import {Content,Button,Input,Main} from './styles'
import Generic from '../forms/generic'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


function UserModal(props){
  const onSubmit = (form) => {
    onClose()
  }
  const onClose = () => props.close()
  return(
  <Main>
    <div
      className={`background`}
      onClick={onClose}
    />
    <Content>
      <Generic id={'addUser'} onSubmit={onSubmit}/>
    </Content>

  </Main>
  )
}
export default UserModal;
