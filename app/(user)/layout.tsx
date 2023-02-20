import '../../styles/globals.css'
import Navbar from '../../components/Navbar'
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
        <div className='bg-primary text-white snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80z-0 z-0'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
