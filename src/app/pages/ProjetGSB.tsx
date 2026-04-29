import { Building2, Network, Server, Shield, Database, Settings, FileText, GitBranch, CloudCog } from "lucide-react";

export function ProjetGSB() {
  const vlans = [
    { id: "10", nom: "Réseau & Système", ip: "192.168.10.0/24", color: "from-blue-500 to-cyan-600" },
    { id: "20", nom: "Direction / DSI", ip: "192.168.20.0/24", color: "from-purple-500 to-indigo-600" },
    { id: "30", nom: "RH / Compta / Juridique", ip: "192.168.30.0/24", color: "from-green-500 to-emerald-600" },
    { id: "40", nom: "Communication / Rédaction", ip: "192.168.40.0/24", color: "from-orange-500 to-amber-600" },
    { id: "50", nom: "Développement", ip: "192.168.50.0/24", color: "from-pink-500 to-rose-600" },
    { id: "60", nom: "Commercial", ip: "192.168.60.0/24", color: "from-cyan-500 to-blue-600" },
    { id: "150", nom: "Visiteurs", ip: "192.168.150.0/24", color: "from-red-500 to-orange-600" },
    { id: "300", nom: "Serveurs", ip: "172.16.0.0/17", color: "from-indigo-500 to-purple-600" },
    { id: "400", nom: "Sortie Internet", ip: "172.18.0.0/30", color: "from-slate-500 to-gray-600" },
  ];

  const servicesImplementes = [
    {
      nom: "GLPI - Gestion de Parc",
      description: "Système de gestion de parc informatique et helpdesk pour le suivi des équipements et incidents",
      icon: Settings,
      color: "from-blue-500 to-cyan-600",
      details: [
        "Gestion centralisée du parc informatique (350+ équipements)",
        "Système de ticketing pour le support technique",
        "Suivi des licences et inventaire automatisé",
        "Base de données des équipements et utilisateurs"
      ]
    },
    {
      nom: "FTPS - Serveur de Fichiers Sécurisé",
      description: "Serveur FTP sécurisé (FTPS) pour le transfert de fichiers sensibles entre services",
      icon: Database,
      color: "from-purple-500 to-indigo-600",
      details: [
        "Transfert sécurisé de fichiers avec chiffrement SSL/TLS",
        "Gestion des droits d'accès par service/utilisateur",
        "Partage de documents entre visiteurs et siège parisien",
        "Sauvegarde et archivage des données stratégiques"
      ]
    }
  ];

  const infrastructure = [
    {
      nom: "Routage & Switching",
      items: [
        "Routeur Cisco 2921 (RTROUT) - Accès Internet",
        "Switch L3 Cisco 3750 (MUTLAB) - Routage inter-VLAN et ACL",
        "2x Switches Cisco 2960 - Distribution services",
        "Trunk inter-switches pour tous les VLANs"
      ],
      icon: Network,
      color: "from-blue-500 to-cyan-600"
    },
    {
      nom: "Serveurs & Virtualisation",
      items: [
        "Serveur HP avec Proxmox - Hyperviseur",
        "100+ serveurs virtuels sur 45 serveurs physiques",
        "Active Directory - Annuaire centralisé",
        "DNS/DHCP - Services réseau de base",
        "Serveurs applicatifs métiers"
      ],
      icon: Server,
      color: "from-purple-500 to-indigo-600"
    },
    {
      nom: "Sécurité & Segmentation",
      items: [
        "Segmentation réseau par VLANs",
        "ACL sur switch L3 pour contrôle d'accès",
        "Proxy transparent (ProxSILAB) pour logs Internet",
        "Accès WiFi visiteurs isolé (VLAN 150)",
        "Réplication quotidienne des données aux USA"
      ],
      icon: Shield,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="w-full py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 animate-fade-in opacity-0">
            <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
          <h1 className="text-6xl font-bold mb-6 relative animate-slide-down opacity-0 animation-delay-100">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Projet GSB
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in opacity-0 animation-delay-200">
            Galaxy Swiss Bourdin - Infrastructure Réseau
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up opacity-0 animation-delay-300">
            Déploiement d'une infrastructure réseau complète pour un laboratoire pharmaceutique
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6 animate-scale-in opacity-0 animation-delay-400"></div>
        </div>

        {/* Contexte Entreprise */}
        <div className="mb-16 relative group animate-slide-up opacity-0 animation-delay-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-500 p-10 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <img
                src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Pharmaceutical Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Building2 className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Contexte du Projet
                </h3>
              </div>

              <div className="space-y-6 pl-20">
                <div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">L'Entreprise</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Galaxy Swiss Bourdin (GSB) est un laboratoire pharmaceutique issu de la fusion entre le géant américain <span className="text-blue-400 font-semibold">Galaxy</span> (spécialisé dans les maladies virales) et le conglomérat européen <span className="text-purple-400 font-semibold">Swiss Bourdin</span>. Le siège administratif Europe est situé à Paris avec <span className="text-cyan-400 font-semibold">480 visiteurs médicaux</span> en France métropolitaine.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">Objectifs du Projet</h4>
                  <ul className="space-y-2 text-gray-300 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Moderniser l'infrastructure réseau du siège parisien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Segmenter le réseau par services avec VLANs pour optimiser le trafic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Sécuriser les communications et protéger les données stratégiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Améliorer le suivi de l'activité des visiteurs médicaux sur le terrain</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="text-blue-400 font-semibold">Envergure :</span> 350+ équipements terminaux, 45 serveurs physiques, 100+ serveurs virtuels, segmentation en 9 VLANs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Implémentés */}
        <div className="mb-16">
          <div className="text-center mb-12 relative animate-slide-down opacity-0 animation-delay-600">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Services Implémentés
            </h3>
            <p className="text-gray-300 text-lg">
              Les services que j'ai déployés et configurés dans le cadre du projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesImplementes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.nom}
                  className="group relative animate-scale-in opacity-0"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/20 group-hover:border-cyan-400/60 transition-all duration-500 p-8 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                      backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {service.nom}
                        </h4>
                      </div>

                      <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-5 h-5 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-cyan-500/40 transition-all border border-cyan-500/30">
                              <span className="text-cyan-400 text-xs">✓</span>
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure */}
        <div className="mb-16">
          <div className="text-center mb-12 relative animate-fade-in opacity-0 animation-delay-900">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Infrastructure Technique
            </h3>
            <p className="text-gray-300 text-lg">
              Architecture réseau et équipements déployés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {infrastructure.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.nom}
                  className="group relative animate-slide-up opacity-0"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/20 group-hover:border-cyan-400/60 transition-all duration-500 p-8 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {category.nom}
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                            <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VLANs */}
        <div className="mb-16">
          <div className="text-center mb-12 relative animate-slide-down opacity-0" style={{ animationDelay: '1300ms' }}>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Segmentation Réseau (VLANs)
            </h3>
            <p className="text-gray-300 text-lg">
              Organisation du réseau par services avec isolation et contrôle d'accès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vlans.map((vlan, index) => (
              <div
                key={vlan.id}
                className="group relative animate-scale-in opacity-0"
                style={{ animationDelay: `${1400 + index * 80}ms` }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${vlan.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-2xl border border-blue-500/20 group-hover:border-cyan-400/50 transition-all duration-500 p-6 overflow-hidden hover:shadow-xl hover:shadow-blue-500/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${vlan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-4 py-2 bg-gradient-to-r ${vlan.color} rounded-lg font-bold text-white shadow-lg`}>
                        VLAN {vlan.id}
                      </div>
                      <GitBranch className="w-5 h-5 text-cyan-400" />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {vlan.nom}
                    </h4>
                    <p className="text-cyan-400 text-sm font-mono bg-slate-800/50 px-3 py-2 rounded-lg border border-cyan-500/30">
                      {vlan.ip}
                    </p>

                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${vlan.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-500 p-6 overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Règles de sécurité :</span> Chaque VLAN peut accéder uniquement aux VLANs "Serveurs" et "Sortie". Le VLAN Visiteurs est isolé avec accès limité aux services DNS/DHCP et Internet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences Acquises */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-[3rem] border border-purple-500/40 group-hover:border-cyan-400/60 transition-all duration-700 p-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <CloudCog className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center">
                Compétences Acquises
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/30 p-6 hover:border-cyan-400/50 transition-all">
                  <h4 className="text-xl font-bold text-cyan-400 mb-4">Réseau & Infrastructure</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Configuration de VLANs et routage inter-VLAN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Configuration switches Cisco (2960, 3750)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Mise en place d'ACL pour sécurisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Configuration trunk et segmentation réseau</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/5 rounded-2xl border border-purple-500/30 p-6 hover:border-purple-400/50 transition-all">
                  <h4 className="text-xl font-bold text-purple-400 mb-4">Système & Services</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Déploiement GLPI pour gestion de parc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Configuration serveur FTPS sécurisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Virtualisation avec Proxmox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Administration Active Directory</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6 text-center">
                <p className="text-gray-200 text-lg leading-relaxed">
                  Ce projet m'a permis de mettre en pratique mes compétences en <span className="text-blue-400 font-semibold">architecture réseau</span>, <span className="text-cyan-400 font-semibold">segmentation VLAN</span>, <span className="text-purple-400 font-semibold">virtualisation</span> et <span className="text-indigo-400 font-semibold">déploiement de services</span> dans un contexte professionnel réaliste.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-b-[3rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
