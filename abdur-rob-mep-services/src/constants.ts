/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, CallbackRequest } from './types';

export const SITE_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwqmFTeHfXsoEzrbi3Wer5LdQjJrCcu0SHFxBY_HOGF43H0-VbLUkROYu1Llr7IsCILtkI-X5sPD61tX4aH6B5MIRcQZRFZxIbvzbCCQ_6J08JgKZ3fnmmrf9JWWVeWTLCs5sW-eXkOtXJgnCf5bqi1fS3GlToXoA65WGad6aE73TfTZQglxqogr4fC2xqrxUpgAxxQHimU1KyfTZ3ro7cICrtxz52U6Rg1lEHCvXi11WbSu3K-82KRE-TaZlr7q33FDkHjOOscw',
  about: 'https://lh3.googleusercontent.com/aida/ADBb0uh0kic1ecEl_7VSxBGQat1UczuWdvIfuM8HCCUjQs9vzXdtVko1slfrFv-ZyrqfUMV4Bli8cBaiZi0DWDDSEkCkFyOhiWjzvySxnSoTcDCGGBUJqgwUaHW_ppewtTTnI0GEFCmMdMxLAoNB1AjsFWuGqEDIQhmefWwEGecAfW-CPXqYTzI1qjPC8EWEXvEtWmhnjMx-AqpVKJWVh7oRUxqaXSi8CyGQrFJ9K8rTVQpyrXcI-s3O-SdVHg',
  electrical: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4G3CBFo6NbR7PlcyTyHoU5QMQNMbbCYwHzmYqnOJbRrpwBn58xBnDTv8VaVj7rN5Ly3cPrLV7TFMUxK_f-UI-Em3r2p5vjBvuoP6Ooec-r4busqnv3e8J9z8CJSo0aI4VvS9u9kE5JotUPsfJWwiQ_p_C19Jx7PMaW7xiWXpvg3PYt82H45Nx-08WpBQFUNzRJ-Ruig2tz-0m8XTPQsLygwVLPnvg3sWQg8RveVku7fe-qYIh6QZYG1zFlsyh6nB7Z_8QYwGlQ',
  plumbing: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgnVEg4RsXeBUEUZe8w8Pjdh4pUG5JHWH98WiyC8Xwak26fARZ12oPE_A-MYpNrK6BHIOZY1sd9Q3d99gZayFtPCNXXu6d_54zdMNuPSB1L9Fsin3xQtHTpdn-xcm_eDMjAKmlls43iD-akP2HIY3YxAD6t-JvuYNktnWEijD8m-vhtODYTOc9XSTwOu2ypX3wSXG1aATGrYKej0lZUmmYN26pSyzUhCCAwmkr5r-ZPGL0FRF_NDcQCDODj7j7pl8__t8e-HLp4g',
  maintenance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATWWZzYftkwjDK1Gg7a4LTX9A3H15bL_UTbyTxFwc640XlpcYUcyOwMRSr1JFdUh624qQnCEYgGpLPRA6Pr_22dX3TE4yFRp5jYyVAbSOwcD7FXh5krfyj_haaqE816k1TO7XuS3bnCb3rcHM4HBT6XrI048RjXv5X_9ftFnl4J3Aeb3OLKrsI5jIr6AbIObH8Roy2We7lJpbIpTCszuEzdjpn3a7JbWM_Tt7DpOyxEpf6Plgi6f5WXjS3BdScl2gS-7OYV3ORug',
  smartHome: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
  security: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
  emergency: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
  portfolio1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4G3CBFo6NbR7PlcyTyHoU5QMQNMbbCYwHzmYqnOJbRrpwBn58xBnDTv8VaVj7rN5Ly3cPrLV7TFMUxK_f-UI-Em3r2p5vjBvuoP6Ooec-r4busqnv3e8J9z8CJSo0aI4VvS9u9kE5JotUPsfJWwiQ_p_C19Jx7PMaW7xiWXpvg3PYt82H45Nx-08WpBQFUNzRJ-Ruig2tz-0m8XTPQsLygwVLPnvg3sWQg8RveVku7fe-qYIh6QZYG1zFlsyh6nB7Z_8QYwGlQ',
  portfolio2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgnVEg4RsXeBUEUZe8w8Pjdh4pUG5JHWH98WiyC8Xwak26fARZ12oPE_A-MYpNrK6BHIOZY1sd9Q3d99gZayFtPCNXXu6d_54zdMNuPSB1L9Fsin3xQtHTpdn-xcm_eDMjAKmlls43iD-akP2HIY3YxAD6t-JvuYNktnWEijD8m-vhtODYTOc9XSTwOu2ypX3wSXG1aATGrYKej0lZUmmYN26pSyzUhCCAwmkr5r-ZPGL0FRF_NDcQCDODj7j7pl8__t8e-HLp4g',
  loginBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwqmFTeHfXsoEzrbi3Wer5LdQjJrCcu0SHFxBY_HOGF43H0-VbLUkROYu1Llr7IsCILtkI-X5sPD61tX4aH6B5MIRcQZRFZxIbvzbCCQ_6J08JgKZ3fnmmrf9JWWVeWTLCs5sW-eXkOtXJgnCf5bqi1fS3GlToXoA65WGad6aE73TfTZQglxqogr4fC2xqrxUpgAxxQHimU1KyfTZ3ro7cICrtxz52U6Rg1lEHCvXi11WbSu3K-82KRE-TaZlr7q33FDkHjOOscw',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4G3CBFo6NbR7PlcyTyHoU5QMQNMbbCYwHzmYqnOJbRrpwBn58xBnDTv8VaVj7rN5Ly3cPrLV7TFMUxK_f-UI-Em3r2p5vjBvuoP6Ooec-r4busqnv3e8J9z8CJSo0aI4VvS9u9kE5JotUPsfJWwiQ_p_C19Jx7PMaW7xiWXpvg3PYt82H45Nx-08WpBQFUNzRJ-Ruig2tz-0m8XTPQsLygwVLPnvg3sWQg8RveVku7fe-qYIh6QZYG1zFlsyh6nB7Z_8QYwGlQ'
  },
  {
    id: 'CB-8841',
    name: 'Khalid Bin Waleed',
    phone: '+966 55 987 6543',
    service: 'Emergency Pipe Repair',
    location: 'Al Rawdah District, Villa 42',
    timestamp: '2 hours ago',
    status: 'in-progress',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgnVEg4RsXeBUEUZe8w8Pjdh4pUG5JHWH98WiyC8Xwak26fARZ12oPE_A-MYpNrK6BHIOZY1sd9Q3d99gZayFtPCNXXu6d_54zdMNuPSB1L9Fsin3xQtHTpdn-xcm_eDMjAKmlls43iD-akP2HIY3YxAD6t-JvuYNktnWEijD8m-vhtODYTOc9XSTwOu2ypX3wSXG1aATGrYKej0lZUmmYN26pSyzUhCCAwmkr5r-ZPGL0FRF_NDcQCDODj7j7pl8__t8e-HLp4g'
  },
  {
    id: 'CB-8840',
    name: 'Fatima Al-Sayed',
    phone: '+966 53 456 7890',
    service: 'HVAC Maintenance Query',
    location: 'Corniche Road, Tower B',
    timestamp: 'Yesterday, 14:30',
    status: 'completed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATWWZzYftkwjDK1Gg7a4LTX9A3H15bL_UTbyTxFwc640XlpcYUcyOwMRSr1JFdUh624qQnCEYgGpLPRA6Pr_22dX3TE4yFRp5jYyVAbSOwcD7FXh5krfyj_haaqE816k1TO7XuS3bnCb3rcHM4HBT6XrI048RjXv5X_9ftFnl4J3Aeb3OLKrsI5jIr6AbIObH8Roy2We7lJpbIpTCszuEzdjpn3a7JbWM_Tt7DpOyxEpf6Plgi6f5WXjS3BdScl2gS-7OYV3ORug'
  }
];
