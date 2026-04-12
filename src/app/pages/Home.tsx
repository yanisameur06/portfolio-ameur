import { Link } from "react-router";
import { Code2, Award, Briefcase, ArrowRight, Sparkles, Download } from "lucide-react";
import hdTechLogo from "figma:asset/33f804548c6ba4c7ffadc04227a1cdd4a9261ec4.png";
import lyceeLogo from "figma:asset/fb89af97e60bf0eac43bf2a908e16acf249f650b.png";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605192020788-24d8eae86e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGJsdWUlMjBjeWJlcnxlbnwxfHx8fDE3NzI5NjkyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl z-0"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Nom et Prénom */}
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-8 py-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Yanis Ameur
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm">BTS SIO Portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Bienvenue sur mon
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Portfolio Digital
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-4">
            Option SISR
          </p>

          {/* Dates */}
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl px-6 py-3 mb-8">
            <span className="text-lg font-semibold text-cyan-400">2024 - 2026</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projets"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60"
            >
              Voir mes projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/a-propos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-gray-200 rounded-lg border border-blue-500/30 hover:bg-white/10 hover:border-blue-400/50 transition-all"
            >
              En savoir plus
            </Link>
          </div>

          {/* Section Présentation */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Présentation
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img 
                    src="https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwYmx1ZXxlbnwxfHx8fDE3NzI4NjU5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Présentation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Étudiant en 2ème année BTS SIO SISR en alternance, passionné par les infrastructures IT et la cybersécurité.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img 
                    src="https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Formation pratique</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Apprentissage des systèmes d'exploitation, virtualisation, administration réseau, sécurité informatique et gestion d'infrastructures IT au lycée Honoré d'Estienne d'Orves.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img 
                    src="https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGJsdWV8ZW58MXx8fHwxNzcyOTY5MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Objectif professionnel</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Devenir administrateur système et réseau et obtenir des certifications professionnelles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Entreprise d'accueil</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src={hdTechLogo} 
                    alt="HdTechSolution Logo" 
                    className="w-16 h-16 object-contain bg-white rounded-lg p-2"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    HdTechSolution
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Établissement scolaire</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src={lyceeLogo} 
                    alt="Lycée Honoré d'Estienne d'Orves Logo" 
                    className="w-16 h-16 object-contain bg-white rounded-lg p-2"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    Lycée Honoré d'Estienne d'Orves
                  </p>
                </div>
              </div>
            </div>

            {/* CV Section */}
            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Curriculum Vitae</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Téléchargez mon CV complet pour découvrir mon parcours, mes compétences et mes réalisations.
                </p>
                <a
                  href="/cv-yanis-ameur.pdf"
                  download="CV-Yanis-Ameur.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60"
                >
                  <Download className="w-5 h-5" />
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTY5MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Découvrez mon parcours
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Explorez mes compétences et réalisations</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/competences"
              className="group relative p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Compétences
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Découvrez mes compétences techniques et mes domaines d'expertise
                </p>
              </div>
            </Link>

            <Link
              to="/projets"
              className="group relative p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Projets
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Explorez les projets que j'ai réalisés pendant ma formation
                </p>
              </div>
            </Link>

            <Link
              to="/a-propos"
              className="group relative p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  À Propos
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Apprenez-en plus sur mon parcours et mes objectifs professionnels
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Intéressé par mon profil ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            N'hésitez pas à consulter mes projets et à me contacter
          </p>
          <Link
            to="/a-propos"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Me contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}