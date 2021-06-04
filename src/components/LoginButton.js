import React, { useContext, useEffect } from 'react'
import firebase from 'firebase'
import { UserAuthContext } from '../App'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDYqLCeQxqDTBLcaS9ARvHXKrt6hfOGDgQ',
    authDomain: 'affirm-na.firebaseapp.com',
    projectId: 'affirm-na',
    storageBucket: 'affirm-na.appspot.com',
    messagingSenderId: '459804877461',
    appId: '1:459804877461:web:dbf7b927afe9d1ff6ab19c',
  })
}

function LoginButton() {
  const { user, setUser } = useContext(UserAuthContext)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])
  const clickHandler = () => {
    if (user) {
      setUser(null)
      localStorage.removeItem('user')
    } else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user)
          localStorage.setItem('user', JSON.stringify(res.user))
        })
        .catch((err) => alert(err))
      }
    }
    const style = user
      ? {
          backgroundImage: `url("${user.photoURL}")`,
          backgroundSize: 'cover',
          width: 60,
          height: 60
        }
      : {}
  return (
    <button
      style={style}
      className="login-button"
      onClick={() => clickHandler()}
    >
      {user ? '' : '#'}
    </button>
  )
}

export default LoginButton
