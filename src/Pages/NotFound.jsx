import React, { useEffect } from 'react'

const NotFound = () => {

  useEffect((() => {
    document.title = 'Страница не найдена | StoreForge';
  }), [])

  return (
    <div>
      Страница не найдена! 
    </div>
  )
}

export default NotFound
