import { ExternalLink, Github, Network, Server, Phone, Cloud, Shield, Folder, TicketCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Projets() {
  const categories = [
    {
      name: "Infrastructure Réseau",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      projects: [
        {
          title: "Installation de switch",
          description: "Déploiement et configuration de switch pour améliorer la segmentation réseau et la qualité de service pour le conservatoire de la mairie de Saint-Laurent-du-Var.",
          image: "https://images.unsplash.com/photo-1739054730201-4b6463484e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc3dpdGNoJTIwZGF0YSUyMGNlbnRlciUyMGJsdWV8ZW58MXx8fHwxNzcyOTY5OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Configuration de routeur en point d'accès WiFi",
          description: "Transformation d'un routeur en point d'accès WiFi pour la police municipale de la mairie de Saint-Laurent-du-Var et filtrage adresse MAC.",
          image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWZpJTIwcm91dGVyJTIwaW5zdGFsbGF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5Njk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Configuration de switch (configuration, ports, VLAN)",
          description: "Configuration complète de switch : paramètres généraux, configuration des ports, création des VLAN pour une école de Saint-Laurent-du-Var.",
          image: "https://images.unsplash.com/photo-1739054730201-4b6463484e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc3dpdGNoJTIwZGF0YSUyMGNlbnRlciUyMGJsdWV8ZW58MXx8fHwxNzcyOTY5OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      name: "Système",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      projects: [
        {
          title: "Migration de Windows 10 à 11",
          description: "Mise à niveau des postes de travail de Windows 10 vers Windows 11, grâce à WAPT incluant la vérification de compatibilité et la migration des données utilisateurs.",
          image: "https://images.unsplash.com/photo-1620843002805-05a08cb72f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3dzJTIwY29tcHV0ZXIlMjB1cGdyYWRlJTIwc3lzdGVtfGVufDF8fHx8MTc3Mjk2OTk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Migration de serveur",
          description: "Migration d'un serveur physique vers une nouvelle infrastructure, incluant le transfert des données sur le serveur de redondance en maintenance et des services.",
          image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwcmFja3xlbnwxfHx8fDE3NzI5MTk4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      name: "Virtualisation",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      projects: [
        {
          title: "Mise à jour de serveur et transfert des VM",
          description: "Mise à jour système des serveurs et transfert des machines virtuelles vers le serveur de redondance.",
          image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwbWFjaGluZSUyMGNsb3VkJTIwY29tcHV0aW5nfGVufDF8fHx8MTc3Mjk2OTk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Changement des barrettes RAM du serveur",
          description: "Remplacement des barrettes de RAM sur un serveur Dell EMC pour augmenter la capacité mémoire et améliorer les performances de l'infrastructure.",
          image: "https://images.unsplash.com/photo-1654240253461-3f51c793b366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBSQU0lMjBtZW1vcnklMjB1cGdyYWRlfGVufDF8fHx8MTc3Mjk2OTk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Création de machines virtuelles",
          description: "Déploiement et configuration de machines virtuelles sur l'infrastructure de virtualisation pour différents services.",
          image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwbWFjaGluZSUyMGNsb3VkJTIwY29tcHV0aW5nfGVufDF8fHx8MTc3Mjk2OTk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      name: "Gestion & Support",
      icon: TicketCheck,
      color: "from-green-500 to-emerald-500",
      projects: [
        {
          title: "Projet GSB - Galaxy Swiss Bourdin",
          description: "Projet d'infrastructure réseau complète pour un laboratoire pharmaceutique : segmentation VLAN, routage inter-VLAN, services GLPI et FTPS. Infrastructure complète avec 9 VLANs, switches Cisco et virtualisation Proxmox.",
          image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
          link: "/projet-gsb",
        },
      ],
    },
  ];

  const totalProjects = categories.reduce((acc, cat) => acc + cat.projects.length, 0);

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
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-fade-in"></div>
          <h1 className="text-6xl font-bold mb-6 relative animate-slide-down opacity-0">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Projets Réalisés
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-8 animate-fade-in opacity-0 animation-delay-100">
            Découvrez les différents projets techniques que j'ai réalisés en entreprise
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-center overflow-hidden animate-scale-in opacity-0 animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                {totalProjects}
              </div>
              <div className="text-gray-300 text-lg font-medium">Projets réalisés</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                {categories.length}
              </div>
              <div className="text-gray-300 text-lg font-medium">Catégories</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/40 transition-all"></div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="text-gray-300 text-lg font-medium">Années</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all"></div>
          </div>
        </div>

        {/* Projects by Category */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div key={catIndex} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                    <p className="text-gray-400">{category.projects.length} {category.projects.length > 1 ? 'projets' : 'projet'}</p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, projIndex) => {
                    const ProjectWrapper = (project as any).link ? Link : 'div';
                    const wrapperProps = (project as any).link ? { to: (project as any).link } : {};

                    return (
                      <ProjectWrapper
                        key={projIndex}
                        {...wrapperProps}
                        className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl overflow-hidden border border-blue-500/30 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-2 block"
                      >
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl"></div>
                        </div>

                        <div className="relative z-10">
                          {/* Image */}
                          <div className="aspect-video overflow-hidden bg-slate-800/50 relative">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {(project as any).link && (
                              <div className="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                Voir détails
                                <ArrowRight className="w-3.5 h-3.5" />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>

                          {/* Corner Accent */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </ProjectWrapper>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-16 relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-10 border-2 border-blue-500/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/20">
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
                Résumé des Projets
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="bg-slate-900/60 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-cyan-300 text-lg">{category.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.projects.map((project, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="leading-relaxed">{project.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}