/* eslint-disable camelcase */

const DungeonData = {}

DungeonData.levels = [
  12, 21, 36, 51, 66, 81, 96, 111, 126, 141, 156, 171, 186, 201, 216,
]
DungeonData.statis = [1, 11, 21, 31, 41, 51]
DungeonData.Dungeons = {
  12: ['Pâturage des bouftous', 'Le tofulailler', 'Larventura'],
  21: ['Abraknes', 'Le caveau relevé', 'Piou lahoupe'],
  36: ['Le papaturage Royal', 'La montagne Adezieu', 'Les champs pourchan'],
  51: [
    'Antre de la perlouze noire',
    "l'antre oubliée",
    'Bwork',
    'La skouale sèche',
    'Mollusky',
    'Kokolantha',
    'Château des cwabes',
  ],
  66: [
    'Les Ratacombes',
    'Temple du grand orrok',
    'Corbeau-cave',
    'Truchière abandonnée',
    'Domaine du petit groin',
    'palais du tsu',
    'Autel de la Lune',
    'Arakne',
  ],
  81: [
    'Sliptorium',
    'Misolée',
    'Château de Wagnar',
    'Trool Academy',
    'Hammamoule',
    'Caverne des slekymoses',
    'Scarrière abandonnée',
    'Nécropoil de Morbax',
  ],
  96: [
    "L'arène dansante",
    'Glaglacier Cornu',
    "Niche du Yech'Ti'Wawa",
    'Donjon gelée',
    'Repaire des magik Ritkus',
    'Chuchobase',
  ],
  111: [
    "Pot d'hagen-glass",
    "Aile de l'ambassadrice",
    'Tour gelée',
    'Cacterre',
    'Caverne smarrante',
    'Flaqueux',
    'Pichine',
  ],
  126: [
    "Temple de l'empeleul lenald",
    'Black Wabbit',
    'Wabbit',
    'Noirespore',
    'Fac Occultée',
    'Domaine de la trouffe salée',
    'Abraknyde',
  ],
  141: [
    'Vignoble ignoble',
    'Château du wa wabbit',
    'Wesewve de cawottes abandonnée',
    'Srambad',
    'Enutrosor',
    'Blopéra',
    'Source du mal',
  ],
  156: [
    'Fabrique méka',
    'E-bou',
    'Repaire de Kali',
    'Riktus Elite',
    "Roub'Bar",
    'Le lampionaute',
    'La patapoutrerie',
  ],
  171: [
    'Crocodailles',
    'Kannivores',
    'Kannibouls',
    'Tropikes',
    'Citée interdite',
    'Gerbouille',
  ],
  186: [
    'Tanière des blérox',
    "Volcan Or'Hodruin",
    'Sanctuaire des Dragoeufs',
    'la crête givrée',
    'Tombeau de Pandala',
    'Canyon des fléopards',
    'usine Higourg',
  ],
  201: ['Toudrasoirs', 'Cagnardeurs', 'Vandaliénés', 'Mansots', 'Carapattes'],
  216: ['Phytomorphes', 'Vidéants', 'Démhorribles', 'Égarés', 'Ravageurs'],
}
DungeonData.bu = {
  66: ["Antre d'excarnus"],
  81: ['Antre du meulou'],
  96: ['Antre du Corbeau Noir', 'Antre du boufrog'],
  111: ['Antre du Dragon-Cochon'],
  156: ['Plateau des haut-vents'],
  171: ['Cime du grand totem'],
  186: ["Nogord l'ezarélé", 'Pointe du mont Zinit'],
  200: ["Dimension-objet d'ombrage"],
  216: ['Palais de Rushu'],
}

DungeonData.special = {
  81: ['Salle de musculation de Megathon', 'Atelier Abandonné'],
  96: ['Chaufferie de merkator'],
  111: ['Fosse du tourmenteur'],
  126: ['Sanctuaire de mihmol'],
}

DungeonData.breach = {
  21: ['Tainéla'],
  66: ['Sufokia'],
  111: ['Frigost', 'Amakna'],
  141: ['Bonta'],
  171: ['Moon'],
  201: ['Mont Zinit', 'Osamosa'],
  216: ['Skurute 1', 'Shukrute 2'],
}

export default DungeonData
