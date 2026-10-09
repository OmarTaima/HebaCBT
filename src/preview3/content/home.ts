import type { HomeContent, Locale } from './types'

const ar: HomeContent = {
  heroStrip: {
    brand: 'د/هبة الشرقاوي',
    chips: ['كورس التخاطب المعتمد', 'تدريب عن بُعد', 'اعتماد ومهارة عملية'],
  },
  hero: {
    chip: 'برنامج محترف',
    title: 'كورس أخصائي التخاطب المعتمد',
    intro: 'يهدف إلى إعداد وتأهيل الأفراد ليصبحوا "اخصائيين تخاطب" معتمدين للعمل في: المدارس - المستشفيات - العيادات - المراكز المتخصصة.',
  },
  banner: {
    eyebrow: 'يعتمد على الجانب العملي',
    value: '+300 ساعة تدريبية',
    sub: 'تأهيل شامل للتشخيص والتأهيل كأخصائي محترف',
  },
  keyFacts: [
    { title: 'اسم المحاضر', value: 'د. هبة الشرقاوي' },
    { title: 'مكان الكورس', value: '(أونلاين - تدريب عن بُعد - زووم)' },
    { title: 'جاهزية لسوق العمل', value: 'مدارس - مستشفيات - عيادات - مراكز متخصصة' },
    { title: 'منهجية عملية', value: 'دراسة حالة وتشخيص وأساليب تأهيل' },
  ],
  description:
    'هو كورس أخصائي التخاطب المعتمد يهدف إلى إعداد وتأهيل الأفراد ليصبحوا أخصائيين معتمدين للعمل في المدارس، المستشفيات، العيادات، والمراكز المتخصصة. يعتمد البرنامج على الجانب العملي من دراسة الحالة والتشخيص وأساليب التأهيل، بواقع أكثر من 300 ساعة تدريبية تمكّنك من تشخيص وتأهيل معظم الاضطرابات بمهارة.',
  infoTitle: 'معلومات تهمك',
  infoFacts: [
    {
      title: 'مناسب لمن؟',
      value: 'للمهتمين بالعمل كأخصائي تخاطب، وطلاب/خريجي التربية الخاصة، وأولياء الأمور الراغبين بفهم علمي عملي.',
    },
    {
      title: 'المخرجات',
      value: 'إتقان خطوات التشخيص وبناء الخطة، وتنفيذ الجلسات، ومعرفة التعامل مع اضطرابات متعددة بثقة.',
    },
    {
      title: 'طريقة الدراسة',
      value: 'أونلاين مباشر عبر زووم، مع محتوى عملي تطبيقي وتمارين ومناقشات.',
    },
    {
      title: 'المدة والساعات',
      value: 'أكثر من 300 ساعة تدريبية عملية تغطي التشخيص والتأهيل بشكل متكامل.',
    },
    {
      title: 'الاعتماد',
      value: 'شهادة إتمام تؤهلك للعمل في المدارس والمستشفيات والعيادات والمراكز المتخصصة.',
    },
    {
      title: 'احجز الآن',
      value: 'تواصل عبر واتساب للحجز والاستفسار على الرقم الموضّح بالأسفل.',
    },
  ],
  faq: {
    title: 'أسئلة شائعة',
    items: [
      {
        id: 'faq-practical',
        title: 'هل المحتوى عملي أم نظري؟',
        content: 'معظم المحتوى تطبيقي مع أمثلة وخطوات قابلة للتنفيذ فوراً.',
      },
      {
        id: 'faq-format',
        title: 'كيف تتم المحاضرات؟',
        content: 'أونلاين مباشر عبر زووم مع تفاعل وأسئلة حيّة.',
      },
      {
        id: 'faq-support',
        title: 'هل هناك دعم بعد المحاضرات؟',
        content: 'يتم توفير توجيه مختصر وإجابات على الاستفسارات الأساسية.',
      },
    ],
  },
  skills: {
    title: 'ماذا ستتقن؟',
    items: [
      { title: 'وضع خطة فردية للطفل', subtitle: 'تصميم خطة علاجية واقعية قابلة للقياس' },
      { title: 'بدء الجلسة وبناء برنامج علاجي', subtitle: 'خطوات عملية لبداية منظمة وآمنة' },
      { title: 'شرح اللغة والسلم اللغوي', subtitle: 'فهم مراحل النمو اللغوي الطبيعي' },
    ],
  },
  course: {
    title: 'محتوى الكورس — التعرف على',
    items: [
      {
        id: 'individual-plan',
        title: 'كيفية وضع خطة فردية للطفل',
        content: 'نحدد أهداف ذكية قابلة للقياس والزمن، ونقسمها إلى خطوات أسبوعية واقعية.',
      },
      {
        id: 'session-start',
        title: 'بدء الجلسة وبناء برنامج علاجي',
        content: 'روتين افتتاحي، نشاط رئيسي، وتعزيزات مناسبة مع إنهاء منظم وتغذية راجعة.',
      },
      {
        id: 'language-scale',
        title: 'شرح اللغة والسلم اللغوي',
        content: 'مراحل تطور اللغة من المناغاة إلى الجمل المركبة مع مؤشرات لكل مرحلة.',
      },
      {
        id: 'language-disorders',
        title: 'أمراض اللغة وتأخر نمو اللغة',
        content: 'تمييز التأخر البسيط عن الاضطرابات البنيوية وخطوات التدخل المبكر.',
      },
      {
        id: 'cluttering',
        title: 'العي',
        content: 'استراتيجيات تبطيء الكلام وتحسين الوضوح تدريجياً.',
      },
      {
        id: 'echolalia',
        title: 'الإيكولاليا',
        content: 'تحويل الترديد إلى تواصل وظيفي عبر نمذجة الجمل.',
      },
      {
        id: 'hoarseness',
        title: 'البحة الصوتية',
        content: 'العادات الصوتية الصحية وتمارين الرنين السليم.',
      },
      {
        id: 'fast-speech',
        title: 'السرعة في الكلام',
        content: 'تمارين الإيقاع والتوقفات المنظمة لتحسين الفهم.',
      },
      {
        id: 'aphasia',
        title: 'الحبسة الكلامية',
        content: 'أنشطة استرجاع الكلمات وبناء الجمل تدريجياً.',
      },
      {
        id: 'nasal-emission',
        title: 'الخنف',
        content: 'تدريب غلق المجرى الأنفي وتمارين الرنين الفموي.',
      },
      {
        id: 'apraxia',
        title: 'الإبراكسيا',
        content: 'تسلسل الحركات الفموية والصوتية من السهل إلى المركب.',
      },
      {
        id: 'cerebral-palsy',
        title: 'الشلل الدماغي',
        content: 'تسهيلات وضعية وتمارين التحكم بالتنفس والنطق.',
      },
      {
        id: 'down-syndrome',
        title: 'متلازمة داون',
        content: 'التركيز على المفردات الوظيفية والتواصل الكلي (كلام + إشارات).',
      },
      {
        id: 'stuttering',
        title: 'التلعثم',
        content: 'تقنيات الطلاقة: كلام متمهل، بدايات لينة، ونمط تنفّس متوازن.',
      },
      {
        id: 'articulation',
        title: 'اللدغات',
        content: 'تصحيح مخارج الحروف بالتدرج من أصوات معزولة إلى كلمات.',
      },
      {
        id: 'speech-assessment',
        title: 'تقييم أعضاء النطق والكلام',
        content: 'فحص الشفاه، اللسان، سقف الحلق، والتنفس مع استمارة معيارية.',
      },
      {
        id: 'hearing-impairment',
        title: 'الإعاقة السمعية',
        content: 'استخدام المعينات السمعية والتدريب السمعي اللفظي.',
      },
      {
        id: 'intellectual-disability',
        title: 'الإعاقة العقلية',
        content: 'بسّط الأهداف وكرّر بطرق متعددة مع تعزيزات فورية.',
      },
      {
        id: 'adhd',
        title: 'فرط الحركة وتشتت الانتباه',
        content: 'جلسات قصيرة، تعليم بصري، وجدولة أنشطة مع فواصل حركة.',
      },
    ],
  },
  practical: {
    title: 'المنهج العملي',
    body: 'يعتمد التدريب على دراسة حالات حقيقية، تشخيص دقيق، ومهارات تأهيل قابلة للتطبيق مباشرة مع مختلف الاضطرابات.',
  },
  roadmap: {
    eyebrow: 'خارطة الدراسة',
    title: 'خطة السير من البداية للاحتراف',
    steps: [
      { title: 'التهيئة والتقييم', description: 'تجميع تاريخ الحالة، المقاييس المناسبة، وخطة أولية قابلة للقياس.' },
      { title: 'بناء البرنامج', description: 'اختيار استراتيجيات عملية لكل هدف مع مواد وأنشطة داعمة.' },
      { title: 'تنفيذ الجلسات', description: 'روتين جلسة واضح: افتتاح، نشاط أساسي، تقييم سريع، واجب منزلي.' },
      { title: 'التتبّع والتحسين', description: 'قياس التقدم أسبوعياً وتعديل الأهداف حسب الاستجابة الفعلية.' },
    ],
  },
  tips: {
    eyebrow: 'توصيات ومقترحات',
    title: 'اقتراحات لتعظيم الاستفادة',
    items: [
      {
        title: 'حضور منتظم',
        description: 'الالتزام بالمواعيد وتدوين الملاحظات يسهل عليك تطبيق الخطط العلاجية.',
      },
      {
        title: 'ملف حالات',
        description: 'أنشئ ملفاً لكل حالة لتتابع التقييم، الأهداف، والتقدّم أسبوعياً.',
      },
      {
        title: 'مجتمع مهني',
        description: 'تبادل الخبرات مع الزملاء يختصر وقت التعلم ويزيد جودة التدخّل.',
      },
    ],
  },
}

