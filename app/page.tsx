import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Scissors, Sparkles, RefreshCw, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LukusKnivesLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-slate-800" />
            <h1 className="text-2xl font-bold text-slate-800">LouCrash'd Knives</h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>Thun, Switzerland</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 text-slate-700 border-slate-300">
            Premium Knife Services in Thun
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Master Knife
            <span className="text-slate-600 block">Restoration & Sharpening</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specialized in Damascus and high-end knife restoration, professional cleaning, and extreme precision
            sharpening. Bringing your blades back to perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3" asChild>
              <Link href="mailto:info@codechefs.ch">
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3" asChild>
              <Link href="#gallery">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Expert Knife Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Three decades of experience in precision blade care and restoration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <RefreshCw className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Restoration</CardTitle>
                <CardDescription>Complete blade restoration for damaged or worn knives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Damascus pattern restoration</li>
                  <li>• Handle repair & replacement</li>
                  <li>• Rust & corrosion removal</li>
                  <li>• Edge geometry correction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Deep Cleaning</CardTitle>
                <CardDescription>Professional cleaning for all knife types</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  
                  <li>• Patina preservation</li>
                  <li>• Food-safe sanitization</li>
                  <li>• Protective coating for the handle</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Scissors className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Extreme Sharpening</CardTitle>
                <CardDescription>Precision sharpening to razor-sharp perfection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Diamond sharpening</li>
                  <li>• Custom angle optimization</li>
                  <li>• Mirror polish edges</li>
                  
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knife Gallery */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Premium Blade Specialists</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We work with the finest Damascus steel and high-end kitchen knives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Damascus chef knife with intricate folded steel pattern"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Damascus Chef Knife</h4>
                  <p className="text-sm opacity-90">Folded steel restoration</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Japanese santoku knife with premium steel finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Japanese Santoku</h4>
                  <p className="text-sm opacity-90">Precision sharpening</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="High-end German knife with custom handle"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">German Steel Blade</h4>
                  <p className="text-sm opacity-90">Complete restoration</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Vintage Damascus hunting knife with bone handle"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Vintage Damascus</h4>
                  <p className="text-sm opacity-90">Pattern restoration</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Professional chef knife set with mirror finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Professional Set</h4>
                  <p className="text-sm opacity-90">Mirror polish finish</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Custom forged Damascus blade with unique pattern"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Custom Damascus</h4>
                  <p className="text-sm opacity-90">Unique pattern work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Incredible work on my Damascus chef knife. The pattern restoration was flawless, and the edge is
                  sharper than when I first bought it."
                </p>
                <div className="font-semibold text-slate-900">— Chef Marcus, Bern</div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Professional service and attention to detail. My vintage knife collection has never looked better.
                  Highly recommended!"
                </p>
                <div className="font-semibold text-slate-900">— Andreas K., Interlaken</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-4xl font-bold mb-6">Ready to Restore Your Blades?</h3>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for a professional consultation and quote. Located in the heart of Thun, Switzerland.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-slate-300" />
              <div className="text-left">
                <div className="text-sm text-slate-400">Email us at</div>
                <Link
                  href="mailto:info@codechefs.ch"
                  className="text-xl font-semibold hover:text-slate-300 transition-colors"
                >
                  info@codechefs.ch
                </Link>
              </div>
            </div>

            <Separator orientation="vertical" className="h-12 bg-slate-700 hidden sm:block" />

            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-slate-300" />
              <div className="text-left">
                <div className="text-sm text-slate-400">Located in</div>
                <div className="text-xl font-semibold">Thun, Switzerland</div>
              </div>
            </div>
          </div>

          <Button size="lg" className="mt-8 bg-white text-slate-900 hover:bg-slate-100 px-8 py-3" asChild>
            <Link href="mailto:info@codechefs.ch">
              <Mail className="mr-2 h-5 w-5" />
              Send Inquiry
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold text-white">LükusKnives</span>
          </div>
          <p className="text-sm">Premium knife restoration, cleaning & sharpening services in Thun, Switzerland</p>
          <p className="text-xs text-slate-400 mt-2">© {new Date().getFullYear()} LükusKnives. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
