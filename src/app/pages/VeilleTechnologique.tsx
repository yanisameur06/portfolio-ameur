import { Brain, Network, TrendingUp, Shield, Zap, DollarSign, ThumbsUp, ThumbsDown, ExternalLink, AlertCircle, Search, Rss, Youtube, Lightbulb } from "lucide-react";

export function VeilleTechnologique() {
  const timeline = [
    {
      period: "Début 2024",
      title: "SD-WAN s'impose comme alternative au MPLS",
      description: "Le SD-WAN remplace les liaisons MPLS, trop coûteuses et rigides. Les entreprises migrent vers des solutions software-defined pouvant combiner fibre, 4G/5G et ADSL. Cisco Meraki, Fortinet et VMware VeloCloud dominent le marché, avec un routage direct vers les clouds AWS, Azure et Google Cloud.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      period: "Mi-2024",
      title: "L'IA entre dans le pilotage réseau",
      description: "Les éditeurs intègrent l'AIOps dans leurs contrôleurs SD-WAN. Ces moteurs analysent le trafic en temps réel, apprennent les habitudes du réseau et anticipent les congestions avant qu'elles ne surviennent — sans intervention humaine.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      period: "Fin 2024",
      title: "Convergence SD-WAN & SASE",
      description: "Le modèle SASE fusionne le SD-WAN avec la sécurité cloud native : pare-feu as-a-service, ZTNA et Zero Trust. Chaque utilisateur est vérifié en permanence, quelle que soit sa localisation — idéal pour les télétravailleurs et les sites distants.",
      color: "from-green-500 to-emerald-600",
    },
    {
      period: "2025",
      title: "Réseaux autonomes & auto-réparation",
      description: "Les réseaux SD-WAN deviennent capables de se reconfigurer seuls en quelques secondes en cas de panne (self-healing). L'Intent-Based Networking permet à l'admin d'exprimer un objectif métier, et le réseau s'auto-configure pour l'atteindre.",
      color: "from-orange-500 to-amber-600",
    },
    {
      period: "2026 — Aujourd'hui",
      title: "SD-WAN nouvelle génération & collectivités",
      description: "Le SD-WAN est entièrement piloté par l'IA et s'intègre avec la 5G. Pour les collectivités territoriales, il permet d'interconnecter mairies, écoles et annexes sur un réseau intelligent, centralisé et sécurisé, à coût maîtrisé.",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const technologies = [
    { name: "Machine Learning", description: "Apprentissage des modèles de trafic", icon: Brain },
    { name: "Analyse prédictive", description: "Anticipation des problèmes", icon: TrendingUp },
    { name: "Automatisation", description: "Optimisation sans intervention humaine", icon: Zap },
  ];

  const solutions = [
    {
      name: "Cisco Meraki SD-WAN",
      description: "Solution cloud-based avec analyse IA pour routage intelligent et sécurité intégrée",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "VMware SD-WAN by Broadcom",
      description: "Optimisation avancée avec machine learning pour applications cloud et edge computing",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Fortinet FortiSD-WAN",
      description: "Sécurité intégrée avec IA pour détection des menaces et optimisation WAN",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Aruba EdgeConnect (HPE)",
      description: "Intelligence IA pour routage dynamique et visibilité réseau en temps réel",
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Versa Networks",
      description: "Plateforme SASE avec IA pour automatisation réseau et analytics avancés",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Palo Alto Prisma SD-WAN",
      description: "Solution SASE avec ML pour sécurité zero-trust et performance optimale",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const avantages = [
    { icon: Zap, title: "Optimisation automatique", description: "Routage intelligent du trafic en temps réel" },
    { icon: AlertCircle, title: "Détection des anomalies", description: "Identification rapide des menaces réseau" },
    { icon: DollarSign, title: "Réduction des coûts", description: "Optimisation de la bande passante" },
    { icon: TrendingUp, title: "Meilleure expérience", description: "Performances accrues pour les applications" },
    { icon: Shield, title: "Sécurité renforcée", description: "Protection proactive contre les menaces" },
    { icon: Network, title: "Agilité opérationnelle", description: "Déploiement rapide de nouveaux sites" },
  ];

  const desavantages = [
    { title: "Coût initial élevé", description: "Investissement important en licences et matériel" },
    { title: "Complexité technique", description: "Nécessite des compétences spécialisées" },
    { title: "Dépendance au cloud", description: "Connexion internet stable indispensable" },
    { title: "Migration complexe", description: "Transition depuis l'infrastructure existante" },
    { title: "Sécurité à gérer", description: "Nouveaux risques de cybersécurité" },
  ];

  const outils = [
    { name: "Google Alerts", description: "Notifications automatiques pour les nouveaux articles sur le SD-WAN et l'IA", icon: Search },
    { name: "Feedly", description: "Agrégateur de flux RSS pour suivre les blogs technologiques et médias spécialisés", icon: Rss },
    { name: "YouTube", description: "Chaînes spécialisées en réseaux et cybersécurité pour tutoriels et conférences", icon: Youtube },
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
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <div className="w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
          </div>

          {/* Animated Icon */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 transform hover:scale-110 hover:rotate-6 transition-all duration-500">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-7xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Veille Technologique
            </span>
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-6">SD-WAN avec l'IA</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            L'intelligence artificielle révolutionne la gestion des réseaux SD-WAN
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
        </div>

        {/* Introduction SD-WAN */}
        <div className="mb-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/30 group-hover:border-purple-400/50 transition-all duration-500 p-10 overflow-hidden shadow-2xl">
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
                  <Network className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Qu'est-ce que le SD-WAN ?
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed pl-20">
                Le SD-WAN est une technologie qui permet de gérer et optimiser les connexions réseau entre plusieurs sites distants d'une entreprise de manière intelligente. Il utilise des logiciels pour offrir plus de flexibilité et réduire les coûts.
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Timeline Évolution */}
        <div className="mb-20">
          <div className="text-center mb-12 relative">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">Évolution du SD-WAN</h3>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
              <p className="text-cyan-400 text-2xl font-bold">2024 → 2026</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <p className="text-gray-400 text-lg">Retour sur les grandes étapes qui ont marqué l'évolution du SD-WAN durant ma période d'alternance</p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-20 hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`group relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} w-full md:w-[calc(50%-2rem)]`}
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

        {/* L'IA au service du SD-WAN */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 relative">
              L'IA au service du SD-WAN
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              L'Intelligence Artificielle analyse le trafic en temps réel et prend des décisions automatiques pour améliorer les performances réseau
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>

          {/* Technologies clés */}
          <div className="relative mb-6">
            <h4 className="text-2xl font-bold text-white mb-8 text-center">Technologies clés :</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
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

        {/* Solutions SD-WAN avec IA */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Logiciels et Solutions SD-WAN avec IA
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Principales plateformes professionnelles intégrant l'intelligence artificielle pour optimiser les réseaux SD-WAN
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
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
                    <h4 className="font-bold text-white text-xl mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                      {solution.name}
                    </h4>
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
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Ces solutions utilisent le machine learning pour analyser le trafic réseau en temps réel, détecter les anomalies, optimiser les performances et automatiser la gestion WAN.
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
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
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
                  Veille quotidienne avec alertes automatiques sur les mots-clés : <span className="text-cyan-400 font-semibold">SD-WAN</span>, <span className="text-purple-400 font-semibold">IA réseau</span>, <span className="text-blue-400 font-semibold">cybersécurité</span>
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
                L'IA dans le SD-WAN représente une <span className="text-cyan-400 font-semibold">évolution majeure</span> pour les réseaux d'entreprise, offrant <span className="text-purple-400 font-semibold">automatisation</span>, <span className="text-blue-400 font-semibold">performance</span> et <span className="text-cyan-400 font-semibold">sécurité</span>.
              </p>

              {/* Quote Box */}
              <div className="relative group/quote mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover/quote:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8">
                  <div className="absolute top-4 left-4 text-6xl text-cyan-500/20 font-serif">"</div>
                  <p className="text-cyan-300 text-2xl md:text-3xl font-bold text-center relative z-10 leading-relaxed">
                    L'avenir des réseaux passe par l'automatisation intelligente et l'optimisation continue.
                  </p>
                  <div className="absolute bottom-4 right-4 text-6xl text-purple-500/20 font-serif rotate-180">"</div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="relative bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center italic">
                  En 2 ans, le SD-WAN est passé d'une simple alternative au MPLS à une <span className="text-blue-400 font-semibold not-italic">plateforme réseau intelligente</span>, sécurisée et autonome, au cœur des stratégies cloud des organisations modernes — y compris les collectivités territoriales.
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