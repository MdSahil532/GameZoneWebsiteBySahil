import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nitendo',
  templateUrl: './nitendo.component.html',
  styleUrls: ['./nitendo.component.css']
})
export class NitendoComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  public actionGames=[
    {
      id: '1',
      name: 'The Legend of Zelda: Link\'s Awakening',
      img: 'zelda2.jpg',
      price: '1899 Inr'
    },
    {
      id: '2',
      name: 'Monster Hunter Rise',
      img: 'monster.jpg',
      price: '2199 Inr'
    },
    {
      id: '3',
      name: 'Marvel Ultimate Alliance 3: The Black Order',
      img: 'mrvel.jpg',
      price: '1999 Inr'
    },
    {
      id: '4',
      name: 'Luigi\'s Mansion 3',
      img: 'luigi.jpg',
      price: '1799 Inr'
    },
    {
      id: '5',
      name: 'The Legend of Zelda: Breath of the Wild',
      img: 'zelda.jfif',
      price: '1699'
    },
    {
      id: '6',
      name: 'Hyrule Warriors: Age of Calamity',
      img: 'HyruleWarriors.jpg',
      price: '2099'
    },
    {
      id: '7',
      name: 'Dragon Ball FighterZ',
      img: 'dragonball.jpg',
      price: '1899'
    },
    {
      id: '8',
      name: 'Astral Chain',
      img: 'Astral.jpg',
      price: '1599'
    },
    {
      id: '9',
      name: 'Bayonetta 2',
      img: 'bayonetta2.jpg',
      price: '1099'
    },
    {
      id: '10',
      name: 'Balan Wonderworld',
      img: 'Balan.jpg',
      price: '1299'
    },
    {
      id: '11',
      name: 'Apex Legends',
      img: 'apex.jpg',
      price: '1899'
    },
    {
      id: '12',
      name: 'Fortnite',
      img: 'fortnite.jpg',
      price: '1799'
    },
    {
      id: '13',
      name: 'Hades',
      img: 'hades.jpg',
      price: '1499'
    },
    {
      id: '14',
      name: 'Super Smash Bros. Ultimate',
      img: 'super-smash.webp',
      price: '1599'
    },
    {
      id: '15',
      name: 'Dark Souls',
      img: 'dark.jpg',
      price: '899'
    },
    {
      id: '16',
      name: 'The Elder Scrolls V: Skyrim',
      img: 'elderscroll.jpg',
      price: '1199'
    },
    {
      id: '17',
      name: 'Splatoon 2',
      img: 'splatoon2.jpg',
      price: '1399'
    },
    {
      id: '18',
      name: 'Yoshi\'s Crafted World',
      img: 'yoshi.jpg',
      price: '1599'
    }
  ];

  public adventureGames = [
    {
      id: '19',
      name: 'Ori and the Will of the',
      img: 'ori.jpg',
      price: '2299'
    },
    {
      id: '20',
      name: 'Bayonetta 3',
      img: 'Bayonetta3.jpg',
      price: '2099'
    },
    {
      id: '21',
      name: 'Thief Simulator',
      img: 'thief.jpg',
      price: '1699'
    },
    {
      id: '22',
      name: 'Pokémon Sword and Shield',
      img: 'sword-shield.jpg',
      price: '1899'
    },
    {
      id: '23',
      name: 'Ori and the Blind Forest',
      img: 'ori2.jpg',
      price: '1299'
    },
    {
      id: '24',
      name: 'The Legend of Zelda: Link\'s Awakening',
      img: 'zelda2.jpg',
      price: '1899 Inr'
    },
    {
      id: '25',
      name: 'Monster Hunter Rise',
      img: 'monster.jpg',
      price: '2199 Inr'
    },
    {
      id: '26',
      name: 'Hades',
      img: 'hades.jpg',
      price: '1499'
    },
    {
      id: '27',
      name: 'Hyrule Warriors: Age of Calamity',
      img: 'HyruleWarriors.jpg',
      price: '2099'
    },
    {
      id: '28',
      name: 'The Legend of Zelda: Breath of the Wild',
      img: 'zelda.jfif',
      price: '1699'
    },
    {
      id: '29',
      name: 'Luigi\'s Mansion 3',
      img: 'luigi.jpg',
      price: '1799 Inr'
    },
    {
      id: '30',
      name: 'Hollow Knight',
      img: 'hollow.jpg',
      price: '1599'
    },
    {
      id: '31',
      name: 'Lego City Undercover',
      img: 'lego.jpg',
      price: '1799'
    },
    {
      id: '32',
      name: 'L.A. Noire',
      img: 'La-Noire.jpg',
      price: '1299'
    },
    {
      id: '33',
      name: 'The Witcher 3: Wild Hunt',
      img: 'TheWitcher3.jpg',
      price: '1399'
    },
    {
      id: '34',
      name: 'Heaven\'s Vault',
      img: 'haven.jfif',
      price: '1499'
    },
     {
      id: '35',
      name: 'assassin\'s creed: the rebel collection',
      img: 'ac-rebel.jpg',
      price: '799'
    },
    {
      id: '36',
      name: 'Roki',
      img: 'roki-switch.jpg',
      price: '1299'
    }
  ];

  public fpsGames =[
    {
      id: '37',
      name: 'Doom Eternal',
      img: 'dom.jpg',
      price: '2199'
    },
    {
      id: '38',
      name: 'Wolfenstein II: The New Colossus',
      img: 'colossus.jpg',
      price: '1999'
    },
    {
      id: '39',
      name: 'Resident Evil 7: Biohazard',
      img: 'biohazard.jpg',
      price: '1799'
    },
    {
      id: '40',
      name: 'Wolfenstein: Youngblood',
      img: 'wolfenstein.jpg',
      price: '1899'
    },
    {
      id: '41',
      name: 'Doom 2016',
      img: 'doom-2016.jpg',
      price: '1599'
    },
    {
      id: '42',
      name: 'Hypercharge: Unboxed',
      img: 'hypercharge.jpg',
      price: '1699'
    },
    {
      id: '43',
      name: 'BioShock: The Collection',
      img: 'bioshock.jpg',
      price: '1499'
    },
    {
      id: '44',
      name: 'Overwatch',
      img: 'Over.jfif',
      price: '1599'
    },
    {
      id: '45',
      name: 'Ion Fury',
      img: 'ironfury.jpg',
      price: '1699'
    },
    {
      id: '46',
      name: 'Alien: Isolation',
      img: 'alienIso.jfif',
      price: '1399'
    },
    {
      id: '47',
      name: 'BioShock Infinite',
      img: 'bioInfinite.jpg',
      price: '1299'
    },
    {
      id: '48',
      name: 'Borderlands 2',
      img: 'bor2.jpg',
      price: '1199'
    },
    {
      id: '49',
      name: 'Metro: Redux',
      img: 'redux.jpg',
      price: '1299'
    },
    {
      id: '50',
      name: 'Warface',
      img: 'WarFace.jpg',
      price: '899'
    },
    {
      id: '51',
      name: 'Crysis',
      img: 'Crysis.jpg',
      price: '1099'
    },
    {
      id: '52',
      name: 'Call of Juarez: Gunslinger',
      img: 'juarez.jpg',
      price: '999'
    },
    {
      id: '53',
      name: 'Payday 2',
      img: 'payDay2.jpg',
      price: '899'
    },
    {
      id: '54',
      name: 'Bulletstorm',
      img: 'Bulletstorm 1.jpg',
      price: '799'
    },

  ];

  public sportsGames = [
    {
      id: '55',
      name: 'FIFA 21',
      img: 'fifa21.png',
      price: '2399'
    },
    {
      id: '56',
      name: 'NBA 2K21',
      img: 'nbk21.jpg',
      price: '2199'
    },
    {
      id: '57',
      name: 'PGA Tour 2K21',
      img: 'pga21.jpg',
      price: '1899'
    },
    {
      id: '58',
      name: 'Ao Tennis 2',
      img: 'AoTennis.jpg',
      price: '1999'
    },
    {
      id: '59',
      name: 'FIFA 20',
      img: 'fifa20.jpg',
      price: '1799'
    },
    {
      id: '60',
      name: 'NBA 2K20',
      img: 'nbk20.jpg',
      price: '1799'
    },
    {
      id: '61',
      name: 'Descenders',
      img: 'descenders.jpg',
      price: '1899'
    },
    {
      id: '62',
      name: 'Super Mega Baseball 3',
      img: 'super3.jpg',
      price: '1699'
    },
    {
      id: '63',
      name: 'WWE 2K Battle Grounds',
      img: 'wwe2k.jpg',
      price: '1899'
    },
    {
      id: '64',
      name: 'NBA 2K Play Grounds 2',
      img: 'nbaB2.jpg',
      price: '1599'
    },
    {
      id: '65',
      name: 'FIFA 18',
      img: 'fifa18.jpg',
      price: '1699'
    },
    {
      id: '66',
      name: 'Tennis World Tour',
      img: 'worldTour.jpg',
      price: '1599'
    },
    {
      id: '67',
      name: 'NBA 2K Play Grounds',
      img: 'NBAB.jpg',
      price: '1499'
    },
    {
      id: '68',
      name: 'Super Mega Baseball 2',
      img: 'mega.jpg',
      price: '1299'
    },
    {
      id: '69',
      name: 'Winter Sports Games',
      img: 'winter.jpg',
      price: '1399'
    },
    {
      id: '70',
      name: 'Captain Tsubasa: Rise of New Champions',
      img: 'captaintsubasa.jpg',
      price: '1599'
    },
    {
      id: '71',
      name: 'Arms',
      img: 'arms.jfif',
      price: '1499'
    },
    {
      id: '72',
      name: 'Mario & Sonic At The Olympic Games Tokyo 2000',
      img: 'olym.jpg',
      price: '1199'
    }
  ];

  public racingGames = [
    {
      id: '73',
      name: 'Gear Club Unlimited 2',
      img: 'gear.jpg',
      price: '1899'
    },
    {
      id: '74',
      name: 'V-Rally 4',
      img: 'vRally.jpg',
      price: '1999'
    },
    {
      id: '75',
      name: 'MotoGP 19',
      img: 'MotoGP19.jpg',
      price: '2099'
    },
    {
      id: '76',
      name: 'MX vs ATV All Out',
      img: 'mxVatv.jpg',
      price: '1799'
    },
    {
      id: '77',
      name: 'WRC 8',
      img: 'WRC8.png',
      price: '1799'
    },
    {
      id: '78',
      name: 'Super Street: The Game',
      img: 'super-street.png',
      price: '1699'
    },
    {
      id: '79',
      name: 'Crash Team Racing Nitro-Fueled',
      img: 'CrashTeam.png',
      price: '1899'
    },
    {
      id: '80',
      name: 'MotoGP 18',
      img: 'moto18.jpg',
      price: '1599'
    },
    {
      id: '81',
      name: 'MudRunner',
      img: 'mudRunner.webp',
      price: '1699'
    },
    {
      id: '82',
      name: 'Cars 3: Driven to Win',
      img: 'cars3.jpg',
      price: '1599'
    },
    {
      id: '83',
      name: 'Need for Speed: Hot Pursuit Remastered',
      img: 'NFS.jpg',
      price: '1399'
    },
    {
      id: '84',
      name: 'Asphalt 9: Legends',
      img: 'asphalt.jpg',
      price: '799'
    },
    {
      id: '85',
      name: 'Rise: Race The Future',
      img: 'rise-race.jpg',
      price: '1799'
    },
    {
      id: '86',
      name: 'Nickelodeon Kart Racers 2: Grand Prix',
      img: 'kart.jpg',
      price: '1899'
    },
    {
      id: '87',
      name: 'Fast RMX',
      img: 'fastRmx.jpg',
      price: '1599'
    },
    {
      id: '88',
      name: 'Team Sonic Racing',
      img: 'sonic.jpg',
      price: '1799'
    },
    {
      id: '89',
      name: 'Redout: Space Assault',
      img: 'redout.png',
      price: '1399'
    },
    {
      id: '90',
      name: 'Fast Racing Neo',
      img: 'fast.jpg',
      price: '1099'
    },

  ];

  public rpgGames = [
    {
      id: '91',
      name: 'Persona 5 Strikers',
      img: 'pss3.jpg',
      price: '2299'
    },
    {
      id: '92',
      name: 'The Outer Worlds',
      img: 'outer.jpg',
      price: '1999'
    },
    {
      id: '93',
      name: 'Xenoblade Chronicles 2',
      img: 'xenoblade.jpg',
      price: '1699'
    },
    {
      id: '94',
      name: 'Octopath Traveler',
      img: 'octopath.jpg',
      price: '1799'
    },
    {
      id: '95',
      name: 'The Legend of Zelda: Link\'s Awakening',
      img: 'zelda2.jpg',
      price: '1899 Inr'
    },
    {
      id: '96',
      name: 'Monster Hunter Rise',
      img: 'monster.jpg',
      price: '2199 Inr'
    },
    {
      id: '97',
      name: 'Dragon Quest XI',
      img: 'dragonXI.jpg',
      price: '1699'
    },
    {
      id: '98',
      name: 'Divinity: Original Sin II',
      img: 'divine.jpg',
      price: '1899'
    },
    {
      id: '99',
      name: 'The Legend of Zelda: Breath of the Wild',
      img: 'zelda.jfif',
      price: '1699'
    },
    {
      id: '100',
      name: 'The Witcher 3: Wild Hunt',
      img: 'TheWitcher3.jpg',
      price: '1399'
    },
    {
      id: '101',
      name: 'Fire Emblem: Three Houses',
      img: 'fireEEM.jpg',
      price: '1599'
    },
    {
      id: '102',
      name: 'Pokémon Sword and Shield',
      img: 'sword-shield.jpg',
      price: '1899'
    },
    {
      id: '103',
      name: 'Diablo III',
      img: 'Diablo3.webp',
      price: '1099'
    },
    {
      id: '104',
      name: 'The Elder Scrolls V: Skyrim',
      img: 'elderscroll.jpg',
      price: '1199'
    },
    {
      id: '105',
      name: 'Dark Souls',
      img: 'dark.jpg',
      price: '899'
    },
    {
      id: '106',
      name: 'Bravely Default 2',
      img: 'bravely.jpg',
      price: '1999'
    },
    {
      id: '107',
      name: 'Pokémon: Let\'s Go, Pikachu!',
      img: 'pokemon.jpg',
      price: '1399'
    },
    {
      id: '108',
      name: 'Paper Mario: The Origami King',
      img: 'paperMario.jfif',
      price: '1599'
    }

  ];

  ngOnInit(): void {


    setTimeout(() => {
      this.val = 2;
      
    }, 2000);
    


  }

}
