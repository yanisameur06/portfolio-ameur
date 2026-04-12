import { Network, Server, Cloud, Shield, Headphones, Check, Award, Target, BookOpen } from "lucide-react";

export function Competences() {
  const competences = [
    {
      category: "Infrastructure Réseau",
      icon: Network,
      count: 5,
      bgImage: "https://images.unsplash.com/photo-1770958252538-bab8ac9b4e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjB0ZWNobm9sb2d5JTIwYmx1ZXxlbnwxfHx8fDE3NzI5NjkzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      skills: [
        "Configuration switch Cisco et Aruba",
        "Création VLAN",
        "Installation Borne wifi",
        "Câblage structuré RJ45",
        "Installation Fibre optique",
      ],
    },
    {
      category: "Administration Système",
      icon: Server,
      count: 5,
      bgImage: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NzI5MDUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      skills: [
        "Windows Server 2019/2022/2025",
        "Active Directory (AD)",
        "GPO & stratégies de groupe",
        "Déploiement OS avec WAPT (Windows 10/11)",
        "Linux Debian/Ubuntu",
      ],
    },
    {
      category: "Virtualisation & Cloud",
      icon: Cloud,
      count: 5,
      bgImage: "https://images.unsplash.com/photo-1598153103902-1d7145ed798e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHZpcnR1YWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk2OTM2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      skills: [
        "Proxmox",
        "Hyper-V",
        "Création & gestion de VM",
        "Snapshots & backups",
        "Migration de serveurs",
      ],
    },
    {
      category: "Sécurité & Supervision",
      icon: Shield,
      count: 4,
      bgImage: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZmlyZXdhbGwlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3Mjk2OTM2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      skills: [
        "Pare-feu & règles de filtrage",
        "Antivirus",
        "Analyse logs système (Graylog)",
        "Pingcastle (audit AD)",
      ],
    },
    {
      category: "Services & Support",
      icon: Headphones,
      count: 6,
      bgImage: "https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwY29tcHV0ZXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc3Mjk2OTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      skills: [
        "Support utilisateur N1/N2",
        "Téléphonie IP",
        "GLPI ticketing",
        "Gestion stock parc informatique",
        "Installation postes de travail",
        "Formation utilisateurs",
      ],
    },
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <h1 className="text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Mes Compétences
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-8">
            Un aperçu de mes compétences techniques acquises pendant ma formation BTS SIO
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                5
              </div>
              <div className="text-gray-300 text-lg font-medium">Domaines</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="text-gray-300 text-lg font-medium">Années</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/40 transition-all"></div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                BTS
              </div>
              <div className="text-gray-300 text-lg font-medium">Formation</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {competences.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/30 overflow-hidden hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl"></div>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={category.bgImage} 
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }}></div>
                
                <div className="relative z-10 p-7 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-cyan-500/70 group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-cyan-400/50 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                    </div>
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/40 backdrop-blur-sm group-hover:bg-cyan-500/30 group-hover:border-cyan-400/60 transition-all">
                      {category.count} compétences
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-5 group-hover:text-cyan-300 transition-colors">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-start gap-3 group/skill">
                        <div className="w-5 h-5 bg-cyan-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/skill:bg-cyan-500/40 transition-all border border-cyan-500/30">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed group-hover/skill:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-10 border-2 border-blue-500/40 backdrop-blur-xl overflow-hidden mb-16 shadow-2xl shadow-blue-500/20">
          {/* Animated Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">
                Formation BTS SIO - Option SISR
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <h3 className="font-bold text-cyan-300 mb-3 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Solutions d'Infrastructure
                </h3>
                <p className="text-sm leading-relaxed">
                  Administration et sécurité des systèmes et réseaux, déploiement d'infrastructures IT, virtualisation et support technique.
                </p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <h3 className="font-bold text-cyan-300 mb-3 text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Compétences professionnelles
                </h3>
                <p className="text-sm leading-relaxed">
                  Maîtrise des technologies Cisco, Microsoft, Linux et solutions de virtualisation pour gérer et sécuriser des infrastructures complètes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <h2 className="text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Certifications & Objectifs
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications terminées */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Certifications terminées
                </h3>
                <div className="space-y-4">
                  <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all hover:shadow-xl hover:shadow-green-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-green-500/50 group-hover:border-green-400/70 transition-all group-hover:scale-110">
                        <Check className="w-7 h-7 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-lg group-hover:text-green-300 transition-colors">Certification Cisco CCNA 2</h4>
                        <p className="text-sm text-gray-400">Certification réseau complétée</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-16 h-16 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all"></div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-blue-500/50 group-hover:border-blue-400/70 transition-all group-hover:scale-110">
                        <BookOpen className="w-7 h-7 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-lg group-hover:text-blue-300 transition-colors">BTS SIO - SISR</h4>
                        <p className="text-sm text-gray-400">2024-2026 • Lycée Estienne d'Orves</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Objectifs de certification */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  Objectifs de certification
                </h3>
                <div className="space-y-4">
                  <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/70 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-cyan-500/50 group-hover:border-cyan-400/70 transition-all group-hover:scale-110">
                        <Target className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-lg group-hover:text-cyan-300 transition-colors">Certification Cisco CyberOps</h4>
                        <p className="text-sm text-gray-400">En cours de préparation</p>
                        <div className="mt-3 w-full bg-slate-800/50 rounded-full h-2 overflow-hidden border border-cyan-500/30">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}