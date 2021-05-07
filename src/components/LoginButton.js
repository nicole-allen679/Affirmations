import React, { useContext } from 'react'
import firebase from 'firebase'
import { UserAuthContext } from '../App'

firebase.initializeApp({
  apiKey: 'AIzaSyDYqLCeQxqDTBLcaS9ARvHXKrt6hfOGDgQ',
  authDomain: 'affirm-na.firebaseapp.com',
  projectId: 'affirm-na',
  storageBucket: 'affirm-na.appspot.com',
  messagingSenderId: '459804877461',
  appId: '1:459804877461:web:dbf7b927afe9d1ff6ab19c',
})

function LoginButton() {
  const { user, setUser } = useContext(UserAuthContext)
  // const [user, setUser] = useState(null)
  const clickHandler = () => {
    if (user) {
      setUser(null)
    } else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => setUser(res.user))
        .catch((err) => alert(err))
    }
  }
  return <button onClick={() => clickHandler()}><img className="login" src="../../icon.png" alt="" /> </button>
}

export default LoginButton
