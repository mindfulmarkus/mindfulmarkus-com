// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL WEBSITE TEXT
// ----------------------------------------------------------------------------
// Every visible string lives here as { en, de }.
// English is the primary language, German is the secondary language.
// The review spreadsheet (mindfulmarkus-website-texts.xlsx) is generated from
// this file. After editing copy here, re-run the export script to refresh it.
// ============================================================================

export type Lang = 'en' | 'de'

export interface T {
  en: string
  de: string
}

const t = (en: string, de: string): T => ({ en, de })

export const content = {
  meta: {
    languageName: t('English', 'Deutsch'),
    switchTo: t('DE', 'EN'),
  },

  nav: {
    offerings: t('Offerings', 'Angebote'),
    approach: t('Approach', 'Ansatz'),
    about: t('About', 'Über mich'),
    classes: t('June Classes', 'Juni-Kurse'),
    joinOnline: t('Join online', 'Online beitreten'),
  },

  hero: {
    eyebrow: t('Online & in person', 'Online & vor Ort'),
    titleLine1: t('Move, breathe,', 'Bewege dich, atme,'),
    titleAccent: t('be grounded.', 'sei geerdet.'),
    subtitle: t(
      'Mindful yoga, meditation and intentional living — guided from my home on Koh Phangan to a summer class series at the Chiemsee.',
      'Achtsames Yoga, Meditation und bewusstes Leben — begleitet von meinem Zuhause auf Koh Phangan bis zu einer Sommer-Kursreihe am Chiemsee.'
    ),
    ctaPrimary: t('Join the community', 'Der Community beitreten'),
    ctaSecondary: t('June classes at the Chiemsee', 'Juni-Kurse am Chiemsee'),
  },

  intro: {
    body: t(
      'We move beyond surface-level practice toward genuine transformation. Mindful yoga, breath and meditation that ground your body and calm your mind — whether you practice online or with us in person.',
      'Wir gehen über oberflächliche Praxis hinaus, hin zu echter Veränderung. Achtsames Yoga, Atem und Meditation, die deinen Körper erden und deinen Geist beruhigen — ob online oder gemeinsam vor Ort.'
    ),
  },

  offerings: {
    eyebrow: t('What I offer', 'Mein Angebot'),
    title: t('Ways to practice', 'Wege zur Praxis'),
    comingSoon: t('Coming soon', 'Demnächst'),
    items: {
      community: {
        title: t('stillness in motion', 'stillness in motion'),
        body: t(
          'Join our Skool community for ongoing practice, accountability and real connection.',
          'Werde Teil unserer Skool-Community für kontinuierliche Praxis, Verbindlichkeit und echte Verbindung.'
        ),
        cta: t('Join the community', 'Beitreten'),
      },
      liveClasses: {
        title: t('Live Classes · Chiemsee', 'Live-Kurse · Chiemsee'),
        body: t(
          'Intimate outdoor sessions at Übersee am Chiemsee. June dates are on the way.',
          'Intime Outdoor-Sessions in Übersee am Chiemsee. Die Juni-Termine sind in Arbeit.'
        ),
        cta: t('Get notified', 'Benachrichtigt werden'),
      },
      digital: {
        title: t('Digital Products', 'Digitale Produkte'),
        body: t(
          'Guided programs and resources for lasting change — practice anytime, anywhere.',
          'Begleitete Programme und Ressourcen für nachhaltige Veränderung — übe jederzeit und überall.'
        ),
        cta: t('Get notified', 'Benachrichtigt werden'),
      },
      private: {
        title: t('Private Classes', 'Privatstunden'),
        body: t(
          'One-to-one guidance tailored to you — online or in person. Details coming soon.',
          'Eins-zu-eins-Begleitung, ganz auf dich zugeschnitten — online oder vor Ort. Details folgen bald.'
        ),
        cta: t('Get notified', 'Benachrichtigt werden'),
      },
    },
  },

  video: {
    eyebrow: t('Practice on your schedule', 'Praxis nach deinem Rhythmus'),
    title: t('Real practice, real flexibility', 'Echte Praxis, echte Flexibilität'),
    body: t(
      'Get back in charge of your day with flexible, grounding classes you can join from home or on the road. No contracts, no pressure — just a practice that meets you where you are.',
      'Übernimm wieder die Regie über deinen Tag mit flexiblen, erdenden Kursen, die du von zu Hause oder unterwegs mitmachen kannst. Keine Verträge, kein Druck — nur eine Praxis, die dich dort abholt, wo du gerade bist.'
    ),
    cta: t('Try it for free', 'Kostenlos ausprobieren'),
    caption: t('A welcome from Markus', 'Eine Begrüßung von Markus'),
  },

  inperson: {
    eyebrow: t('Summer at the Chiemsee', 'Sommer am Chiemsee'),
    badge: t('Coming soon', 'Demnächst'),
    title: t('Practice together, in person', 'Gemeinsam üben, vor Ort'),
    body: t(
      'This summer I’m teaching a small series of outdoor classes at Übersee am Chiemsee. The June dates are being finalised — join the community to be the first to know when registration opens.',
      'Diesen Sommer unterrichte ich eine kleine Reihe von Outdoor-Kursen in Übersee am Chiemsee. Die Juni-Termine werden gerade finalisiert — werde Teil der Community, um als Erste:r zu erfahren, wann die Anmeldung öffnet.'
    ),
    cta: t('Join to be notified', 'Beitreten & benachrichtigt werden'),
  },

  journey: {
    eyebrow: t('How it unfolds', 'Wie es sich entfaltet'),
    title: t('Your journey', 'Dein Weg'),
    steps: {
      one: {
        title: t('Start your practice', 'Beginne deine Praxis'),
        body: t(
          'Begin with a beginner-friendly foundation that builds strength and body awareness.',
          'Starte mit einer einsteigerfreundlichen Grundlage, die Kraft und Körperbewusstsein aufbaut.'
        ),
      },
      two: {
        title: t('Deepen your connection', 'Vertiefe deine Verbindung'),
        body: t(
          'Find your rhythm with ongoing classes and a community practicing alongside you.',
          'Finde deinen Rhythmus mit fortlaufenden Kursen und einer Community, die mit dir übt.'
        ),
      },
      three: {
        title: t('Transform & sustain', 'Verwandeln & bewahren'),
        body: t(
          'Retreats and lasting practices that create change which truly stays with you.',
          'Retreats und nachhaltige Praktiken, die Veränderung schaffen, die wirklich bleibt.'
        ),
      },
    },
  },

  approach: {
    eyebrow: t('The philosophy', 'Die Philosophie'),
    title: t('Honouring your whole self', 'Dein ganzes Selbst ehren'),
    p1: t(
      'True wellbeing comes from honouring your whole self — body, mind and spirit.',
      'Wahres Wohlbefinden entsteht, wenn du dein ganzes Selbst ehrst — Körper, Geist und Seele.'
    ),
    p2: t(
      'The practice starts with movement: mindful yoga and breath work that build strength, awareness and release deeply held tension. Then we deepen into the mind through meditation — reframing limiting beliefs and cultivating lasting calm.',
      'Die Praxis beginnt mit Bewegung: achtsames Yoga und Atemarbeit, die Kraft und Bewusstsein aufbauen und tief sitzende Spannungen lösen. Dann vertiefen wir uns durch Meditation in den Geist — wir hinterfragen einschränkende Überzeugungen und kultivieren bleibende Ruhe.'
    ),
    p3: t(
      'The result is a grounded, empowered version of you — not a quick fix, but real transformation that lasts.',
      'Das Ergebnis ist eine geerdete, gestärkte Version von dir — keine schnelle Lösung, sondern echte, dauerhafte Veränderung.'
    ),
  },

  about: {
    eyebrow: t('Meet your teacher', 'Lerne deinen Lehrer kennen'),
    title: t('Hi, I’m Markus', 'Hi, ich bin Markus'),
    role: t('Yoga Teacher & Mindfulness Guide', 'Yogalehrer & Achtsamkeitsbegleiter'),
    bio: t(
      'I guide people toward stillness through movement, breath and intentional living. My approach centres on accessibility, authenticity and real transformation — never quick fixes. Koh Phangan is my home base, and this summer I’m teaching in person at the Chiemsee.',
      'Ich begleite Menschen durch Bewegung, Atem und bewusstes Leben zur Stille. Mein Ansatz baut auf Zugänglichkeit, Authentizität und echter Veränderung — nie auf schnellen Lösungen. Koh Phangan ist mein Zuhause, und diesen Sommer unterrichte ich vor Ort am Chiemsee.'
    ),
    teachingTitle: t('My teaching', 'Mein Unterricht'),
    teachingBody: t(
      'I meet people where they are and guide them toward practices that genuinely serve their lives — online or in person — in spaces where you feel held, supported and empowered.',
      'Ich hole Menschen dort ab, wo sie stehen, und führe sie zu Praktiken, die ihrem Leben wirklich dienen — online oder vor Ort — in einem Raum, in dem du dich gehalten, unterstützt und gestärkt fühlst.'
    ),
  },

  testimonials: {
    eyebrow: t('In their words', 'In ihren Worten'),
    title: t('What the community says', 'Was die Community sagt'),
    items: [
      {
        quote: t(
          'I finally found a yoga practice that feels authentic and truly grounding. Markus’s approach changed how I see myself.',
          'Endlich habe ich eine Yogapraxis gefunden, die sich authentisch und wirklich erdend anfühlt. Markus’ Ansatz hat verändert, wie ich mich selbst sehe.'
        ),
        name: t('— Community member', '— Community-Mitglied'),
      },
      {
        quote: t(
          'The online community feels just as connected as practicing in person. I’ve found my people here.',
          'Die Online-Community fühlt sich genauso verbunden an wie die Praxis vor Ort. Hier habe ich meine Menschen gefunden.'
        ),
        name: t('— Community member', '— Community-Mitglied'),
      },
      {
        quote: t(
          'Markus’s classes helped me find stillness in a busy life. It’s become my daily sanctuary.',
          'Markus’ Kurse haben mir geholfen, in einem hektischen Leben Stille zu finden. Sie sind mein täglicher Rückzugsort geworden.'
        ),
        name: t('— Community member', '— Community-Mitglied'),
      },
    ],
  },

  community: {
    eyebrow: t('Moments together', 'Gemeinsame Momente'),
    title: t('Community moments', 'Community-Momente'),
    follow: t('Follow', 'Folge'),
    followSuffix: t('for daily moments from the practice.', 'für tägliche Momente aus der Praxis.'),
  },

  tools: {
    eyebrow: t('Beyond the mat', 'Jenseits der Matte'),
    title: t('Mindful tools for modern life', 'Achtsame Werkzeuge für das moderne Leben'),
    intro: t(
      'Small, calm digital tools I build from my own life as a teacher and nomad — yoga for the moments between, not on the mat.',
      'Kleine, ruhige digitale Werkzeuge, die aus meinem eigenen Leben als Lehrer und Nomade entstehen — Yoga für die Momente dazwischen, nicht auf der Matte.'
    ),
    items: {
      abundance: {
        badge: t('Live', 'Live'),
        title: t('Abundance', 'Abundance'),
        tagline: t('A mindful money tracker for conscious humans.', 'Ein achtsamer Geld-Tracker für bewusste Menschen.'),
        body: t(
          'Multi-currency tracking built for nomads — recurring entries, forward projection and a daily abundance mantra. Calm, private, never finance-bro energy.',
          'Mehrwährungs-Tracking für Nomaden — wiederkehrende Einträge, Vorausschau und ein tägliches Abundance-Mantra. Ruhig, privat, nie Finanz-Bro-Energie.'
        ),
        cta: t('Open Abundance', 'Abundance öffnen'),
      },
      scroll: {
        badge: t('In build', 'In Arbeit'),
        title: t('Mindful Scroll', 'Mindful Scroll'),
        tagline: t('One question before you open Instagram.', 'Eine Frage, bevor du Instagram öffnest.'),
        body: t(
          'A gentle intent prompt — are you here to create, consume, or connect? Awareness without shame or restriction.',
          'Ein sanfter Impuls — bist du hier, um zu erschaffen, zu konsumieren oder dich zu verbinden? Bewusstheit ohne Scham oder Verbot.'
        ),
        cta: t('Coming soon', 'Demnächst'),
      },
      more: {
        badge: t('Planned', 'Geplant'),
        title: t('More to come', 'Mehr folgt'),
        tagline: t('Every tool solves a pain I lived first.', 'Jedes Werkzeug löst einen Schmerz, den ich selbst erlebt habe.'),
        body: t(
          'The suite grows slowly and intentionally — each one small, beautiful and grounded in real life.',
          'Die Sammlung wächst langsam und bewusst — jedes klein, schön und im echten Leben verwurzelt.'
        ),
        cta: t('On the roadmap', 'Auf der Roadmap'),
      },
    },
  },

  newsletter: {
    title: t('Curated for the like-minded', 'Kuratiert für Gleichgesinnte'),
    body: t(
      'A free meditation, class announcements and gentle prompts to support your practice.',
      'Eine kostenlose Meditation, Kursankündigungen und sanfte Impulse für deine Praxis.'
    ),
    placeholder: t('your@email.com', 'deine@email.de'),
    button: t('Subscribe', 'Abonnieren'),
    sending: t('Sending…', 'Wird gesendet…'),
    success: t('You’re in! Check your inbox to confirm.', 'Geschafft! Bitte bestätige in deinem Postfach.'),
    error: t('Something went wrong. Please try again.', 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'),
  },

  footer: {
    tagline: t(
      'Mindful yoga and intentional living — online from anywhere, and in person between Koh Phangan and the Chiemsee.',
      'Achtsames Yoga und bewusstes Leben — online von überall und vor Ort zwischen Koh Phangan und dem Chiemsee.'
    ),
    explore: t('Explore', 'Entdecken'),
    practice: t('Practice', 'Praxis'),
    connect: t('Connect', 'Kontakt'),
    about: t('About', 'Über mich'),
    approach: t('Approach', 'Ansatz'),
    community: t('Community', 'Community'),
    skool: t('Skool Community', 'Skool-Community'),
    onlineCourses: t('Online Courses', 'Online-Kurse'),
    juneClasses: t('June Classes', 'Juni-Kurse'),
    instagram: t('Instagram', 'Instagram'),
    email: t('Email', 'E-Mail'),
    rights: t('Koh Phangan, Thailand', 'Koh Phangan, Thailand'),
    motto: t('Move, breathe, be grounded.', 'Bewege dich, atme, sei geerdet.'),
  },

  // ----- June class registration page -----
  classPage: {
    back: t('Back to home', 'Zurück zur Startseite'),
    eyebrow: t('Summer class series · June', 'Sommer-Kursreihe · Juni'),
    title: t('Mindful Yoga at the Chiemsee', 'Achtsames Yoga am Chiemsee'),
    subtitle: t(
      'A small outdoor series in Übersee am Chiemsee. Grounding movement, breath and stillness — in the open air, in good company.',
      'Eine kleine Outdoor-Reihe in Übersee am Chiemsee. Erdende Bewegung, Atem und Stille — unter freiem Himmel, in guter Gesellschaft.'
    ),
    detailsTitle: t('Class details', 'Kursdetails'),
    labels: {
      when: t('When', 'Wann'),
      time: t('Time', 'Uhrzeit'),
      where: t('Where', 'Wo'),
      level: t('Level', 'Level'),
      capacity: t('Group size', 'Gruppengröße'),
      price: t('Price', 'Preis'),
      bring: t('What to bring', 'Was mitbringen'),
    },
    // ↓↓↓ PLACEHOLDERS — edit these with the real details ↓↓↓
    values: {
      when: t('[Saturdays & Sundays, late June 2026 — add exact dates]', '[Samstags & sonntags, Ende Juni 2026 — genaue Daten ergänzen]'),
      time: t('10:00 – 11:15 (please arrive 10 min early)', '10:00 – 11:15 Uhr (bitte 10 Min. früher da sein)'),
      where: t('[Studio / outdoor location, Übersee am Chiemsee — add address]', '[Studio / Outdoor-Ort, Übersee am Chiemsee — Adresse ergänzen]'),
      level: t('All levels welcome', 'Alle Level willkommen'),
      capacity: t('[Limited to XX participants]', '[Begrenzt auf XX Teilnehmende]'),
      price: t('[€XX per class]', '[XX € pro Kurs]'),
      bring: t('Your own mat, water and comfortable clothing', 'Eigene Matte, Wasser und bequeme Kleidung'),
    },
    includesTitle: t('What’s included', 'Was enthalten ist'),
    includes: [
      t('A 75-minute guided class outdoors', 'Eine 75-minütige geführte Klasse im Freien'),
      t('Breath work and a closing meditation', 'Atemarbeit und eine abschließende Meditation'),
      t('A small, welcoming group', 'Eine kleine, herzliche Gruppe'),
    ],
    registerTitle: t('Reserve your spot', 'Sichere dir deinen Platz'),
    registerBody: t(
      'Secure your place with payment below. You’ll receive a confirmation by email with the exact location and details.',
      'Sichere dir deinen Platz mit der Zahlung unten. Du erhältst eine Bestätigung per E-Mail mit dem genauen Ort und allen Details.'
    ),
    registerButton: t('Register & pay', 'Anmelden & bezahlen'),
    securedBy: t('Secure checkout powered by Stripe', 'Sichere Bezahlung über Stripe'),
    loading: t('Redirecting to secure checkout…', 'Weiterleitung zur sicheren Bezahlung…'),
    errorGeneric: t('Something went wrong. Please try again.', 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'),
    questions: t('Questions? Email', 'Fragen? Schreib an'),
  },

  success: {
    title: t('You’re in — see you on the mat', 'Du bist dabei — wir sehen uns auf der Matte'),
    body: t(
      'Thank you for registering. A confirmation is on its way to your inbox with the location and everything you need to know.',
      'Danke für deine Anmeldung. Eine Bestätigung mit dem Ort und allen wichtigen Infos ist auf dem Weg in dein Postfach.'
    ),
    cta: t('Back to home', 'Zurück zur Startseite'),
  },

  cancel: {
    title: t('Your spot isn’t reserved yet', 'Dein Platz ist noch nicht reserviert'),
    body: t(
      'No payment was taken. Whenever you’re ready, you can complete your registration.',
      'Es wurde keine Zahlung vorgenommen. Wann immer du bereit bist, kannst du deine Anmeldung abschließen.'
    ),
    cta: t('Back to registration', 'Zurück zur Anmeldung'),
  },
} as const