const en: HomeContent = {
  heroStrip: {
    brand: 'Dr. Heba El Sharkawy',
    chips: ['Accredited Speech Therapy Course', 'Remote Training', 'Accreditation & Practical Skill'],
  },
  hero: {
    chip: 'Professional Program',
    title: 'Accredited Speech Therapist Course',
    intro: 'Aims to prepare and qualify individuals to become certified speech therapists working in: schools, hospitals, clinics, and specialized centers.',
  },
  banner: {
    eyebrow: 'Built around practical training',
    value: '+300 Training Hours',
    sub: 'Comprehensive qualification in assessment and rehabilitation as a professional specialist',
  },
  keyFacts: [
    { title: 'Lecturer', value: 'Dr. Heba El Sharkawy' },
    { title: 'Course Location', value: '(Online – Remote Training – Zoom)' },
    { title: 'Job-Ready For', value: 'Schools – Hospitals – Clinics – Specialized Centers' },
    { title: 'Practical Methodology', value: 'Case study, assessment, and rehabilitation techniques' },
  ],
  description:
    'The Accredited Speech Therapist Course aims to prepare and qualify individuals to become certified specialists working in schools, hospitals, clinics, and specialized centers. The program is built on the practical side — case study, assessment, and rehabilitation techniques — with more than 300 training hours that enable you to assess and rehabilitate most disorders with skill.',
  infoTitle: 'Key Information',
  infoFacts: [
    {
      title: 'Who is it for?',
      value: 'Aspiring speech therapists, special-education students and graduates, and parents seeking a scientific, practical understanding.',
    },
    {
      title: 'Outcomes',
      value: 'Mastering the steps of assessment and plan-building, running sessions, and handling multiple disorders with confidence.',
    },
    {
      title: 'Study Method',
      value: 'Live online over Zoom, with hands-on content, exercises, and discussions.',
    },
    {
      title: 'Duration & Hours',
      value: 'Over 300 practical training hours covering assessment and rehabilitation in an integrated way.',
    },
    {
      title: 'Accreditation',
      value: 'A completion certificate that qualifies you to work in schools, hospitals, clinics, and specialized centers.',
    },
    {
      title: 'Book Now',
      value: 'Contact us on WhatsApp to book or inquire on the number shown below.',
    },
  ],
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        id: 'faq-practical',
        title: 'Is the content practical or theoretical?',
        content: 'Most of the content is hands-on, with examples and steps you can apply immediately.',
      },
      {
        id: 'faq-format',
        title: 'How are the lectures delivered?',
        content: 'Live online over Zoom, with interaction and questions in real time.',
      },
      {
        id: 'faq-support',
        title: 'Is there support after the lectures?',
        content: 'Brief guidance and answers to core questions are provided.',
      },
    ],
  },
  skills: {
    title: 'What You Will Master',
    items: [
      { title: 'Building an individual plan for the child', subtitle: 'Designing a realistic, measurable treatment plan' },
      { title: 'Starting the session & building a program', subtitle: 'Practical steps for an organized, safe start' },
      { title: 'Explaining language & the language scale', subtitle: 'Understanding the stages of typical language development' },
    ],
  },
  course: {
    title: 'Course Content — An Overview',
    items: [
      {
        id: 'individual-plan',
        title: 'How to build an individual plan for the child',
        content: 'We set SMART, time-bound goals and break them into realistic weekly steps.',
      },
      {
        id: 'session-start',
        title: 'Starting the session & building a treatment program',
        content: 'An opening routine, a core activity, and suitable reinforcement, with a structured close and feedback.',
      },
      {
        id: 'language-scale',
        title: 'Explaining language & the language scale',
        content: 'Language development stages from motherese to complex sentences, with indicators for each stage.',
      },
      {
        id: 'language-disorders',
        title: 'Language disorders & delayed language development',
        content: 'Distinguishing a simple delay from structural disorders and the steps of early intervention.',
      },
      {
        id: 'cluttering',
        title: 'Cluttering',
        content: 'Strategies to slow speech down and gradually improve clarity.',
      },
      {
        id: 'echolalia',
        title: 'Echolalia',
        content: 'Turning repetition into functional communication through sentence modeling.',
      },
      {
        id: 'hoarseness',
        title: 'Vocal hoarseness',
        content: 'Healthy voice habits and resonant voice exercises.',
      },
      {
        id: 'fast-speech',
        title: 'Fast speech rate',
        content: 'Pacing and structured pause exercises to improve comprehension.',
      },
      {
        id: 'aphasia',
        title: 'Aphasia',
        content: 'Word-retrieval activities and gradual sentence building.',
      },
      {
        id: 'nasal-emission',
        title: 'Nasal emission',
        content: 'Training velar closure and oral resonance exercises.',
      },
      {
        id: 'apraxia',
        title: 'Apraxia',
        content: 'Sequencing oral and vocal movements from simple to complex.',
      },
      {
        id: 'cerebral-palsy',
        title: 'Cerebral palsy',
        content: 'Positioning accommodations and exercises for breathing and articulation control.',
      },
      {
        id: 'down-syndrome',
        title: 'Down syndrome',
        content: 'Focus on functional vocabulary and total communication (speech + signs).',
      },
      {
        id: 'stuttering',
        title: 'Stuttering',
        content: 'Fluency techniques: easy speech, soft onsets, and a balanced breathing pattern.',
      },
      {
        id: 'articulation',
        title: 'Articulation errors',
        content: 'Correcting sound placements progressively, from isolated sounds to words.',
      },
      {
        id: 'speech-assessment',
        title: 'Assessing the speech organs',
        content: 'Examining the lips, tongue, palate, and breathing with a standardized form.',
      },
      {
        id: 'hearing-impairment',
        title: 'Hearing impairment',
        content: 'Using hearing aids and auditory-verbal training.',
      },
      {
        id: 'intellectual-disability',
        title: 'Intellectual disability',
        content: 'Simplify the goals and repeat them in varied ways with immediate reinforcement.',
      },
      {
        id: 'adhd',
        title: 'Hyperactivity & attention deficit',
        content: 'Short sessions, visual teaching, and activity scheduling with movement breaks.',
      },
    ],
  },
  practical: {
    title: 'The Practical Method',
    body: 'Training is based on real case studies, accurate assessment, and rehabilitation skills you can apply immediately across a wide range of disorders.',
  },
  roadmap: {
    eyebrow: 'Study Roadmap',
    title: 'Your Path from Start to Professional',
    steps: [
      { title: 'Orientation & assessment', description: 'Gathering case history, selecting the right measures, and drafting a measurable initial plan.' },
      { title: 'Building the program', description: 'Choosing practical strategies for each goal, with supporting materials and activities.' },
      { title: 'Running the sessions', description: 'A clear session routine: opening, core activity, quick review, and home practice.' },
      { title: 'Follow-up & refinement', description: 'Measuring progress weekly and adjusting goals based on the actual response.' },
    ],
  },
  tips: {
    eyebrow: 'Recommendations',
    title: 'Suggestions to Maximize the Benefit',
    items: [
      {
        title: 'Regular attendance',
        description: 'Keeping appointments and taking notes makes it easier to apply the treatment plans.',
      },
      {
        title: 'Case file',
        description: 'Create a file for each case to track the assessment, the goals, and weekly progress.',
      },
      {
        title: 'Professional community',
        description: 'Sharing experience with peers shortens learning time and improves intervention quality.',
      },
    ],
  },
}

export const home: Record<Locale, HomeContent> = { ar, en }
