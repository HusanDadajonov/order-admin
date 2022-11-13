
import SidebarLayout from '../src/Layouts/sideBarLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

      <SidebarLayout>
        <Component  {...pageProps} />
      </SidebarLayout>
   
  )
}

export default MyApp
