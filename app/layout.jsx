import Navbar from "@/components/navbar"
import './globals.css'

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <nav><Navbar></Navbar></nav>
        <main>
          {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout