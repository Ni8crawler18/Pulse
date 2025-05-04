import Link from "next/link"
import { ArrowRight, Leaf, BarChart3, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Pulse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#standards" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Standards
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Turn your climate action into verified carbon credits
                </h1>
                <p className="text-xl text-gray-600">
                  Register projects, log carbon reduction activities, and mint carbon credit tokens on the IOTA network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[50px] w-full rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/carbon_offsets.png?height=300&width=400"
                      alt="Carbon offset visualization"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Streamlined Carbon Credit Management</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our platform simplifies the process of creating, verifying, and trading carbon credits.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Project Registration</h3>
                <p className="mt-2 text-gray-600">
                  Register carbon offset projects with detailed metadata and verification standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Activity Logging</h3>
                <p className="mt-2 text-gray-600">
                  Track and log carbon reduction activities with precise measurements and documentation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                  <Coins className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Token Minting</h3>
                <p className="mt-2 text-gray-600">
                  Mint carbon credit tokens on the IOTA network for transparent and secure trading.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Pulse Works</h2>
              <p className="mt-4 text-lg text-gray-600">
                A simple three-step process to transform your environmental impact into verified carbon credits.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Register Your Project</h3>
                  <p className="mt-2 text-gray-600">
                    Create a detailed profile of your carbon offset project including location, type, and expected
                    impact.
                  </p>
                </div>
                <div className="absolute top-6 left-6 h-0.5 w-full bg-emerald-100 hidden md:block"></div>
              </div>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Log Carbon Reduction</h3>
                  <p className="mt-2 text-gray-600">
                    Record your carbon reduction activities over time with dates, amounts, and descriptions.
                  </p>
                </div>
                <div className="absolute top-6 left-6 h-0.5 w-full bg-emerald-100 hidden md:block"></div>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Mint Carbon Credits</h3>
                  <p className="mt-2 text-gray-600">
                    Convert verified carbon reductions into tradable tokens on the IOTA network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section id="standards" className="bg-gray-50 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Compliance with Global Standards</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our platform adheres to internationally recognized carbon credit standards.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-4">
                  <img
                    src="/gold_standard.png?height=120&width=120"
                    alt="Gold Standard logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Gold Standard</h3>
                <p className="mt-2 text-gray-600">
                  Certified projects that deliver measurable climate benefits and sustainable development.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-4">
                  <img
                    src="/iota_tax.png?height=64&width=128"
                    alt="IOTA Tax logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">IOTA Network</h3>
                <p className="mt-2 text-gray-600">
                  Transparent and secure carbon credit transactions on the IOTA network.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-4">
                  <img
                    src="/greenly.png?height=64&width=64"
                    alt="Greenly logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Greenly</h3>
                <p className="mt-2 text-gray-600">
                  Industry-leading methodology for carbon footprint calculation and reduction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to make an impact?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Join Pulse today and start turning your environmental initiatives into verified carbon credits.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold">Pulse</span>
            </div>
            <nav className="flex flex-wrap items-center gap-6">
              <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="#standards" className="text-sm text-gray-600 hover:text-gray-900">
                Standards
              </Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
            </nav>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} Pulse. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
