const questionnaire_1 = {
    Catégories: "informations generale",
    description: "les informations general par rapport a vous et a votre societé",
    questions : [
    {
    question :"Nom de la société",
    type : 'champs-reponse'
    },
    {
    question:"Nom et prénoms du répondant",
    type : 'champs-reponse'
    },
    {
    question:"Fonction/Rôle dans la structure",
    type : 'champs-reponse'
    },
    {
    question:"Dans quel secteur d'activité opérez-vous?",
    type : 'champs-reponse'
    },
    {
    question:"E-mail",
    type : 'champs-reponse'
    },
    {
    question:"Pouvez-vous décrire en une phrase le produit/service que vous proposez à vos clients ?",
    type : 'champs-reponse'
    },
    {
    question :"Quel est votre chiffre d'affaires actuel ?",
    type : "choix-multiple",
    1:{text:"Pas de chiffre d'affaires", score:1},
    2:{text:"Inférieur à 50 millions de FCFA", score:2},
    3:{text:"Entre 50 et 150 millions de FCFA", score:3},
    4:{text:"Entre 150 et 500 millions de FCFA", score:4},
    5:{text:"Plus de 500 millions de FCFA", score:5},
    },
    {
    question:"Combien de personnes sont employées par votre entreprise ?",
    type : "choix-multiple",
    1:{text:"Aucun employé (uniquement les fondateurs)", score:1},
    2:{text:"Entre 1 et 5 employés", score:2},
    3:{text:"Entre 6 et 20 employés", score:3},
    4:{text:"Entre 21 et 100 employés", score:4},
    5:{text:"Plus de 100 employés", score:5},
    },
    ]
}
const questionnaire_2 = {  
    Catégories: "Développement commercial",
    Titre : "Bloc", 
    questions : [
    {
    question:"Développement commercial",
    type : 'champs-reponse'
    },
    {
    question:"Situation actuelle",
    type : 'champs-reponse'
    },
    {
    question:"Avez-vous déjà des clients réguliers ?",
    type : "choix-multiple",
    1:{text:"oui", score:1},
    2:{text:"non", score:2},
    },
    {
    question:"Comment décririez-vous votre clientèle actuelle ? (plusieurs réponses possibles)",
    type : "multiple-reponse",
    1:{text:"B2C", score:1},
    2:{text:"B2G - Petites entités (Associations & économie collaborative & institutions publiques,collectivités, ministères, etc.)", score:2},
    3:{text:"B2B - TPE et PME", score:3},
    4:{text:"B2B & B2G - Grandes entités nationales", score:4},
    5:{text:"B2B - Grands comptes internationaux", score:5},
    },
    {
    question:"Quelle est la taille du marché potentiel global (mondial) dans lequel s'insère votre entreprise ?",
    type : "choix-multiple",
    1:{text:"Ne sais pas", score:1},
    2:{text:"Nulle (vous n'avez pas encore de clients)", score:2},
    3:{text:"Quelques clients", score:3},
    4:{text:"Part de marché significative", score:4},
    5:{text:"Top 5", score:5},
    6:{text:"Leader sur votre marché", score:6}
    },
    {
        question: "Quelles sont vos cibles principales ?",
        type :"champs-reponse"
    },
    {
    question:"Connaissez-vous vos cibles et avez-vous défini un plan d'action ?",
    type : "choix-multiple",
    1:{text:"Non, vous êtes en train d'évaluer les cibles", score:1},
    2:{text:"Oui, vous avez identifié vos cibles", score:2},
    3:{text:"Oui, vous avez identifié vos cibles et avez défini un plan d'action", score:3},
    4:{text:"Oui, vous avez identifié vos cibles, défini un plan d'action et suivez les actions régulièrement", score:4},
    5:{text:"Oui, vous avez un processus régulier de mise à jour de vos cibles, du plan d'action etdes résultats", score:5},
    },
    {
    question:"Comment pouvez-vous qualifier votre concurrence ?",
    type : "choix-multiple",
    1:{text:"Inexistante", score:1},
    2:{text:"Faible", score:2},
    3:{text:"Saine", score:3},
    4:{text:"Rude", score:4},
    5:{text:"Coriace et internationale", score:5},
    6:{text:"Ne sais pas", score:6}
    },
    {
    question:"Quelles sont, selon vous, le niveau des barrières à l'entrée pour vos concurrents dans le(s) marché(s) exploité(s) actuellement ?",
    type : "choix-multiple",
    1:{text:"Très faibles, il n'existe pas d'investissement et de temps à consacrer pour rentrer sur votre marché", score:1},
    2:{text:"Faibles, il y a peu d'investissement et de temps à consacrer", score:2},
    3:{text:"Moyennes, il faut y consacrer des investissements et du temps", score:3},
    4:{text:"Elevées, les investissements et le temps nécessaire sont significatifs", score:4},
    5:{text:"Très élevées, les investissements et le temps nécessaire sont très significatifs", score:5},
    },
    {
    question:"Parmi les propositions suivantes, laquelle décrit le mieux la situation de votre département commercial ?",
    type : "choix-multiple",
    1:{text:"Vous ne disposez pas des ressources ou compétences pour générer les ventes ciblées", score:1},
    2:{text:"Vos équipes de vente sont débordées par le carnet de commande (prise de retard dans les commandes et/ou les signatures de contrats)", score:2},
    3: {text:"Vous avez du mal à recruter des commerciaux en parallèle de l'augmentation de vos ventes", score:3},
    4:{text:"Votre plan s'exécute comme vous l'aviez prévu", score:4},
    5:{text:"Vos objectifs de croissance des ventes sont dépassés tous les mois", score:5},
    },
    {
   question:"Selon vous, vos processus de Ventes ou Marketing sont",
   type : "choix-multiple",
    1:{text:"Non formalisés et non connus", score:1},
    2:{text:"Non formalisés mais connus par quelques personnes", score:2},
    3:{text:"Non formalisés mais connus par tous les collaborateurs concernés", score:3},
    4:{text:"Formalisés et connus par tous les collaborateurs concernés", score:4},
    5:{text:"Formalisés, connus et adaptables", score:5},
    },
    {
        question:"Pensez-vous que vos processus commerciaux sont adaptés à votre croissance ?",
        type : "choix-multiple",
        1:{text:"Ne sais pas", score:1},
        2:{text:"Pas du tout", score:2},
        3:{text:"Plutôt non", score:3},
        4:{text:"Plutôt oui", score:4},
        5:{text:"Oui totalement", score:5},
    },
    {
        question:"elon vous, vos outils de Ventes / Marketing sont-ils efficients ? (ex : CRM, tableaux de bord, etc.)",
        type : "choix-multiple",
        1:{text:"Ne sais pas", score:1},
        2:{text:"Pas du tout", score:2},
        3:{text:"Partiellement, sur quelques processus", score:3},
        4:{text:"Vous avez mis en place des KPIs / indicateurs et vous effectuez un suivi irrégulier", score:4},
        5:{text:"Vous avez mis en place des KPIs / indicateurs, vous effectuez un suivi irrégulier et vous basez vos décisions sur ces derniers", score:5},
    },
    {
        question:"Selon vous, vos outils de Ventes / Marketing sont-ils efficients ? (ex : CRM, tableaux de bord, etc.)",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:3},
        4:{text:"Oui totalement", score:4},
    },
    {
        question:"Pour conclure sur cet axe, quelles sont les problématiques principales que vous rencontrez sur le volet développement commercial ?",
        type : 'champs-reponse',
    },
    ]
}

