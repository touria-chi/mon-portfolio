// ============================================================
//  TOUTES LES DONNÉES DU PORTFOLIO — modifiez uniquement ce fichier
//  Images : placez-les dans /public/images/ puis indiquez le nom du fichier.
//  Si une image est absente, un visuel de remplacement élégant s'affiche.
// ============================================================

// Nombre de badges Trailhead : à modifier ICI uniquement (utilisé partout)
export const TRAILHEAD_BADGES = 36;

export const profile = {
  name: "Touria Chiguer",
  photo: "images/photo.jpeg", // ← votre photo (public/images/photo.jpeg)
  email: "chiguertouria316@gmail.com",
  phone: "06 55 86 93 87",
  location: "Safi, Maroc",
  github: "https://github.com/touria-chi",
  trailhead: "https://www.salesforce.com/trailblazer/n9agsh8etg2ogh6sr6", // TODO: remplacez par VOTRE lien (ex: https://www.salesforce.com/trailblazer/votre-nom)
  linkedin: "https://www.linkedin.com/in/chiguer-touria/",
  cv: "cv.pdf", // le fichier doit exister dans public/cv.pdf
  goal: "Stage PFE de 6 mois — dès février 2027",
};

// Deux profils, un seul portfolio : le visiteur bascule d'un profil à l'autre.
export const modes = {
  dev: {
    label: "Développeuse Full-Stack",
    short: "Full-Stack",
    title: "Développeuse Full-Stack Java / React",
    tagline:
      "Je conçois des applications web complètes, de la base de données à l'interface, avec des API REST sécurisées et un code propre, testé et documenté.",
    roles: ["Java / Spring Boot", "React.js", "API REST sécurisées", "Docker & Git"],
    about:
      "Élève ingénieure en Génie Informatique et IA à l'ENSA Safi, j'ai livré plusieurs projets complets et effectué trois expériences en entreprise. Je tiens à un code propre, testé (JUnit 5, Mockito) et je souhaite approfondir l'architecture logicielle et les bonnes pratiques DevOps au sein d'une équipe technique.",
    stats: [
      { value: "+4", label: "projets complets" },
      { value: "3", label: "expériences en entreprise" },
      { value: "6", label: "mois de PFE visés" },
    ],
  },
  sf: {
    label: "Future consultante Salesforce",
    short: "Salesforce",
    title: "Future consultante Salesforce",
    tagline:
      "Passionnée par l'écosystème Salesforce, j'aborde le CRM côté configuration comme côté développement : Flow, objets, Apex, SOQL et LWC.",
    roles: ["Admin & Flow Builder", "Modèle de données", "Apex · SOQL · LWC", "CRM & automatisation"],
    about:
      "Mon profil Fullstack me permet de relever des cas concrets côté configuration comme côté développement. Avec " + TRAILHEAD_BADGES + " badges Trailhead (parcours Admin Beginner et Developer Beginner terminés, Admin Intermediate en cours), je vise la certification Salesforce Certified Administrator et j'ai hâte de rejoindre une équipe pour mon PFE 2027.",
    stats: [
      { value: String(TRAILHEAD_BADGES), label: "badges Trailhead" },
      { value: "2", label: "parcours terminés" },
      { value: "1", label: "certif. Admin visée" },
    ],
  },
};

export const education = [
  {
    period: "2024 — présent",
    title: "Cycle Ingénieur, Génie Informatique & IA",
    place: "ENSA Safi",
    desc: "Architecture logicielle, développement full-stack, intelligence artificielle, bases de données et DevOps.",
  },
  {
    period: "2022 — 2024",
    title: "Cycle Préparatoire Intégré",
    place: "ENSA Safi",
    desc: "Socle scientifique : mathématiques, physique et fondamentaux de l'informatique.",
  },
  {
    period: "2022",
    title: "Baccalauréat Sciences Physiques — mention Très Bien",
    place: "Lycée Moulay Ismail",
    desc: "",
  },
];

