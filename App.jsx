import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Wrench, Zap, Settings, Car, Clock, CheckCircle } from 'lucide-react'
import './App.css'

// Import images
import logoImage from './assets/tufegdzic_logo.png'
import heroImage from './assets/auto_service_general.png'
import electricsImage from './assets/auto_electrics.png'
import diagnosticsImage from './assets/auto_diagnostics.png'
import serviceImage from './assets/vehicle_service.png'
import repairImage from './assets/engine_repair.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      title: 'Auto elektrika',
      description: 'Dijagnostika i popravka svih električnih sistema u vozilu, uključujući alternatore, anlasere, svetlosnu signalizaciju, instalacije i elektronske komponente.',
      icon: <Zap className="w-8 h-8" />,
      image: electricsImage,
      features: ['Alternatori i anlaseri', 'Svetlosna signalizacija', 'Centralno zaključavanje', 'Elektronske komponente']
    },
    {
      title: 'Auto dijagnostika',
      description: 'Precizna kompjuterska dijagnostika za sve marke i modele vozila. Koristimo napredne dijagnostičke alate za brzo i tačno lociranje problema.',
      icon: <Settings className="w-8 h-8" />,
      image: diagnosticsImage,
      features: ['Kompjuterska dijagnostika', 'ABS i ESP sistemi', 'Dijagnostika motora', 'Detaljan izveštaj']
    },
    {
      title: 'Servis vozila',
      description: 'Kompletan mali i veliki servis, zamena ulja i filtera, provera kočionog sistema, vešanja, upravljačkog sistema i izduvnog sistema.',
      icon: <Car className="w-8 h-8" />,
      image: serviceImage,
      features: ['Mali i veliki servis', 'Zamena ulja i filtera', 'Kočioni sistem', 'Priprema za tehnički']
    },
    {
      title: 'Popravka motora',
      description: 'Generalne popravke motora, zamena delova motora, popravka sistema za hlađenje, sistema za dovod goriva i izduvnog sistema.',
      icon: <Wrench className="w-8 h-8" />,
      image: repairImage,
      features: ['Generalne popravke', 'Sistem za hlađenje', 'Dovod goriva', 'Izduvni sistem']
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Auto servis Tufegdžić" className="h-10 w-auto" />
              <div>
                <h1 className="text-lg font-bold text-primary">Auto servis Tufegdžić</h1>
                <p className="text-xs text-muted-foreground">Valjevo</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Početna' },
                { id: 'services', label: 'Usluge' },
                { id: 'about', label: 'O nama' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">061/653-63-25</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Clock className="w-3 h-3 mr-1" />
                Dostupni 24/7
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Vaš pouzdani partner za
                <span className="text-orange-500"> auto servis</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sa dugogodišnjim iskustvom i timom stručnih majstora, garantujemo vrhunsku uslugu 
                i brzu dijagnostiku i popravku. Nalazimo se u Valjevu na adresi Braće Mijuškovića 5.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
                  <Phone className="w-4 h-4 mr-2" />
                  Pozovite nas
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  <Settings className="w-4 h-4 mr-2" />
                  Naše usluge
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Sertifikovani majstori</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Moderna oprema</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Auto servis Tufegdžić - Moderni servis" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">15+ godina iskustva</p>
                    <p className="text-xs text-muted-foreground">u auto industriji</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Naše usluge</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Kompletne usluge za vaše vozilo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nudimo širok spektar usluga prilagođenih svim tipovima vozila, 
              od auto elektrike do kompletnog servisa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">O nama</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Porodična tradicija u službi vaših vozila
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Auto servis Tufegdžić je porodična firma sa dugom tradicijom u Valjevu. 
                  Posvećeni smo pružanju najkvalitetnijih usluga i izgradnji dugoročnih odnosa sa našim klijentima.
                </p>
                <p className="text-lg leading-relaxed">
                  Naš tim čine iskusni i sertifikovani majstori koji redovno prolaze obuke i prate 
                  najnovije tehnologije u auto industriji. Ponosni smo na našu reputaciju pouzdanosti, 
                  stručnosti i posvećenosti svakom klijentu.
                </p>
                <p className="text-lg leading-relaxed">
                  Naša misija je da obezbedimo sigurno i pouzdano vozilo za svakog klijenta, 
                  uz transparentne cene i efikasnu uslugu. Verujemo u poštenje i integritet u svakom aspektu našeg poslovanja.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Godina iskustva</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Zadovoljnih klijenata</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Dostupnost</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Zašto izabrati nas?</h3>
                <div className="space-y-4">
                  {[
                    'Sertifikovani i iskusni majstori',
                    'Najsavremenija dijagnostička oprema',
                    'Transparentne cene bez skrivenih troškova',
                    'Brza i efikasna usluga',
                    'Garancija na sve izvršene radove',
                    'Dostupnost 24/7 za hitne slučajeve'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Kontakt</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Kontaktirajte nas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Za sve informacije, zakazivanje servisa ili hitne intervencije, 
              slobodno nas kontaktirajte. Naš tim je dostupan da odgovori na sva vaša pitanja.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Adresa</h3>
                    <p className="text-muted-foreground">
                      Braće Mijuškovića 5<br />
                      Valjevo, Srbija
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefoni</h3>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">+381 61 653 63 25</p>
                      <p className="text-muted-foreground">+381 60 319 44 05</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">tufanemanja1@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Radno vreme</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Ponedeljak - Petak: 08:00 - 18:00</p>
                      <p>Subota: 08:00 - 14:00</p>
                      <p>Nedelja: Zatvoreno</p>
                      <p className="text-primary font-medium">Hitne intervencije: 24/7</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Pošaljite nam poruku</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ime</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Vaš telefon"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Vaš email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Poruka</label>
                  <textarea 
                    rows="4" 
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Opišite problem ili postavite pitanje..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Pošaljite poruku
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Auto servis Tufegdžić" className="h-8 w-auto brightness-0 invert" />
                <div>
                  <h3 className="font-bold">Auto servis Tufegdžić</h3>
                  <p className="text-sm opacity-80">Valjevo</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Vaš pouzdani partner za sve potrebe vašeg vozila. 
                Sa dugogodišnjim iskustvom i stručnim timom, garantujemo kvalitet i pouzdanost.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt informacije</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Braće Mijuškovića 5, Valjevo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>061/653-63-25</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>060/319-44-05</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>tufanemanja1@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Naše usluge</h4>
              <div className="space-y-2 text-sm">
                <p>• Auto elektrika</p>
                <p>• Auto dijagnostika</p>
                <p>• Servis vozila</p>
                <p>• Popravka motora</p>
                <p>• Hitne intervencije 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2024 Auto servis Tufegdžić. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
