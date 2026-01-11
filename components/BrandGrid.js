import brands from "@/data/brands.json"
import Link from "next/link"

export default function BrandGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
      {brands.map((b) => (
        <Link key={b.slug} href={`/brand/${b.slug}`}>
          <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition shadow-lg text-center">
            <h3 className="text-lg font-semibold">{b.name}</h3>
          </div>
        </Link>
      ))}
    </section>
  )
  }
