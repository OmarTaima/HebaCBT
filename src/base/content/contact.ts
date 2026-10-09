import type { ContactContent, Locale } from './types'

const ar: ContactContent = {
  title: 'تواصل معنا',
  rows: [
    { label: 'الموقع', value: 'heba-cbt.com', href: 'https://heba-cbt.com', ltr: true },
    { label: 'واتساب/هاتف', value: '+201140433907', href: 'https://wa.me/201140433907', ltr: true },
    { label: 'البريد', value: 'info@heba-cbt.com', href: 'mailto:info@heba-cbt.com', ltr: true },
  ],
}

const en: ContactContent = {
  title: 'Contact Us',
  rows: [
    { label: 'Website', value: 'heba-cbt.com', href: 'https://heba-cbt.com', ltr: true },
    { label: 'WhatsApp / Phone', value: '+201140433907', href: 'https://wa.me/201140433907', ltr: true },
    { label: 'Email', value: 'info@heba-cbt.com', href: 'mailto:info@heba-cbt.com', ltr: true },
  ],
}

export const contact: Record<Locale, ContactContent> = { ar, en }
