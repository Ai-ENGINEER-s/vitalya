"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Menu, X, Clock, ChevronDown, Activity, ChevronLeft, ChevronRight, Star, Shield, Award, Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('accueil');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

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
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavClick = useCallback((itemId: string, href: string) => {
    setActiveNav(itemId);
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {!isMobile && (
          <>
            <div 
              className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" 
              style={{ 
                left: `${mousePos.x / 20 - 100}px`, 
                top: `${mousePos.y / 20 - 100}px`,
                transform: 'translate(-50%, -50%)'
              }} 
            />
            <div 
              className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-bounce" 
              style={{ 
                right: `${mousePos.x / 30 - 50}px`, 
                bottom: `${mousePos.y / 30 - 50}px` 
              }} 
            />
          </>
        )}
      </div>

      {/* Contact Bar */}
      <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-3 lg:py-4 px-4 sm:px-6 shadow-2xl border-b border-emerald-500/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-emerald-500/5 animate-pulse" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 w-full sm:w-auto">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-emerald-400/70 transition-all duration-300 group-hover:rotate-12">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs lg:text-sm text-emerald-400 font-bold uppercase tracking-wider block">
                    URGENCES VIP 24H/7J
                  </span>
                  <div className="text-lg lg:text-xl font-black text-white">06 66 39 72 79</div>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-purple-400/70 transition-all duration-300 group-hover:rotate-12">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs lg:text-sm text-purple-400 font-bold uppercase tracking-wider">CONTACT PREMIUM</span>
                  <div className="text-lg lg:text-xl font-black text-white">contact@vitalya.ma</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                <span className="font-bold text-emerald-400 text-sm lg:text-lg whitespace-nowrap">
                  Casablanca Premium
                </span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
                  <Facebook size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center hover:from-pink-400 hover:to-rose-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
                  <Instagram size={18} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`relative bg-white/80 backdrop-blur-2xl shadow-2xl sticky top-0 z-50 transition-all duration-500 border-b border-emerald-200/50 ${isScrolled ? 'bg-white/95 shadow-emerald-500/20' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white/30 to-cyan-50/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-18 lg:h-24">
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="#hero" className="group" onClick={(e) => {
                e.preventDefault();
                handleNavClick('accueil', '#hero');
              }}>
                <div className="relative p-2 rounded-xl bg-gradient-to-r from-white to-gray-50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <img 
                    src="/images/logo-vitalya.png" 
                    alt="Logo Clinique Vitalya"
                    className="h-10 lg:h-16 w-auto object-contain transition-all duration-300"
                    loading="eager"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id, item.href);
                  }}
                  className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-500 overflow-hidden group ${
                    activeNav === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/50 scale-105'
                      : 'text-slate-700 hover:text-emerald-600'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${activeNav === item.id ? 'opacity-0' : ''}`} />
                  <span className="relative z-10">{item.label}</span>
                  {activeNav !== item.id && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 transform hover:scale-105 group">
                <Sparkles size={20} className="group-hover:animate-spin" />
                <span>CONSULTATION VIP</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 hover:from-emerald-100 hover:to-cyan-100 transition-all duration-300 shadow-lg"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-slate-700" />
                ) : (
                  <Menu size={24} className="text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-emerald-200/50 shadow-2xl animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id, item.href);
                    }}
                    className={`px-6 py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
                      activeNav === item.id
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-xl'
                        : 'text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 hover:text-emerald-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              {/* Mobile CTA in menu */}
              <button className="sm:hidden w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-xl">
                <Sparkles size={20} />
                <span>CONSULTATION VIP</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
        {/* Background */}
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
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-emerald-950/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
            <div className="max-w-5xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl px-8 py-4 mb-8 border border-emerald-400/30 shadow-2xl">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/70" />
                <span className="text-emerald-300 font-black text-lg tracking-wider">
                  CLINIQUE ULTRA PREMIUM
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
              
              {/* Heading */}
              <h1 className="text-6xl xl:text-8xl font-black leading-tight mb-8">
                <span className="block text-white">L'Excellence</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                  Dentaire
                </span>
                <span className="block text-4xl xl:text-6xl text-slate-300 font-bold mt-4">
                  Révolutionnaire
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl xl:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl">
                <span className="text-emerald-400 font-black">Clinique Vitalya</span> redéfinit les standards du luxe dentaire. 
                IA médicale avancée, robotique de précision et expérience patient incomparable.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-black py-6 px-12 rounded-3xl text-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-400/70">
                  <span className="flex items-center justify-center gap-4">
                    <Sparkles size={20} className="group-hover:animate-spin" />
                    <span>EXPÉRIENCE PREMIUM</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold py-6 px-12 rounded-3xl text-xl transition-all duration-500 transform hover:scale-105 border border-white/30 hover:border-emerald-400/50 shadow-xl">
                  DÉCOUVRIR L'INNOVATION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-row gap-8 text-white z-20 px-4 ">
          {[
            { value: '20+', label: 'Années Innovation' },
            { value: '10K+', label: 'Sourires Parfaits' },
            { value: '100%', label: 'Excellence VIP' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="text-3xl font-black text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 scale-125' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Info */}
        <div className="absolute top-1/3 right-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 text-white border border-white/20 z-10 max-w-sm shadow-2xl">
          <h3 className="font-black text-xl mb-3 text-emerald-400">{images[currentImageIndex].title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{images[currentImageIndex].description}</p>
        </div>
      </section>
    </>
  );
};

export default Navbar;