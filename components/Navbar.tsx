"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Menu, X, Clock, ChevronDown, Activity, ChevronLeft, ChevronRight, Star, Shield, Award, Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('accueil');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const images = [
    { 
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80', 
      title: 'Cabinet Dentaire Futuriste', 
      description: 'Intelligence artificielle & robotique dentaire' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 
      title: 'Suites VIP Premium', 
      description: 'Expérience luxueuse incomparable' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 
      title: 'Technologie Quantum', 
      description: 'Révolution en soins dentaires' 
    }
  ];

  const navItems = [
    { id: 'accueil', label: 'Accueil', href: '#hero' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'esthetique', label: 'Esthétique', href: '#esthetique' },
    { id: 'implants', label: 'Implants', href: '#implants' },
    { id: 'orthodontie', label: 'Orthodontie', href: '#orthodontie' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleMouseMove = (e:any) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavClick = (itemId:string, href:string) => {
    setActiveNav(itemId);
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Orbs Background - Optimized for mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" 
             style={{ 
               left: mousePos.x / 20 - 100, 
               top: mousePos.y / 20 - 100,
               transform: 'translate(-50%, -50%)'
             }} />
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-bounce" 
             style={{ 
               right: mousePos.x / 30 - 50, 
               bottom: mousePos.y / 30 - 50 
             }} />
      </div>

      {/* Mobile-First Contact Bar */}
      <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-2 sm:py-3 lg:py-4 px-3 sm:px-4 shadow-2xl border-b border-emerald-500/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-emerald-500/5 animate-pulse" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
            {/* Mobile: Only phone */}
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-12">
              <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl shadow-emerald-500/50 group-hover:shadow-emerald-400/70 transition-all duration-500 group-hover:rotate-12">
                  <Phone size={14} className="sm:hidden text-white" />
                  <Phone size={16} className="hidden sm:block lg:hidden text-white" />
                  <Phone size={20} className="hidden lg:block text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-xs lg:text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                    <span className="sm:hidden">URGENCES</span>
                    <span className="hidden sm:block">URGENCES VIP 24H/7J</span>
                  </span>
                  <div className="text-sm sm:text-lg lg:text-xl font-black text-white truncate">06 66 39 72 79</div>
                </div>
              </div>
              
              {/* Tablet and desktop: Email */}
              <div className="hidden md:flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl lg:shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-all duration-500 group-hover:rotate-12">
                  <Mail size={16} className="lg:hidden text-white" />
                  <Mail size={20} className="hidden lg:block text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">CONTACT PREMIUM</span>
                  <div className="text-lg lg:text-xl font-black text-white truncate">contact@vitalya.ma</div>
                </div>
              </div>
            </div>
            
            {/* Right side - location and social */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-ping" />
                <span className="font-bold text-emerald-400 text-xs sm:text-sm lg:text-lg whitespace-nowrap">
                  <span className="sm:hidden">Casa</span>
                  <span className="hidden sm:block lg:hidden">Casablanca</span>
                  <span className="hidden lg:block">Casablanca Premium</span>
                </span>
              </div>
              <div className="flex gap-1 sm:gap-2 lg:gap-3">
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg lg:rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg lg:shadow-xl">
                  <Facebook size={12} className="sm:hidden text-white" />
                  <Facebook size={14} className="hidden sm:block lg:hidden text-white" />
                  <Facebook size={18} className="hidden lg:block text-white" />
                </a>
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg lg:rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-rose-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg lg:shadow-xl">
                  <Instagram size={12} className="sm:hidden text-white" />
                  <Instagram size={14} className="hidden sm:block lg:hidden text-white" />
                  <Instagram size={18} className="hidden lg:block text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-First Navigation */}
      <header className={`relative bg-white/80 backdrop-blur-2xl shadow-2xl sticky top-0 z-50 transition-all duration-500 border-b border-emerald-200/50 ${isScrolled ? 'bg-white/95 shadow-emerald-500/20' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white/30 to-cyan-50/50" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-24">
            
            {/* Mobile-First Logo */}
            <div className="flex items-center">
              <a href="#hero" className="group" onClick={(e) => {
                e.preventDefault();
                handleNavClick('accueil', '#hero');
              }}>
                <div className="relative p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-white to-gray-50 shadow-md sm:shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <img 
                    src="/images/logo-vitalya.png" 
                    alt="Logo Clinique Vitalya"
                    className="h-8 sm:h-10 lg:h-16 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id, item.href);
                  }}
                  className={`relative px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-bold text-sm transition-all duration-500 overflow-hidden group ${
                    activeNav === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-xl lg:shadow-2xl shadow-emerald-500/50 scale-105'
                      : 'text-slate-700 hover:text-emerald-600'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl lg:rounded-2xl ${activeNav === item.id ? 'opacity-0' : ''}`} />
                  <span className="relative z-10">{item.label}</span>
                  {activeNav !== item.id && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile-First CTA & Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="hidden sm:flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-xl lg:rounded-2xl font-bold text-xs sm:text-sm lg:text-sm shadow-xl lg:shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 transform hover:scale-105 lg:hover:scale-110 hover:-translate-y-1 group">
                <Sparkles size={14} className="sm:hidden group-hover:animate-spin" />
                <Sparkles size={16} className="hidden sm:block lg:hidden group-hover:animate-spin" />
                <Sparkles size={20} className="hidden lg:block group-hover:animate-spin" />
                <span className="whitespace-nowrap">
                  <span className="sm:hidden">RDV VIP</span>
                  <span className="hidden sm:block lg:hidden">CONSULT VIP</span>
                  <span className="hidden lg:block">CONSULTATION VIP</span>
                </span>
                <ArrowRight size={12} className="sm:hidden group-hover:translate-x-1 transition-transform" />
                <ArrowRight size={14} className="hidden sm:block lg:hidden group-hover:translate-x-1 transition-transform" />
                <ArrowRight size={16} className="hidden lg:block group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 sm:p-3 rounded-xl lg:rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 hover:from-emerald-100 hover:to-cyan-100 transition-all duration-300 shadow-md sm:shadow-lg"
              >
                {isMenuOpen ? (
                  <X size={20} className="sm:hidden text-slate-700" />
                ) : (
                  <Menu size={20} className="sm:hidden text-slate-700" />
                )}
                {isMenuOpen ? (
                  <X size={24} className="hidden sm:block text-slate-700" />
                ) : (
                  <Menu size={24} className="hidden sm:block text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile-First Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-emerald-200/50 shadow-2xl">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
              <nav className="flex flex-col space-y-1 sm:space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id, item.href);
                    }}
                    className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 ${
                      activeNav === item.id
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg sm:shadow-xl'
                        : 'text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Mobile CTA in menu */}
              <button className="sm:hidden w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-xl">
                <Sparkles size={16} />
                <span>CONSULTATION VIP</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile-First Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
        {/* Mobile-Optimized Background */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-emerald-950/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60" />
        </div>

        {/* Mobile-First Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-5xl">
              {/* Mobile-First Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8 border border-emerald-400/30 shadow-xl sm:shadow-2xl">
                <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/70" />
                <span className="text-emerald-300 font-black text-xs sm:text-sm lg:text-lg tracking-wider">
                  <span className="sm:hidden">CLINIQUE PREMIUM</span>
                  <span className="hidden sm:block">CLINIQUE ULTRA PREMIUM</span>
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
              
              {/* Mobile-First Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-tight mb-6 sm:mb-8">
                <span className="block text-white">L'Excellence</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                  Dentaire
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-slate-300 font-bold mt-2 sm:mt-4">
                  Révolutionnaire
                </span>
              </h1>
              
              {/* Mobile-First Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl">
                <span className="text-emerald-400 font-black">Clinique Vitalya</span> redéfinit les standards du luxe dentaire. 
                <span className="hidden sm:inline"> IA médicale avancée, robotique de précision et expérience patient incomparable.</span>
              </p>
              
              {/* Mobile-First CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="group bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-black py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-2xl sm:rounded-3xl text-sm sm:text-base lg:text-xl transition-all duration-500 transform hover:scale-105 lg:hover:scale-110 hover:-translate-y-1 lg:hover:-translate-y-3 shadow-xl lg:shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-400/70">
                  <span className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <Sparkles size={16} className="sm:hidden group-hover:animate-spin" />
                    <Sparkles size={18} className="hidden sm:block lg:hidden group-hover:animate-spin" />
                    <Sparkles size={20} className="hidden lg:block group-hover:animate-spin" />
                    <span className="whitespace-nowrap">
                      <span className="sm:hidden">RDV PREMIUM</span>
                      <span className="hidden sm:block">EXPÉRIENCE PREMIUM</span>
                    </span>
                    <ArrowRight size={16} className="sm:hidden group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform" />
                    <ArrowRight size={18} className="hidden sm:block lg:hidden group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform" />
                    <ArrowRight size={20} className="hidden lg:block group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-2xl sm:rounded-3xl text-sm sm:text-base lg:text-xl transition-all duration-500 transform hover:scale-105 border border-white/30 hover:border-emerald-400/50 shadow-lg lg:shadow-xl">
                  <span className="sm:hidden">DÉCOUVRIR</span>
                  <span className="hidden sm:block">DÉCOUVRIR L'INNOVATION</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-First Stats */}
        <div className="absolute bottom-20 sm:bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 flex flex-row gap-3 sm:gap-4 lg:gap-8 text-white z-20 px-4">
          {[
            { value: '20+', label: 'Années', labelFull: 'Années Innovation' },
            { value: '10K+', label: 'Sourires', labelFull: 'Sourires Parfaits' },
            { value: '100%', label: 'Excellence', labelFull: 'Excellence VIP' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg lg:shadow-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                <span className="sm:hidden">{stat.label}</span>
                <span className="hidden sm:block">{stat.labelFull}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-First Carousel Controls */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 scale-125' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Mobile-First Image Info */}
        <div className="absolute top-1/4 sm:top-1/3 right-4 sm:right-6 lg:right-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border border-white/20 z-10 max-w-xs sm:max-w-sm shadow-xl lg:shadow-2xl">
          <h3 className="font-black text-sm sm:text-base lg:text-xl mb-2 sm:mb-3 text-emerald-400">{images[currentImageIndex].title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{images[currentImageIndex].description}</p>
        </div>
      </section>
    </>
  );
};

export default Navbar;