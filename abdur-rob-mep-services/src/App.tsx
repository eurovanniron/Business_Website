/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Droplet, 
  HardHat, 
  Cpu, 
  Camera, 
  AlertTriangle, 
  MessageSquare, 
  Phone, 
  Globe, 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Search, 
  MoreVertical, 
  ChevronRight, 
  CheckCircle, 
  Clock, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  User,
  Lock,
  Menu,
  X,
  Smartphone,
  QrCode
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { SERVICES, CALLBACK_REQUESTS, SITE_CONFIG, SITE_IMAGES } from './constants';
import { Service, CallbackRequest } from './types';

// --- Shared Components ---

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const isAdminPage = location.pathname.startsWith('/admin');

  if (isAdminPage) return null;

  return (
    <header className="fixed top-0 w-full z-50 glass-panel h-20">
      <div className="max-w-container-max mx-auto px-6 md:px-16 h-full flex justify-between items-center">
        <Link to="/" className="font-display font-bold text-2xl text-primary tracking-tight">
          {language === 'ar' ? 'عبد الرب' : 'Abdur Rob'}
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#services" className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t('navServices')}</a>
          <a href="#about" className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t('navAbout')}</a>
          <a href="#portfolio" className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t('navPortfolio')}</a>
          <a href="#contact" className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t('navContact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 text-primary hover:brightness-110 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 transition-all"
          >
            <Globe size={18} />
            <span className="font-sans font-bold text-xs uppercase">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
          
          <Link to="/login" className="hidden border border-white/10 px-4 py-2 rounded text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary/50 transition-colors">
            Portal
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full glass-panel border-t border-white/5 py-8 px-6 flex flex-col gap-6"
          >
            <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-display">{t('navServices')}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-display">{t('navAbout')}</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-xl font-display">{t('navPortfolio')}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-display">{t('navContact')}</a>
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-xl font-display text-primary">Portal</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  if (location.pathname.startsWith('/admin') && location.pathname !== '/login') return null;

  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-12 px-6 md:px-16">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Link to="/" className="font-display font-bold text-2xl text-primary">
            {language === 'ar' ? 'عبد الرب' : 'Abdur Rob'}
          </Link>
          <p className="mt-4 text-on-surface-variant text-sm max-w-sm">
            {t('footerCopyright')}
          </p>
        </div>
        <div className="flex flex-wrap gap-8 md:justify-end items-center">
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">{t('navServices')}</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">{t('navPortfolio')}</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">{t('navContact')}</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const Home = () => {
  const { language, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="text-primary" size={32} />;
      case 'Droplet': return <Droplet className="text-primary" size={32} />;
      case 'HardHat': return <HardHat className="text-primary" size={32} />;
      case 'Cpu': return <Cpu className="text-primary" size={32} />;
      case 'Camera': return <Camera className="text-primary" size={32} />;
      case 'AlertTriangle': return <AlertTriangle className="text-primary" size={32} />;
      default: return null;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 px-6 md:px-16">
        <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        
        <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-sans font-bold text-[10px] tracking-widest uppercase">{t('heroBadge')}</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-on-surface leading-tight">
              {t('heroTitle').split(language === 'ar' ? 'السباكة والكهرباء' : 'Electrical & Plumbing').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-primary block mt-2">{language === 'ar' ? 'السباكة والكهرباء' : 'Electrical & Plumbing'}</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-lg">
              {t('heroDescription')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all gold-glow">
                <MessageSquare size={18} />
                {t('heroWhatsApp')}
              </button>
              <button className="flex items-center gap-3 bg-transparent border border-primary text-primary px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-primary/5 transition-all">
                <Phone size={18} />
                {t('heroCall')}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel gold-glow transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src={SITE_CONFIG.heroImage} 
                alt="MEP Engineering" 
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-spacing-section-gap bg-surface-container-lowest px-6 md:px-16">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl text-on-surface mb-4">{t('coreCompetencies')}</h2>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl">{t('precisionSolutions')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-xl group hover:gold-glow hover:border-primary/50 transition-all duration-500 relative overflow-hidden flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-4 right-8 opacity-[0.1] group-hover:opacity-30 transition-opacity">
                    {getIcon(service.icon)}
                  </div>
                  <div className="mb-6">{getIcon(service.icon)}</div>
                  <h3 className="font-display font-bold text-2xl text-on-surface mb-3">
                    {language === 'ar' ? service.titleAr : service.title}
                  </h3>
                  <p className="font-sans text-on-surface-variant mb-6 text-sm leading-relaxed">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>
                  {service.features && (
                    <ul className="text-[10px] text-primary/60 uppercase tracking-widest space-y-2 border-t border-white/5 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {service.features.map(f => <li key={f}>• {f}</li>)}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-spacing-section-gap bg-background px-6 md:px-16 overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-panel p-2 rounded-2xl gold-glow overflow-hidden">
              <img 
                src={SITE_CONFIG.aboutImage}
                alt="Expert Engineering"
                className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="font-display font-bold text-4xl text-primary">{t('aboutTitle')}</h2>
            <p className="font-sans text-xl leading-relaxed text-on-surface-variant">
              {t('aboutDescription')}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="font-display font-bold text-3xl text-primary">{t('aboutStat1')}</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">{t('aboutStat1Label')}</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-primary">{t('aboutStat2')}</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">{t('aboutStat2Label')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-spacing-section-gap bg-surface-container-lowest px-6 md:px-16">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-on-surface mb-4">{t('portfolioTitle')}</h2>
            <p className="font-sans text-lg text-on-surface-variant">{t('portfolioDescription')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-xl overflow-hidden glass-panel border-white/5"
            >
              <img src={SITE_IMAGES.portfolio1} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Industrial Grid" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h4 className="font-display font-bold text-xl text-primary">Jizan Industrial Grid</h4>
                <p className="text-white/60 text-sm mt-2">Electrical Sub-station Maintenance & Expansion</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-xl overflow-hidden glass-panel border-white/5"
            >
              <img src={SITE_IMAGES.portfolio2} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Technical Plumbing" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h4 className="font-display font-bold text-xl text-primary">Luxury Tower Complex</h4>
                <p className="text-white/60 text-sm mt-2">Full MEP Lifecycle Implementation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-spacing-section-gap bg-background px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl text-on-surface mb-6">{t('contactTitle')}</h2>
            <p className="font-sans text-lg text-on-surface-variant mb-12 max-w-md">
              {t('contactDescription')}
            </p>
            <form className="space-y-6 max-w-md">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  placeholder=" " 
                  className={`w-full bg-surface-container border border-white/10 rounded px-5 py-4 text-on-surface focus:outline-none focus:border-primary transition-all peer ${language === 'ar' ? 'text-right' : 'text-left'}`}
                />
                <label 
                  htmlFor="name"
                  className={`absolute ${language === 'ar' ? 'right-5' : 'left-5'} top-4 text-on-surface-variant text-sm transition-all peer-focus:text-xs peer-focus:-translate-y-9 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-9`}
                >
                  {t('formName')}
                </label>
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  id="phone"
                  placeholder=" " 
                  className={`w-full bg-surface-container border border-white/10 rounded px-5 py-4 text-on-surface focus:outline-none focus:border-primary transition-all peer ${language === 'ar' ? 'text-right' : 'text-left'}`}
                />
                <label 
                  htmlFor="phone"
                  className={`absolute ${language === 'ar' ? 'right-5' : 'left-5'} top-4 text-on-surface-variant text-sm transition-all peer-focus:text-xs peer-focus:-translate-y-9 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-9`}
                >
                  {t('formPhone')}
                </label>
              </div>
              <button 
                type="button"
                className="w-full bg-primary text-on-primary py-4 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg"
              >
                {t('formSubmit')}
              </button>
            </form>
          </div>

          <div className="flex justify-center perspective-1000">
            <div className="w-full max-w-md aspect-[16/9] group cursor-pointer">
              <div className="relative w-full h-full transform-style-3d flip-card-inner group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden glass-panel rounded-xl p-8 flex flex-col justify-between border-primary/30 gold-glow bg-gradient-to-br from-surface-container-high to-background">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-primary tracking-tight">
                        {language === 'ar' ? 'عبد الرب' : 'Abdur Rob'}
                      </h3>
                      <p className="font-sans font-bold text-[10px] text-on-surface-variant tracking-[0.2em] uppercase mt-1">
                        {t('cardJobTitle')}
                      </p>
                    </div>
                    <HardHat className="text-primary/30" size={40} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-on-surface">
                      <Phone size={16} className="text-primary" />
                      <span className="font-sans text-sm">{SITE_CONFIG.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface">
                      <MapPin size={16} className="text-primary" />
                      <span className="font-sans text-sm">{language === 'ar' ? SITE_CONFIG.locationAr : SITE_CONFIG.location}</span>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-xl p-8 flex flex-col items-center justify-center border-white/10 bg-surface-container-highest">
                  <div className="w-32 h-32 bg-white p-2 rounded mb-4 flex items-center justify-center">
                    <QrCode size={100} className="text-background" />
                  </div>
                  <p className="font-sans font-bold text-[10px] text-primary uppercase tracking-[0.2em]">
                    {t('scanToSave')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Login = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative p-6">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface-container-high opacity-90 z-10" />
        <div className="absolute inset-0 blueprint-bg opacity-10 z-20" />
        <img 
          src={SITE_IMAGES.loginBg} 
          className="w-full h-full object-cover filter blur-md scale-110 opacity-30"
          alt="Login Background"
        />
      </div>

      <div className="relative z-30 w-full max-w-5xl grid md:grid-cols-12 items-center gap-16">
        <div className="hidden md:flex md:col-span-6 flex-col pr-12">
          <div className="flex items-center gap-4 mb-8">
            <Smartphone className="text-primary" size={48} />
            <h1 className="font-display font-bold text-4xl text-primary tracking-tighter">MEP Control</h1>
          </div>
          <h2 className="font-display font-bold text-3xl text-on-surface leading-tight">
            Technical Excellence <br/>
            <span className="text-on-surface-variant font-medium text-2xl">Secured Terminal Interface</span>
          </h2>
          <div className="flex items-center gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary" size={20} />
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Encrypted</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-12 md:col-span-6 glass-panel gold-glow p-10 md:p-14 rounded-xl"
        >
          <div className="mb-10">
            <h3 className="font-display font-bold text-3xl text-on-surface mb-2">{t('adminAccess')}</h3>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/admin'); }}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">{t('userId')}</label>
              <div className="relative">
                <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input 
                  type="text" 
                  required
                  placeholder="Enter ID"
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-lg py-4 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t('password')}</label>
                <a href="#" className="text-[10px] font-bold text-primary hover:brightness-110">{t('forgot')}</a>
              </div>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-lg py-4 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="secure" className="w-5 h-5 rounded border-white/10 bg-surface-container-lowest text-primary focus:ring-primary" />
              <label htmlFor="secure" className="text-sm text-on-surface-variant cursor-pointer">{t('trustWorkstation')}</label>
            </div>
            <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all group">
              <span>{t('signIn')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-[0.2em]">{t('securedBy')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-on-surface flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col py-8 bg-surface-container-lowest fixed left-0 top-0 h-full w-64 border-r border-white/5">
        <div className="px-8 mb-12">
          <h1 className="font-display font-medium text-xl text-primary">MEP Control</h1>
        </div>
        <nav className="flex flex-col flex-1 gap-2">
          <button className="flex items-center gap-4 px-8 py-4 text-on-surface-variant hover:bg-white/5 transition-colors text-sm font-medium">
            <LayoutDashboard size={20} />
            Inquiries
          </button>
          <button className="flex items-center gap-4 px-8 py-4 bg-primary/10 text-primary border-r-4 border-primary text-sm font-medium">
            <Phone size={20} />
            Callbacks
          </button>
          <button className="flex items-center gap-4 px-8 py-4 text-on-surface-variant hover:bg-white/5 transition-colors text-sm font-medium">
            <Users size={20} />
            Technicians
          </button>
          <div className="mt-auto">
            <button className="flex items-center gap-4 px-8 py-4 text-on-surface-variant hover:bg-white/5 transition-colors text-sm font-medium w-full">
              <Settings size={20} />
              Settings
            </button>
            <button onClick={() => navigate('/')} className="flex items-center gap-4 px-8 py-4 text-error hover:bg-white/5 transition-colors text-sm font-medium w-full">
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 pt-24 pb-12 px-6 md:px-16 max-w-container-max mx-auto">
        <header className="fixed top-0 left-0 lg:left-64 right-0 h-20 bg-background/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 md:px-16 z-40">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-primary"><Menu /></button>
            <h2 className="font-display font-bold text-2xl text-primary">Admin Terminal</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">AP</div>
          </div>
        </header>

        <div className="mb-12">
          <h1 className="font-display font-bold text-4xl mb-8">Callback Requests</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-on-surface-variant">Total Requests</h3>
                <CheckCircle size={20} className="text-primary" />
              </div>
              <p className="font-display font-bold text-3xl text-primary">142</p>
              <p className="text-[10px] font-bold text-on-surface-variant mt-2 uppercase tracking-widest">+12% this week</p>
            </div>
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden group gold-glow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-on-surface-variant">Pending</h3>
                <Clock size={20} className="text-primary" />
              </div>
              <p className="font-display font-bold text-3xl text-primary">28</p>
              <p className="text-[10px] font-bold text-error mt-2 uppercase tracking-widest">Requires attention</p>
            </div>
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-on-surface-variant">Completed</h3>
                <CheckCircle size={20} className="text-primary" />
              </div>
              <p className="font-display font-bold text-3xl text-primary">114</p>
              <p className="text-[10px] font-bold text-on-surface-variant mt-2 uppercase tracking-widest">Resolved this month</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex bg-surface-container-high p-1 rounded-full border border-white/5 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-xs uppercase tracking-widest transition-all">All</button>
            <button className="flex-1 md:flex-none px-6 py-2 rounded-full text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-all">New</button>
            <button className="flex-1 md:flex-none px-6 py-2 rounded-full text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-all">Completed</button>
          </div>
          <div className="relative w-full md:w-80">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search by name or ID..."
              className="w-full bg-surface-container-high border border-white/5 rounded-full py-2.5 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CALLBACK_REQUESTS.map((req) => (
            <motion.div 
              key={req.id}
              className={`glass-panel p-6 rounded-xl relative group hover:scale-[1.01] transition-all ${req.status === 'completed' ? 'opacity-60' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <img src={req.image} alt={req.service} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] border ${req.status === 'new' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white/5 text-on-surface-variant border-white/10'}`}>
                        {req.status.replace('-', ' ')}
                      </span>
                      <span className="text-on-surface-variant text-[10px] font-bold font-mono">ID: #{req.id}</span>
                    </div>
                    <h4 className="font-display font-medium text-xl">{req.name}</h4>
                  </div>
                </div>
                <span className="text-on-surface-variant text-[10px] font-bold uppercase">{req.timestamp}</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-primary"><Zap size={16} /></div>
                  <span className="text-sm">{req.service}</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-primary"><MapPin size={16} /></div>
                  <span className="text-sm">{req.location}</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <p className="font-display font-bold text-primary tracking-widest">{req.phone}</p>
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded font-bold text-[10px] uppercase tracking-widest hover:brightness-110 flex items-center gap-2">
                  <Phone size={14} />
                  Initiate Call
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

