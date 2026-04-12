import { Server, HardDrive, Network, Terminal, Briefcase, TicketCheck } from "lucide-react";

export function Outils() {
  const stats = [
    { number: "10", label: "Outils maîtrisés", color: "from-blue-500 to-cyan-600" },
    { number: "5", label: "Catégories", color: "from-purple-500 to-indigo-600" },
    { number: "6", label: "Niveau intermédiaire", color: "from-green-500 to-emerald-600" },
    { number: "4", label: "En apprentissage", color: "from-orange-500 to-amber-600" },
  ];

  const categories = [
    {
      name: "Système",
      icon: Server,
      color: "from-blue-500 to-cyan-600",
      outils: [
        {
          name: "Windows Server",
          description: "Administration de serveurs Windows, Active Directory, DNS, DHCP",
          niveau: "Intermédiaire",
          niveauColor: "blue",
        },
        {
          name: "Active Directory",
          description: "Gestion des utilisateurs, groupes, GPO, droits d'accès",
          niveau: "Intermédiaire",
          niveauColor: "blue",
        },
        {
          name: "Linux / Debian",
          description: "Administration de base, commandes shell, gestion de services",
          niveau: "Débutant",
          niveauColor: "orange",
        },
      ],
    },
    {
      name: "Virtualisation",
      icon: HardDrive,
      color: "from-purple-500 to-indigo-600",
      outils: [
        {
          name: "VMware / Hyper-V",
          description: "Création et gestion de machines virtuelles, snapshots, migration",
          niveau: "Intermédiaire",
          niveauColor: "blue",
        },
        {
          name: "Proxmox",
          description: "Plateforme de virtualisation open-source pour VMs et conteneurs",
          niveau: "Débutant",
          niveauColor: "orange",
        },
      ],
    },
    {
      name: "Réseau",
      icon: Network,
      color: "from-green-500 to-emerald-600",
      outils: [
        {
          name: "Cisco Packet Tracer",
          description: "Configuration de switch et routeurs Cisco, VLAN, routage",
          niveau: "Intermédiaire",
          niveauColor: "blue",
        },
        {
          name: "Wireshark",
          description: "Analyse de trames réseau, diagnostic de problèmes de connectivité",
          niveau: "Débutant",
          niveauColor: "orange",
        },
        {
          name: "PuTTY",
          description: "Client SSH/Telnet pour connexion à distance aux serveurs",
          niveau: "Intermédiaire",
          niveauColor: "blue",
        },
      ],
    },
    {
      name: "Scripting",
      icon: Terminal,
      color: "from-cyan-500 to-blue-600",
      outils: [
        {
          name: "PowerShell",
          description: "Automatisation de tâches d'administration système Windows",
          niveau: "Débutant",
          niveauColor: "orange",
        },
      ],
    },
    {
      name: "Ticketing",
      icon: TicketCheck,
      color: "from-pink-500 to-rose-600",
      outils: [
        {
          name: "GLPI",
          description: "Gestion des incidents et demandes utilisateurs",
          niveau: "Intermédiaire",
          niveauColor: "blue",
        },
      ],
    },
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
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
          <h1 className="text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Outils & Technologies
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Les outils et technologies que j'utilise au quotidien
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-500 p-6 text-center overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

              {/* Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Catégories d'outils */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:shadow-cyan-500/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">{category.name}</h2>
                    <div className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-2 w-0 group-hover:w-32 transition-all duration-500`}></div>
                  </div>
                  <div className={`hidden md:block h-px flex-1 bg-gradient-to-r ${category.color} opacity-20`}></div>
                </div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.outils.map((outil, index) => (
                    <div
                      key={outil.name}
                      className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-500 p-6 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                      style={{ animationDelay: `${categoryIndex * 100 + index * 50}ms` }}
                    >
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>

                      {/* Glowing Corner */}
                      <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-bold text-white text-xl flex-1 group-hover:text-cyan-400 transition-colors duration-300">{outil.name}</h3>
                          <span
                            className={`
                              px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider
                              transition-all duration-300 group-hover:scale-110
                              ${
                                outil.niveauColor === "blue"
                                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/40 group-hover:bg-blue-500/30 group-hover:border-blue-400/60 shadow-lg shadow-blue-500/20"
                                  : "bg-orange-500/20 text-orange-300 border border-orange-500/40 group-hover:bg-orange-500/30 group-hover:border-orange-400/60 shadow-lg shadow-orange-500/20"
                              }
                            `}
                          >
                            {outil.niveau}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{outil.description}</p>

                        {/* Bottom Accent Line */}
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}