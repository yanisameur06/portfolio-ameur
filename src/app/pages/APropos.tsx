import { Mail, Linkedin, Github, MapPin, GraduationCap, Briefcase } from "lucide-react";

export function APropos() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 animate-slide-down opacity-0">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              À Propos de Moi
            </span>
          </h1>
          <p className="text-xl text-gray-400 animate-fade-in opacity-0 animation-delay-100">
            Étudiant en BTS SIO option SISR - Spécialiste Infrastructure & Réseaux
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/20 p-8 mb-8 backdrop-blur-sm overflow-hidden animate-slide-up opacity-0 animation-delay-200">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-blue-500/50">
                YA
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Yanis Ameur
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Étudiant en BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux), 
                  je suis passionné par les infrastructures réseau, la cybersécurité et l'administration système. 
                  Mon objectif est de devenir spécialiste en infrastructure et sécurité réseau, 
                  et de contribuer à des projets d'envergure dans le domaine de la cybersécurité.
                </p>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Nice, France</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>BTS SIO SISR - 2ème année</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formation */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/20 p-8 mb-8 animate-slide-right opacity-0 animation-delay-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Formation</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
              <h3 className="font-semibold text-white">BTS SIO SISR - Solutions d'Infrastructure, Systèmes et Réseaux</h3>
              <p className="text-cyan-400 text-sm">Lycée Honoré d'Estienne d'Orves • 2024 - 2026</p>
              <p className="text-gray-300 mt-2">
                Formation en alternance spécialisée dans l'administration des systèmes et réseaux, 
                la cybersécurité, la virtualisation et la gestion d'infrastructure. 
                Apprentissage des technologies Cisco, Windows Server, Linux, VMware et des bonnes pratiques ITIL.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
              <h3 className="font-semibold text-white">Certifications</h3>
              <p className="text-cyan-400 text-sm">Cisco • 2024 - 2026</p>
              <p className="text-gray-300 mt-2">
                • CCNA 2 - Switching, Routing, and Wireless Essentials (Terminé)<br />
                • CyberOps Associate - Cybersecurity Operations (En cours)
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl border border-blue-500/20 p-8 mb-8 animate-slide-left opacity-0 animation-delay-400">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Expérience</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
              <h3 className="font-semibold text-white">Alternant Infrastructure & Sécurité</h3>
              <p className="text-cyan-400 text-sm">HdTechSolution • Septembre 2024 - Présent</p>
              <p className="text-gray-300 mt-2">
                Administration système et réseau en environnement professionnel. 
                Configuration de serveurs Windows Server 2025, gestion Active Directory, 
                déploiement d'infrastructures virtualisées, mise en place de solutions de sécurité (PingCastle, HardenAD), 
                et automatisation avec PowerShell et WAPT.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
              <h3 className="font-semibold text-white">Projets Académiques & Techniques</h3>
              <p className="text-cyan-400 text-sm">2024 - Présent</p>
              <p className="text-gray-300 mt-2">
                Réalisation de 8+ projets d'infrastructure réseau incluant : configuration réseau Cisco, 
                mise en place de serveurs DHCP/DNS, virtualisation VMware, déploiement Exchange Server, 
                et implémentation de solutions de cybersécurité.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 p-8 overflow-hidden animate-scale-in opacity-0 animation-delay-500">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Me Contacter
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:yanisameur06@gmail.com"
                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all border border-blue-500/20 hover:border-cyan-400/50 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">yanisameur06@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/votre-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all border border-blue-500/20 hover:border-cyan-400/50 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://github.com/yanisameur06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all border border-blue-500/20 hover:border-cyan-400/50 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">GitHub - yanisameur06</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}