const questionnaire_3 = {  
    Catégories: "informations complémentaire",
    Titre : "Infos", 
    questions : [
    {
    question:"Dans quels pays se trouvent vos clients actuels ? (ne pas répondre si vous n'avez pas encore de clients à l'international) ?",
    type : 'champs-reponse'
    },
    {
    question:"Quel pourcentage du chiffre d'affaires représenteront vos ventes internationales à horizon 2 ans ?",
    type : "choix-multiple",
    1:{text:"Ne sais pas", score:1},
    2:{text:"Inférieur à 5%", score:2},
    3:{text:"Entre 5% et 20%", score:3},
    4:{text:"Entre 20% et 50%", score:4},
    5:{text:"Supérieur à 50%", score:5},
    },
    {
    question:"Quel pourcentage du chiffre d'affaires représenteront vos ventes internationales à horizon 5 ans ?",
    type : "choix-multiple",
    1:{text:"Ne sais pas", score:1},
    2:{text:"Inférieur à 5%", score:2},
    3:{text:"Entre 5% et 20%", score:3},
    4:{text:"Entre 20% et 50%", score:4},
    5:{text:"Supérieur à 50%", score:5},
    },
    {
    question:"Les marchés à l'international ciblés à court terme (2 ans) représentent combien de pays ?",
    type : "choix-multiple",
    1:{text:"0", score:1},
    2:{text:"1 à 2 pays", score:2},
    3:{text:"Entre 2 et 5 pays", score:3},
    4:{text:"Entre 5 et 10 pays", score:4},
    5:{text:"Plus de 10 pays", score:5},
    },
    {
        question: "lequels ?",
        type :"champs-reponse"
    },
    {
    question:"Comment avez-vous sélectionné ces pays ?",
    type : "choix-multiple",
    1:{text:"Ne sais pas / plus", score:1},
    2:{text:"Parce qu'un de vos collaborateurs est originaire de ce / ces pays ou grâce à des opportunités commerciales ponctuelles", score:2},
    3:{text:"Vos concurrents sont présents sur ce / ces marchés", score:3},
    4:{text:"Certains indicateurs vous font penser que ces marchés ont un fort potentiel", score:4},
    5:{text:"Vous avez étudié en détail ces marchés (ex : étude de marché) afin de les sélectionner", score:5},
    },
    {
    question:"Votre équipe a-t-elle connaissance de la culture des pays où vous souhaitez vous développer ?",
    type : "choix-multiple",
    1:{text:"Pas du tout", score:1},
    2:{text:"Plutôt non", score:2},
    3:{text:"Plutôt oui", score:3},
    4:{text:"Oui totalement", score:4},
    },
    {
    question:"Pensez-vous (les dirigeants) disposer des compétences et de l'expérience nécessaires pour la croissance à l’international ?",
    type : "choix-multiple",
    1:{text:"Pas du tout", score:1},
    2:{text:"Plutôt non", score:2},
    3:{text:"Plutôt oui", score:3},
    4:{text:"Oui totalement", score:4},
    },
    {
        question:"Avez-vous une idée de la façon dont vous allez valider votre concept sur le ou les marchés ciblés ?",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:3},
        4:{text:"Oui totalement", score:4},
    },
    {
        question:"Avez-vous une idée de la façon dont vous allez distribuer vos produits / services dans ces pays ?",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:3},
        4:{text:"Oui totalement", score:4},
    },
    {
        question:"Avez-vous une idée des problématiques logistiques que vous rencontrerez sur le ou les marchés adressés ?",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:3},
        4:{text:"Oui totalement", score:4},
    },
    {
        question:"Avez-vous une idée des contraintes réglementaires présentes sur le ou les marchés ciblés",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:2},
        4:{text:"Oui totalement", score:4},
    },
    {
        question:"Pour conclure sur cet axe, quelles sont les problématiques principales que vous rencontrez sur le volet international ?",
        type : 'champs-reponse',
    },
    ]
}

