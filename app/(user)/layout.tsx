import '../../styles/globals.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='bg-primary text-white snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray/20 scrollbar-thumb-secondary/80'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
