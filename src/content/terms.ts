import type { Locale, TermsContent } from './types'

const ar: TermsContent = {
  title: 'سياسات الشروط والأحكام',
  intro: 'تنظم هذه السياسة استخدام موقع وخدمات HEBA CBT.',
  sections: [
    { title: 'القبول', body: 'باستخدامك هذا الموقع فأنت توافق على هذه الشروط بالكامل.' },
    {
      title: 'المحتوى التعليمي',
      body: 'جميع المواد التعليمية معدّة لأغراض التدريب العملي في مجال التخاطب. لا يُسمح بإعادة نشر أو توزيع المحتوى دون إذن كتابي مسبق.',
    },
    {
      title: 'الملكية الفكرية',
      body: 'جميع العلامات التجارية والمحتوى النصي والمرئي مملوكة لـ HEBA CBT ما لم يُذكر خلاف ذلك.',
    },
    {
      title: 'عدم تقديم استشارات طبية',
      body: 'المحتوى تعليمي ولا يُعد بديلاً عن الاستشارة الطبية المتخصصة.',
    },
    {
      title: 'حدود المسؤولية',
      body: 'لا تتحمل HEBA CBT أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام المواد.',
    },
    {
      title: 'التعديلات',
      body: 'قد يتم تحديث هذه الشروط من وقت لآخر، وتصبح سارية فور نشرها على الموقع.',
    },
  ],
  updated: 'آخر تحديث: اليوم',
}

const en: TermsContent = {
  title: 'Terms & Policies',
  intro: 'This policy governs the use of the HEBA CBT website and services.',
  sections: [
    { title: 'Acceptance', body: 'By using this website you accept these terms in full.' },
    {
      title: 'Educational content',
      body: 'All educational material is prepared for practical training purposes in the field of speech therapy. Republishing or distributing the content without prior written permission is not allowed.',
    },
    {
      title: 'Intellectual property',
      body: 'All trademarks and textual and visual content are owned by HEBA CBT unless stated otherwise.',
    },
    {
      title: 'No medical advice',
      body: 'The content is educational and is not a substitute for specialized medical consultation.',
    },
    {
      title: 'Limitation of liability',
      body: 'HEBA CBT accepts no liability for any direct or indirect damage resulting from the use of the material.',
    },
    {
      title: 'Amendments',
      body: 'These terms may be updated from time to time and take effect as soon as they are published on the website.',
    },
  ],
  updated: 'Last updated: today',
}

export const terms: Record<Locale, TermsContent> = { ar, en }
