"use client";
// Footer premium pour Clinique Dentaire Vitalya - Version améliorée

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Award, Heart, Users, Sparkles, ChevronRight, ExternalLink, ArrowUp, Stethoscope, Shield, Star } from 'lucide-react';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Esthétique dentaire', href: '/services/esthetique' },
    { name: 'Prothèse - Facettes', href: '/services/prothese' },
    { name: 'Parodontologie', href: '/services/parodontologie' },
    { name: 'Chirurgie - Implants', href: '/services/chirurgie' },
    { name: 'Orthodontie - Invisalign', href: '/services/orthodontie' },
    { name: 'Pédodontie', href: '/services/pedodontie' }
  ];

  const informations = [
    { name: 'Rendez-vous en ligne', detail: 'Disponible 24h/7j', href: '/rendez-vous' },
    { name: 'Urgences dentaires', detail: 'Service rapide', href: '/urgences' },
    { name: 'Horaires d\'ouverture', detail: 'Lun-Sam 8h-19h', href: '/horaires' },
    { name: 'Plan d\'accès', detail: 'Parking gratuit', href: '/acces' }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-14 h-14 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center hover:from-emerald-500 hover:to-green-500 transition-all duration-300 hover:scale-110 shadow-2xl">
          <ArrowUp size={20} className="text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>

      <footer className="relative overflow-hidden w-full">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #10b981, #059669)',
              left: mousePos.x - 192,
              top: mousePos.y - 192,
              transition: 'all 0.3s ease-out'
            }}
          />
        </div>

        {/* Main Footer Background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-green-900/20" />
          
          <div className="relative">
            {/* Footer Content */}
            <div className="w-full px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 lg:px-8 lg:pt-24 lg:pb-12 xl:px-12 2xl:px-16">
              
              {/* Top Section - Brand */}
              <div className="text-center mb-16 pb-12 border-b border-white/10">
                <div className="group inline-flex flex-col items-center space-y-6 mb-8 lg:flex-row lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110 lg:w-24 lg:h-24">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-inner lg:w-14 lg:h-14">
                        <Heart className="w-7 h-7 text-emerald-500 lg:w-8 lg:h-8" />
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition-opacity" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
                      CLINIQUE DENTAIRE VITALYA
                    </h2>
                    <p className="text-lg text-emerald-400 font-semibold mt-2 lg:text-xl xl:text-2xl">
                      Excellence • Innovation • Bien-être
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed lg:text-xl xl:text-2xl lg:max-w-5xl">
                  <span className="font-bold text-emerald-400">Votre sourire, notre passion</span> - Clinique dentaire moderne 
                  au cœur de Casablanca. Des soins de qualité premium dans un environnement ultra-moderne.
                </p>

                {/* Stats/Features Row */}
                <div className="grid grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto lg:grid-cols-4 lg:gap-8 lg:max-w-4xl lg:mt-12">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-base text-emerald-400 font-semibold lg:text-lg">Sécurisé</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-base text-emerald-400 font-semibold lg:text-lg">Premium</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-base text-emerald-400 font-semibold lg:text-lg">Moderne</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-base text-emerald-400 font-semibold lg:text-lg">Expertise</p>
                  </div>
                </div>
              </div>

              {/* Footer Links Grid */}
              <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-4 lg:gap-16">
                
                {/* Company Info */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 lg:text-2xl lg:mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full" />
                    À PROPOS
                  </h3>
                  <div className="space-y-6 text-gray-300">
                    <p className="text-base leading-relaxed lg:text-lg">
                      Clinique dentaire moderne située à Casablanca, offrant des soins dentaires de haute qualité dans un environnement confortable et technologiquement avancé.
                    </p>
                    <div className="flex gap-4">
                      <a href="#facebook" className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110">
                        <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#instagram" className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-110">
                        <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 lg:text-2xl lg:mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                    NOS SERVICES
                  </h3>
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a
                          href={service.href}
                          className="group flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                        >
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Informations */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 lg:text-2xl lg:mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                    INFORMATIONS
                  </h3>
                  <ul className="space-y-4">
                    {informations.map((info, index) => (
                      <li key={index}>
                        <a
                          href={info.href}
                          className="group block text-gray-300 hover:text-green-400 transition-colors text-base lg:text-lg"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            {info.name}
                          </div>
                          <div className="text-sm text-gray-500 ml-7 lg:text-base">
                            {info.detail}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 lg:text-2xl lg:mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    CONTACT
                  </h3>
                  <div className="space-y-6">
                    <a
                      href="tel:0666397279"
                      className="group flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={18} className="text-white" />
                      </div>
                      06 66 39 72 79
                    </a>
                    
                    <a
                      href="mailto:contact@vitalya.ma"
                      className="group flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors text-base lg:text-lg"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={18} className="text-white" />
                      </div>
                      contact@vitalya.ma
                    </a>
                    
                    <div className="flex items-center gap-4 text-gray-300 text-base lg:text-lg">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                        <MapPin size={18} className="text-white" />
                      </div>
                      Casablanca, Maroc
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-300 text-base lg:text-lg">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                        <Clock size={18} className="text-white" />
                      </div>
                      Lun-Sam: 8h-19h
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Call-to-Action */}
              <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-3xl p-8 mb-12 border border-emerald-500/20 backdrop-blur-sm lg:p-10 lg:mb-16">
                <div className="text-center">
                  <div className="inline-flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white lg:text-3xl">
                        Consultation Express
                      </h4>
                      <p className="text-lg text-emerald-400 lg:text-xl">
                        WhatsApp ou Appelez-nous
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 mb-8 lg:text-xl">
                    Besoin d'un rendez-vous rapide ? Contactez-nous directement sur WhatsApp ou par téléphone
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                    <a
                      href="https://wa.me/212666397279"
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                    >
                      <Sparkles className="w-6 h-6" />
                      Chat WhatsApp
                    </a>
                    <a
                      href="tel:0666397279"
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                    >
                      <Phone className="w-6 h-6" />
                      Appeler Maintenant
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-white/10 pt-8 lg:pt-12">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
                  <p className="text-base text-gray-400 text-center lg:text-lg lg:text-left">
                    © 2025 <span className="font-semibold text-emerald-400">Clinique Dentaire Vitalya</span>. 
                    Tous droits réservés.
                  </p>
                  <div className="flex items-center gap-8 text-base text-gray-400 lg:text-lg">
                    <a href="/mentions-legales" className="hover:text-emerald-400 transition-colors">
                      Mentions légales
                    </a>
                    <a href="/cgu" className="hover:text-emerald-400 transition-colors">
                      CGU
                    </a>
                    <a href="/confidentialite" className="hover:text-emerald-400 transition-colors">
                      Confidentialité
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;