import type { Locale, PrivacyContent } from './types'

const ar: PrivacyContent = {
  title: 'سياسة الخصوصية',
  intro: 'نحترم خصوصيتك ونسعى لحماية بياناتك الشخصية.',
  sections: [
    {
      title: 'البيانات التي نجمعها',
      body: 'قد نجمع بيانات أساسية تقدمها طوعاً مثل الاسم ووسائل التواصل لغرض الدعم.',
    },
    { title: 'استخدام البيانات', body: 'نستخدم البيانات للتواصل معك بشأن الخدمات التعليمية فقط.' },
    {
      title: 'مشاركة البيانات',
      body: 'لا نبيع أو نشارك بياناتك مع أطراف ثالثة لأغراض تسويقية.',
    },
    {
      title: 'الأمان',
      body: 'نبذل جهوداً معقولة لحماية البيانات، لكن لا يوجد نظام آمن 100% على الإنترنت.',
    },
    {
      title: 'حقوقك',
      body: 'يمكنك طلب تحديث أو حذف بياناتك عبر البريد: info@heba-cbt.com.',
    },
  ],
  updated: 'آخر تحديث: اليوم',
}

const en: PrivacyContent = {
  title: 'Privacy Policy',
  intro: 'We respect your privacy and strive to protect your personal data.',
  sections: [
    {
      title: 'Data we collect',
      body: 'We may collect basic data you provide voluntarily, such as your name and contact details, for support purposes.',
    },
    { title: 'Use of data', body: 'We use the data only to contact you about the educational services.' },
    {
      title: 'Sharing of data',
      body: 'We do not sell or share your data with third parties for marketing purposes.',
    },
    {
      title: 'Security',
      body: 'We take reasonable measures to protect the data, but no system on the internet is 100% secure.',
    },
    {
      title: 'Your rights',
      body: 'You can request to update or delete your data by email: info@heba-cbt.com.',
    },
  ],
  updated: 'Last updated: today',
}

export const privacy: Record<Locale, PrivacyContent> = { ar, en }
