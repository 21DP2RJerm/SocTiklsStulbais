import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBfp6zEUa9x6ihtWnrw4W2Cd4dDSe9ZWo0",
  authDomain: "checkmatesoctiklschess.firebaseapp.com",
  projectId: "checkmatesoctiklschess",
  storageBucket: "checkmatesoctiklschess.appspot.com",
  messagingSenderId: "199363688348",
  appId: "1:199363688348:web:e55bf321869081e3c6ba59"
})

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}