/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, CallbackRequest } from './types';

export const SITE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000',
  about: 'https://images.unsplash.com/photo-1581092918030-2b943e6988cc?auto=format&fit=crop&q=80&w=1000',
  electrical: 'https://images.unsplash.com/photo-1581092918030-2b943e6988cc?auto=format&fit=crop&q=80&w=800',
  plumbing: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800',
  maintenance: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
  smartHome: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
  security: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
  emergency: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
  portfolio1: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000',
  portfolio2: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=1000',
  loginBg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000'
};

export const SITE_CONFIG = {
  heroImage: SITE_IMAGES.hero,
  aboutImage: SITE_IMAGES.about,
  whatsapp: '+966000000000',
  phone: '+966000000000',
  location: 'Jizan, Saudi Arabia',
  locationAr: 'جيزان، المملكة العربية السعودية'
};

export const SERVICES: Service[] = [
  {
    id: 'electrical',
    title: 'Electrical Systems',
    titleAr: 'الأنظمة الكهربائية',
    description: 'Complete wiring, load balancing, panel upgrades, and fault diagnostics for high-demand environments.',
    descriptionAr: 'تمديدات كاملة، موازنة الأحمال، ترقية اللوحات، وتشخيص الأعطال للبيئات عالية الطلب.',
    icon: 'Zap',
    image: SITE_IMAGES.electrical,
    features: ['Circuit Installation', 'Panel Upgrades', 'Fault Diagnostics']
  },
  {
    id: 'plumbing',
    title: 'Advanced Plumbing',
    titleAr: 'السباكة المتقدمة',
    description: 'High-pressure system design, leak detection, and industrial-grade pipe routing and maintenance.',
    descriptionAr: 'تصميم أنظمة الضغط العالي، كشف التسربات، وتوجيه الأنابيب الصناعية وصيانتها.',
    icon: 'Droplet',
    image: SITE_IMAGES.plumbing,
    features: ['Leak Diagnostics', 'Pipe Routing', 'Pressure Systems']
  },
  {
    id: 'maintenance',
    title: 'Building Maintenance',
    titleAr: 'صيانة المباني',
    description: 'Preventative maintenance contracts ensuring structural and systemic integrity year-round.',
    descriptionAr: 'عقود صيانة وقائية تضمن سلامة الهيكل والنظام على مدار العام.',
    icon: 'HardHat',
    image: SITE_IMAGES.maintenance
  },
  {
    id: 'smart-home',
    title: 'Smart Integration',
    titleAr: 'التكامل الذكي',
    description: 'Automated lighting, climate control, and smart security integrations for modern facilities.',
    descriptionAr: 'إضاءة آلية، تحكم في المناخ، وتكامل أمني ذكي للمرافق الحديثة.',
    icon: 'Cpu',
    image: SITE_IMAGES.smartHome
  },
  {
    id: 'security',
    title: 'Security & CCTV',
    titleAr: 'الأمن وكاميرات المراقبة',
    description: 'High-definition surveillance networks, access control, and robust security infrastructure.',
    descriptionAr: 'شبكات مراقبة عالية الدقة، تحكم في الوصول، وبنية أمنية قوية.',
    icon: 'Camera',
    image: SITE_IMAGES.security
  },
  {
    id: 'emergency',
    title: 'Emergency Response',
    titleAr: 'الاستجابة للطوارئ',
    description: 'Rapid-deployment troubleshooting for critical electrical or plumbing failures. Available 24/7.',
    descriptionAr: 'استكشاف الأخطاء وإصلاحها بالانتشار السريع للأعطال الكهربائية أو السباكة الحرجة. متاح على مدار الساعة.',
    icon: 'AlertTriangle',
    image: SITE_IMAGES.emergency
  }
];

export const CALLBACK_REQUESTS: CallbackRequest[] = [
  {
    id: 'CB-8842',
    name: 'Ahmed Al-Farsi',
    phone: '+966 50 123 4567',
    service: 'Commercial Electrical Assessment',
    location: 'Jizan Industrial City, Block C',
    timestamp: '10 mins ago',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'CB-8841',
    name: 'Khalid Bin Waleed',
    phone: '+966 55 987 6543',
    service: 'Emergency Pipe Repair',
    location: 'Al Rawdah District, Villa 42',
    timestamp: '2 hours ago',
    status: 'in-progress',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'CB-8840',
    name: 'Fatima Al-Sayed',
    phone: '+966 53 456 7890',
    service: 'HVAC Maintenance Query',
    location: 'Corniche Road, Tower B',
    timestamp: 'Yesterday, 14:30',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  }
];