const questionnaire_4 = {  
    Catégories: "R&D - Innovation",
    Titre : "Recherhce et devellopement", 
    questions : [
    {
    question:"Avez-vous mis au point et suivez-vous une stratégie d'innovation / de R&D ?",
    type : "choix-multiple",
    1:{text:"Pas du tout", score:1},
    2:{text:"Plutôt non", score:2},
    3:{text:"Plutôt oui", score:3},
    4:{text:"Oui totalement", score:4},
    },
    {
    question:"Quel est le pourcentage de votre chiffre d'affaires réinvesti en Innovation / R&D ?",
    type : 'champs-reponse'
    },
    {
        question:"Votre produit / service peut-il être facilement remplacé par un autre ?",
        type : "choix-multiple",
        1:{
            text:"Pas du tout",
            score :1,
            },
        2:{
            text :"Plutôt non",
            score : 2
        },
        3:{
            text: "Plutôt oui",
            score: 3,
        },
        4:{
            text:"Oui totalement",
            score : 4
        },
    },
    {
        question:"Comment décririez-vous votre avance technologique par rapport à vos concurrents ?",
        type : "choix-multiple",
        1:{text :"Vos concurrents sont en avance sur vous",
            score: 1},
        2:{text:"Vous avez la même avance technologique que vos concurrents (pas de différenciation)", score:2},
        3:{text:"Vous avez une différenciation technologique mais réplicable en moins d'un an", score: 3},
        4:{text:"Vous avez une forte avance technologique mais des solutions alternatives sont en développement",score:4},
        5:{text:"Vous avez un leadership technologique de plusieurs années non challengé", score:5},
        },
    {
    question:"Votre propriété intellectuelle est-elle protégée ?",
    type : "choix-multiple",
    1:{text:"Non, elle n'est pas protégée mais elle pourrait l'être", score:1},
    2:{text:"Non elle n'est pas protégée mais elle pourrait l'être on applicable, elle ne peut pas être protégée", score:2},
    3:{text:"Oui, sur le marché domestique", score:3},
    4:{text:"Oui, elle est protégée dans quelques pays", score:4},
    5:{text:"Oui, elle est protégée dans le monde", score:5},
    },
    {
    question:"Comment qualifieriez-vous la capacité d'adaptation de votre département R&D à votre volonté de croître ?",
    type : "choix-multiple",
    1:{text:"Ne sait pas", score:1},
    2:{text:"Extrêmement lente", score:2},
    3:{text:"Difficile", score:3},
    4:{text:"Correcte", score:4},
    5:{text:"Totalement flexible", score:5},
    },
    {
    question:"Les processus R&D / Innovation sont-ils connus de tous et formalisés ?",
    type : "choix-multiple",
    1:{text:"Non formalisés et non connus", score:1},
    2:{text:"Non formalisés mais connus par quelques personnes", score:2},
    3:{text:"Non formalisés mais connus par tous les collaborateurs concernés", score:3},
    4:{text:"Formalisés et connus pas tous les collaborateurs concernés", score:4},
    5:{text:"Formalisés, connus et adaptables", score:5},
    },
    {
        question:"Avez-vous mis en place des KPI / indicateurs de suivi de la performance de la R&D / Innovation vous permettant de suivre la performance de vos processus ?",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Partiellement, sur quelques processus", score:2},
        3:{text:"Vous avez mis en place des KPIs / indicateurs et vous effectuez un suivi irrégulier", score:3},
        4:{text:"Vous avez mis en place des KPIs / indicateurs, vous effectuez un suivi irrégulier et vous basez vos décisions sur ces derniers", score:4},
    },
    {
        question: "Si oui, lequels ?",
        type :"champs-reponse"
    },
    {
        question:"Votre processus de prise de décision sur les orientations stratégiques de la R&D est-il efficient ?",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:3},
        4:{text:"Oui totalement", score:4},
    },
    {
        question:"Vos outils R&D / Innovation sont-ils efficients ? (ex : suivi de projets, de coûts, de planning, fichiers partagés, etc.)",
        type : "choix-multiple",
        1:{text:"Pas du tout", score:1},
        2:{text:"Plutôt non", score:2},
        3:{text:"Plutôt oui", score:3},
        4:{text:"Oui totalement", score:4},
        5:{text:"Pas d'outils", score:5},
    },
    {
        question:"Pour conclure sur cet axe, quelles sont les problématiques principales que vous rencontrez sur le volet R&D / Innovation ?",
        type : 'champs-reponse',
    },
    ]
}

const questions  = [questionnaire_1, questionnaire_2, questionnaire_3, questionnaire_4]
export default questions