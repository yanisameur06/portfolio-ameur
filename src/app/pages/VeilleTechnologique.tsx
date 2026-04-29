import { Brain, Network, TrendingUp, Shield, Zap, DollarSign, ThumbsUp, ThumbsDown, ExternalLink, AlertCircle, Search, Rss, Youtube, Lightbulb, UserCheck, Monitor, Lock, GitBranch, BarChart3, CloudOff } from "lucide-react";

export function VeilleTechnologique() {
  const timeline = [
    {
      period: "2024",
      title: "Généralisation du Zero Trust dans les entreprises",
      description: "Face à l'augmentation des cyberattaques (ransomwares, phishing), les entreprises adoptent massivement le Zero Trust. Les solutions IAM (Identity and Access Management) comme Okta et Microsoft Entra ID deviennent des standards. La Commission européenne intègre ces principes dans le cadre NIS2.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      period: "2024",
      title: "Zero Trust & IA : détection comportementale",
      description: "L'intelligence artificielle s'intègre au Zero Trust via l'analyse comportementale (UEBA). Les systèmes détectent automatiquement les comportements anormaux d'un utilisateur et bloquent l'accès en temps réel, sans intervention humaine.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      period: "2025",
      title: "Zero Trust Network Access (ZTNA) remplace les VPN",
      description: "Le ZTNA s'impose comme le successeur du VPN traditionnel. L'accès aux ressources est accordé application par application, avec vérification continue de l'identité et de l'état de l'appareil. Zscaler, Cloudflare Access et Palo Alto Prisma Access dominent ce segment.",
      color: "from-green-500 to-emerald-600",
    },
    {
      period: "2025",
      title: "Convergence Zero Trust & SASE",
      description: "Le modèle SASE (Secure Access Service Edge) fusionne la sécurité Zero Trust avec la connectivité réseau. Les PME et collectivités accèdent à des architectures de sécurité complètes en mode cloud, sans infrastructure lourde on-premise.",
      color: "from-orange-500 to-amber-600",
    },
    {
      period: "2026",
      title: "Zero Trust for OT & infrastructures critiques",
      description: "Le Zero Trust s'étend aux réseaux industriels (OT/IoT) : hôpitaux, collectivités, systèmes SCADA. La micro-segmentation réseau et l'authentification forte protègent désormais des environnements auparavant isolés et vulnérables.",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const technologies = [
    { name: "Identité & Authentification", description: "MFA obligatoire, SSO, vérification continue de l'identité", icon: UserCheck },
    { name: "Conformité des appareils", description: "Évaluation des terminaux avant autorisation d'accès", icon: Monitor },
    { name: "Accès minimal (PoLP)", description: "Principe du moindre privilège pour chaque utilisateur", icon: Lock },
    { name: "Micro-segmentation réseau", description: "Réseau découpé en zones isolées pour bloquer la propagation", icon: GitBranch },
    { name: "Surveillance & journalisation", description: "Tous les accès enregistrés et analysés en continu (SIEM)", icon: BarChart3 },
    { name: "Protection des données", description: "Chiffrement de bout en bout et classification automatique", icon: CloudOff },
  ];

  const solutions = [
    {
      name: "Microsoft Entra ID",
      description: "IAM cloud avec accès conditionnel, MFA et intégration Azure AD. Standard dans les environnements Windows",
      color: "from-blue-500 to-cyan-600",
      category: "IAM / MFA",
    },
    {
      name: "Zscaler Private Access",
      description: "ZTNA cloud-native remplaçant le VPN. Accès granulaire aux applications sans exposer le réseau",
      color: "from-purple-500 to-indigo-600",
      category: "ZTNA",
    },
    {
      name: "Cloudflare Access",
      description: "Solution ZTNA avec reverse proxy sécurisé. Idéal pour les PME et les environnements multi-cloud",
      color: "from-green-500 to-emerald-600",
      category: "ZTNA / SASE",
    },
    {
      name: "Palo Alto Prisma Access",
      description: "Plateforme SASE intégrant Zero Trust, firewall cloud et protection avancée des menaces",
      color: "from-orange-500 to-amber-600",
      category: "SASE / Zero Trust",
    },
    {
      name: "Okta Identity Cloud",
      description: "Leader de l'IAM avec SSO, MFA adaptatif et vérification contextuelle pour chaque connexion",
      color: "from-pink-500 to-rose-600",
      category: "IAM / SSO",
    },
    {
      name: "Fortinet FortiNAC",
      description: "Contrôle d'accès réseau avec profilage des appareils et micro-segmentation automatisée",
      color: "from-cyan-500 to-blue-600",
      category: "NAC / Segmentation",
    },
  ];

  const avantages = [
    { icon: Shield, title: "Réduction de la surface d'attaque", description: "Grâce à la micro-segmentation réseau" },
    { icon: CloudOff, title: "Adapté au télétravail", description: "Et aux environnements cloud hybrides" },
    { icon: AlertCircle, title: "Détection rapide des incidents", description: "Grâce à la surveillance continue" },
    { icon: DollarSign, title: "Conformité facilitée", description: "Aux réglementations NIS2, RGPD, HDS" },
    { icon: TrendingUp, title: "Scalabilité", description: "S'adapte à toute taille d'organisation" },
  ];

  const desavantages = [
    { title: "Complexité de mise en œuvre", description: "Surtout dans les environnements legacy" },
    { title: "Coût initial élevé", description: "Licences, formation et refonte de l'architecture" },
    { title: "Risque de friction utilisateur", description: "Si les politiques sont trop restrictives" },
    { title: "Dépendance aux fournisseurs cloud", description: "Pour les solutions SaaS" },
    { title: "Gouvernance continue nécessaire", description: "Des identités et des accès" },
  ];

  const outils = [
    { name: "Google Alerts", description: "Notifications automatiques pour les nouveaux articles sur le Zero Trust et la cybersécurité", icon: Search },
    { name: "Feedly", description: "Agrégateur de flux RSS pour suivre les blogs spécialisés en sécurité informatique et Zero Trust", icon: Rss },
    { name: "YouTube", description: "Chaînes spécialisées en cybersécurité, Zero Trust et architectures ZTNA/SASE", icon: Youtube },
  ];

  return (
    <div className="w-full py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 animate-fade-in opacity-0">
            <div className="w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
          </div>

          {/* Animated Icon */}
          <div className="relative inline-block mb-8 animate-scale-in opacity-0 animation-delay-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 transform hover:scale-110 hover:rotate-6 transition-all duration-500">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-7xl font-bold mb-8 relative animate-slide-down opacity-0 animation-delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Veille Technologique
            </span>
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6 animate-fade-in opacity-0 animation-delay-300">Cybersécurité & Zero Trust</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 animation-delay-400">
            Vers un modèle de sécurité réseau où aucun utilisateur, appareil ou service n'est considéré comme fiable par défaut
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 animate-scale-in opacity-0 animation-delay-500">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        {/* Introduction Zero Trust */}
        <div className="mb-20 relative group animate-fade-in opacity-0 animation-delay-600">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/30 group-hover:border-purple-400/50 transition-all duration-500 p-10 overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Cybersecurity"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>

            {/* Floating Orbs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Qu'est-ce que le Zero Trust ?
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed pl-20">
                Le Zero Trust est un modèle de sécurité informatique basé sur le principe "ne jamais faire confiance, toujours vérifier". Contrairement aux approches traditionnelles qui sécurisent le périmètre réseau, le Zero Trust considère que chaque accès doit être authentifié et autorisé, qu'il vienne de l'intérieur ou de l'extérieur du réseau. Ce paradigme est devenu incontournable avec l'essor du cloud, du télétravail et des cyberattaques ciblées.
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Timeline Évolution */}
        <div className="mb-20 animate-slide-up opacity-0 animation-delay-700">
          <div className="text-center mb-12 relative">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">Évolution du Zero Trust</h3>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
              <p className="text-cyan-400 text-2xl font-bold">2024 → 2026</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <p className="text-gray-400 text-lg">Retour sur les avancées marquantes du Zero Trust durant la période de veille</p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-20 hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`group relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} w-full md:w-[calc(50%-2rem)] animate-slide-up opacity-0`}
                  style={{ animationDelay: `${800 + index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-auto md:right-[-2.5rem] top-8 w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 z-20 group-hover:scale-150 transition-transform duration-500 hidden md:block" style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-2.5rem'
                  }}></div>

                  {/* Card */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-2xl border border-blue-500/20 group-hover:border-cyan-400/60 transition-all duration-500 p-8 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>

                      {/* Floating Orb */}
                      <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>

                      <div className="relative z-10">
                        {/* Period Badge */}
                        <div className="inline-flex items-center mb-5">
                          <div className={`px-5 py-2.5 bg-gradient-to-r ${item.color} rounded-xl font-bold text-white shadow-2xl group-hover:scale-105 transition-transform duration-300`}>
                            {item.period}
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>

                        {/* Bottom Accent Line */}
                        <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-700 rounded-full shadow-lg`}></div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Zero Trust */}
        <div className="mb-20">
          <div className="text-center mb-16 relative animate-fade-in opacity-0" style={{ animationDelay: '1500ms' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 relative">
              Les Piliers du Zero Trust
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              6 composantes fondamentales qui structurent une architecture Zero Trust
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>

          {/* Technologies clés */}
          <div className="relative mb-6">
            <h4 className="text-2xl font-bold text-white mb-8 text-center">Architecture Zero Trust :</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-scale-in opacity-0"
                  style={{ animationDelay: `${1600 + index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 p-10 text-center hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                      backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}></div>

                    {/* Floating Orbs */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="font-bold text-white text-2xl mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {tech.name}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {tech.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Solutions Zero Trust */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-slide-down opacity-0" style={{ animationDelay: '2000ms' }}>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Logiciels & Plateformes Zero Trust
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Les principales solutions professionnelles adoptées en entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative animate-slide-up opacity-0"
                style={{ animationDelay: `${2100 + index * 100}ms` }}
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${solution.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/20 group-hover:border-cyan-400/60 transition-all duration-500 p-8 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 h-full">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>

                  {/* Floating Orbs */}
                  <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
                  <div className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr ${solution.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Network className="w-6 h-6 text-white" />
                      </div>
                      <div className={`h-px flex-1 bg-gradient-to-r ${solution.color} opacity-30`}></div>
                    </div>

                    {/* Content */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-bold text-white text-xl group-hover:text-cyan-400 transition-colors duration-300 leading-tight flex-1">
                        {solution.name}
                      </h4>
                      <span className="px-3 py-1 bg-blue-500/20 text-cyan-400 rounded-lg text-xs font-semibold border border-blue-500/30 whitespace-nowrap">
                        {solution.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {solution.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${solution.color} w-0 group-hover:w-full transition-all duration-700 rounded-full shadow-lg`}></div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Ces solutions implémentent les principes du Zero Trust : authentification continue, accès minimal, micro-segmentation et surveillance en temps réel pour une sécurité optimale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Avantages & Désavantages */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Analyse Critique</h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Avantages */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-green-500/30 p-8 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-5">
                  <img
                    src="https://images.unsplash.com/photo-1633265486064-086b219458ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    alt="Security Success"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.1) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>

                {/* Header */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <ThumbsUp className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Avantages</h4>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
                </div>

                {/* List */}
                <div className="relative z-10 space-y-5">
                  {avantages.map((avantage, index) => {
                    const Icon = avantage.icon;
                    return (
                      <div
                        key={index}
                        className="group/item relative bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl border border-green-500/20 hover:border-green-400/60 transition-all duration-500 p-5 hover:scale-[1.03] overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover/item:from-green-500/10 group-hover/item:to-emerald-500/10 transition-all duration-500"></div>
                        <div className="relative z-10 flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl shadow-green-500/40 group-hover/item:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-white text-lg mb-2 group-hover/item:text-green-400 transition-colors">{avantage.title}</h5>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">{avantage.description}</p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 w-0 group-hover/item:w-full transition-all duration-500"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Désavantages */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-red-500/30 p-8 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-5">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    alt="Challenges"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.1) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>

                {/* Header */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <ThumbsDown className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Désavantages</h4>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                </div>

                {/* List */}
                <div className="relative z-10 space-y-5">
                  {desavantages.map((desavantage, index) => (
                    <div
                      key={index}
                      className="group/item relative bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-2xl border border-red-500/20 hover:border-red-400/60 transition-all duration-500 p-5 hover:scale-[1.03] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover/item:from-red-500/10 group-hover/item:to-orange-500/10 transition-all duration-500"></div>
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl shadow-red-500/40 group-hover/item:scale-110 transition-transform duration-300">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-white text-lg mb-2 group-hover/item:text-red-400 transition-colors">{desavantage.title}</h5>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">{desavantage.description}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 w-0 group-hover/item:w-full transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outils de veille */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Outils de Veille Utilisés
            </h3>
            <p className="text-gray-300 text-lg">Logiciels et plateformes que j'utilise pour effectuer ma veille technologique</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {outils.map((outil, index) => {
              const Icon = outil.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-scale-in opacity-0"
                  style={{ animationDelay: `${2700 + index * 100}ms` }}
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-500 p-8 text-center hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden h-full">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                      backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}></div>

                    {/* Floating Orb */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="font-bold text-white text-2xl mb-3 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {outil.name}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {outil.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Banner */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-500 p-8 overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Veille quotidienne avec alertes automatiques sur les mots-clés : <span className="text-cyan-400 font-semibold">Zero Trust</span>, <span className="text-purple-400 font-semibold">ZTNA</span>, <span className="text-blue-400 font-semibold">cybersécurité</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="relative group">
          {/* Mega Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>

          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-[3rem] border border-purple-500/40 group-hover:border-cyan-400/60 transition-all duration-700 p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>

            {/* Floating Orbs */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-10">
                Conclusion
              </h3>

              {/* Separator */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-blue-500"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-cyan-500 to-blue-500"></div>
              </div>

              {/* Main Text */}
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed mb-10 max-w-4xl mx-auto">
                Le Zero Trust représente une <span className="text-cyan-400 font-semibold">évolution fondamentale</span> de la cybersécurité, offrant <span className="text-purple-400 font-semibold">protection renforcée</span>, <span className="text-blue-400 font-semibold">conformité</span> et <span className="text-cyan-400 font-semibold">scalabilité</span>.
              </p>

              {/* Quote Box */}
              <div className="relative group/quote mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover/quote:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8">
                  <div className="absolute top-4 left-4 text-6xl text-cyan-500/20 font-serif">"</div>
                  <p className="text-cyan-300 text-2xl md:text-3xl font-bold text-center relative z-10 leading-relaxed">
                    Ne jamais faire confiance, toujours vérifier : le principe fondamental du Zero Trust.
                  </p>
                  <div className="absolute bottom-4 right-4 text-6xl text-purple-500/20 font-serif rotate-180">"</div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="relative bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center italic">
                  Face à l'augmentation des cyberattaques et l'évolution du travail hybride, le Zero Trust s'impose comme le <span className="text-blue-400 font-semibold not-italic">nouveau standard de sécurité</span>, protégeant aussi bien les PME que les infrastructures critiques et les collectivités territoriales.
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-b-[3rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}