import React, { useState } from 'react'
import Button from '../../ui/Button/Button'
import Modal from '../modals/Modal'
import styles from './Index.module.scss'

const Index = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  return (
    <div className={styles.index}>
      <div>
        <h1 className={styles.header}>Мастер-классы от Create Studio</h1>
        <Button className={styles.btn} onClick={() => setIsVisibleModal(true)}>Записаться</Button>
      </div>
      <img className={styles.img} src='/office.png' alt='Картинка офиса.' width={525} height={360}/>
      {isVisibleModal &&  <Modal setIsVisibleModal={setIsVisibleModal}/>}
    </div>
  )
}

export default Index