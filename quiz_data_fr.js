// Generated from quiz_data.js. Original English preserved in i18n.en; French version in i18n.fr.
const quizData = [
    {
        "title": "1. Quelle caractéristique de conception limitera la taille d’un domaine de défaillance dans un réseau d’entreprise ?",
        "text": "",
        "images": [],
        "options": [
            "l’achat d’équipements d’entreprise conçus pour un volume de trafic élevé",
            "l’installation d’alimentations redondantes",
            "l’utilisation d’une conception à cœur replié",
            "l’utilisation de l’approche par bloc de commutation de bâtiment"
        ],
        "correct": [
            3
        ],
        "explanation": "Pour limiter au mieux la taille d’un domaine de défaillance, des routeurs ou des commutateurs multicouches sont déployés par paires selon l’approche par bloc de commutation de bâtiment. La panne d’un seul équipement ne doit pas mettre le réseau hors service.",
        "id": 1,
        "i18n": {
            "en": {
                "title": "1. Which design feature will limit the size of a failure domain in an enterprise network?",
                "text": "",
                "options": [
                    "the purchase of enterprise equipment that is designed for large traffic volume",
                    "the installation of redundant power supplies",
                    "the use of a collapsed core design",
                    "the use of the building switch block approach"
                ],
                "explanation": "To best limit the size of a failure domain, routers or multilayer switches are deployed in pairs using the building switch block approach. The failure of a single device should not bring the network down."
            },
            "fr": {
                "title": "1. Quelle caractéristique de conception limitera la taille d’un domaine de défaillance dans un réseau d’entreprise ?",
                "text": "",
                "options": [
                    "l’achat d’équipements d’entreprise conçus pour un volume de trafic élevé",
                    "l’installation d’alimentations redondantes",
                    "l’utilisation d’une conception à cœur replié",
                    "l’utilisation de l’approche par bloc de commutation de bâtiment"
                ],
                "explanation": "Pour limiter au mieux la taille d’un domaine de défaillance, des routeurs ou des commutateurs multicouches sont déployés par paires selon l’approche par bloc de commutation de bâtiment. La panne d’un seul équipement ne doit pas mettre le réseau hors service."
            }
        }
    },
    {
        "title": "2. Quelles sont les deux choses qu’un administrateur réseau doit modifier sur un routeur pour effectuer une récupération de mot de passe ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "le fichier image système",
            "le système de fichiers NVRAM",
            "la valeur du registre de configuration",
            "le fichier de configuration de démarrage",
            "la ROM système"
        ],
        "correct": [
            2,
            3
        ],
        "explanation": "Pour effectuer une récupération de mot de passe, l’administrateur modifie la valeur du registre de configuration, généralement 0x2142, afin d’ignorer le fichier de configuration de démarrage, puis enregistre le nouveau mot de passe dans la configuration de démarrage.",
        "id": 2,
        "i18n": {
            "en": {
                "title": "2. Which two things should a network administrator modify on a router to perform password recovery? (Choose two.)",
                "text": "",
                "options": [
                    "the system image file",
                    "the NVRAM file system",
                    "the configuration register value",
                    "the startup configuration file",
                    "system ROM"
                ],
                "explanation": "To perform password recovery, the administrator changes the configuration register value (typically 0x2142) to ignore the startup configuration file, then saves the new password to the startup configuration."
            },
            "fr": {
                "title": "2. Quelles sont les deux choses qu’un administrateur réseau doit modifier sur un routeur pour effectuer une récupération de mot de passe ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "le fichier image système",
                    "le système de fichiers NVRAM",
                    "la valeur du registre de configuration",
                    "le fichier de configuration de démarrage",
                    "la ROM système"
                ],
                "explanation": "Pour effectuer une récupération de mot de passe, l’administrateur modifie la valeur du registre de configuration, généralement 0x2142, afin d’ignorer le fichier de configuration de démarrage, puis enregistre le nouveau mot de passe dans la configuration de démarrage."
            }
        }
    },
    {
        "title": "3. Quel type de réseau utilise une infrastructure commune pour transporter les signaux voix, données et vidéo ?",
        "text": "",
        "images": [],
        "options": [
            "sans frontières",
            "convergé",
            "administré",
            "commuté"
        ],
        "correct": [
            1
        ],
        "explanation": "Un réseau convergé ne comporte qu’un seul réseau physique à installer et à gérer, transportant ensemble la voix, la vidéo et les données.",
        "id": 3,
        "i18n": {
            "en": {
                "title": "3. What type of network uses one common infrastructure to carry voice, data, and video signals?",
                "text": "",
                "options": [
                    "borderless",
                    "converged",
                    "managed",
                    "switched"
                ],
                "explanation": "A converged network has only one physical network to install and manage, carrying voice, video, and data together."
            },
            "fr": {
                "title": "3. Quel type de réseau utilise une infrastructure commune pour transporter les signaux voix, données et vidéo ?",
                "text": "",
                "options": [
                    "sans frontières",
                    "convergé",
                    "administré",
                    "commuté"
                ],
                "explanation": "Un réseau convergé ne comporte qu’un seul réseau physique à installer et à gérer, transportant ensemble la voix, la vidéo et les données."
            }
        }
    },
    {
        "title": "4. Quels sont les trois avantages de l’utilisation d’adresses IP privées et du NAT ? (Choisissez trois réponses.)",
        "text": "",
        "images": [],
        "options": [
            "masque l’adressage LAN privé aux équipements externes connectés à Internet",
            "permet l’extension du LAN sans adresses IP publiques supplémentaires",
            "réduit l’utilisation du processeur sur les routeurs des clients",
            "crée plusieurs adresses IP publiques",
            "améliore les performances du routeur connecté à Internet",
            "préserve les adresses IP publiques enregistrées"
        ],
        "correct": [
            0,
            1,
            5
        ],
        "explanation": "Les adresses privées ne sont pas visibles depuis Internet, peuvent être utilisées librement en interne, et le NAT préserve les adresses IP publiques enregistrées tout en permettant l’extension du LAN.",
        "id": 4,
        "i18n": {
            "en": {
                "title": "4. What are three advantages of using private IP addresses and NAT? (Choose three.)",
                "text": "",
                "options": [
                    "hides private LAN addressing from outside devices that are connected to the Internet",
                    "permits LAN expansion without additional public IP addresses",
                    "reduces CPU usage on customer routers",
                    "creates multiple public IP addresses",
                    "improves the performance of the router that is connected to the Internet",
                    "conserves registered public IP addresses"
                ],
                "explanation": "Private addresses are not visible from the Internet, can be used freely internally, and NAT conserves registered public IP addresses while allowing LAN expansion."
            },
            "fr": {
                "title": "4. Quels sont les trois avantages de l’utilisation d’adresses IP privées et du NAT ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "masque l’adressage LAN privé aux équipements externes connectés à Internet",
                    "permet l’extension du LAN sans adresses IP publiques supplémentaires",
                    "réduit l’utilisation du processeur sur les routeurs des clients",
                    "crée plusieurs adresses IP publiques",
                    "améliore les performances du routeur connecté à Internet",
                    "préserve les adresses IP publiques enregistrées"
                ],
                "explanation": "Les adresses privées ne sont pas visibles depuis Internet, peuvent être utilisées librement en interne, et le NAT préserve les adresses IP publiques enregistrées tout en permettant l’extension du LAN."
            }
        }
    },
    {
        "title": "5. Quels sont deux scénarios qui sont des exemples de VPN d’accès distant ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Tous les utilisateurs d’une grande agence peuvent accéder aux ressources de l’entreprise via une seule connexion VPN.",
            "Une petite agence de trois employés dispose d’un Cisco ASA utilisé pour créer une connexion VPN vers le siège.",
            "Un fabricant de jouets dispose d’une connexion VPN permanente avec l’un de ses fournisseurs de pièces.",
            "Un commercial mobile se connecte au réseau de l’entreprise via la connexion Internet d’un hôtel.",
            "Un employé travaillant à domicile utilise un logiciel client VPN sur un ordinateur portable pour se connecter au réseau de l’entreprise."
        ],
        "correct": [
            3,
            4
        ],
        "explanation": "Les VPN d’accès distant connectent des utilisateurs individuels via un client VPN installé sur l’équipement de l’utilisateur. Les VPN site à site utilisent des passerelles pour connecter des réseaux entiers.",
        "id": 5,
        "i18n": {
            "en": {
                "title": "5. Which two scenarios are examples of remote access VPNs? (Choose two.)",
                "text": "",
                "options": [
                    "All users at a large branch office can access company resources through a single VPN connection.",
                    "A small branch office with three employees has a Cisco ASA that is used to create a VPN connection to the HQ.",
                    "A toy manufacturer has a permanent VPN connection to one of its parts suppliers.",
                    "A mobile sales agent is connecting to the company network via the Internet connection at a hotel.",
                    "An employee who is working from home uses VPN client software on a laptop in order to connect to the company network."
                ],
                "explanation": "Remote access VPNs connect individual users via a VPN client installed on the user device. Site-to-site VPNs use gateways to connect entire networks."
            },
            "fr": {
                "title": "5. Quels sont deux scénarios qui sont des exemples de VPN d’accès distant ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Tous les utilisateurs d’une grande agence peuvent accéder aux ressources de l’entreprise via une seule connexion VPN.",
                    "Une petite agence de trois employés dispose d’un Cisco ASA utilisé pour créer une connexion VPN vers le siège.",
                    "Un fabricant de jouets dispose d’une connexion VPN permanente avec l’un de ses fournisseurs de pièces.",
                    "Un commercial mobile se connecte au réseau de l’entreprise via la connexion Internet d’un hôtel.",
                    "Un employé travaillant à domicile utilise un logiciel client VPN sur un ordinateur portable pour se connecter au réseau de l’entreprise."
                ],
                "explanation": "Les VPN d’accès distant connectent des utilisateurs individuels via un client VPN installé sur l’équipement de l’utilisateur. Les VPN site à site utilisent des passerelles pour connecter des réseaux entiers."
            }
        }
    },
    {
        "title": "6. Quels sont trois avantages du cloud computing ? (Choisissez trois réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Il utilise les clients finaux pour effectuer une grande partie du prétraitement et du stockage des données.",
            "Il utilise des logiciels open source pour le traitement distribué de grands jeux de données.",
            "Il rationalise les opérations informatiques d’une organisation en ne souscrivant qu’aux services nécessaires.",
            "Il permet d’accéder aux données de l’organisation partout et à tout moment.",
            "Il transforme les données brutes en informations utiles en découvrant des modèles et des relations.",
            "Il élimine ou réduit le besoin d’équipements informatiques, de maintenance et de gestion sur site."
        ],
        "correct": [
            2,
            3,
            5
        ],
        "explanation": "Le cloud computing fournit un accès aux données à tout moment et depuis n’importe où, rationalise les opérations informatiques grâce à des services par abonnement et réduit le besoin d’équipements informatiques sur site.",
        "id": 6,
        "i18n": {
            "en": {
                "title": "6. What are three benefits of cloud computing? (Choose three.)",
                "text": "",
                "options": [
                    "It utilizes end-user clients to do a substantial amount of data preprocessing and storage.",
                    "It uses open-source software for distributed processing of large datasets.",
                    "It streamlines the IT operations of an organization by subscribing only to needed services.",
                    "It enables access to organizational data anywhere and at any time.",
                    "It turns raw data into meaningful information by discovering patterns and relationships.",
                    "It eliminates or reduces the need for onsite IT equipment, maintenance, and management."
                ],
                "explanation": "Cloud computing provides access to data anytime/anywhere, streamlines IT operations through subscription services, and reduces the need for onsite IT equipment."
            },
            "fr": {
                "title": "6. Quels sont trois avantages du cloud computing ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "Il utilise les clients finaux pour effectuer une grande partie du prétraitement et du stockage des données.",
                    "Il utilise des logiciels open source pour le traitement distribué de grands jeux de données.",
                    "Il rationalise les opérations informatiques d’une organisation en ne souscrivant qu’aux services nécessaires.",
                    "Il permet d’accéder aux données de l’organisation partout et à tout moment.",
                    "Il transforme les données brutes en informations utiles en découvrant des modèles et des relations.",
                    "Il élimine ou réduit le besoin d’équipements informatiques, de maintenance et de gestion sur site."
                ],
                "explanation": "Le cloud computing fournit un accès aux données à tout moment et depuis n’importe où, rationalise les opérations informatiques grâce à des services par abonnement et réduit le besoin d’équipements informatiques sur site."
            }
        }
    },
    {
        "title": "7. Quelle est une caractéristique d’un réseau OSPF à zone unique ?",
        "text": "",
        "images": [],
        "options": [
            "Tous les routeurs partagent une base de données de transfert commune.",
            "Tous les routeurs ont la même table de voisins.",
            "Tous les routeurs se trouvent dans la zone backbone.",
            "Tous les routeurs ont la même table de routage."
        ],
        "correct": [
            2
        ],
        "explanation": "Dans OSPF à zone unique, tous les routeurs sont dans une seule zone, qui doit être la zone backbone, c’est-à-dire la zone 0. Les tables de voisins et de routage sont propres à chaque routeur.",
        "id": 7,
        "i18n": {
            "en": {
                "title": "7. What is a characteristic of a single-area OSPF network?",
                "text": "",
                "options": [
                    "All routers share a common forwarding database.",
                    "All routers have the same neighbor table.",
                    "All routers are in the backbone area.",
                    "All routers have the same routing table."
                ],
                "explanation": "In single-area OSPF all routers are in one area, which should be the backbone (Area 0). Neighbor and routing tables are unique to each router."
            },
            "fr": {
                "title": "7. Quelle est une caractéristique d’un réseau OSPF à zone unique ?",
                "text": "",
                "options": [
                    "Tous les routeurs partagent une base de données de transfert commune.",
                    "Tous les routeurs ont la même table de voisins.",
                    "Tous les routeurs se trouvent dans la zone backbone.",
                    "Tous les routeurs ont la même table de routage."
                ],
                "explanation": "Dans OSPF à zone unique, tous les routeurs sont dans une seule zone, qui doit être la zone backbone, c’est-à-dire la zone 0. Les tables de voisins et de routage sont propres à chaque routeur."
            }
        }
    },
    {
        "title": "8. Qu’est-ce qu’un WAN ?",
        "text": "",
        "images": [],
        "options": [
            "une infrastructure réseau qui couvre une zone physique limitée, comme une ville",
            "une infrastructure réseau qui fournit un accès à d’autres réseaux sur une grande zone géographique",
            "une infrastructure réseau qui fournit un accès dans une petite zone géographique",
            "une infrastructure réseau conçue pour assurer le stockage, la récupération et la réplication des données"
        ],
        "correct": [
            1
        ],
        "explanation": "Un WAN couvre une zone géographique relativement vaste et interconnecte des utilisateurs, réseaux et sites distants.",
        "id": 8,
        "i18n": {
            "en": {
                "title": "8. What is a WAN?",
                "text": "",
                "options": [
                    "a network infrastructure that spans a limited physical area such as a city",
                    "a network infrastructure that provides access to other networks over a large geographic area",
                    "a network infrastructure that provides access in a small geographic area",
                    "a network infrastructure designed to provide data storage, retrieval, and replication"
                ],
                "explanation": "A WAN spans a relatively large geographic area and interconnects remote users, networks, and sites."
            },
            "fr": {
                "title": "8. Qu’est-ce qu’un WAN ?",
                "text": "",
                "options": [
                    "une infrastructure réseau qui couvre une zone physique limitée, comme une ville",
                    "une infrastructure réseau qui fournit un accès à d’autres réseaux sur une grande zone géographique",
                    "une infrastructure réseau qui fournit un accès dans une petite zone géographique",
                    "une infrastructure réseau conçue pour assurer le stockage, la récupération et la réplication des données"
                ],
                "explanation": "Un WAN couvre une zone géographique relativement vaste et interconnecte des utilisateurs, réseaux et sites distants."
            }
        }
    },
    {
        "title": "9. Un administrateur réseau a été chargé de créer un plan de reprise après sinistre. Dans ce cadre, il recherche un site de sauvegarde pour toutes les données des serveurs de l’entreprise. Quel service ou quelle technologie répondrait à ce besoin ?",
        "text": "",
        "images": [],
        "options": [
            "centre de données",
            "virtualisation",
            "serveurs dédiés",
            "réseau défini par logiciel"
        ],
        "correct": [
            0
        ],
        "explanation": "Un centre de données est une installation utilisée pour le stockage et le traitement des données, pouvant servir de site de sauvegarde dans un plan de reprise après sinistre.",
        "id": 9,
        "i18n": {
            "en": {
                "title": "9. A network administrator has been tasked with creating a disaster recovery plan. As part of this plan, the administrator is looking for a backup site for all of the data on the company servers. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "data center",
                    "virtualization",
                    "dedicated servers",
                    "software defined networking"
                ],
                "explanation": "A data center is a facility used for storage and processing of data, serving as a backup site for disaster recovery plans."
            },
            "fr": {
                "title": "9. Un administrateur réseau a été chargé de créer un plan de reprise après sinistre. Dans ce cadre, il recherche un site de sauvegarde pour toutes les données des serveurs de l’entreprise. Quel service ou quelle technologie répondrait à ce besoin ?",
                "text": "",
                "options": [
                    "centre de données",
                    "virtualisation",
                    "serveurs dédiés",
                    "réseau défini par logiciel"
                ],
                "explanation": "Un centre de données est une installation utilisée pour le stockage et le traitement des données, pouvant servir de site de sauvegarde dans un plan de reprise après sinistre."
            }
        }
    },
    {
        "title": "10. Quel type de paquet OSPF est utilisé par un routeur pour découvrir les routeurs voisins et établir une adjacence de voisinage ?",
        "text": "",
        "images": [],
        "options": [
            "mise à jour d’état de liens",
            "hello",
            "description de base de données",
            "requête d’état de liens"
        ],
        "correct": [
            1
        ],
        "explanation": "Le paquet Hello, OSPF de type 1, est utilisé pour découvrir les voisins et établir les adjacences de voisinage.",
        "id": 10,
        "i18n": {
            "en": {
                "title": "10. Which type of OSPF packet is used by a router to discover neighbor routers and establish neighbor adjacency?",
                "text": "",
                "options": [
                    "link-state update",
                    "hello",
                    "database description",
                    "link-state request"
                ],
                "explanation": "The Hello packet (OSPF Type 1) is used to discover neighbors and establish neighbor adjacencies."
            },
            "fr": {
                "title": "10. Quel type de paquet OSPF est utilisé par un routeur pour découvrir les routeurs voisins et établir une adjacence de voisinage ?",
                "text": "",
                "options": [
                    "mise à jour d’état de liens",
                    "hello",
                    "description de base de données",
                    "requête d’état de liens"
                ],
                "explanation": "Le paquet Hello, OSPF de type 1, est utilisé pour découvrir les voisins et établir les adjacences de voisinage."
            }
        }
    },
    {
        "title": "11. Quelles sont deux caractéristiques d’un virus ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Un virus possède une vulnérabilité d’activation, un mécanisme de propagation et une charge utile.",
            "Un virus peut rester dormant puis s’activer à une heure ou une date précise.",
            "Un virus fournit à l’attaquant des données sensibles, comme des mots de passe.",
            "Un virus se réplique de façon autonome en exploitant des vulnérabilités dans les réseaux.",
            "Un virus nécessite généralement une activation par l’utilisateur final."
        ],
        "correct": [
            1,
            4
        ],
        "explanation": "Un virus nécessite généralement une activation par l’utilisateur final et peut rester dormant avant de s’activer à une date ou une heure précise.",
        "id": 11,
        "i18n": {
            "en": {
                "title": "11. Which two statements are characteristics of a virus? (Choose two.)",
                "text": "",
                "options": [
                    "A virus has an enabling vulnerability, a propagation mechanism, and a payload.",
                    "A virus can be dormant and then activate at a specific time or date.",
                    "A virus provides the attacker with sensitive data, such as passwords.",
                    "A virus replicates itself by independently exploiting vulnerabilities in networks.",
                    "A virus typically requires end-user activation."
                ],
                "explanation": "A virus typically requires end-user activation and can lie dormant before activating at a specific time/date."
            },
            "fr": {
                "title": "11. Quelles sont deux caractéristiques d’un virus ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Un virus possède une vulnérabilité d’activation, un mécanisme de propagation et une charge utile.",
                    "Un virus peut rester dormant puis s’activer à une heure ou une date précise.",
                    "Un virus fournit à l’attaquant des données sensibles, comme des mots de passe.",
                    "Un virus se réplique de façon autonome en exploitant des vulnérabilités dans les réseaux.",
                    "Un virus nécessite généralement une activation par l’utilisateur final."
                ],
                "explanation": "Un virus nécessite généralement une activation par l’utilisateur final et peut rester dormant avant de s’activer à une date ou une heure précise."
            }
        }
    },
    {
        "title": "12. Quelle technologie d’accès WAN public utilise des lignes téléphoniques en cuivre pour fournir un accès à des abonnés multiplexés dans une seule connexion T3 ?",
        "text": "",
        "images": [],
        "options": [
            "RNIS",
            "DSL",
            "câble",
            "accès commuté"
        ],
        "correct": [
            1
        ],
        "explanation": "Le DSL utilise les lignes téléphoniques en cuivre existantes ; un DSLAM multiplexe plusieurs abonnés DSL vers une liaison de collecte à haute capacité, par exemple une liaison T3.",
        "id": 12,
        "i18n": {
            "en": {
                "title": "12. Which public WAN access technology utilizes copper telephone lines to provide access to subscribers that are multiplexed into a single T3 link connection?",
                "text": "",
                "options": [
                    "ISDN",
                    "DSL",
                    "cable",
                    "dialup"
                ],
                "explanation": "DSL uses existing copper telephone lines; a DSLAM multiplexes multiple DSL subscribers into a high-capacity backhaul such as a T3 link."
            },
            "fr": {
                "title": "12. Quelle technologie d’accès WAN public utilise des lignes téléphoniques en cuivre pour fournir un accès à des abonnés multiplexés dans une seule connexion T3 ?",
                "text": "",
                "options": [
                    "RNIS",
                    "DSL",
                    "câble",
                    "accès commuté"
                ],
                "explanation": "Le DSL utilise les lignes téléphoniques en cuivre existantes ; un DSLAM multiplexe plusieurs abonnés DSL vers une liaison de collecte à haute capacité, par exemple une liaison T3."
            }
        }
    },
    {
        "title": "13. Un client a besoin d’une connexion WAN métropolitaine offrant une bande passante dédiée à haut débit entre deux sites. Quel type de connexion WAN répondrait le mieux à ce besoin ?",
        "text": "",
        "images": [],
        "options": [
            "réseau à commutation de paquets",
            "WAN Ethernet",
            "réseau à commutation de circuits",
            "MPLS"
        ],
        "correct": [
            1
        ],
        "explanation": "Le WAN Ethernet, souvent fourni sous forme de Metro Ethernet, offre une bande passante dédiée à haut débit dans une zone métropolitaine et s’intègre naturellement aux LAN Ethernet existants.",
        "id": 13,
        "i18n": {
            "en": {
                "title": "13. A customer needs a metropolitan area WAN connection that provides high-speed, dedicated bandwidth between two sites. Which type of WAN connection would best fulfill this need?",
                "text": "",
                "options": [
                    "packet-switched network",
                    "Ethernet WAN",
                    "circuit-switched network",
                    "MPLS"
                ],
                "explanation": "Ethernet WAN, often delivered as Metro Ethernet, provides high-speed dedicated bandwidth across a metropolitan area and integrates naturally with existing Ethernet LANs."
            },
            "fr": {
                "title": "13. Un client a besoin d’une connexion WAN métropolitaine offrant une bande passante dédiée à haut débit entre deux sites. Quel type de connexion WAN répondrait le mieux à ce besoin ?",
                "text": "",
                "options": [
                    "réseau à commutation de paquets",
                    "WAN Ethernet",
                    "réseau à commutation de circuits",
                    "MPLS"
                ],
                "explanation": "Le WAN Ethernet, souvent fourni sous forme de Metro Ethernet, offre une bande passante dédiée à haut débit dans une zone métropolitaine et s’intègre naturellement aux LAN Ethernet existants."
            }
        }
    },
    {
        "title": "14. Une entreprise a fait appel à une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. La société envoie une équipe effectuer des tests d’intrusion sur le réseau. Pourquoi l’équipe utiliserait-elle des débogueurs ?",
        "text": "",
        "images": [],
        "options": [
            "pour détecter des outils installés dans des fichiers et répertoires permettant à des acteurs malveillants d’accéder et de contrôler à distance un ordinateur ou un réseau",
            "pour faire de la rétro-ingénierie de fichiers binaires lors de l’écriture d’exploits et de l’analyse de malwares",
            "pour obtenir des systèmes d’exploitation spécialement conçus et préchargés avec des outils optimisés pour le piratage",
            "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau"
        ],
        "correct": [
            1
        ],
        "explanation": "Les débogueurs permettent la rétro-ingénierie de fichiers binaires et sont utilisés pour écrire des exploits et analyser des malwares, par exemple GDB, WinDbg ou IDA Pro.",
        "id": 14,
        "i18n": {
            "en": {
                "title": "14. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use debuggers?",
                "text": "",
                "options": [
                    "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
                    "to reverse engineer binary files when writing exploits and when analyzing malware",
                    "to obtain specially designed operating systems preloaded with tools optimized for hacking",
                    "to detect any evidence of a hack or malware in a computer or network"
                ],
                "explanation": "Debuggers reverse engineer binary files, used for writing exploits and analyzing malware (e.g., GDB, WinDbg, IDA Pro)."
            },
            "fr": {
                "title": "14. Une entreprise a fait appel à une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. La société envoie une équipe effectuer des tests d’intrusion sur le réseau. Pourquoi l’équipe utiliserait-elle des débogueurs ?",
                "text": "",
                "options": [
                    "pour détecter des outils installés dans des fichiers et répertoires permettant à des acteurs malveillants d’accéder et de contrôler à distance un ordinateur ou un réseau",
                    "pour faire de la rétro-ingénierie de fichiers binaires lors de l’écriture d’exploits et de l’analyse de malwares",
                    "pour obtenir des systèmes d’exploitation spécialement conçus et préchargés avec des outils optimisés pour le piratage",
                    "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau"
                ],
                "explanation": "Les débogueurs permettent la rétro-ingénierie de fichiers binaires et sont utilisés pour écrire des exploits et analyser des malwares, par exemple GDB, WinDbg ou IDA Pro."
            }
        }
    },
    {
        "title": "15. Examinez la sortie suivante pour une ACL appliquée à un routeur avec la commande access-class in. Que peut déterminer un administrateur réseau à partir de la sortie affichée ?",
        "text": "<pre><code>R1#\nStandard IP access list 2\n10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches)\n20 deny any (1 match)</code></pre>",
        "images": [],
        "options": [
            "Deux équipements connectés au routeur ont des adresses IP 192.168.10.x.",
            "Deux équipements ont pu utiliser SSH ou Telnet pour accéder au routeur.",
            "Le trafic provenant d’un équipement n’a pas été autorisé à entrer sur un port du routeur et à ressortir par un autre port.",
            "Le trafic provenant de deux équipements a été autorisé à entrer sur un port du routeur et à ressortir par un autre port."
        ],
        "correct": [
            1
        ],
        "explanation": "La commande access-class est utilisée uniquement sur les ports VTY, pour Telnet ou SSH. Les 2 correspondances indiquent que deux équipements ont été autorisés à accéder au routeur via les ports VTY.",
        "id": 15,
        "i18n": {
            "en": {
                "title": "15. Consider the following output for an ACL that has been applied to a router via the access-class in command. What can a network administrator determine from the output that is shown?",
                "text": "<pre><code>R1#\nStandard IP access list 2\n10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches)\n20 deny any (1 match)</code></pre>",
                "options": [
                    "Two devices connected to the router have IP addresses of 192.168.10.x.",
                    "Two devices were able to use SSH or Telnet to gain access to the router.",
                    "Traffic from one device was not allowed to come into one router port and be routed outbound a different router port.",
                    "Traffic from two devices was allowed to enter one router port and be routed outbound to a different router port."
                ],
                "explanation": "The access-class command is used only on VTY ports (Telnet/SSH). The 2 matches indicate two devices were allowed access through the VTY ports."
            },
            "fr": {
                "title": "15. Examinez la sortie suivante pour une ACL appliquée à un routeur avec la commande access-class in. Que peut déterminer un administrateur réseau à partir de la sortie affichée ?",
                "text": "<pre><code>R1#\nStandard IP access list 2\n10 permit 192.168.10.0, wildcard bits 0.0.0.255 (2 matches)\n20 deny any (1 match)</code></pre>",
                "options": [
                    "Deux équipements connectés au routeur ont des adresses IP 192.168.10.x.",
                    "Deux équipements ont pu utiliser SSH ou Telnet pour accéder au routeur.",
                    "Le trafic provenant d’un équipement n’a pas été autorisé à entrer sur un port du routeur et à ressortir par un autre port.",
                    "Le trafic provenant de deux équipements a été autorisé à entrer sur un port du routeur et à ressortir par un autre port."
                ],
                "explanation": "La commande access-class est utilisée uniquement sur les ports VTY, pour Telnet ou SSH. Les 2 correspondances indiquent que deux équipements ont été autorisés à accéder au routeur via les ports VTY."
            }
        }
    },
    {
        "title": "16. Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour effacer les entrées dynamiques avant l’expiration du délai d’inactivité ?",
        "text": "",
        "images": [],
        "options": [
            "clear ip dhcp",
            "clear ip nat translation",
            "clear access-list counters",
            "clear ip pat statistics"
        ],
        "correct": [
            1
        ],
        "explanation": "La commande clear ip nat translation efface manuellement les entrées NAT dynamiques avant l’expiration du délai de 24 heures.",
        "id": 16,
        "i18n": {
            "en": {
                "title": "16. What command would be used as part of configuring NAT or PAT to clear dynamic entries before the timeout has expired?",
                "text": "",
                "options": [
                    "clear ip dhcp",
                    "clear ip nat translation",
                    "clear access-list counters",
                    "clear ip pat statistics"
                ],
                "explanation": "The clear ip nat translation command manually clears dynamic NAT entries before the 24-hour timeout expires."
            },
            "fr": {
                "title": "16. Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour effacer les entrées dynamiques avant l’expiration du délai d’inactivité ?",
                "text": "",
                "options": [
                    "clear ip dhcp",
                    "clear ip nat translation",
                    "clear access-list counters",
                    "clear ip pat statistics"
                ],
                "explanation": "La commande clear ip nat translation efface manuellement les entrées NAT dynamiques avant l’expiration du délai de 24 heures."
            }
        }
    },
    {
        "title": "17. Quelles sont deux caractéristiques du trafic vidéo ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Le trafic vidéo consomme moins de ressources réseau que le trafic voix.",
            "La latence du trafic vidéo ne doit pas dépasser 400 ms.",
            "Le trafic vidéo est plus résilient aux pertes que le trafic voix.",
            "Le trafic vidéo nécessite au minimum 30 kbit/s de bande passante.",
            "Le trafic vidéo est imprévisible et irrégulier."
        ],
        "correct": [
            1,
            4
        ],
        "explanation": "La vidéo est imprévisible, irrégulière et en rafales, et sa latence ne doit pas dépasser 400 ms. Elle est moins tolérante aux pertes que la voix et nécessite davantage de bande passante.",
        "id": 17,
        "i18n": {
            "en": {
                "title": "17. What are two characteristics of video traffic? (Choose two.)",
                "text": "",
                "options": [
                    "Video traffic consumes less network resources than voice traffic consumes.",
                    "Video traffic latency should not exceed 400 ms.",
                    "Video traffic is more resilient to loss than voice traffic is.",
                    "Video traffic requires a minimum of 30 kbs of bandwidth.",
                    "Video traffic is unpredictable and inconsistent."
                ],
                "explanation": "Video is unpredictable, inconsistent, and bursty, and its latency should not exceed 400 ms. It is less resilient to loss than voice and needs more bandwidth."
            },
            "fr": {
                "title": "17. Quelles sont deux caractéristiques du trafic vidéo ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Le trafic vidéo consomme moins de ressources réseau que le trafic voix.",
                    "La latence du trafic vidéo ne doit pas dépasser 400 ms.",
                    "Le trafic vidéo est plus résilient aux pertes que le trafic voix.",
                    "Le trafic vidéo nécessite au minimum 30 kbit/s de bande passante.",
                    "Le trafic vidéo est imprévisible et irrégulier."
                ],
                "explanation": "La vidéo est imprévisible, irrégulière et en rafales, et sa latence ne doit pas dépasser 400 ms. Elle est moins tolérante aux pertes que la voix et nécessite davantage de bande passante."
            }
        }
    },
    {
        "title": "18. Reportez-vous à l’illustration. Un technicien configure R2 pour le NAT statique afin de permettre au client d’accéder au serveur web. Quelle est une raison possible pour laquelle le PC client ne peut pas accéder au serveur web ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2016/02/2017-06-26_224429.jpg"
        ],
        "options": [
            "L’instruction IP NAT est incorrecte.",
            "L’interface Fa0/1 doit être identifiée comme interface NAT externe.",
            "L’interface S0/0/0 doit être identifiée comme interface NAT externe.",
            "Il manque une liste de contrôle d’accès valide dans la configuration."
        ],
        "correct": [
            2
        ],
        "explanation": "L’interface S0/0/0 doit être identifiée comme interface NAT externe avec la commande R2(config-if)# ip nat outside.",
        "id": 18,
        "i18n": {
            "en": {
                "title": "18. Refer to the exhibit. A technician is configuring R2 for static NAT to allow the client to access the web server. What is a possible reason that the client PC cannot access the web server?",
                "text": "",
                "options": [
                    "The IP NAT statement is incorrect.",
                    "Interface Fa0/1 should be identified as the outside NAT interface.",
                    "Interface S0/0/0 should be identified as the outside NAT interface.",
                    "The configuration is missing a valid access control list."
                ],
                "explanation": "Interface S0/0/0 should be identified as the outside NAT interface using the R2(config-if)# ip nat outside command."
            },
            "fr": {
                "title": "18. Reportez-vous à l’illustration. Un technicien configure R2 pour le NAT statique afin de permettre au client d’accéder au serveur web. Quelle est une raison possible pour laquelle le PC client ne peut pas accéder au serveur web ?",
                "text": "",
                "options": [
                    "L’instruction IP NAT est incorrecte.",
                    "L’interface Fa0/1 doit être identifiée comme interface NAT externe.",
                    "L’interface S0/0/0 doit être identifiée comme interface NAT externe.",
                    "Il manque une liste de contrôle d’accès valide dans la configuration."
                ],
                "explanation": "L’interface S0/0/0 doit être identifiée comme interface NAT externe avec la commande R2(config-if)# ip nat outside."
            }
        }
    },
    {
        "title": "19. Lors de la mise en place d’un petit réseau de bureau, l’administrateur décide d’attribuer dynamiquement des adresses IP privées aux postes de travail et aux appareils mobiles. Quelle fonction doit être activée sur le routeur de l’entreprise pour permettre aux appareils du bureau d’accéder à Internet ?",
        "text": "",
        "images": [],
        "options": [
            "UPnP",
            "filtrage MAC",
            "NAT",
            "QoS"
        ],
        "correct": [
            2
        ],
        "explanation": "Le NAT convertit les adresses privées en adresses routables sur Internet, permettant aux appareils du bureau d’accéder à Internet.",
        "id": 19,
        "i18n": {
            "en": {
                "title": "19. In setting up a small office network, the network administrator decides to assign private IP addresses dynamically to workstations and mobile devices. Which feature must be enabled on the company router in order for office devices to access the internet?",
                "text": "",
                "options": [
                    "UPnP",
                    "MAC filtering",
                    "NAT",
                    "QoS"
                ],
                "explanation": "NAT converts private addresses to internet-routable addresses, allowing office devices to access the internet."
            },
            "fr": {
                "title": "19. Lors de la mise en place d’un petit réseau de bureau, l’administrateur décide d’attribuer dynamiquement des adresses IP privées aux postes de travail et aux appareils mobiles. Quelle fonction doit être activée sur le routeur de l’entreprise pour permettre aux appareils du bureau d’accéder à Internet ?",
                "text": "",
                "options": [
                    "UPnP",
                    "filtrage MAC",
                    "NAT",
                    "QoS"
                ],
                "explanation": "Le NAT convertit les adresses privées en adresses routables sur Internet, permettant aux appareils du bureau d’accéder à Internet."
            }
        }
    },
    {
        "title": "20. Un centre de données a récemment mis à jour un serveur physique afin d’héberger plusieurs systèmes d’exploitation sur un seul processeur. Il peut désormais fournir à chaque client un serveur web séparé sans devoir allouer un serveur physique distinct à chacun. Quelle tendance réseau est mise en œuvre dans ce cas ?",
        "text": "",
        "images": [],
        "options": [
            "collaboration en ligne",
            "BYOD",
            "virtualisation",
            "maintien de l’intégrité des communications"
        ],
        "correct": [
            2
        ],
        "explanation": "La virtualisation abstrait le matériel du serveur physique afin que plusieurs machines virtuelles, chacune avec son propre système d’exploitation et ses propres services, puissent fonctionner sur le même hôte physique.",
        "id": 20,
        "i18n": {
            "en": {
                "title": "20. A data center has recently updated a physical server to host multiple operating systems on a single CPU. The data center can now provide each customer with a separate web server without having to allocate an actual discrete server for each customer. What is the networking trend that is being implemented by the data center in this situation?",
                "text": "",
                "options": [
                    "online collaboration",
                    "BYOD",
                    "virtualization",
                    "maintaining communication integrity"
                ],
                "explanation": "Virtualization abstracts the physical server hardware so multiple virtual machines, each with its own operating system and services, can run on the same physical host."
            },
            "fr": {
                "title": "20. Un centre de données a récemment mis à jour un serveur physique afin d’héberger plusieurs systèmes d’exploitation sur un seul processeur. Il peut désormais fournir à chaque client un serveur web séparé sans devoir allouer un serveur physique distinct à chacun. Quelle tendance réseau est mise en œuvre dans ce cas ?",
                "text": "",
                "options": [
                    "collaboration en ligne",
                    "BYOD",
                    "virtualisation",
                    "maintien de l’intégrité des communications"
                ],
                "explanation": "La virtualisation abstrait le matériel du serveur physique afin que plusieurs machines virtuelles, chacune avec son propre système d’exploitation et ses propres services, puissent fonctionner sur le même hôte physique."
            }
        }
    },
    {
        "title": "21. Reportez-vous à l’illustration. Quelle adresse ou quelles adresses représentent l’adresse globale interne ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2016/02/2017-06-26_224149.jpg"
        ],
        "options": [
            "192.168.0.100",
            "10.1.1.2",
            "toute adresse du réseau 10.1.1.0",
            "209.165.20.25"
        ],
        "correct": [
            3
        ],
        "explanation": "L’adresse globale interne est l’adresse d’un hôte interne telle qu’elle est vue depuis le réseau externe, ici 209.165.20.25, l’adresse de l’interface externe du routeur.",
        "id": 21,
        "i18n": {
            "en": {
                "title": "21. Refer to the exhibit. Which address or addresses represent the inside global address?",
                "text": "",
                "options": [
                    "192.168.0.100",
                    "10.1.1.2",
                    "any address in the 10.1.1.0 network",
                    "209.165.20.25"
                ],
                "explanation": "The inside global address is the address of an internal host as seen from the outside network, here 209.165.20.25 (the router's outside interface address)."
            },
            "fr": {
                "title": "21. Reportez-vous à l’illustration. Quelle adresse ou quelles adresses représentent l’adresse globale interne ?",
                "text": "",
                "options": [
                    "192.168.0.100",
                    "10.1.1.2",
                    "toute adresse du réseau 10.1.1.0",
                    "209.165.20.25"
                ],
                "explanation": "L’adresse globale interne est l’adresse d’un hôte interne telle qu’elle est vue depuis le réseau externe, ici 209.165.20.25, l’adresse de l’interface externe du routeur."
            }
        }
    },
    {
        "title": "22. Quels sont deux protocoles IPsec utilisés pour assurer l’intégrité des données ?",
        "text": "",
        "images": [],
        "options": [
            "MD5",
            "DH",
            "AES",
            "SHA",
            "RSA"
        ],
        "correct": [
            0,
            3
        ],
        "explanation": "MD5 et SHA assurent l’intégrité des données. AES assure la confidentialité, DH sert à l’échange de clés et RSA à l’authentification.",
        "id": 22,
        "i18n": {
            "en": {
                "title": "22. Which two IPsec protocols are used to provide data integrity?",
                "text": "",
                "options": [
                    "MD5",
                    "DH",
                    "AES",
                    "SHA",
                    "RSA"
                ],
                "explanation": "MD5 and SHA provide data integrity. AES provides confidentiality, DH is for key exchange, and RSA is for authentication."
            },
            "fr": {
                "title": "22. Quels sont deux protocoles IPsec utilisés pour assurer l’intégrité des données ?",
                "text": "",
                "options": [
                    "MD5",
                    "DH",
                    "AES",
                    "SHA",
                    "RSA"
                ],
                "explanation": "MD5 et SHA assurent l’intégrité des données. AES assure la confidentialité, DH sert à l’échange de clés et RSA à l’authentification."
            }
        }
    },
    {
        "title": "23. Si un hôte externe ne dispose pas du client Cisco AnyConnect préinstallé, comment l’hôte obtient-il l’image du client ?",
        "text": "",
        "images": [],
        "options": [
            "Le client Cisco AnyConnect est installé par défaut sur la plupart des grands systèmes d’exploitation.",
            "L’hôte initie une connexion VPN sans client à l’aide d’un navigateur web compatible afin de télécharger le client.",
            "L’hôte initie une connexion sans client vers un serveur TFTP pour télécharger le client.",
            "L’hôte initie une connexion sans client vers un serveur FTP pour télécharger le client."
        ],
        "correct": [
            1
        ],
        "explanation": "L’utilisateur distant initie une connexion VPN SSL sans client via un navigateur web compatible, puis télécharge et installe le client AnyConnect.",
        "id": 23,
        "i18n": {
            "en": {
                "title": "23. If an outside host does not have the Cisco AnyConnect client preinstalled, how would the host gain access to the client image?",
                "text": "",
                "options": [
                    "The Cisco AnyConnect client is installed by default on most major operating systems.",
                    "The host initiates a clientless VPN connection using a compliant web browser to download the client.",
                    "The host initiates a clientless connection to a TFTP server to download the client.",
                    "The host initiates a clientless connection to an FTP server to download the client."
                ],
                "explanation": "The remote user initiates a clientless SSL VPN connection via a compliant web browser, then downloads and installs the AnyConnect client."
            },
            "fr": {
                "title": "23. Si un hôte externe ne dispose pas du client Cisco AnyConnect préinstallé, comment l’hôte obtient-il l’image du client ?",
                "text": "",
                "options": [
                    "Le client Cisco AnyConnect est installé par défaut sur la plupart des grands systèmes d’exploitation.",
                    "L’hôte initie une connexion VPN sans client à l’aide d’un navigateur web compatible afin de télécharger le client.",
                    "L’hôte initie une connexion sans client vers un serveur TFTP pour télécharger le client.",
                    "L’hôte initie une connexion sans client vers un serveur FTP pour télécharger le client."
                ],
                "explanation": "L’utilisateur distant initie une connexion VPN SSL sans client via un navigateur web compatible, puis télécharge et installe le client AnyConnect."
            }
        }
    },
    {
        "title": "24. Une entreprise envisage de mettre à jour la connexion WAN du campus. Quelles sont deux options WAN qui sont des exemples d’architecture WAN privée ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "ligne louée",
            "câble",
            "ligne d’abonné numérique",
            "WAN Ethernet",
            "Wi-Fi municipal"
        ],
        "correct": [
            0,
            3
        ],
        "explanation": "L’infrastructure WAN privée inclut les lignes louées et le WAN Ethernet. Le DSL, le câble et le Wi-Fi municipal relèvent d’une infrastructure WAN publique.",
        "id": 24,
        "i18n": {
            "en": {
                "title": "24. A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
                "text": "",
                "options": [
                    "leased line",
                    "cable",
                    "digital subscriber line",
                    "Ethernet WAN",
                    "municipal Wi-Fi"
                ],
                "explanation": "Private WAN infrastructure includes leased lines and Ethernet WAN. DSL, cable, and municipal Wi-Fi are public WAN infrastructure."
            },
            "fr": {
                "title": "24. Une entreprise envisage de mettre à jour la connexion WAN du campus. Quelles sont deux options WAN qui sont des exemples d’architecture WAN privée ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "ligne louée",
                    "câble",
                    "ligne d’abonné numérique",
                    "WAN Ethernet",
                    "Wi-Fi municipal"
                ],
                "explanation": "L’infrastructure WAN privée inclut les lignes louées et le WAN Ethernet. Le DSL, le câble et le Wi-Fi municipal relèvent d’une infrastructure WAN publique."
            }
        }
    },
    {
        "title": "25. Quel type de marquage QoS est appliqué aux trames Ethernet ?",
        "text": "",
        "images": [],
        "options": [
            "priorité IP",
            "DSCP",
            "ToS",
            "CoS"
        ],
        "correct": [
            3
        ],
        "explanation": "Le marquage CoS permet de marquer une trame Ethernet de couche 2 avec huit niveaux de priorité, de 0 à 7.",
        "id": 25,
        "i18n": {
            "en": {
                "title": "25. Which type of QoS marking is applied to Ethernet frames?",
                "text": "",
                "options": [
                    "IP precedence",
                    "DSCP",
                    "ToS",
                    "CoS"
                ],
                "explanation": "CoS marking allows a Layer 2 Ethernet frame to be marked with eight levels of priority (0-7)."
            },
            "fr": {
                "title": "25. Quel type de marquage QoS est appliqué aux trames Ethernet ?",
                "text": "",
                "options": [
                    "priorité IP",
                    "DSCP",
                    "ToS",
                    "CoS"
                ],
                "explanation": "Le marquage CoS permet de marquer une trame Ethernet de couche 2 avec huit niveaux de priorité, de 0 à 7."
            }
        }
    },
    {
        "title": "26. Reportez-vous à l’illustration. Les routeurs R1 et R2 sont connectés par une liaison série. Un routeur est configuré comme maître NTP et l’autre comme client NTP. Quelles sont deux informations que l’on peut obtenir à partir de la sortie partielle de la commande show ntp associations detail sur R2 ? (Choisissez deux réponses.)",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2017/03/2017-03-11_115313.jpg"
        ],
        "options": [
            "Les deux routeurs sont configurés pour utiliser NTPv2.",
            "Le routeur R1 est le maître et R2 est le client.",
            "L’adresse IP de R2 est 192.168.1.2.",
            "Le routeur R2 est le maître et R1 est le client.",
            "L’adresse IP de R1 est 192.168.1.2."
        ],
        "correct": [
            1,
            4
        ],
        "explanation": "La commande show ntp associations révèle l’adresse IP du maître NTP, R1 à l’adresse 192.168.1.2, avec R2 comme client.",
        "id": 26,
        "i18n": {
            "en": {
                "title": "26. Refer to the exhibit. Routers R1 and R2 are connected via a serial link. One router is configured as the NTP master, and the other is an NTP client. Which two pieces of information can be obtained from the partial output of the show ntp associations detail command on R2? (Choose two.)",
                "text": "",
                "options": [
                    "Both routers are configured to use NTPv2.",
                    "Router R1 is the master, and R2 is the client",
                    "The IP address of R2 is 192.168.1.2.",
                    "Router R2 is the master, and R1 is the client",
                    "The IP address of R1 is 192.168.1.2"
                ],
                "explanation": "The show ntp associations command reveals the IP address of the NTP master (R1 at 192.168.1.2), with R2 as the client."
            },
            "fr": {
                "title": "26. Reportez-vous à l’illustration. Les routeurs R1 et R2 sont connectés par une liaison série. Un routeur est configuré comme maître NTP et l’autre comme client NTP. Quelles sont deux informations que l’on peut obtenir à partir de la sortie partielle de la commande show ntp associations detail sur R2 ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Les deux routeurs sont configurés pour utiliser NTPv2.",
                    "Le routeur R1 est le maître et R2 est le client.",
                    "L’adresse IP de R2 est 192.168.1.2.",
                    "Le routeur R2 est le maître et R1 est le client.",
                    "L’adresse IP de R1 est 192.168.1.2."
                ],
                "explanation": "La commande show ntp associations révèle l’adresse IP du maître NTP, R1 à l’adresse 192.168.1.2, avec R2 comme client."
            }
        }
    },
    {
        "title": "27. Reportez-vous à l’illustration. L’administrateur réseau ayant l’adresse IP 10.0.70.23/25 doit accéder au serveur FTP de l’entreprise (10.0.54.5/28). Ce serveur FTP est aussi un serveur web accessible à tous les employés internes sur les réseaux 10.x.x.x. Aucun autre trafic ne doit être autorisé vers ce serveur. Quelle ACL étendue serait utilisée pour filtrer ce trafic, et comment cette ACL serait-elle appliquée ? (Choisissez deux réponses.)",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2015/06/i209858v1n1_209858.png"
        ],
        "options": [
            "R1(config)# interface s0/0/0<br>R1(config-if)# ip access-group 105 out<br>R2(config)# interface gi0/0<br>R2(config-if)# ip access-group 105 in",
            "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21<br>access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www<br>access-list 105 deny ip any host 10.0.54.5<br>access-list 105 permit ip any any",
            "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5<br>access-list 105 permit tcp any host 10.0.54.5 eq www<br>access-list 105 permit ip any any",
            "R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
            "access-list 105 permit tcp host 10.0.54.5 any eq www<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21"
        ],
        "correct": [
            1,
            3
        ],
        "explanation": "L’ACL autorise l’accès FTP pour l’hôte 10.0.70.23 et l’accès HTTP depuis tout hôte 10.x.x.x, refuse tout autre trafic vers le serveur et autorise le reste. Elle est idéalement placée au plus près du serveur, en sortie sur R1 gi0/0.",
        "id": 27,
        "i18n": {
            "en": {
                "title": "27. Refer to the exhibit. The network administrator that has the IP address of 10.0.70.23/25 needs to have access to the corporate FTP server (10.0.54.5/28). The FTP server is also a web server that is accessible to all internal employees on networks within the 10.x.x.x address. No other traffic should be allowed to this server. Which extended ACL would be used to filter this traffic, and how would this ACL be applied? (Choose two.)",
                "text": "",
                "options": [
                    "R1(config)# interface s0/0/0<br>R1(config-if)# ip access-group 105 out<br>R2(config)# interface gi0/0<br>R2(config-if)# ip access-group 105 in",
                    "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21<br>access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www<br>access-list 105 deny ip any host 10.0.54.5<br>access-list 105 permit ip any any",
                    "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5<br>access-list 105 permit tcp any host 10.0.54.5 eq www<br>access-list 105 permit ip any any",
                    "R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
                    "access-list 105 permit tcp host 10.0.54.5 any eq www<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21"
                ],
                "explanation": "The ACL allows host 10.0.70.23 FTP access and HTTP access from any 10.x.x.x host, denies all other traffic to the server, and permits everything else. It is best placed closest to the server (R1 gi0/0 out)."
            },
            "fr": {
                "title": "27. Reportez-vous à l’illustration. L’administrateur réseau ayant l’adresse IP 10.0.70.23/25 doit accéder au serveur FTP de l’entreprise (10.0.54.5/28). Ce serveur FTP est aussi un serveur web accessible à tous les employés internes sur les réseaux 10.x.x.x. Aucun autre trafic ne doit être autorisé vers ce serveur. Quelle ACL étendue serait utilisée pour filtrer ce trafic, et comment cette ACL serait-elle appliquée ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "R1(config)# interface s0/0/0<br>R1(config-if)# ip access-group 105 out<br>R2(config)# interface gi0/0<br>R2(config-if)# ip access-group 105 in",
                    "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21<br>access-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www<br>access-list 105 deny ip any host 10.0.54.5<br>access-list 105 permit ip any any",
                    "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5<br>access-list 105 permit tcp any host 10.0.54.5 eq www<br>access-list 105 permit ip any any",
                    "R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
                    "access-list 105 permit tcp host 10.0.54.5 any eq www<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20<br>access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21"
                ],
                "explanation": "L’ACL autorise l’accès FTP pour l’hôte 10.0.70.23 et l’accès HTTP depuis tout hôte 10.x.x.x, refuse tout autre trafic vers le serveur et autorise le reste. Elle est idéalement placée au plus près du serveur, en sortie sur R1 gi0/0."
            }
        }
    },
    {
        "title": "28. Reportez-vous à l’illustration. Si l’administrateur réseau crée une ACL standard qui autorise uniquement les équipements connectés au réseau R2 G0/0 à accéder aux équipements de l’interface R1 G0/1, comment l’ACL doit-elle être appliquée ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2016/02/i282157v1n1_282156.png"
        ],
        "options": [
            "en entrée sur l’interface R2 G0/0",
            "en sortie sur l’interface R1 G0/1",
            "en entrée sur l’interface R1 G0/1",
            "en sortie sur l’interface R2 S0/0/1"
        ],
        "correct": [
            1
        ],
        "explanation": "Les ACL standard filtrent uniquement sur l’adresse IP source ; elles sont donc placées au plus près de la destination. La destination est le réseau R1 G0/1, donc l’ACL doit être appliquée en sortie sur R1 G0/1.",
        "id": 28,
        "i18n": {
            "en": {
                "title": "28. Refer to the exhibit. If the network administrator created a standard ACL that allows only devices that connect to the R2 G0/0 network access to the devices on the R1 G0/1 interface, how should the ACL be applied?",
                "text": "",
                "options": [
                    "inbound on the R2 G0/0 interface",
                    "outbound on the R1 G0/1 interface",
                    "inbound on the R1 G0/1 interface",
                    "outbound on the R2 S0/0/1 interface"
                ],
                "explanation": "Standard ACLs filter on source IP only, so they are placed closest to the destination. The destination is the R1 G0/1 network, so apply it outbound on R1 G0/1."
            },
            "fr": {
                "title": "28. Reportez-vous à l’illustration. Si l’administrateur réseau crée une ACL standard qui autorise uniquement les équipements connectés au réseau R2 G0/0 à accéder aux équipements de l’interface R1 G0/1, comment l’ACL doit-elle être appliquée ?",
                "text": "",
                "options": [
                    "en entrée sur l’interface R2 G0/0",
                    "en sortie sur l’interface R1 G0/1",
                    "en entrée sur l’interface R1 G0/1",
                    "en sortie sur l’interface R2 S0/0/1"
                ],
                "explanation": "Les ACL standard filtrent uniquement sur l’adresse IP source ; elles sont donc placées au plus près de la destination. La destination est le réseau R1 G0/1, donc l’ACL doit être appliquée en sortie sur R1 G0/1."
            }
        }
    },
    {
        "title": "29. Quelle est une caractéristique d’un hyperviseur de type 2 ?",
        "text": "",
        "images": [],
        "options": [
            "il ne nécessite pas de logiciel de console de gestion",
            "il a un accès direct aux ressources matérielles du serveur",
            "il est le mieux adapté aux environnements d’entreprise",
            "il s’installe directement sur le matériel"
        ],
        "correct": [
            0
        ],
        "explanation": "Les hyperviseurs de type 2 sont hébergés sur un système d’exploitation sous-jacent, ne nécessitent pas de console de gestion et n’ont pas d’accès direct au matériel.",
        "id": 29,
        "i18n": {
            "en": {
                "title": "29. Which is a characteristic of a Type 2 hypervisor?",
                "text": "",
                "options": [
                    "does not require management console software",
                    "has direct access to server hardware resources",
                    "best suited for enterprise environments",
                    "installs directly on hardware"
                ],
                "explanation": "Type 2 hypervisors are hosted on an underlying OS, do not require a management console, and do not have direct access to hardware."
            },
            "fr": {
                "title": "29. Quelle est une caractéristique d’un hyperviseur de type 2 ?",
                "text": "",
                "options": [
                    "il ne nécessite pas de logiciel de console de gestion",
                    "il a un accès direct aux ressources matérielles du serveur",
                    "il est le mieux adapté aux environnements d’entreprise",
                    "il s’installe directement sur le matériel"
                ],
                "explanation": "Les hyperviseurs de type 2 sont hébergés sur un système d’exploitation sous-jacent, ne nécessitent pas de console de gestion et n’ont pas d’accès direct au matériel."
            }
        }
    },
    {
        "title": "30. Quels sont les deux types de connexions VPN ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "PPPoE",
            "Frame Relay",
            "site à site",
            "accès distant",
            "ligne louée"
        ],
        "correct": [
            2,
            3
        ],
        "explanation": "Les deux types de connexions VPN sont site à site et accès distant. PPPoE, les lignes louées et Frame Relay sont des technologies WAN.",
        "id": 30,
        "i18n": {
            "en": {
                "title": "30. What are the two types of VPN connections? (Choose two.)",
                "text": "",
                "options": [
                    "PPPoE",
                    "Frame Relay",
                    "site-to-site",
                    "remote access",
                    "leased line"
                ],
                "explanation": "The two VPN connection types are site-to-site and remote access. PPPoE, leased lines, and Frame Relay are WAN technologies."
            },
            "fr": {
                "title": "30. Quels sont les deux types de connexions VPN ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "PPPoE",
                    "Frame Relay",
                    "site à site",
                    "accès distant",
                    "ligne louée"
                ],
                "explanation": "Les deux types de connexions VPN sont site à site et accès distant. PPPoE, les lignes louées et Frame Relay sont des technologies WAN."
            }
        }
    },
    {
        "title": "31. Reportez-vous à l’illustration. Quelles sont les trois conclusions que l’on peut tirer de la sortie affichée ? (Choisissez trois réponses.)",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2017/07/i212860v1n1_212860-1.png"
        ],
        "options": [
            "Le DR est joignable via l’interface GigabitEthernet 0/0.",
            "Il s’est écoulé 9 secondes depuis le dernier paquet hello envoyé.",
            "Cette interface utilise la priorité par défaut.",
            "Les valeurs d’ID de routeur n’ont pas été le critère utilisé pour sélectionner le DR et le BDR.",
            "L’ID de routeur du routeur DR est 3.3.3.3.",
            "Le BDR a trois voisins."
        ],
        "correct": [
            0,
            1,
            3
        ],
        "explanation": "Le DR est joignable via Gi0/0 ; avec un intervalle Hello de 10 secondes et « Hello due in 00:00:01 », 9 secondes se sont écoulées ; et R3 est DROTHER à cause d’une priorité 0, donc l’ID de routeur n’a pas été le facteur décisif.",
        "id": 31,
        "i18n": {
            "en": {
                "title": "31. Refer to the exhibit. What three conclusions can be drawn from the displayed output? (Choose three.)",
                "text": "",
                "options": [
                    "The DR can be reached through the GigabitEthernet 0/0 interface.",
                    "There have been 9 seconds since the last hello packet sent.",
                    "This interface is using the default priority.",
                    "The router ID values were not the criteria used to select the DR and the BDR.",
                    "The router ID on the DR router is 3.3.3.3",
                    "The BDR has three neighbors."
                ],
                "explanation": "The DR is reachable through Gi0/0; with a 10 second Hello interval and 'Hello due in 00:00:01', 9 seconds have elapsed; and R3 is a DROTHER due to priority 0, so router ID was not the deciding factor."
            },
            "fr": {
                "title": "31. Reportez-vous à l’illustration. Quelles sont les trois conclusions que l’on peut tirer de la sortie affichée ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "Le DR est joignable via l’interface GigabitEthernet 0/0.",
                    "Il s’est écoulé 9 secondes depuis le dernier paquet hello envoyé.",
                    "Cette interface utilise la priorité par défaut.",
                    "Les valeurs d’ID de routeur n’ont pas été le critère utilisé pour sélectionner le DR et le BDR.",
                    "L’ID de routeur du routeur DR est 3.3.3.3.",
                    "Le BDR a trois voisins."
                ],
                "explanation": "Le DR est joignable via Gi0/0 ; avec un intervalle Hello de 10 secondes et « Hello due in 00:00:01 », 9 secondes se sont écoulées ; et R3 est DROTHER à cause d’une priorité 0, donc l’ID de routeur n’a pas été le facteur décisif."
            }
        }
    },
    {
        "title": "32. Reportez-vous à l’illustration. Un administrateur réseau configure une ACL pour limiter la connexion aux lignes vty de R1 uniquement aux postes du groupe IT du réseau 192.168.22.0/28. Il vérifie que les connexions Telnet depuis un poste en 192.168.22.5 vers R1 fonctionnent avant l’application de l’ACL. Cependant, après l’application de l’ACL à l’interface Fa0/0, les connexions Telnet sont refusées. Quelle est la cause de l’échec de connexion ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2015/06/i209884v1n1_209884.png"
        ],
        "options": [
            "Le mot de passe enable secret n’est pas configuré sur R1.",
            "Le réseau du groupe IT est inclus dans l’instruction deny.",
            "L’ACE permit spécifie un mauvais numéro de port.",
            "L’ACE permit devrait spécifier le protocole ip au lieu de tcp.",
            "La commande login n’a pas été saisie pour les lignes vty."
        ],
        "correct": [
            1
        ],
        "explanation": "La plage de l’ACE deny 192.168.20.0 0.0.3.255 couvre 192.168.20.0 à 192.168.23.255, ce qui inclut le réseau du groupe IT 192.168.22.0/28. L’ordre des instructions deny et permit doit être inversé.",
        "id": 32,
        "i18n": {
            "en": {
                "title": "32. Refer to the exhibit. A network administrator is configuring an ACL to limit the connection to R1 vty lines to only the IT group workstations in the network 192.168.22.0/28. The administrator verifies the successful Telnet connections from a workstation with IP 192.168.22.5 to R1 before the ACL is applied. However, after the ACL is applied to the interface Fa0/0, Telnet connections are denied. What is the cause of the connection failure?",
                "text": "",
                "options": [
                    "The enable secret password is not configured on R1.",
                    "The IT group network is included in the deny statement.",
                    "The permit ACE specifies a wrong port number.",
                    "The permit ACE should specify protocol ip instead of tcp.",
                    "The login command has not been entered for vty lines."
                ],
                "explanation": "The deny ACE range 192.168.20.0 0.0.3.255 covers 192.168.20.0-192.168.23.255, which includes the IT group network 192.168.22.0/28. The order of deny and permit should be switched."
            },
            "fr": {
                "title": "32. Reportez-vous à l’illustration. Un administrateur réseau configure une ACL pour limiter la connexion aux lignes vty de R1 uniquement aux postes du groupe IT du réseau 192.168.22.0/28. Il vérifie que les connexions Telnet depuis un poste en 192.168.22.5 vers R1 fonctionnent avant l’application de l’ACL. Cependant, après l’application de l’ACL à l’interface Fa0/0, les connexions Telnet sont refusées. Quelle est la cause de l’échec de connexion ?",
                "text": "",
                "options": [
                    "Le mot de passe enable secret n’est pas configuré sur R1.",
                    "Le réseau du groupe IT est inclus dans l’instruction deny.",
                    "L’ACE permit spécifie un mauvais numéro de port.",
                    "L’ACE permit devrait spécifier le protocole ip au lieu de tcp.",
                    "La commande login n’a pas été saisie pour les lignes vty."
                ],
                "explanation": "La plage de l’ACE deny 192.168.20.0 0.0.3.255 couvre 192.168.20.0 à 192.168.23.255, ce qui inclut le réseau du groupe IT 192.168.22.0/28. L’ordre des instructions deny et permit doit être inversé."
            }
        }
    },
    {
        "title": "33. Quelle fonctionnalité mGRE apporte-t-il à la technologie DMVPN ?",
        "text": "",
        "images": [],
        "options": [
            "Il permet la création de tunnels alloués dynamiquement via une source de tunnel permanente au concentrateur et des destinations de tunnel dynamiques aux rayons.",
            "Il fournit un transport sécurisé d’informations privées sur des réseaux publics, comme Internet.",
            "C’est une solution logicielle Cisco permettant de créer plusieurs VPN de manière simple, dynamique et évolutive.",
            "Il crée une base de données de mappage distribuée des adresses IP publiques pour tous les rayons de tunnel VPN."
        ],
        "correct": [
            0
        ],
        "explanation": "mGRE permet la création dynamique de plusieurs tunnels de rayon à partir d’un seul concentrateur VPN permanent. NHRP gère le mappage d’adresses et IPsec gère le chiffrement.",
        "id": 33,
        "i18n": {
            "en": {
                "title": "33. What functionality does mGRE provide to the DMVPN technology?",
                "text": "",
                "options": [
                    "It allows the creation of dynamically allocated tunnels through a permanent tunnel source at the hub and dynamically allocated tunnel destinations at the spokes.",
                    "It provides secure transport of private information over public networks, such as the Internet.",
                    "It is a Cisco software solution for building multiple VPNs in an easy, dynamic, and scalable manner.",
                    "It creates a distributed mapping database of public IP addresses for all VPN tunnel spokes."
                ],
                "explanation": "mGRE allows dynamic creation of multiple spoke tunnels from one permanent VPN hub. NHRP handles address mapping and IPsec handles encryption."
            },
            "fr": {
                "title": "33. Quelle fonctionnalité mGRE apporte-t-il à la technologie DMVPN ?",
                "text": "",
                "options": [
                    "Il permet la création de tunnels alloués dynamiquement via une source de tunnel permanente au concentrateur et des destinations de tunnel dynamiques aux rayons.",
                    "Il fournit un transport sécurisé d’informations privées sur des réseaux publics, comme Internet.",
                    "C’est une solution logicielle Cisco permettant de créer plusieurs VPN de manière simple, dynamique et évolutive.",
                    "Il crée une base de données de mappage distribuée des adresses IP publiques pour tous les rayons de tunnel VPN."
                ],
                "explanation": "mGRE permet la création dynamique de plusieurs tunnels de rayon à partir d’un seul concentrateur VPN permanent. NHRP gère le mappage d’adresses et IPsec gère le chiffrement."
            }
        }
    },
    {
        "title": "34. Qu’est-ce qui est utilisé pour préremplir la table d’adjacence sur les équipements Cisco qui utilisent CEF pour traiter les paquets ?",
        "text": "",
        "images": [],
        "options": [
            "la FIB",
            "la table de routage",
            "la table ARP",
            "le DSP"
        ],
        "correct": [
            2
        ],
        "explanation": "La table d’adjacence CEF est préremplie par la table ARP, tandis que la FIB est préremplie par la table de routage.",
        "id": 34,
        "i18n": {
            "en": {
                "title": "34. What is used to pre-populate the adjacency table on Cisco devices that use CEF to process packets?",
                "text": "",
                "options": [
                    "the FIB",
                    "the routing table",
                    "the ARP table",
                    "the DSP"
                ],
                "explanation": "The CEF adjacency table is pre-populated by the ARP table, while the FIB is pre-populated by the routing table."
            },
            "fr": {
                "title": "34. Qu’est-ce qui est utilisé pour préremplir la table d’adjacence sur les équipements Cisco qui utilisent CEF pour traiter les paquets ?",
                "text": "",
                "options": [
                    "la FIB",
                    "la table de routage",
                    "la table ARP",
                    "le DSP"
                ],
                "explanation": "La table d’adjacence CEF est préremplie par la table ARP, tandis que la FIB est préremplie par la table de routage."
            }
        }
    },
    {
        "title": "35. Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour afficher les informations sur les paramètres de configuration NAT et le nombre d’adresses dans le pool ?",
        "text": "",
        "images": [],
        "options": [
            "show running-config",
            "show ip nat statistics",
            "show ip cache",
            "show version"
        ],
        "correct": [
            1
        ],
        "explanation": "show ip nat statistics affiche les paramètres de configuration NAT, les traductions actives et les détails du pool d’adresses, y compris le nombre total d’adresses et les allocations.",
        "id": 35,
        "i18n": {
            "en": {
                "title": "35. What command would be used as part of configuring NAT or PAT to display information about NAT configuration parameters and the number of addresses in the pool?",
                "text": "",
                "options": [
                    "show running-config",
                    "show ip nat statistics",
                    "show ip cache",
                    "show version"
                ],
                "explanation": "show ip nat statistics displays NAT configuration parameters, active translations, and address pool details including total addresses and allocations."
            },
            "fr": {
                "title": "35. Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour afficher les informations sur les paramètres de configuration NAT et le nombre d’adresses dans le pool ?",
                "text": "",
                "options": [
                    "show running-config",
                    "show ip nat statistics",
                    "show ip cache",
                    "show version"
                ],
                "explanation": "show ip nat statistics affiche les paramètres de configuration NAT, les traductions actives et les détails du pool d’adresses, y compris le nombre total d’adresses et les allocations."
            }
        }
    },
    {
        "title": "36. Quel est l’objectif de l’établissement d’une référence de base du réseau ?",
        "text": "",
        "images": [],
        "options": [
            "Elle fournit une moyenne statistique des performances réseau.",
            "Elle crée un point de référence pour les évaluations futures du réseau.",
            "Elle gère les performances des équipements réseau.",
            "Elle vérifie la configuration de sécurité des équipements réseau."
        ],
        "correct": [
            1
        ],
        "explanation": "Une référence de base établit les performances normales et crée un point de comparaison avec les performances futures afin de détecter les situations anormales.",
        "id": 36,
        "i18n": {
            "en": {
                "title": "36. What is a purpose of establishing a network baseline?",
                "text": "",
                "options": [
                    "It provides a statistical average for network performance.",
                    "It creates a point of reference for future network evaluations.",
                    "It manages the performance of network devices.",
                    "It checks the security configuration of network devices."
                ],
                "explanation": "A baseline establishes normal performance and creates a reference point to compare with future performance to detect abnormal situations."
            },
            "fr": {
                "title": "36. Quel est l’objectif de l’établissement d’une référence de base du réseau ?",
                "text": "",
                "options": [
                    "Elle fournit une moyenne statistique des performances réseau.",
                    "Elle crée un point de référence pour les évaluations futures du réseau.",
                    "Elle gère les performances des équipements réseau.",
                    "Elle vérifie la configuration de sécurité des équipements réseau."
                ],
                "explanation": "Une référence de base établit les performances normales et crée un point de comparaison avec les performances futures afin de détecter les situations anormales."
            }
        }
    },
    {
        "type": "matching",
        "title": "37. Associez le type d’équipement ou de service WAN à sa description. (Toutes les options ne sont pas utilisées.)",
        "text": "",
        "pairs": [
            {
                "left": "CPE",
                "right": "équipements et câblage interne situés à la périphérie de l’entreprise et connectés à une liaison opérateur"
            },
            {
                "left": "DCE",
                "right": "équipements qui fournissent une interface permettant aux clients de se connecter dans le cloud WAN"
            },
            {
                "left": "DTE",
                "right": "équipements client qui transmettent les données d’un réseau client pour leur transport sur le WAN"
            },
            {
                "left": "boucle locale",
                "right": "connexion physique entre le client et le point de présence POP du fournisseur de services"
            }
        ],
        "distractors": [
            "installation du fournisseur de services qui connecte le CPE au réseau du fournisseur",
            "emplacement où la responsabilité de la connexion passe du client au fournisseur de services"
        ],
        "explanation": "Le CPE se trouve à la périphérie de l’entreprise, le DCE fournit l’interface avec le cloud WAN, le DTE transmet les données du client et la boucle locale relie physiquement le client au POP du fournisseur.",
        "id": 37,
        "i18n": {
            "en": {
                "title": "37. Match the type of WAN device or service to the description. (Not all options are used.)",
                "text": "",
                "pairs": [
                    {
                        "left": "CPE",
                        "right": "devices and inside wiring that are located on the enterprise edge and connect to a carrier link"
                    },
                    {
                        "left": "DCE",
                        "right": "devices that provide an interface for customers to connect to within the WAN cloud"
                    },
                    {
                        "left": "DTE",
                        "right": "customer devices that pass the data from a customer network for transmission over the WAN"
                    },
                    {
                        "left": "local loop",
                        "right": "a physical connection from the customer to the service provider POP"
                    }
                ],
                "distractors": [
                    "service provider facility taht connects the CPE to the provider network",
                    "location where the responsibility for the connection changes from the customer to the service provider"
                ],
                "explanation": "CPE is on the enterprise edge, DCE provides the WAN cloud interface, DTE passes customer data, and the local loop physically connects the customer to the provider POP."
            },
            "fr": {
                "title": "37. Associez le type d’équipement ou de service WAN à sa description. (Toutes les options ne sont pas utilisées.)",
                "text": "",
                "pairs": [
                    {
                        "left": "CPE",
                        "right": "équipements et câblage interne situés à la périphérie de l’entreprise et connectés à une liaison opérateur"
                    },
                    {
                        "left": "DCE",
                        "right": "équipements qui fournissent une interface permettant aux clients de se connecter dans le cloud WAN"
                    },
                    {
                        "left": "DTE",
                        "right": "équipements client qui transmettent les données d’un réseau client pour leur transport sur le WAN"
                    },
                    {
                        "left": "boucle locale",
                        "right": "connexion physique entre le client et le point de présence POP du fournisseur de services"
                    }
                ],
                "distractors": [
                    "installation du fournisseur de services qui connecte le CPE au réseau du fournisseur",
                    "emplacement où la responsabilité de la connexion passe du client au fournisseur de services"
                ],
                "explanation": "Le CPE se trouve à la périphérie de l’entreprise, le DCE fournit l’interface avec le cloud WAN, le DTE transmet les données du client et la boucle locale relie physiquement le client au POP du fournisseur."
            }
        }
    },
    {
        "title": "38. Quelle affirmation décrit une caractéristique des ACL IPv4 standard ?",
        "text": "",
        "images": [],
        "options": [
            "Elles filtrent le trafic uniquement en fonction des adresses IP source.",
            "Elles peuvent être créées avec un numéro, mais pas avec un nom.",
            "Elles sont configurées dans le mode de configuration d’interface.",
            "Elles peuvent être configurées pour filtrer le trafic à la fois selon les adresses IP source et les ports source."
        ],
        "correct": [
            0
        ],
        "explanation": "Les ACL IPv4 standard filtrent uniquement sur les adresses IP source. Les ACL standard et étendues peuvent être nommées ou numérotées et se configurent en mode de configuration globale.",
        "id": 38,
        "i18n": {
            "en": {
                "title": "38. Which statement describes a characteristic of standard IPv4 ACLs?",
                "text": "",
                "options": [
                    "They filter traffic based on source IP addresses only.",
                    "They can be created with a number but not with a name.",
                    "They are configured in the interface configuration mode.",
                    "They can be configured to filter traffic based on both source IP addresses and source ports."
                ],
                "explanation": "Standard IPv4 ACLs filter on source IP addresses only. Both standard and extended ACLs can be named or numbered and are configured in global configuration mode."
            },
            "fr": {
                "title": "38. Quelle affirmation décrit une caractéristique des ACL IPv4 standard ?",
                "text": "",
                "options": [
                    "Elles filtrent le trafic uniquement en fonction des adresses IP source.",
                    "Elles peuvent être créées avec un numéro, mais pas avec un nom.",
                    "Elles sont configurées dans le mode de configuration d’interface.",
                    "Elles peuvent être configurées pour filtrer le trafic à la fois selon les adresses IP source et les ports source."
                ],
                "explanation": "Les ACL IPv4 standard filtrent uniquement sur les adresses IP source. Les ACL standard et étendues peuvent être nommées ou numérotées et se configurent en mode de configuration globale."
            }
        }
    },
    {
        "title": "39. Reportez-vous à l’illustration. R1 est configuré pour NAT comme affiché. Qu’est-ce qui ne va pas dans la configuration ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2016/02/i212258v1n1_212258-2.jpg"
        ],
        "options": [
            "NAT-POOL2 n’est pas associé à l’ACL 1.",
            "L’interface Fa0/0 devrait être identifiée comme interface NAT externe.",
            "Le pool NAT est incorrect.",
            "L’access-list 1 est mal configurée."
        ],
        "correct": [
            0
        ],
        "explanation": "NAT-POOL2 doit être associé à l’ACL 1 avec la commande R1(config)# ip nat inside source list 1 pool NAT-POOL2.",
        "id": 39,
        "i18n": {
            "en": {
                "title": "39. Refer to the exhibit. R1 is configured for NAT as displayed. What is wrong with the configuration?",
                "text": "",
                "options": [
                    "NAT-POOL2 is not bound to ACL 1.",
                    "Interface Fa0/0 should be identified as an outside NAT interface.",
                    "The NAT pool is incorrect.",
                    "Access-list 1 is misconfigured."
                ],
                "explanation": "NAT-POOL2 must be bound to ACL 1 using R1(config)# ip nat inside source list 1 pool NAT-POOL2."
            },
            "fr": {
                "title": "39. Reportez-vous à l’illustration. R1 est configuré pour NAT comme affiché. Qu’est-ce qui ne va pas dans la configuration ?",
                "text": "",
                "options": [
                    "NAT-POOL2 n’est pas associé à l’ACL 1.",
                    "L’interface Fa0/0 devrait être identifiée comme interface NAT externe.",
                    "Le pool NAT est incorrect.",
                    "L’access-list 1 est mal configurée."
                ],
                "explanation": "NAT-POOL2 doit être associé à l’ACL 1 avec la commande R1(config)# ip nat inside source list 1 pool NAT-POOL2."
            }
        }
    },
    {
        "title": "40. Reportez-vous à l’illustration. Quelle méthode peut être utilisée pour permettre à un routeur OSPF d’annoncer une route par défaut aux routeurs OSPF voisins ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2017/07/p53-1-1.png"
        ],
        "options": [
            "Utiliser une route statique pointant vers le FAI et la redistribuer.",
            "Utiliser la commande redistribute static sur R0-A.",
            "Utiliser la commande default-information originate sur ISP.",
            "Utiliser la commande default-information originate sur R0-A."
        ],
        "correct": [
            3
        ],
        "explanation": "Le routeur de bordure R0-A, ASBR, doit être configuré avec une route statique par défaut et la commande default-information originate pour annoncer la route par défaut.",
        "id": 40,
        "i18n": {
            "en": {
                "title": "40. Refer to the exhibit. What method can be used to enable an OSPF router to advertise a default route to neighboring OSPF routers?",
                "text": "",
                "options": [
                    "Use a static route pointing to the ISP and redistribute it.",
                    "Use the redistribute static command on R0-A.",
                    "Use the default-information originate command on ISP.",
                    "Use the default-information originate command on R0-A."
                ],
                "explanation": "The edge router R0-A (ASBR) must be configured with a default static route and the default-information originate command to advertise the default route."
            },
            "fr": {
                "title": "40. Reportez-vous à l’illustration. Quelle méthode peut être utilisée pour permettre à un routeur OSPF d’annoncer une route par défaut aux routeurs OSPF voisins ?",
                "text": "",
                "options": [
                    "Utiliser une route statique pointant vers le FAI et la redistribuer.",
                    "Utiliser la commande redistribute static sur R0-A.",
                    "Utiliser la commande default-information originate sur ISP.",
                    "Utiliser la commande default-information originate sur R0-A."
                ],
                "explanation": "Le routeur de bordure R0-A, ASBR, doit être configuré avec une route statique par défaut et la commande default-information originate pour annoncer la route par défaut."
            }
        }
    },
    {
        "title": "41. Une entreprise a fait appel à une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. La société envoie une équipe effectuer des tests d’intrusion sur le réseau. Pourquoi l’équipe utiliserait-elle des applications comme John the Ripper, THC Hydra, RainbowCrack et Medusa ?",
        "text": "",
        "images": [],
        "options": [
            "pour capturer et analyser des paquets dans des LAN Ethernet traditionnels ou des WLAN",
            "pour sonder et tester la robustesse d’un pare-feu avec des paquets forgés spécialement conçus",
            "pour effectuer des tentatives répétées afin de casser un mot de passe"
        ],
        "correct": [
            2
        ],
        "explanation": "Ces applications sont des outils de cassage de mots de passe qui effectuent des tentatives répétées ou contournent le chiffrement afin de récupérer des mots de passe.",
        "id": 41,
        "i18n": {
            "en": {
                "title": "41. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as John the Ripper, THC Hydra, RainbowCrack, and Medusa?",
                "text": "",
                "options": [
                    "to capture and analyze packets within traditional Ethernet LANs or WLANs",
                    "to probe and test the robustness of a firewall by using specially created forged packets",
                    "to make repeated guesses in order to crack a password"
                ],
                "explanation": "These applications are password crackers that make repeated guesses or bypass encryption to recover passwords."
            },
            "fr": {
                "title": "41. Une entreprise a fait appel à une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. La société envoie une équipe effectuer des tests d’intrusion sur le réseau. Pourquoi l’équipe utiliserait-elle des applications comme John the Ripper, THC Hydra, RainbowCrack et Medusa ?",
                "text": "",
                "options": [
                    "pour capturer et analyser des paquets dans des LAN Ethernet traditionnels ou des WLAN",
                    "pour sonder et tester la robustesse d’un pare-feu avec des paquets forgés spécialement conçus",
                    "pour effectuer des tentatives répétées afin de casser un mot de passe"
                ],
                "explanation": "Ces applications sont des outils de cassage de mots de passe qui effectuent des tentatives répétées ou contournent le chiffrement afin de récupérer des mots de passe."
            }
        }
    },
    {
        "title": "42. Quelles sont deux règles de syntaxe pour écrire un tableau JSON ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Chaque valeur du tableau est séparée par une virgule.",
            "Le tableau ne peut contenir qu’un seul type de valeur.",
            "Un espace doit séparer chaque valeur dans le tableau.",
            "Un point-virgule sépare la clé et la liste de valeurs.",
            "Les valeurs sont placées entre crochets."
        ],
        "correct": [
            0,
            4
        ],
        "explanation": "Un tableau JSON est placé entre crochets [ ] et ses valeurs sont séparées par des virgules.",
        "id": 42,
        "i18n": {
            "en": {
                "title": "42. What are two syntax rules for writing a JSON array? (Choose two.)",
                "text": "",
                "options": [
                    "Each value in the array is separated by a comma.",
                    "The array can include only one value type.",
                    "A space must separate each value in the array.",
                    "A semicolon separates the key and list of values.",
                    "Values are enclosed in square brackets."
                ],
                "explanation": "A JSON array is enclosed in square brackets [ ] with values separated by commas."
            },
            "fr": {
                "title": "42. Quelles sont deux règles de syntaxe pour écrire un tableau JSON ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Chaque valeur du tableau est séparée par une virgule.",
                    "Le tableau ne peut contenir qu’un seul type de valeur.",
                    "Un espace doit séparer chaque valeur dans le tableau.",
                    "Un point-virgule sépare la clé et la liste de valeurs.",
                    "Les valeurs sont placées entre crochets."
                ],
                "explanation": "Un tableau JSON est placé entre crochets [ ] et ses valeurs sont séparées par des virgules."
            }
        }
    },
    {
        "title": "43. Quelle est une caractéristique d’un cheval de Troie en sécurité réseau ?",
        "text": "",
        "images": [],
        "options": [
            "Un dictionnaire électronique est utilisé pour obtenir un mot de passe permettant d’infiltrer un équipement réseau clé.",
            "Le malware est contenu dans un programme exécutable qui semble légitime.",
            "Des quantités extrêmes de données sont envoyées vers une interface particulière d’un équipement réseau.",
            "Trop d’informations sont destinées à un bloc mémoire particulier, ce qui affecte des zones mémoire supplémentaires."
        ],
        "correct": [
            1
        ],
        "explanation": "Un cheval de Troie exécute des opérations malveillantes sous l’apparence d’un programme légitime.",
        "id": 43,
        "i18n": {
            "en": {
                "title": "43. What is a characteristic of a Trojan horse as it relates to network security?",
                "text": "",
                "options": [
                    "An electronic dictionary is used to obtain a password to be used to infiltrate a key network device.",
                    "Malware is contained in a seemingly legitimate executable program.",
                    "Extreme quantities of data are sent to a particular network device interface.",
                    "Too much information is destined for a particular memory block, causing additional memory areas to be affected."
                ],
                "explanation": "A Trojan horse carries out malicious operations under the guise of a legitimate program."
            },
            "fr": {
                "title": "43. Quelle est une caractéristique d’un cheval de Troie en sécurité réseau ?",
                "text": "",
                "options": [
                    "Un dictionnaire électronique est utilisé pour obtenir un mot de passe permettant d’infiltrer un équipement réseau clé.",
                    "Le malware est contenu dans un programme exécutable qui semble légitime.",
                    "Des quantités extrêmes de données sont envoyées vers une interface particulière d’un équipement réseau.",
                    "Trop d’informations sont destinées à un bloc mémoire particulier, ce qui affecte des zones mémoire supplémentaires."
                ],
                "explanation": "Un cheval de Troie exécute des opérations malveillantes sous l’apparence d’un programme légitime."
            }
        }
    },
    {
        "title": "44. Un attaquant redirige le trafic vers une fausse passerelle par défaut dans le but d’intercepter le trafic de données d’un réseau commuté. Quel type d’attaque pourrait permettre cela ?",
        "text": "",
        "images": [],
        "options": [
            "inondation TCP SYN",
            "tunnellisation DNS",
            "usurpation DHCP",
            "empoisonnement du cache ARP"
        ],
        "correct": [
            2
        ],
        "explanation": "Dans une usurpation DHCP, un attaquant met en place un faux serveur DHCP pour forcer les clients à utiliser une fausse passerelle par défaut. Le DHCP snooping atténue cette attaque.",
        "id": 44,
        "i18n": {
            "en": {
                "title": "44. An attacker is redirecting traffic to a false default gateway in an attempt to intercept the data traffic of a switched network. What type of attack could achieve this?",
                "text": "",
                "options": [
                    "TCP SYN flood",
                    "DNS tunneling",
                    "DHCP spoofing",
                    "ARP cache poisoning"
                ],
                "explanation": "In DHCP spoofing, an attacker sets up a fake DHCP server to force clients to use a false default gateway. DHCP snooping mitigates this."
            },
            "fr": {
                "title": "44. Un attaquant redirige le trafic vers une fausse passerelle par défaut dans le but d’intercepter le trafic de données d’un réseau commuté. Quel type d’attaque pourrait permettre cela ?",
                "text": "",
                "options": [
                    "inondation TCP SYN",
                    "tunnellisation DNS",
                    "usurpation DHCP",
                    "empoisonnement du cache ARP"
                ],
                "explanation": "Dans une usurpation DHCP, un attaquant met en place un faux serveur DHCP pour forcer les clients à utiliser une fausse passerelle par défaut. Le DHCP snooping atténue cette attaque."
            }
        }
    },
    {
        "title": "45. Une entreprise élabore une stratégie de sécurité pour des communications sécurisées. Lors de l’échange de messages critiques entre le siège et une agence, une valeur de hachage ne doit être recalculée qu’avec un code prédéterminé, garantissant ainsi la validité de la source des données. Quel aspect des communications sécurisées est concerné ?",
        "text": "",
        "images": [],
        "options": [
            "intégrité des données",
            "non-répudiation",
            "authentification de l’origine",
            "confidentialité des données"
        ],
        "correct": [
            2
        ],
        "explanation": "L’authentification de l’origine garantit que le message n’est pas falsifié et qu’il provient réellement de l’expéditeur annoncé.",
        "id": 45,
        "i18n": {
            "en": {
                "title": "45. A company is developing a security policy for secure communication. In the exchange of critical messages between a headquarters office and a branch office, a hash value should only be recalculated with a predetermined code, thus ensuring the validity of data source. Which aspect of secure communications is addressed?",
                "text": "",
                "options": [
                    "data integrity",
                    "non-repudiation",
                    "origin authentication",
                    "data confidentiality"
                ],
                "explanation": "Origin authentication guarantees the message is not a forgery and actually comes from whom it states."
            },
            "fr": {
                "title": "45. Une entreprise élabore une stratégie de sécurité pour des communications sécurisées. Lors de l’échange de messages critiques entre le siège et une agence, une valeur de hachage ne doit être recalculée qu’avec un code prédéterminé, garantissant ainsi la validité de la source des données. Quel aspect des communications sécurisées est concerné ?",
                "text": "",
                "options": [
                    "intégrité des données",
                    "non-répudiation",
                    "authentification de l’origine",
                    "confidentialité des données"
                ],
                "explanation": "L’authentification de l’origine garantit que le message n’est pas falsifié et qu’il provient réellement de l’expéditeur annoncé."
            }
        }
    },
    {
        "title": "46. Une entreprise a fait appel à une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. La société envoie une équipe effectuer des tests d’intrusion sur le réseau. Pourquoi l’équipe utiliserait-elle des analyseurs de paquets ?",
        "text": "",
        "images": [],
        "options": [
            "pour détecter des outils installés dans des fichiers et répertoires permettant à des acteurs malveillants d’accéder et de contrôler à distance un ordinateur ou un réseau",
            "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
            "pour sonder et tester la robustesse d’un pare-feu avec des paquets forgés spécialement conçus",
            "pour capturer et analyser des paquets dans des LAN Ethernet traditionnels ou des WLAN"
        ],
        "correct": [
            3
        ],
        "explanation": "Les analyseurs de paquets, comme Wireshark ou Tcpdump, capturent, surveillent et analysent en temps réel les échanges de données réseau.",
        "id": 46,
        "i18n": {
            "en": {
                "title": "46. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use packet sniffers?",
                "text": "",
                "options": [
                    "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
                    "to detect any evidence of a hack or malware in a computer or network",
                    "to probe and test the robustness of a firewall by using specially created forged packets",
                    "to capture and analyze packets within traditional Ethernet LANs or WLANs"
                ],
                "explanation": "Packet sniffers (e.g., Wireshark, Tcpdump) capture, monitor, and analyze network data exchanges in real-time."
            },
            "fr": {
                "title": "46. Une entreprise a fait appel à une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. La société envoie une équipe effectuer des tests d’intrusion sur le réseau. Pourquoi l’équipe utiliserait-elle des analyseurs de paquets ?",
                "text": "",
                "options": [
                    "pour détecter des outils installés dans des fichiers et répertoires permettant à des acteurs malveillants d’accéder et de contrôler à distance un ordinateur ou un réseau",
                    "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
                    "pour sonder et tester la robustesse d’un pare-feu avec des paquets forgés spécialement conçus",
                    "pour capturer et analyser des paquets dans des LAN Ethernet traditionnels ou des WLAN"
                ],
                "explanation": "Les analyseurs de paquets, comme Wireshark ou Tcpdump, capturent, surveillent et analysent en temps réel les échanges de données réseau."
            }
        }
    },
    {
        "title": "47. Un administrateur configure OSPF à zone unique sur un routeur. L’un des réseaux à annoncer est 172.20.0.0 255.255.252.0. Quel masque générique l’administrateur utiliserait-il dans l’instruction network OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "0.0.15.255",
            "0.0.3.255",
            "0.0.7.255",
            "0.0.1.255"
        ],
        "correct": [
            1
        ],
        "explanation": "255.255.255.255 moins 255.255.252.0 donne 0.0.3.255.",
        "id": 47,
        "i18n": {
            "en": {
                "title": "47. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.20.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
                "text": "",
                "options": [
                    "0.0.15.255",
                    "0.0.3.255",
                    "0.0.7.255",
                    "0.0.1.255"
                ],
                "explanation": "255.255.255.255 minus 255.255.252.0 equals 0.0.3.255."
            },
            "fr": {
                "title": "47. Un administrateur configure OSPF à zone unique sur un routeur. L’un des réseaux à annoncer est 172.20.0.0 255.255.252.0. Quel masque générique l’administrateur utiliserait-il dans l’instruction network OSPF ?",
                "text": "",
                "options": [
                    "0.0.15.255",
                    "0.0.3.255",
                    "0.0.7.255",
                    "0.0.1.255"
                ],
                "explanation": "255.255.255.255 moins 255.255.252.0 donne 0.0.3.255."
            }
        }
    },
    {
        "type": "matching",
        "title": "48. Associez la méthode HTTP à l’opération RESTful.",
        "text": "",
        "pairs": [
            {
                "left": "POST",
                "right": "Créer"
            },
            {
                "left": "GET",
                "right": "Lire"
            },
            {
                "left": "PUT/PATCH",
                "right": "Mettre à jour / remplacer / modifier"
            },
            {
                "left": "DELETE",
                "right": "Supprimer"
            }
        ],
        "distractors": [],
        "explanation": "POST crée, GET lit, PUT/PATCH met à jour et DELETE supprime, selon les opérations CRUD.",
        "id": 48,
        "i18n": {
            "en": {
                "title": "48. Match the HTTP method with the RESTful operation.",
                "text": "",
                "pairs": [
                    {
                        "left": "POST",
                        "right": "Create"
                    },
                    {
                        "left": "GET",
                        "right": "Read"
                    },
                    {
                        "left": "PUT/PATCH",
                        "right": "Update/Replace/Modify"
                    },
                    {
                        "left": "DELETE",
                        "right": "Delete"
                    }
                ],
                "distractors": [],
                "explanation": "POST creates, GET reads, PUT/PATCH updates, and DELETE deletes (CRUD operations)."
            },
            "fr": {
                "title": "48. Associez la méthode HTTP à l’opération RESTful.",
                "text": "",
                "pairs": [
                    {
                        "left": "POST",
                        "right": "Créer"
                    },
                    {
                        "left": "GET",
                        "right": "Lire"
                    },
                    {
                        "left": "PUT/PATCH",
                        "right": "Mettre à jour / remplacer / modifier"
                    },
                    {
                        "left": "DELETE",
                        "right": "Supprimer"
                    }
                ],
                "distractors": [],
                "explanation": "POST crée, GET lit, PUT/PATCH met à jour et DELETE supprime, selon les opérations CRUD."
            }
        }
    },
    {
        "title": "49. Reportez-vous à l’illustration. Quel est le coût OSPF pour atteindre le LAN West 172.16.2.0/24 depuis East ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/49.png"
        ],
        "options": [
            "782",
            "74",
            "128",
            "65"
        ],
        "correct": [
            3
        ],
        "explanation": "Le coût de la liaison série T1 est 64 et celui de l’interface GigabitEthernet est 1, soit un total de 65.",
        "id": 49,
        "i18n": {
            "en": {
                "title": "49. Refer to the exhibit. What is the OSPF cost to reach the West LAN 172.16.2.0/24 from East?",
                "text": "",
                "options": [
                    "782",
                    "74",
                    "128",
                    "65"
                ],
                "explanation": "The serial (T1) link cost is 64 and the GigabitEthernet interface cost is 1, totaling 65."
            },
            "fr": {
                "title": "49. Reportez-vous à l’illustration. Quel est le coût OSPF pour atteindre le LAN West 172.16.2.0/24 depuis East ?",
                "text": "",
                "options": [
                    "782",
                    "74",
                    "128",
                    "65"
                ],
                "explanation": "Le coût de la liaison série T1 est 64 et celui de l’interface GigabitEthernet est 1, soit un total de 65."
            }
        }
    },
    {
        "title": "50. Quelle est une raison d’utiliser la commande ip ospf priority lorsque le protocole de routage OSPF est utilisé ?",
        "text": "",
        "images": [],
        "options": [
            "pour activer le processus de voisinage OSPF",
            "pour influencer le processus d’élection du DR/BDR",
            "pour fournir un chemin de secours pendant le processus de convergence",
            "pour rationaliser et accélérer le processus de convergence"
        ],
        "correct": [
            1
        ],
        "explanation": "La priorité OSPF, de 0 à 255, influence l’élection du DR/BDR. Plus la priorité est élevée, plus le routeur a de chances de devenir DR ; une priorité 0 l’empêche de devenir DR ou BDR.",
        "id": 50,
        "i18n": {
            "en": {
                "title": "50. What is one reason to use the ip ospf priority command when the OSPF routing protocol is in use?",
                "text": "",
                "options": [
                    "to activate the OSPF neighboring process",
                    "to influence the DR/BDR election process",
                    "to provide a backdoor for connectivity during the convergence process",
                    "to streamline and speed up the convergence process"
                ],
                "explanation": "OSPF priority (0-255) influences the DR/BDR election. The higher the priority, the more likely the router becomes DR; priority 0 prevents it from becoming DR/BDR."
            },
            "fr": {
                "title": "50. Quelle est une raison d’utiliser la commande ip ospf priority lorsque le protocole de routage OSPF est utilisé ?",
                "text": "",
                "options": [
                    "pour activer le processus de voisinage OSPF",
                    "pour influencer le processus d’élection du DR/BDR",
                    "pour fournir un chemin de secours pendant le processus de convergence",
                    "pour rationaliser et accélérer le processus de convergence"
                ],
                "explanation": "La priorité OSPF, de 0 à 255, influence l’élection du DR/BDR. Plus la priorité est élevée, plus le routeur a de chances de devenir DR ; une priorité 0 l’empêche de devenir DR ou BDR."
            }
        }
    },
    {
        "title": "51. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet avec l’adresse source 172.18.20.14, l’adresse de destination 172.18.20.40 et le protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp</code></pre>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            0
        ],
        "explanation": "La source 172.18.20.14 appartient à la plage 172.18.20.0-31, la destination 172.18.20.40 appartient à la plage 172.18.20.32-63, et le protocole 21 correspond à eq ftp ; le paquet est donc autorisé.",
        "id": 51,
        "i18n": {
            "en": {
                "title": "51. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 172.18.20.14, a destination address of 172.18.20.40, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp</code></pre>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "Source 172.18.20.14 is within 172.18.20.0-31, destination 172.18.20.40 is within 172.18.20.32-63, and protocol 21 matches eq ftp, so the packet is permitted."
            },
            "fr": {
                "title": "51. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet avec l’adresse source 172.18.20.14, l’adresse de destination 172.18.20.40 et le protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp</code></pre>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "La source 172.18.20.14 appartient à la plage 172.18.20.0-31, la destination 172.18.20.40 appartient à la plage 172.18.20.32-63, et le protocole 21 correspond à eq ftp ; le paquet est donc autorisé."
            }
        }
    },
    {
        "title": "52. Quelle est une caractéristique de la topologie spine-leaf à deux niveaux de l’architecture Cisco ACI fabric ?",
        "text": "",
        "images": [],
        "options": [
            "Les commutateurs spine et leaf sont toujours reliés par des commutateurs de cœur.",
            "Les commutateurs spine se connectent aux commutateurs leaf et se connectent entre eux pour la redondance.",
            "Les commutateurs leaf se connectent toujours aux spines et sont interconnectés par une ligne trunk.",
            "Les commutateurs leaf se connectent toujours aux spines, mais jamais entre eux."
        ],
        "correct": [
            3
        ],
        "explanation": "Chaque commutateur leaf se connecte à chaque commutateur spine, mais les leaf ne se connectent jamais directement entre eux, ce qui garantit que tous les équipements sont à un seul saut.",
        "id": 52,
        "i18n": {
            "en": {
                "title": "52. What is a characteristic of the two-tier spine-leaf topology of the Cisco ACI fabric architecture?",
                "text": "",
                "options": [
                    "The spine and leaf switches are always linked through core switches.",
                    "The spine switches attach to the leaf switches and attach to each other for redundancy.",
                    "The leaf switches always attach to the spines and they are interlinked through a trunk line.",
                    "The leaf switches always attach to the spines, but they never attach to each other."
                ],
                "explanation": "Every leaf switch connects to every spine switch, but leaf switches never connect directly to each other, ensuring all devices are one hop away."
            },
            "fr": {
                "title": "52. Quelle est une caractéristique de la topologie spine-leaf à deux niveaux de l’architecture Cisco ACI fabric ?",
                "text": "",
                "options": [
                    "Les commutateurs spine et leaf sont toujours reliés par des commutateurs de cœur.",
                    "Les commutateurs spine se connectent aux commutateurs leaf et se connectent entre eux pour la redondance.",
                    "Les commutateurs leaf se connectent toujours aux spines et sont interconnectés par une ligne trunk.",
                    "Les commutateurs leaf se connectent toujours aux spines, mais jamais entre eux."
                ],
                "explanation": "Chaque commutateur leaf se connecte à chaque commutateur spine, mais les leaf ne se connectent jamais directement entre eux, ce qui garantit que tous les équipements sont à un seul saut."
            }
        }
    },
    {
        "title": "53. Quels sont deux scénarios qui entraîneraient une incompatibilité duplex ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "connecter un équipement en auto-négociation à un autre configuré manuellement en full-duplex",
            "démarrer et arrêter une interface de routeur pendant le fonctionnement normal",
            "connecter un équipement dont l’interface fonctionne à 100 Mbit/s à un autre dont l’interface fonctionne à 1000 Mbit/s",
            "configurer incorrectement le routage dynamique",
            "configurer manuellement les deux équipements connectés avec des modes duplex différents"
        ],
        "correct": [
            0,
            4
        ],
        "explanation": "Une incompatibilité se produit lorsque les deux extrémités sont configurées manuellement dans des modes différents, ou lorsqu’une extrémité auto-négocie tandis que l’autre est fixée en full-duplex, l’extrémité en auto-négociation revenant alors en half-duplex.",
        "id": 53,
        "i18n": {
            "en": {
                "title": "53. Which two scenarios would result in a duplex mismatch? (Choose two.)",
                "text": "",
                "options": [
                    "connecting a device with autonegotiation to another that is manually set to full-duplex",
                    "starting and stopping a router interface during a normal operation",
                    "connecting a device with an interface running at 100 Mbps to another with an interface running at 1000 Mbps",
                    "configuring dynamic routing incorrectly",
                    "manually setting the two connected devices to different duplex modes"
                ],
                "explanation": "A mismatch occurs when both ends are manually set to different modes, or one end autonegotiates while the other is fixed at full-duplex (the autonegotiating end defaults to half-duplex)."
            },
            "fr": {
                "title": "53. Quels sont deux scénarios qui entraîneraient une incompatibilité duplex ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "connecter un équipement en auto-négociation à un autre configuré manuellement en full-duplex",
                    "démarrer et arrêter une interface de routeur pendant le fonctionnement normal",
                    "connecter un équipement dont l’interface fonctionne à 100 Mbit/s à un autre dont l’interface fonctionne à 1000 Mbit/s",
                    "configurer incorrectement le routage dynamique",
                    "configurer manuellement les deux équipements connectés avec des modes duplex différents"
                ],
                "explanation": "Une incompatibilité se produit lorsque les deux extrémités sont configurées manuellement dans des modes différents, ou lorsqu’une extrémité auto-négocie tandis que l’autre est fixée en full-duplex, l’extrémité en auto-négociation revenant alors en half-duplex."
            }
        }
    },
    {
        "title": "54. Un technicien réseau configure SNMPv3 et a défini un niveau de sécurité auth. Quel est l’effet de ce paramètre ?",
        "text": "",
        "images": [],
        "options": [
            "authentifie un paquet par correspondance de chaîne avec le nom d’utilisateur ou la chaîne de communauté",
            "authentifie un paquet en utilisant soit la méthode HMAC avec MD5, soit la méthode SHA",
            "authentifie un paquet avec HMAC MD5 ou HMAC SHA et chiffre le paquet avec DES, 3DES ou AES",
            "authentifie un paquet en utilisant uniquement l’algorithme SHA"
        ],
        "correct": [
            1
        ],
        "explanation": "Le niveau de sécurité auth utilise HMAC avec MD5 ou SHA. Le niveau priv ajoute le chiffrement.",
        "id": 54,
        "i18n": {
            "en": {
                "title": "54. A network technician is configuring SNMPv3 and has set a security level of auth. What is the effect of this setting?",
                "text": "",
                "options": [
                    "authenticates a packet by a string match of the username or community string",
                    "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
                    "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and encrypts the packet with either the DES, 3DES or AES algorithms",
                    "authenticates a packet by using the SHA algorithm only"
                ],
                "explanation": "The auth security level uses either HMAC with MD5 or SHA. The priv level adds encryption."
            },
            "fr": {
                "title": "54. Un technicien réseau configure SNMPv3 et a défini un niveau de sécurité auth. Quel est l’effet de ce paramètre ?",
                "text": "",
                "options": [
                    "authentifie un paquet par correspondance de chaîne avec le nom d’utilisateur ou la chaîne de communauté",
                    "authentifie un paquet en utilisant soit la méthode HMAC avec MD5, soit la méthode SHA",
                    "authentifie un paquet avec HMAC MD5 ou HMAC SHA et chiffre le paquet avec DES, 3DES ou AES",
                    "authentifie un paquet en utilisant uniquement l’algorithme SHA"
                ],
                "explanation": "Le niveau de sécurité auth utilise HMAC avec MD5 ou SHA. Le niveau priv ajoute le chiffrement."
            }
        }
    },
    {
        "title": "55. Quels sont deux types d’attaques utilisées contre les résolveurs DNS ouverts ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "amplification et réflexion",
            "utilisation des ressources",
            "fast flux",
            "empoisonnement ARP",
            "amortissement"
        ],
        "correct": [
            0,
            1
        ],
        "explanation": "Les attaques contre les résolveurs DNS ouverts incluent l’empoisonnement de cache, l’amplification et la réflexion, ainsi que l’utilisation abusive des ressources, comme dans un déni de service.",
        "id": 55,
        "i18n": {
            "en": {
                "title": "55. What are two types of attacks used on DNS open resolvers? (Choose two.)",
                "text": "",
                "options": [
                    "amplification and reflection",
                    "resource utilization",
                    "fast flux",
                    "ARP poisoning",
                    "cushioning"
                ],
                "explanation": "DNS open resolver attacks include cache poisoning, amplification and reflection, and resource utilization (DoS)."
            },
            "fr": {
                "title": "55. Quels sont deux types d’attaques utilisées contre les résolveurs DNS ouverts ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "amplification et réflexion",
                    "utilisation des ressources",
                    "fast flux",
                    "empoisonnement ARP",
                    "amortissement"
                ],
                "explanation": "Les attaques contre les résolveurs DNS ouverts incluent l’empoisonnement de cache, l’amplification et la réflexion, ainsi que l’utilisation abusive des ressources, comme dans un déni de service."
            }
        }
    },
    {
        "title": "56. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet avec l’adresse source 192.168.101.45, l’adresse de destination 64.100.40.4 et le protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "Cas 1 : <br> <pre><code>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            1
        ],
        "explanation": "L’ACL autorise UDP, mais Telnet, port 23, utilise TCP, et la source 192.168.101.45 ne correspond pas à la plage. Le refus implicite s’applique.",
        "id": 56,
        "i18n": {
            "en": {
                "title": "56. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.101.45, a destination address of 64.100.40.4, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
                "text": "Case 1: <br> <pre><code>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "The ACL permits UDP but Telnet (23) is TCP, and the source 192.168.101.45 does not match the range. The implicit deny applies."
            },
            "fr": {
                "title": "56. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet avec l’adresse source 192.168.101.45, l’adresse de destination 64.100.40.4 et le protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "Cas 1 : <br> <pre><code>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "L’ACL autorise UDP, mais Telnet, port 23, utilise TCP, et la source 192.168.101.45 ne correspond pas à la plage. Le refus implicite s’applique."
            }
        }
    },
    {
        "title": "56. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet avec l’adresse source 192.168.100.219, l’adresse de destination 64.100.40.10 et le protocole 54 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "Cas 2 : <br> <pre><code>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            1
        ],
        "explanation": "L’ACE autorise le trafic UDP depuis 192.168.100.0-192.168.102.255 vers 64.100.40.0/28 avec comme port de destination Telnet. Le protocole 54 n’est pas du trafic UDP/TCP port 23 ; le paquet ne correspond donc pas et est refusé implicitement.",
        "id": 57,
        "i18n": {
            "en": {
                "title": "56. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.100.219, a destination address of 64.100.40.10, and a protocol of 54 is received on the interface, is the packet permitted or denied?",
                "text": "Case 2: <br> <pre><code>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "The ACE permits UDP traffic from 192.168.100.0-192.168.102.255 to 64.100.40.0/28 with destination port Telnet. Protocol 54 is not UDP/TCP port 23 traffic, so the packet does not match and is denied implicitly."
            },
            "fr": {
                "title": "56. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet avec l’adresse source 192.168.100.219, l’adresse de destination 64.100.40.10 et le protocole 54 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "Cas 2 : <br> <pre><code>access-list 101 permit udp 192.168.100.0 0.0.2.255 64.100.40.0 0.0.0.15 eq telnet</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "L’ACE autorise le trafic UDP depuis 192.168.100.0-192.168.102.255 vers 64.100.40.0/28 avec comme port de destination Telnet. Le protocole 54 n’est pas du trafic UDP/TCP port 23 ; le paquet ne correspond donc pas et est refusé implicitement."
            }
        }
    },
    {
        "title": "57. Quels types de ressources sont nécessaires pour un hyperviseur de type 1 ?",
        "text": "",
        "images": [],
        "options": [
            "un VLAN dédié",
            "une console de gestion",
            "un système d’exploitation hôte",
            "un serveur exécutant VMware Fusion"
        ],
        "correct": [
            1
        ],
        "explanation": "Les hyperviseurs de type 1, dits bare metal, s’installent directement sur le matériel et nécessitent une console de gestion pour administrer les VM. VMware Fusion est un hyperviseur de type 2.",
        "id": 58,
        "i18n": {
            "en": {
                "title": "57. Which type of resources are required for a Type 1 hypervisor?",
                "text": "",
                "options": [
                    "a dedicated VLAN",
                    "a management console",
                    "a host operating system",
                    "a server running VMware Fusion"
                ],
                "explanation": "Type 1 (bare metal) hypervisors install directly on hardware and require a management console to manage VMs. VMware Fusion is a Type 2 hypervisor."
            },
            "fr": {
                "title": "57. Quels types de ressources sont nécessaires pour un hyperviseur de type 1 ?",
                "text": "",
                "options": [
                    "un VLAN dédié",
                    "une console de gestion",
                    "un système d’exploitation hôte",
                    "un serveur exécutant VMware Fusion"
                ],
                "explanation": "Les hyperviseurs de type 1, dits bare metal, s’installent directement sur le matériel et nécessitent une console de gestion pour administrer les VM. VMware Fusion est un hyperviseur de type 2."
            }
        }
    },
    {
        "title": "58. En JSON, que contiennent les crochets [ ] ?",
        "text": "",
        "images": [],
        "options": [
            "des valeurs imbriquées",
            "des paires clé/valeur",
            "un objet",
            "un tableau"
        ],
        "correct": [
            3
        ],
        "explanation": "Les crochets [ ] contiennent des tableaux, c’est-à-dire des listes ordonnées de valeurs. Les accolades { } contiennent des objets.",
        "id": 59,
        "i18n": {
            "en": {
                "title": "58. In JSON, what is held within square brackets [ ]?",
                "text": "",
                "options": [
                    "nested values",
                    "key/value pairs",
                    "an object",
                    "an array"
                ],
                "explanation": "Square brackets [ ] hold arrays (ordered lists of values). Curly braces { } hold objects."
            },
            "fr": {
                "title": "58. En JSON, que contiennent les crochets [ ] ?",
                "text": "",
                "options": [
                    "des valeurs imbriquées",
                    "des paires clé/valeur",
                    "un objet",
                    "un tableau"
                ],
                "explanation": "Les crochets [ ] contiennent des tableaux, c’est-à-dire des listes ordonnées de valeurs. Les accolades { } contiennent des objets."
            }
        }
    },
    {
        "title": "59. Quels sont trois composants utilisés dans la partie requête d’une demande RESTful API typique ? (Choisissez trois réponses.)",
        "text": "",
        "images": [],
        "options": [
            "ressources",
            "protocole",
            "serveur API",
            "format",
            "clé",
            "paramètres"
        ],
        "correct": [
            3,
            4,
            5
        ],
        "explanation": "La partie requête comprend le format, par exemple JSON ou XML, la clé d’authentification et les paramètres de requête.",
        "id": 60,
        "i18n": {
            "en": {
                "title": "59. What are three components used in the query portion of a typical RESTful API request? (Choose three.)",
                "text": "",
                "options": [
                    "resources",
                    "protocol",
                    "API server",
                    "format",
                    "key",
                    "parameters"
                ],
                "explanation": "The query portion includes format (JSON, XML, etc.), key (authentication), and parameters (query information)."
            },
            "fr": {
                "title": "59. Quels sont trois composants utilisés dans la partie requête d’une demande RESTful API typique ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "ressources",
                    "protocole",
                    "serveur API",
                    "format",
                    "clé",
                    "paramètres"
                ],
                "explanation": "La partie requête comprend le format, par exemple JSON ou XML, la clé d’authentification et les paramètres de requête."
            }
        }
    },
    {
        "title": "60. Un utilisateur signale que lorsqu’il saisit l’URL de la page web de l’entreprise dans un navigateur, un message d’erreur indique que la page ne peut pas être affichée. Le technicien du support lui demande de saisir l’adresse IP du serveur web pour voir si la page s’affiche. Quelle méthode de dépannage le technicien utilise-t-il ?",
        "text": "",
        "images": [],
        "options": [
            "descendante",
            "ascendante",
            "diviser pour mieux régner",
            "substitution"
        ],
        "correct": [
            2
        ],
        "explanation": "En testant l’adresse IP plutôt que l’URL, le technicien isole le problème : DNS ou connectivité des couches inférieures. C’est une approche de type diviser pour mieux régner.",
        "id": 61,
        "i18n": {
            "en": {
                "title": "60. A user reports that when the corporate web page URL is entered on a web browser, an error message indicates that the page cannot be displayed. The help-desk technician asks the user to enter the IP address of the web server to see if the page can be displayed. Which troubleshooting method is being used by the technician?",
                "text": "",
                "options": [
                    "top-down",
                    "bottom-up",
                    "divide-and-conquer",
                    "substitution"
                ],
                "explanation": "By testing the IP address vs the URL, the technician uses divide-and-conquer to isolate whether it is a DNS issue or a lower-layer connectivity issue."
            },
            "fr": {
                "title": "60. Un utilisateur signale que lorsqu’il saisit l’URL de la page web de l’entreprise dans un navigateur, un message d’erreur indique que la page ne peut pas être affichée. Le technicien du support lui demande de saisir l’adresse IP du serveur web pour voir si la page s’affiche. Quelle méthode de dépannage le technicien utilise-t-il ?",
                "text": "",
                "options": [
                    "descendante",
                    "ascendante",
                    "diviser pour mieux régner",
                    "substitution"
                ],
                "explanation": "En testant l’adresse IP plutôt que l’URL, le technicien isole le problème : DNS ou connectivité des couches inférieures. C’est une approche de type diviser pour mieux régner."
            }
        }
    },
    {
        "title": "61. Quel protocole fournit des services d’authentification, d’intégrité et de confidentialité, et constitue un type de VPN ?",
        "text": "",
        "images": [],
        "options": [
            "MD5",
            "AES",
            "IPsec",
            "ESP"
        ],
        "correct": [
            2
        ],
        "explanation": "IPsec fournit l’authentification, l’intégrité, le contrôle d’accès et la confidentialité, et prend en charge les VPN d’accès distant comme les VPN site à site.",
        "id": 62,
        "i18n": {
            "en": {
                "title": "61. Which protocol provides authentication, integrity, and confidentiality services and is a type of VPN?",
                "text": "",
                "options": [
                    "MD5",
                    "AES",
                    "IPsec",
                    "ESP"
                ],
                "explanation": "IPsec provides authentication, integrity, access control, and confidentiality, and supports both remote-access and site-to-site VPNs."
            },
            "fr": {
                "title": "61. Quel protocole fournit des services d’authentification, d’intégrité et de confidentialité, et constitue un type de VPN ?",
                "text": "",
                "options": [
                    "MD5",
                    "AES",
                    "IPsec",
                    "ESP"
                ],
                "explanation": "IPsec fournit l’authentification, l’intégrité, le contrôle d’accès et la confidentialité, et prend en charge les VPN d’accès distant comme les VPN site à site."
            }
        }
    },
    {
        "title": "62. Quelle affirmation décrit une caractéristique des commutateurs Cisco Catalyst 2960 ?",
        "text": "",
        "images": [],
        "options": [
            "Ils sont principalement utilisés comme commutateurs de couche distribution.",
            "Les nouveaux commutateurs Cisco Catalyst 2960-C prennent en charge le relais PoE.",
            "Ce sont des commutateurs modulaires.",
            "Ils ne prennent pas en charge d’interface virtuelle commutée active (SVI) avec les versions IOS antérieures à 15.x."
        ],
        "correct": [
            1
        ],
        "explanation": "Les nouveaux Catalyst 2960-C prennent en charge le PoE pass-through. Les 2960 sont des commutateurs fixes de couche accès.",
        "id": 63,
        "i18n": {
            "en": {
                "title": "62. Which statement describes a characteristic of Cisco Catalyst 2960 switches?",
                "text": "",
                "options": [
                    "They are best used as distribution layer switches.",
                    "New Cisco Catalyst 2960-C switches support PoE pass-through.",
                    "They are modular switches.",
                    "They do not support an active switched virtual interface (SVI) with IOS versions prior to 15.x."
                ],
                "explanation": "New Catalyst 2960-C switches support PoE pass-through. The 2960 series are fixed-configuration access layer switches."
            },
            "fr": {
                "title": "62. Quelle affirmation décrit une caractéristique des commutateurs Cisco Catalyst 2960 ?",
                "text": "",
                "options": [
                    "Ils sont principalement utilisés comme commutateurs de couche distribution.",
                    "Les nouveaux commutateurs Cisco Catalyst 2960-C prennent en charge le relais PoE.",
                    "Ce sont des commutateurs modulaires.",
                    "Ils ne prennent pas en charge d’interface virtuelle commutée active (SVI) avec les versions IOS antérieures à 15.x."
                ],
                "explanation": "Les nouveaux Catalyst 2960-C prennent en charge le PoE pass-through. Les 2960 sont des commutateurs fixes de couche accès."
            }
        }
    },
    {
        "title": "63. Quel composant de l’architecture ACI traduit les politiques applicatives en programmation réseau ?",
        "text": "",
        "images": [],
        "options": [
            "l’hyperviseur",
            "l’Application Policy Infrastructure Controller",
            "le commutateur Nexus 9000",
            "les points d’extrémité de l’Application Network Profile"
        ],
        "correct": [
            1
        ],
        "explanation": "L’APIC est le contrôleur centralisé qui traduit les politiques applicatives de haut niveau en programmation réseau nécessaire pour configurer la fabric.",
        "id": 64,
        "i18n": {
            "en": {
                "title": "63. Which component of the ACI architecture translates application policies into network programming?",
                "text": "",
                "options": [
                    "the hypervisor",
                    "the Application Policy Infrastructure Controller",
                    "the Nexus 9000 switch",
                    "the Application Network Profile endpoints"
                ],
                "explanation": "The APIC is the centralized controller that translates high-level application policies into the network programming required to configure the fabric."
            },
            "fr": {
                "title": "63. Quel composant de l’architecture ACI traduit les politiques applicatives en programmation réseau ?",
                "text": "",
                "options": [
                    "l’hyperviseur",
                    "l’Application Policy Infrastructure Controller",
                    "le commutateur Nexus 9000",
                    "les points d’extrémité de l’Application Network Profile"
                ],
                "explanation": "L’APIC est le contrôleur centralisé qui traduit les politiques applicatives de haut niveau en programmation réseau nécessaire pour configurer la fabric."
            }
        }
    },
    {
        "title": "64. Quelles sont deux informations à inclure dans un diagramme de topologie logique d’un réseau ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "type d’équipement",
            "spécification du câble",
            "identifiant d’interface",
            "version OS/IOS",
            "type de connexion",
            "type et identifiant du câble"
        ],
        "correct": [
            2,
            4
        ],
        "explanation": "L’identifiant d’interface et le type de connexion appartiennent à une topologie logique. Le type d’équipement, la version OS/IOS et les détails de câblage relèvent plutôt de la topologie physique.",
        "id": 65,
        "i18n": {
            "en": {
                "title": "64. Which two pieces of information should be included in a logical topology diagram of a network? (Choose two.)",
                "text": "",
                "options": [
                    "device type",
                    "cable specification",
                    "interface identifier",
                    "OS/IOS version",
                    "connection type",
                    "cable type and identifier"
                ],
                "explanation": "Interface identifier and connection type belong in a logical topology diagram. Device type, OS/IOS version, and cable details belong in a physical topology diagram."
            },
            "fr": {
                "title": "64. Quelles sont deux informations à inclure dans un diagramme de topologie logique d’un réseau ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "type d’équipement",
                    "spécification du câble",
                    "identifiant d’interface",
                    "version OS/IOS",
                    "type de connexion",
                    "type et identifiant du câble"
                ],
                "explanation": "L’identifiant d’interface et le type de connexion appartiennent à une topologie logique. Le type d’équipement, la version OS/IOS et les détails de câblage relèvent plutôt de la topologie physique."
            }
        }
    },
    {
        "title": "65. Reportez-vous à l’illustration. Un PC à l’adresse 10.1.1.45 ne parvient pas à accéder à Internet. Quelle est la cause la plus probable du problème ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2017/06/41.jpg"
        ],
        "options": [
            "Le pool NAT est épuisé.",
            "Un mauvais masque réseau a été utilisé sur le pool NAT.",
            "L’access-list 1 n’a pas été configurée correctement.",
            "Les interfaces interne et externe ont été configurées à l’envers."
        ],
        "correct": [
            0
        ],
        "explanation": "Les statistiques indiquent que 2 adresses sur 2 sont allouées, soit 100 %. Le pool NAT n’a donc plus d’adresses globales disponibles pour de nouveaux clients.",
        "id": 66,
        "i18n": {
            "en": {
                "title": "65. Refer to the exhibit. A PC at address 10.1.1.45 is unable to access the Internet. What is the most likely cause of the problem?",
                "text": "",
                "options": [
                    "The NAT pool has been exhausted.",
                    "The wrong netmask was used on the NAT pool.",
                    "Access-list 1 has not been configured properly.",
                    "The inside and outside interfaces have been configured backwards."
                ],
                "explanation": "The statistics show 2 of 2 addresses allocated (100%), so the NAT pool is out of global addresses for new clients."
            },
            "fr": {
                "title": "65. Reportez-vous à l’illustration. Un PC à l’adresse 10.1.1.45 ne parvient pas à accéder à Internet. Quelle est la cause la plus probable du problème ?",
                "text": "",
                "options": [
                    "Le pool NAT est épuisé.",
                    "Un mauvais masque réseau a été utilisé sur le pool NAT.",
                    "L’access-list 1 n’a pas été configurée correctement.",
                    "Les interfaces interne et externe ont été configurées à l’envers."
                ],
                "explanation": "Les statistiques indiquent que 2 adresses sur 2 sont allouées, soit 100 %. Le pool NAT n’a donc plus d’adresses globales disponibles pour de nouveaux clients."
            }
        }
    },
    {
        "title": "66. Quels sont deux avantages de l’utilisation des traps SNMP ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Ils éliminent le besoin de certaines requêtes d’interrogation périodiques.",
            "Ils réduisent la charge sur le réseau et sur les ressources des agents.",
            "Ils limitent l’accès aux seuls systèmes de gestion.",
            "Ils peuvent fournir des statistiques sur les paquets TCP/IP qui traversent les équipements Cisco.",
            "Ils peuvent écouter passivement les datagrammes NetFlow exportés."
        ],
        "correct": [
            0,
            1
        ],
        "explanation": "Les traps sont des messages non sollicités envoyés lorsqu’un événement se produit. Ils réduisent donc l’interrogation continue et la charge sur le réseau et les agents.",
        "id": 67,
        "i18n": {
            "en": {
                "title": "66. What are two benefits of using SNMP traps? (Choose two.)",
                "text": "",
                "options": [
                    "They eliminate the need for some periodic polling requests.",
                    "They reduce the load on network and agent resources.",
                    "They limit access for management systems only.",
                    "They can provide statistics on TCP/IP packets that flow through Cisco devices.",
                    "They can passively listen for exported NetFlow datagrams."
                ],
                "explanation": "Traps are unsolicited messages sent when events occur, eliminating continuous polling and reducing network and agent resource usage."
            },
            "fr": {
                "title": "66. Quels sont deux avantages de l’utilisation des traps SNMP ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Ils éliminent le besoin de certaines requêtes d’interrogation périodiques.",
                    "Ils réduisent la charge sur le réseau et sur les ressources des agents.",
                    "Ils limitent l’accès aux seuls systèmes de gestion.",
                    "Ils peuvent fournir des statistiques sur les paquets TCP/IP qui traversent les équipements Cisco.",
                    "Ils peuvent écouter passivement les datagrammes NetFlow exportés."
                ],
                "explanation": "Les traps sont des messages non sollicités envoyés lorsqu’un événement se produit. Ils réduisent donc l’interrogation continue et la charge sur le réseau et les agents."
            }
        }
    },
    {
        "title": "67. Quelle affirmation décrit correctement une caractéristique d’IPsec ?",
        "text": "",
        "images": [],
        "options": [
            "IPsec fonctionne à la couche application et protège toutes les données applicatives.",
            "IPsec est un cadre de normes développé par Cisco qui repose sur des algorithmes OSI.",
            "IPsec est un cadre de normes propriétaires qui dépend d’algorithmes spécifiques à Cisco.",
            "IPsec fonctionne à la couche transport et protège les données à la couche réseau.",
            "IPsec est un cadre de normes ouvertes qui repose sur des algorithmes existants."
        ],
        "correct": [
            4
        ],
        "explanation": "IPsec est un cadre de normes ouvertes reposant sur des algorithmes existants pour fournir confidentialité, intégrité, authentification et échange sécurisé de clés.",
        "id": 68,
        "i18n": {
            "en": {
                "title": "67. Which statement accurately describes a characteristic of IPsec?",
                "text": "",
                "options": [
                    "IPsec works at the application layer and protects all application data.",
                    "IPsec is a framework of standards developed by Cisco that relies on OSI algorithms.",
                    "IPsec is a framework of proprietary standards that depend on Cisco specific algorithms.",
                    "IPsec works at the transport layer and protects data at the network layer.",
                    "IPsec is a framework of open standards that relies on existing algorithms."
                ],
                "explanation": "IPsec is a framework of open standards that relies on existing algorithms to provide confidentiality, integrity, authentication, and secure key exchange."
            },
            "fr": {
                "title": "67. Quelle affirmation décrit correctement une caractéristique d’IPsec ?",
                "text": "",
                "options": [
                    "IPsec fonctionne à la couche application et protège toutes les données applicatives.",
                    "IPsec est un cadre de normes développé par Cisco qui repose sur des algorithmes OSI.",
                    "IPsec est un cadre de normes propriétaires qui dépend d’algorithmes spécifiques à Cisco.",
                    "IPsec fonctionne à la couche transport et protège les données à la couche réseau.",
                    "IPsec est un cadre de normes ouvertes qui repose sur des algorithmes existants."
                ],
                "explanation": "IPsec est un cadre de normes ouvertes reposant sur des algorithmes existants pour fournir confidentialité, intégrité, authentification et échange sécurisé de clés."
            }
        }
    },
    {
        "title": "68. Dans un grand réseau d’entreprise, quelles sont deux fonctions assurées par les routeurs de la couche distribution ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "connecter les utilisateurs au réseau",
            "fournir une dorsale réseau à haut débit",
            "connecter des réseaux distants",
            "fournir l’alimentation Power over Ethernet aux équipements",
            "assurer la sécurité du trafic de données"
        ],
        "correct": [
            2,
            4
        ],
        "explanation": "Les routeurs de distribution connectent les réseaux distants et assurent la sécurité du trafic. Le cœur fournit la dorsale ; la couche accès connecte les utilisateurs et fournit le PoE.",
        "id": 69,
        "i18n": {
            "en": {
                "title": "68. In a large enterprise network, which two functions are performed by routers at the distribution layer? (Choose two.)",
                "text": "",
                "options": [
                    "connect users to the network",
                    "provide a high-speed network backbone",
                    "connect remote networks",
                    "provide Power over Ethernet to devices",
                    "provide data traffic security"
                ],
                "explanation": "Distribution layer routers connect remote networks and provide data traffic security. The core provides the backbone; the access layer connects users and provides PoE."
            },
            "fr": {
                "title": "68. Dans un grand réseau d’entreprise, quelles sont deux fonctions assurées par les routeurs de la couche distribution ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "connecter les utilisateurs au réseau",
                    "fournir une dorsale réseau à haut débit",
                    "connecter des réseaux distants",
                    "fournir l’alimentation Power over Ethernet aux équipements",
                    "assurer la sécurité du trafic de données"
                ],
                "explanation": "Les routeurs de distribution connectent les réseaux distants et assurent la sécurité du trafic. Le cœur fournit la dorsale ; la couche accès connecte les utilisateurs et fournit le PoE."
            }
        }
    },
    {
        "title": "69. Quelles sont deux affirmations qui décrivent l’utilisation des algorithmes asymétriques ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Les clés publique et privée peuvent être utilisées indifféremment.",
            "Si une clé publique est utilisée pour chiffrer les données, une clé publique doit être utilisée pour les déchiffrer.",
            "Si une clé privée est utilisée pour chiffrer les données, une clé publique doit être utilisée pour les déchiffrer.",
            "Si une clé publique est utilisée pour chiffrer les données, une clé privée doit être utilisée pour les déchiffrer.",
            "Si une clé privée est utilisée pour chiffrer les données, une clé privée doit être utilisée pour les déchiffrer."
        ],
        "correct": [
            2,
            3
        ],
        "explanation": "Les algorithmes asymétriques utilisent une paire de clés correspondantes : si la clé publique chiffre, la clé privée déchiffre, et inversement.",
        "id": 70,
        "i18n": {
            "en": {
                "title": "69. Which two statements describe the use of asymmetric algorithms? (Choose two.)",
                "text": "",
                "options": [
                    "Public and private keys may be used interchangeably.",
                    "If a public key is used to encrypt the data, a public key must be used to decrypt the data.",
                    "If a private key is used to encrypt the data, a public key must be used to decrypt the data.",
                    "If a public key is used to encrypt the data, a private key must be used to decrypt the data.",
                    "If a private key is used to encrypt the data, a private key must be used to decrypt the data."
                ],
                "explanation": "Asymmetric algorithms use a matched key pair: if a public key encrypts, the private key decrypts, and vice versa."
            },
            "fr": {
                "title": "69. Quelles sont deux affirmations qui décrivent l’utilisation des algorithmes asymétriques ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Les clés publique et privée peuvent être utilisées indifféremment.",
                    "Si une clé publique est utilisée pour chiffrer les données, une clé publique doit être utilisée pour les déchiffrer.",
                    "Si une clé privée est utilisée pour chiffrer les données, une clé publique doit être utilisée pour les déchiffrer.",
                    "Si une clé publique est utilisée pour chiffrer les données, une clé privée doit être utilisée pour les déchiffrer.",
                    "Si une clé privée est utilisée pour chiffrer les données, une clé privée doit être utilisée pour les déchiffrer."
                ],
                "explanation": "Les algorithmes asymétriques utilisent une paire de clés correspondantes : si la clé publique chiffre, la clé privée déchiffre, et inversement."
            }
        }
    },
    {
        "title": "70. Reportez-vous à l’illustration. Un administrateur réseau a déployé la QoS et configuré le réseau pour marquer le trafic sur les téléphones VoIP ainsi que sur les commutateurs de couche 2 et 3. Où le marquage initial doit-il se produire pour établir la frontière de confiance ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2015/06/i290000v1n1_Trust-Boundary2.jpg"
        ],
        "options": [
            "Frontière de confiance 4",
            "Frontière de confiance 3",
            "Frontière de confiance 1",
            "Frontière de confiance 2"
        ],
        "correct": [
            2
        ],
        "explanation": "Le trafic doit être marqué aussi près que possible de la source. Le trafic marqué sur les téléphones VoIP est considéré comme fiable lorsqu’il entre dans le réseau d’entreprise.",
        "id": 71,
        "i18n": {
            "en": {
                "title": "70. Refer to the exhibit. A network administrator has deployed QoS and has configured the network to mark traffic on the VoIP phones as well as the Layer 2 and Layer 3 switches. Where should initial marking occur to establish the trust boundary?",
                "text": "",
                "options": [
                    "Trust Boundary 4",
                    "Trust Boundary 3",
                    "Trust Boundary 1",
                    "Trust Boundary 2"
                ],
                "explanation": "Traffic should be marked as close to the source as possible. Traffic marked on VoIP phones is considered trusted as it enters the enterprise network."
            },
            "fr": {
                "title": "70. Reportez-vous à l’illustration. Un administrateur réseau a déployé la QoS et configuré le réseau pour marquer le trafic sur les téléphones VoIP ainsi que sur les commutateurs de couche 2 et 3. Où le marquage initial doit-il se produire pour établir la frontière de confiance ?",
                "text": "",
                "options": [
                    "Frontière de confiance 4",
                    "Frontière de confiance 3",
                    "Frontière de confiance 1",
                    "Frontière de confiance 2"
                ],
                "explanation": "Le trafic doit être marqué aussi près que possible de la source. Le trafic marqué sur les téléphones VoIP est considéré comme fiable lorsqu’il entre dans le réseau d’entreprise."
            }
        }
    },
    {
        "title": "71. Quels sont deux avantages d’étendre la connectivité de la couche accès aux utilisateurs via un support sans fil ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "coûts réduits",
            "diminution du nombre de points critiques de défaillance",
            "flexibilité accrue",
            "disponibilité accrue de la bande passante",
            "options de gestion réseau accrues"
        ],
        "correct": [
            0,
            2
        ],
        "explanation": "L’accès sans fil apporte plus de flexibilité et peut réduire les coûts, mais il n’augmente pas la bande passante et ne réduit pas les points de défaillance.",
        "id": 72,
        "i18n": {
            "en": {
                "title": "71. What are two benefits of extending access layer connectivity to users through a wireless medium? (Choose two.)",
                "text": "",
                "options": [
                    "reduced costs",
                    "decreased number of critical points of failure",
                    "increased flexibility",
                    "increased bandwidth availability",
                    "increased network management options"
                ],
                "explanation": "Wireless access provides increased flexibility and reduced costs, but does not increase bandwidth or decrease points of failure."
            },
            "fr": {
                "title": "71. Quels sont deux avantages d’étendre la connectivité de la couche accès aux utilisateurs via un support sans fil ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "coûts réduits",
                    "diminution du nombre de points critiques de défaillance",
                    "flexibilité accrue",
                    "disponibilité accrue de la bande passante",
                    "options de gestion réseau accrues"
                ],
                "explanation": "L’accès sans fil apporte plus de flexibilité et peut réduire les coûts, mais il n’augmente pas la bande passante et ne réduit pas les points de défaillance."
            }
        }
    },
    {
        "title": "72. Quels sont deux objectifs d’une attaque de reconnaissance lancée contre un réseau ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "rechercher les systèmes accessibles",
            "récupérer et modifier des données",
            "recueillir des informations sur le réseau et les équipements",
            "empêcher les autres utilisateurs d’accéder au système",
            "élever les privilèges d’accès"
        ],
        "correct": [
            0,
            2
        ],
        "explanation": "Les attaques de reconnaissance recueillent des informations sur le réseau et recherchent les accès possibles. La modification de données ou l’élévation de privilèges relève plutôt des attaques d’accès.",
        "id": 73,
        "i18n": {
            "en": {
                "title": "72. What are two purposes of launching a reconnaissance attack on a network? (Choose two.)",
                "text": "",
                "options": [
                    "to scan for accessibility",
                    "to retrieve and modify data",
                    "to gather information about the network and devices",
                    "to prevent other users from accessing the system",
                    "to escalate access privileges"
                ],
                "explanation": "Reconnaissance attacks gather information about a network and scan for access. Retrieving/modifying data and escalating privileges are access attacks."
            },
            "fr": {
                "title": "72. Quels sont deux objectifs d’une attaque de reconnaissance lancée contre un réseau ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "rechercher les systèmes accessibles",
                    "récupérer et modifier des données",
                    "recueillir des informations sur le réseau et les équipements",
                    "empêcher les autres utilisateurs d’accéder au système",
                    "élever les privilèges d’accès"
                ],
                "explanation": "Les attaques de reconnaissance recueillent des informations sur le réseau et recherchent les accès possibles. La modification de données ou l’élévation de privilèges relève plutôt des attaques d’accès."
            }
        }
    },
    {
        "title": "73. Un groupe d’utilisateurs du même réseau se plaint que leurs ordinateurs fonctionnent lentement. Après investigation, le technicien détermine que ces ordinateurs font partie d’un réseau zombie. Quel type de logiciel malveillant est utilisé pour contrôler ces ordinateurs ?",
        "text": "",
        "images": [],
        "options": [
            "botnet",
            "logiciel espion",
            "virus",
            "rootkit"
        ],
        "correct": [
            0
        ],
        "explanation": "Un botnet est un réseau d’ordinateurs zombies infectés, contrôlés par un attaquant pour attaquer d’autres systèmes ou voler des données.",
        "id": 74,
        "i18n": {
            "en": {
                "title": "73. A group of users on the same network are all complaining about their computers running slowly. After investigating, the technician determines that these computers are part of a zombie network. Which type of malware is used to control these computers?",
                "text": "",
                "options": [
                    "botnet",
                    "spyware",
                    "virus",
                    "rootkit"
                ],
                "explanation": "A botnet is a network of infected zombie computers controlled by a hacker to attack other computers or steal data."
            },
            "fr": {
                "title": "73. Un groupe d’utilisateurs du même réseau se plaint que leurs ordinateurs fonctionnent lentement. Après investigation, le technicien détermine que ces ordinateurs font partie d’un réseau zombie. Quel type de logiciel malveillant est utilisé pour contrôler ces ordinateurs ?",
                "text": "",
                "options": [
                    "botnet",
                    "logiciel espion",
                    "virus",
                    "rootkit"
                ],
                "explanation": "Un botnet est un réseau d’ordinateurs zombies infectés, contrôlés par un attaquant pour attaquer d’autres systèmes ou voler des données."
            }
        }
    },
    {
        "title": "74. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme adresse source 10.1.1.201, comme adresse de destination 192.31.7.45 et comme protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.31.7.45 eq dns</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            1
        ],
        "explanation": "L’ACL autorise DNS, port 53, mais le protocole 23 correspond à Telnet. Le paquet ne correspond donc pas et est rejeté par le refus implicite.",
        "id": 75,
        "i18n": {
            "en": {
                "title": "74. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 10.1.1.201, a destination address of 192.31.7.45, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.31.7.45 eq dns</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "The ACL permits DNS (port 53) but protocol 23 is Telnet, so it does not match and is dropped by the implicit deny."
            },
            "fr": {
                "title": "74. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme adresse source 10.1.1.201, comme adresse de destination 192.31.7.45 et comme protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 192.31.7.45 eq dns</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "L’ACL autorise DNS, port 53, mais le protocole 23 correspond à Telnet. Le paquet ne correspond donc pas et est rejeté par le refus implicite."
            }
        }
    },
    {
        "title": "75. Reportez-vous à l’illustration. Depuis quel emplacement ce routeur a-t-il chargé l’IOS ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2015/05/i208382v1n1_208382.png"
        ],
        "options": [
            "mémoire flash",
            "NVRAM",
            "RAM",
            "ROM",
            "serveur TFTP"
        ],
        "correct": [
            0
        ],
        "explanation": "La ligne System image file indique flash:..., ce qui signifie que l’IOS a été chargé depuis la mémoire flash.",
        "id": 76,
        "i18n": {
            "en": {
                "title": "75. Refer to the exhibit. From which location did this router load the IOS?",
                "text": "",
                "options": [
                    "flash memory",
                    "NVRAM",
                    "RAM",
                    "ROM",
                    "a TFTP server"
                ],
                "explanation": "The System image file line shows 'flash:...', indicating the IOS was loaded from flash memory."
            },
            "fr": {
                "title": "75. Reportez-vous à l’illustration. Depuis quel emplacement ce routeur a-t-il chargé l’IOS ?",
                "text": "",
                "options": [
                    "mémoire flash",
                    "NVRAM",
                    "RAM",
                    "ROM",
                    "serveur TFTP"
                ],
                "explanation": "La ligne System image file indique flash:..., ce qui signifie que l’IOS a été chargé depuis la mémoire flash."
            }
        }
    },
    {
        "title": "76. Reportez-vous à l’illustration. Quel format de données est utilisé pour représenter les données des applications d’automatisation réseau ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i349058v2n1_347058.png"
        ],
        "options": [
            "XML",
            "YAML",
            "HTML",
            "JSON"
        ],
        "correct": [
            3
        ],
        "explanation": "JSON encadre les paires clé/valeur avec des accolades { }, utilise des clés entre guillemets doubles et sépare clés et valeurs par deux-points.",
        "id": 77,
        "i18n": {
            "en": {
                "title": "76. Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
                "text": "",
                "options": [
                    "XML",
                    "YAML",
                    "HTML",
                    "JSON"
                ],
                "explanation": "JSON encloses key/value pairs in braces { } with keys in double quotes and a colon separating keys from values."
            },
            "fr": {
                "title": "76. Reportez-vous à l’illustration. Quel format de données est utilisé pour représenter les données des applications d’automatisation réseau ?",
                "text": "",
                "options": [
                    "XML",
                    "YAML",
                    "HTML",
                    "JSON"
                ],
                "explanation": "JSON encadre les paires clé/valeur avec des accolades { }, utilise des clés entre guillemets doubles et sépare clés et valeurs par deux-points."
            }
        }
    },
    {
        "title": "77. Quelle étape QoS doit avoir lieu avant que les paquets puissent être marqués ?",
        "text": "",
        "images": [],
        "options": [
            "classification",
            "lissage de trafic",
            "mise en file d’attente",
            "policing du trafic"
        ],
        "correct": [
            0
        ],
        "explanation": "La classification analyse les flux de trafic afin de déterminer leur classe avant que le paquet puisse être marqué.",
        "id": 78,
        "i18n": {
            "en": {
                "title": "77. What QoS step must occur before packets can be marked?",
                "text": "",
                "options": [
                    "classifying",
                    "shaping",
                    "queuing",
                    "policing"
                ],
                "explanation": "Classification analyzes traffic flows to determine the class before the packet can be marked."
            },
            "fr": {
                "title": "77. Quelle étape QoS doit avoir lieu avant que les paquets puissent être marqués ?",
                "text": "",
                "options": [
                    "classification",
                    "lissage de trafic",
                    "mise en file d’attente",
                    "policing du trafic"
                ],
                "explanation": "La classification analyse les flux de trafic afin de déterminer leur classe avant que le paquet puisse être marqué."
            }
        }
    },
    {
        "title": "78. Quelle est la fonction principale d’un hyperviseur ?",
        "text": "",
        "images": [],
        "options": [
            "Il sert à créer et gérer plusieurs instances de machines virtuelles sur une machine hôte.",
            "C’est un équipement qui filtre et vérifie les identifiants de sécurité.",
            "C’est un équipement qui synchronise un groupe de capteurs.",
            "C’est un logiciel utilisé pour coordonner et préparer les données pour l’analyse.",
            "Il est utilisé par les FAI pour surveiller les ressources de cloud computing."
        ],
        "correct": [
            0
        ],
        "explanation": "Un hyperviseur est un logiciel utilisé pour créer et gérer plusieurs instances de machines virtuelles.",
        "id": 79,
        "i18n": {
            "en": {
                "title": "78. What is the main function of a hypervisor?",
                "text": "",
                "options": [
                    "It is used to create and manage multiple VM instances on a host machine.",
                    "It is a device that filters and checks security credentials.",
                    "It is a device that synchronizes a group of sensors.",
                    "It is software used to coordinate and prepare data for analysis.",
                    "It is used by ISPs to monitor cloud computing resources."
                ],
                "explanation": "A hypervisor is software used to create and manage multiple VM instances."
            },
            "fr": {
                "title": "78. Quelle est la fonction principale d’un hyperviseur ?",
                "text": "",
                "options": [
                    "Il sert à créer et gérer plusieurs instances de machines virtuelles sur une machine hôte.",
                    "C’est un équipement qui filtre et vérifie les identifiants de sécurité.",
                    "C’est un équipement qui synchronise un groupe de capteurs.",
                    "C’est un logiciel utilisé pour coordonner et préparer les données pour l’analyse.",
                    "Il est utilisé par les FAI pour surveiller les ressources de cloud computing."
                ],
                "explanation": "Un hyperviseur est un logiciel utilisé pour créer et gérer plusieurs instances de machines virtuelles."
            }
        }
    },
    {
        "title": "79. Une entreprise doit interconnecter plusieurs agences dans une zone métropolitaine. L’ingénieur réseau cherche une solution fournissant un trafic convergé à haut débit, voix, vidéo et données sur la même infrastructure, et facile à intégrer au LAN existant. Quelle technologie recommander ?",
        "text": "",
        "images": [],
        "options": [
            "Frame Relay",
            "Ethernet WAN",
            "VSAT",
            "ISDN"
        ],
        "correct": [
            1
        ],
        "explanation": "Ethernet WAN s’intègre facilement aux LAN Ethernet existants et fournit un réseau de couche 2 commuté et à haute bande passante pour les données, la voix et la vidéo.",
        "id": 80,
        "i18n": {
            "en": {
                "title": "79. A company needs to interconnect several branch offices across a metropolitan area. The network engineer is seeking a solution that provides high-speed converged traffic, including voice, video, and data on the same network infrastructure. The company also wants easy integration to their existing LAN infrastructure. Which technology should be recommended?",
                "text": "",
                "options": [
                    "Frame Relay",
                    "Ethernet WAN",
                    "VSAT",
                    "ISDN"
                ],
                "explanation": "Ethernet WAN connects easily to existing Ethernet LANs and provides a switched, high-bandwidth Layer 2 network for data, voice, and video."
            },
            "fr": {
                "title": "79. Une entreprise doit interconnecter plusieurs agences dans une zone métropolitaine. L’ingénieur réseau cherche une solution fournissant un trafic convergé à haut débit, voix, vidéo et données sur la même infrastructure, et facile à intégrer au LAN existant. Quelle technologie recommander ?",
                "text": "",
                "options": [
                    "Frame Relay",
                    "Ethernet WAN",
                    "VSAT",
                    "ISDN"
                ],
                "explanation": "Ethernet WAN s’intègre facilement aux LAN Ethernet existants et fournit un réseau de couche 2 commuté et à haute bande passante pour les données, la voix et la vidéo."
            }
        }
    },
    {
        "title": "80. Reportez-vous à l’illustration. Lorsque le trafic est transféré vers une interface de sortie avec traitement QoS, quelle technique d’évitement de congestion est utilisée ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2015/06/i288031v1n1_Traffic_Policing.png"
        ],
        "options": [
            "lissage de trafic",
            "détection précoce aléatoire pondérée",
            "classification et marquage",
            "policing du trafic"
        ],
        "correct": [
            3
        ],
        "explanation": "Le policing supprime le trafic lorsqu’il atteint un débit maximal configuré, créant un débit de sortie en dents de scie. Le shaping met en mémoire tampon et lisse le trafic.",
        "id": 81,
        "i18n": {
            "en": {
                "title": "80. Refer to the exhibit. As traffic is forwarded out an egress interface with QoS treatment, which congestion avoidance technique is used?",
                "text": "",
                "options": [
                    "traffic shaping",
                    "weighted random early detection",
                    "classification and marking",
                    "traffic policing"
                ],
                "explanation": "Traffic policing drops traffic when it reaches a configured maximum rate, creating a saw-tooth output rate. Shaping buffers and smooths traffic."
            },
            "fr": {
                "title": "80. Reportez-vous à l’illustration. Lorsque le trafic est transféré vers une interface de sortie avec traitement QoS, quelle technique d’évitement de congestion est utilisée ?",
                "text": "",
                "options": [
                    "lissage de trafic",
                    "détection précoce aléatoire pondérée",
                    "classification et marquage",
                    "policing du trafic"
                ],
                "explanation": "Le policing supprime le trafic lorsqu’il atteint un débit maximal configuré, créant un débit de sortie en dents de scie. Le shaping met en mémoire tampon et lisse le trafic."
            }
        }
    },
    {
        "title": "81. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme adresse source 10.1.3.8, comme destination 10.10.3.8 et comme protocole 53 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 10.1.3.8 eq dns</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            1
        ],
        "explanation": "La source 10.1.3.8 est en dehors de la plage 10.1.1.0-255 et la destination n’est pas l’hôte 10.1.3.8. Le paquet est donc rejeté par le refus implicite.",
        "id": 82,
        "i18n": {
            "en": {
                "title": "81. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 10.1.3.8, a destination address of 10.10.3.8, and a protocol of 53 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 10.1.3.8 eq dns</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "Source 10.1.3.8 is outside 10.1.1.0-255 and the destination is not host 10.1.3.8, so it is dropped by the implicit deny."
            },
            "fr": {
                "title": "81. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme adresse source 10.1.3.8, comme destination 10.10.3.8 et comme protocole 53 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 101 permit tcp 10.1.1.0 0.0.0.255 host 10.1.3.8 eq dns</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "La source 10.1.3.8 est en dehors de la plage 10.1.1.0-255 et la destination n’est pas l’hôte 10.1.3.8. Le paquet est donc rejeté par le refus implicite."
            }
        }
    },
    {
        "title": "82. Reportez-vous à l’illustration. Quel est le rôle de la commande marquée par une flèche dans la sortie partielle de configuration d’un routeur Cisco haut débit ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2016/02/2017-06-26_224832-1.png"
        ],
        "options": [
            "définir quelles adresses sont autorisées à entrer dans le routeur",
            "définir quelles adresses peuvent être traduites",
            "définir quelles adresses sont attribuées à un pool NAT",
            "définir quelles adresses sont autorisées à sortir du routeur"
        ],
        "correct": [
            1
        ],
        "explanation": "L’access-list utilisée avec ip nat inside source identifie le trafic local interne éligible à la traduction.",
        "id": 83,
        "i18n": {
            "en": {
                "title": "82. Refer to the exhibit. What is the purpose of the command marked with an arrow shown in the partial configuration output of a Cisco broadband router?",
                "text": "",
                "options": [
                    "defines which addresses are allowed into the router",
                    "defines which addresses can be translated",
                    "defines which addresses are assigned to a NAT pool",
                    "defines which addresses are allowed out of the router"
                ],
                "explanation": "The access-list used with ip nat inside source identifies the inside local traffic eligible for translation."
            },
            "fr": {
                "title": "82. Reportez-vous à l’illustration. Quel est le rôle de la commande marquée par une flèche dans la sortie partielle de configuration d’un routeur Cisco haut débit ?",
                "text": "",
                "options": [
                    "définir quelles adresses sont autorisées à entrer dans le routeur",
                    "définir quelles adresses peuvent être traduites",
                    "définir quelles adresses sont attribuées à un pool NAT",
                    "définir quelles adresses sont autorisées à sortir du routeur"
                ],
                "explanation": "L’access-list utilisée avec ip nat inside source identifie le trafic local interne éligible à la traduction."
            }
        }
    },
    {
        "title": "83. Si un routeur possède deux interfaces et route à la fois du trafic IPv4 et IPv6, combien d’ACL pourraient être créées et appliquées ?",
        "text": "",
        "images": [],
        "options": [
            "12",
            "4",
            "8",
            "16",
            "6"
        ],
        "correct": [
            2
        ],
        "explanation": "Avec la règle des trois P, par protocole, par direction et par interface : 2 interfaces × 2 protocoles × 2 directions = 8.",
        "id": 84,
        "i18n": {
            "en": {
                "title": "83. If a router has two interfaces and is routing both IPv4 and IPv6 traffic, how many ACLs could be created and applied to it?",
                "text": "",
                "options": [
                    "12",
                    "4",
                    "8",
                    "16",
                    "6"
                ],
                "explanation": "Using the 'three Ps' (per protocol, per direction, per interface): 2 interfaces x 2 protocols x 2 directions = 8."
            },
            "fr": {
                "title": "83. Si un routeur possède deux interfaces et route à la fois du trafic IPv4 et IPv6, combien d’ACL pourraient être créées et appliquées ?",
                "text": "",
                "options": [
                    "12",
                    "4",
                    "8",
                    "16",
                    "6"
                ],
                "explanation": "Avec la règle des trois P, par protocole, par direction et par interface : 2 interfaces × 2 protocoles × 2 directions = 8."
            }
        }
    },
    {
        "title": "84. Reportez-vous à l’illustration. Un administrateur a d’abord configuré une ACL étendue comme le montre la sortie de show access-lists, puis l’a modifiée avec : no 20 / 5 permit tcp any any eq 22 / 20 deny udp any any. Quelles sont deux conclusions possibles avec cette nouvelle configuration ? (Choisissez deux réponses.)",
        "text": "<pre><code>Router(config)# ip access-list extended 101\nRouter(config-ext-nacl)# no 20\nRouter(config-ext-nacl)# 5 permit tcp any any eq 22\nRouter(config-ext-nacl)# 20 deny udp any any</pre></code>",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i241882v4n1_241882.png"
        ],
        "options": [
            "Les paquets TFTP seront autorisés.",
            "Les paquets ping seront autorisés.",
            "Les paquets Telnet seront autorisés.",
            "Les paquets SSH seront autorisés.",
            "Tous les paquets TCP et UDP seront refusés."
        ],
        "correct": [
            1,
            3
        ],
        "explanation": "Après modification, seules les entrées autorisant SSH et ICMP restent permissives ; les autres paquets TCP et UDP sont refusés.",
        "id": 85,
        "i18n": {
            "en": {
                "title": "84. Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command, then edited it with: no 20 / 5 permit tcp any any eq 22 / 20 deny udp any any. Which two conclusions can be drawn from this new configuration? (Choose two.)",
                "text": "<pre><code>Router(config)# ip access-list extended 101\nRouter(config-ext-nacl)# no 20\nRouter(config-ext-nacl)# 5 permit tcp any any eq 22\nRouter(config-ext-nacl)# 20 deny udp any any</pre></code>",
                "options": [
                    "TFTP packets will be permitted.",
                    "Ping packets will be permitted.",
                    "Telnet packets will be permitted.",
                    "SSH packets will be permitted.",
                    "All TCP and UDP packets will be denied."
                ],
                "explanation": "After editing: 5 permit tcp any any eq ssh, 10 deny tcp any any, 20 deny udp any any, 30 permit icmp any any. Only SSH and ICMP (ping) packets are permitted."
            },
            "fr": {
                "title": "84. Reportez-vous à l’illustration. Un administrateur a d’abord configuré une ACL étendue comme le montre la sortie de show access-lists, puis l’a modifiée avec : no 20 / 5 permit tcp any any eq 22 / 20 deny udp any any. Quelles sont deux conclusions possibles avec cette nouvelle configuration ? (Choisissez deux réponses.)",
                "text": "<pre><code>Router(config)# ip access-list extended 101\nRouter(config-ext-nacl)# no 20\nRouter(config-ext-nacl)# 5 permit tcp any any eq 22\nRouter(config-ext-nacl)# 20 deny udp any any</pre></code>",
                "options": [
                    "Les paquets TFTP seront autorisés.",
                    "Les paquets ping seront autorisés.",
                    "Les paquets Telnet seront autorisés.",
                    "Les paquets SSH seront autorisés.",
                    "Tous les paquets TCP et UDP seront refusés."
                ],
                "explanation": "Après modification, seules les entrées autorisant SSH et ICMP restent permissives ; les autres paquets TCP et UDP sont refusés."
            }
        }
    },
    {
        "title": "85. Quelle approche de dépannage convient davantage à un administrateur réseau expérimenté qu’à un administrateur moins expérimenté ?",
        "text": "",
        "images": [],
        "options": [
            "une approche moins structurée fondée sur une hypothèse éclairée",
            "une approche comparant les composants fonctionnels et non fonctionnels pour repérer des différences significatives",
            "une approche structurée commençant par la couche physique et remontant les couches du modèle OSI jusqu’à identifier la cause",
            "une approche commençant par les applications utilisateur et descendant les couches du modèle OSI jusqu’à identifier la cause"
        ],
        "correct": [
            0
        ],
        "explanation": "L’approche par hypothèse éclairée convient aux techniciens expérimentés qui s’appuient sur une forte expérience. Les approches structurées sont plus sûres pour les administrateurs moins expérimentés.",
        "id": 86,
        "i18n": {
            "en": {
                "title": "85. Which troubleshooting approach is more appropriate for a seasoned network administrator rather than a less-experienced network administrator?",
                "text": "",
                "options": [
                    "a less-structured approach based on an educated guess",
                    "an approach comparing working and nonworking components to spot significant differences",
                    "a structured approach starting with the physical layer and moving up through the layers of the OSI model until the cause of the problem is identified",
                    "an approach that starts with the end-user applications and moves down through the layers of the OSI model until the cause of the problem has been identified"
                ],
                "explanation": "The educated guess approach suits seasoned technicians who rely on extensive experience. Structured approaches are safer for less-experienced admins."
            },
            "fr": {
                "title": "85. Quelle approche de dépannage convient davantage à un administrateur réseau expérimenté qu’à un administrateur moins expérimenté ?",
                "text": "",
                "options": [
                    "une approche moins structurée fondée sur une hypothèse éclairée",
                    "une approche comparant les composants fonctionnels et non fonctionnels pour repérer des différences significatives",
                    "une approche structurée commençant par la couche physique et remontant les couches du modèle OSI jusqu’à identifier la cause",
                    "une approche commençant par les applications utilisateur et descendant les couches du modèle OSI jusqu’à identifier la cause"
                ],
                "explanation": "L’approche par hypothèse éclairée convient aux techniciens expérimentés qui s’appuient sur une forte expérience. Les approches structurées sont plus sûres pour les administrateurs moins expérimentés."
            }
        }
    },
    {
        "title": "86. Reportez-vous à l’illustration. De nombreux employés perdent du temps à accéder aux réseaux sociaux depuis leurs postes. L’entreprise veut bloquer cet accès. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i350685v1n1_C3M4-Diagram.jpg"
        ],
        "options": [
            "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
            "ACL standard en sortie sur l’interface WAN de R2 vers Internet",
            "ACL standard en sortie sur R2 S0/0/0",
            "ACL étendues en entrée sur R1 G0/0 et G0/1"
        ],
        "correct": [
            3
        ],
        "explanation": "Des ACL étendues sont nécessaires pour filtrer par destination et par port, et elles doivent être placées près de la source : en entrée sur R1 G0/0 et G0/1.",
        "id": 87,
        "i18n": {
            "en": {
                "title": "86. Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "extended ACL outbound on R2 WAN interface towards the internet",
                    "standard ACL outbound on R2 WAN interface towards the internet",
                    "standard ACL outbound on R2 S0/0/0",
                    "extended ACLs inbound on R1 G0/0 and G0/1"
                ],
                "explanation": "Extended ACLs are needed to filter by destination/port and should be placed close to the source: inbound on R1 G0/0 and G0/1."
            },
            "fr": {
                "title": "86. Reportez-vous à l’illustration. De nombreux employés perdent du temps à accéder aux réseaux sociaux depuis leurs postes. L’entreprise veut bloquer cet accès. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
                    "ACL standard en sortie sur l’interface WAN de R2 vers Internet",
                    "ACL standard en sortie sur R2 S0/0/0",
                    "ACL étendues en entrée sur R1 G0/0 et G0/1"
                ],
                "explanation": "Des ACL étendues sont nécessaires pour filtrer par destination et par port, et elles doivent être placées près de la source : en entrée sur R1 G0/0 et G0/1."
            }
        }
    },
    {
        "title": "87. Reportez-vous à l’illustration. Un administrateur essaie de configurer PAT sur R1, mais PC-A ne parvient pas à accéder à Internet. D’après la sortie debug, quelle est la cause la plus probable ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2016/02/2017-03-09_142831.png"
        ],
        "options": [
            "Les interfaces NAT interne et externe ont été configurées à l’envers.",
            "L’adresse globale interne n’est pas dans le même sous-réseau que le FAI.",
            "L’adresse sur Fa0/0 devrait être 64.100.0.1.",
            "La liste d’accès source NAT correspond à la mauvaise plage d’adresses."
        ],
        "correct": [
            1
        ],
        "explanation": "L’adresse traduite appartient au sous-réseau 209.165.201.0 alors que l’interface vers le FAI est dans 209.165.200.224/27. Les paquets de retour ne peuvent donc pas être routés correctement.",
        "id": 88,
        "i18n": {
            "en": {
                "title": "87. Refer to the exhibit. An administrator is trying to configure PAT on R1, but PC-A is unable to access the Internet. Based on the debug output, what is most likely the cause of the problem?",
                "text": "",
                "options": [
                    "The inside and outside NAT interfaces have been configured backwards",
                    "The inside global address is not on the same subnet as the ISP",
                    "The address on Fa0/0 should be 64.100.0.1.",
                    "The NAT source access list matches the wrong address range."
                ],
                "explanation": "The translated address is on the 209.165.201.0 subnet but the ISP-facing interface is in 209.165.200.224/27, so return packets cannot be routed back."
            },
            "fr": {
                "title": "87. Reportez-vous à l’illustration. Un administrateur essaie de configurer PAT sur R1, mais PC-A ne parvient pas à accéder à Internet. D’après la sortie debug, quelle est la cause la plus probable ?",
                "text": "",
                "options": [
                    "Les interfaces NAT interne et externe ont été configurées à l’envers.",
                    "L’adresse globale interne n’est pas dans le même sous-réseau que le FAI.",
                    "L’adresse sur Fa0/0 devrait être 64.100.0.1.",
                    "La liste d’accès source NAT correspond à la mauvaise plage d’adresses."
                ],
                "explanation": "L’adresse traduite appartient au sous-réseau 209.165.201.0 alors que l’interface vers le FAI est dans 209.165.200.224/27. Les paquets de retour ne peuvent donc pas être routés correctement."
            }
        }
    },
    {
        "title": "88. Pourquoi la QoS est-elle importante dans un réseau convergé qui combine communications voix, vidéo et données ?",
        "text": "",
        "images": [],
        "options": [
            "Les communications de données doivent recevoir la priorité maximale.",
            "Les communications voix et vidéo sont plus sensibles à la latence.",
            "Les équipements hérités ne peuvent pas transmettre la voix et la vidéo sans QoS.",
            "Les communications de données sont sensibles à la gigue."
        ],
        "correct": [
            1
        ],
        "explanation": "Sans QoS, les paquets voix et vidéo sensibles au temps sont abandonnés aussi souvent que le trafic e-mail ou web, ce qui dégrade leur qualité.",
        "id": 89,
        "i18n": {
            "en": {
                "title": "88. Why is QoS an important issue in a converged network that combines voice, video, and data communications?",
                "text": "",
                "options": [
                    "Data communications must be given the first priority.",
                    "Voice and video communications are more sensitive to latency.",
                    "Legacy equipment is unable to transmit voice and video without QoS.",
                    "Data communications are sensitive to jitter."
                ],
                "explanation": "Without QoS, time-sensitive voice and video packets are dropped as often as email and web traffic, degrading their quality."
            },
            "fr": {
                "title": "88. Pourquoi la QoS est-elle importante dans un réseau convergé qui combine communications voix, vidéo et données ?",
                "text": "",
                "options": [
                    "Les communications de données doivent recevoir la priorité maximale.",
                    "Les communications voix et vidéo sont plus sensibles à la latence.",
                    "Les équipements hérités ne peuvent pas transmettre la voix et la vidéo sans QoS.",
                    "Les communications de données sont sensibles à la gigue."
                ],
                "explanation": "Sans QoS, les paquets voix et vidéo sensibles au temps sont abandonnés aussi souvent que le trafic e-mail ou web, ce qui dégrade leur qualité."
            }
        }
    },
    {
        "title": "89. Quelle affirmation décrit un VPN ?",
        "text": "",
        "images": [],
        "options": [
            "Les VPN utilisent des connexions logiques pour créer des réseaux publics via Internet.",
            "Les VPN utilisent un logiciel de virtualisation open source pour créer le tunnel via Internet.",
            "Les VPN utilisent des connexions physiques dédiées pour transférer les données entre utilisateurs distants.",
            "Les VPN utilisent des connexions virtuelles pour créer un réseau privé à travers un réseau public."
        ],
        "correct": [
            3
        ],
        "explanation": "Un VPN utilise des connexions virtuelles acheminées à travers un réseau public afin de créer un réseau privé.",
        "id": 90,
        "i18n": {
            "en": {
                "title": "89. Which statement describes a VPN?",
                "text": "",
                "options": [
                    "VPNs use logical connections to create public networks through the Internet.",
                    "VPNs use open source virtualization software to create the tunnel through the Internet.",
                    "VPNs use dedicated physical connections to transfer data between remote users.",
                    "VPNs use virtual connections to create a private network through a public network."
                ],
                "explanation": "A VPN uses virtual connections routed through a public network to create a private network."
            },
            "fr": {
                "title": "89. Quelle affirmation décrit un VPN ?",
                "text": "",
                "options": [
                    "Les VPN utilisent des connexions logiques pour créer des réseaux publics via Internet.",
                    "Les VPN utilisent un logiciel de virtualisation open source pour créer le tunnel via Internet.",
                    "Les VPN utilisent des connexions physiques dédiées pour transférer les données entre utilisateurs distants.",
                    "Les VPN utilisent des connexions virtuelles pour créer un réseau privé à travers un réseau public."
                ],
                "explanation": "Un VPN utilise des connexions virtuelles acheminées à travers un réseau public afin de créer un réseau privé."
            }
        }
    },
    {
        "title": "90. Dans quel état OSPF l’élection DR/BDR est-elle effectuée ?",
        "text": "",
        "images": [],
        "options": [
            "ExStart",
            "Init",
            "Two-Way",
            "Exchange"
        ],
        "correct": [
            2
        ],
        "explanation": "L’élection DR/BDR se déroule dans l’état Two-Way, une fois la communication bidirectionnelle confirmée.",
        "id": 91,
        "i18n": {
            "en": {
                "title": "90. In which OSPF state is the DR/BDR election conducted?",
                "text": "",
                "options": [
                    "ExStart",
                    "Init",
                    "Two-Way",
                    "Exchange"
                ],
                "explanation": "The DR/BDR election is conducted during the Two-Way state once bidirectional communication is confirmed."
            },
            "fr": {
                "title": "90. Dans quel état OSPF l’élection DR/BDR est-elle effectuée ?",
                "text": "",
                "options": [
                    "ExStart",
                    "Init",
                    "Two-Way",
                    "Exchange"
                ],
                "explanation": "L’élection DR/BDR se déroule dans l’état Two-Way, une fois la communication bidirectionnelle confirmée."
            }
        }
    },
    {
        "title": "91. Deux entreprises viennent de finaliser une fusion. L’ingénieur réseau doit connecter les deux réseaux d’entreprise sans le coût de lignes louées. Quelle solution serait la plus rentable pour fournir une connexion correcte et sécurisée entre les deux réseaux ?",
        "text": "",
        "images": [],
        "options": [
            "Cisco Secure Mobility Clientless SSL VPN",
            "Frame Relay",
            "VPN d’accès distant avec IPsec",
            "Cisco AnyConnect Secure Mobility Client avec SSL",
            "VPN site à site"
        ],
        "correct": [
            4
        ],
        "explanation": "Un VPN site à site interconnecte statiquement des réseaux entiers et coûte moins cher que des lignes louées ou Frame Relay.",
        "id": 92,
        "i18n": {
            "en": {
                "title": "91. Two corporations have just completed a merger. The network engineer has been asked to connect the two corporate networks without the expense of leased lines. Which solution would be the most cost effective method of providing a proper and secure connection between the two corporate networks?",
                "text": "",
                "options": [
                    "Cisco Secure Mobility Clientless SSL VPN",
                    "Frame Relay",
                    "remote access VPN using IPsec",
                    "Cisco AnyConnect Secure Mobility Client with SSL",
                    "site-to-site VPN"
                ],
                "explanation": "A site-to-site VPN statically interconnects entire networks and is more cost effective than leased lines or Frame Relay."
            },
            "fr": {
                "title": "91. Deux entreprises viennent de finaliser une fusion. L’ingénieur réseau doit connecter les deux réseaux d’entreprise sans le coût de lignes louées. Quelle solution serait la plus rentable pour fournir une connexion correcte et sécurisée entre les deux réseaux ?",
                "text": "",
                "options": [
                    "Cisco Secure Mobility Clientless SSL VPN",
                    "Frame Relay",
                    "VPN d’accès distant avec IPsec",
                    "Cisco AnyConnect Secure Mobility Client avec SSL",
                    "VPN site à site"
                ],
                "explanation": "Un VPN site à site interconnecte statiquement des réseaux entiers et coûte moins cher que des lignes louées ou Frame Relay."
            }
        }
    },
    {
        "title": "92. Quel est l’état opérationnel final qui se forme entre un DR OSPF et un DROTHER lorsque les routeurs atteignent la convergence ?",
        "text": "",
        "images": [],
        "options": [
            "loading",
            "established",
            "full",
            "two-way"
        ],
        "correct": [
            2
        ],
        "explanation": "Un DROTHER forme une adjacence complète avec le DR et le BDR. L’état Full indique que les bases de données sont identiques.",
        "id": 93,
        "i18n": {
            "en": {
                "title": "92. What is the final operational state that will form between an OSPF DR and a DROTHER once the routers reach convergence?",
                "text": "",
                "options": [
                    "loading",
                    "established",
                    "full",
                    "two-way"
                ],
                "explanation": "A DROTHER forms a full adjacency with the DR and BDR; the Full state indicates the databases are identical."
            },
            "fr": {
                "title": "92. Quel est l’état opérationnel final qui se forme entre un DR OSPF et un DROTHER lorsque les routeurs atteignent la convergence ?",
                "text": "",
                "options": [
                    "loading",
                    "established",
                    "full",
                    "two-way"
                ],
                "explanation": "Un DROTHER forme une adjacence complète avec le DR et le BDR. L’état Full indique que les bases de données sont identiques."
            }
        }
    },
    {
        "title": "93. Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir leurs adjacences OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
        "text": "Cas 1",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i255837v1n1_255837.gif"
        ],
        "options": [
            "Le routeur R3 deviendra le DR et le routeur R1 deviendra le BDR.",
            "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
            "Le routeur R1 deviendra le DR et le routeur R2 deviendra le BDR.",
            "Le routeur R3 deviendra le DR et le routeur R2 deviendra le BDR."
        ],
        "correct": [
            0
        ],
        "explanation": "R3 et R1 ont les priorités les plus élevées ; R3 a l’ID de routeur le plus élevé, donc R3 devient DR et R1 devient BDR.",
        "id": 94,
        "i18n": {
            "en": {
                "title": "93. Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
                "text": "Case 1",
                "options": [
                    "Router R3 will become the DR and router R1 will become the BDR.",
                    "Router R4 will become the DR and router R3 will become the BDR.",
                    "Router R1 will become the DR and router R2 will become the BDR.",
                    "Router R3 will become the DR and router R2 will become the BDR."
                ],
                "explanation": "R3 and R1 have the highest priority; R3 has the higher router ID, so R3 becomes DR and R1 becomes BDR."
            },
            "fr": {
                "title": "93. Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir leurs adjacences OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
                "text": "Cas 1",
                "options": [
                    "Le routeur R3 deviendra le DR et le routeur R1 deviendra le BDR.",
                    "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
                    "Le routeur R1 deviendra le DR et le routeur R2 deviendra le BDR.",
                    "Le routeur R3 deviendra le DR et le routeur R2 deviendra le BDR."
                ],
                "explanation": "R3 et R1 ont les priorités les plus élevées ; R3 a l’ID de routeur le plus élevé, donc R3 devient DR et R1 devient BDR."
            }
        }
    },
    {
        "title": "93. Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir leurs adjacences OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
        "text": "Cas 2",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/2021-11-22_102145.jpg"
        ],
        "options": [
            "Le routeur R2 deviendra le DR et le routeur R4 deviendra le BDR.",
            "Le routeur R1 deviendra le DR et le routeur R3 deviendra le BDR.",
            "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
            "Le routeur R3 deviendra le DR et le routeur R2 deviendra le BDR."
        ],
        "correct": [
            1
        ],
        "explanation": "Selon la priorité puis l’ID de routeur, R1 devient DR et R3 devient BDR.",
        "id": 95,
        "i18n": {
            "en": {
                "title": "93. Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
                "text": "Case 2",
                "options": [
                    "Router R2 will become the DR and router R4 will become the BDR.",
                    "Router R1 will become the DR and router R3 will become the BDR.",
                    "Router R4 will become the DR and router R3 will become the BDR.",
                    "Router R3 will become the DR and router R2 will become the BDR."
                ],
                "explanation": "Based on priority then router ID, R1 becomes the DR and R3 becomes the BDR."
            },
            "fr": {
                "title": "93. Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir leurs adjacences OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
                "text": "Cas 2",
                "options": [
                    "Le routeur R2 deviendra le DR et le routeur R4 deviendra le BDR.",
                    "Le routeur R1 deviendra le DR et le routeur R3 deviendra le BDR.",
                    "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
                    "Le routeur R3 deviendra le DR et le routeur R2 deviendra le BDR."
                ],
                "explanation": "Selon la priorité puis l’ID de routeur, R1 devient DR et R3 devient BDR."
            }
        }
    },
    {
        "title": "94. Quel type de serveur serait utilisé pour conserver un historique des messages provenant d’équipements réseau surveillés ?",
        "text": "",
        "images": [],
        "options": [
            "DNS",
            "impression",
            "DHCP",
            "syslog",
            "authentification"
        ],
        "correct": [
            3
        ],
        "explanation": "Un serveur syslog centralise les messages journalisés provenant des équipements réseau surveillés.",
        "id": 96,
        "i18n": {
            "en": {
                "title": "94. Which type of server would be used to keep a historical record of messages from monitored network devices?",
                "text": "",
                "options": [
                    "DNS",
                    "print",
                    "DHCP",
                    "syslog",
                    "authentication"
                ],
                "explanation": "A syslog server is a centralized location for logged messages from monitored network devices."
            },
            "fr": {
                "title": "94. Quel type de serveur serait utilisé pour conserver un historique des messages provenant d’équipements réseau surveillés ?",
                "text": "",
                "options": [
                    "DNS",
                    "impression",
                    "DHCP",
                    "syslog",
                    "authentification"
                ],
                "explanation": "Un serveur syslog centralise les messages journalisés provenant des équipements réseau surveillés."
            }
        }
    },
    {
        "title": "95. Lorsque la QoS est mise en œuvre dans un réseau convergé, quels sont deux facteurs que l’on peut contrôler pour améliorer les performances du trafic temps réel ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "adressage des paquets",
            "délai",
            "gigue",
            "routage des paquets",
            "vitesse de liaison"
        ],
        "correct": [
            1,
            2
        ],
        "explanation": "Le délai, ou latence, et la gigue, variation du délai, doivent être contrôlés pour prendre en charge la voix et la vidéo en temps réel.",
        "id": 97,
        "i18n": {
            "en": {
                "title": "95. When QoS is implemented in a converged network, which two factors can be controlled to improve network performance for real-time traffic? (Choose two.)",
                "text": "",
                "options": [
                    "packet addressing",
                    "delay",
                    "jitter",
                    "packet routing",
                    "link speed"
                ],
                "explanation": "Delay (latency) and jitter (variation in delay) must be controlled to support real-time voice and video traffic."
            },
            "fr": {
                "title": "95. Lorsque la QoS est mise en œuvre dans un réseau convergé, quels sont deux facteurs que l’on peut contrôler pour améliorer les performances du trafic temps réel ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "adressage des paquets",
                    "délai",
                    "gigue",
                    "routage des paquets",
                    "vitesse de liaison"
                ],
                "explanation": "Le délai, ou latence, et la gigue, variation du délai, doivent être contrôlés pour prendre en charge la voix et la vidéo en temps réel."
            }
        }
    },
    {
        "title": "96. Dans quelle étape de la collecte des symptômes l’ingénieur réseau détermine-t-il si le problème se situe dans la couche cœur, distribution ou accès du réseau ?",
        "text": "",
        "images": [],
        "options": [
            "Déterminer la responsabilité.",
            "Déterminer les symptômes.",
            "Réduire le périmètre.",
            "Documenter les symptômes.",
            "Collecter les informations."
        ],
        "correct": [
            2
        ],
        "explanation": "Dans l’étape de réduction du périmètre, l’ingénieur détermine si le problème se situe dans la couche cœur, distribution ou accès.",
        "id": 98,
        "i18n": {
            "en": {
                "title": "96. In which step of gathering symptoms does the network engineer determine if the problem is at the core, distribution, or access layer of the network?",
                "text": "",
                "options": [
                    "Determine ownership.",
                    "Determine the symptoms.",
                    "Narrow the scope.",
                    "Document the symptoms.",
                    "Gather information."
                ],
                "explanation": "In the 'narrow the scope' step, the engineer determines whether the problem is at the core, distribution, or access layer."
            },
            "fr": {
                "title": "96. Dans quelle étape de la collecte des symptômes l’ingénieur réseau détermine-t-il si le problème se situe dans la couche cœur, distribution ou accès du réseau ?",
                "text": "",
                "options": [
                    "Déterminer la responsabilité.",
                    "Déterminer les symptômes.",
                    "Réduire le périmètre.",
                    "Documenter les symptômes.",
                    "Collecter les informations."
                ],
                "explanation": "Dans l’étape de réduction du périmètre, l’ingénieur détermine si le problème se situe dans la couche cœur, distribution ou accès."
            }
        }
    },
    {
        "title": "97. Quel protocole envoie des annonces périodiques entre équipements Cisco connectés afin d’apprendre le nom de l’équipement, la version IOS, ainsi que le nombre et le type d’interfaces ?",
        "text": "",
        "images": [],
        "options": [
            "CDP",
            "SNMP",
            "NTP",
            "LLDP"
        ],
        "correct": [
            0
        ],
        "explanation": "CDP est un protocole Cisco propriétaire de couche 2 qui envoie des annonces périodiques aux voisins Cisco connectés. LLDP en est l’équivalent neutre vis-à-vis du constructeur.",
        "id": 99,
        "i18n": {
            "en": {
                "title": "97. What protocol sends periodic advertisements between connected Cisco devices in order to learn device name, IOS version, and the number and type of interfaces?",
                "text": "",
                "options": [
                    "CDP",
                    "SNMP",
                    "NTP",
                    "LLDP"
                ],
                "explanation": "CDP is a Cisco proprietary Layer 2 protocol that sends periodic advertisements to connected Cisco neighbors. LLDP is the vendor-neutral equivalent."
            },
            "fr": {
                "title": "97. Quel protocole envoie des annonces périodiques entre équipements Cisco connectés afin d’apprendre le nom de l’équipement, la version IOS, ainsi que le nombre et le type d’interfaces ?",
                "text": "",
                "options": [
                    "CDP",
                    "SNMP",
                    "NTP",
                    "LLDP"
                ],
                "explanation": "CDP est un protocole Cisco propriétaire de couche 2 qui envoie des annonces périodiques aux voisins Cisco connectés. LLDP en est l’équivalent neutre vis-à-vis du constructeur."
            }
        }
    },
    {
        "title": "98. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 192.168.0.0 255.255.252.0. Quel masque générique l’administrateur doit-il utiliser dans l’instruction network OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "0.0.0.127",
            "0.0.0.31",
            "0.0.3.255",
            "0.0.0.63"
        ],
        "correct": [
            2
        ],
        "explanation": "255.255.255.255 moins 255.255.252.0 donne 0.0.3.255.",
        "id": 100,
        "i18n": {
            "en": {
                "title": "98. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
                "text": "",
                "options": [
                    "0.0.0.127",
                    "0.0.0.31",
                    "0.0.3.255",
                    "0.0.0.63"
                ],
                "explanation": "255.255.255.255 minus 255.255.252.0 equals 0.0.3.255."
            },
            "fr": {
                "title": "98. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 192.168.0.0 255.255.252.0. Quel masque générique l’administrateur doit-il utiliser dans l’instruction network OSPF ?",
                "text": "",
                "options": [
                    "0.0.0.127",
                    "0.0.0.31",
                    "0.0.3.255",
                    "0.0.0.63"
                ],
                "explanation": "255.255.255.255 moins 255.255.252.0 donne 0.0.3.255."
            }
        }
    },
    {
        "title": "99. Reportez-vous à l’illustration. Un administrateur configure une ACL pour empêcher les équipements du sous-réseau 192.168.1.0 d’accéder au serveur 10.1.1.5. Où doit-il placer cette ACL pour utiliser les ressources réseau le plus efficacement possible ?",
        "text": "<pre><code>access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 \naccess-list 100 permit ip any any</pre></code>",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/2020-06-13_113133.jpg"
        ],
        "options": [
            "en entrée sur le routeur A Fa0/0",
            "en sortie sur le routeur B Fa0/0",
            "en sortie sur le routeur A Fa0/1",
            "en entrée sur le routeur B Fa0/1"
        ],
        "correct": [
            0
        ],
        "explanation": "Il s’agit d’une ACL étendue, qui doit être placée près de la source : en entrée sur Router A Fa0/0, afin de supprimer immédiatement le trafic indésirable.",
        "id": 101,
        "i18n": {
            "en": {
                "title": "99. Refer to the exhibit. An administrator configures an ACL to prevent devices on the 192.168.1.0 subnet from accessing the server at 10.1.1.5 (access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 / permit ip any any). Where should the administrator place this ACL for the most efficient use of network resources?",
                "text": "<pre><code>access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 \naccess-list 100 permit ip any any</pre></code>",
                "options": [
                    "inbound on router A Fa0/0",
                    "outbound on router B Fa0/0",
                    "outbound on router A Fa0/1",
                    "inbound on router B Fa0/1"
                ],
                "explanation": "This is an extended ACL and should be placed close to the source: inbound on Router A Fa0/0, discarding the unwanted traffic immediately."
            },
            "fr": {
                "title": "99. Reportez-vous à l’illustration. Un administrateur configure une ACL pour empêcher les équipements du sous-réseau 192.168.1.0 d’accéder au serveur 10.1.1.5. Où doit-il placer cette ACL pour utiliser les ressources réseau le plus efficacement possible ?",
                "text": "<pre><code>access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5 \naccess-list 100 permit ip any any</pre></code>",
                "options": [
                    "en entrée sur le routeur A Fa0/0",
                    "en sortie sur le routeur B Fa0/0",
                    "en sortie sur le routeur A Fa0/1",
                    "en entrée sur le routeur B Fa0/1"
                ],
                "explanation": "Il s’agit d’une ACL étendue, qui doit être placée près de la source : en entrée sur Router A Fa0/0, afin de supprimer immédiatement le trafic indésirable."
            }
        }
    },
    {
        "title": "100. Quel type de paquet OSPFv2 est utilisé pour transmettre les informations de changement d’état des liens OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "acquittement d’état de liens",
            "mise à jour d’état de liens",
            "hello",
            "description de base de données"
        ],
        "correct": [
            1
        ],
        "explanation": "Le paquet Link-State Update, ou LSU, annonce les nouvelles informations de routage et diffuse les changements de liens OSPF sous forme de LSA dans une zone.",
        "id": 102,
        "i18n": {
            "en": {
                "title": "100. Which type of OSPFv2 packet is used to forward OSPF link change information?",
                "text": "",
                "options": [
                    "link-state acknowledgment",
                    "link-state update",
                    "hello",
                    "database description"
                ],
                "explanation": "The Link-State Update (LSU) packet announces new routing information and forwards OSPF link changes, flooding LSAs throughout an area."
            },
            "fr": {
                "title": "100. Quel type de paquet OSPFv2 est utilisé pour transmettre les informations de changement d’état des liens OSPF ?",
                "text": "",
                "options": [
                    "acquittement d’état de liens",
                    "mise à jour d’état de liens",
                    "hello",
                    "description de base de données"
                ],
                "explanation": "Le paquet Link-State Update, ou LSU, annonce les nouvelles informations de routage et diffuse les changements de liens OSPF sous forme de LSA dans une zone."
            }
        }
    },
    {
        "title": "101. Quel protocole se synchronise avec une horloge maître privée ou avec un serveur public disponible sur Internet ?",
        "text": "",
        "images": [],
        "options": [
            "MPLS",
            "CBWFQ",
            "TFTP",
            "NTP"
        ],
        "correct": [
            3
        ],
        "explanation": "NTP synchronise les horloges logicielles des équipements avec une horloge maître privée ou un serveur NTP public sur Internet.",
        "id": 103,
        "i18n": {
            "en": {
                "title": "101. What protocol synchronizes with a private master clock or with a publicly available server on the internet?",
                "text": "",
                "options": [
                    "MPLS",
                    "CBWFQ",
                    "TFTP",
                    "NTP"
                ],
                "explanation": "NTP synchronizes device software clocks with a private master clock or a publicly available NTP server on the internet."
            },
            "fr": {
                "title": "101. Quel protocole se synchronise avec une horloge maître privée ou avec un serveur public disponible sur Internet ?",
                "text": "",
                "options": [
                    "MPLS",
                    "CBWFQ",
                    "TFTP",
                    "NTP"
                ],
                "explanation": "NTP synchronise les horloges logicielles des équipements avec une horloge maître privée ou un serveur NTP public sur Internet."
            }
        }
    },
    {
        "title": "102. Quel type de VPN permet le trafic multicast et broadcast sur un VPN site à site sécurisé ?",
        "text": "",
        "images": [],
        "options": [
            "VPN multipoint dynamique",
            "VPN SSL",
            "interface de tunnel virtuel IPsec",
            "GRE over IPsec"
        ],
        "correct": [
            3
        ],
        "explanation": "GRE prend en charge le trafic multicast et broadcast ; GRE over IPsec encapsule ces trames dans des paquets GRE qui sont ensuite chiffrés par IPsec.",
        "id": 104,
        "i18n": {
            "en": {
                "title": "102. Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?",
                "text": "",
                "options": [
                    "dynamic multipoint VPN",
                    "SSL VPN",
                    "IPsec virtual tunnel interface",
                    "GRE over IPsec"
                ],
                "explanation": "GRE supports multicast and broadcast traffic; GRE over IPsec encapsulates these frames into GRE packets that IPsec then encrypts."
            },
            "fr": {
                "title": "102. Quel type de VPN permet le trafic multicast et broadcast sur un VPN site à site sécurisé ?",
                "text": "",
                "options": [
                    "VPN multipoint dynamique",
                    "VPN SSL",
                    "interface de tunnel virtuel IPsec",
                    "GRE over IPsec"
                ],
                "explanation": "GRE prend en charge le trafic multicast et broadcast ; GRE over IPsec encapsule ces trames dans des paquets GRE qui sont ensuite chiffrés par IPsec."
            }
        }
    },
    {
        "title": "103. Un routeur OSPF possède trois réseaux directement connectés : 10.0.0.0/16, 10.1.0.0/16 et 10.2.0.0/16. Quelle commande network OSPF annoncerait uniquement le réseau 10.1.0.0 aux voisins ?",
        "text": "",
        "images": [],
        "options": [
            "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
            "router(config-router)# network 10.1.0.0 0.0.15.255 area 0",
            "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
            "router(config-router)# network 10.1.0.0 0.0.0.0 area 0"
        ],
        "correct": [
            0
        ],
        "explanation": "Le masque générique 0.0.255.255 fait correspondre exactement les 16 premiers bits, annonçant uniquement le réseau 10.1.0.0/16.",
        "id": 105,
        "i18n": {
            "en": {
                "title": "103. An OSPF router has three directly connected networks; 10.0.0.0/16, 10.1.0.0/16, and 10.2.0.0/16. Which OSPF network command would advertise only the 10.1.0.0 network to neighbors?",
                "text": "",
                "options": [
                    "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
                    "router(config-router)# network 10.1.0.0 0.0.15.255 area 0",
                    "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
                    "router(config-router)# network 10.1.0.0 0.0.0.0 area 0"
                ],
                "explanation": "The wildcard 0.0.255.255 matches the first 16 bits exactly, advertising only the 10.1.0.0/16 network."
            },
            "fr": {
                "title": "103. Un routeur OSPF possède trois réseaux directement connectés : 10.0.0.0/16, 10.1.0.0/16 et 10.2.0.0/16. Quelle commande network OSPF annoncerait uniquement le réseau 10.1.0.0 aux voisins ?",
                "text": "",
                "options": [
                    "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
                    "router(config-router)# network 10.1.0.0 0.0.15.255 area 0",
                    "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
                    "router(config-router)# network 10.1.0.0 0.0.0.0 area 0"
                ],
                "explanation": "Le masque générique 0.0.255.255 fait correspondre exactement les 16 premiers bits, annonçant uniquement le réseau 10.1.0.0/16."
            }
        }
    },
    {
        "title": "104. Reportez-vous à l’illustration. Quelle séquence de commandes doit être utilisée pour configurer OSPF sur le routeur A ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2021/02/i386046n1v2-1613220070.9736.gif"
        ],
        "options": [
            "router ospf 1<br>network 192.168.10.0 area 0",
            "router ospf 1<br>network 192.168.10.0",
            "router ospf 1<br>network 192.168.10.64 255.255.255.192<br>network 192.168.10.192 255.255.255.252",
            "router ospf 1<br>network 192.168.10.64 0.0.0.63 area 0<br>network 192.168.10.192 0.0.0.3 area 0"
        ],
        "correct": [
            3
        ],
        "explanation": "Les instructions network OSPF utilisent des masques génériques, 0.0.0.63 pour /26 et 0.0.0.3 pour /30, ainsi qu’un identifiant de zone, area 0.",
        "id": 106,
        "i18n": {
            "en": {
                "title": "104. Refer to the exhibit. Which sequence of commands should be used to configure router A for OSPF?",
                "text": "",
                "options": [
                    "router ospf 1<br>network 192.168.10.0 area 0",
                    "router ospf 1<br>network 192.168.10.0",
                    "router ospf 1<br>network 192.168.10.64 255.255.255.192<br>network 192.168.10.192 255.255.255.252",
                    "router ospf 1<br>network 192.168.10.64 0.0.0.63 area 0<br>network 192.168.10.192 0.0.0.3 area 0"
                ],
                "explanation": "OSPF network statements use wildcard masks (0.0.0.63 for /26, 0.0.0.3 for /30) and an area ID (area 0)."
            },
            "fr": {
                "title": "104. Reportez-vous à l’illustration. Quelle séquence de commandes doit être utilisée pour configurer OSPF sur le routeur A ?",
                "text": "",
                "options": [
                    "router ospf 1<br>network 192.168.10.0 area 0",
                    "router ospf 1<br>network 192.168.10.0",
                    "router ospf 1<br>network 192.168.10.64 255.255.255.192<br>network 192.168.10.192 255.255.255.252",
                    "router ospf 1<br>network 192.168.10.64 0.0.0.63 area 0<br>network 192.168.10.192 0.0.0.3 area 0"
                ],
                "explanation": "Les instructions network OSPF utilisent des masques génériques, 0.0.0.63 pour /26 et 0.0.0.3 pour /30, ainsi qu’un identifiant de zone, area 0."
            }
        }
    },
    {
        "title": "105. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 192.168.0.0 255.255.254.0. Quel masque générique doit-il utiliser dans l’instruction network OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "0.0.7.255",
            "0.0.1.255",
            "0.0.3.255",
            "0.0.15.255"
        ],
        "correct": [
            1
        ],
        "explanation": "255.255.255.255 moins 255.255.254.0 donne 0.0.1.255.",
        "id": 107,
        "i18n": {
            "en": {
                "title": "105. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.0.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
                "text": "",
                "options": [
                    "0.0.7.255",
                    "0.0.1.255",
                    "0.0.3.255",
                    "0.0.15.255"
                ],
                "explanation": "255.255.255.255 minus 255.255.254.0 equals 0.0.1.255."
            },
            "fr": {
                "title": "105. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 192.168.0.0 255.255.254.0. Quel masque générique doit-il utiliser dans l’instruction network OSPF ?",
                "text": "",
                "options": [
                    "0.0.7.255",
                    "0.0.1.255",
                    "0.0.3.255",
                    "0.0.15.255"
                ],
                "explanation": "255.255.255.255 moins 255.255.254.0 donne 0.0.1.255."
            }
        }
    },
    {
        "title": "106. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
        "text": "Cas 1",
        "images": [],
        "options": [
            "amélioration des pratiques métier",
            "fourniture d’un flux d’air constant",
            "prise en charge de la migration à chaud",
            "garantie de l’alimentation électrique"
        ],
        "correct": [
            2
        ],
        "explanation": "La migration à chaud permet de déplacer un serveur virtuel vers un autre serveur virtuel, éventuellement dans un autre emplacement.",
        "id": 108,
        "i18n": {
            "en": {
                "title": "106. How does virtualization help with disaster recovery within a data center?",
                "text": "Case 1",
                "options": [
                    "improvement of business practices",
                    "supply of consistent air flow",
                    "support of live migration",
                    "guarantee of power"
                ],
                "explanation": "Live migration allows moving a virtual server to another virtual server, possibly in a different location."
            },
            "fr": {
                "title": "106. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
                "text": "Cas 1",
                "options": [
                    "amélioration des pratiques métier",
                    "fourniture d’un flux d’air constant",
                    "prise en charge de la migration à chaud",
                    "garantie de l’alimentation électrique"
                ],
                "explanation": "La migration à chaud permet de déplacer un serveur virtuel vers un autre serveur virtuel, éventuellement dans un autre emplacement."
            }
        }
    },
    {
        "title": "106. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
        "text": "Cas 2",
        "images": [],
        "options": [
            "Moins d’énergie est consommée.",
            "Le provisionnement des serveurs est plus rapide.",
            "Le matériel du site de reprise n’a pas besoin d’être identique à l’équipement de production.",
            "L’alimentation électrique est toujours fournie."
        ],
        "correct": [
            2
        ],
        "explanation": "La virtualisation fournit une abstraction matérielle : le site de reprise n’a donc plus besoin d’un matériel identique à celui de production.",
        "id": 109,
        "i18n": {
            "en": {
                "title": "106. How does virtualization help with disaster recovery within a data center?",
                "text": "Case 2",
                "options": [
                    "Less energy is consumed.",
                    "Server provisioning is faster.",
                    "Hardware at the recovery site does not have to be identical to production equipment.",
                    "Power is always provided."
                ],
                "explanation": "Virtualization provides hardware abstraction, so the recovery site no longer needs hardware identical to production."
            },
            "fr": {
                "title": "106. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
                "text": "Cas 2",
                "options": [
                    "Moins d’énergie est consommée.",
                    "Le provisionnement des serveurs est plus rapide.",
                    "Le matériel du site de reprise n’a pas besoin d’être identique à l’équipement de production.",
                    "L’alimentation électrique est toujours fournie."
                ],
                "explanation": "La virtualisation fournit une abstraction matérielle : le site de reprise n’a donc plus besoin d’un matériel identique à celui de production."
            }
        }
    },
    {
        "title": "107. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
        "text": "Cas 1",
        "images": [],
        "options": [
            "Le matériel n’a pas besoin d’être identique.",
            "L’alimentation électrique est toujours fournie.",
            "Moins d’énergie est consommée.",
            "Le provisionnement des serveurs est plus rapide."
        ],
        "correct": [
            0
        ],
        "explanation": "La virtualisation apporte l’indépendance matérielle : le site de reprise n’a pas besoin d’utiliser exactement le même équipement que la production.",
        "id": 110,
        "i18n": {
            "en": {
                "title": "107. How does virtualization help with disaster recovery within a data center?",
                "text": "Case 1",
                "options": [
                    "Hardware does not have to be identical.",
                    "Power is always provided.",
                    "Less energy is consumed.",
                    "Server provisioning is faster."
                ],
                "explanation": "Virtualization provides hardware independence, so the disaster recovery site does not need the exact equipment used in production. (Both phrasings appear as the marked correct answer.)"
            },
            "fr": {
                "title": "107. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
                "text": "Cas 1",
                "options": [
                    "Le matériel n’a pas besoin d’être identique.",
                    "L’alimentation électrique est toujours fournie.",
                    "Moins d’énergie est consommée.",
                    "Le provisionnement des serveurs est plus rapide."
                ],
                "explanation": "La virtualisation apporte l’indépendance matérielle : le site de reprise n’a pas besoin d’utiliser exactement le même équipement que la production."
            }
        }
    },
    {
        "title": "107. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
        "text": "Cas 2",
        "images": [],
        "options": [
            "Le matériel du site de reprise n’a pas besoin d’être identique à l’équipement de production.",
            "L’alimentation électrique est toujours fournie.",
            "Moins d’énergie est consommée.",
            "Le provisionnement des serveurs est plus rapide."
        ],
        "correct": [
            0
        ],
        "explanation": "La virtualisation apporte l’indépendance matérielle : le site de reprise n’a pas besoin d’utiliser exactement le même équipement que la production.",
        "id": 216,
        "i18n": {
            "en": {
                "title": "107. How does virtualization help with disaster recovery within a data center?",
                "text": "Case 2",
                "options": [
                    "Hardware at the recovery site does not have to be identical to production equipment.",
                    "Power is always provided.",
                    "Less energy is consumed.",
                    "Server provisioning is faster."
                ],
                "explanation": "Virtualization provides hardware independence, so the disaster recovery site does not need the exact equipment used in production. (Both phrasings appear as the marked correct answer.)"
            },
            "fr": {
                "title": "107. Comment la virtualisation aide-t-elle à la reprise après sinistre dans un centre de données ?",
                "text": "Cas 2",
                "options": [
                    "Le matériel du site de reprise n’a pas besoin d’être identique à l’équipement de production.",
                    "L’alimentation électrique est toujours fournie.",
                    "Moins d’énergie est consommée.",
                    "Le provisionnement des serveurs est plus rapide."
                ],
                "explanation": "La virtualisation apporte l’indépendance matérielle : le site de reprise n’a pas besoin d’utiliser exactement le même équipement que la production."
            }
        }
    },
    {
        "title": "108. Reportez-vous à l’illustration. Quels équipements se trouvent dans le domaine de défaillance lorsque le commutateur S3 perd l’alimentation ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2015/05/i278658v1n1_222708-1.png"
        ],
        "options": [
            "S4 et PC_2",
            "PC_3 et AP_2",
            "AP_2 et AP_1",
            "PC_3 et PC_2",
            "S1 et S4"
        ],
        "correct": [
            1
        ],
        "explanation": "Un domaine de défaillance est la partie du réseau affectée lorsqu’un équipement critique tombe en panne. PC_3 et AP_2 sont affectés lorsque S3 perd l’alimentation.",
        "id": 111,
        "i18n": {
            "en": {
                "title": "108. Refer to the exhibit. Which devices exist in the failure domain when switch S3 loses power?",
                "text": "",
                "options": [
                    "S4 and PC_2",
                    "PC_3 and AP_2",
                    "AP_2 and AP_1",
                    "PC_3 and PC_2",
                    "S1 and S4"
                ],
                "explanation": "A failure domain is the area of the network impacted when a critical device fails. PC_3 and AP_2 are affected when S3 loses power."
            },
            "fr": {
                "title": "108. Reportez-vous à l’illustration. Quels équipements se trouvent dans le domaine de défaillance lorsque le commutateur S3 perd l’alimentation ?",
                "text": "",
                "options": [
                    "S4 et PC_2",
                    "PC_3 et AP_2",
                    "AP_2 et AP_1",
                    "PC_3 et PC_2",
                    "S1 et S4"
                ],
                "explanation": "Un domaine de défaillance est la partie du réseau affectée lorsqu’un équipement critique tombe en panne. PC_3 et AP_2 sont affectés lorsque S3 perd l’alimentation."
            }
        }
    },
    {
        "title": "109. Quel ensemble d’entrées de contrôle d’accès permettrait à tous les utilisateurs du réseau 192.168.10.0/24 d’accéder à un serveur web situé à 172.17.80.1, sans leur permettre d’utiliser Telnet ?",
        "text": "",
        "images": [],
        "options": [
            "access-list 103 deny tcp host 192.168.10.0 any eq 23<br>access-list 103 permit tcp host 192.168.10.1 eq 80",
            "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
            "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
            "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet"
        ],
        "correct": [
            1
        ],
        "explanation": "Une ACL étendue doit autoriser HTTP, port 80, vers le serveur précis et refuser Telnet, port 23, depuis le sous-réseau source.",
        "id": 112,
        "i18n": {
            "en": {
                "title": "109. Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
                "text": "",
                "options": [
                    "access-list 103 deny tcp host 192.168.10.0 any eq 23<br>access-list 103 permit tcp host 192.168.10.1 eq 80",
                    "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
                    "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
                    "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet"
                ],
                "explanation": "An extended ACL must permit HTTP (port 80) to the specific server and deny Telnet (port 23) from the source subnet."
            },
            "fr": {
                "title": "109. Quel ensemble d’entrées de contrôle d’accès permettrait à tous les utilisateurs du réseau 192.168.10.0/24 d’accéder à un serveur web situé à 172.17.80.1, sans leur permettre d’utiliser Telnet ?",
                "text": "",
                "options": [
                    "access-list 103 deny tcp host 192.168.10.0 any eq 23<br>access-list 103 permit tcp host 192.168.10.1 eq 80",
                    "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
                    "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
                    "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1<br>access-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet"
                ],
                "explanation": "Une ACL étendue doit autoriser HTTP, port 80, vers le serveur précis et refuser Telnet, port 23, depuis le sous-réseau source."
            }
        }
    },
    {
        "title": "110. Reportez-vous à l’illustration. Un administrateur réseau doit ajouter une ACE à l’ACL TRAFFIC-CONTROL pour refuser le trafic IP provenant du sous-réseau 172.23.16.0/20. Quelle ACE répond à cette exigence ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/110.jpg"
        ],
        "options": [
            "5 deny 172.23.16.0 0.0.15.255",
            "5 deny 172.23.16.0 0.0.255.255",
            "15 deny 172.23.16.0 0.0.15.255",
            "30 deny 172.23.16.0 0.0.15.255"
        ],
        "correct": [
            0
        ],
        "explanation": "Le masque générique d’un /20 est 0.0.15.255, et le numéro de séquence 5 place l’ACE au bon endroit dans l’évaluation de l’ACL.",
        "id": 113,
        "i18n": {
            "en": {
                "title": "110. Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
                "text": "",
                "options": [
                    "5 deny 172.23.16.0 0.0.15.255",
                    "5 deny 172.23.16.0 0.0.255.255",
                    "15 deny 172.23.16.0 0.0.15.255",
                    "30 deny 172.23.16.0 0.0.15.255"
                ],
                "explanation": "The /20 wildcard mask is 0.0.15.255, and sequence number 5 places the ACE in the correct position during ACL evaluation."
            },
            "fr": {
                "title": "110. Reportez-vous à l’illustration. Un administrateur réseau doit ajouter une ACE à l’ACL TRAFFIC-CONTROL pour refuser le trafic IP provenant du sous-réseau 172.23.16.0/20. Quelle ACE répond à cette exigence ?",
                "text": "",
                "options": [
                    "5 deny 172.23.16.0 0.0.15.255",
                    "5 deny 172.23.16.0 0.0.255.255",
                    "15 deny 172.23.16.0 0.0.15.255",
                    "30 deny 172.23.16.0 0.0.15.255"
                ],
                "explanation": "Le masque générique d’un /20 est 0.0.15.255, et le numéro de séquence 5 place l’ACE au bon endroit dans l’évaluation de l’ACL."
            }
        }
    },
    {
        "title": "111. Quelle étape du processus de routage à état de liens est décrite par un routeur qui construit une base de données d’état de liens à partir des LSA reçues ?",
        "text": "",
        "images": [],
        "options": [
            "exécuter l’algorithme SPF",
            "construire la table de topologie",
            "sélectionner l’ID de routeur",
            "déclarer un voisin inaccessible"
        ],
        "correct": [
            1
        ],
        "explanation": "La construction de la table de topologie, ou LSDB, utilise les LSA reçues des voisins pour représenter la topologie du réseau.",
        "id": 114,
        "i18n": {
            "en": {
                "title": "111. Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
                "text": "",
                "options": [
                    "executing the SPF algorithm",
                    "building the topology table",
                    "selecting the router ID",
                    "declaring a neighbor to be inaccessible"
                ],
                "explanation": "Building the topology table (LSDB) uses LSAs received from neighbors to represent the network topology."
            },
            "fr": {
                "title": "111. Quelle étape du processus de routage à état de liens est décrite par un routeur qui construit une base de données d’état de liens à partir des LSA reçues ?",
                "text": "",
                "options": [
                    "exécuter l’algorithme SPF",
                    "construire la table de topologie",
                    "sélectionner l’ID de routeur",
                    "déclarer un voisin inaccessible"
                ],
                "explanation": "La construction de la table de topologie, ou LSDB, utilise les LSA reçues des voisins pour représenter la topologie du réseau."
            }
        }
    },
    {
        "title": "112. Quel protocole utilise des agents, présents sur les équipements gérés, pour collecter et stocker des informations sur l’équipement et son fonctionnement ?",
        "text": "",
        "images": [],
        "options": [
            "SYSLOG",
            "TFTP",
            "CBWFQ",
            "SNMP"
        ],
        "correct": [
            3
        ],
        "explanation": "SNMP utilise des agents sur les équipements gérés pour collecter et stocker les informations dans la MIB.",
        "id": 115,
        "i18n": {
            "en": {
                "title": "112. What protocol uses agents, that reside on managed devices, to collect and store information about the device and its operation?",
                "text": "",
                "options": [
                    "SYSLOG",
                    "TFTP",
                    "CBWFQ",
                    "SNMP"
                ],
                "explanation": "SNMP uses agents on managed devices to collect and store device information in the MIB."
            },
            "fr": {
                "title": "112. Quel protocole utilise des agents, présents sur les équipements gérés, pour collecter et stocker des informations sur l’équipement et son fonctionnement ?",
                "text": "",
                "options": [
                    "SYSLOG",
                    "TFTP",
                    "CBWFQ",
                    "SNMP"
                ],
                "explanation": "SNMP utilise des agents sur les équipements gérés pour collecter et stocker les informations dans la MIB."
            }
        }
    },
    {
        "title": "113. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 10.27.27.0 255.255.255.0. Quel masque générique doit-il utiliser dans l’instruction network OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "0.0.0.63",
            "0.0.0.255",
            "0.0.0.31",
            "0.0.0.15"
        ],
        "correct": [
            1
        ],
        "explanation": "255.255.255.255 moins 255.255.255.0 donne 0.0.0.255.",
        "id": 116,
        "i18n": {
            "en": {
                "title": "113. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 10.27.27.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
                "text": "",
                "options": [
                    "0.0.0.63",
                    "0.0.0.255",
                    "0.0.0.31",
                    "0.0.0.15"
                ],
                "explanation": "255.255.255.255 minus 255.255.255.0 equals 0.0.0.255."
            },
            "fr": {
                "title": "113. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 10.27.27.0 255.255.255.0. Quel masque générique doit-il utiliser dans l’instruction network OSPF ?",
                "text": "",
                "options": [
                    "0.0.0.63",
                    "0.0.0.255",
                    "0.0.0.31",
                    "0.0.0.15"
                ],
                "explanation": "255.255.255.255 moins 255.255.255.0 donne 0.0.0.255."
            }
        }
    },
    {
        "title": "114. Quand un routeur avec OSPF activé passe-t-il de l’état Down à l’état Init ?",
        "text": "",
        "images": [],
        "options": [
            "lorsqu’une interface OSPF devient active",
            "dès que le routeur démarre",
            "lorsque le routeur reçoit un paquet hello d’un routeur voisin",
            "dès que le processus d’élection DR/BDR est terminé"
        ],
        "correct": [
            0
        ],
        "explanation": "Lorsqu’une interface OSPF devient active, elle passe de Down à Init et commence à envoyer des paquets Hello.",
        "id": 117,
        "i18n": {
            "en": {
                "title": "114. When will an OSPF-enabled router transition from the Down state to the Init state?",
                "text": "",
                "options": [
                    "when an OSPF-enabled interface becomes active",
                    "as soon as the router starts",
                    "when the router receives a hello packet from a neighbor router",
                    "as soon as the DR/BDR election process is complete"
                ],
                "explanation": "When an OSPF-enabled interface becomes active, it transitions from Down to Init and starts sending Hello packets."
            },
            "fr": {
                "title": "114. Quand un routeur avec OSPF activé passe-t-il de l’état Down à l’état Init ?",
                "text": "",
                "options": [
                    "lorsqu’une interface OSPF devient active",
                    "dès que le routeur démarre",
                    "lorsque le routeur reçoit un paquet hello d’un routeur voisin",
                    "dès que le processus d’élection DR/BDR est terminé"
                ],
                "explanation": "Lorsqu’une interface OSPF devient active, elle passe de Down à Init et commence à envoyer des paquets Hello."
            }
        }
    },
    {
        "title": "115. Quel type de trafic est décrit comme ayant un volume élevé de données par paquet ?",
        "text": "",
        "images": [],
        "options": [
            "données",
            "vidéo",
            "voix"
        ],
        "correct": [
            1
        ],
        "explanation": "La vidéo transporte plus de données par paquet que la voix, avec des tailles de paquets plus grandes et plus variables.",
        "id": 118,
        "i18n": {
            "en": {
                "title": "115. What type of traffic is described as having a high volume of data per packet?",
                "text": "",
                "options": [
                    "data",
                    "video",
                    "voice"
                ],
                "explanation": "Video has a higher volume of data per packet than voice, with larger and more variable packet sizes."
            },
            "fr": {
                "title": "115. Quel type de trafic est décrit comme ayant un volume élevé de données par paquet ?",
                "text": "",
                "options": [
                    "données",
                    "vidéo",
                    "voix"
                ],
                "explanation": "La vidéo transporte plus de données par paquet que la voix, avec des tailles de paquets plus grandes et plus variables."
            }
        }
    },
    {
        "title": "116. Quel protocole est un protocole de couche 2 neutre vis-à-vis du constructeur, qui annonce l’identité et les capacités de l’équipement hôte aux autres équipements réseau connectés ?",
        "text": "",
        "images": [],
        "options": [
            "LLDP",
            "NTP",
            "TFTP",
            "SNMP"
        ],
        "correct": [
            0
        ],
        "explanation": "LLDP est un protocole de découverte de voisins de couche 2, neutre vis-à-vis du constructeur, qui annonce l’identité et les capacités d’un équipement.",
        "id": 119,
        "i18n": {
            "en": {
                "title": "116. What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
                "text": "",
                "options": [
                    "LLDP",
                    "NTP",
                    "TFTP",
                    "SNMP"
                ],
                "explanation": "LLDP is a vendor-neutral Layer 2 neighbor discovery protocol that advertises a device's identity and capabilities."
            },
            "fr": {
                "title": "116. Quel protocole est un protocole de couche 2 neutre vis-à-vis du constructeur, qui annonce l’identité et les capacités de l’équipement hôte aux autres équipements réseau connectés ?",
                "text": "",
                "options": [
                    "LLDP",
                    "NTP",
                    "TFTP",
                    "SNMP"
                ],
                "explanation": "LLDP est un protocole de découverte de voisins de couche 2, neutre vis-à-vis du constructeur, qui annonce l’identité et les capacités d’un équipement."
            }
        }
    },
    {
        "title": "117. Quelle étape du processus de routage à état de liens est décrite par un routeur qui exécute un algorithme pour déterminer le meilleur chemin vers chaque destination ?",
        "text": "",
        "images": [],
        "options": [
            "construire la table de topologie",
            "sélectionner l’ID de routeur",
            "déclarer un voisin inaccessible",
            "exécuter l’algorithme SPF"
        ],
        "correct": [
            3
        ],
        "explanation": "L’exécution de l’algorithme SPF, ou Dijkstra, sur la LSDB crée l’arbre SPF et détermine le meilleur chemin vers chaque destination.",
        "id": 120,
        "i18n": {
            "en": {
                "title": "117. Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
                "text": "",
                "options": [
                    "building the topology table",
                    "selecting the router ID",
                    "declaring a neighbor to be inaccessible",
                    "executing the SPF algorithm"
                ],
                "explanation": "Executing the SPF (Dijkstra) algorithm against the LSDB creates the SPF tree, determining the best path to every destination."
            },
            "fr": {
                "title": "117. Quelle étape du processus de routage à état de liens est décrite par un routeur qui exécute un algorithme pour déterminer le meilleur chemin vers chaque destination ?",
                "text": "",
                "options": [
                    "construire la table de topologie",
                    "sélectionner l’ID de routeur",
                    "déclarer un voisin inaccessible",
                    "exécuter l’algorithme SPF"
                ],
                "explanation": "L’exécution de l’algorithme SPF, ou Dijkstra, sur la LSDB crée l’arbre SPF et détermine le meilleur chemin vers chaque destination."
            }
        }
    },
    {
        "title": "118. Reportez-vous à l’illustration. Quelle conclusion peut-on tirer de ce réseau OSPF multi-accès ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2017/07/i247459v1n1_Item-247459-1.png"
        ],
        "options": [
            "Si le DR cesse de produire des paquets Hello, un BDR sera élu, puis il se promouvra pour assumer le rôle de DR.",
            "Avec l’élection du DR, le nombre d’adjacences est réduit de 6 à 3.",
            "Lorsqu’un DR est élu, tous les autres routeurs non-DR deviennent DROTHER.",
            "Tous les routeurs DROTHER enverront des LSA au DR et au BDR vers le multicast 224.0.0.5."
        ],
        "correct": [
            1
        ],
        "explanation": "Sans élection de DR, le nombre d’adjacences serait n(n-1)/2 = 6 ; avec l’élection, il est réduit à 3. Les DROTHER utilisent 224.0.0.6.",
        "id": 121,
        "i18n": {
            "en": {
                "title": "118. Refer to the exhibit. Which conclusion can be drawn from this OSPF multiaccess network?",
                "text": "",
                "options": [
                    "If the DR stops producing Hello packets, a BDR will be elected, and then it promotes itself to assume the role of DR.",
                    "With an election of the DR, the number of adjacencies is reduced from 6 to 3.",
                    "When a DR is elected all other non-DR routers become DROTHER.",
                    "All DROTHER routers will send LSAs to the DR and BDR to multicast 224.0.0.5."
                ],
                "explanation": "Without a DR election the required adjacencies would be n(n-1)/2 = 6; with the election this is reduced to 3. DROTHERs use 224.0.0.6."
            },
            "fr": {
                "title": "118. Reportez-vous à l’illustration. Quelle conclusion peut-on tirer de ce réseau OSPF multi-accès ?",
                "text": "",
                "options": [
                    "Si le DR cesse de produire des paquets Hello, un BDR sera élu, puis il se promouvra pour assumer le rôle de DR.",
                    "Avec l’élection du DR, le nombre d’adjacences est réduit de 6 à 3.",
                    "Lorsqu’un DR est élu, tous les autres routeurs non-DR deviennent DROTHER.",
                    "Tous les routeurs DROTHER enverront des LSA au DR et au BDR vers le multicast 224.0.0.5."
                ],
                "explanation": "Sans élection de DR, le nombre d’adjacences serait n(n-1)/2 = 6 ; avec l’élection, il est réduit à 3. Les DROTHER utilisent 224.0.0.6."
            }
        }
    },
    {
        "title": "119. Reportez-vous à l’illustration. L’administrateur réseau possède l’adresse IP 192.168.11.10 et doit accéder à R1 pour l’administrer. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i350680v1n1_C3M4-Diagram.jpg"
        ],
        "options": [
            "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
            "ACL standard en entrée sur les lignes vty de R1",
            "ACL étendues en entrée sur R1 G0/0 et G0/1",
            "ACL étendue en sortie sur R2 S0/0/1"
        ],
        "correct": [
            1
        ],
        "explanation": "Administrer R1 revient à restreindre l’accès aux lignes vty, ce qui se fait avec une ACL standard appliquée aux lignes vty.",
        "id": 122,
        "i18n": {
            "en": {
                "title": "119. Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "extended ACL outbound on R2 WAN interface towards the internet",
                    "standard ACL inbound on R1 vty lines",
                    "extended ACLs inbound on R1 G0/0 and G0/1",
                    "extended ACL outbound on R2 S0/0/1"
                ],
                "explanation": "Managing R1 means restricting access on the vty lines, which is done with a standard ACL applied to the vty lines."
            },
            "fr": {
                "title": "119. Reportez-vous à l’illustration. L’administrateur réseau possède l’adresse IP 192.168.11.10 et doit accéder à R1 pour l’administrer. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
                    "ACL standard en entrée sur les lignes vty de R1",
                    "ACL étendues en entrée sur R1 G0/0 et G0/1",
                    "ACL étendue en sortie sur R2 S0/0/1"
                ],
                "explanation": "Administrer R1 revient à restreindre l’accès aux lignes vty, ce qui se fait avec une ACL standard appliquée aux lignes vty."
            }
        }
    },
    {
        "title": "120. Quel type de VPN se connecte à l’aide de la fonctionnalité Transport Layer Security (TLS) ?",
        "text": "",
        "images": [],
        "options": [
            "VPN SSL",
            "interface de tunnel virtuel IPsec",
            "GRE over IPsec",
            "VPN multipoint dynamique"
        ],
        "correct": [
            0
        ],
        "explanation": "Un VPN SSL se connecte à l’aide de TLS, version plus récente de SSL, souvent notée SSL/TLS.",
        "id": 123,
        "i18n": {
            "en": {
                "title": "120. Which type of VPN connects using the Transport Layer Security (TLS) feature?",
                "text": "",
                "options": [
                    "SSL VPN",
                    "IPsec virtual tunnel interface",
                    "GRE over IPsec",
                    "dynamic multipoint VPN"
                ],
                "explanation": "An SSL VPN connects using TLS, the newer version of SSL (often written SSL/TLS)."
            },
            "fr": {
                "title": "120. Quel type de VPN se connecte à l’aide de la fonctionnalité Transport Layer Security (TLS) ?",
                "text": "",
                "options": [
                    "VPN SSL",
                    "interface de tunnel virtuel IPsec",
                    "GRE over IPsec",
                    "VPN multipoint dynamique"
                ],
                "explanation": "Un VPN SSL se connecte à l’aide de TLS, version plus récente de SSL, souvent notée SSL/TLS."
            }
        }
    },
    {
        "title": "121. Quel groupe d’API est utilisé par un contrôleur SDN pour communiquer avec diverses applications ?",
        "text": "",
        "images": [],
        "options": [
            "API eastbound",
            "API westbound",
            "API northbound",
            "API southbound"
        ],
        "correct": [
            2
        ],
        "explanation": "Les API northbound communiquent avec les applications en amont ; les API southbound communiquent avec les éléments réseau en aval.",
        "id": 124,
        "i18n": {
            "en": {
                "title": "121. Which group of APIs are used by an SDN controller to communicate with various applications?",
                "text": "",
                "options": [
                    "eastbound APIs",
                    "westbound APIs",
                    "northbound APIs",
                    "southbound APIs"
                ],
                "explanation": "Northbound APIs communicate with upstream applications; southbound APIs communicate with downstream network elements."
            },
            "fr": {
                "title": "121. Quel groupe d’API est utilisé par un contrôleur SDN pour communiquer avec diverses applications ?",
                "text": "",
                "options": [
                    "API eastbound",
                    "API westbound",
                    "API northbound",
                    "API southbound"
                ],
                "explanation": "Les API northbound communiquent avec les applications en amont ; les API southbound communiquent avec les éléments réseau en aval."
            }
        }
    },
    {
        "title": "122. Une entreprise a consolidé plusieurs serveurs et cherche un programme ou firmware permettant de créer et contrôler des machines virtuelles ayant accès à tout le matériel des serveurs consolidés. Quel service ou technologie répond à ce besoin ?",
        "text": "",
        "images": [],
        "options": [
            "Cisco ACI",
            "réseau défini par logiciel",
            "hyperviseur de type 1",
            "APIC-EM"
        ],
        "correct": [
            2
        ],
        "explanation": "Un hyperviseur de type 1, ou bare metal, s’installe directement sur le matériel et donne aux VM accès aux ressources matérielles, ce qui convient à la consolidation de serveurs.",
        "id": 125,
        "i18n": {
            "en": {
                "title": "122. A company has consolidated a number of servers and it is looking for a program or firmware to create and control virtual machines which have access to all the hardware of the consolidated servers. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "Cisco ACI",
                    "software defined networking",
                    "Type-1 hypervisor",
                    "APIC-EM"
                ],
                "explanation": "A Type-1 (bare metal) hypervisor installs directly on hardware, giving VMs direct access to all hardware resources—ideal for server consolidation."
            },
            "fr": {
                "title": "122. Une entreprise a consolidé plusieurs serveurs et cherche un programme ou firmware permettant de créer et contrôler des machines virtuelles ayant accès à tout le matériel des serveurs consolidés. Quel service ou technologie répond à ce besoin ?",
                "text": "",
                "options": [
                    "Cisco ACI",
                    "réseau défini par logiciel",
                    "hyperviseur de type 1",
                    "APIC-EM"
                ],
                "explanation": "Un hyperviseur de type 1, ou bare metal, s’installe directement sur le matériel et donne aux VM accès aux ressources matérielles, ce qui convient à la consolidation de serveurs."
            }
        }
    },
    {
        "title": "123. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour identifier les adresses locales internes à traduire ?",
        "text": "",
        "images": [],
        "options": [
            "ip nat inside source list 24 interface serial 0/1/0 overload",
            "ip nat inside source list 14 pool POOL-STAT overload",
            "access-list 10 permit 172.19.89.0 0.0.0.255",
            "ip nat inside source list ACCTNG pool POOL-STAT"
        ],
        "correct": [
            2
        ],
        "explanation": "Une ACL standard identifie, par une instruction permit, les adresses locales internes éligibles à la traduction.",
        "id": 126,
        "i18n": {
            "en": {
                "title": "123. What command would be used as part of configuring NAT or PAT to identify inside local addresses that are to be translated?",
                "text": "",
                "options": [
                    "ip nat inside source list 24 interface serial 0/1/0 overload",
                    "ip nat inside source list 14 pool POOL-STAT overload",
                    "access-list 10 permit 172.19.89.0 0.0.0.255",
                    "ip nat inside source list ACCTNG pool POOL-STAT"
                ],
                "explanation": "A standard ACL identifies (permits) the inside local addresses eligible for translation."
            },
            "fr": {
                "title": "123. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour identifier les adresses locales internes à traduire ?",
                "text": "",
                "options": [
                    "ip nat inside source list 24 interface serial 0/1/0 overload",
                    "ip nat inside source list 14 pool POOL-STAT overload",
                    "access-list 10 permit 172.19.89.0 0.0.0.255",
                    "ip nat inside source list ACCTNG pool POOL-STAT"
                ],
                "explanation": "Une ACL standard identifie, par une instruction permit, les adresses locales internes éligibles à la traduction."
            }
        }
    },
    {
        "title": "124. Anycompany a décidé de réduire son empreinte environnementale en diminuant les coûts énergétiques, en déménageant dans des locaux plus petits et en favorisant le télétravail. Quel service ou technologie soutient cette exigence ?",
        "text": "",
        "images": [],
        "options": [
            "services cloud",
            "centre de données",
            "APIC-EM",
            "Cisco ACI"
        ],
        "correct": [
            0
        ],
        "explanation": "Les services cloud réduisent les équipements informatiques sur site, les coûts d’énergie et la taille des locaux, tout en permettant l’accès partout et à tout moment pour le télétravail.",
        "id": 127,
        "i18n": {
            "en": {
                "title": "124. Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "Cloud services",
                    "Data center",
                    "APIC-EM",
                    "Cisco ACI"
                ],
                "explanation": "Cloud services reduce onsite IT equipment, energy costs, and facility size while enabling telecommuting via anywhere/anytime access."
            },
            "fr": {
                "title": "124. Anycompany a décidé de réduire son empreinte environnementale en diminuant les coûts énergétiques, en déménageant dans des locaux plus petits et en favorisant le télétravail. Quel service ou technologie soutient cette exigence ?",
                "text": "",
                "options": [
                    "services cloud",
                    "centre de données",
                    "APIC-EM",
                    "Cisco ACI"
                ],
                "explanation": "Les services cloud réduisent les équipements informatiques sur site, les coûts d’énergie et la taille des locaux, tout en permettant l’accès partout et à tout moment pour le télétravail."
            }
        }
    },
    {
        "title": "125. Reportez-vous à l’illustration. Un administrateur essaie de sauvegarder la configuration en cours sur une clé USB et saisit 'copy usbflash0:/R1-config running-config'. Après connexion de la clé USB à un PC, la configuration en cours n’a pas été correctement sauvegardée. Quel est le problème ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i208111v6n1_Question-8.png"
        ],
        "options": [
            "Le fichier existe déjà sur la clé USB et ne peut pas être écrasé.",
            "La clé n’a pas été correctement formatée avec le système de fichiers FAT16.",
            "Il n’y a plus d’espace libre sur la clé USB.",
            "La clé USB n’est pas reconnue par le routeur.",
            "La commande utilisée par l’administrateur était incorrecte."
        ],
        "correct": [
            4
        ],
        "explanation": "La commande a été inversée. Pour sauvegarder, il faut utiliser copy running-config usbflash0:/R1-config, avec la source puis la destination.",
        "id": 128,
        "i18n": {
            "en": {
                "title": "125. Refer to the exhibit. An administrator is trying to back up the running configuration to a USB drive and enters 'copy usbflash0:/R1-config running-config'. After connecting the USB drive to a PC, the running configuration was not properly backed up. What is the problem?",
                "text": "",
                "options": [
                    "The file already exists on the USB drive and cannot be overwritten.",
                    "The drive was not properly formatted with the FAT16 file system.",
                    "There is no space left on the USB drive.",
                    "The USB drive is not recognized by the router.",
                    "The command that the administrator used was incorrect."
                ],
                "explanation": "The command was reversed. To back up, the command should be 'copy running-config usbflash0:/R1-config' (source then destination)."
            },
            "fr": {
                "title": "125. Reportez-vous à l’illustration. Un administrateur essaie de sauvegarder la configuration en cours sur une clé USB et saisit 'copy usbflash0:/R1-config running-config'. Après connexion de la clé USB à un PC, la configuration en cours n’a pas été correctement sauvegardée. Quel est le problème ?",
                "text": "",
                "options": [
                    "Le fichier existe déjà sur la clé USB et ne peut pas être écrasé.",
                    "La clé n’a pas été correctement formatée avec le système de fichiers FAT16.",
                    "Il n’y a plus d’espace libre sur la clé USB.",
                    "La clé USB n’est pas reconnue par le routeur.",
                    "La commande utilisée par l’administrateur était incorrecte."
                ],
                "explanation": "La commande a été inversée. Pour sauvegarder, il faut utiliser copy running-config usbflash0:/R1-config, avec la source puis la destination."
            }
        }
    },
    {
        "title": "126. Quels sont trois types de VPN qui sont des exemples de VPN site à site gérés par l’entreprise ? (Choisissez trois réponses.)",
        "text": "",
        "images": [],
        "options": [
            "VPN MPLS de couche 3",
            "VPN IPsec",
            "Cisco Dynamic Multipoint VPN",
            "VPN GRE over IPsec",
            "VPN SSL sans client",
            "VPN IPsec basé sur client"
        ],
        "correct": [
            1,
            2,
            3
        ],
        "explanation": "Les VPN IPsec, GRE over IPsec et Cisco DMVPN sont des VPN site à site gérés par l’entreprise. MPLS est géré par le fournisseur ; SSL sans client et IPsec client sont des accès distants.",
        "id": 129,
        "i18n": {
            "en": {
                "title": "126. Which three types of VPNs are examples of enterprise-managed site-to-site VPNs? (Choose three.)",
                "text": "",
                "options": [
                    "Layer 3 MPLS VPN",
                    "IPsec VPN",
                    "Cisco Dynamic Multipoint VPN",
                    "GRE over IPsec VPN",
                    "clientless SSL VPN",
                    "client-based IPsec VPN"
                ],
                "explanation": "IPsec VPN, GRE over IPsec, and Cisco DMVPN are enterprise-managed site-to-site VPNs. MPLS is provider-managed; clientless SSL and client-based IPsec are remote access."
            },
            "fr": {
                "title": "126. Quels sont trois types de VPN qui sont des exemples de VPN site à site gérés par l’entreprise ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "VPN MPLS de couche 3",
                    "VPN IPsec",
                    "Cisco Dynamic Multipoint VPN",
                    "VPN GRE over IPsec",
                    "VPN SSL sans client",
                    "VPN IPsec basé sur client"
                ],
                "explanation": "Les VPN IPsec, GRE over IPsec et Cisco DMVPN sont des VPN site à site gérés par l’entreprise. MPLS est géré par le fournisseur ; SSL sans client et IPsec client sont des accès distants."
            }
        }
    },
    {
        "title": "127. Reportez-vous à l’illustration. Les employés du réseau 192.168.11.0/24 travaillent sur des informations extrêmement sensibles et ne sont pas autorisés à sortir de leur réseau. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i350782v1n1_C3M4-Diagram-1.jpg"
        ],
        "options": [
            "ACL standard en entrée sur les lignes vty de R1",
            "ACL étendue en entrée sur R1 G0/0",
            "ACL standard en entrée sur R1 G0/1",
            "ACL étendue en entrée sur R3 S0/0/1"
        ],
        "correct": [
            2
        ],
        "explanation": "Comme la politique bloque tout le trafic provenant du réseau source 192.168.11.0/24 qui tente de quitter ce réseau, une ACL standard suffit et peut être appliquée en entrée sur R1 G0/1 pour arrêter le trafic immédiatement.",
        "id": 130,
        "i18n": {
            "en": {
                "title": "127. Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "standard ACL inbound on R1 vty lines",
                    "extended ACL inbound on R1 G0/0",
                    "standard ACL inbound on R1 G0/1",
                    "extended ACL inbound on R3 S0/0/1"
                ],
                "explanation": "Because the policy blocks all traffic from the 192.168.11.0/24 source network from leaving that network, a standard ACL is sufficient and can be applied inbound on R1 G0/1 to stop the traffic immediately."
            },
            "fr": {
                "title": "127. Reportez-vous à l’illustration. Les employés du réseau 192.168.11.0/24 travaillent sur des informations extrêmement sensibles et ne sont pas autorisés à sortir de leur réseau. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL standard en entrée sur les lignes vty de R1",
                    "ACL étendue en entrée sur R1 G0/0",
                    "ACL standard en entrée sur R1 G0/1",
                    "ACL étendue en entrée sur R3 S0/0/1"
                ],
                "explanation": "Comme la politique bloque tout le trafic provenant du réseau source 192.168.11.0/24 qui tente de quitter ce réseau, une ACL standard suffit et peut être appliquée en entrée sur R1 G0/1 pour arrêter le trafic immédiatement."
            }
        }
    },
    {
        "title": "128. Dans un réseau OSPF, quelles sont deux affirmations qui décrivent la base de données d’état de liens (LSDB) ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Elle peut être consultée avec la commande show ip ospf database.",
            "Une table de voisins est créée à partir de la LSDB.",
            "Elle contient uniquement la liste des meilleures routes vers un réseau donné.",
            "Elle contient la liste de tous les routeurs voisins avec lesquels un routeur a établi une communication bidirectionnelle.",
            "Tous les routeurs d’une même zone possèdent une base de données d’état de liens identique."
        ],
        "correct": [
            0,
            4
        ],
        "explanation": "La LSDB est la table de topologie ; tous les routeurs d’une même zone possèdent une LSDB identique, consultable avec show ip ospf database.",
        "id": 131,
        "i18n": {
            "en": {
                "title": "128. In an OSPF network which two statements describe the link-state database (LSDB)? (Choose two.)",
                "text": "",
                "options": [
                    "It can be viewed by using the show ip ospf database command.",
                    "A neighbor table is created based on the LSDB.",
                    "It contains a list of only the best routes to a particular network.",
                    "It contains a list of all neighbor routers to which a router has established bidirectional communication.",
                    "All routers within an area have an identical link-state database."
                ],
                "explanation": "The LSDB is the topology table; all routers in an area have an identical LSDB, viewable with show ip ospf database."
            },
            "fr": {
                "title": "128. Dans un réseau OSPF, quelles sont deux affirmations qui décrivent la base de données d’état de liens (LSDB) ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Elle peut être consultée avec la commande show ip ospf database.",
                    "Une table de voisins est créée à partir de la LSDB.",
                    "Elle contient uniquement la liste des meilleures routes vers un réseau donné.",
                    "Elle contient la liste de tous les routeurs voisins avec lesquels un routeur a établi une communication bidirectionnelle.",
                    "Tous les routeurs d’une même zone possèdent une base de données d’état de liens identique."
                ],
                "explanation": "La LSDB est la table de topologie ; tous les routeurs d’une même zone possèdent une LSDB identique, consultable avec show ip ospf database."
            }
        }
    },
    {
        "title": "129. Dans un réseau OSPF, quelle structure OSPF est utilisée pour créer la table de voisins sur un routeur ?",
        "text": "",
        "images": [],
        "options": [
            "base de données d’adjacence",
            "base de données d’état de liens",
            "table de routage",
            "base de données de transfert"
        ],
        "correct": [
            0
        ],
        "explanation": "La base de données d’adjacence crée et maintient la table de voisins, visible avec show ip ospf neighbor.",
        "id": 132,
        "i18n": {
            "en": {
                "title": "129. In an OSPF network which OSPF structure is used to create the neighbor table on a router?",
                "text": "",
                "options": [
                    "adjacency database",
                    "link-state database",
                    "routing table",
                    "forwarding database"
                ],
                "explanation": "The adjacency database creates and maintains the neighbor table (viewable with show ip ospf neighbor)."
            },
            "fr": {
                "title": "129. Dans un réseau OSPF, quelle structure OSPF est utilisée pour créer la table de voisins sur un routeur ?",
                "text": "",
                "options": [
                    "base de données d’adjacence",
                    "base de données d’état de liens",
                    "table de routage",
                    "base de données de transfert"
                ],
                "explanation": "La base de données d’adjacence crée et maintient la table de voisins, visible avec show ip ospf neighbor."
            }
        }
    },
    {
        "title": "130. Quel protocole est utilisé dans un système composé de trois éléments : un gestionnaire, des agents et une base d’informations ?",
        "text": "",
        "images": [],
        "options": [
            "MPLS",
            "SYSLOG",
            "SNMP",
            "TFTP"
        ],
        "correct": [
            2
        ],
        "explanation": "SNMP comprend un gestionnaire SNMP, des agents SNMP et la Management Information Base, ou MIB.",
        "id": 133,
        "i18n": {
            "en": {
                "title": "130. What protocol is used in a system that consists of three elements--a manager, agents, and an information database?",
                "text": "",
                "options": [
                    "MPLS",
                    "SYSLOG",
                    "SNMP",
                    "TFTP"
                ],
                "explanation": "SNMP consists of an SNMP manager, SNMP agents, and the Management Information Base (MIB)."
            },
            "fr": {
                "title": "130. Quel protocole est utilisé dans un système composé de trois éléments : un gestionnaire, des agents et une base d’informations ?",
                "text": "",
                "options": [
                    "MPLS",
                    "SYSLOG",
                    "SNMP",
                    "TFTP"
                ],
                "explanation": "SNMP comprend un gestionnaire SNMP, des agents SNMP et la Management Information Base, ou MIB."
            }
        }
    },
    {
        "title": "131. Quel type de trafic est décrit comme peu tolérant à la perte ?",
        "text": "",
        "images": [],
        "options": [
            "données",
            "vidéo",
            "voix"
        ],
        "correct": [
            1
        ],
        "explanation": "Comparée à la voix, la vidéo est moins tolérante à la perte et transporte plus de données par paquet.",
        "id": 134,
        "i18n": {
            "en": {
                "title": "131. What type of traffic is described as not resilient to loss?",
                "text": "",
                "options": [
                    "data",
                    "video",
                    "voice"
                ],
                "explanation": "Compared to voice, video is less resilient to loss and has a higher volume of data per packet."
            },
            "fr": {
                "title": "131. Quel type de trafic est décrit comme peu tolérant à la perte ?",
                "text": "",
                "options": [
                    "données",
                    "vidéo",
                    "voix"
                ],
                "explanation": "Comparée à la voix, la vidéo est moins tolérante à la perte et transporte plus de données par paquet."
            }
        }
    },
    {
        "title": "132. Reportez-vous à l’illustration. Le routeur R1 est configuré avec du NAT statique. L’adressage est correct, mais il n’y a pas de connectivité entre le serveur web et les utilisateurs sur Internet. Quelle peut être la raison de cette absence de connectivité ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i212256v1n3_212256.png"
        ],
        "options": [
            "L’interface Fa0/0 devrait être configurée avec la commande ip nat outside.",
            "L’adresse globale interne est incorrecte.",
            "La configuration NAT du routeur contient une adresse locale interne incorrecte.",
            "La configuration NAT sur l’interface S0/0/1 est incorrecte."
        ],
        "correct": [
            2
        ],
        "explanation": "L’adresse locale interne du NAT statique pointe vers l’adresse IP Fa0/0 du routeur au lieu de l’adresse privée réelle du serveur web ; le NAT ne fonctionne donc pas pour le serveur.",
        "id": 135,
        "i18n": {
            "en": {
                "title": "132. Refer to the exhibit. Router R1 is configured with static NAT. Addressing is correctly configured, but there is no connectivity between the web server and users on the Internet. What is a possible reason for this lack of connectivity?",
                "text": "",
                "options": [
                    "Interface Fa0/0 should be configured with the command ip nat outside.",
                    "The inside global address is incorrect.",
                    "The router NAT configuration has an incorrect inside local address.",
                    "The NAT configuration on interface S0/0/1 is incorrect."
                ],
                "explanation": "The static NAT inside local address points to the router's Fa0/0 IP instead of the web server's actual private IP, so NAT does not work for the server."
            },
            "fr": {
                "title": "132. Reportez-vous à l’illustration. Le routeur R1 est configuré avec du NAT statique. L’adressage est correct, mais il n’y a pas de connectivité entre le serveur web et les utilisateurs sur Internet. Quelle peut être la raison de cette absence de connectivité ?",
                "text": "",
                "options": [
                    "L’interface Fa0/0 devrait être configurée avec la commande ip nat outside.",
                    "L’adresse globale interne est incorrecte.",
                    "La configuration NAT du routeur contient une adresse locale interne incorrecte.",
                    "La configuration NAT sur l’interface S0/0/1 est incorrecte."
                ],
                "explanation": "L’adresse locale interne du NAT statique pointe vers l’adresse IP Fa0/0 du routeur au lieu de l’adresse privée réelle du serveur web ; le NAT ne fonctionne donc pas pour le serveur."
            }
        }
    },
    {
        "title": "133. Quel type d’API serait utilisé pour permettre à des commerciaux autorisés d’une organisation d’accéder aux données commerciales internes depuis leurs appareils mobiles ?",
        "text": "",
        "images": [],
        "options": [
            "ouverte",
            "partenaire",
            "publique",
            "privée"
        ],
        "correct": [
            3
        ],
        "explanation": "Les API privées, ou internes, sont utilisées uniquement au sein d’une organisation pour accéder à des données et services internes.",
        "id": 136,
        "i18n": {
            "en": {
                "title": "133. Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?",
                "text": "",
                "options": [
                    "open",
                    "partner",
                    "public",
                    "private"
                ],
                "explanation": "Private (internal) APIs are used only within an organization for internal access to data and services."
            },
            "fr": {
                "title": "133. Quel type d’API serait utilisé pour permettre à des commerciaux autorisés d’une organisation d’accéder aux données commerciales internes depuis leurs appareils mobiles ?",
                "text": "",
                "options": [
                    "ouverte",
                    "partenaire",
                    "publique",
                    "privée"
                ],
                "explanation": "Les API privées, ou internes, sont utilisées uniquement au sein d’une organisation pour accéder à des données et services internes."
            }
        }
    },
    {
        "title": "134. Reportez-vous à l’illustration. Quel format de données est utilisé pour représenter les données des applications d’automatisation réseau ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i349060v2n1_347060.png"
        ],
        "options": [
            "XML",
            "HTML",
            "YAML",
            "JSON"
        ],
        "correct": [
            0
        ],
        "explanation": "XML encadre les données dans un ensemble de balises associées, par exemple <tag>data</tag>.",
        "id": 137,
        "i18n": {
            "en": {
                "title": "134. Refer to the exhibit. Which data format is used to represent the data for network automation applications?",
                "text": "",
                "options": [
                    "XML",
                    "HTML",
                    "YAML",
                    "JSON"
                ],
                "explanation": "XML encloses data within a related set of tags <tag>data</tag>."
            },
            "fr": {
                "title": "134. Reportez-vous à l’illustration. Quel format de données est utilisé pour représenter les données des applications d’automatisation réseau ?",
                "text": "",
                "options": [
                    "XML",
                    "HTML",
                    "YAML",
                    "JSON"
                ],
                "explanation": "XML encadre les données dans un ensemble de balises associées, par exemple <tag>data</tag>."
            }
        }
    },
    {
        "title": "135. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme adresse source 198.133.219.100, comme destination 198.133.219.170 et comme protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 101 permit udp 192.168.100.32 0.0.0.7 host 198.133.219.76 eq telnet</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            1
        ],
        "explanation": "Les adresses source et destination ne correspondent pas à l’ACE ; le paquet est donc rejeté par le refus implicite.",
        "id": 138,
        "i18n": {
            "en": {
                "title": "135. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 198.133.219.100, a destination address of 198.133.219.170, and a protocol of 23 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 101 permit udp 192.168.100.32 0.0.0.7 host 198.133.219.76 eq telnet</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "The source and destination addresses do not match the ACE, so the packet is dropped by the implicit deny."
            },
            "fr": {
                "title": "135. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme adresse source 198.133.219.100, comme destination 198.133.219.170 et comme protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 101 permit udp 192.168.100.32 0.0.0.7 host 198.133.219.76 eq telnet</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "Les adresses source et destination ne correspondent pas à l’ACE ; le paquet est donc rejeté par le refus implicite."
            }
        }
    },
    {
        "title": "136. Reportez-vous à l’illustration. Si aucun ID de routeur n’a été configuré manuellement, qu’utiliserait le routeur R1 comme ID de routeur OSPF ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i254795v1n1_254795.gif"
        ],
        "options": [
            "10.0.0.1",
            "10.1.0.1",
            "192.168.1.100",
            "209.165.201.1"
        ],
        "correct": [
            2
        ],
        "explanation": "Sans ID de routeur manuel, le routeur utilise l’adresse IPv4 la plus élevée de ses interfaces loopback, ici 192.168.1.100.",
        "id": 139,
        "i18n": {
            "en": {
                "title": "136. Refer to the exhibit. If no router ID was manually configured, what would router R1 use as its OSPF router ID?",
                "text": "",
                "options": [
                    "10.0.0.1",
                    "10.1.0.1",
                    "192.168.1.100",
                    "209.165.201.1"
                ],
                "explanation": "Without a manual router ID, the router uses the highest IPv4 address of any loopback interface (192.168.1.100)."
            },
            "fr": {
                "title": "136. Reportez-vous à l’illustration. Si aucun ID de routeur n’a été configuré manuellement, qu’utiliserait le routeur R1 comme ID de routeur OSPF ?",
                "text": "",
                "options": [
                    "10.0.0.1",
                    "10.1.0.1",
                    "192.168.1.100",
                    "209.165.201.1"
                ],
                "explanation": "Sans ID de routeur manuel, le routeur utilise l’adresse IPv4 la plus élevée de ses interfaces loopback, ici 192.168.1.100."
            }
        }
    },
    {
        "title": "137. Quel protocole est un protocole de couche 2 neutre vis-à-vis du constructeur, qui annonce l’identité et les capacités de l’équipement hôte aux autres équipements réseau connectés ?",
        "text": "",
        "images": [],
        "options": [
            "NTP",
            "LLDP",
            "SNMP",
            "MPLS"
        ],
        "correct": [
            1
        ],
        "explanation": "LLDP est un protocole de découverte de couche 2 neutre vis-à-vis du constructeur qui annonce l’identité et les capacités d’un équipement.",
        "id": 140,
        "i18n": {
            "en": {
                "title": "137. What protocol is a vendor-neutral Layer 2 protocol that advertises the identity and capabilities of the host device to other connected network devices?",
                "text": "",
                "options": [
                    "NTP",
                    "LLDP",
                    "SNMP",
                    "MPLS"
                ],
                "explanation": "LLDP is a vendor-neutral Layer 2 discovery protocol that advertises device identity and capabilities."
            },
            "fr": {
                "title": "137. Quel protocole est un protocole de couche 2 neutre vis-à-vis du constructeur, qui annonce l’identité et les capacités de l’équipement hôte aux autres équipements réseau connectés ?",
                "text": "",
                "options": [
                    "NTP",
                    "LLDP",
                    "SNMP",
                    "MPLS"
                ],
                "explanation": "LLDP est un protocole de découverte de couche 2 neutre vis-à-vis du constructeur qui annonce l’identité et les capacités d’un équipement."
            }
        }
    },
    {
        "title": "138. Quel type de VPN utilise une configuration hub-and-spoke pour établir une topologie full mesh ?",
        "text": "",
        "images": [],
        "options": [
            "VPN MPLS",
            "GRE over IPsec",
            "interface de tunnel virtuel IPsec",
            "VPN multipoint dynamique"
        ],
        "correct": [
            3
        ],
        "explanation": "DMVPN utilise une configuration hub-and-spoke pour établir dynamiquement une topologie qui devient full mesh.",
        "id": 141,
        "i18n": {
            "en": {
                "title": "138. Which type of VPN uses a hub-and-spoke configuration to establish a full mesh topology?",
                "text": "",
                "options": [
                    "MPLS VPN",
                    "GRE over IPsec",
                    "IPsec virtual tunnel interface",
                    "dynamic multipoint VPN"
                ],
                "explanation": "DMVPN uses a hub-and-spoke configuration to dynamically establish what becomes a full mesh topology."
            },
            "fr": {
                "title": "138. Quel type de VPN utilise une configuration hub-and-spoke pour établir une topologie full mesh ?",
                "text": "",
                "options": [
                    "VPN MPLS",
                    "GRE over IPsec",
                    "interface de tunnel virtuel IPsec",
                    "VPN multipoint dynamique"
                ],
                "explanation": "DMVPN utilise une configuration hub-and-spoke pour établir dynamiquement une topologie qui devient full mesh."
            }
        }
    },
    {
        "title": "139. Quelle est une caractéristique de l’API REST ?",
        "text": "",
        "images": [],
        "options": [
            "elle a évolué vers ce qui est devenu SOAP",
            "elle est utilisée pour échanger des informations structurées en XML via HTTP ou SMTP",
            "elle est considérée comme lente, complexe et rigide",
            "elle est l’API la plus utilisée pour les services web"
        ],
        "correct": [
            3
        ],
        "explanation": "REST représente plus de 80 % des types d’API utilisés pour les services web, ce qui en fait la plus largement utilisée.",
        "id": 142,
        "i18n": {
            "en": {
                "title": "139. What is a characteristic of the REST API?",
                "text": "",
                "options": [
                    "evolved into what became SOAP",
                    "used for exchanging XML structured information over HTTP or SMTP",
                    "considered slow, complex, and rigid",
                    "most widely used API for web services"
                ],
                "explanation": "REST accounts for over 80% of API types used for web services, making it the most widely used."
            },
            "fr": {
                "title": "139. Quelle est une caractéristique de l’API REST ?",
                "text": "",
                "options": [
                    "elle a évolué vers ce qui est devenu SOAP",
                    "elle est utilisée pour échanger des informations structurées en XML via HTTP ou SMTP",
                    "elle est considérée comme lente, complexe et rigide",
                    "elle est l’API la plus utilisée pour les services web"
                ],
                "explanation": "REST représente plus de 80 % des types d’API utilisés pour les services web, ce qui en fait la plus largement utilisée."
            }
        }
    },
    {
        "title": "141. Un étudiant en semestre d’été à l’étranger a pris des centaines de photos avec un smartphone et souhaite les sauvegarder en cas de perte. Quel service ou technologie répond à ce besoin ?",
        "text": "",
        "images": [],
        "options": [
            "Cisco ACI",
            "services cloud",
            "réseau défini par logiciel",
            "serveurs dédiés"
        ],
        "correct": [
            1
        ],
        "explanation": "Les services cloud fournissent un stockage à la demande accessible partout et à tout moment, idéal pour sauvegarder des données à l’étranger.",
        "id": 143,
        "i18n": {
            "en": {
                "title": "141. A student, doing a summer semester of study overseas, has taken hundreds of pictures on a smartphone and wants to back them up in case of loss. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "Cisco ACI",
                    "cloud services",
                    "software defined networking",
                    "dedicated servers"
                ],
                "explanation": "Cloud services provide on-demand storage accessible anywhere, anytime, ideal for backing up data while abroad."
            },
            "fr": {
                "title": "141. Un étudiant en semestre d’été à l’étranger a pris des centaines de photos avec un smartphone et souhaite les sauvegarder en cas de perte. Quel service ou technologie répond à ce besoin ?",
                "text": "",
                "options": [
                    "Cisco ACI",
                    "services cloud",
                    "réseau défini par logiciel",
                    "serveurs dédiés"
                ],
                "explanation": "Les services cloud fournissent un stockage à la demande accessible partout et à tout moment, idéal pour sauvegarder des données à l’étranger."
            }
        }
    },
    {
        "title": "142. Considérez la liste d’accès suivante qui autorise les transferts de fichiers de configuration de téléphones IP depuis un hôte particulier vers un serveur TFTP. Quelle méthode permettrait à l’administrateur réseau de modifier l’ACL pour inclure les transferts FTP depuis n’importe quelle adresse IP source ?",
        "text": "<pre><code>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000\nR1(config)# access-list 105 deny ip any any\nR1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out</pre></code>",
        "images": [],
        "options": [
            "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
            "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
            "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# no access-list 105<br>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
            "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any"
        ],
        "correct": [
            2
        ],
        "explanation": "Comme les nouvelles entrées seraient ajoutées après l’instruction deny existante, l’ACL doit être supprimée puis recréée avec les nouvelles entrées placées avant le refus final.",
        "id": 144,
        "i18n": {
            "en": {
                "title": "142. Consider the following access list that allows IP phone configuration file transfers from a particular host to a TFTP server. Which method would allow the network administrator to modify the ACL and include FTP transfers from any source IP address?",
                "text": "<pre><code>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000\nR1(config)# access-list 105 deny ip any any\nR1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out</pre></code>",
                "options": [
                    "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
                    "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
                    "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# no access-list 105<br>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
                    "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any"
                ],
                "explanation": "Because new entries append after the existing deny statement, the ACL must be removed and recreated with the new entries placed before the final deny."
            },
            "fr": {
                "title": "142. Considérez la liste d’accès suivante qui autorise les transferts de fichiers de configuration de téléphones IP depuis un hôte particulier vers un serveur TFTP. Quelle méthode permettrait à l’administrateur réseau de modifier l’ACL pour inclure les transferts FTP depuis n’importe quelle adresse IP source ?",
                "text": "<pre><code>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000\nR1(config)# access-list 105 deny ip any any\nR1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out</pre></code>",
                "options": [
                    "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
                    "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
                    "R1(config)# interface gi0/0<br>R1(config-if)# no ip access-group 105 out<br>R1(config)# no access-list 105<br>R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any<br>R1(config)# interface gi0/0<br>R1(config-if)# ip access-group 105 out",
                    "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20<br>R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21<br>R1(config)# access-list 105 deny ip any any"
                ],
                "explanation": "Comme les nouvelles entrées seraient ajoutées après l’instruction deny existante, l’ACL doit être supprimée puis recréée avec les nouvelles entrées placées avant le refus final."
            }
        }
    },
    {
        "title": "143. Quelles sont trois affirmations généralement considérées comme de bonnes pratiques pour le placement des ACL ? (Choisissez trois réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Filtrer le trafic indésirable avant qu’il n’emprunte une liaison à faible bande passante.",
            "Placer les ACL standard près de l’adresse IP de destination du trafic.",
            "Placer les ACL standard près de l’adresse IP source du trafic.",
            "Placer les ACL étendues près de l’adresse IP de destination du trafic.",
            "Placer les ACL étendues près de l’adresse IP source du trafic.",
            "Pour chaque ACL en entrée placée sur une interface, il doit y avoir une ACL correspondante en sortie."
        ],
        "correct": [
            0,
            1,
            4
        ],
        "explanation": "Les ACL étendues se placent près de la source ; les ACL standard près de la destination ; et filtrer le trafic indésirable avant une liaison à faible bande passante préserve cette bande passante.",
        "id": 145,
        "i18n": {
            "en": {
                "title": "143. Which three statements are generally considered to be best practices in the placement of ACLs? (Choose three.)",
                "text": "",
                "options": [
                    "Filter unwanted traffic before it travels onto a low-bandwidth link.",
                    "Place standard ACLs close to the destination IP address of the traffic.",
                    "Place standard ACLs close to the source IP address of the traffic.",
                    "Place extended ACLs close to the destination IP address of the traffic.",
                    "Place extended ACLs close to the source IP address of the traffic.",
                    "For every inbound ACL placed on an interface, there should be a matching outbound ACL."
                ],
                "explanation": "Extended ACLs go close to the source; standard ACLs go close to the destination; and filtering unwanted traffic before low-bandwidth links preserves bandwidth."
            },
            "fr": {
                "title": "143. Quelles sont trois affirmations généralement considérées comme de bonnes pratiques pour le placement des ACL ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "Filtrer le trafic indésirable avant qu’il n’emprunte une liaison à faible bande passante.",
                    "Placer les ACL standard près de l’adresse IP de destination du trafic.",
                    "Placer les ACL standard près de l’adresse IP source du trafic.",
                    "Placer les ACL étendues près de l’adresse IP de destination du trafic.",
                    "Placer les ACL étendues près de l’adresse IP source du trafic.",
                    "Pour chaque ACL en entrée placée sur une interface, il doit y avoir une ACL correspondante en sortie."
                ],
                "explanation": "Les ACL étendues se placent près de la source ; les ACL standard près de la destination ; et filtrer le trafic indésirable avant une liaison à faible bande passante préserve cette bande passante."
            }
        }
    },
    {
        "type": "matching",
        "title": "144. Associez le terme au composant correspondant du lien web http://www.buycarsfromus.com/2020models/ford/suv.html#Escape. Toutes les options ne sont pas utilisées.",
        "text": "",
        "pairs": [
            {
                "left": "protocole",
                "right": "http"
            },
            {
                "left": "Uniform Resource Name (URN)",
                "right": "www.buycarsfromus.com/2020models/ford/suv.html"
            },
            {
                "left": "Uniform Resource Locator (URL)",
                "right": "http://www.buycarsfromus.com/2020models/ford/suv.html"
            },
            {
                "left": "Uniform Resource Identifier (URI)",
                "right": "http://www.buycarsfromus.com/2020models/ford/suv.html#Escape"
            },
            {
                "left": "fragment",
                "right": "#Escape"
            }
        ],
        "distractors_left": [
            "informations de page"
        ],
        "explanation": "Le protocole est http, l’URN correspond à la partie nom, l’URL ajoute le protocole, l’URI est l’identifiant complet incluant le fragment, et le fragment est #Escape.",
        "id": 146,
        "i18n": {
            "en": {
                "title": "144. Match the term to the web link http://www.buycarsfromus.com/2020models/ford/suv.html#Escape component. (Not all options are used.)",
                "text": "",
                "pairs": [
                    {
                        "left": "protocol",
                        "right": "http"
                    },
                    {
                        "left": "Uniform Resource Name (URN)",
                        "right": "www.buycarsfromus.com/2020models/ford/suv.html"
                    },
                    {
                        "left": "Uniform Resource Locator (URL)",
                        "right": "http://www.buycarsfromus.com/2020models/ford/suv.html"
                    },
                    {
                        "left": "Uniform Resource Identifier (URI)",
                        "right": "http://www.buycarsfromus.com/2020models/ford/suv.html#Escape"
                    },
                    {
                        "left": "fragment",
                        "right": "#Escape"
                    }
                ],
                "distractors_left": [
                    "page information"
                ],
                "explanation": "The protocol is http, the URN is the name portion, the URL adds the protocol, the URI is the complete identifier including the fragment, and the fragment is #Escape."
            },
            "fr": {
                "title": "144. Associez le terme au composant correspondant du lien web http://www.buycarsfromus.com/2020models/ford/suv.html#Escape. Toutes les options ne sont pas utilisées.",
                "text": "",
                "pairs": [
                    {
                        "left": "protocole",
                        "right": "http"
                    },
                    {
                        "left": "Uniform Resource Name (URN)",
                        "right": "www.buycarsfromus.com/2020models/ford/suv.html"
                    },
                    {
                        "left": "Uniform Resource Locator (URL)",
                        "right": "http://www.buycarsfromus.com/2020models/ford/suv.html"
                    },
                    {
                        "left": "Uniform Resource Identifier (URI)",
                        "right": "http://www.buycarsfromus.com/2020models/ford/suv.html#Escape"
                    },
                    {
                        "left": "fragment",
                        "right": "#Escape"
                    }
                ],
                "distractors_left": [
                    "informations de page"
                ],
                "explanation": "Le protocole est http, l’URN correspond à la partie nom, l’URL ajoute le protocole, l’URI est l’identifiant complet incluant le fragment, et le fragment est #Escape."
            }
        }
    },
    {
        "title": "145. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour afficher toutes les traductions statiques configurées ?",
        "text": "",
        "images": [],
        "options": [
            "show ip nat translations",
            "show ip pat translations",
            "show ip cache",
            "show running-config"
        ],
        "correct": [
            0
        ],
        "explanation": "show ip nat translations affiche toutes les entrées actives de la table de traduction, y compris les traductions statiques configurées.",
        "id": 147,
        "i18n": {
            "en": {
                "title": "145. What command would be used as part of configuring NAT or PAT to display all static translations that have been configured?",
                "text": "",
                "options": [
                    "show ip nat translations",
                    "show ip pat translations",
                    "show ip cache",
                    "show running-config"
                ],
                "explanation": "show ip nat translations displays all active translation table entries, including all configured static translations."
            },
            "fr": {
                "title": "145. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour afficher toutes les traductions statiques configurées ?",
                "text": "",
                "options": [
                    "show ip nat translations",
                    "show ip pat translations",
                    "show ip cache",
                    "show running-config"
                ],
                "explanation": "show ip nat translations affiche toutes les entrées actives de la table de traduction, y compris les traductions statiques configurées."
            }
        }
    },
    {
        "title": "146. Un administrateur réseau a modifié un routeur OSPF pour définir le temporisateur hello à 20 secondes. Quelle est, par défaut, la nouvelle valeur de l’intervalle dead ?",
        "text": "",
        "images": [],
        "options": [
            "40 secondes",
            "60 secondes",
            "80 secondes",
            "100 secondes"
        ],
        "correct": [
            2
        ],
        "explanation": "L’intervalle dead par défaut vaut quatre fois l’intervalle hello : 20 × 4 = 80 secondes.",
        "id": 148,
        "i18n": {
            "en": {
                "title": "146. A network administrator modified an OSPF-enabled router to have a hello timer setting of 20 seconds. What is the new dead interval time setting by default?",
                "text": "",
                "options": [
                    "40 seconds",
                    "60 seconds",
                    "80 seconds",
                    "100 seconds"
                ],
                "explanation": "The default dead interval is four times the hello interval, so 20 x 4 = 80 seconds."
            },
            "fr": {
                "title": "146. Un administrateur réseau a modifié un routeur OSPF pour définir le temporisateur hello à 20 secondes. Quelle est, par défaut, la nouvelle valeur de l’intervalle dead ?",
                "text": "",
                "options": [
                    "40 secondes",
                    "60 secondes",
                    "80 secondes",
                    "100 secondes"
                ],
                "explanation": "L’intervalle dead par défaut vaut quatre fois l’intervalle hello : 20 × 4 = 80 secondes."
            }
        }
    },
    {
        "title": "147. Quel type de VPN est généralement préféré pour la prise en charge et la facilité de déploiement de l’accès distant ?",
        "text": "",
        "images": [],
        "options": [
            "VPN SSL",
            "GRE over IPsec",
            "VPN multipoint dynamique",
            "interface de tunnel virtuel IPsec"
        ],
        "correct": [
            0
        ],
        "explanation": "Le VPN SSL offre une faible complexité de connexion, souvent via un simple navigateur web, ce qui le rend préférable pour l’accès distant.",
        "id": 149,
        "i18n": {
            "en": {
                "title": "147. Which type of VPN is the preferred choice for support and ease of deployment for remote access?",
                "text": "",
                "options": [
                    "SSL VPN",
                    "GRE over IPsec",
                    "dynamic multipoint VPN",
                    "IPsec virtual tunnel interface"
                ],
                "explanation": "SSL VPN offers low connection complexity (often just a web browser), making it preferred for ease of deployment for remote access."
            },
            "fr": {
                "title": "147. Quel type de VPN est généralement préféré pour la prise en charge et la facilité de déploiement de l’accès distant ?",
                "text": "",
                "options": [
                    "VPN SSL",
                    "GRE over IPsec",
                    "VPN multipoint dynamique",
                    "interface de tunnel virtuel IPsec"
                ],
                "explanation": "Le VPN SSL offre une faible complexité de connexion, souvent via un simple navigateur web, ce qui le rend préférable pour l’accès distant."
            }
        }
    },
    {
        "title": "148. Quel type de trafic est décrit comme prévisible et régulier ?",
        "text": "",
        "images": [],
        "options": [
            "vidéo",
            "données",
            "voix"
        ],
        "correct": [
            2
        ],
        "explanation": "Le trafic voix est prévisible et régulier, avec des temps d’arrivée connus et des besoins de bande passante cohérents.",
        "id": 150,
        "i18n": {
            "en": {
                "title": "148. What type of traffic is described as predictable and smooth?",
                "text": "",
                "options": [
                    "video",
                    "data",
                    "voice"
                ],
                "explanation": "Voice traffic is predictable and smooth, with known arrival times and consistent bandwidth requirements."
            },
            "fr": {
                "title": "148. Quel type de trafic est décrit comme prévisible et régulier ?",
                "text": "",
                "options": [
                    "vidéo",
                    "données",
                    "voix"
                ],
                "explanation": "Le trafic voix est prévisible et régulier, avec des temps d’arrivée connus et des besoins de bande passante cohérents."
            }
        }
    },
    {
        "title": "149. Quel mécanisme de mise en file d’attente ne prévoit aucune priorisation ni mise en mémoire tampon spécifique, mais transmet simplement les paquets dans leur ordre d’arrivée ?",
        "text": "",
        "images": [],
        "options": [
            "FIFO",
            "LLQ",
            "CBWFQ",
            "WFQ"
        ],
        "correct": [
            0
        ],
        "explanation": "FIFO, first-in first-out, transmet les paquets dans l’ordre d’arrivée, sans notion de priorité ni de classes.",
        "id": 151,
        "i18n": {
            "en": {
                "title": "149. Which queuing mechanism has no provision for prioritizing or buffering but simply forwards packets in the order they arrive?",
                "text": "",
                "options": [
                    "FIFO",
                    "LLQ",
                    "CBWFQ",
                    "WFQ"
                ],
                "explanation": "FIFO (first-in, first-out) forwards packets in the order they arrive with no concept of priority or classes."
            },
            "fr": {
                "title": "149. Quel mécanisme de mise en file d’attente ne prévoit aucune priorisation ni mise en mémoire tampon spécifique, mais transmet simplement les paquets dans leur ordre d’arrivée ?",
                "text": "",
                "options": [
                    "FIFO",
                    "LLQ",
                    "CBWFQ",
                    "WFQ"
                ],
                "explanation": "FIFO, first-in first-out, transmet les paquets dans l’ordre d’arrivée, sans notion de priorité ni de classes."
            }
        }
    },
    {
        "title": "150. Reportez-vous à l’illustration. Un administrateur réseau a configuré OSPFv2 sur deux routeurs Cisco. Les routeurs ne parviennent pas à former une adjacence de voisinage. Que faut-il faire sur le routeur R2 pour résoudre le problème ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2017/03/p56.png"
        ],
        "options": [
            "Implement the command no passive-interface Serial0/1.",
            "Implement the command network 192.168.2.6 0.0.0.0 area 0 on router R2.",
            "Change the router-id of router R2 to 2.2.2.2.",
            "Implement the command network 192.168.3.1 0.0.0.0 area 0 on router R2."
        ],
        "correct": [
            0
        ],
        "explanation": "Serial0/1 sur R2 est configurée comme interface passive, ce qui supprime les paquets Hello. Supprimer la configuration passive-interface permet de former l’adjacence.",
        "id": 152,
        "i18n": {
            "en": {
                "title": "150. Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers. The routers are unable to form a neighbor adjacency. What should be done to fix the problem on router R2?",
                "text": "",
                "options": [
                    "Implement the command no passive-interface Serial0/1.",
                    "Implement the command network 192.168.2.6 0.0.0.0 area 0 on router R2.",
                    "Change the router-id of router R2 to 2.2.2.2.",
                    "Implement the command network 192.168.3.1 0.0.0.0 area 0 on router R2."
                ],
                "explanation": "Serial0/1 on R2 is configured as a passive interface, suppressing Hello packets. Removing the passive-interface configuration allows the adjacency to form."
            },
            "fr": {
                "title": "150. Reportez-vous à l’illustration. Un administrateur réseau a configuré OSPFv2 sur deux routeurs Cisco. Les routeurs ne parviennent pas à former une adjacence de voisinage. Que faut-il faire sur le routeur R2 pour résoudre le problème ?",
                "text": "",
                "options": [
                    "Implement the command no passive-interface Serial0/1.",
                    "Implement the command network 192.168.2.6 0.0.0.0 area 0 on router R2.",
                    "Change the router-id of router R2 to 2.2.2.2.",
                    "Implement the command network 192.168.3.1 0.0.0.0 area 0 on router R2."
                ],
                "explanation": "Serial0/1 sur R2 est configurée comme interface passive, ce qui supprime les paquets Hello. Supprimer la configuration passive-interface permet de former l’adjacence."
            }
        }
    },
    {
        "title": "151. Un administrateur réseau dépanne un problème OSPF impliquant une adjacence de voisinage. Que doit-il faire ?",
        "text": "",
        "images": [],
        "options": [
            "S’assurer que la priorité de routeur est unique sur chaque routeur.",
            "S’assurer que l’élection DR/BDR est terminée.",
            "S’assurer que l’ID de routeur est inclus dans le paquet hello.",
            "S’assurer que les temporisateurs hello et dead sont identiques sur tous les routeurs."
        ],
        "correct": [
            3
        ],
        "explanation": "Les temporisateurs hello et dead doivent être identiques sur les interfaces connectées pour que les routeurs forment une adjacence.",
        "id": 153,
        "i18n": {
            "en": {
                "title": "151. A network administrator is troubleshooting an OSPF problem that involves neighbor adjacency. What should the administrator do?",
                "text": "",
                "options": [
                    "Make sure that the router priority is unique on each router.",
                    "Make sure that the DR/BDR election is complete.",
                    "Make sure that the router ID is included in the hello packet.",
                    "Make sure that the hello and dead interval timers are the same on all routers."
                ],
                "explanation": "Hello and dead interval timers must be identical on connected interfaces for routers to form an adjacency."
            },
            "fr": {
                "title": "151. Un administrateur réseau dépanne un problème OSPF impliquant une adjacence de voisinage. Que doit-il faire ?",
                "text": "",
                "options": [
                    "S’assurer que la priorité de routeur est unique sur chaque routeur.",
                    "S’assurer que l’élection DR/BDR est terminée.",
                    "S’assurer que l’ID de routeur est inclus dans le paquet hello.",
                    "S’assurer que les temporisateurs hello et dead sont identiques sur tous les routeurs."
                ],
                "explanation": "Les temporisateurs hello et dead doivent être identiques sur les interfaces connectées pour que les routeurs forment une adjacence."
            }
        }
    },
    {
        "title": "152. Reportez-vous à l’illustration. Les privilèges Internet d’un employé ont été révoqués pour abus, mais il doit encore accéder aux ressources de l’entreprise. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i350685v1n1_C3M4-Diagram.jpg"
        ],
        "options": [
            "ACL standard en entrée sur l’interface WAN de R2 connectée à Internet",
            "ACL standard en sortie sur l’interface WAN de R2 vers Internet",
            "ACL standard en entrée sur R1 G0/0",
            "ACL standard en sortie sur R1 G0/0"
        ],
        "correct": [
            1
        ],
        "explanation": "Une ACL standard filtre sur l’adresse IP source et se place près de la destination, ici Internet ; elle est donc appliquée en sortie sur l’interface WAN de R2.",
        "id": 154,
        "i18n": {
            "en": {
                "title": "152. Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "standard ACL inbound on R2 WAN interface connecting to the internet",
                    "standard ACL outbound on R2 WAN interface towards the internet",
                    "standard ACL inbound on R1 G0/0",
                    "standard ACL outbound on R1 G0/0"
                ],
                "explanation": "A standard ACL filters on source IP and is placed close to the destination (the internet), so it is applied outbound on the R2 WAN interface."
            },
            "fr": {
                "title": "152. Reportez-vous à l’illustration. Les privilèges Internet d’un employé ont été révoqués pour abus, mais il doit encore accéder aux ressources de l’entreprise. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL standard en entrée sur l’interface WAN de R2 connectée à Internet",
                    "ACL standard en sortie sur l’interface WAN de R2 vers Internet",
                    "ACL standard en entrée sur R1 G0/0",
                    "ACL standard en sortie sur R1 G0/0"
                ],
                "explanation": "Une ACL standard filtre sur l’adresse IP source et se place près de la destination, ici Internet ; elle est donc appliquée en sortie sur l’interface WAN de R2."
            }
        }
    },
    {
        "title": "153. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 192.168.10.244, comme destination 172.17.200.56 et comme protocole 80 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 100 permit tcp 192.168.10.0 0.0.0.255 172.17.200.0 0.0.0.255 eq www</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            0
        ],
        "explanation": "La source, la destination et le protocole 80, www, correspondent tous à l’ACE ; le paquet est donc autorisé.",
        "id": 155,
        "i18n": {
            "en": {
                "title": "153. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.10.244, a destination address of 172.17.200.56, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 100 permit tcp 192.168.10.0 0.0.0.255 172.17.200.0 0.0.0.255 eq www</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "Source, destination, and protocol 80 (www) all match the ACE, so the packet is permitted."
            },
            "fr": {
                "title": "153. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 192.168.10.244, comme destination 172.17.200.56 et comme protocole 80 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 100 permit tcp 192.168.10.0 0.0.0.255 172.17.200.0 0.0.0.255 eq www</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "La source, la destination et le protocole 80, www, correspondent tous à l’ACE ; le paquet est donc autorisé."
            }
        }
    },
    {
        "title": "154. Une entreprise a engagé une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des applications comme Nmap, SuperScan et Angry IP Scanner ?",
        "text": "",
        "images": [],
        "options": [
            "pour détecter des outils installés dans les fichiers et répertoires qui donnent aux acteurs malveillants un accès distant et un contrôle sur un ordinateur ou réseau",
            "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
            "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware",
            "pour sonder les équipements réseau, serveurs et hôtes à la recherche de ports TCP ou UDP ouverts"
        ],
        "correct": [
            3
        ],
        "explanation": "Ce sont des outils de scan réseau utilisés pour rechercher des adresses IP actives et des ports TCP/UDP ouverts.",
        "id": 156,
        "i18n": {
            "en": {
                "title": "154. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use applications such as Nmap, SuperScan, and Angry IP Scanner?",
                "text": "",
                "options": [
                    "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
                    "to detect any evidence of a hack or malware in a computer or network",
                    "to reverse engineer binary files when writing exploits and when analyzing malware",
                    "to probe network devices, servers, and hosts for open TCP or UDP ports"
                ],
                "explanation": "These are network scanning tools used to probe devices for active IP addresses and open TCP/UDP ports."
            },
            "fr": {
                "title": "154. Une entreprise a engagé une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des applications comme Nmap, SuperScan et Angry IP Scanner ?",
                "text": "",
                "options": [
                    "pour détecter des outils installés dans les fichiers et répertoires qui donnent aux acteurs malveillants un accès distant et un contrôle sur un ordinateur ou réseau",
                    "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
                    "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware",
                    "pour sonder les équipements réseau, serveurs et hôtes à la recherche de ports TCP ou UDP ouverts"
                ],
                "explanation": "Ce sont des outils de scan réseau utilisés pour rechercher des adresses IP actives et des ports TCP/UDP ouverts."
            }
        }
    },
    {
        "title": "155. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour afficher les traductions PAT dynamiques créées par le trafic ?",
        "text": "",
        "images": [],
        "options": [
            "show ip pat translations",
            "show ip cache",
            "show running-config",
            "show ip nat translations"
        ],
        "correct": [
            3
        ],
        "explanation": "show ip nat translations affiche les traductions NAT statiques, NAT dynamiques et PAT dynamiques créées par le trafic.",
        "id": 157,
        "i18n": {
            "en": {
                "title": "155. What command would be used as part of configuring NAT or PAT to display any dynamic PAT translations that have been created by traffic?",
                "text": "",
                "options": [
                    "show ip pat translations",
                    "show ip cache",
                    "show running-config",
                    "show ip nat translations"
                ],
                "explanation": "show ip nat translations displays static, dynamic NAT, and dynamic PAT translations created by traffic."
            },
            "fr": {
                "title": "155. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour afficher les traductions PAT dynamiques créées par le trafic ?",
                "text": "",
                "options": [
                    "show ip pat translations",
                    "show ip cache",
                    "show running-config",
                    "show ip nat translations"
                ],
                "explanation": "show ip nat translations affiche les traductions NAT statiques, NAT dynamiques et PAT dynamiques créées par le trafic."
            }
        }
    },
    {
        "title": "156. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 172.16.91.0 255.255.255.192. Quel masque générique doit-il utiliser dans l’instruction network OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "0.0.31.255",
            "0.0.0.63",
            "0.0.15.255",
            "0.0.7.255"
        ],
        "correct": [
            1
        ],
        "explanation": "255.255.255.255 moins 255.255.255.192 donne 0.0.0.63.",
        "id": 158,
        "i18n": {
            "en": {
                "title": "156. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 172.16.91.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
                "text": "",
                "options": [
                    "0.0.31.255",
                    "0.0.0.63",
                    "0.0.15.255",
                    "0.0.7.255"
                ],
                "explanation": "255.255.255.255 minus 255.255.255.192 equals 0.0.0.63."
            },
            "fr": {
                "title": "156. Un administrateur configure OSPF monozone sur un routeur. L’un des réseaux à annoncer est 172.16.91.0 255.255.255.192. Quel masque générique doit-il utiliser dans l’instruction network OSPF ?",
                "text": "",
                "options": [
                    "0.0.31.255",
                    "0.0.0.63",
                    "0.0.15.255",
                    "0.0.7.255"
                ],
                "explanation": "255.255.255.255 moins 255.255.255.192 donne 0.0.0.63."
            }
        }
    },
    {
        "title": "157. Quel type de trafic est décrit comme exigeant une latence maximale de 400 millisecondes ?",
        "text": "",
        "images": [],
        "options": [
            "vidéo",
            "données",
            "voix"
        ],
        "correct": [
            0
        ],
        "explanation": "Le trafic vidéo exige une latence unidirectionnelle ne dépassant pas 400 ms. La voix exige généralement un maximum de 150 ms.",
        "id": 159,
        "i18n": {
            "en": {
                "title": "157. What type of traffic is described as requiring latency to be no more than 400 milliseconds (ms)?",
                "text": "",
                "options": [
                    "video",
                    "data",
                    "voice"
                ],
                "explanation": "Video traffic requires one-way latency of no more than 400 ms. Voice requires no more than 150 ms."
            },
            "fr": {
                "title": "157. Quel type de trafic est décrit comme exigeant une latence maximale de 400 millisecondes ?",
                "text": "",
                "options": [
                    "vidéo",
                    "données",
                    "voix"
                ],
                "explanation": "Le trafic vidéo exige une latence unidirectionnelle ne dépassant pas 400 ms. La voix exige généralement un maximum de 150 ms."
            }
        }
    },
    {
        "title": "158. Reportez-vous à l’illustration. Quelles deux configurations seraient utilisées pour créer et appliquer une liste d’accès standard sur R1 afin que seuls les équipements du réseau 10.0.70.0/25 puissent accéder au serveur de base de données interne ? (Choisissez deux réponses.)",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/06/ccna-5.0-s2-43.jpg"
        ],
        "options": [
            "R1(config)# interface GigabitEthernet0/0<br>R1(config-if)# ip access-group 5 out",
            "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
            "R1(config)# interface Serial0/0/0<br>R1(config-if)# ip access-group 5 in",
            "R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127",
            "R1(config)# access-list 5 permit any"
        ],
        "correct": [
            0,
            3
        ],
        "explanation": "Le masque générique du /25 est 0.0.0.127, et une ACL standard se place près de la destination : en sortie sur R1 GigabitEthernet0/0.",
        "id": 160,
        "i18n": {
            "en": {
                "title": "158. Refer to the exhibit. Which two configurations would be used to create and apply a standard access list on R1, so that only the 10.0.70.0/25 network devices are allowed to access the internal database server? (Choose two.)",
                "text": "",
                "options": [
                    "R1(config)# interface GigabitEthernet0/0<br>R1(config-if)# ip access-group 5 out",
                    "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
                    "R1(config)# interface Serial0/0/0<br>R1(config-if)# ip access-group 5 in",
                    "R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127",
                    "R1(config)# access-list 5 permit any"
                ],
                "explanation": "The /25 wildcard mask is 0.0.0.127, and a standard ACL is placed close to the destination: outbound on R1 GigabitEthernet0/0."
            },
            "fr": {
                "title": "158. Reportez-vous à l’illustration. Quelles deux configurations seraient utilisées pour créer et appliquer une liste d’accès standard sur R1 afin que seuls les équipements du réseau 10.0.70.0/25 puissent accéder au serveur de base de données interne ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "R1(config)# interface GigabitEthernet0/0<br>R1(config-if)# ip access-group 5 out",
                    "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
                    "R1(config)# interface Serial0/0/0<br>R1(config-if)# ip access-group 5 in",
                    "R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127",
                    "R1(config)# access-list 5 permit any"
                ],
                "explanation": "Le masque générique du /25 est 0.0.0.127, et une ACL standard se place près de la destination : en sortie sur R1 GigabitEthernet0/0."
            }
        }
    },
    {
        "title": "159. Un administrateur réseau écrit une ACL standard qui refusera tout trafic provenant du réseau 172.16.0.0/16, mais autorisera tout le reste. Quelles deux commandes doivent être utilisées ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
            "Router(config)# access-list 95 permit any",
            "Router(config)# access-list 95 host 172.16.0.0",
            "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
            "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
            "Router(config)# access-list 95 deny any"
        ],
        "correct": [
            1,
            3
        ],
        "explanation": "Il faut refuser le /16 avec le masque générique 0.0.255.255, puis autoriser any pour permettre tout autre trafic.",
        "id": 161,
        "i18n": {
            "en": {
                "title": "159. A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
                "text": "",
                "options": [
                    "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
                    "Router(config)# access-list 95 permit any",
                    "Router(config)# access-list 95 host 172.16.0.0",
                    "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
                    "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
                    "Router(config)# access-list 95 deny any"
                ],
                "explanation": "Deny the /16 with wildcard 0.0.255.255, then permit any to allow all other traffic."
            },
            "fr": {
                "title": "159. Un administrateur réseau écrit une ACL standard qui refusera tout trafic provenant du réseau 172.16.0.0/16, mais autorisera tout le reste. Quelles deux commandes doivent être utilisées ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
                    "Router(config)# access-list 95 permit any",
                    "Router(config)# access-list 95 host 172.16.0.0",
                    "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
                    "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
                    "Router(config)# access-list 95 deny any"
                ],
                "explanation": "Il faut refuser le /16 avec le masque générique 0.0.255.255, puis autoriser any pour permettre tout autre trafic."
            }
        }
    },
    {
        "title": "160. Reportez-vous à l’illustration. L’entreprise a décidé qu’aucun trafic initié par tout autre réseau existant ou futur ne peut être transmis vers le réseau Recherche et Développement, et qu’aucun trafic depuis R&D ne peut être transmis vers d’autres réseaux. L’administrateur estime que des ACL étendues conviennent mieux. D’après ces informations, que fera l’administrateur réseau ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/06/temp-1593110686.3832.png"
        ],
        "options": [
            "Une ACL sera placée sur l’interface R1 Gi0/0 et une ACL sur l’interface R2 Gi0/0.",
            "Seule une ACL numérotée fonctionnera dans cette situation.",
            "Une ACL sera placée sur l’interface R2 Gi0/0 et une ACL sur l’interface R2 S0/0/0.",
            "Deux ACL, une dans chaque direction, seront placées sur l’interface R2 Gi0/0."
        ],
        "correct": [
            3
        ],
        "explanation": "Une ACL en entrée sur R2 Gi0/0 filtre le trafic provenant de R&D, et une ACL en sortie sur la même interface bloque le trafic destiné à R&D. Une interface prend en charge une ACL en entrée et une en sortie.",
        "id": 162,
        "i18n": {
            "en": {
                "title": "160. Refer to the exhibit. The company has decided that no traffic initiating from any other existing or future network can be transmitted to the Research and Development network, and no traffic from R&D can be transmitted to any other networks. The administrator decided extended ACLs are better suited. Based on the information given, what will the network administrator do?",
                "text": "",
                "options": [
                    "One ACL will be placed on the R1 Gi0/0 interface and one ACL will be placed on the R2 Gi0/0 interface.",
                    "Only a numbered ACL will work for this situation.",
                    "One ACL will be placed on the R2 Gi0/0 interface and one ACL will be placed on the R2 S0/0/0 interface.",
                    "Two ACLs (one in each direction) will be placed on the R2 Gi0/0 interface."
                ],
                "explanation": "An inbound ACL on R2 Gi0/0 filters traffic from R&D, and an outbound ACL on the same interface blocks traffic destined to R&D. One interface supports one inbound and one outbound ACL."
            },
            "fr": {
                "title": "160. Reportez-vous à l’illustration. L’entreprise a décidé qu’aucun trafic initié par tout autre réseau existant ou futur ne peut être transmis vers le réseau Recherche et Développement, et qu’aucun trafic depuis R&D ne peut être transmis vers d’autres réseaux. L’administrateur estime que des ACL étendues conviennent mieux. D’après ces informations, que fera l’administrateur réseau ?",
                "text": "",
                "options": [
                    "Une ACL sera placée sur l’interface R1 Gi0/0 et une ACL sur l’interface R2 Gi0/0.",
                    "Seule une ACL numérotée fonctionnera dans cette situation.",
                    "Une ACL sera placée sur l’interface R2 Gi0/0 et une ACL sur l’interface R2 S0/0/0.",
                    "Deux ACL, une dans chaque direction, seront placées sur l’interface R2 Gi0/0."
                ],
                "explanation": "Une ACL en entrée sur R2 Gi0/0 filtre le trafic provenant de R&D, et une ACL en sortie sur la même interface bloque le trafic destiné à R&D. Une interface prend en charge une ACL en entrée et une en sortie."
            }
        }
    },
    {
        "title": "161. Quel protocole utilise des numéros de strate plus petits pour indiquer qu’un serveur est plus proche de la source de temps autorisée que les numéros de strate plus grands ?",
        "text": "",
        "images": [],
        "options": [
            "TFTP",
            "SYSLOG",
            "NTP",
            "MPLS"
        ],
        "correct": [
            2
        ],
        "explanation": "NTP utilise une hiérarchie de niveaux de strate ; les plus petits numéros sont plus proches de la source de temps de référence.",
        "id": 163,
        "i18n": {
            "en": {
                "title": "161. What protocol uses smaller stratum numbers to indicate that the server is closer to the authorized time source than larger stratum numbers?",
                "text": "",
                "options": [
                    "TFTP",
                    "SYSLOG",
                    "NTP",
                    "MPLS"
                ],
                "explanation": "NTP uses a hierarchy of stratum levels; smaller stratum numbers are closer to the authoritative time source."
            },
            "fr": {
                "title": "161. Quel protocole utilise des numéros de strate plus petits pour indiquer qu’un serveur est plus proche de la source de temps autorisée que les numéros de strate plus grands ?",
                "text": "",
                "options": [
                    "TFTP",
                    "SYSLOG",
                    "NTP",
                    "MPLS"
                ],
                "explanation": "NTP utilise une hiérarchie de niveaux de strate ; les plus petits numéros sont plus proches de la source de temps de référence."
            }
        }
    },
    {
        "title": "162. Reportez-vous à l’illustration. Si aucun ID de routeur n’a été configuré manuellement, qu’utiliserait le routeur Branch1 comme ID de routeur OSPF ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/06/2020-06-28_210428.jpg"
        ],
        "options": [
            "10.0.0.1",
            "10.1.0.1",
            "192.168.1.100",
            "209.165.201.1"
        ],
        "correct": [
            2
        ],
        "explanation": "Sans ID de routeur manuel, le routeur sélectionne l’adresse IPv4 la plus élevée de ses interfaces loopback, ici 192.168.1.100.",
        "id": 164,
        "i18n": {
            "en": {
                "title": "162. Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?",
                "text": "",
                "options": [
                    "10.0.0.1",
                    "10.1.0.1",
                    "192.168.1.100",
                    "209.165.201.1"
                ],
                "explanation": "Without a manual router ID, the router selects the highest IPv4 address of its loopback interfaces (192.168.1.100)."
            },
            "fr": {
                "title": "162. Reportez-vous à l’illustration. Si aucun ID de routeur n’a été configuré manuellement, qu’utiliserait le routeur Branch1 comme ID de routeur OSPF ?",
                "text": "",
                "options": [
                    "10.0.0.1",
                    "10.1.0.1",
                    "192.168.1.100",
                    "209.165.201.1"
                ],
                "explanation": "Sans ID de routeur manuel, le routeur sélectionne l’adresse IPv4 la plus élevée de ses interfaces loopback, ici 192.168.1.100."
            }
        }
    },
    {
        "type": "matching",
        "title": "163. Associez la méthode HTTP à l’opération RESTful.",
        "text": "",
        "pairs": [
            {
                "left": "POST",
                "right": "créer"
            },
            {
                "left": "GET",
                "right": "lire"
            },
            {
                "left": "PUT/PATCH",
                "right": "mettre à jour"
            },
            {
                "left": "DELETE",
                "right": "supprimer"
            }
        ],
        "distractors": [],
        "explanation": "POST crée, GET lit, PUT/PATCH met à jour et DELETE supprime, selon les opérations CRUD.",
        "id": 165,
        "i18n": {
            "en": {
                "title": "163. Match the HTTP method with the RESTful operation.",
                "text": "",
                "pairs": [
                    {
                        "left": "POST",
                        "right": "create"
                    },
                    {
                        "left": "GET",
                        "right": "read"
                    },
                    {
                        "left": "PUT/PATCH",
                        "right": "update"
                    },
                    {
                        "left": "DELETE",
                        "right": "delete"
                    }
                ],
                "distractors": [],
                "explanation": "POST creates, GET reads, PUT/PATCH updates, and DELETE deletes (CRUD operations)."
            },
            "fr": {
                "title": "163. Associez la méthode HTTP à l’opération RESTful.",
                "text": "",
                "pairs": [
                    {
                        "left": "POST",
                        "right": "créer"
                    },
                    {
                        "left": "GET",
                        "right": "lire"
                    },
                    {
                        "left": "PUT/PATCH",
                        "right": "mettre à jour"
                    },
                    {
                        "left": "DELETE",
                        "right": "supprimer"
                    }
                ],
                "distractors": [],
                "explanation": "POST crée, GET lit, PUT/PATCH met à jour et DELETE supprime, selon les opérations CRUD."
            }
        }
    },
    {
        "title": "164. Reportez-vous à l’illustration. Un concepteur web signale que le serveur web web-s1.cisco.com n’est pas joignable via un navigateur. Le technicien utilise des utilitaires en ligne de commande pour vérifier le problème. Quelles deux informations peut-on déterminer ? (Choisissez deux réponses.)",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i286191v1n1_15178.jpg"
        ],
        "options": [
            "Le serveur web à l’adresse 192.168.0.10 est joignable depuis l’hôte source.",
            "DNS ne peut pas résoudre l’adresse IP du serveur web-s1.cisco.com.",
            "Un routeur est hors service entre l’hôte source et le serveur web-s1.cisco.com.",
            "Il y a un problème avec le logiciel du serveur web sur web-s1.cisco.com.",
            "La passerelle par défaut entre l’hôte source et le serveur à 192.168.0.10 est hors service."
        ],
        "correct": [
            0,
            1
        ],
        "explanation": "Le ping vers l’adresse IP réussit, donc le serveur est joignable, mais le ping vers le nom de domaine échoue, ce qui indique un problème de résolution DNS.",
        "id": 166,
        "i18n": {
            "en": {
                "title": "164. Refer to the exhibit. A web designer reports that the web server web-s1.cisco.com is not reachable through a web browser. The technician uses command line utilities to verify the problem. Which two things can be determined about the problem? (Choose two.)",
                "text": "",
                "options": [
                    "The web server at 192.168.0.10 is reachable from the source host.",
                    "DNS cannot resolve the IP address for the server web-s1.cisco.com.",
                    "A router is down between the source host and the server web-s1.cisco.com.",
                    "There is a problem with the web server software on web-s1.cisco.com.",
                    "The default gateway between the source host and the server at 192.168.0.10 is down."
                ],
                "explanation": "The ping to the IP succeeds (server is reachable) but the ping to the domain name fails, indicating a DNS resolution issue."
            },
            "fr": {
                "title": "164. Reportez-vous à l’illustration. Un concepteur web signale que le serveur web web-s1.cisco.com n’est pas joignable via un navigateur. Le technicien utilise des utilitaires en ligne de commande pour vérifier le problème. Quelles deux informations peut-on déterminer ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Le serveur web à l’adresse 192.168.0.10 est joignable depuis l’hôte source.",
                    "DNS ne peut pas résoudre l’adresse IP du serveur web-s1.cisco.com.",
                    "Un routeur est hors service entre l’hôte source et le serveur web-s1.cisco.com.",
                    "Il y a un problème avec le logiciel du serveur web sur web-s1.cisco.com.",
                    "La passerelle par défaut entre l’hôte source et le serveur à 192.168.0.10 est hors service."
                ],
                "explanation": "Le ping vers l’adresse IP réussit, donc le serveur est joignable, mais le ping vers le nom de domaine échoue, ce qui indique un problème de résolution DNS."
            }
        }
    },
    {
        "title": "165. Quel type de trafic est décrit comme ayant tendance à être imprévisible, irrégulier et en rafales ?",
        "text": "",
        "images": [],
        "options": [
            "vidéo",
            "voix",
            "données"
        ],
        "correct": [
            0
        ],
        "explanation": "Le trafic vidéo est imprévisible, irrégulier et en rafales, car le nombre et la taille des paquets varient selon le contenu.",
        "id": 167,
        "i18n": {
            "en": {
                "title": "165. What type of traffic is described as tending to be unpredictable, inconsistent, and bursty?",
                "text": "",
                "options": [
                    "video",
                    "voice",
                    "data"
                ],
                "explanation": "Video traffic is unpredictable, inconsistent, and bursty because packet number and size vary with content."
            },
            "fr": {
                "title": "165. Quel type de trafic est décrit comme ayant tendance à être imprévisible, irrégulier et en rafales ?",
                "text": "",
                "options": [
                    "vidéo",
                    "voix",
                    "données"
                ],
                "explanation": "Le trafic vidéo est imprévisible, irrégulier et en rafales, car le nombre et la taille des paquets varient selon le contenu."
            }
        }
    },
    {
        "type": "matching",
        "title": "166. Associez les fonctions aux couches correspondantes. Toutes les options ne sont pas utilisées.",
        "text": "",
        "pairs": [
            {
                "left": "fournit l’accès réseau à l’utilisateur",
                "right": "couche accès"
            },
            {
                "left": "représente la périphérie du réseau",
                "right": "couche accès"
            },
            {
                "left": "met en œuvre la politique d’accès au réseau",
                "right": "couche distribution"
            },
            {
                "left": "établit les frontières de routage de couche 3",
                "right": "couche distribution"
            },
            {
                "left": "fournit une connectivité de dorsale à haut débit",
                "right": "couche cœur"
            },
            {
                "left": "sert d’agrégateur pour tous les blocs de campus",
                "right": "couche cœur"
            }
        ],
        "distractors_left": [
            "met en œuvre des pare-feu personnels sur les ordinateurs clients"
        ],
        "explanation": "La couche accès connecte les utilisateurs à la périphérie du réseau, la couche distribution applique les politiques et établit les limites de couche 3, et la couche cœur fournit la dorsale haut débit et l’agrégation.",
        "id": 168,
        "i18n": {
            "en": {
                "title": "166. Match the functions to the corresponding layers. (Not all options are used.)",
                "text": "",
                "pairs": [
                    {
                        "left": "provides network access to the user",
                        "right": "access layer"
                    },
                    {
                        "left": "represents the network edge",
                        "right": "access layer"
                    },
                    {
                        "left": "implements network access policy",
                        "right": "distribution layer"
                    },
                    {
                        "left": "establishes Layer 3 routing boundaries",
                        "right": "distribution layer"
                    },
                    {
                        "left": "provides high-speed backbone connectivity",
                        "right": "core layer"
                    },
                    {
                        "left": "functions as an aggregator for all the campus blocks",
                        "right": "core layer"
                    }
                ],
                "distractors_left": [
                    "implements personal firewalls on the client computers"
                ],
                "explanation": "The access layer connects users at the network edge, the distribution layer implements policy and Layer 3 boundaries, and the core layer provides high-speed backbone connectivity and aggregation."
            },
            "fr": {
                "title": "166. Associez les fonctions aux couches correspondantes. Toutes les options ne sont pas utilisées.",
                "text": "",
                "pairs": [
                    {
                        "left": "fournit l’accès réseau à l’utilisateur",
                        "right": "couche accès"
                    },
                    {
                        "left": "représente la périphérie du réseau",
                        "right": "couche accès"
                    },
                    {
                        "left": "met en œuvre la politique d’accès au réseau",
                        "right": "couche distribution"
                    },
                    {
                        "left": "établit les frontières de routage de couche 3",
                        "right": "couche distribution"
                    },
                    {
                        "left": "fournit une connectivité de dorsale à haut débit",
                        "right": "couche cœur"
                    },
                    {
                        "left": "sert d’agrégateur pour tous les blocs de campus",
                        "right": "couche cœur"
                    }
                ],
                "distractors_left": [
                    "met en œuvre des pare-feu personnels sur les ordinateurs clients"
                ],
                "explanation": "La couche accès connecte les utilisateurs à la périphérie du réseau, la couche distribution applique les politiques et établit les limites de couche 3, et la couche cœur fournit la dorsale haut débit et l’agrégation."
            }
        }
    },
    {
        "title": "167. Quel type de trafic est décrit comme nécessitant une priorité plus élevée lorsqu’il est interactif ?",
        "text": "",
        "images": [],
        "options": [
            "voix",
            "données",
            "vidéo"
        ],
        "correct": [
            1
        ],
        "explanation": "La priorité du trafic de données dépend de son caractère interactif et critique pour la mission ; dans ce cas, il doit être priorisé.",
        "id": 169,
        "i18n": {
            "en": {
                "title": "167. What type of traffic is described as consisting of traffic that requires a higher priority if interactive?",
                "text": "",
                "options": [
                    "voice",
                    "data",
                    "video"
                ],
                "explanation": "Data traffic priority depends on whether it is interactive and mission-critical; if so, it should be prioritized."
            },
            "fr": {
                "title": "167. Quel type de trafic est décrit comme nécessitant une priorité plus élevée lorsqu’il est interactif ?",
                "text": "",
                "options": [
                    "voix",
                    "données",
                    "vidéo"
                ],
                "explanation": "La priorité du trafic de données dépend de son caractère interactif et critique pour la mission ; dans ce cas, il doit être priorisé."
            }
        }
    },
    {
        "title": "168. Quel type de VPN fournit une option flexible pour connecter un site central avec des sites d’agence ?",
        "text": "",
        "images": [],
        "options": [
            "interface de tunnel virtuel IPsec",
            "VPN MPLS",
            "VPN multipoint dynamique",
            "GRE over IPsec"
        ],
        "correct": [
            2
        ],
        "explanation": "DMVPN simplifie la configuration des tunnels et fournit une option flexible pour connecter un site central à des sites distants.",
        "id": 170,
        "i18n": {
            "en": {
                "title": "168. Which type of VPN provides a flexible option to connect a central site with branch sites?",
                "text": "",
                "options": [
                    "IPsec virtual tunnel interface",
                    "MPLS VPN",
                    "dynamic multipoint VPN",
                    "GRE over IPsec"
                ],
                "explanation": "DMVPN simplifies tunnel configuration and provides a flexible option to connect a central site with branch sites."
            },
            "fr": {
                "title": "168. Quel type de VPN fournit une option flexible pour connecter un site central avec des sites d’agence ?",
                "text": "",
                "options": [
                    "interface de tunnel virtuel IPsec",
                    "VPN MPLS",
                    "VPN multipoint dynamique",
                    "GRE over IPsec"
                ],
                "explanation": "DMVPN simplifie la configuration des tunnels et fournit une option flexible pour connecter un site central à des sites distants."
            }
        }
    },
    {
        "title": "169. Une entreprise a engagé une société de sécurité réseau pour identifier les vulnérabilités de son réseau. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des fuzzers ?",
        "text": "",
        "images": [],
        "options": [
            "pour découvrir des vulnérabilités de sécurité d’un ordinateur",
            "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
            "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware",
            "pour détecter des outils installés dans les fichiers et répertoires qui fournissent aux acteurs malveillants un accès distant et un contrôle"
        ],
        "correct": [
            0
        ],
        "explanation": "Les fuzzers découvrent des vulnérabilités en fournissant des entrées aléatoires ou inattendues afin de provoquer des faiblesses ou des plantages.",
        "id": 171,
        "i18n": {
            "en": {
                "title": "169. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use fuzzers?",
                "text": "",
                "options": [
                    "to discover security vulnerabilities of a computer",
                    "to detect any evidence of a hack or malware in a computer or network",
                    "to reverse engineer binary files when writing exploits and when analyzing malware",
                    "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network"
                ],
                "explanation": "Fuzzers discover security vulnerabilities by feeding random/unexpected input to find weaknesses or crashes (e.g., Skipfish, Wapiti, W3af)."
            },
            "fr": {
                "title": "169. Une entreprise a engagé une société de sécurité réseau pour identifier les vulnérabilités de son réseau. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des fuzzers ?",
                "text": "",
                "options": [
                    "pour découvrir des vulnérabilités de sécurité d’un ordinateur",
                    "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
                    "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware",
                    "pour détecter des outils installés dans les fichiers et répertoires qui fournissent aux acteurs malveillants un accès distant et un contrôle"
                ],
                "explanation": "Les fuzzers découvrent des vulnérabilités en fournissant des entrées aléatoires ou inattendues afin de provoquer des faiblesses ou des plantages."
            }
        }
    },
    {
        "title": "170. Reportez-vous à l’illustration. Un administrateur réseau a configuré une ACL standard pour permettre uniquement aux deux réseaux LAN connectés à R1 d’accéder au réseau relié à l’interface R2 G0/1, mais pas à l’interface G0/0. En suivant les bonnes pratiques, où l’ACL standard doit-elle être appliquée ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i282155v1n2_282152.png"
        ],
        "options": [
            "R1 S0/0/0 en sortie",
            "R2 G0/0 en sortie",
            "R2 S0/0/1 en sortie",
            "R1 S0/0/0 en entrée",
            "R2 G0/1 en entrée"
        ],
        "correct": [
            1
        ],
        "explanation": "Une ACL standard se place près de la destination. L’appliquer en sortie sur R2 G0/0 empêche le trafic des LAN de R1 d’atteindre ce réseau, tout en autorisant l’accès à G0/1.",
        "id": 172,
        "i18n": {
            "en": {
                "title": "170. Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface, but not the G0/0 interface. When following the best practices, in what location should the standard ACL be applied?",
                "text": "",
                "options": [
                    "R1 S0/0/0 outbound",
                    "R2 G0/0 outbound",
                    "R2 S0/0/1 outbound",
                    "R1 S0/0/0 inbound",
                    "R2 G0/1 inbound"
                ],
                "explanation": "A standard ACL is placed close to the destination. Applying it outbound on R2 G0/0 prevents R1 LAN traffic from that network while still allowing access to G0/1."
            },
            "fr": {
                "title": "170. Reportez-vous à l’illustration. Un administrateur réseau a configuré une ACL standard pour permettre uniquement aux deux réseaux LAN connectés à R1 d’accéder au réseau relié à l’interface R2 G0/1, mais pas à l’interface G0/0. En suivant les bonnes pratiques, où l’ACL standard doit-elle être appliquée ?",
                "text": "",
                "options": [
                    "R1 S0/0/0 en sortie",
                    "R2 G0/0 en sortie",
                    "R2 S0/0/1 en sortie",
                    "R1 S0/0/0 en entrée",
                    "R2 G0/1 en entrée"
                ],
                "explanation": "Une ACL standard se place près de la destination. L’appliquer en sortie sur R2 G0/0 empêche le trafic des LAN de R1 d’atteindre ce réseau, tout en autorisant l’accès à G0/1."
            }
        }
    },
    {
        "title": "171. Deux routeurs OSPF sont connectés par une liaison point à point. Pendant l’état ExStart, quel routeur sera choisi pour envoyer les paquets DBD en premier ?",
        "text": "",
        "images": [],
        "options": [
            "le routeur ayant l’ID de routeur le plus élevé",
            "le routeur ayant l’adresse IP la plus basse sur l’interface de connexion",
            "le routeur ayant l’adresse IP la plus élevée sur l’interface de connexion",
            "le routeur ayant l’ID de routeur le plus bas"
        ],
        "correct": [
            0
        ],
        "explanation": "Le routeur ayant l’ID de routeur le plus élevé envoie les paquets DBD en premier pendant l’état Exchange.",
        "id": 173,
        "i18n": {
            "en": {
                "title": "171. Two OSPF-enabled routers are connected over a point-to-point link. During the ExStart state, which router will be chosen as the first one to send DBD packets?",
                "text": "",
                "options": [
                    "the router with the highest router ID",
                    "the router with the lowest IP address on the connecting interface",
                    "the router with the highest IP address on the connecting interface",
                    "the router with the lowest router ID"
                ],
                "explanation": "The router with the higher router ID sends DBD packets first during the Exchange state."
            },
            "fr": {
                "title": "171. Deux routeurs OSPF sont connectés par une liaison point à point. Pendant l’état ExStart, quel routeur sera choisi pour envoyer les paquets DBD en premier ?",
                "text": "",
                "options": [
                    "le routeur ayant l’ID de routeur le plus élevé",
                    "le routeur ayant l’adresse IP la plus basse sur l’interface de connexion",
                    "le routeur ayant l’adresse IP la plus élevée sur l’interface de connexion",
                    "le routeur ayant l’ID de routeur le plus bas"
                ],
                "explanation": "Le routeur ayant l’ID de routeur le plus élevé envoie les paquets DBD en premier pendant l’état Exchange."
            }
        }
    },
    {
        "title": "172. Quelle étape du processus de routage à état de liens est décrite par un routeur qui envoie des paquets Hello sur toutes les interfaces OSPF activées ?",
        "text": "",
        "images": [],
        "options": [
            "échanger des annonces d’état de liens",
            "élire le routeur désigné",
            "injecter la route par défaut",
            "établir des adjacences de voisins"
        ],
        "correct": [
            3
        ],
        "explanation": "L’envoi de paquets Hello sur les interfaces OSPF activées permet aux routeurs de découvrir les voisins et d’établir des adjacences.",
        "id": 174,
        "i18n": {
            "en": {
                "title": "172. Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?",
                "text": "",
                "options": [
                    "exchanging link-state advertisements",
                    "electing the designated router",
                    "injecting the default route",
                    "establishing neighbor adjacencies"
                ],
                "explanation": "Sending Hello packets out OSPF-enabled interfaces is how routers discover neighbors and establish neighbor adjacencies."
            },
            "fr": {
                "title": "172. Quelle étape du processus de routage à état de liens est décrite par un routeur qui envoie des paquets Hello sur toutes les interfaces OSPF activées ?",
                "text": "",
                "options": [
                    "échanger des annonces d’état de liens",
                    "élire le routeur désigné",
                    "injecter la route par défaut",
                    "établir des adjacences de voisins"
                ],
                "explanation": "L’envoi de paquets Hello sur les interfaces OSPF activées permet aux routeurs de découvrir les voisins et d’établir des adjacences."
            }
        }
    },
    {
        "title": "173. Une entreprise a engagé une société de sécurité réseau pour identifier les vulnérabilités de son réseau. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des outils forensiques ?",
        "text": "",
        "images": [],
        "options": [
            "pour obtenir des systèmes d’exploitation spécialement conçus et préchargés avec des outils optimisés pour le hacking",
            "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
            "pour détecter des outils installés dans les fichiers et répertoires qui fournissent aux acteurs malveillants un accès distant et un contrôle",
            "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware"
        ],
        "correct": [
            1
        ],
        "explanation": "Les outils forensiques recherchent les traces d’anciens piratages ou de malwares dans un ordinateur, par exemple Sleuth Kit, Helix, Maltego ou Encase.",
        "id": 175,
        "i18n": {
            "en": {
                "title": "173. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use forensic tools?",
                "text": "",
                "options": [
                    "to obtain specially designed operating systems preloaded with tools optimized for hacking",
                    "to detect any evidence of a hack or malware in a computer or network",
                    "to detect installed tools within files and directories that provide threat actors remote access and control over a computer or network",
                    "to reverse engineer binary files when writing exploits and when analyzing malware"
                ],
                "explanation": "Forensic tools sniff out evidence of previous hacks or malware in a computer (e.g., Sleuth Kit, Helix, Maltego, Encase)."
            },
            "fr": {
                "title": "173. Une entreprise a engagé une société de sécurité réseau pour identifier les vulnérabilités de son réseau. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des outils forensiques ?",
                "text": "",
                "options": [
                    "pour obtenir des systèmes d’exploitation spécialement conçus et préchargés avec des outils optimisés pour le hacking",
                    "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
                    "pour détecter des outils installés dans les fichiers et répertoires qui fournissent aux acteurs malveillants un accès distant et un contrôle",
                    "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware"
                ],
                "explanation": "Les outils forensiques recherchent les traces d’anciens piratages ou de malwares dans un ordinateur, par exemple Sleuth Kit, Helix, Maltego ou Encase."
            }
        }
    },
    {
        "title": "174. Reportez-vous à l’illustration. Un administrateur réseau a configuré OSPFv2 sur deux routeurs Cisco, mais PC1 ne peut pas se connecter à PC2. Quel est le problème le plus probable ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i285134v1n1_285134.png"
        ],
        "options": [
            "L’interface Fa0/0 n’a pas été activée pour OSPFv2 sur le routeur R2.",
            "L’interface Fa0/0 est configurée comme passive-interface sur le routeur R2.",
            "L’interface S0/0 est configurée comme passive-interface sur le routeur R2.",
            "L’interface S0/0 n’a pas été activée pour OSPFv2 sur le routeur R2."
        ],
        "correct": [
            0
        ],
        "explanation": "Le réseau LAN sur R2 Fa0/0 n’est pas annoncé dans OSPFv2, donc le réseau distant est injoignable. L’adjacence série est active.",
        "id": 176,
        "i18n": {
            "en": {
                "title": "174. Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?",
                "text": "",
                "options": [
                    "Interface Fa0/0 has not been activated for OSPFv2 on router R2.",
                    "Interface Fa0/0 is configured as a passive-interface on router R2.",
                    "Interface S0/0 is configured as a passive-interface on router R2.",
                    "Interface s0/0 has not been activated for OSPFv2 on router R2."
                ],
                "explanation": "The LAN network on R2 Fa0/0 is not advertised in OSPFv2, so the remote network is unreachable. The serial adjacency is up."
            },
            "fr": {
                "title": "174. Reportez-vous à l’illustration. Un administrateur réseau a configuré OSPFv2 sur deux routeurs Cisco, mais PC1 ne peut pas se connecter à PC2. Quel est le problème le plus probable ?",
                "text": "",
                "options": [
                    "L’interface Fa0/0 n’a pas été activée pour OSPFv2 sur le routeur R2.",
                    "L’interface Fa0/0 est configurée comme passive-interface sur le routeur R2.",
                    "L’interface S0/0 est configurée comme passive-interface sur le routeur R2.",
                    "L’interface S0/0 n’a pas été activée pour OSPFv2 sur le routeur R2."
                ],
                "explanation": "Le réseau LAN sur R2 Fa0/0 n’est pas annoncé dans OSPFv2, donc le réseau distant est injoignable. L’adjacence série est active."
            }
        }
    },
    {
        "title": "175. ABCTech étudie l’automatisation de certains de ses produits. Pour contrôler et tester ces produits, les programmeurs ont besoin de Windows, Linux et Mac OS sur leurs ordinateurs. Quel service ou technologie répond à ce besoin ?",
        "text": "",
        "images": [],
        "options": [
            "serveurs dédiés",
            "réseau défini par logiciel",
            "virtualisation",
            "Cisco ACI"
        ],
        "correct": [
            2
        ],
        "explanation": "La virtualisation sépare le système d’exploitation du matériel et permet d’exécuter plusieurs systèmes d’exploitation sur une même plateforme via un hyperviseur.",
        "id": 177,
        "i18n": {
            "en": {
                "title": "175. ABCTech is investigating the use of automation for some of its products. In order to control and test these products, the programmers require Windows, Linux, and MAC OS on their computers. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "dedicated servers",
                    "software defined networking",
                    "virtualization",
                    "Cisco ACI"
                ],
                "explanation": "Virtualization separates the OS from hardware, allowing multiple operating systems to run on a single platform via a hypervisor."
            },
            "fr": {
                "title": "175. ABCTech étudie l’automatisation de certains de ses produits. Pour contrôler et tester ces produits, les programmeurs ont besoin de Windows, Linux et Mac OS sur leurs ordinateurs. Quel service ou technologie répond à ce besoin ?",
                "text": "",
                "options": [
                    "serveurs dédiés",
                    "réseau défini par logiciel",
                    "virtualisation",
                    "Cisco ACI"
                ],
                "explanation": "La virtualisation sépare le système d’exploitation du matériel et permet d’exécuter plusieurs systèmes d’exploitation sur une même plateforme via un hyperviseur."
            }
        }
    },
    {
        "title": "176. Un ingénieur réseau a remarqué que certaines routes attendues ne s’affichent pas dans la table de routage. Quelles deux commandes fourniront des informations supplémentaires sur l’état des adjacences de routeurs, les intervalles de temporisation et l’ID de zone ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "show ip protocols",
            "show ip ospf neighbor",
            "show running-configuration",
            "show ip ospf interface",
            "show ip route ospf"
        ],
        "correct": [
            1,
            3
        ],
        "explanation": "show ip ospf neighbor et show ip ospf interface affichent l’état des adjacences, les intervalles de temporisation et les détails de l’ID de zone.",
        "id": 178,
        "i18n": {
            "en": {
                "title": "176. A network engineer has noted that some expected network route entries are not displayed in the routing table. Which two commands will provide additional information about the state of router adjacencies, timer intervals, and the area ID? (Choose two.)",
                "text": "",
                "options": [
                    "show ip protocols",
                    "show ip ospf neighbor",
                    "show running-configuration",
                    "show ip ospf interface",
                    "show ip route ospf"
                ],
                "explanation": "show ip ospf neighbor and show ip ospf interface display adjacency state, timer intervals, and area ID details."
            },
            "fr": {
                "title": "176. Un ingénieur réseau a remarqué que certaines routes attendues ne s’affichent pas dans la table de routage. Quelles deux commandes fourniront des informations supplémentaires sur l’état des adjacences de routeurs, les intervalles de temporisation et l’ID de zone ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "show ip protocols",
                    "show ip ospf neighbor",
                    "show running-configuration",
                    "show ip ospf interface",
                    "show ip route ospf"
                ],
                "explanation": "show ip ospf neighbor et show ip ospf interface affichent l’état des adjacences, les intervalles de temporisation et les détails de l’ID de zone."
            }
        }
    },
    {
        "title": "177. Quel type de VPN implique le transfert du trafic sur la dorsale à l’aide d’étiquettes distribuées entre les routeurs de cœur ?",
        "text": "",
        "images": [],
        "options": [
            "VPN MPLS",
            "GRE over IPsec",
            "interface de tunnel virtuel IPsec",
            "VPN multipoint dynamique"
        ],
        "correct": [
            0
        ],
        "explanation": "MPLS transfère le trafic à travers la dorsale à l’aide d’étiquettes distribuées entre routeurs de cœur pour déterminer le prochain saut.",
        "id": 179,
        "i18n": {
            "en": {
                "title": "177. Which type of VPN involves the forwarding of traffic over the backbone through the use of labels distributed among core routers?",
                "text": "",
                "options": [
                    "MPLS VPN",
                    "GRE over IPsec",
                    "IPsec virtual tunnel interface",
                    "dynamic multipoint VPN"
                ],
                "explanation": "MPLS forwards traffic through the backbone using labels distributed among core routers to determine the next hop."
            },
            "fr": {
                "title": "177. Quel type de VPN implique le transfert du trafic sur la dorsale à l’aide d’étiquettes distribuées entre les routeurs de cœur ?",
                "text": "",
                "options": [
                    "VPN MPLS",
                    "GRE over IPsec",
                    "interface de tunnel virtuel IPsec",
                    "VPN multipoint dynamique"
                ],
                "explanation": "MPLS transfère le trafic à travers la dorsale à l’aide d’étiquettes distribuées entre routeurs de cœur pour déterminer le prochain saut."
            }
        }
    },
    {
        "title": "178. Quel type de VPN implique l’encapsulation par IPsec d’un protocole de tunneling non sécurisé ?",
        "text": "",
        "images": [],
        "options": [
            "VPN SSL",
            "VPN multipoint dynamique",
            "GRE over IPsec",
            "interface de tunnel virtuel IPsec"
        ],
        "correct": [
            2
        ],
        "explanation": "GRE est un protocole de tunneling non sécurisé ; ses paquets sont encapsulés dans des paquets IPsec pour le chiffrement et l’authentification.",
        "id": 180,
        "i18n": {
            "en": {
                "title": "178. Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
                "text": "",
                "options": [
                    "SSL VPN",
                    "dynamic multipoint VPN",
                    "GRE over IPsec",
                    "IPsec virtual tunnel interface"
                ],
                "explanation": "GRE is a non-secure tunneling protocol; its packets are encapsulated into IPsec packets for encryption and authentication."
            },
            "fr": {
                "title": "178. Quel type de VPN implique l’encapsulation par IPsec d’un protocole de tunneling non sécurisé ?",
                "text": "",
                "options": [
                    "VPN SSL",
                    "VPN multipoint dynamique",
                    "GRE over IPsec",
                    "interface de tunnel virtuel IPsec"
                ],
                "explanation": "GRE est un protocole de tunneling non sécurisé ; ses paquets sont encapsulés dans des paquets IPsec pour le chiffrement et l’authentification."
            }
        }
    },
    {
        "title": "179. Une entreprise a engagé une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des systèmes d’exploitation de hacking ?",
        "text": "",
        "images": [],
        "options": [
            "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
            "pour obtenir des systèmes d’exploitation spécialement conçus, préchargés avec des outils optimisés pour le hacking",
            "pour encoder des données à l’aide d’algorithmes afin d’empêcher l’accès non autorisé aux données chiffrées",
            "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware"
        ],
        "correct": [
            1
        ],
        "explanation": "Les systèmes d’exploitation de hacking, comme Kali Linux, Knoppix ou BackBox, sont fournis avec des outils optimisés pour les tests de sécurité.",
        "id": 181,
        "i18n": {
            "en": {
                "title": "179. A company has contracted with a network security firm to help identify the vulnerabilities of the corporate network. The firm sends a team to perform penetration tests to the company network. Why would the team use hacking operation systems?",
                "text": "",
                "options": [
                    "to detect any evidence of a hack or malware in a computer or network",
                    "to obtain specially designed operating systems preloaded with tools optimized for hacking",
                    "to encode data, using algorithm schemes, to prevent unauthorized access to the encrypted data",
                    "to reverse engineer binary files when writing exploits and when analyzing malware"
                ],
                "explanation": "Hacking operating systems (e.g., Kali Linux, Knoppix, BackBox) come preloaded with tools optimized for hacking."
            },
            "fr": {
                "title": "179. Une entreprise a engagé une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau d’entreprise. L’équipe effectue des tests d’intrusion. Pourquoi utiliserait-elle des systèmes d’exploitation de hacking ?",
                "text": "",
                "options": [
                    "pour détecter toute preuve de piratage ou de malware dans un ordinateur ou un réseau",
                    "pour obtenir des systèmes d’exploitation spécialement conçus, préchargés avec des outils optimisés pour le hacking",
                    "pour encoder des données à l’aide d’algorithmes afin d’empêcher l’accès non autorisé aux données chiffrées",
                    "pour rétroconcevoir des fichiers binaires lors de l’écriture d’exploits et de l’analyse de malware"
                ],
                "explanation": "Les systèmes d’exploitation de hacking, comme Kali Linux, Knoppix ou BackBox, sont fournis avec des outils optimisés pour les tests de sécurité."
            }
        }
    },
    {
        "title": "180. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour identifier une interface comme faisant partie du réseau global externe ?",
        "text": "",
        "images": [],
        "options": [
            "ip pat inside",
            "access-list 10 permit 172.19.89.0 0.0.0.255",
            "ip nat inside",
            "ip nat outside"
        ],
        "correct": [
            3
        ],
        "explanation": "La commande ip nat outside désigne une interface comme connectée au réseau global externe.",
        "id": 182,
        "i18n": {
            "en": {
                "title": "180. What command would be used as part of configuring NAT or PAT to identify an interface as part of the external global network?",
                "text": "",
                "options": [
                    "ip pat inside",
                    "access-list 10 permit 172.19.89.0 0.0.0.255",
                    "ip nat inside",
                    "ip nat outside"
                ],
                "explanation": "The ip nat outside command designates an interface as connected to the external global network."
            },
            "fr": {
                "title": "180. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour identifier une interface comme faisant partie du réseau global externe ?",
                "text": "",
                "options": [
                    "ip pat inside",
                    "access-list 10 permit 172.19.89.0 0.0.0.255",
                    "ip nat inside",
                    "ip nat outside"
                ],
                "explanation": "La commande ip nat outside désigne une interface comme connectée au réseau global externe."
            }
        }
    },
    {
        "title": "181. Pour éviter l’achat de nouveau matériel, une entreprise veut exploiter les ressources système inutilisées et consolider le nombre de serveurs tout en permettant plusieurs systèmes d’exploitation sur une seule plateforme matérielle. Quel service ou technologie répond à ce besoin ?",
        "text": "",
        "images": [],
        "options": [
            "centre de données",
            "services cloud",
            "virtualisation",
            "serveurs dédiés"
        ],
        "correct": [
            2
        ],
        "explanation": "La virtualisation de serveurs utilise les ressources inutilisées, consolide les serveurs et permet plusieurs systèmes d’exploitation sur une seule plateforme matérielle.",
        "id": 183,
        "i18n": {
            "en": {
                "title": "181. To avoid purchasing new hardware, a company wants to take advantage of idle system resources and consolidate the number of servers while allowing for multiple operating systems on a single hardware platform. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "data center",
                    "cloud services",
                    "virtualization",
                    "dedicated servers"
                ],
                "explanation": "Server virtualization uses idle resources, consolidates servers, and allows multiple operating systems on a single hardware platform."
            },
            "fr": {
                "title": "181. Pour éviter l’achat de nouveau matériel, une entreprise veut exploiter les ressources système inutilisées et consolider le nombre de serveurs tout en permettant plusieurs systèmes d’exploitation sur une seule plateforme matérielle. Quel service ou technologie répond à ce besoin ?",
                "text": "",
                "options": [
                    "centre de données",
                    "services cloud",
                    "virtualisation",
                    "serveurs dédiés"
                ],
                "explanation": "La virtualisation de serveurs utilise les ressources inutilisées, consolide les serveurs et permet plusieurs systèmes d’exploitation sur une seule plateforme matérielle."
            }
        }
    },
    {
        "title": "182. Quel type de VPN route les paquets via des interfaces de tunnel virtuel pour le chiffrement et le transfert ?",
        "text": "",
        "images": [],
        "options": [
            "VPN MPLS",
            "interface de tunnel virtuel IPsec",
            "VPN multipoint dynamique",
            "GRE over IPsec"
        ],
        "correct": [
            1
        ],
        "explanation": "IPsec VTI applique les paramètres IPsec à une interface virtuelle ; les paquets routés vers la VTI sont chiffrés et transférés, avec une prise en charge native du multicast.",
        "id": 184,
        "i18n": {
            "en": {
                "title": "182. Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
                "text": "",
                "options": [
                    "MPLS VPN",
                    "IPsec virtual tunnel interface",
                    "dynamic multipoint VPN",
                    "GRE over IPsec"
                ],
                "explanation": "IPsec VTI applies IPsec settings to a virtual interface; packets routed to the VTI are encrypted and forwarded, natively supporting multicast."
            },
            "fr": {
                "title": "182. Quel type de VPN route les paquets via des interfaces de tunnel virtuel pour le chiffrement et le transfert ?",
                "text": "",
                "options": [
                    "VPN MPLS",
                    "interface de tunnel virtuel IPsec",
                    "VPN multipoint dynamique",
                    "GRE over IPsec"
                ],
                "explanation": "IPsec VTI applique les paramètres IPsec à une interface virtuelle ; les paquets routés vers la VTI sont chiffrés et transférés, avec une prise en charge native du multicast."
            }
        }
    },
    {
        "title": "183. Quelle étape du processus de routage à état de liens est décrite par un routeur qui diffuse l’état de liens et le coût de chaque lien directement connecté ?",
        "text": "",
        "images": [],
        "options": [
            "construire la table de topologie",
            "sélectionner l’ID de routeur",
            "échanger des annonces d’état de liens",
            "injecter la route par défaut"
        ],
        "correct": [
            2
        ],
        "explanation": "L’échange d’annonces d’état de liens, ou LSA, diffuse aux voisins les informations d’état et de coût des liens directement connectés.",
        "id": 185,
        "i18n": {
            "en": {
                "title": "183. Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?",
                "text": "",
                "options": [
                    "building the topology table",
                    "selecting the router ID",
                    "exchanging link-state advertisements",
                    "injecting the default route"
                ],
                "explanation": "Exchanging link-state advertisements (LSAs) floods state and cost information about directly connected links to neighbors."
            },
            "fr": {
                "title": "183. Quelle étape du processus de routage à état de liens est décrite par un routeur qui diffuse l’état de liens et le coût de chaque lien directement connecté ?",
                "text": "",
                "options": [
                    "construire la table de topologie",
                    "sélectionner l’ID de routeur",
                    "échanger des annonces d’état de liens",
                    "injecter la route par défaut"
                ],
                "explanation": "L’échange d’annonces d’état de liens, ou LSA, diffuse aux voisins les informations d’état et de coût des liens directement connectés."
            }
        }
    },
    {
        "title": "184. Quel type de trafic est décrit comme utilisant TCP ou UDP selon le besoin de récupération d’erreurs ?",
        "text": "",
        "images": [],
        "options": [
            "vidéo",
            "voix",
            "données"
        ],
        "correct": [
            2
        ],
        "explanation": "Le trafic de données utilise TCP ou UDP selon les exigences ; les données intolérantes à la perte utilisent TCP pour la récupération d’erreurs.",
        "id": 186,
        "i18n": {
            "en": {
                "title": "184. What type of traffic is described as using either TCP or UDP depending on the need for error recovery?",
                "text": "",
                "options": [
                    "video",
                    "voice",
                    "data"
                ],
                "explanation": "Data traffic uses TCP or UDP depending on requirements; loss-intolerant data uses TCP for error recovery."
            },
            "fr": {
                "title": "184. Quel type de trafic est décrit comme utilisant TCP ou UDP selon le besoin de récupération d’erreurs ?",
                "text": "",
                "options": [
                    "vidéo",
                    "voix",
                    "données"
                ],
                "explanation": "Le trafic de données utilise TCP ou UDP selon les exigences ; les données intolérantes à la perte utilisent TCP pour la récupération d’erreurs."
            }
        }
    },
    {
        "title": "185. Reportez-vous à l’illustration. Le PDG exige qu’une ACL soit créée pour autoriser le trafic e-mail vers Internet et refuser l’accès FTP. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/07/What-is-the-best-ACL-type-and-placement-to-use-in-this-situation.jpg"
        ],
        "options": [
            "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
            "ACL standard en sortie sur R2 S0/0/0",
            "ACL étendue en entrée sur R2 S0/0/0",
            "ACL standard en entrée sur l’interface WAN de R2 connectée à Internet"
        ],
        "correct": [
            0
        ],
        "explanation": "Une ACL étendue est nécessaire pour filtrer par application ou par port, et la placer en sortie sur l’interface WAN de R2 permet à une seule ACL d’inspecter tout le trafic interne avant Internet.",
        "id": 187,
        "i18n": {
            "en": {
                "title": "185. Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "extended ACL outbound on R2 WAN interface towards the internet",
                    "standard ACL outbound on R2 S0/0/0",
                    "extended ACL inbound on R2 S0/0/0",
                    "standard ACL inbound on R2 WAN interface connecting to the internet"
                ],
                "explanation": "An extended ACL is needed to filter by application/port, and placing it outbound on the R2 WAN interface lets one ACL inspect all internal traffic before it reaches the internet."
            },
            "fr": {
                "title": "185. Reportez-vous à l’illustration. Le PDG exige qu’une ACL soit créée pour autoriser le trafic e-mail vers Internet et refuser l’accès FTP. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
                    "ACL standard en sortie sur R2 S0/0/0",
                    "ACL étendue en entrée sur R2 S0/0/0",
                    "ACL standard en entrée sur l’interface WAN de R2 connectée à Internet"
                ],
                "explanation": "Une ACL étendue est nécessaire pour filtrer par application ou par port, et la placer en sortie sur l’interface WAN de R2 permet à une seule ACL d’inspecter tout le trafic interne avant Internet."
            }
        }
    },
    {
        "title": "186. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour définir un pool d’adresses pour la traduction ?",
        "text": "",
        "images": [],
        "options": [
            "ip nat inside source static 172.19.89.13 198.133.219.65",
            "ip nat inside source list 24 interface serial 0/1/0 overload",
            "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
            "ip nat outside"
        ],
        "correct": [
            2
        ],
        "explanation": "La commande ip nat pool définit le pool d’adresses publiques utilisées pour la traduction, avec un nom, une adresse de début, une adresse de fin et un masque réseau.",
        "id": 188,
        "i18n": {
            "en": {
                "title": "186. What command would be used as part of configuring NAT or PAT to define a pool of addresses for translation?",
                "text": "",
                "options": [
                    "ip nat inside source static 172.19.89.13 198.133.219.65",
                    "ip nat inside source list 24 interface serial 0/1/0 overload",
                    "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
                    "ip nat outside"
                ],
                "explanation": "The ip nat pool command defines the pool of public addresses used for translation, requiring a name, start/end address, and netmask."
            },
            "fr": {
                "title": "186. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour définir un pool d’adresses pour la traduction ?",
                "text": "",
                "options": [
                    "ip nat inside source static 172.19.89.13 198.133.219.65",
                    "ip nat inside source list 24 interface serial 0/1/0 overload",
                    "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
                    "ip nat outside"
                ],
                "explanation": "La commande ip nat pool définit le pool d’adresses publiques utilisées pour la traduction, avec un nom, une adresse de début, une adresse de fin et un masque réseau."
            }
        }
    },
    {
        "title": "187. Quel est le nom de la couche du modèle de réseau commuté Cisco borderless considérée comme la dorsale utilisée pour la connectivité haut débit et l’isolation des pannes ?",
        "text": "",
        "images": [],
        "options": [
            "liaison de données",
            "accès",
            "cœur",
            "réseau",
            "accès réseau"
        ],
        "correct": [
            2
        ],
        "explanation": "La couche cœur est la dorsale, avec des connexions redondantes à haut débit pour la connectivité et l’isolation des pannes.",
        "id": 189,
        "i18n": {
            "en": {
                "title": "187. What is the name of the layer in the Cisco borderless switched network design that is considered to be the backbone used for high-speed connectivity and fault isolation?",
                "text": "",
                "options": [
                    "data link",
                    "access",
                    "core",
                    "network",
                    "network access"
                ],
                "explanation": "The core layer is the backbone, with high-speed redundant connections for connectivity and fault isolation."
            },
            "fr": {
                "title": "187. Quel est le nom de la couche du modèle de réseau commuté Cisco borderless considérée comme la dorsale utilisée pour la connectivité haut débit et l’isolation des pannes ?",
                "text": "",
                "options": [
                    "liaison de données",
                    "accès",
                    "cœur",
                    "réseau",
                    "accès réseau"
                ],
                "explanation": "La couche cœur est la dorsale, avec des connexions redondantes à haut débit pour la connectivité et l’isolation des pannes."
            }
        }
    },
    {
        "title": "188. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 172.18.20.40, comme destination 10.33.19.2 et comme protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.47 any eq ftp</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            0
        ],
        "explanation": "Le protocole 21 correspond à eq ftp, la source correspond à la plage 0.0.0.47, et any correspond à la destination ; le paquet est donc autorisé.",
        "id": 190,
        "i18n": {
            "en": {
                "title": "188. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 172.18.20.40, a destination address of 10.33.19.2, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.47 any eq ftp</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "Protocol 21 matches eq ftp, the source matches the range (0.0.0.47), and 'any' matches the destination, so the packet is permitted."
            },
            "fr": {
                "title": "188. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 172.18.20.40, comme destination 10.33.19.2 et comme protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.47 any eq ftp</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "Le protocole 21 correspond à eq ftp, la source correspond à la plage 0.0.0.47, et any correspond à la destination ; le paquet est donc autorisé."
            }
        }
    },
    {
        "title": "189. Quel type de trafic est décrit comme recevant une priorité plus faible lorsqu’il n’est pas critique pour la mission ?",
        "text": "",
        "images": [],
        "options": [
            "vidéo",
            "données",
            "voix"
        ],
        "correct": [
            1
        ],
        "explanation": "Le trafic de données non critique et non interactif reçoit une priorité plus faible et utilise la bande passante restante.",
        "id": 191,
        "i18n": {
            "en": {
                "title": "189. What type of traffic is described as consisting of traffic that gets a lower priority if it is not mission-critical?",
                "text": "",
                "options": [
                    "video",
                    "data",
                    "voice"
                ],
                "explanation": "Data traffic that is not mission-critical and not interactive is assigned a lower priority, receiving leftover bandwidth."
            },
            "fr": {
                "title": "189. Quel type de trafic est décrit comme recevant une priorité plus faible lorsqu’il n’est pas critique pour la mission ?",
                "text": "",
                "options": [
                    "vidéo",
                    "données",
                    "voix"
                ],
                "explanation": "Le trafic de données non critique et non interactif reçoit une priorité plus faible et utilise la bande passante restante."
            }
        }
    },
    {
        "title": "190. Quelle table OSPF est identique sur tous les routeurs convergés dans une même zone OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "routage",
            "voisins",
            "adjacence",
            "topologie"
        ],
        "correct": [
            3
        ],
        "explanation": "La table de topologie, ou LSDB, doit être identique sur tous les routeurs convergés d’une même zone OSPF. Les tables de voisins et de routage sont propres à chaque routeur.",
        "id": 192,
        "i18n": {
            "en": {
                "title": "190. Which OSPF table is identical on all converged routers within the same OSPF area?",
                "text": "",
                "options": [
                    "routing",
                    "neighbor",
                    "adjacency",
                    "topology"
                ],
                "explanation": "The topology table (LSDB) must be identical on all converged routers within an OSPF area. Neighbor and routing tables are unique."
            },
            "fr": {
                "title": "190. Quelle table OSPF est identique sur tous les routeurs convergés dans une même zone OSPF ?",
                "text": "",
                "options": [
                    "routage",
                    "voisins",
                    "adjacence",
                    "topologie"
                ],
                "explanation": "La table de topologie, ou LSDB, doit être identique sur tous les routeurs convergés d’une même zone OSPF. Les tables de voisins et de routage sont propres à chaque routeur."
            }
        }
    },
    {
        "title": "191. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 192.168.10.45, comme destination 10.10.3.27 et comme protocole 80 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            0
        ],
        "explanation": "La source correspond à 192.168.10.0/24, la destination correspond à any, et le protocole 80 correspond à www en TCP ; le paquet est donc autorisé.",
        "id": 193,
        "i18n": {
            "en": {
                "title": "191. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 192.168.10.45, a destination address of 10.10.3.27, and a protocol of 80 is received on the interface, is the packet permitted or denied?",
                "text": "access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "Source matches 192.168.10.0/24, destination matches 'any', and protocol 80 matches www (TCP), so the packet is permitted."
            },
            "fr": {
                "title": "191. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 192.168.10.45, comme destination 10.10.3.27 et comme protocole 80 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "access-list 100 permit tcp 192.168.10.0 0.0.0.255 any eq www",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "La source correspond à 192.168.10.0/24, la destination correspond à any, et le protocole 80 correspond à www en TCP ; le paquet est donc autorisé."
            }
        }
    },
    {
        "title": "192. Quel protocole permet au gestionnaire d’interroger les agents pour accéder aux informations de la MIB de l’agent ?",
        "text": "",
        "images": [],
        "options": [
            "CBWFQ",
            "SYSLOG",
            "TFTP",
            "SNMP"
        ],
        "correct": [
            3
        ],
        "explanation": "SNMP permet au gestionnaire d’interroger les agents et de consulter la MIB au moyen de requêtes get.",
        "id": 194,
        "i18n": {
            "en": {
                "title": "192. What protocol allows the manager to poll agents to access information from the agent MIB?",
                "text": "",
                "options": [
                    "CBWFQ",
                    "SYSLOG",
                    "TFTP",
                    "SNMP"
                ],
                "explanation": "SNMP allows the manager to poll agents and query the MIB using 'get' requests."
            },
            "fr": {
                "title": "192. Quel protocole permet au gestionnaire d’interroger les agents pour accéder aux informations de la MIB de l’agent ?",
                "text": "",
                "options": [
                    "CBWFQ",
                    "SYSLOG",
                    "TFTP",
                    "SNMP"
                ],
                "explanation": "SNMP permet au gestionnaire d’interroger les agents et de consulter la MIB au moyen de requêtes get."
            }
        }
    },
    {
        "type": "matching",
        "title": "193. Associez chaque composant d’une connexion WAN à sa description. Toutes les options ne sont pas utilisées.",
        "text": "Cas 1",
        "pairs": [
            {
                "left": "Customer premises equipment",
                "right": "équipements et câblage interne situés à la périphérie de l’entreprise et connectés à une liaison opérateur"
            },
            {
                "left": "Data communications equipment",
                "right": "équipements qui placent les données sur la boucle locale"
            },
            {
                "left": "Data Terminal Equipment",
                "right": "équipements client qui transmettent les données d’un réseau client ou d’un ordinateur hôte vers le WAN"
            },
            {
                "left": "Point de démarcation",
                "right": "point établi dans un bâtiment ou un site pour séparer les équipements client des équipements du fournisseur de services"
            }
        ],
        "distractors": [
            "le point de présence, c’est-à-dire l’installation locale du fournisseur de services qui connecte le CPE au réseau du fournisseur"
        ],
        "explanation": "Composants WAN : le CPE correspond aux équipements et au câblage côté client en périphérie d’entreprise ; le DCE fournit l’interface de communication WAN ; le DTE transmet les données client vers le WAN ; le point de démarcation sépare les équipements client de ceux du fournisseur.",
        "id": 195,
        "i18n": {
            "en": {
                "title": "193. Match each component of a WAN connection to its description. (Not all options are used.)",
                "text": "Case 1",
                "pairs": [
                    {
                        "left": "Customer premises equipement",
                        "right": "devices and inside wiring located on the enterprise edge and which connect to a carrier link"
                    },
                    {
                        "left": "Data communications equipment",
                        "right": "devices that put data on the local loop"
                    },
                    {
                        "left": "Data Terminal Equipement",
                        "right": "customer devices that pass data from a customer network or host computer for transmission over the WAN"
                    },
                    {
                        "left": "Demarcation point",
                        "right": "a point that is established in a building or complex to separate customer equipment from service provider equipement"
                    }
                ],
                "distractors": [
                    "the point of presence that is the local service provider facility or building that connects the CPE to the provider network"
                ],
                "explanation": "WAN components: CPE is the customer-side equipment and wiring at the enterprise edge, DCE provides the WAN communication interface, DTE passes customer data toward the WAN, and the demarcation point separates customer equipment from provider equipment."
            },
            "fr": {
                "title": "193. Associez chaque composant d’une connexion WAN à sa description. Toutes les options ne sont pas utilisées.",
                "text": "Cas 1",
                "pairs": [
                    {
                        "left": "Customer premises equipment",
                        "right": "équipements et câblage interne situés à la périphérie de l’entreprise et connectés à une liaison opérateur"
                    },
                    {
                        "left": "Data communications equipment",
                        "right": "équipements qui placent les données sur la boucle locale"
                    },
                    {
                        "left": "Data Terminal Equipment",
                        "right": "équipements client qui transmettent les données d’un réseau client ou d’un ordinateur hôte vers le WAN"
                    },
                    {
                        "left": "Point de démarcation",
                        "right": "point établi dans un bâtiment ou un site pour séparer les équipements client des équipements du fournisseur de services"
                    }
                ],
                "distractors": [
                    "le point de présence, c’est-à-dire l’installation locale du fournisseur de services qui connecte le CPE au réseau du fournisseur"
                ],
                "explanation": "Composants WAN : le CPE correspond aux équipements et au câblage côté client en périphérie d’entreprise ; le DCE fournit l’interface de communication WAN ; le DTE transmet les données client vers le WAN ; le point de démarcation sépare les équipements client de ceux du fournisseur."
            }
        }
    },
    {
        "type": "matching",
        "title": "193. Associez chaque composant d’une connexion WAN à sa description. Toutes les options ne sont pas utilisées.",
        "text": "Cas 2",
        "pairs": [
            {
                "left": "Data communications equipment",
                "right": "équipement utilisé pour communiquer avec le fournisseur"
            },
            {
                "left": "Customer premises equipment",
                "right": "équipements et câblage interne situés à la périphérie de l’entreprise, détenus ou loués au fournisseur de services"
            },
            {
                "left": "Point de démarcation",
                "right": "point établi dans un bâtiment ou un site pour séparer les équipements client des équipements du fournisseur de services"
            },
            {
                "left": "Data Terminal Equipment",
                "right": "équipement qui connecte les LAN à l’équipement de communication WAN"
            }
        ],
        "distractors": [
            "le point de présence, c’est-à-dire l’installation locale du fournisseur de services qui connecte le CPE au réseau du fournisseur"
        ],
        "explanation": "Composants WAN : le CPE correspond aux équipements et au câblage côté client en périphérie d’entreprise ; le DCE est l’équipement utilisé pour communiquer avec le fournisseur ; le DTE connecte le LAN à l’équipement de communication WAN ; le point de démarcation sépare les équipements client de ceux du fournisseur.",
        "id": 215,
        "i18n": {
            "en": {
                "title": "193. Match each component of a WAN connection to its description. (Not all options are used.)",
                "text": "Case 2",
                "pairs": [
                    {
                        "left": "Data communications equipment",
                        "right": "device that is used to communicate with the provider"
                    },
                    {
                        "left": "Customer premises equipement",
                        "right": "devices and inside wiring located on the enterprise edge owner or leased from service provider"
                    },
                    {
                        "left": "Demarcation point",
                        "right": "a point that is established in a building or complex to separate customer equipment from service provider equipment"
                    },
                    {
                        "left": "Data Terminal Equipement",
                        "right": "device that connects LANs to the WAN communication device"
                    }
                ],
                "distractors": [
                    "the point of presence that is the local service provider facility or building that connects the CPE to the provider network"
                ],
                "explanation": "WAN components: CPE is the customer-side equipment and wiring at the enterprise edge, DCE is the device used to communicate with the provider, DTE connects the LAN to the WAN communication device, and the demarcation point separates customer equipment from provider equipment."
            },
            "fr": {
                "title": "193. Associez chaque composant d’une connexion WAN à sa description. Toutes les options ne sont pas utilisées.",
                "text": "Cas 2",
                "pairs": [
                    {
                        "left": "Data communications equipment",
                        "right": "équipement utilisé pour communiquer avec le fournisseur"
                    },
                    {
                        "left": "Customer premises equipment",
                        "right": "équipements et câblage interne situés à la périphérie de l’entreprise, détenus ou loués au fournisseur de services"
                    },
                    {
                        "left": "Point de démarcation",
                        "right": "point établi dans un bâtiment ou un site pour séparer les équipements client des équipements du fournisseur de services"
                    },
                    {
                        "left": "Data Terminal Equipment",
                        "right": "équipement qui connecte les LAN à l’équipement de communication WAN"
                    }
                ],
                "distractors": [
                    "le point de présence, c’est-à-dire l’installation locale du fournisseur de services qui connecte le CPE au réseau du fournisseur"
                ],
                "explanation": "Composants WAN : le CPE correspond aux équipements et au câblage côté client en périphérie d’entreprise ; le DCE est l’équipement utilisé pour communiquer avec le fournisseur ; le DTE connecte le LAN à l’équipement de communication WAN ; le point de démarcation sépare les équipements client de ceux du fournisseur."
            }
        }
    },
    {
        "title": "194. Quel type de trafic est décrit comme pouvant tolérer une certaine quantité de latence, de gigue et de perte sans effet perceptible ?",
        "text": "",
        "images": [],
        "options": [
            "voix",
            "vidéo",
            "données"
        ],
        "correct": [
            0
        ],
        "explanation": "La voix peut tolérer jusqu’à 150 ms de latence, 30 ms de gigue et 1 % de perte sans effet perceptible.",
        "id": 196,
        "i18n": {
            "en": {
                "title": "194. What type of traffic is described as being able to tolerate a certain amount of latency, jitter, and loss without any noticeable effects?",
                "text": "",
                "options": [
                    "voice",
                    "video",
                    "data"
                ],
                "explanation": "Voice can tolerate latency up to 150 ms, jitter up to 30 ms, and loss up to 1% without noticeable effects."
            },
            "fr": {
                "title": "194. Quel type de trafic est décrit comme pouvant tolérer une certaine quantité de latence, de gigue et de perte sans effet perceptible ?",
                "text": "",
                "options": [
                    "voix",
                    "vidéo",
                    "données"
                ],
                "explanation": "La voix peut tolérer jusqu’à 150 ms de latence, 30 ms de gigue et 1 % de perte sans effet perceptible."
            }
        }
    },
    {
        "title": "195. Quel terme décrit l’ajout d’une valeur dans l’en-tête du paquet, aussi près que possible de la source, afin que le paquet corresponde à une politique définie ?",
        "text": "",
        "images": [],
        "options": [
            "policing",
            "marquage du trafic",
            "détection précoce aléatoire pondérée (WRED)",
            "lissage de trafic",
            "tail drop"
        ],
        "correct": [
            1
        ],
        "explanation": "Le marquage du trafic ajoute une valeur, CoS ou DSCP, dans l’en-tête du paquet afin que les équipements appliquent des politiques de transfert. Il doit être fait près de la source.",
        "id": 197,
        "i18n": {
            "en": {
                "title": "195. What term describes adding a value to the packet header, as close to the source as possible, so that the packet matches a defined policy?",
                "text": "",
                "options": [
                    "policing",
                    "traffic marking",
                    "weighted random early detection (WRED)",
                    "traffic shaping",
                    "tail drop"
                ],
                "explanation": "Traffic marking adds a value (CoS or DSCP) to the packet header so devices can apply forwarding policies; it should be done close to the source."
            },
            "fr": {
                "title": "195. Quel terme décrit l’ajout d’une valeur dans l’en-tête du paquet, aussi près que possible de la source, afin que le paquet corresponde à une politique définie ?",
                "text": "",
                "options": [
                    "policing",
                    "marquage du trafic",
                    "détection précoce aléatoire pondérée (WRED)",
                    "lissage de trafic",
                    "tail drop"
                ],
                "explanation": "Le marquage du trafic ajoute une valeur, CoS ou DSCP, dans l’en-tête du paquet afin que les équipements appliquent des politiques de transfert. Il doit être fait près de la source."
            }
        }
    },
    {
        "title": "196. Quels sont trois facteurs liés au trafic qui influencent le choix d’un type particulier de liaison WAN ? (Choisissez trois réponses.)",
        "text": "",
        "images": [],
        "options": [
            "coût de la liaison",
            "volume de trafic",
            "distance entre les sites",
            "fiabilité",
            "besoins de sécurité",
            "type de trafic"
        ],
        "correct": [
            1,
            4,
            5
        ],
        "explanation": "Les facteurs liés au trafic incluent le type de trafic, le volume de trafic, les exigences de qualité et les exigences de sécurité.",
        "id": 198,
        "i18n": {
            "en": {
                "title": "196. Which three traffic-related factors would influence selecting a particular WAN link type? (Choose three.)",
                "text": "",
                "options": [
                    "cost of the link",
                    "amount of traffic",
                    "distance between sites",
                    "reliability",
                    "security needs",
                    "type of traffic"
                ],
                "explanation": "Traffic-related factors include the type of traffic, amount of traffic, quality requirements, and security requirements."
            },
            "fr": {
                "title": "196. Quels sont trois facteurs liés au trafic qui influencent le choix d’un type particulier de liaison WAN ? (Choisissez trois réponses.)",
                "text": "",
                "options": [
                    "coût de la liaison",
                    "volume de trafic",
                    "distance entre les sites",
                    "fiabilité",
                    "besoins de sécurité",
                    "type de trafic"
                ],
                "explanation": "Les facteurs liés au trafic incluent le type de trafic, le volume de trafic, les exigences de qualité et les exigences de sécurité."
            }
        }
    },
    {
        "title": "197. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour associer les adresses locales internes au pool d’adresses disponible pour la traduction PAT ?",
        "text": "",
        "images": [],
        "options": [
            "ip nat inside source list ACCTNG pool POOL-STAT",
            "ip nat translation timeout 36000",
            "ip nat inside source list 14 pool POOL-STAT overload",
            "ip nat inside source static 172.19.89.13 198.133.219.65"
        ],
        "correct": [
            2
        ],
        "explanation": "Le mot-clé overload associe les adresses locales internes au pool pour la traduction PAT.",
        "id": 199,
        "i18n": {
            "en": {
                "title": "197. What command would be used as part of configuring NAT or PAT to link the inside local addresses to the pool of addresses available for PAT translation?",
                "text": "",
                "options": [
                    "ip nat inside source list ACCTNG pool POOL-STAT",
                    "ip nat translation timeout 36000",
                    "ip nat inside source list 14 pool POOL-STAT overload",
                    "ip nat inside source static 172.19.89.13 198.133.219.65"
                ],
                "explanation": "The 'overload' keyword links inside local addresses to the pool for PAT translation."
            },
            "fr": {
                "title": "197. Quelle commande serait utilisée dans la configuration de NAT ou PAT pour associer les adresses locales internes au pool d’adresses disponible pour la traduction PAT ?",
                "text": "",
                "options": [
                    "ip nat inside source list ACCTNG pool POOL-STAT",
                    "ip nat translation timeout 36000",
                    "ip nat inside source list 14 pool POOL-STAT overload",
                    "ip nat inside source static 172.19.89.13 198.133.219.65"
                ],
                "explanation": "Le mot-clé overload associe les adresses locales internes au pool pour la traduction PAT."
            }
        }
    },
    {
        "title": "198. Quel protocole est un protocole de découverte de couche 2 neutre vis-à-vis du constructeur qui doit être configuré séparément pour transmettre et recevoir des paquets d’information ?",
        "text": "",
        "images": [],
        "options": [
            "SNMP",
            "MPLS",
            "LLDP",
            "NTP"
        ],
        "correct": [
            2
        ],
        "explanation": "LLDP est neutre vis-à-vis du constructeur et nécessite une configuration séparée pour émettre et recevoir, avec lldp transmit et lldp receive.",
        "id": 200,
        "i18n": {
            "en": {
                "title": "198. What protocol is a vendor-neutral Layer 2 discovery protocol that must be configured separately to transmit and receive information packets?",
                "text": "",
                "options": [
                    "SNMP",
                    "MPLS",
                    "LLDP",
                    "NTP"
                ],
                "explanation": "LLDP is vendor-neutral and requires separate configuration to transmit and receive (lldp transmit / lldp receive)."
            },
            "fr": {
                "title": "198. Quel protocole est un protocole de découverte de couche 2 neutre vis-à-vis du constructeur qui doit être configuré séparément pour transmettre et recevoir des paquets d’information ?",
                "text": "",
                "options": [
                    "SNMP",
                    "MPLS",
                    "LLDP",
                    "NTP"
                ],
                "explanation": "LLDP est neutre vis-à-vis du constructeur et nécessite une configuration séparée pour émettre et recevoir, avec lldp transmit et lldp receive."
            }
        }
    },
    {
        "title": "199. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 172.18.20.55, comme destination 172.18.20.3 et comme protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
        "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp</pre></code>",
        "images": [],
        "options": [
            "autorisé",
            "refusé"
        ],
        "correct": [
            1
        ],
        "explanation": "La source 172.18.20.55 est hors de la plage 172.18.20.0-31 et la destination 172.18.20.3 est hors de la plage 172.18.20.32-63 ; le paquet est donc refusé.",
        "id": 201,
        "i18n": {
            "en": {
                "title": "199. An ACL is applied inbound on a router interface. The ACL consists of a single entry. If a packet with a source address of 172.18.20.55, a destination address of 172.18.20.3, and a protocol of 21 is received on the interface, is the packet permitted or denied?",
                "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp</pre></code>",
                "options": [
                    "permitted",
                    "denied"
                ],
                "explanation": "Source 172.18.20.55 is outside 172.18.20.0-31 and destination 172.18.20.3 is outside 172.18.20.32-63, so the packet is denied."
            },
            "fr": {
                "title": "199. Une ACL est appliquée en entrée sur une interface de routeur. Elle contient une seule entrée. Si un paquet ayant comme source 172.18.20.55, comme destination 172.18.20.3 et comme protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
                "text": "<pre><code>access-list 210 permit tcp 172.18.20.0 0.0.0.31 172.18.20.32 0.0.0.31 eq ftp</pre></code>",
                "options": [
                    "autorisé",
                    "refusé"
                ],
                "explanation": "La source 172.18.20.55 est hors de la plage 172.18.20.0-31 et la destination 172.18.20.3 est hors de la plage 172.18.20.32-63 ; le paquet est donc refusé."
            }
        }
    },
    {
        "title": "200. Reportez-vous à l’illustration. La politique d’entreprise exige que l’accès au réseau de serveurs soit limité aux employés internes uniquement. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/10/i350786v1n1_C3M4-Diagram.jpg"
        ],
        "options": [
            "ACL étendue en sortie sur R2 S0/0/1",
            "ACL standard en sortie sur R2 S0/0/0",
            "ACL standard en entrée sur l’interface WAN de R2 connectée à Internet",
            "ACL étendue en entrée sur R2 S0/0/0"
        ],
        "correct": [
            0
        ],
        "explanation": "Une ACL étendue filtre par source et destination, et une ACL en sortie sur R2 S0/0/1 sert de point de contrôle unique pour le trafic provenant de plusieurs interfaces et destiné au réseau de serveurs.",
        "id": 202,
        "i18n": {
            "en": {
                "title": "200. Refer to the exhibit. Corporate policy demands that access to the server network be restricted to internal employees only. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "extended ACL outbound on R2 S0/0/1",
                    "standard ACL outbound on R2 S0/0/0",
                    "standard ACL inbound on R2 WAN interface connecting to the internet",
                    "extended ACL inbound on R2 S0/0/0"
                ],
                "explanation": "An extended ACL filters by source and destination, and an outbound ACL on R2 S0/0/1 acts as a single choke point for traffic arriving from multiple inbound interfaces destined to the server network."
            },
            "fr": {
                "title": "200. Reportez-vous à l’illustration. La politique d’entreprise exige que l’accès au réseau de serveurs soit limité aux employés internes uniquement. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL étendue en sortie sur R2 S0/0/1",
                    "ACL standard en sortie sur R2 S0/0/0",
                    "ACL standard en entrée sur l’interface WAN de R2 connectée à Internet",
                    "ACL étendue en entrée sur R2 S0/0/0"
                ],
                "explanation": "Une ACL étendue filtre par source et destination, et une ACL en sortie sur R2 S0/0/1 sert de point de contrôle unique pour le trafic provenant de plusieurs interfaces et destiné au réseau de serveurs."
            }
        }
    },
    {
        "title": "201. Un technicien travaille sur un commutateur de couche 2 et remarque qu’un message %CDP-4-DUPLEX_MISMATCH apparaît constamment pour le port G0/5. Quelle commande doit-il exécuter sur le commutateur pour commencer le dépannage ?",
        "text": "",
        "images": [],
        "options": [
            "show cdp neighbors",
            "show ip interface brief",
            "show interface g0/5",
            "show cdp"
        ],
        "correct": [
            2
        ],
        "explanation": "show interface g0/5 affiche des informations détaillées, dont le mode duplex, ce qui aide à identifier l’incompatibilité.",
        "id": 203,
        "i18n": {
            "en": {
                "title": "201. A technician is working on a Layer 2 switch and notices that a %CDP-4-DUPLEX_MISMATCH message keeps appearing for port G0/5. What command should the technician issue on the switch to start the troubleshooting process?",
                "text": "",
                "options": [
                    "show cdp neighbors",
                    "show ip interface brief",
                    "show interface g0/5",
                    "show cdp"
                ],
                "explanation": "show interface g0/5 shows detailed info including the duplex mode, helping identify the mismatch."
            },
            "fr": {
                "title": "201. Un technicien travaille sur un commutateur de couche 2 et remarque qu’un message %CDP-4-DUPLEX_MISMATCH apparaît constamment pour le port G0/5. Quelle commande doit-il exécuter sur le commutateur pour commencer le dépannage ?",
                "text": "",
                "options": [
                    "show cdp neighbors",
                    "show ip interface brief",
                    "show interface g0/5",
                    "show cdp"
                ],
                "explanation": "show interface g0/5 affiche des informations détaillées, dont le mode duplex, ce qui aide à identifier l’incompatibilité."
            }
        }
    },
    {
        "title": "202. Quelle ressource virtuelle serait installée sur un serveur réseau pour fournir un accès direct aux ressources matérielles ?",
        "text": "",
        "images": [],
        "options": [
            "VMware Fusion",
            "une console de gestion",
            "un VLAN dédié",
            "un hyperviseur de type 1"
        ],
        "correct": [
            3
        ],
        "explanation": "Un hyperviseur de type 1 est installé directement sur le matériel et dispose d’un accès direct aux ressources matérielles.",
        "id": 204,
        "i18n": {
            "en": {
                "title": "202. Which virtual resource would be installed on a network server to provide direct access to hardware resources?",
                "text": "",
                "options": [
                    "VMware Fusion",
                    "a management console",
                    "a dedicated VLAN",
                    "a Type 1 hypervisor"
                ],
                "explanation": "A Type 1 hypervisor is installed directly on the hardware and has direct access to hardware resources."
            },
            "fr": {
                "title": "202. Quelle ressource virtuelle serait installée sur un serveur réseau pour fournir un accès direct aux ressources matérielles ?",
                "text": "",
                "options": [
                    "VMware Fusion",
                    "une console de gestion",
                    "un VLAN dédié",
                    "un hyperviseur de type 1"
                ],
                "explanation": "Un hyperviseur de type 1 est installé directement sur le matériel et dispose d’un accès direct aux ressources matérielles."
            }
        }
    },
    {
        "title": "203. Reportez-vous à l’illustration. Un administrateur réseau a configuré une ACL standard pour permettre uniquement aux deux réseaux LAN connectés à R1 d’accéder au réseau relié à l’interface R2 G0/1. En suivant les bonnes pratiques, où l’ACL standard doit-elle être appliquée ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2020/01/i282155v1n2_282152.png"
        ],
        "options": [
            "R2 G0/1 en entrée",
            "R2 S0/0/1 en sortie",
            "R1 S0/0/0 en sortie",
            "R2 G0/1 en sortie",
            "R2 G0/0 en sortie"
        ],
        "correct": [
            3
        ],
        "explanation": "Une ACL standard se place près de la destination. La destination est le réseau sur R2 G0/1, il faut donc l’appliquer en sortie sur R2 G0/1.",
        "id": 205,
        "i18n": {
            "en": {
                "title": "203. Refer to the exhibit. A network administrator has configured a standard ACL to permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface. When following the best practices, in what location should the standard ACL be applied?",
                "text": "",
                "options": [
                    "R2 G0/1 inbound",
                    "R2 S0/0/1 outbound",
                    "R1 S0/0/0 outbound",
                    "R2 G0/1 outbound",
                    "R2 G0/0 outbound"
                ],
                "explanation": "A standard ACL is placed close to the destination. The destination is the network on R2 G0/1, so apply it outbound on R2 G0/1."
            },
            "fr": {
                "title": "203. Reportez-vous à l’illustration. Un administrateur réseau a configuré une ACL standard pour permettre uniquement aux deux réseaux LAN connectés à R1 d’accéder au réseau relié à l’interface R2 G0/1. En suivant les bonnes pratiques, où l’ACL standard doit-elle être appliquée ?",
                "text": "",
                "options": [
                    "R2 G0/1 en entrée",
                    "R2 S0/0/1 en sortie",
                    "R1 S0/0/0 en sortie",
                    "R2 G0/1 en sortie",
                    "R2 G0/0 en sortie"
                ],
                "explanation": "Une ACL standard se place près de la destination. La destination est le réseau sur R2 G0/1, il faut donc l’appliquer en sortie sur R2 G0/1."
            }
        }
    },
    {
        "title": "204. Quelle base de données OSPF est identique sur tous les routeurs convergés d’une même zone OSPF ?",
        "text": "",
        "images": [],
        "options": [
            "voisins",
            "transfert",
            "état de liens",
            "adjacence"
        ],
        "correct": [
            2
        ],
        "explanation": "La base de données d’état de liens liste tous les routeurs d’une zone et est identique sur tous les routeurs OSPF de cette zone.",
        "id": 206,
        "i18n": {
            "en": {
                "title": "204. Which OSPF database is identical on all converged routers within the same OSPF area?",
                "text": "",
                "options": [
                    "neighbor",
                    "forwarding",
                    "link-state",
                    "adjacency"
                ],
                "explanation": "The link-state database lists all routers within an area and is identical across all OSPF routers in that area."
            },
            "fr": {
                "title": "204. Quelle base de données OSPF est identique sur tous les routeurs convergés d’une même zone OSPF ?",
                "text": "",
                "options": [
                    "voisins",
                    "transfert",
                    "état de liens",
                    "adjacence"
                ],
                "explanation": "La base de données d’état de liens liste tous les routeurs d’une zone et est identique sur tous les routeurs OSPF de cette zone."
            }
        }
    },
    {
        "title": "205. Quelles sont deux caractéristiques à prendre en compte lors de la création d’une ACL nommée ? (Choisissez deux réponses.)",
        "text": "",
        "images": [],
        "options": [
            "Utiliser des caractères alphanumériques si nécessaire.",
            "Utiliser des caractères spéciaux, comme ! ou *, pour montrer l’importance de l’ACL.",
            "Modifier l’ACL à l’aide d’un éditeur de texte.",
            "Choisir un nom descriptif pour l’ACL.",
            "Utiliser une espace pour séparer le nom de la description afin de faciliter la lecture."
        ],
        "correct": [
            0,
            3
        ],
        "explanation": "Les ACL nommées peuvent contenir des caractères alphanumériques, doivent être descriptives, ne peuvent pas contenir d’espaces ni de ponctuation, et sont souvent écrites en majuscules.",
        "id": 207,
        "i18n": {
            "en": {
                "title": "205. What are two features to consider when creating a named ACL? (Choose two.)",
                "text": "",
                "options": [
                    "Use alphanumeric characters if needed.",
                    "Use special characters, such as ! or * to show the importance of the ACL.",
                    "Modify the ACL using a text editor.",
                    "Be descriptive when creating the ACL name.",
                    "Use a space for ease of reading to separate the name from the description"
                ],
                "explanation": "Named ACLs can contain alphanumeric characters, should be descriptive, cannot contain spaces or punctuation, and are best written in capital letters."
            },
            "fr": {
                "title": "205. Quelles sont deux caractéristiques à prendre en compte lors de la création d’une ACL nommée ? (Choisissez deux réponses.)",
                "text": "",
                "options": [
                    "Utiliser des caractères alphanumériques si nécessaire.",
                    "Utiliser des caractères spéciaux, comme ! ou *, pour montrer l’importance de l’ACL.",
                    "Modifier l’ACL à l’aide d’un éditeur de texte.",
                    "Choisir un nom descriptif pour l’ACL.",
                    "Utiliser une espace pour séparer le nom de la description afin de faciliter la lecture."
                ],
                "explanation": "Les ACL nommées peuvent contenir des caractères alphanumériques, doivent être descriptives, ne peuvent pas contenir d’espaces ni de ponctuation, et sont souvent écrites en majuscules."
            }
        }
    },
    {
        "type": "matching",
        "title": "206. Associez la méthode d’API RESTful à la fonction CRUD.",
        "text": "",
        "pairs": [
            {
                "left": "POST",
                "right": "Créer"
            },
            {
                "left": "GET",
                "right": "Lire"
            },
            {
                "left": "PUT/PATCH",
                "right": "Mettre à jour"
            },
            {
                "left": "DELETE",
                "right": "Supprimer"
            }
        ],
        "distractors": [],
        "explanation": "POST = créer, GET = lire, PUT/PATCH = mettre à jour, DELETE = supprimer.",
        "id": 208,
        "i18n": {
            "en": {
                "title": "206. Match the RESTful API method to CRUD function.",
                "text": "",
                "pairs": [
                    {
                        "left": "POST",
                        "right": "Create"
                    },
                    {
                        "left": "GET",
                        "right": "Read"
                    },
                    {
                        "left": "PUT/PATCH",
                        "right": "Update"
                    },
                    {
                        "left": "DELETE",
                        "right": "Delete"
                    }
                ],
                "distractors": [],
                "explanation": "POST = Create, GET = Read, PUT/PATCH = Update, DELETE = Delete."
            },
            "fr": {
                "title": "206. Associez la méthode d’API RESTful à la fonction CRUD.",
                "text": "",
                "pairs": [
                    {
                        "left": "POST",
                        "right": "Créer"
                    },
                    {
                        "left": "GET",
                        "right": "Lire"
                    },
                    {
                        "left": "PUT/PATCH",
                        "right": "Mettre à jour"
                    },
                    {
                        "left": "DELETE",
                        "right": "Supprimer"
                    }
                ],
                "distractors": [],
                "explanation": "POST = créer, GET = lire, PUT/PATCH = mettre à jour, DELETE = supprimer."
            }
        }
    },
    {
        "title": "207. Quel type de trafic est décrit comme nécessitant au moins 384 Kbit/s de bande passante ?",
        "text": "",
        "images": [],
        "options": [
            "voix",
            "données",
            "vidéo"
        ],
        "correct": [
            2
        ],
        "explanation": "La vidéo exige au moins 384 Kbit/s de bande passante, tandis que la voix exige au minimum 30 Kbit/s.",
        "id": 209,
        "i18n": {
            "en": {
                "title": "207. What type of traffic is described as requiring at least 384 Kbps of bandwidth?",
                "text": "",
                "options": [
                    "voice",
                    "data",
                    "video"
                ],
                "explanation": "Video requires at least 384 Kbps of bandwidth, while voice requires a minimum of 30 Kbps."
            },
            "fr": {
                "title": "207. Quel type de trafic est décrit comme nécessitant au moins 384 Kbit/s de bande passante ?",
                "text": "",
                "options": [
                    "voix",
                    "données",
                    "vidéo"
                ],
                "explanation": "La vidéo exige au moins 384 Kbit/s de bande passante, tandis que la voix exige au minimum 30 Kbit/s."
            }
        }
    },
    {
        "title": "208. Quelle étape du processus de routage à état de liens est décrite par un routeur qui insère les meilleurs chemins dans la table de routage ?",
        "text": "",
        "images": [],
        "options": [
            "déclarer un voisin inaccessible",
            "exécuter l’algorithme SPF",
            "équilibrer la charge sur des chemins à coût égal",
            "choisir la meilleure route"
        ],
        "correct": [
            3
        ],
        "explanation": "Choisir la meilleure route insère dans la table de routage les plus courts chemins issus de l’arbre SPF, sous réserve de la distance administrative.",
        "id": 210,
        "i18n": {
            "en": {
                "title": "208. Which step in the link-state routing process is described by a router inserting best paths into the routing table?",
                "text": "",
                "options": [
                    "declaring a neighbor to be inaccessible",
                    "executing the SPF algorithm",
                    "load balancing equal-cost paths",
                    "choosing the best route"
                ],
                "explanation": "Choosing the best route inserts the shortest paths from the SPF tree into the routing table (subject to administrative distance)."
            },
            "fr": {
                "title": "208. Quelle étape du processus de routage à état de liens est décrite par un routeur qui insère les meilleurs chemins dans la table de routage ?",
                "text": "",
                "options": [
                    "déclarer un voisin inaccessible",
                    "exécuter l’algorithme SPF",
                    "équilibrer la charge sur des chemins à coût égal",
                    "choisir la meilleure route"
                ],
                "explanation": "Choisir la meilleure route insère dans la table de routage les plus courts chemins issus de l’arbre SPF, sous réserve de la distance administrative."
            }
        }
    },
    {
        "title": "209. Anycompany a décidé de réduire son empreinte environnementale en diminuant les coûts énergétiques, en déménageant dans des locaux plus petits et en favorisant le télétravail. Quel service ou technologie soutient cette exigence ?",
        "text": "",
        "images": [],
        "options": [
            "centre de données",
            "virtualisation",
            "services cloud",
            "serveurs dédiés"
        ],
        "correct": [
            2
        ],
        "explanation": "Les services cloud réduisent les équipements informatiques sur site, les coûts d’énergie et la taille des locaux, tout en permettant le télétravail.",
        "id": 211,
        "i18n": {
            "en": {
                "title": "209. Anycompany has decided to reduce its environmental footprint by reducing energy costs, moving to a smaller facility, and promoting telecommuting. What service or technology would support this requirement?",
                "text": "",
                "options": [
                    "data center",
                    "virtualization",
                    "cloud services",
                    "dedicated servers"
                ],
                "explanation": "Cloud services reduce onsite IT equipment, energy costs, and facility size while enabling telecommuting."
            },
            "fr": {
                "title": "209. Anycompany a décidé de réduire son empreinte environnementale en diminuant les coûts énergétiques, en déménageant dans des locaux plus petits et en favorisant le télétravail. Quel service ou technologie soutient cette exigence ?",
                "text": "",
                "options": [
                    "centre de données",
                    "virtualisation",
                    "services cloud",
                    "serveurs dédiés"
                ],
                "explanation": "Les services cloud réduisent les équipements informatiques sur site, les coûts d’énergie et la taille des locaux, tout en permettant le télétravail."
            }
        }
    },
    {
        "title": "210. Quelle technique QoS lisse le débit de sortie des paquets ?",
        "text": "",
        "images": [],
        "options": [
            "policing",
            "shaping",
            "détection précoce aléatoire pondérée",
            "Integrated Services (IntServ)",
            "marquage"
        ],
        "correct": [
            1
        ],
        "explanation": "Le traffic shaping met en mémoire tampon les paquets excédentaires et les planifie dans le temps, ce qui lisse le débit de sortie. Le policing supprime immédiatement l’excès de trafic.",
        "id": 212,
        "i18n": {
            "en": {
                "title": "210. Which QoS technique smooths packet output rate?",
                "text": "",
                "options": [
                    "policing",
                    "shaping",
                    "weighted random early detection",
                    "Integrated Services (IntServ)",
                    "marking"
                ],
                "explanation": "Traffic shaping buffers excess packets and schedules them over time, smoothing the output rate. Policing drops excess traffic immediately."
            },
            "fr": {
                "title": "210. Quelle technique QoS lisse le débit de sortie des paquets ?",
                "text": "",
                "options": [
                    "policing",
                    "shaping",
                    "détection précoce aléatoire pondérée",
                    "Integrated Services (IntServ)",
                    "marquage"
                ],
                "explanation": "Le traffic shaping met en mémoire tampon les paquets excédentaires et les planifie dans le temps, ce qui lisse le débit de sortie. Le policing supprime immédiatement l’excès de trafic."
            }
        }
    },
    {
        "title": "211. Reportez-vous à l’illustration. L’entreprise a fourni des téléphones IP aux employés du réseau 192.168.10.0/24 et le trafic voix doit être prioritaire sur le trafic données. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
        "text": "",
        "images": [
            "https://itexamanswers.net/wp-content/uploads/2019/12/i350679v1n1_C3M4-Diagram.jpg"
        ],
        "options": [
            "ACL étendue en entrée sur R1 G0/0",
            "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
            "ACL étendue en sortie sur R2 S0/0/1",
            "ACL étendues en entrée sur R1 G0/0 et G0/1"
        ],
        "correct": [
            0
        ],
        "explanation": "Une ACL étendue placée près de la source, en entrée sur R1 G0/0, filtre et priorise le trafic voix provenant du réseau 192.168.10.0/24.",
        "id": 213,
        "i18n": {
            "en": {
                "title": "211. Refer to the exhibit. The company has provided IP phones to employees on the 192.168.10.0/24 network and the voice traffic will need priority over data traffic. What is the best ACL type and placement to use in this situation?",
                "text": "",
                "options": [
                    "extended ACL inbound on R1 G0/0",
                    "extended ACL outbound on R2 WAN interface towards the internet",
                    "extended ACL outbound on R2 S0/0/1",
                    "extended ACLs inbound on R1 G0/0 and G0/1"
                ],
                "explanation": "An extended ACL placed close to the source (inbound on R1 G0/0) filters and prioritizes the voice traffic from the 192.168.10.0/24 network."
            },
            "fr": {
                "title": "211. Reportez-vous à l’illustration. L’entreprise a fourni des téléphones IP aux employés du réseau 192.168.10.0/24 et le trafic voix doit être prioritaire sur le trafic données. Quel type d’ACL et quel emplacement sont les plus adaptés ?",
                "text": "",
                "options": [
                    "ACL étendue en entrée sur R1 G0/0",
                    "ACL étendue en sortie sur l’interface WAN de R2 vers Internet",
                    "ACL étendue en sortie sur R2 S0/0/1",
                    "ACL étendues en entrée sur R1 G0/0 et G0/1"
                ],
                "explanation": "Une ACL étendue placée près de la source, en entrée sur R1 G0/0, filtre et priorise le trafic voix provenant du réseau 192.168.10.0/24."
            }
        }
    },
    {
        "title": "212. Un technicien réseau configure SNMPv3 et a défini un niveau de sécurité SNMPv3 authPriv. Quelle est une caractéristique de ce niveau ?",
        "text": "",
        "images": [],
        "options": [
            "authentifie un paquet en utilisant uniquement l’algorithme SHA",
            "authentifie un paquet par correspondance de chaîne avec le nom d’utilisateur ou la chaîne de communauté",
            "authentifie un paquet en utilisant soit la méthode HMAC avec MD5, soit la méthode SHA",
            "authentifie un paquet en utilisant soit l’algorithme HMAC MD5, soit HMAC SHA, ainsi qu’un nom d’utilisateur"
        ],
        "correct": [
            3
        ],
        "explanation": "Le niveau authPriv combine l’authentification, HMAC-MD5 ou HMAC-SHA avec nom d’utilisateur, et le chiffrement, DES, 3DES ou AES, pour la protection la plus élevée.",
        "id": 214,
        "i18n": {
            "en": {
                "title": "212. A network technician is configuring SNMPv3 and has set a security level of SNMPv3 authPriv. What is a feature of using this level?",
                "text": "",
                "options": [
                    "authenticates a packet by using the SHA algorithm only",
                    "authenticates a packet by a string match of the username or community string",
                    "authenticates a packet by using either the HMAC with MD5 method or the SHA method",
                    "authenticates a packet by using either the HMAC MD5 or HMAC SHA algorithms and a username"
                ],
                "explanation": "The authPriv level combines authentication (HMAC-MD5 or HMAC-SHA with a username) and encryption (DES, 3DES, or AES) for the highest protection."
            },
            "fr": {
                "title": "212. Un technicien réseau configure SNMPv3 et a défini un niveau de sécurité SNMPv3 authPriv. Quelle est une caractéristique de ce niveau ?",
                "text": "",
                "options": [
                    "authentifie un paquet en utilisant uniquement l’algorithme SHA",
                    "authentifie un paquet par correspondance de chaîne avec le nom d’utilisateur ou la chaîne de communauté",
                    "authentifie un paquet en utilisant soit la méthode HMAC avec MD5, soit la méthode SHA",
                    "authentifie un paquet en utilisant soit l’algorithme HMAC MD5, soit HMAC SHA, ainsi qu’un nom d’utilisateur"
                ],
                "explanation": "Le niveau authPriv combine l’authentification, HMAC-MD5 ou HMAC-SHA avec nom d’utilisateur, et le chiffrement, DES, 3DES ou AES, pour la protection la plus élevée."
            }
        }
    }
];
