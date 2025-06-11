"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronDown, Star, Award, Calendar } from 'lucide-react';
import Services from '@/components/Services';
import   Testimonial from '@/components/Testimonial';



const VitalyaDentalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const services = [
    { title: 'Esthétique dentaire', desc: 'Blanchiment et soins esthétiques avancés' },
    { title: 'Prothèse - Facettes', desc: 'Solutions prothétiques sur mesure' },
    { title: 'Parodontologie', desc: 'Traitements spécialisés des gencives' },
    { title: 'Chirurgie - Implants', desc: 'Implantologie moderne et sûre' },
    { title: 'Orthodontie - Invisalign', desc: 'Alignement dentaire invisible' },
    { title: 'Pédodontie', desc: 'Soins dentaires pour enfants' }
  ];

  // Images par défaut avec des placeholders modernes
  const clinicImages = [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&crop=center'
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/212666397279', '_blank');
  };

  const handleCall = () => {
    window.open('tel:0666397279', '_self');
  };

  const scrollToSection = (id:any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Supprimer toutes les notifications de domaine
  useEffect(() => {
    const removeAds = () => {
      const ads = document.querySelectorAll('[class*="domain"], [class*="sale"], [class*="chatbot"], [id*="ad"], [class*="popup"]');
      ads.forEach(ad => ad.remove());
    };
    
    removeAds();
    const interval = setInterval(removeAds, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Bloquer les notifications */}
      <style>{`
        [class*="domain"], 
        [class*="sale"], 
        [class*="chatbot-url"], 
        [id*="ad"],
        [class*="popup"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          position: absolute !important;
          left: -9999px !important;
        }
      `}</style>

      
 


      <Services />
      <Testimonial />
  
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600">
              Prenez rendez-vous dès aujourd'hui
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-600">Twin Center, Boulevard Zerktouni<br />Casablanca, Maroc</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-gray-600">06 66 39 72 79</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Horaires</h3>
                  <p className="text-gray-600">
                    Lun-Ven: 8h30-19h30<br />
                    Samedi: 9h-17h<br />
                    Dimanche: Sur RDV
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Prendre Rendez-vous</h3>
              
              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: 06 66 39 72 79
                </button>
                
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center px-6 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler Maintenant
                </button>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-center text-green-800 text-sm">
                  <strong>📞 Appelez-nous maintenant</strong><br />
                  Pour vous donner plus de détails sur nos services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default VitalyaDentalWebsite;