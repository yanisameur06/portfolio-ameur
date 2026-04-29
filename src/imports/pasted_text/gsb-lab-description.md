Table des matières
Description du laboratoire GSB..................................................................................................................................... 2
Le secteur d’activité................................................................................................................................................... 2
L’entreprise ................................................................................................................................................................ 2
Description du Système Informatique........................................................................................................................... 3
Le système informatique ........................................................................................................................................... 3
La gestion informatique............................................................................................................................................. 3
L’équipement............................................................................................................................................................. 3
Organisation du réseau ................................................................................................................................................. 4
Répartition des services ............................................................................................................................................ 4
Segmentation ............................................................................................................................................................ 4
Salle serveur et connexion internet .............................................................................................................................. 5
Domaine d’étude........................................................................................................................................................... 6
Les visiteurs ............................................................................................................................................................... 6
Les visiteurs et les autres services............................................................................................................................. 6
Responsabilités.......................................................................................................................................................... 7
Description de la ressource........................................................................................................................................... 7
Page 2 sur 7

Proposition de contexte pour le BTS SIO
Description du laboratoire GSB
Le secteur d’activité
L’industrie pharmaceutique est un secteur très lucratif dans lequel le mouvement de fusion acquisition est très fort.
Les regroupements de laboratoires ces dernières années ont donné naissance à des entités gigantesques au sein
desquelles le travail est longtemps resté organisé selon les anciennes structures.
Des déboires divers récents autour de médicaments ou molécules ayant entraîné des complications médicales ont fait
s’élever des voix contre une partie de l’activité des laboratoires : la visite médicale, réputée être le lieu d’arrangements
entre l’industrie et les praticiens, et tout du moins un terrain d’influence opaque.
L’entreprise
Le laboratoire Galaxy Swiss Bourdin (GSB) est issu de la fusion entre le géant américain Galaxy (spécialisé dans le
secteur des maladies virales dont le SIDA et les hépatites) et le conglomérat européen Swiss Bourdin (travaillant sur
des médicaments plus conventionnels), lui-même déjà union de trois petits laboratoires.
En 2009, les deux géants pharmaceutiques ont uni leurs forces pour créer un leader de ce secteur industriel. L’entité
Galaxy Swiss Bourdin Europe a établi son siège administratif à Paris.
Le siège social de la multinationale est situé à Philadelphie, Pennsylvanie, aux Etats-Unis.
La France a été choisie comme témoin pour l’amélioration du suivi de l’activité de visite.
Réorganisation
Une conséquence de cette fusion, est la recherche d’une optimisation de l’activité du groupe ainsi constitué en réalisant
des économies d’échelle dans la production et la distribution des médicaments (en passant par une nécessaire
restructuration et vague de licenciement), tout en prenant le meilleur des deux laboratoires sur les produits
concurrents.
L’entreprise compte 480 visiteurs médicaux en France métropolitaine (Corse comprise), et 60 dans les départements
et territoires d’outre-mer. Les territoires sont répartis en 6 secteurs géographiques (Paris-Centre, Sud, Nord, Ouest, Est,
DTOM Caraïbes-Amériques, DTOM Asie-Afrique).
Une vision partielle de cette organisation est présentée ci-dessous.
Après deux années de réorganisations internes, tant au niveau du personnel que du fonctionnement administratif,
l’entreprise GSB souhaite moderniser l’activité de visite médicale.
NORD
OUEST EST
SUD
PARIS CENTRE
Page 3 sur 7
Description du Système Informatique
Le système informatique
Sur le site parisien, toutes les fonctions administratives (gestion des ressources humaines, comptabilité, direction,
commerciale, etc.) sont présentes. On trouve en outre un service labo-recherche, le service juridique et le service
communication.
La salle serveur occupe le 6ème étage du bâtiment et les accès y sont restreints (étage accessible par ascenseur à l’aide
d’une clé sécurisée, portes d’accès par escalier munies d’un lecteur de badge, sas d’entrée avec gardien présent
24h/24).
Les serveurs assurent les fonctions de base du réseau (DHCP, DNS, Annuaire et gestion centralisée des environnements)
et les fonctions de communication (Intranet, Messagerie, Agenda partagé, etc.).
On trouve aussi de nombreuses applications métier (base d’information pharmaceutique, serveurs dédiés à la
recherche, base de données des produits du laboratoire, base de données des licences d’exploitation pharmaceutique,
etc.) et les fonctions plus génériques de toute entreprise (Progiciel de Gestion Intégré avec ses modules RH, GRC, etc.).
Un nombre croissant de serveurs est virtualisé.
Constitué autour de VLAN, le réseau segmente les services de manière à fluidifier le trafic.
Les données de l’entreprises sont considérées comme stratégiques et ne peuvent tolérer ni fuite, ni destruction.
L’ensemble des informations est répliqué quotidiennement aux Etats-Unis par un lien dédié. Toutes les fonctions de
redondances (RAID, alimentation, lien réseau redondant, spanning-tree, clustering, etc.) sont mises en œuvre pour
assurer une tolérance aux pannes maximale.
La gestion informatique
La DSI (Direction des Services Informatiques) est une entité importante de la structure Europe qui participe aux choix
stratégiques.
Pour Swiss-Bourdin, qui occupait le siège parisien avant la fusion, l’outil informatique et l’utilisation d’outils décisionnels
pour améliorer la vision et la planification de l’activité ont toujours fait partie de la politique maison, en particulier pour
ce qui concerne la partie recherche, production, communication et juridique.
La partie commerciale a été le parent pauvre de cette informatisation, les visiteurs étant vus comme des acteurs
distants autonomes. La DSI a convaincu l’entreprise que l’intégration des données fournies par cette partie aura un
impact important sur l’ensemble de l’activité.
L’équipement
L’informatique est fortement répandue sur le site. Chaque employé est équipé d’un poste fixe relié au système central.
On dénombre ainsi plus de 350 équipements terminaux et un nombre de serveurs physiques conséquent (45 en 2012)
sur lesquels tournent plus de 100 serveurs virtuels.
On trouve aussi des stations de travail plus puissantes dans la partie labo-recherche, et une multitude d’ordinateurs
portables (personnels de direction, service informatique, services commerciaux, etc).
Les visiteurs médicaux reçoivent une indemnité bisannuelle pour s’équiper en informatique (politique Swiss-Bourdin)
ou une dotation en équipement (politique Galaxy). Il n’y a pas à l’heure actuelle d’uniformisation des machines ni du
mode de fonctionnement.
Chaque employé de l’entreprise a une adresse de messagerie de la forme nomUtilisateur@swiss-galaxy.com. Les
anciennes adresses de chaque laboratoire ont été définitivement fermées au 1er janvier 2011.
Page 4 sur 7
Organisation du réseau
Répartition des services
Chaque étage dispose d’une baie de brassage
qui le relie par une fibre à la baie centrale de la
salle serveurs.
Toutes les salles de réunion sont équipées d’un
point d’accès Wifi positionné par défaut dans le
VLAN « Visiteurs » qui autorise uniquement un
accès Internet.
Les portables connectés en wifi à ce point d’accès
reçoivent ainsi une adresse IP et n’ont, par
conséquent accès qu’aux services DHCP et DNS.
Le point d’accès peut être configuré à la
demande pour être raccordé à un VLAN présent
au niveau de l’étage.
Chaque salle de réunion dispose
d’un vidéoprojecteur, d’enceintes et d’un
tableau numérique interactif.
La salle « Démonstration » est destinée à l’accueil
des organismes de santé (AFSSAPS notamment)
et des partenaires scientifiques. Elle dispose de
paillasses et d’équipements de laboratoire, en
plus d’une salle de réunion.
Segmentation
L’organisation des VLAN et de l’adressage IP est la suivante :
N° VLAN Service(s) Adressage IP
10 Réseau & Système 192.168.10.0/24
20 Direction / DSI 192.168.20.0/24
30 RH / Compta / Juridique / Secrétariat Administratif 192.168.30.0/24
40 Communication / Rédaction 192.168.40.0/24
50 Développement 192.168.50.0/24
60 Commercial 192.168.60.0/24
70 Labo-Recherche 192.168.70.0/24
100 Accueil 192.168.100.0/24
150 Visiteurs 192.168.150.0/24
200 Démonstration 192.168.200.0/24
300 Serveurs 172.16.0.0/17
400 Sortie 172.18.0.0/30
Seuls les vlan colorés en rose seront pris en compte dans le contexte du lycée.
Les règles actuelles concernant les vlans sont les suivantes :
⚫ chaque vlan (sauf le vlan Visiteurs) peut uniquement accéder (quel que soit le protocole) aux vlans
« Serveurs » et « Sortie » ;
⚫ le vlan « Visiteurs » peut uniquement accéder aux serveurs DNS et DHCP et sortir sur internet ;
⚫ l’adresse IP de chaque vlan est la dernière adresse du réseau.
Page 5 sur 7
Salle serveur et connexion internet
L’organisation des serveurs est la suivante. Il n’est pas précisé si les serveurs sont virtualisés ou non. Seuls
les serveurs principaux sont présentés, les redondances n’apparaissent pas.
• X correspond à votre numéro de labo ;
• RTROUT : routeur Cisco (2921) faisant le lien avec la box représente l’accès à Internet ;
• MUTLAB : routeur Cisco ou un switch L3 HP Procurve ou Cisco 3750 gérant le routage inter-vlan et les ACL ;
• L’interconnexion des différents services sera assurée par 2 switches CISCO 2960 reliés entre eux par un port
trunk autorisant tous les vlans ;
• Seuls les serveurs encadrés de rouge sont obligatoires dans le contexte ;
• Le ou les serveurs hébergeant les rôles de supervision (Nagios par exemple) et de gestion de parc (GLPI+FI)
sont à rajouter dans le contexte ;
• ProxSILAB sera un proxy transparent permettant de sauvegarder tous les logs de connexion à Internet ;
• Tous les serveurs seront installés sur le serveur HP avec Proxmox de votre groupe sur un HDD qui vous est
alloué.
Les bases de données des serveurs BDMED et BDPHARMA sont achetées auprès d’organismes extérieurs.
Le commutateur MUTLAB assure un fonctionnement de niveau 3. A ce titre, il réalise un routage inter-vlan en limitant
les communications grâce à des listes de contrôles d’accès (ACL).
Le serveur de messagerie et l’intranet sont limités à un usage interne au site parisien. Des services externalisés (relai
de messagerie auprès de l’opérateur et recopie d’une partie du serveur intranet sur le serveur Web hébergé chez un
prestataire) permettent aux visiteurs médicaux d’utiliser la messagerie de l’entreprise et d’avoir accès aux principales
informations de l’intranet (Comité d’entreprise, circulaires importantes, stratégie de l’entreprise, comptes rendus de
CA, etc.).
Page 6 sur 7
La messagerie publique @swiss-galxy.com est hébergée aux États-Unis.
Domaine d’étude
L’entreprise souhaite porter une attention nouvelle à sa force commerciale dans un double objectif : obtenir une vision
plus régulière et efficace de l’activité menée sur le terrain auprès des praticiens, mais aussi redonner confiance aux
équipes malmenées par les fusions récentes.
Les visiteurs
La force commerciale d’un laboratoire pharmaceutique est assurée par un travail de conseil et d’information auprès
des prescripteurs. Les visiteurs médicaux (ou délégués) démarchent les médecins, pharmaciens, infirmières et autres
métiers de santé susceptibles de prescrire aux patients les produits du laboratoire.
L’objectif d’une visite est d’actualiser et rafraîchir la connaissance des professionnels de santé sur les produits de
l’entreprise. Les visiteurs ne font pas de vente, mais leurs interventions ont un impact certain sur la prescription de la
pharmacopée du laboratoire.
Pour donner une organisation commune aux délégués médicaux, l’entreprise a adopté l’organisation de la flotte de
visiteurs existant chez Galaxy, selon un système hiérarchique par région et, à un niveau supérieur, par secteur
géographique (Sud, Nord, paris-Centre, etc).
Il n’y a pas eu d’harmonisation de la relation entre les personnels de terrain (Visiteurs et Délégués régionaux) et les
responsables de secteur. Les habitudes en cours avant la fusion ont été adaptées sans que soient données des directives
au niveau local.
On souhaite améliorer le contact entre ces acteurs mobiles autonomes et les différents services du siège parisien de
l’entité Europe. Il s’agit d’uniformiser la gestion du suivi des visites.
Les visiteurs et les autres services
Les déplacements et actions de terrain menées par les visiteurs engendrent des frais qui doivent être pris en charge
par la comptabilité. On cherche à agir au plus juste de manière à limiter les excès sans pour autant diminuer les frais
de représentation qui font partie de l’image de marque d’un laboratoire.
Chez Galaxy, le principe d’engagement des frais est celui de la carte bancaire au nom de l’entreprise. Chez SwissBourdin,
une gestion forfaitaire des principaux frais permet de limiter les justificatifs. Pour tout le reste, le remboursement est
fait après retour des pièces justificatives.
Une gestion unique de ces frais et remboursement pour l’ensemble de la flotte visite est souhaitée.
Les visiteurs récupèrent une information directe sur le terrain. Ceci concerne aussi bien le niveau de la confiance
qu’inspire le laboratoire que la lisibilité des notices d’utilisation des médicaments ou encore les éventuels problèmes
rencontrés lors de leur utilisation, etc.
Page 7 sur 7
Ces informations ne sont actuellement pas systématiquement remontées au siège, ou elles le sont dans des délais jugés
trop longs. Le service rédaction qui produit les notices souhaite avoir des remontées plus régulières et directes. Ceci
permettra également au service labo-recherche d’engager des évaluations complémentaires.
Le turn-over des visiteurs est de plus en plus important. Pour un délégué régional et plus encore un responsable de
secteur, le suivi des équipes devient une véritable activité : obtenir les coordonnées auprès des services RH lors de
l’arrivée d’un nouveau personnel, réaliser un suivi personnalisé et former les recrues, etc.
Un accès plus direct aux données de personnel est nécessaire.
Responsabilités
Les équipes du service développement auront notamment à produire puis à fournir les éléments applicatifs
permettant :
 l’enregistrement d’informations en provenance des visiteurs ;
 la gestion des frais de déplacement.
Les équipes du service Réseau et système fourniront les équipements et configuration réseau, ainsi que les ressources
serveur nécessaires à héberger les applications mises à disposition de la flotte visite. 