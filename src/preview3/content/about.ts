import type { AboutContent, Locale } from './types'

const ar: AboutContent = {
  title: 'عن دكتورة هبة الشرقاوي',
  subtitle: 'مجال اكلينيكى ومعالج نطق ولغه ..',
  body: 'تهدف د. هبة الشرقاوي إلى تمكين الأخصائيين بالمهارات العملية اللازمة للتشخيص والتأهيل في مجال التخاطب، عبر تدريب عملي مكثف ومحتوى واضح قابل للتطبيق.',
  whatsapp: 'واتساب',
}

const en: AboutContent = {
  title: 'About Dr. Heba El Sharkawy',
  subtitle: 'Clinical practice and speech & language therapy ..',
  body: 'Dr. Heba El Sharkawy aims to equip specialists with the practical skills needed for assessment and rehabilitation in speech therapy, through intensive hands-on training and clear, applicable content.',
  whatsapp: 'WhatsApp',
}

export const about: Record<Locale, AboutContent> = { ar, en }
