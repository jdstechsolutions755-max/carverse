import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md fixed w-full z-50">
      <Link href="/"><h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Global Cars</h1></Link>
      <div className="flex gap-6">
        <Link href="/compare">Compare</Link>
      </div>
    </nav>
  )
    }
