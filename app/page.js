import BrandGrid from "@/components/BrandGrid"
import ThreeCarGLB from "@/components/ThreeCarGLB"

export default function Home() {
  return (
    <main className="text-white">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Global Cars Platform
        </h1>
        <p className="text-gray-400 mt-3">3D models, comparisons & worldwide car data</p>
      </section>

      <ThreeCarGLB modelPath="/models/tesla_model_3.glb" />

      <BrandGrid />
    </main>
  )
    }
