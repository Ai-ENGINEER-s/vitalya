import { useState, useEffect } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("TOUS");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 'esthetique',
      category: 'ESTHÉTIQUE',
      title: 'ESTHÉTIQUE DENTAIRE',
      description: 'Retrouvez un sourire éclatant avec nos soins esthétiques de pointe',
      price: '1500 DH',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Blanchiment dentaire', 'Facettes céramique', 'Composite esthétique', 'Sourire design'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'prothese',
      category: 'PROTHÈSE',
      title: 'PROTHÈSE - FACETTES',
      description: 'Solutions prothétiques sur mesure pour restaurer votre sourire',
      price: '2800 DH',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Couronnes céramique', 'Bridges dentaires', 'Facettes porcelaine', 'Prothèses amovibles'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'parodontologie',
      category: 'PARODONTOLOGIE',
      title: 'PARODONTOLOGIE',
      description: 'Traitement spécialisé des gencives et des structures de soutien',
      price: '900 DH',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Détartrage profond', 'Surfaçage radiculaire', 'Chirurgie parodontale', 'Maintenance parodontale'],
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'chirurgie',
      category: 'CHIRURGIE',
      title: 'CHIRURGIE - IMPLANTS',
      description: 'Chirurgie orale avancée et pose d\'implants dentaires',
      price: '3500 DH',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Implants dentaires', 'Extractions complexes', 'Greffe osseuse', 'Chirurgie guidée'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'orthodontie',
      category: 'ORTHODONTIE',
      title: 'ORTHODONTIE - INVISALIGN',
      description: 'Alignement dentaire avec les technologies les plus avancées',
      price: '4200 DH',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Invisalign', 'Brackets céramiques', 'Orthodontie linguale', 'Contention'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'pedodontie',
      category: 'PÉDODONTIE',
      title: 'PÉDODONTIE',
      description: 'Soins dentaires spécialisés pour enfants dans un environnement bienveillant',
      price: '600 DH',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Soins préventifs', 'Fluoration', 'Scellement de sillons', 'Éducation bucco-dentaire'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const tabs = ["TOUS", "ESTHÉTIQUE", "PROTHÈSE", "PARODONTOLOGIE", "CHIRURGIE", "ORTHODONTIE", "PÉDODONTIE"];

  const filteredServices = activeTab === "TOUS" 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 overflow-hidden" id="services">
      {/* Dynamic Background with Mouse Tracking */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 10}px`,
            top: `${mousePosition.y / 10}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
            transform: 'translate(-50%, -50%)',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: 'translate(-50%, -50%)',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full animate-pulse" style={{
          backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-teal-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header with Glassmorphism */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 mb-8">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                CLINIQUE DENTAIRE
              </span>
              <br />
              <span className="text-white text-4xl md:text-6xl">VITALYA</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Excellence et innovation au service de votre sourire à <span className="text-emerald-400 font-semibold">Casablanca</span>
            </p>
          </div>
        </div>

        {/* Premium Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 backdrop-blur-lg border ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/50 border-emerald-400/50' 
                  : 'bg-black/30 text-gray-300 border-emerald-500/30 hover:bg-emerald-500/20 hover:text-white hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/25'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid with Advanced Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-700 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-emerald-500/25"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-sm"></div>
              
              {/* Image Section with Overlay Effects */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Category Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold text-sm backdrop-blur-sm border border-white/20`}>
                  {service.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 space-y-6">
                {/* Title with Gradient Effect */}
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Premium Price Display */}
                <div className={`relative p-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-bold text-2xl text-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                  <div className="relative">
                    À partir de {service.price}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      style={{
                        animationDelay: `${featureIndex * 0.1}s`
                      }}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg animate-pulse`}></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Button */}
                <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg hover:scale-105`}>
                  Prendre Rendez-vous
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-2xl rounded-3xl p-12 border border-emerald-500/30 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.3), transparent)`,
                animation: 'spin 20s linear infinite'
              }}></div>
            </div>

            <div className="relative text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformez votre <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">sourire</span>
              </h3>
              <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Découvrez l'excellence dentaire à Casablanca avec des technologies de pointe et une équipe passionnée
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    📞 Contactez-nous
                  </span>
                </button>
                
                <button className="group px-8 py-4 bg-black/50 text-white font-bold rounded-2xl border border-emerald-500/50 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    📍 Nous trouver
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Services;