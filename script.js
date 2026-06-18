// ============================================================
// 0. CONFIGURATION WEBHOOK DISCORD
// ============================================================
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1517077179698118697/UR1PoOwuL67U6iQdI-HzVLSu-qIlgqRLPHl5AjPfEq6tZbrNvrAhNHXmjaxGJWN2gYah';

// ============================================================
// 1. BASE DE DONNÉES SHOP
// ============================================================
const SHOP_PRODUCTS = [
    // --- ARMES ---
    { id: "WEAPON_6IXPASMG", category: "armes", title: "6ixpa SMG", desc: "Mitraillette compacte customisée avec un design agressif et une cadence de tir optimisée.", price: "12.99 €", image: "img/arme/WEAPON_6IXPASMG.png", badge: "CADENCE MAX", placeholderIcon: "fa-gun" },
    { id: "WEAPON_BEANBAG", category: "armes", title: "Beanbag", desc: "Arme d'impact non-létale modifiée pour déstabiliser instantanément vos adversaires.", price: "7.99 €", image: "img/arme/WEAPON_BEANBAG.png", badge: "TACTIQUE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_CARBINESWERV", category: "armes", title: "Carbine Swerv", desc: "Fusil d'assaut ultra-léger et maniable, idéal pour les tirs précis en mouvement.", price: "14.99 €", image: "img/arme/WEAPON_CARBINESWERV.png", badge: "EXCLUSIF", placeholderIcon: "fa-gun" },
    { id: "WEAPON_DREAMSSNIPER", category: "armes", title: "Dreams Sniper", desc: "Un fusil de précision longue portée orné d'un skin onirique et de dégâts ajustés.", price: "24.99 €", image: "img/arme/WEAPON_DREAMSSNIPER.png", badge: "ONE-SHOT", placeholderIcon: "fa-crosshairs" },
    { id: "WEAPON_HELLOTITTY", category: "armes", title: "Hello Titty Custom", desc: "Pistolet automatique au design rose excentrique mais extrêmement mortel à courte portée.", price: "9.99 €", image: "img/arme/WEAPON_HELLOTITTY.png", badge: "FUN & FATAL", placeholderIcon: "fa-gun" },
    { id: "WEAPON_ICEDPPSH", category: "armes", title: "Iced PPSh", desc: "La mythique arme russe glacée pour un look givré et un chargeur tambour XXL.", price: "11.99 €", image: "img/arme/WEAPON_ICEDPPSH.png", badge: "LOOK RETRO", placeholderIcon: "fa-gun" },
    { id: "WEAPON_JUNGLESSMG", category: "armes", title: "Jungles SMG", desc: "Camouflage jungle et maniabilité accrue pour se fondre dans les territoires sauvages de Cayo.", price: "9.50 €", image: "img/arme/WEAPON_JUNGLESSMG.png", badge: "CAMOUFLAGE", placeholderIcon: "fa-gun" },
    { id: "weapon_kaalboosterscar", category: "armes", title: "Kaal Booster SCAR", desc: "L'indétrônable SCAR-H équipé du pack de puissance Kaal Booster pour percer les gilets lourds.", price: "15.99 €", image: "img/arme/weapon_kaalboosterscar.png", badge: "PERFORANT", placeholderIcon: "fa-gun" },
    { id: "WEAPON_LABUBU", category: "armes", title: "Labubu Special", desc: "Édition ultra-rare Labubu apportant un style inimitable et recherché par tous les collectionneurs.", price: "13.99 €", image: "img/arme/WEAPON_LABUBU.png", badge: "COLLECTOR", placeholderIcon: "fa-gun" },
    { id: "WEAPON_PINKHOE", category: "armes", title: "Pink Hoe Pistol", desc: "Un pistolet compact rose flash avec silencieux intégré pour des assassinats élégants.", price: "8.99 €", image: "img/arme/WEAPON_PINKHOE.png", badge: "DISCRET", placeholderIcon: "fa-gun" },
    { id: "WEAPON_REVENGEASVAL", category: "armes", title: "Revenge AS VAL", desc: "Le fusil d'assaut d'infiltration russe par excellence. Un silence de mort pour des dégâts majeurs.", price: "16.50 €", image: "img/arme/WEAPON_REVENGEASVAL.png", badge: "SILENCIEUX", placeholderIcon: "fa-gun" },
    { id: "WEAPON_SLUTTY", category: "armes", title: "Slutty Assault", desc: "Rifle d'élite personnalisé au look ravageur et doté d'une précision chirurgicale.", price: "14.99 €", image: "img/arme/WEAPON_SLUTTY.png", badge: "PVP ONLY", placeholderIcon: "fa-gun" },
    { id: "WEAPON_STPAT74U", category: "armes", title: "St. Pat AKS-74U", desc: "Célébrez la victoire avec ce fusil compact gravé de trèfles dorés porte-bonheur.", price: "12.50 €", image: "img/arme/WEAPON_STPAT74U.png", badge: "CHANCEUX", placeholderIcon: "fa-gun" },
    { id: "WEAPON_VVSKITTY", category: "armes", title: "VVS Kitty SMG", desc: "Parsemé de diamants VVS et de motifs mignons, ne vous détrompez pas : elle décime tout.", price: "13.50 €", image: "img/arme/WEAPON_VVSKITTY.png", badge: "DIAMANT", placeholderIcon: "fa-gun" },
    { id: "WEAPON_AFROKIDBYDK", category: "armes", title: "AfroKid by DK", desc: "Création artistique exclusive en collaboration avec DK. Une œuvre d'art dévastatrice.", price: "14.99 €", image: "img/arme/WEAPON_AFROKIDBYDK.png", badge: "COLLAB", placeholderIcon: "fa-gun" },
    { id: "WEAPON_BO2", category: "armes", title: "BO2 Special Remake", desc: "Les sensations cultes de Black Ops II de retour dans ton inventaire de combat.", price: "11.00 €", image: "img/arme/WEAPON_BO2.png", badge: "NOSTALGIE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_CHERRYPISTOL", category: "armes", title: "Cherry Pistol", desc: "Design printanier de fleurs de cerisier du Japon. Doux à regarder, mortel à encaisser.", price: "7.99 €", image: "img/arme/WEAPON_CHERRYPISTOL.png", badge: "SAKURA", placeholderIcon: "fa-gun" },
    { id: "WEAPON_ESPADAAP", category: "armes", title: "Espada AP", desc: "Pistolet automatique tranchant comme une épée. Perfore le Kevlar ennemi sans pitié.", price: "8.50 €", image: "img/arme/WEAPON_ESPADAAP.png", badge: "AP TOXIC", placeholderIcon: "fa-gun" },
    { id: "WEAPON_HIMOTHY", category: "armes", title: "Himothy Rifle", desc: "Parce que tu es 'Him'. Impose ton style et ton skill avec l'arme des vrais meneurs.", price: "16.99 €", image: "img/arme/WEAPON_HIMOTHY.png", badge: "ALPHA", placeholderIcon: "fa-gun" },
    { id: "WEAPON_ICEDSICA", category: "armes", title: "Iced Sica", desc: "Pistolet-mitrailleur customisé d'un blanc bleuté étincelant avec des textures de glace.", price: "10.99 €", image: "img/arme/WEAPON_ICEDSICA.png", badge: "FROST", placeholderIcon: "fa-gun" },
    { id: "WEAPON_K2AK74U", category: "armes", title: "K2 AKS-74U", desc: "La version K2 tactique de la célèbre AK compacte. Un recul maîtrisé pour le close combat.", price: "12.00 €", image: "img/arme/WEAPON_K2AK74U.png", badge: "CQB KING", placeholderIcon: "fa-gun" },
    { id: "WEAPON_KAKSENAK", category: "armes", title: "Kaksen AK", desc: "Fusil d'assaut revisité par la firme Kaksen. Robustesse et puissance d'arrêt brute.", price: "15.00 €", image: "img/arme/WEAPON_KAKSENAK.png", badge: "DEGATS +", placeholderIcon: "fa-gun" },
    { id: "WEAPON_LINEAP", category: "armes", title: "Line AP Pistol", desc: "Pistolet automatique au design géométrique néon. Un tir laser ultra-précis.", price: "8.99 €", image: "img/arme/WEAPON_LINEAP.png", badge: "NEON-LINE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_PRINGLE", category: "armes", title: "Pringle Gun", desc: "Une arme fun aux couleurs de la célèbre marque de tuiles de pommes de terre. Croustillant !", price: "9.99 €", image: "img/arme/WEAPON_PRINGLE.png", badge: "MEME GUN", placeholderIcon: "fa-gun" },
    { id: "WEAPON_SCREAM_SPEAR", category: "armes", title: "Scream Spear", desc: "Inspiré de l'univers d'Halloween, ce sniper élimine vos cibles et terrifie leurs alliés.", price: "23.99 €", image: "img/arme/WEAPON_SCREAM_SPEAR.png", badge: "TERRIFIANT", placeholderIcon: "fa-crosshairs" },
    { id: "WEAPON_SMFOLDEDUMP", category: "armes", title: "SM Folded UMP", desc: "L'UMP pliable haute technologie. Gain de stabilité incroyable lors des combats rapprochés.", price: "11.50 €", image: "img/arme/WEAPON_SMFOLDEDUMP.png", badge: "RECOIL OPTI", placeholderIcon: "fa-gun" },
    { id: "WEAPON_TOYM16", category: "armes", title: "Toy M16", desc: "Un fusil d'assaut déguisé en jouet plastique. Ne vous y trompez pas, ses balles sont bien réelles.", price: "13.99 €", image: "img/arme/WEAPON_TOYM16.png", badge: "TOY SOLDIER", placeholderIcon: "fa-gun" },
    { id: "WEAPON_WFBANSEE", category: "armes", title: "WF Bansee", desc: "Mitraillette de combat d'avant-garde émettant un sifflement de banshee à chaque rafale.", price: "12.99 €", image: "img/arme/WEAPON_WFBANSEE.png", badge: "VORTEX", placeholderIcon: "fa-gun" },
    { id: "WEAPON_ALV3", category: "armes", title: "AL V3 Custom", desc: "Troisième version optimisée de la série AL. Réactivité à l'épaule inégalée.", price: "14.50 €", image: "img/arme/WEAPON_ALV3.png", badge: "VERSION 3", placeholderIcon: "fa-gun" },
    { id: "WEAPON_BUNNY40", category: "armes", title: "Bunny 40", desc: "Petit pistolet-mitrailleur survolté à haute vélocité avec des gravures de lapin de Pâques.", price: "10.00 €", image: "img/arme/WEAPON_BUNNY40.png", badge: "RAPIDE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_DELTASR47", category: "armes", title: "Delta SR-47", desc: "Hybride parfait entre la plateforme AR et le calibre AK. Précision et impact décuplés.", price: "15.99 €", image: "img/arme/WEAPON_DELTASR47.png", badge: "HYBRIDE ELITE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_FOESAP", category: "armes", title: "Foes AP Pistol", desc: "Le fléau de tes ennemis. Idéal pour riposter rapidement en véhicule grâce à son faible recul.", price: "8.99 €", image: "img/arme/WEAPON_FOESAP.png", badge: "DRIVE-BY", placeholderIcon: "fa-gun" },
    { id: "WEAPON_HOMELANDERSCAR", category: "armes", title: "Homelander SCAR", desc: "Arborez les couleurs du protecteur avec ce SCAR ultra patriotique au laser dévastateur.", price: "16.99 €", image: "img/arme/WEAPON_HOMELANDERSCAR.png", badge: "GOD MODE STYLED", placeholderIcon: "fa-gun" },
    { id: "WEAPON_JAKESMG", category: "armes", title: "Jake SMG", desc: "Inspirée de la culture pop, cette SMG colorée tire des rafales d'une stabilité incroyable.", price: "11.00 €", image: "img/arme/WEAPON_JAKESMG.png", badge: "POP CULTURE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_KAALBOOSTERM82", category: "armes", title: "Kaal Booster M82", desc: "Le fusil anti-matériel Barrett M82 boosté au maximum. Détruit n'importe quel bloc moteur.", price: "29.99 €", image: "img/arme/WEAPON_KAALBOOSTERM82.png", badge: "DESTRUCTEUR", placeholderIcon: "fa-crosshairs" },
    { id: "WEAPON_KAWSUMP", category: "armes", title: "Kaws UMP", desc: "Le design iconique de l'artiste Kaws habille cette arme équilibrée et redoutable.", price: "11.99 €", image: "img/arme/WEAPON_KAWSUMP.png", badge: "ARTWORK", placeholderIcon: "fa-gun" },
    { id: "WEAPON_LIPZAK47V1", category: "armes", title: "Lipz AK-47 V1", desc: "La version originale Lipz du célèbre fusil d'assaut. Préférée des tireurs d'arène de la première heure.", price: "13.99 €", image: "img/arme/WEAPON_LIPZAK47V1.png", badge: "ORIGINAL V1", placeholderIcon: "fa-gun" },
    { id: "WEAPON_QUEENSSR", category: "armes", title: "Queens SR", desc: "Un fusil de chasse de calibre royal. Précision longue distance digne d'une reine.", price: "15.50 €", image: "img/arme/WEAPON_QUEENSSR.png", badge: "ROYAL PRECISION", placeholderIcon: "fa-gun" },
    { id: "WEAPON_SCREAMSWITCH", category: "armes", title: "Scream Switch Glock", desc: "Glock équipé d'un switch automatique rapide et d'un skin d'Halloween terrifiant.", price: "9.99 €", image: "img/arme/WEAPON_SCREAMSWITCH.png", badge: "AUTO-GLOCK", placeholderIcon: "fa-gun" },
    { id: "WEAPON_SNIPERCK", category: "armes", title: "Sniper CK", desc: "Fusil de précision léger optimisé pour les duels rapides sans visée de longue durée.", price: "21.99 €", image: "img/arme/WEAPON_SNIPERCK.png", badge: "FAST SCOPE", placeholderIcon: "fa-crosshairs" },
    { id: "WEAPON_UMPV2NEONOIR", category: "armes", title: "UMP V2 Neo-Noir", desc: "Le design légendaire Neo-Noir s'invite sur cette UMP de seconde génération.", price: "12.99 €", image: "img/arme/WEAPON_UMPV2NEONOIR.png", badge: "NEO-NOIR", placeholderIcon: "fa-gun" },
    { id: "WEAPON_YEAHHESMYDADDY", category: "armes", title: "Yeah He's My Daddy", desc: "Pistolet lourd insolent et surpuissant conçu pour faire plier n'importe quel adversaire.", price: "10.00 €", image: "img/arme/WEAPON_YEAHHESMYDADDY.png", badge: "INSOLENT", placeholderIcon: "fa-gun" },
    { id: "WEAPON_APFEAR", category: "armes", title: "AP Fear", desc: "Sème la terreur à chaque tir automatique avec ce pistolet de combat personnalisé.", price: "8.50 €", image: "img/arme/WEAPON_APFEAR.png", badge: "FEAR FACTOR", placeholderIcon: "fa-gun" },
    { id: "WEAPON_CARBINERIFLE", category: "armes", title: "Carbine Rifle S1", desc: "Le classique fusil de carabine revisité pour garantir 100% d'efficacité en duel.", price: "13.00 €", image: "img/arme/WEAPON_CARBINERIFLE.png", badge: "STANDARD PRO", placeholderIcon: "fa-gun" },
    { id: "WEAPON_DICKSWITCH", category: "armes", title: "Dick Switch Glock", desc: "Pistolet automatique insolite équipé d'un commutateur de tir ultra-rapide.", price: "9.50 €", image: "img/arme/WEAPON_DICKSWITCH.png", badge: "INSOLITE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_GHOULS17", category: "armes", title: "Ghouls 17", desc: "Le pistolet de poing standard de l'armée décliné dans une édition d'outre-tombe verte fluo.", price: "7.99 €", image: "img/arme/WEAPON_GHOULS17.png", badge: "GLOW IN DARK", placeholderIcon: "fa-gun" },
    { id: "WEAPON_ICEDGEN5", category: "armes", title: "Iced Gen5 Glock", desc: "Glock de 5ème génération congelé. Des tirs limpides, précis et un skin glacial magnifique.", price: "8.99 €", image: "img/arme/WEAPON_ICEDGEN5.png", badge: "GLACE GEN5", placeholderIcon: "fa-gun" },
    { id: "WEAPON_JAYOAK1", category: "armes", title: "Jay O AK-1", desc: "Le fusil d'assaut d'élite sculpté à la main, offrant un équilibre parfait entre poids et recul.", price: "15.00 €", image: "img/arme/WEAPON_JAYOAK1.png", badge: "EQUILIBRE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_KAALBOOSTERMP5", category: "armes", title: "Kaal Booster MP5", desc: "La mythique MP5 subit l'optimisation Kaal Booster pour une pénétration d'armure inédite.", price: "11.99 €", image: "img/arme/WEAPON_KAALBOOSTERMP5.png", badge: "KAAL COMPATIBLE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_KEVIN", category: "armes", title: "Kevin Special", desc: "Créé à la demande de notre communauté. Le pistolet fétiche des plus grands tryhardeurs.", price: "9.00 €", image: "img/arme/WEAPON_KEVIN.png", badge: "COMMUNAUTAIRE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_MP5CHK", category: "armes", title: "MP5 CHK", desc: "La variante CHK de la mitraillette favorite des forces d'intervention tactiques.", price: "10.99 €", image: "img/arme/WEAPON_MP5CHK.png", badge: "TACTICAL CHK", placeholderIcon: "fa-gun" },
    { id: "WEAPON_REVENGE", category: "armes", title: "Revenge Glock", desc: "Pistolet de poing conçu pour les combats de rue rapides. Un allié indispensable après réapparition.", price: "7.00 €", image: "img/arme/WEAPON_REVENGE.png", badge: "RIEN A PERDRE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_SKULLPISTOLMADEBYSURGE", category: "armes", title: "Skull Pistol (Surge)", desc: "Une œuvre d'art morbide en chrome poli signée Surge. Chaque élimination est gravée d'un crâne.", price: "10.50 €", image: "img/arme/WEAPON_SKULLPISTOLMADEBYSURGE.png", badge: "DESIGN CHROME", placeholderIcon: "fa-gun" },
    { id: "WEAPON_SPIDERAP", category: "armes", title: "Spider AP Pistol", desc: "Tisse ta toile de plomb sur tes adversaires avec ce pistolet automatique au design arachnéen.", price: "8.99 €", image: "img/arme/WEAPON_SPIDERAP.png", badge: "ARAIGNEE", placeholderIcon: "fa-gun" },
    { id: "WEAPON_UMPWL", category: "armes", title: "UMP WL Edition", desc: "Mitraillette de combat en édition limitée Whitelistée. Rare, stable et dévastatrice.", price: "12.00 €", image: "img/arme/WEAPON_UMPWL.png", badge: "WL SPEC", placeholderIcon: "fa-gun" },
    { id: "WEAPON_Z6STRIKER", category: "armes", title: "Z6 Striker", desc: "Le fusil à pompe de combat ultime pour un balayage efficace dans Alcatraz ou les Favelas.", price: "13.99 €", image: "img/arme/WEAPON_Z6STRIKER.png", badge: "IMPACT TOTAL", placeholderIcon: "fa-gun" },
    { id: "WEAPON_AKGIFT", category: "armes", title: "AK-47 Gift", desc: "Fusil d'assaut légendaire en édition cadeau, parfait pour offrir la mort avec style.", price: "14.99 €", image: "img/arme/WEAPON_AKGIFT.png", badge: "ÉDITION CADEAU", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKTOY", category: "armes", title: "AK-47 Toy", desc: "Version jouet de l'AK-47, aussi fun que redoutable sur le champ de bataille.", price: "9.99 €", image: "img/arme/WEAPON_AKTOY.png", badge: "TOY SERIES", placeholderIcon: "fa-gun" },
{ id: "WEAPON_DEAGLEXMAS", category: "armes", title: "Desert Eagle Xmas", desc: "Le puissant Desert Eagle revêtu des couleurs de Noël pour des têtes de liste bien méritées.", price: "15.50 €", image: "img/arme/WEAPON_DEAGLEXMAS.png", badge: "NOËL", placeholderIcon: "fa-gun" },
{ id: "WEAPON_PISTOLCANDY", category: "armes", title: "Pistol Candy", desc: "Pistolet sucré aux couleurs bonbon, aussi dévastateur que gourmand.", price: "8.99 €", image: "img/arme/WEAPON_PISTOLCANDY.png", badge: "CANDY SHOP", placeholderIcon: "fa-gun" },
{ id: "WEAPON_VECTORXMAS", category: "armes", title: "Vector Xmas", desc: "Le SMG Vector en habit de Noël, pour une cadence de tir festive et mortelle.", price: "16.99 €", image: "img/arme/WEAPON_VECTORXMAS.png", badge: "NOËL", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AXEGIFT", category: "armes", title: "Axe Gift", desc: "Hache de combat en édition limitée, emballée comme un cadeau pour frapper avec élégance.", price: "7.50 €", image: "img/arme/WEAPON_AXEGIFT.png", badge: "CADEAU", placeholderIcon: "fa-gun" },
{ id: "WEAPON_HAMMERGIFT", category: "armes", title: "Hammer Gift", desc: "Marteau de guerre en édition cadeau, pour écraser vos ennemis avec originalité.", price: "7.50 €", image: "img/arme/WEAPON_HAMMERGIFT.png", badge: "CADEAU", placeholderIcon: "fa-gun" },
{ id: "WEAPON_HATFGIFT", category: "armes", title: "Hatchet Gift", desc: "Petite hache de lancer en version cadeau, discrète mais efficace.", price: "6.99 €", image: "img/arme/WEAPON_HATFGIFT.png", badge: "CADEAU", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SHATGIFT", category: "armes", title: "Shotgun Gift", desc: "Fusil à pompe en édition cadeau, pour un cadeau qui fait parler la poudre.", price: "12.99 €", image: "img/arme/WEAPON_SHATGIFT.png", badge: "CADEAU", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKUGIFT", category: "armes", title: "AK-47U Gift", desc: "Version compacte de l'AK en édition cadeau, idéale pour les affrontements rapprochés.", price: "13.99 €", image: "img/arme/WEAPON_AKUGIFT.png", badge: "CADEAU", placeholderIcon: "fa-gun" },
{ id: "WEAPON_M4CHOCOLATE", category: "armes", title: "M4 Chocolate", desc: "M4 au design chocolaté, aussi doux au toucher que mortel à l'utilisation.", price: "14.50 €", image: "img/arme/WEAPON_M4CHOCOLATE.png", badge: "CHOCOLAT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_TREE", category: "armes", title: "Tree Weapon", desc: "Arme surprenante en forme d'arbre de Noël, pour un combat festif et inattendu.", price: "11.99 €", image: "img/arme/WEAPON_TREE.png", badge: "NOËL", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CHAINSAW", category: "armes", title: "Chainsaw", desc: "Tronçonneuse de combat, déchiquetez vos adversaires dans un bruit de moteur assourdissant.", price: "18.99 €", image: "img/arme/WEAPON_CHAINSAW.png", badge: "LÉGENDAIRE", placeholderIcon: "fa-gun" },
{ id: "WEAPON_DESERTPURPLE", category: "armes", title: "Desert Eagle Purple", desc: "Le Desert Eagle revisité avec une finition violette pour allier puissance et style.", price: "15.99 €", image: "img/arme/WEAPON_DESERTPURPLE.png", badge: "PURPLE EDITION", placeholderIcon: "fa-gun" },
{ id: "WEAPON_REVOLVERVAMP", category: "armes", title: "Revolver Vamp", desc: "Révolver aux teintes vampiresques, chaque balle semble assoiffée de sang.", price: "14.50 €", image: "img/arme/WEAPON_REVOLVERVAMP.png", badge: "VAMPIRE", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SPIDERAK", category: "armes", title: "Spider AK", desc: "AK-47 au design araignée, pour une toile mortelle sur le champ de bataille.", price: "16.99 €", image: "img/arme/WEAPON_SPIDERAK.png", badge: "SPIDER", placeholderIcon: "fa-gun" },
{ id: "WEAPON_PUMPKIN", category: "armes", title: "Pumpkin Launcher", desc: "Lanceur en forme de citrouille pour une touche d'horreur festive dans vos combats.", price: "12.50 €", image: "img/arme/WEAPON_PUMPKIN.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_BONEPER", category: "armes", title: "Bone Perforator", desc: "Arme au design osseux, perforante et terrifiante comme un cauchemar.", price: "13.99 €", image: "img/arme/WEAPON_BONEPER.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKFROST", category: "armes", title: "AK-47 Frost", desc: "AK-47 givré aux teintes bleutées, pour un froid mortel sur vos ennemis.", price: "15.99 €", image: "img/arme/WEAPON_AKFROST.png", badge: "FROST", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CANDYAK", category: "armes", title: "Candy AK", desc: "AK-47 aux couleurs bonbon, mêlant la puissance brute à une esthétique sucrée.", price: "14.50 €", image: "img/arme/WEAPON_CANDYAK.png", badge: "CANDY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_M4GINGER", category: "armes", title: "M4 Ginger", desc: "M4 au design pain d'épices, une arme aussi délicieuse que redoutable.", price: "14.99 €", image: "img/arme/WEAPON_M4GINGER.png", badge: "GINGERBREAD", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AWMFROST", category: "armes", title: "AWM Frost", desc: "Sniper AWM givré, pour des tirs glacés et précis à longue distance.", price: "19.99 €", image: "img/arme/WEAPON_AWMFROST.png", badge: "FROST", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SSGNOEL", category: "armes", title: "SSG Noël", desc: "Sniper SSG aux couleurs de Noël, pour un cadeau qui arrive à 1000 mètres.", price: "18.50 €", image: "img/arme/WEAPON_SSGNOEL.png", badge: "NOËL", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CANDYCROW", category: "armes", title: "Candy Crow", desc: "Arme au design de corbeau en sucre, mordante et sucrée à la fois.", price: "12.99 €", image: "img/arme/WEAPON_CANDYCROW.png", badge: "CANDY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_BATXMAS", category: "armes", title: "Bat Xmas", desc: "Batte de baseball de Noël, pour frapper fort avec esprit festif.", price: "7.99 €", image: "img/arme/WEAPON_BATXMAS.png", badge: "NOËL", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SNOWHAMMER", category: "armes", title: "Snow Hammer", desc: "Marteau enneigé pour un impact gelé sur vos adversaires.", price: "8.50 €", image: "img/arme/WEAPON_SNOWHAMMER.png", badge: "HIVER", placeholderIcon: "fa-gun" },
{ id: "WEAPON_NOELLAUNCHER", category: "armes", title: "Noël Launcher", desc: "Lance-roquettes en habit de Noël, pour un feu d'artifice explosif.", price: "17.99 €", image: "img/arme/WEAPON_NOELLAUNCHER.png", badge: "NOËL", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKCARROT", category: "armes", title: "AK Carrot", desc: "AK-47 surprenant en forme de carotte, pour un combat vitaminé.", price: "14.50 €", image: "img/arme/WEAPON_AKCARROT.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CARROTSMG", category: "armes", title: "Carrot SMG", desc: "SMG au design carotte, petit mais puissant comme un légume croquant.", price: "13.50 €", image: "img/arme/WEAPON_CARROTSMG.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CARROTSWORD", category: "armes", title: "Carrot Sword", desc: "Épée en forme de carotte, pour trancher avec un brin de folie.", price: "9.99 €", image: "img/arme/WEAPON_CARROTSWORD.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CARROTTEC", category: "armes", title: "Carrot TEC", desc: "TEC-9 revisité en carotte, alliant cadence de feu et originalité.", price: "12.99 €", image: "img/arme/WEAPON_CARROTTEC.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_REVOCARROT", category: "armes", title: "Revolver Carrot", desc: "Révolver en forme de carotte, pour une touche de légèreté dans vos duels.", price: "14.50 €", image: "img/arme/WEAPON_REVOCARROT.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_M4CARROT", category: "armes", title: "M4 Carrot", desc: "M4 au design carotte, aussi efficace que surprenant.", price: "15.50 €", image: "img/arme/WEAPON_M4CARROT.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_DOUBLECARROT", category: "armes", title: "Double Carrot", desc: "Double arme en forme de carotte pour un tir doublement vitaminé.", price: "16.99 €", image: "img/arme/WEAPON_DOUBLECARROT.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CARROTHATCHET", category: "armes", title: "Carrot Hatchet", desc: "Hache en forme de carotte, pour hacher menu avec originalité.", price: "8.50 €", image: "img/arme/WEAPON_CARROTHATCHET.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CARROTMUSKET", category: "armes", title: "Carrot Musket", desc: "Mousquet revisité en carotte, pour un tir historique et vitaminé.", price: "13.99 €", image: "img/arme/WEAPON_CARROTMUSKET.png", badge: "CARROT", placeholderIcon: "fa-gun" },
{ id: "WEAPON_M4TOY", category: "armes", title: "M4 Toy", desc: "M4 en version jouet, fun et efficace pour des combats sans prise de tête.", price: "11.99 €", image: "img/arme/WEAPON_M4TOY.png", badge: "TOY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_KNIFETOY", category: "armes", title: "Knife Toy", desc: "Couteau en version jouet, pour des attaques surprises tout en légèreté.", price: "5.50 €", image: "img/arme/WEAPON_KNIFETOY.png", badge: "TOY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SMGTOY", category: "armes", title: "SMG Toy", desc: "SMG en version jouet, pour une cadence de tir débridée et amusante.", price: "12.50 €", image: "img/arme/WEAPON_SMGTOY.png", badge: "TOY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_TECTOY", category: "armes", title: "TEC Toy", desc: "TEC-9 en version jouet, aussi petit que puissant.", price: "11.50 €", image: "img/arme/WEAPON_TECTOY.png", badge: "TOY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_MINITOY", category: "armes", title: "Mini Toy Gun", desc: "Mini arme jouet, discrète mais toujours efficace.", price: "6.99 €", image: "img/arme/WEAPON_MINITOY.png", badge: "TOY", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AUTOHALL", category: "armes", title: "Auto Hall", desc: "Fusil automatique aux couleurs d'Halloween pour une terreur continue.", price: "16.50 €", image: "img/arme/WEAPON_AUTOHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKHALL", category: "armes", title: "AK Hall", desc: "AK-47 revisité pour Halloween, aussi terrifiant que mortel.", price: "15.99 €", image: "img/arme/WEAPON_AKHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_CTHALL", category: "armes", title: "Candy Toy Hall", desc: "Arme sucrée pour Halloween, mêlant bonbons et balles.", price: "10.99 €", image: "img/arme/WEAPON_CTHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_HKHALL", category: "armes", title: "HK Hall", desc: "Fusil HK aux couleurs d'Halloween, pour des tirs pleins de frayeur.", price: "14.50 €", image: "img/arme/WEAPON_HKHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_KNIFEHALL", category: "armes", title: "Knife Hall", desc: "Couteau d'Halloween, tranchant comme une lame de citrouille.", price: "6.50 €", image: "img/arme/WEAPON_KNIFEHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_MGHALL", category: "armes", title: "MG Hall", desc: "Mitrailleuse légère aux couleurs d'Halloween, pour une puissance de feu terrifiante.", price: "17.99 €", image: "img/arme/WEAPON_MGHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_PISTOLHALL", category: "armes", title: "Pistol Hall", desc: "Pistolet d'Halloween, chic et mortel comme un bonbon empoisonné.", price: "8.99 €", image: "img/arme/WEAPON_PISTOLHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SHOTHALL", category: "armes", title: "Shotgun Hall", desc: "Fusil à pompe d'Halloween, pour un bruit de tonnerre qui glace le sang.", price: "13.99 €", image: "img/arme/WEAPON_SHOTHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SMGHALL", category: "armes", title: "SMG Hall", desc: "SMG d'Halloween, pour une rafale de frayeur.", price: "13.50 €", image: "img/arme/WEAPON_SMGHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_SNIPERHALL", category: "armes", title: "Sniper Hall", desc: "Sniper d'Halloween, pour des tirs de précision venus de l'au-delà.", price: "18.99 €", image: "img/arme/WEAPON_SNIPERHALL.png", badge: "HALLOWEEN", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKZOMBIE", category: "armes", title: "AK Zombie", desc: "AK-47 aux couleurs zombies, pour décimer les hordes infectées.", price: "15.99 €", image: "img/arme/WEAPON_AKZOMBIE.png", badge: "ZOMBIE", placeholderIcon: "fa-gun" },
{ id: "WEAPON_AKBLACK", category: "armes", title: "AK Black", desc: "AK-47 black édition, le classique en version sombre et élégante.", price: "14.99 €", image: "img/arme/WEAPON_AKBLACK.png", badge: "BLACK EDITION", placeholderIcon: "fa-gun" },
{ id: "WEAPON_ZOMBIEHAMMER", category: "armes", title: "Zombie Hammer", desc: "Marteau zombie, pour écraser les morts-vivants dans un bruit de crânes brisés.", price: "9.50 €", image: "img/arme/WEAPON_ZOMBIEHAMMER.png", badge: "ZOMBIE", placeholderIcon: "fa-gun" },
{ id: "WEAPON_THOMZOMBIE", category: "armes", title: "Thompson Zombie", desc: "Thompson revisité pour l'apocalypse zombie, une rafale de style vintage.", price: "16.99 €", image: "img/arme/WEAPON_THOMZOMBIE.png", badge: "ZOMBIE", placeholderIcon: "fa-gun" },

    // --- VEHICULES ---
    { id: "voiture1", category: "vehicules", title: "Obey A1 ABC", desc: "Vitesse phénoménale de 420 km/h avec blindage léger sur les vitres. Pour dominer l'asphalte.", price: "24.99 €", image: "img/voiture/voiture1.png", badge: "BLINDAGE MAX", placeholderIcon: "fa-car" },
    { id: "voiture2", category: "vehicules", title: "Pfister Purosangue Venuum", desc: "Le break de chasse ultime pour ton groupe de combat. 4 places réelles et coffre de 150 kg.", price: "17.99 €", image: "img/voiture/voiture2.png", badge: "SQUAD CAR", placeholderIcon: "fa-car-side" },
    { id: "voiture3", category: "vehicules", title: "BENEFACTOR GLS 63", desc: "Aérodynamisme poussé à l'extrême pour esquiver les barrages de police ou de gangs.", price: "21.99 €", image: "img/voiture/voiture3.png", badge: "GRIP DIVIN", placeholderIcon: "fa-car" },
    { id: "voiture4", category: "vehicules", title: "BENEFACTOR GLS63", desc: "Un monstre tout-terrain blindé qui enfonce tous les barrages sur Cayo Perico.", price: "22.99 €", image: "img/voiture/voiture4.png", badge: "TOUT-TERRAIN", placeholderIcon: "fa-truck-monster" },
    { id: "voiture5", category: "vehicules", title: "Panamera", desc: "Hypercar hybride développant une accélération phénoménale pour fuir le danger.", price: "25.99 €", image: "img/voiture/voiture5.png", badge: "HYPERCAR", placeholderIcon: "fa-car" },
    { id: "voiture6", category: "vehicules", title: "Griffon", desc: "La bête du Japon reprogrammée pour les circuits urbains très sinueux.", price: "18.50 €", image: "img/voiture/voiture6.png", badge: "STREET KING", placeholderIcon: "fa-car" },
    { id: "voiture7", category: "vehicules", title: "BUFFALO WB", desc: "Un moteur V12 hurlant et un aérodynamisme actif pour fendre le vent sur l'autoroute.", price: "26.00 €", image: "img/voiture/voiture7.png", badge: "V12 BRUT", placeholderIcon: "fa-car" },
    { id: "voiture8", category: "vehicules", title: "Mercedes C63 AMG Black", desc: "Propulsion nerveuse et carrosserie élargie pour un style agressif inimitable.", price: "16.99 €", image: "img/voiture/voiture8.png", badge: "PROPULSION", placeholderIcon: "fa-car" },
    { id: "voiture9", category: "vehicules", title: "BMW M5 F90 Competition", desc: "La berline de fuite absolue. Confort royal et puissance de feu sous le capot.", price: "18.99 €", image: "img/voiture/voiture9.png", badge: "4 PORTES", placeholderIcon: "fa-car" },
    { id: "voiture10", category: "vehicules", title: "McLaren 720S Spider", desc: "Décapotable à turbine aérodynamique pour ressentir la fureur du PVP cheveux au vent.", price: "23.50 €", image: "img/voiture/voiture10.png", badge: "SPIDER", placeholderIcon: "fa-car" },
    { id: "voiture11", category: "vehicules", title: "Jeep Grand Cherokee Trackhawk", desc: "SUV survolté de 707 chevaux pour déplacer tout ton équipement tactique avec agressivité.", price: "17.00 €", image: "img/voiture/voiture11.png", badge: "SUPER SUV", placeholderIcon: "fa-truck-monster" },
    { id: "voiture12", category: "vehicules", title: "Yamaha T-Max 560 DX", desc: "Le scooter ultime des ruelles étroites de nos Favelas exclusives. Agilité absolue.", price: "12.00 €", image: "img/voiture/voiture12.png", badge: "DEUX-ROUES", placeholderIcon: "fa-motorcycle" },

    // --- PACKS ---
    { id: "pack1", category: "packs", title: "VIP Basic", desc: "Priorité de connexion absolue (Queue Bypass), 1 voiture VIP au choix offerte, kit d'armes journalier et grade Discord exclusif.", price: "29.99 €", image: "img/packs/vip_gold.png", badge: "POPULAIRE", placeholderIcon: "fa-box-open" },
    { id: "pack2", category: "packs", title: "VIP Premium", desc: "Comprend un QG personnalisé de gang mappé, 5 accès prioritaires basiques et un véhicule partagé en jeu.", price: "59.99 €", image: "img/packs/vip_basic.png", badge: "OFFRE GANG", placeholderIcon: "fa-users" },
    { id: "pack3", category: "packs", title: "Deban", desc: "Une seconde chance pour réintégrer les rangs du serveur OMERTAA suite à une infraction règlementaire.", price: "15.00 €", image: "img/packs/unban.png", badge: "GRACE", placeholderIcon: "fa-gavel" }
];

// ============================================================
// 2. VARIABLES GLOBALES
// ============================================================
let currentCategory = 'all';
let searchQuery = '';
let visitCount = parseInt(localStorage.getItem('omertaa_visit_count')) || 0;  // <--- AJOUTE CETTE LIGNE
// ============================================================
// FONCTION WEBHOOK DISCORD AVEC IP ET LOCALISATION
// ============================================================

function sendDiscordWebhook(pageTitle, url) {
    // Incrémenter le compteur
    visitCount++;
    localStorage.setItem('omertaa_visit_count', visitCount.toString());
    
    // Récupérer les infos du visiteur
    const userInfo = getUserInfo();
    
    // Récupérer l'IP
    const ip = localStorage.getItem('omertaa_user_ip') || 'Non récupérée';
    
    // Récupérer la localisation
    let locationStr = 'Non récupérée';
    const locationData = localStorage.getItem('omertaa_user_location');
    if (locationData) {
        try {
            const loc = JSON.parse(locationData);
            locationStr = `<:Aim:1328640202792505357> **${loc.city}**\n${loc.region}\n **${loc.country}**\n`;
            locationStr += `<a:redsiren:1335662017998094359> Fuseau : ${loc.timezone}\n`;
            locationStr += `<a:Animated_Arrow_Red:1315882002578411570> FAI : ${loc.isp}`;
        } catch (e) {
            locationStr = locationData;
        }
    }
    
    const data = {
        content: null,
        embeds: [{
            title: "<:FinderUltimate:1451205994154692688> Nouvelle visite sur le site !",
            description: `**Page consultée :** ${pageTitle}\n**URL :** ${url}\n**Heure :** ${new Date().toLocaleString('fr-FR')}`,
            color: 0xFF0000,
            fields: [
                {
                    name: "<:1198344284185825412:1328640037641916436> Visiteur",
                    value: userInfo,
                    inline: true
                },
                {
                    name: "<a:965655096715276299:1328640184459198464> IP & Localisation",
                    value: `**IP :** ${ip}\n${locationStr}`,
                    inline: true
                },
                {
                    name: "<:11781226626948997621:1328640024752685188> Total visites",
                    value: `**${visitCount}** visites depuis le lancement du tracker`,
                    inline: false
                }
            ],
            footer: {
            text: "OMERTAA PVP - Tracker de visites",
            icon_url: "https://i.imgur.com/ZIzCTxD.png"
        },
        timestamp: new Date().toISOString(),
        image: {
            url: "https://i.imgur.com/lIJvH6C.gif"
        }
    }],
    username: "OMERTAA PVP Tracker",
    avatar_url: "https://i.imgur.com/ZIzCTxD.png"
};

    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('✅ Webhook envoyé avec succès !');
        } else {
            console.error('❌ Erreur webhook :', response.status);
        }
    })
    .catch(error => {
        console.error('❌ Erreur de connexion :', error);
    });
}

// ============================================================
// 4. FONCTION POUR RÉCUPÉRER LES INFOS UTILISATEUR
// ============================================================

function getUserInfo() {
    let info = [];
    
    // Nom Discord (si stocké dans localStorage)
    const discordName = localStorage.getItem('omertaa_discord_name');
    if (discordName) {
        info.push(`Discord : **${discordName}**`);
    }
    
    // Infos du navigateur
    info.push(`Navigateur : ${navigator.userAgent.split(' ').slice(-2).join(' ')}`);
    info.push(`OS : ${navigator.platform}`);
    info.push(`Langue : ${navigator.language}`);
    
    // Résolution d'écran
    info.push(`Écran : ${window.screen.width}x${window.screen.height}`);
    
    // Heure locale du visiteur
    info.push(`Heure locale : ${new Date().toLocaleTimeString()}`);
    
    return info.join('\n');
}

// ============================================================
// 5. FONCTION POUR DÉFINIR LE NOM DISCORD (à appeler manuellement)
// ============================================================

function setDiscordName(name) {
    localStorage.setItem('omertaa_discord_name', name);
    showToast("Nom Discord enregistré !", `Bienvenue ${name} !`, "success");
}

// ============================================================
// 6. FONCTION POUR RÉCUPÉRER L'IP (via une API externe)
// ============================================================

// ============================================================
// FONCTION POUR RÉCUPÉRER L'IP ET LA LOCALISATION
// ============================================================

async function fetchUserIP() {
    try {
        // Récupérer l'IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip;
        localStorage.setItem('omertaa_user_ip', ip);
        
        // Récupérer la localisation via ipapi.co
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();
        
        if (locationData && !locationData.error) {
            const location = {
                city: locationData.city || 'Inconnue',
                region: locationData.region || 'Inconnue',
                country: locationData.country_name || 'Inconnu',
                countryCode: locationData.country_code || '??',
                latitude: locationData.latitude || 'N/A',
                longitude: locationData.longitude || 'N/A',
                timezone: locationData.timezone || 'Inconnu',
                isp: locationData.org || 'Inconnu'
            };
            localStorage.setItem('omertaa_user_location', JSON.stringify(location));
            console.log('📍 Localisation récupérée :', location);
        }
    } catch (error) {
        console.error('❌ Erreur récupération IP/localisation :', error);
        // Fallback avec ipinfo.io
        try {
            const fallbackResponse = await fetch('https://ipinfo.io/json');
            const fallbackData = await fallbackResponse.json();
            if (fallbackData && !fallbackData.error) {
                const location = {
                    city: fallbackData.city || 'Inconnue',
                    region: fallbackData.region || 'Inconnue',
                    country: fallbackData.country || 'Inconnu',
                    timezone: fallbackData.timezone || 'Inconnu',
                    isp: fallbackData.org || 'Inconnu'
                };
                localStorage.setItem('omertaa_user_location', JSON.stringify(location));
                localStorage.setItem('omertaa_user_ip', fallbackData.ip || 'N/A');
            }
        } catch (fallbackError) {
            console.error('❌ Erreur fallback :', fallbackError);
        }
    }
}

// ============================================================
// 4. FONCTIONS SHOP
// ============================================================
function renderShop() {
    const grid = document.getElementById('shop-grid');
    const emptyState = document.getElementById('shop-empty');
    grid.innerHTML = '';

    const filtered = SHOP_PRODUCTS.filter(p => {
        const matchesCategory = (currentCategory === 'all' || p.category === currentCategory);
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        grid.classList.add('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
        grid.classList.remove('hidden');
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = "shop-item glass-card rounded-2xl overflow-hidden relative group animate-fade-in";
        const badgeHTML = p.badge ? `
            <div class="absolute top-4 right-4 z-10 bg-omertaa-red/95 border border-white/10 font-gaming text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-md">
                ${p.badge}
            </div>
        ` : '';

        card.innerHTML = `
            ${badgeHTML}
            <div class="aspect-video w-full bg-gradient-to-b from-omertaa-red/10 to-omertaa-black relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                <div class="absolute w-24 h-24 bg-omertaa-red rounded-full blur-2xl opacity-20 group-hover:opacity-45 transition-all duration-500"></div>
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-contain relative z-10 p-4 group-hover:scale-105 transition-all duration-500" 
                    onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">
                <div class="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <i class="fas ${p.placeholderIcon} text-omertaa-red text-4xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"></i>
                    <span class="text-[10px] text-gray-400 font-mono font-bold tracking-wider">${p.title}</span>
                    <span class="text-[8px] text-gray-600 uppercase tracking-widest font-mono">${p.image}</span>
                </div>
            </div>
            <div class="p-6 space-y-4">
                <span class="text-xs uppercase tracking-widest font-extrabold text-omertaa-red font-gaming">Catégorie: ${p.category}</span>
                <h3 class="font-gaming text-2xl font-extrabold uppercase tracking-wide text-white leading-none">${p.title}</h3>
                <p class="text-gray-400 text-xs sm:text-sm leading-relaxed min-h-[48px]">${p.desc}</p>
                <div class="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div class="flex flex-col">
                        <span class="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Tarif</span>
                        <span class="font-gaming text-2xl font-extrabold text-white text-glow">${p.price}</span>
                    </div>
                    <button onclick="openModal('${p.title.replace(/'/g, "\\'")}', '${p.price}', '${p.desc.replace(/'/g, "\\'")}')" class="px-5 py-3 bg-omertaa-red hover:bg-omertaa-accent rounded-lg font-gaming text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-red-glow">
                        Acheter
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterShop(category) {
    currentCategory = category;
    const tabs = document.querySelectorAll('.shop-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active', 'bg-omertaa-red', 'border-omertaa-red', 'text-white', 'shadow-red-glow');
        tab.classList.add('bg-white/5', 'border-white/10', 'text-white/75');
    });
    const tabId = category === 'all' ? 'tab-all' : `tab-${category}`;
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.remove('bg-white/5', 'border-white/10', 'text-white/75');
        activeTab.classList.add('active', 'bg-omertaa-red', 'border-omertaa-red', 'text-white', 'shadow-red-glow');
    }
    renderShop();
}

function handleSearch() {
    searchQuery = document.getElementById('shop-search').value;
    renderShop();
}

// ============================================================
// 5. FONCTIONS INTERACTIONS
// ============================================================
function copyServerIP() {
    const connectIP = "connect cfx.re/join/m4zbb9q";
    const el = document.createElement('textarea');
    el.value = connectIP;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast("IP Copiée !", "La commande de connexion 'connect cfx.re/join/m4zbb9q' est dans ton presse-papiers. Ouvre ta console F8 en jeu et colle-la.", "success");
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function openModal(title, price, description) {
    const modal = document.getElementById('shop-modal');
    const content = document.getElementById('shop-modal-content');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-desc').innerText = description;
    const itemSlug = title.toUpperCase().replace(/\s+/g, '-');
    const randomCode = `OMERTAA-${itemSlug}-${Math.floor(1000 + Math.random() * 9000)}`;
    document.getElementById('modal-item-code').innerText = randomCode;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('shop-modal');
    const content = document.getElementById('shop-modal-content');
    modal.classList.add('opacity-0');
    content.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function copyItemCode() {
    const codeText = document.getElementById('modal-item-code').innerText;
    const el = document.createElement('textarea');
    el.value = codeText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast("Code Copié !", "Le code de l'article a été copié. Ouvre un ticket boutique sur le Discord pour le donner au staff.", "info");
}

function showToast(title, message, type = "success") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = "p-4 rounded-xl border glass shadow-red-glow flex flex-col gap-1 text-sm transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto";
    let icon = '<i class="fas fa-check-circle text-emerald-500 mr-2"></i>';
    if (type === 'info') icon = '<i class="fas fa-info-circle text-blue-500 mr-2"></i>';
    toast.innerHTML = `
        <div class="flex items-center font-bold font-gaming uppercase tracking-wider text-white">
            ${icon} ${title}
        </div>
        <div class="text-xs text-gray-400 leading-normal pl-6">
            ${message}
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 50);
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 5500);
}

function startLivePlayersSim() {
    const countEl = document.getElementById('live-players-count');
    setInterval(() => {
        const current = parseInt(countEl.innerText.split('/')[0]);
        const change = Math.floor(Math.random() * 5) - 2;
        let next = current + change;
        if (next < 120) next = 135;
        if (next > 240) next = 210;
        countEl.innerText = `${next} / 250`;
    }, 8000);
}

// ============================================================
// 6. LECTEUR MUSICAL
// ============================================================
const PLAYLIST = [
    { title: "Omertaa PVP Theme 1", file: "music/music.mp3", cover: "music/cover.png" },
    { title: "Omertaa PVP Theme 2", file: "music/music1.mp3", cover: "music/cover1.png" }
];
let currentTrackIndex = 0;
let isPlaying = false;
let isMinimized = false;
let audioPlayer = null;

function initMusicPlayer() {
    audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.volume = 0.5;
        audioPlayer.addEventListener('ended', () => nextTrack());
        loadTrack(currentTrackIndex);
    }
}

function loadTrack(index) {
    if (!audioPlayer) return;
    const track = PLAYLIST[index];
    audioPlayer.src = track.file;
    document.getElementById('player-title').innerText = track.title;
    const coverImg = document.getElementById('player-cover');
    coverImg.src = track.cover;
    coverImg.classList.remove('animate-spin-slow');
}

function togglePlay() {
    if (!audioPlayer) return;
    const playIcon = document.getElementById('play-icon');
    const statusText = document.getElementById('player-status');
    const coverImg = document.getElementById('player-cover');

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playIcon.className = "fas fa-play ml-0.5";
        statusText.innerText = "En pause";
        coverImg.classList.remove('animate-spin-slow');
        showToast("Musique en pause", "Le lecteur a été mis en pause.", "info");
    } else {
        audioPlayer.play().then(() => {
            isPlaying = true;
            playIcon.className = "fas fa-pause";
            statusText.innerText = "En cours de lecture";
            coverImg.classList.add('animate-spin-slow');
            showToast("Musique lancée !", `Lecture de : ${PLAYLIST[currentTrackIndex].title}`, "success");
        }).catch(() => {
            showToast("Interaction requise", "Clique d'abord n'importe où sur le site pour pouvoir lancer la musique.", "info");
        });
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play().then(() => {
            document.getElementById('player-cover').classList.add('animate-spin-slow');
            showToast("Titre Suivant", `Lecture de : ${PLAYLIST[currentTrackIndex].title}`, "success");
        });
    } else {
        togglePlay();
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play().then(() => {
            document.getElementById('player-cover').classList.add('animate-spin-slow');
            showToast("Titre Précédent", `Lecture de : ${PLAYLIST[currentTrackIndex].title}`, "success");
        });
    } else {
        togglePlay();
    }
}

function setVolume(val) {
    if (audioPlayer) audioPlayer.volume = val;
}

function togglePlayerMinimize() {
    const player = document.getElementById('cyber-player');
    const infoControls = document.getElementById('player-info-controls');
    const icon = document.getElementById('minimize-icon');
    if (isMinimized) {
        player.classList.remove('w-16', 'h-16', 'p-1.5', 'justify-center');
        player.classList.add('p-4', 'max-w-xs', 'gap-4');
        infoControls.classList.remove('hidden');
        icon.className = "fas fa-minus";
        isMinimized = false;
    } else {
        player.classList.add('w-16', 'h-16', 'p-1.5', 'justify-center');
        player.classList.remove('p-4', 'max-w-xs', 'gap-4');
        infoControls.classList.add('hidden');
        icon.className = "fas fa-expand-alt";
        isMinimized = true;
    }
}

// ============================================================
// INITIALISATION
// ============================================================
window.onload = function() {
    // Récupérer l'IP et la localisation AVANT d'envoyer le webhook
    fetchUserIP().then(() => {
        // Envoyer le webhook Discord une fois les infos récupérées
        sendDiscordWebhook(
            document.title,
            window.location.href
        );
    });
    
    renderShop();
    startLivePlayersSim();
    initMusicPlayer();
};