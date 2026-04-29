import { FileText, Download, CheckCircle, Award, Calendar } from "lucide-react";

export function GrilleE5() {
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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30 animate-fade-in opacity-0">
            <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
          <h1 className="text-6xl font-bold mb-6 relative animate-slide-down opacity-0 animation-delay-100">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Grille d'Évaluation E5
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in opacity-0 animation-delay-200">
            Épreuve E5 - BTS SIO SISR
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6 animate-scale-in opacity-0 animation-delay-300"></div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-center overflow-hidden animate-scale-in opacity-0 animation-delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">BTS SIO</div>
              <div className="text-gray-300 text-sm">Option SISR</div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 text-center overflow-hidden animate-scale-in opacity-0 animation-delay-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">2024-2026</div>
              <div className="text-gray-300 text-sm">Lycée Estienne d'Orves</div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 hover:border-cyan-400/70 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 text-center overflow-hidden animate-scale-in opacity-0 animation-delay-600">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Épreuve E5</div>
              <div className="text-gray-300 text-sm">BTS SIO SISR</div>
            </div>
          </div>
        </div>

        {/* Main PDF Card */}
        <div className="mb-12 relative group animate-slide-up opacity-0 animation-delay-700">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-500 p-10 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Document"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    Grille d'Évaluation E5
                  </h2>
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    Document officiel de la grille d'évaluation pour l'épreuve E5 du BTS SIO option SISR
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500/40">
                      BTS SIO SISR
                    </span>
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-semibold border border-cyan-500/40">
                      Yanis Ameur
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-semibold border border-purple-500/40">
                      2024-2026
                    </span>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  href="/src/imports/Grille_E5_Yanis_Ameur-1.pdf"
                  download
                  className="flex-shrink-0 group/btn relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-60 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-2xl shadow-blue-500/50 transition-all duration-300 group-hover/btn:scale-110">
                    <Download className="w-6 h-6" />
                    <span>Télécharger</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="mb-12 relative group animate-slide-up opacity-0 animation-delay-800">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-blue-500/30 overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-900/50 border-b border-blue-500/20">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                Aperçu de la Grille E5
              </h3>
            </div>
            <div className="w-full" style={{ height: '800px' }}>
              <iframe
                src="/src/imports/Grille_E5_Yanis_Ameur-1.pdf"
                className="w-full h-full"
                title="Grille E5 - Yanis Ameur"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="relative group animate-fade-in opacity-0 animation-delay-900">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl rounded-3xl border border-purple-500/30 group-hover:border-cyan-400/50 transition-all duration-500 p-10 overflow-hidden shadow-2xl">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl shadow-purple-500/50">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  À propos de l'épreuve E5
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  L'épreuve E5 évalue les compétences techniques acquises durant la formation BTS SIO option SISR.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">Compétences évaluées</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Infrastructure systèmes et réseaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Administration des systèmes et réseaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Sécurité des infrastructures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Support et assistance technique</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                    <h4 className="text-lg font-bold text-purple-400 mb-3">Format de l'épreuve</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Présentation orale de projets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Démonstration technique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Entretien avec le jury</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Documentation et procédures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-b-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
