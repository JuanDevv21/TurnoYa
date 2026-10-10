import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
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
          <Footer></Footer>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout