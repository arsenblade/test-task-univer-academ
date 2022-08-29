import axios from 'axios'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { SERVER_PATH } from '../../constants/serverPath'
import Button from '../../ui/Button/Button'
import { MyToast } from '../../ui/MyToast/MyToast'
import styles from './Modal.module.scss'
import cn from 'classnames'

interface IModal {
  setIsVisibleModal: Dispatch<SetStateAction<boolean>>,
}

const Modal:FC<IModal> = ({setIsVisibleModal}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 

  const closeModal = () => {
    setIsVisibleModal(false)
    setEmail('')
    setName('')
  }

  const handleSubmit = async () => {
    try {
      await axios.post(SERVER_PATH, {
        name,
        email
      })
      MyToast('Отправка прошла успешно', true)
      closeModal()
    } catch (e) {
      MyToast('Произошла ошибка', false)
    }
  }

  return (
    <div className={styles.modalContainer} onClick={() => closeModal()}>
      <form 
      className={styles.modal}
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
      onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.header}>Заявка на участие</h2>
        <input type='text' value={name}  onChange={(e) => setName(e.target.value)} placeholder='ФИО'/>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'/>
        <Button>Отправить</Button>
      </form>
    </div>
  )
}

export default Modal