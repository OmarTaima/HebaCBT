import type { CommonContent, Locale } from './types'

const ar: CommonContent = {
  nav: {
    home: 'الرئيسية',
    about: 'عن دكتورة هبة',
    contact: 'تواصل معنا',
  },
  footer: {
    terms: 'سياسات الشروط والاحكام',
    privacy: 'سياسة الخصوصية',
    label: 'روابط الموقع',
  },
  ui: {
    mainNav: 'القائمة الرئيسية',
    mobileNav: 'القائمة المتنقلة',
    logoAlt: 'HEBA CBT — د. هبة الشرقاوي',
    languageMenu: 'تغيير اللغة',
    arabic: 'العربية',
    english: 'English',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    skipToContent: 'تخطى إلى المحتوى',
    newTab: '(يفتح في تبويب جديد)',
    chatLabel: 'خدمة العملاء',
    chatName: 'خدمة العملاء',
    sidebar: 'المحتوى الجانبي',
  },
  cta: {
    book: 'احجز عبر واتساب',
  },
  topBar: {
    phone: '01109016169',
  },
  titles: {
    home: 'HEBA CBT — كورس أخصائي التخاطب المعتمد',
    about: 'عن دكتورة هبة — HEBA CBT',
    contact: 'تواصل معنا — HEBA CBT',
    terms: 'سياسات الشروط والاحكام — HEBA CBT',
    privacy: 'سياسة الخصوصية — HEBA CBT',
  },
}

const en: CommonContent = {
  nav: {
    home: 'Home',
    about: 'About Dr. Heba',
    contact: 'Contact Us',
  },
  footer: {
    terms: 'Terms & Policies',
    privacy: 'Privacy Policy',
    label: 'Site links',
  },
  ui: {
    mainNav: 'Main navigation',
    mobileNav: 'Mobile menu',
    logoAlt: 'HEBA CBT — Dr. Heba El Sharkawy',
    languageMenu: 'Change language',
    arabic: 'العربية',
    english: 'English',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    newTab: '(opens in a new tab)',
    chatLabel: 'Customer Service',
    chatName: 'Customer Service',
    sidebar: 'Sidebar',
  },
  cta: {
    book: 'Book on WhatsApp',
  },
  topBar: {
    phone: '01109016169',
  },
  titles: {
    home: 'HEBA CBT — Accredited Speech Therapist Course',
    about: 'About Dr. Heba — HEBA CBT',
    contact: 'Contact Us — HEBA CBT',
    terms: 'Terms & Policies — HEBA CBT',
    privacy: 'Privacy Policy — HEBA CBT',
  },
}

export const common: Record<Locale, CommonContent> = { ar, en }
