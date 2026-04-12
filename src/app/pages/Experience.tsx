import { Building2, Target, FileText } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [activeTab, setActiveTab] = useState<"environnement" | "mission" | "procedure">("environnement");

  const tabs = [
    { id: "environnement" as const, label: "Environnement", icon: Building2 },
    { id: "mission" as const, label: "Mission", icon: Target },
    { id: "procedure" as const, label: "Procédure", icon: FileText },
  ];

  return (
    <div className="w-full py-12 px-4 relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Radial Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <h1 className="text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Mon Expérience
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-8">
            Parcours professionnel et académique acquis durant ma formation
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center gap-3 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/50 scale-105"
                      : "bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/30 text-gray-300 hover:border-cyan-400/50 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                  )}
                  <Icon className={`w-6 h-6 relative z-10 ${isActive ? "text-white" : "text-cyan-400"}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === "environnement" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-10 border-2 border-blue-500/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-white">Entreprise d'Accueil</h2>
                  </div>

                  {/* Company Info */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">HdTechSolution</h3>
                    <p className="text-gray-400 mb-6">Alternance en tant que Technicien Infrastructure • 2024 - 2026</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      HdTechSolution est une entreprise spécialisée dans les services informatiques pour les collectivités territoriales et les établissements publics.
                    </p>
                  </div>

                  {/* Environment Details */}
                  <div className="max-w-2xl">
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Infrastructure
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Serveurs Windows Server 2025</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Virtualisation VMware / Hyper-V</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Active Directory et services réseau</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Infrastructure réseau (switch, routeurs)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mission" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-10 border-2 border-blue-500/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-white">Missions & Réalisations</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Infrastructure Réseau */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                      <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🌐</span>
                        </div>
                        Infrastructure Réseau
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Installation et configuration de switch pour améliorer la segmentation réseau</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Configuration de routeurs en points d'accès WiFi avec filtrage MAC</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Configuration complète de switch : ports, VLAN, paramètres généraux</span>
                        </li>
                      </ul>
                    </div>

                    {/* Système & Migration */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                      <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">💻</span>
                        </div>
                        Système & Migration
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Migration de postes Windows 10 vers Windows 11 via WAPT</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Migration de serveurs physiques et transfert de données</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Remplacement de barrettes RAM sur serveurs Dell EMC</span>
                        </li>
                      </ul>
                    </div>

                    {/* Virtualisation */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                      <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">☁️</span>
                        </div>
                        Virtualisation
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Création et déploiement de machines virtuelles</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Mise à jour de serveurs et transfert de VM vers serveur de redondance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Gestion de l'infrastructure VMware / Hyper-V</span>
                        </li>
                      </ul>
                    </div>

                    {/* Support & Gestion */}
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
                      <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎫</span>
                        </div>
                        Support & Gestion
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Installation et configuration de GLPI pour la gestion des tickets</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Support technique auprès des utilisateurs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Documentation des procédures techniques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "procedure" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-10 border-2 border-blue-500/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>
                
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-white">Procédures Techniques</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Documentation des procédures réalisées durant mon alternance <span className="text-cyan-400 font-semibold">(10 procédures)</span>
                  </p>

                  {/* Procedures Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Procédure création de VM Windows Server 2025",
                      "Procédure configuration réseau en PowerShell",
                      "Procédure joindre une VM au domaine et configuration réseau (Windows Server 2025)",
                      "Procédure installation DHCP",
                      "Procédure installation service fichier",
                      "Procédure installation service mail Exchange",
                      "Procédure installation PingCastle",
                      "Procédure installation HardenAD",
                      "Procédure deployment OS avec WAPT",
                      "Procédure télécharger, créer ou mettre à jour un paquet avec WAPT",
                    ].map((procedure, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/40 group-hover:border-cyan-400/60 transition-all">
                            <FileText className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                              {procedure}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 backdrop-blur-sm">
                    <p className="text-gray-300 text-center flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">Les fichiers de procédures seront ajoutés prochainement</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
