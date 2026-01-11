import Navbar from "@/components/Navbar"
import "../styles/globals.css"

export const metadata = {
  title: "Global Cars Platform",
  description: "3D interactive cars, specs, comparisons, and programmatic SEO pages.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  )
}
