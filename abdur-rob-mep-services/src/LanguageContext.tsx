/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language } from './types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    navServices: 'Services',
    navAbout: 'About',
    navPortfolio: 'Portfolio',
    navContact: 'Contact',
    heroBadge: 'Elite MEP Engineering',
    heroTitle: 'Professional Electrical & Plumbing Services in Jizan.',
    heroDescription: 'Delivering high-precision technical infrastructure and maintenance with unyielding reliability. Over 30 years of mastery for residential and commercial projects.',
    heroWhatsApp: 'WhatsApp Now',
    heroCall: 'Call for Service',
    aboutTitle: 'Engineering Mastery',
    aboutDescription: 'With over three decades of field expertise in Jizan, Abdur Rob MEP Services has set the standard for technical excellence. We don’t just fix problems; we engineer long-term infrastructure reliability.',
    aboutStat1: '30+ Years',
    aboutStat1Label: 'Industry Mastery',
    aboutStat2: '500+',
    aboutStat2Label: 'Projects Completed',
    portfolioTitle: 'Recent Projects',
    portfolioDescription: 'A glimpse into the high-precision infrastructure we’ve built across the kingdom.',
    coreCompetencies: 'Core Competencies',
    precisionSolutions: 'Precision-engineered solutions for complex infrastructural needs.',
    contactTitle: 'Direct Access to Elite Support',
    contactDescription: 'Connect directly with lead engineer Abdur Rob for consultations, project scoping, or emergency service.',
    formName: 'Full Name',
    formPhone: 'Phone Number',
    formSubmit: 'Request Callback',
    footerCopyright: '© 2024 Abdur Rob MEP Services. Elite Engineering in Jizan.',
    cardJobTitle: 'Lead MEP Engineer',
    scanToSave: 'Scan to Save Contact',
    adminTitle: 'Admin Terminal',
    adminAccess: 'Admin Access',
    userId: 'User ID',
    password: 'Password',
    signIn: 'Sign In',
    forgot: 'Forgot?',
    trustWorkstation: 'Trust this secure workstation',
    securedBy: 'SYSTEM SECURED BY JIZAN EXCELLENCE PROTOCOLS'
  },
  ar: {
    navServices: 'الخدمات',
    navAbout: 'عنا',
    navPortfolio: 'أعمالنا',
    navContact: 'اتصل بنا',
    heroBadge: 'هندسة كهروميكانيكية نخبوية',
    heroTitle: 'خدمات السباكة والكهرباء الاحترافية في جيزان.',
    heroDescription: 'نقدم حلول صيانة وبنية تحتية فنية عالية الدقة مع موثوقية تامة. أكثر من 30 عامًا من الخبرة في المشاريع السكنية والتجارية.',
    heroWhatsApp: 'واتساب الآن',
    heroCall: 'اتصل للخدمة',
    aboutTitle: 'إتقان هندسي',
    aboutDescription: 'على مدار أكثر من ثلاثة عقود من الخبرة الميدانية في جيزان، وضعت خدمات عبد الرب الكهروميكانيكية المعيار للتميز الفني. نحن لا نكتفي بإصلاح المشكلات فحسب؛ بل نصمم موثوقية البنية التحتية على المدى الطويل.',
    aboutStat1: 'أكثر من 30 عامًا',
    aboutStat1Label: 'إتقان الصناعة',
    aboutStat2: '+500',
    aboutStat2Label: 'مشروع مكتمل',
    portfolioTitle: 'أعمالنا الأخيرة',
    portfolioDescription: 'لمحة عن البنية التحتية عالية الدقة التي بنيناها في جميع أنحاء المملكة.',
    coreCompetencies: 'الكفاءات الأساسية',
    precisionSolutions: 'حلول هندسية دقيقة لاحتياجات البنية التحتية المعقدة.',
    contactTitle: 'تواصل مباشر مع الدعم المتميز',
    contactDescription: 'تواصل مباشرة مع المهندس الرئيسي عبد الرب للاستشارات، تحديد نطاق المشاريع، أو خدمة الطوارئ.',
    formName: 'الاسم الكامل',
    formPhone: 'رقم الهاتف',
    formSubmit: 'طلب معاودة الاتصال',
    footerCopyright: '© 2024 خدمات عبد الرب الكهروميكانيكية. هندسة نخبوية في جيزان.',
    cardJobTitle: 'مهندس كهروميكانيكا رئيسي',
    scanToSave: 'امسح لحفظ جهة الاتصال',
    adminTitle: 'المحطة الإدارية',
    adminAccess: 'وصول المشرف',
    userId: 'معرف المستخدم',
    password: 'كلمة المرور',
    signIn: 'تسجيل الدخول',
    forgot: 'نسيت؟',
    trustWorkstation: 'الثقة في محطة العمل هذه',
    securedBy: 'نظام مؤمن ببروتوكولات جيزان للتميز'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
