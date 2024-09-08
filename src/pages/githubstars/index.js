import React from 'react'

const index = () => {
    React.useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_API_KEY)
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN)
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_PROJECT_ID)
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_APP_ID)
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID)
        console.log(process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)
      }, [])
  return (
    <div>
      
    </div>
  )
}

export default index