export const trailhead = {
  badges: TRAILHEAD_BADGES,
  level: "Mountaineer",
  paths: [
    { name: "Admin Beginner", status: "Terminé", done: true },
    { name: "Developer Beginner", status: "Terminé", done: true },
    { name: "Admin Intermediate", status: "En cours", done: false },
  ],
  goal: "Objectif : certification Salesforce Certified Administrator",
};

export const skills = [
  { group: "Salesforce & CRM", icon: "cloud", items: ["Salesforce Administration", "Sales Cloud", "Flow Builder", "Objets & relations", "Validation Rules", "Security & Sharing", "Reports & Dashboards", "Approval Processes"] },
  { group: "Backend & API", icon: "server", items: ["Java", "Spring Boot", "REST API", "Spring Data JPA", "Hibernate", "Django", "Laravel", "WebSocket"] },
  { group: "Frontend", icon: "monitor", items: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS"] },
  { group: "Bases de données", icon: "database", items: ["PostgreSQL", "MySQL", "Oracle SQL", "SQLite", "Firebase"] },
  { group: "Tests, sécurité & qualité", icon: "shield", items: ["JUnit 5", "Mockito", "Spring Boot Test", "Postman", "JWT", "Keycloak", "Clean Code"] },
  { group: "DevOps, IA & méthodes", icon: "flow", items: ["Git / GitHub", "Docker", "Linux", "Agile / Scrum", "Jira", "Python", "OpenCV", "TensorFlow"] },
];

// tags: "dev" et/ou "sf" → utilisé pour filtrer les projets
export const projects = [
  {
    title: "SalesFlow",
    subtitle: "Application CRM sur Salesforce",
    type: "Projet personnel · en cours",
    tags: ["sf"],
    featured: true, // affiche le nuage Salesforce sur la carte
    stack: ["Salesforce Lightning", "Flow Builder", "Reports & Dashboards", "Permission Sets", "Sharing Rules", "Custom Fields", "Record Types"],
    desc: "Conception et configuration d'une application CRM sur Salesforce permettant de gérer les comptes, contacts et opportunités commerciales. Personnalisation des objets, des champs et des interfaces Lightning, automatisation des processus métier avec Flow Builder et mise en place d'une gestion sécurisée des accès via Permission Sets, Roles et Sharing Rules. Création de rapports et tableaux de bord pour le suivi des performances commerciales.",
    points: [],
    image: "images/salesflow.png",
    github: "https://github.com/touria-chi", // TODO: lien exact du dépôt
  },
  {
    title: "Cabinet ophtalmologique",
    subtitle: "Agenda numérique",
    type: "Projet académique",
    tags: ["dev"],
    stack: ["Spring Boot", "React.js", "PostgreSQL", "JWT"],
    desc: "Gestion des rendez-vous avec trois espaces (médecin, secrétaire, administrateur) : patients, dossiers, ordonnances et facturation via une API REST sécurisée par JWT.",
    points: [],
    image: "images/ophtalmologue.jpeg",
    github: "https://github.com/touria-chi", // TODO
  },
  {
    title: "EcoRide",
    subtitle: "Application de covoiturage",
    type: "Projet académique",
    tags: ["dev"],
    stack: ["Microservices", "Spring Boot", "React.js", "MySQL"],
    desc: "Mise en relation de conducteurs et passagers pour réduire les coûts et les émissions de CO2, avec messagerie intégrée, API REST Spring Boot et interface React.js.",
    points: [],
    image: "images/ecoride.png",
    github: "https://github.com/touria-chi", // TODO
  },
  {
    title: "Code Arena",
    subtitle: "Plateforme d'apprentissage & réseau social",
    type: "Projet académique",
    tags: ["dev"],
    // NB : vos deux CV indiquent deux stacks différentes pour ce projet — ajustez si besoin.
    stack: ["Spring Boot", "React.js", "Docker", "PostgreSQL", "WebSocket"],
    desc: "Compétitions de programmation en ligne, profils, publication de projets et mise en relation entre apprenants, avec interactions en temps réel grâce à WebSocket.",
    points: [],
    image: "images/codearena.jpeg",
    github: "https://github.com/touria-chi", // TODO
  },
  {
    title: "AGORA-Campus",
    subtitle: "Gestion intelligente des absences",
    type: "Projet académique",
    tags: ["dev"],
    stack: ["Laravel", "Vue.js", "OpenCV", "MySQL"],
    desc: "Pointage automatique par reconnaissance faciale (OpenCV) et par QR code, avec tableau de bord administrateur et statistiques de présence en temps réel.",
    points: [],
    image: "images/agora campus.jpeg",
    github: "https://github.com/touria-chi", // TODO
  },
];

export const experiences = [
  {
    role: "Stagiaire développeuse Full-Stack",
    company: "Nexotek — Nexotek Clinique",
    url: "https://www.nexotek.ma", // TODO: vérifiez l'adresse exacte du site
    period: "Juil. — Sept. 2026",
    stack: ["React.js", "Spring Boot", "MySQL", "Keycloak"],
    points: [
      "Développement d'une application de gestion de cabinet médical, de la base de données à l'interface",
      "Authentification et gestion des accès par rôles avec Keycloak : chaque profil ne voit que ses données",
      "Travail en équipe sous Git, en démarche Agile",
    ],
  },
  {
    role: "Stagiaire développeuse Full-Stack",
    company: "Groupe OCP",
    url: "https://www.ocpgroup.ma",
    period: "Juil. — Sept. 2026",
    stack: ["React.js", "Spring Boot", "PostgreSQL"],
    points: [
      "Développement d'une application de gestion des ressources humaines",
      "Modélisation et exploitation de la base de données PostgreSQL",
    ],
  },
  {
    role: "Stage d'observation",
    company: "Groupe OCP, Safi",
    url: "https://www.ocpgroup.ma",
    period: "Août 2025", // NB : un de vos CV indique 2024
    stack: ["Django", "React.js", "SQLite"],
    points: [
      "Gestion des incidents informatiques : suivi des tickets, assignation automatique, tableau de bord analytique",
    ],
  },
];

export const certifications = [
  { name: "JavaScript Essentials", issuer: "Cisco", icon: "JS", color: "#22d3ee", link: "" },
  { name: "React JS Beginner", issuer: "SkillP", icon: "⚛", color: "#61dafb", link: "" }, // TODO: vérifiez le nom exact de la plateforme
  { name: "Introduction to Git", issuer: "SkillP", icon: "⎇", color: "#f97316", link: "" },
  { name: "Git Intermediate", issuer: "SkillP", icon: "⑂", color: "#fb7185", link: "" },
  { name: "Oracle Java Foundations", issuer: "Oracle", icon: "☕", color: "#f87171", link: "" },
  { name: "Oracle SQL Explorer", issuer: "Oracle", icon: "⛁", color: "#fbbf24", link: "" },
  { name: "Web, IA & Robotique/IoT", issuer: "YaneCode Academy", icon: "◈", color: "#a78bfa", link: "" },
  { name: `Trailhead — ${TRAILHEAD_BADGES} badges`, issuer: "Salesforce", icon: "☁", color: "#1798ff", link: profile.trailhead },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle", pct: 100 },
  { name: "Français", level: "C1", pct: 90 },
  { name: "Anglais", level: "B2", pct: 70 },
];

export const associations = [
  {
    role: "Fondatrice & Vice-Présidente",
    club: "Club Multi Talents",
    year: "2024",
    desc: "Création du club et animation d'ateliers de développement personnel et de créativité.",
    logo: "images/club-multitalents.png",
    icon: "✦",
  },
  {
    role: "Trésorière",
    club: "Club Byte Brigade — ENSA Safi",
    year: "",
    desc: "Gestion budgétaire des projets techniques du club.",
    logo: "images/club-bytebrigade.png",
    icon: "◈",
  },
  {
    role: "Membre active",
    club: "Club Speak Up — ENSA Safi",
    year: "",
    desc: "Débats et prise de parole en public.",
    logo: "images/club-speakup.png",
    icon: "❖",
  },
];

// ============================================================
//  BLOG — pour ajouter un article : copiez un bloc { ... } ci-dessous,
//  changez id / title / date / tag / contenu. Le plus récent en premier.
//  tag : "sf" (Salesforce) ou "dev" (Full-Stack)
//  Types de blocs : "p" (paragraphe), "h" (titre), "ul" / "ol" (listes), "tip" (encadré)
// ============================================================
export const posts = [
  {
    id: "premier-flow-salesforce",
    title: "Mon premier Flow Salesforce : une relance automatique de prospect",
    date: "2026-11-09",
    tag: "sf",
    level: "Débutant",
    readTime: "4 min",
    summary:
      "Flow Builder permet d'automatiser des tâches sans écrire une ligne de code. Pas à pas : créer une tâche de relance dès qu'un nouveau Lead arrive.",
    content: [
      { type: "p", text: "Quand on débute sur Salesforce, Flow Builder est l'un des outils les plus utiles à connaître. Il permet d'automatiser des processus métier avec une interface visuelle, sans code. Dans cet article, je construis mon premier Flow : à chaque nouveau prospect (Lead), Salesforce crée automatiquement une tâche de relance pour son propriétaire." },
      { type: "h", text: "Pourquoi cet exemple ?" },
      { type: "p", text: "C'est le problème que j'ai voulu résoudre dans mon projet SalesFlow : les PME reçoivent des demandes par téléphone, e-mail et site web, et les prospects finissent oubliés. Une relance automatique garantit qu'aucun Lead ne reste sans suite." },
      { type: "h", text: "Les 3 types de Flow à connaître" },
      { type: "ul", items: [
        "Screen Flow : affiche des écrans à l'utilisateur (formulaire guidé).",
        "Record-Triggered Flow : se déclenche quand un enregistrement est créé ou modifié (celui de cet article).",
        "Scheduled Flow : s'exécute à une date ou une fréquence donnée."
      ] },
      { type: "h", text: "Les étapes" },
      { type: "ol", items: [
        "Dans Setup (Configuration), cherchez « Flows » dans la barre de recherche rapide, puis cliquez sur New Flow.",
        "Choisissez Record-Triggered Flow.",
        "Objet : Lead. Déclencheur : A record is created (un enregistrement est créé).",
        "Dans Optimize the Flow for, choisissez Actions and Related Records, car on va créer une tâche liée.",
        "Cliquez sur le + puis ajoutez un élément Create Records.",
        "Créez d'abord une ressource de type Formula (Date) avec la formule {!$Flow.CurrentDate} + 3 : c'est la date d'échéance, trois jours après la création.",
        "Dans Create Records, choisissez l'objet Task et renseignez : Subject = « Relancer le prospect », Who ID = {!$Record.Id}, Assigned To ID = {!$Record.OwnerId}, Due Date = la formule créée.",
        "Cliquez sur Save, donnez un nom clair (par exemple « Lead – Relance automatique ») puis sur Activate."
      ] },
      { type: "tip", text: "Astuce : donnez toujours des noms explicites à vos Flows et à leurs éléments. Dans un vrai projet, c'est ce qui permet à toute l'équipe de s'y retrouver." },
      { type: "h", text: "Comment tester" },
      { type: "p", text: "Créez un nouveau Lead, puis ouvrez-le : dans l'onglet Activity, la tâche « Relancer le prospect » doit apparaître avec une échéance à J+3. Si rien n'apparaît, vérifiez que le Flow est bien activé et ouvrez Debug dans Flow Builder pour voir où il s'arrête." },
      { type: "h", text: "Ce que j'ai appris" },
      { type: "ul", items: [
        "Un Flow bien pensé remplace beaucoup de travail manuel.",
        "Il faut commencer petit, tester, puis enrichir (notifications, affectation automatique, conditions).",
        "Flow Builder ne remplace pas le code : pour les cas complexes, Apex reste nécessaire. C'est là que mon profil Full-Stack m'aide."
      ] },
      { type: "p", text: "Prochaine étape pour moi : ajouter une condition pour ne relancer que les Leads d'une certaine source, puis envoyer une notification au commercial." }
    ],
  },
];