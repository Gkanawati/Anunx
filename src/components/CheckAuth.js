import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { CircularProgress, Container } from "@mui/material"

const CheckAuth = ({ Component, pageProps }) => {

  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') {
      return
    }

    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  if (session) {
    return <Component {...pageProps} />
  }

  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress sx={{
        marginX: 'auto',
        maxWidth: '40px'
      }} />
    </Container>
  )
}

export default CheckAuth