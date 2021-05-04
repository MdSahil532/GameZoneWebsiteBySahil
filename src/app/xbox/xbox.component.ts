import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.css']
})
export class XboxComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  
  public xboxAdventureGames = [
    
    {
      id: '1',
      name: 'Little Nightmares 2',
      img: 'little.jpg',
      price: '2199 Inr'
    },
    {
      id: '2',
      name:'Ori and the Will of the Wisps',
      img: 'ori.jpg',
      price: '1999 Inr'
    },
    {
      id: '3',
      name:'Control',
      img: 'control.jpg',
      price: '1199 Inr'
    },
    {
      id: '4',
      name:'A Way Out',
      img: 'wayOut.jpg',
      price: '1599 Inr'
    },
    {
      id: '5',
      name:'Twin Mirror',
      img: 'TwinMirror.jpg',
      price: '1799 Inr'
    },
    {
      id: '6',
      name:'Tell Me Why',
      img: 'tellMe.jpg',
      price: '1299 Inr'
    },
    {
      id: '7',
      name:'Destroy All Humans!',
      img: 'allHuman.jpg',
      price: '1499 Inr'
    },
    {
      id: '8',
      name:'Resident Evil 3',
      img: 'res3.jpeg',
      price: '1799 Inr'
    },
    {
      id: '9',
      name:'Sea of Thieves',
      img: 'SeoOf.jpg',
      price: '1799 Inr'
    },
    {
      id: '10',
      name:'Hellblade: Senua\'s Sacrifice',
      img: 'hellblade.jpg',
      price: '1699 Inr'
    },
    {
      id: '11',
      name:'Red Dead Redemption II',
      img: 'red.jpg',
      price: '1699 Inr'
    },
    {
      id: '12',
      name:'The Occupation',
      img: 'occu.jpg',
      price: '1499 Inr'
    },
    {
      id: '13',
      name:'Hitman 2',
      img: 'htman2.jpg',
      price: '1899 Inr'
    },
    {
      id: '14',
      name:'Just Cause 4',
      img: 'just cause.jpg',
      price: '1499 Inr'
    },
    {
      id: '15',
      name:'Middle-earth: Shadow of Mordor',
      img: 'middleEarth.jpg',
      price: '699 Inr'
    },
    {
      id: '16',
      name:'Rise of the Tomb Raider',
      img: 'RiseTomb.jpg',
      price: '799 Inr'
    },
    {
      id: '17',
      name:'The Walking Dead: A New Frontier',
      img: 'walking.jpg',
      price: '599 Inr'
    },
    {
      id: '18',
      name:'ARK: Survival Evolved',
      img: 'ark.jpg',
      price: '899 Inr'
    }
  ];

  public xboxRacingGames = [
    {
      id: '19',
      name: 'Need For Speed: Heat',
      img: 'nfsHeat.jpg',
      price: '1599 Inr'
    },
    {
      id: '20',
      name:'The Crew 2',
      img: 'crew2.jpg',
      price: '1699 Inr'
    },
    {
      id: '21',
      name:'Ride 4',
      img: 'ride4.jpg',
      price: '1899 Inr'
    },
    {
      id: '22',
      name:'Inertial Drift',
      img: 'Iner.jpg',
      price: '1699 Inr'
    },
    {
      id: '23',
      name:'Need For Speed: Payback',
      img: 'nfsPay.jpg',
      price: '1399 Inr'
    },
    {
      id: '24',
      name:'Dirt 5',
      img: 'dirt5.jpg',
      price: '1699 Inr'
    },
    {
      id: '25',
      name:'Project Cars 3',
      img: 'project3.jpg',
      price: '1999 Inr'
    },
    {
      id: '26',
      name:'Forza Horizon 4',
      img: 'forza.jpg',
      price: '1499 Inr'
    },
    {
      id: '27',
      name:'Project Cars 2',
      img: 'project2.jpeg',
      price: '1299 Inr'
    },
    {
      id: '28',
      name:'DiRT Rally 2.0',
      img: 'dirt2.jpg',
      price: '1499 Inr'
    },
    {
      id: '29',
      name:'Grid',
      img: 'grid.jpg',
      price: '1199 Inr'
    },
    {
      id: '30',
      name:'NASCAR Heat 5',
      img: 'NASCAR5.jpg',
      price: '1599 Inr'
    },
    {
      id: '31',
      name:'WRC 9',
      img: 'wrc9.jpg',
      price: '2099 Inr'
    },
    {
      id: '32',
      name:'SnowRunner',
      img: 'snow.png',
      price: '1899 Inr'
    },
    {
      id: '33',
      name:'F1 2020',
      img: 'f12020.jpg',
      price: '1699 Inr'
    },
    {
      id: '34',
      name:'Onrush',
      img: 'onRush.jpg',
      price: '1299 Inr'
    },
    {
      id: '35',
      name:'Cars 3: Driven to Win',
      img: 'car.jpg',
      price: '1099 Inr'
    },
    {
      id: '36',
      name:'Forza Motorsport 7',
      img: 'forza7.jpg',
      price: '899 Inr'
    }
  ];

  public xboxActionGames = [
    {
      id: '37',
      name: 'Mortal Kombat 11',
      img: 'kombat.jpg',
      price: '1399 Inr'
    },
    {
      id: '38',
      name:'Gears 5',
      img: 'gears5.jpg',
      price: '1699 Inr'
    },
    {
      id: '39',
      name:'Devil May Cry 5',
      img: 'devil2.jpg',
      price: '1299 Inr'
    },
    {
      id: '40',
      name:'Fortnite',
      img: 'fortnite.jpg',
      price: '1599 Inr'
    },
    {
      id: '41',
      name:'Batman: Arkham Knight',
      img: 'bat.png',
      price: '799 Inr'
    },
    {
      id: '42',
      name:'Hellblade: Senua\'s Sacrifice',
      img: 'hellblade.jpg',
      price: '1699 Inr'
    },
    {
      id: '43',
      name:'Call of Duty: Modern Warfare',
      img: 'callOf.webp',
      price: '999 Inr'
    },
    {
      id: '44',
      name:'Destiny 2',
      img: 'destiny2.0.jpg',
      price: '1099 Inr'
    },
    {
      id: '45',
      name:'Call Of Duty: Warzone',
      img: 'warzone.jpg',
      price: '1599 Inr'
    },
    {
      id: '46',
      name:'Quantum Break',
      img: 'quantum.jpg',
      price: '1499 Inr'
    },
    {
      id: '47',
      name:'Doom Ethernal',
      img: 'DOOM.jpg',
      price: '1699 Inr'
    },
    {
      id: '48',
      name:'Just Cause 4',
      img: 'just cause.jpg',
      price: '1499 Inr'
    },
    {
      id: '49',
      name:'Nier: Automata',
      img: 'nierAuto.jpg',
      price: '1399 Inr'
    },
    {
      id: '50',
      name:'Gears Of War 4',
      img: 'gear4.jpg',
      price: '1099 Inr'
    },
    {
      id: '51',
      name:'Halo 5 Guardians',
      img: 'halo5.jpg',
      price: '1199 Inr'
    },
    {
      id: '52',
      name:'Assassin\'s Creed: Origins',
      img: 'origin.jpg',
      price: '1299 Inr'
    },
    {
      id: '53',
      name:'Star Wars Jedi: Fallen Order',
      img: 'star.jpg',
      price: '2099 Inr'
    },
    {
      id: '54',
      name:'Metal Gear Solid V: The Phantom Pain',
      img: 'metal.jpg',
      price: '699.00 Inr'
    }
  ];

  
  public XboxFpsGames = [
    {
      id: '55',
      name: 'Doom Ethernal',
      img: 'dom.jpg',
      price: '1899 Inr'
    },
    {
      id: '56',
      name:'Metro Exodus',
      img: 'metro.jpg',
      price: '1699 Inr'
    },
    {
      id: '57',
      name:'Battlefield V',
      img: 'battle5.jpg',
      price: '1299 Inr'
    },
    {
      id: '58',
      name:'Wolfenstein II: The New Colossus',
      img: 'colossus.jpg',
      price: '999 Inr'
    },
    {
      id: '59',
      name:'Battlefield 1',
      img: 'battle1.jpg',
      price: '1399 Inr'
    },
    {
      id: '60',
      name:'Titanfall 2',
      img: 'titan2.jpg',
      price: '1199 Inr'
    },
    {
      id: '61',
      name:'Far Cry5',
      img: 'far5.webp',
      price: '1455 Inr'
    },
    {
      id: '62',
      name:'Call of Duty: WWII',
      img: 'callWW.jpg',
      price: '1499 Inr'
    },
    {
      id: '63',
      name:'Prey',
      img: 'Prey.jpg',
      price: '1299 Inr'
    },
    {
      id: '64',
      name:'Deus Ex: Mankind Divided',
      img: 'deus.png',
      price: '1099 Inr'
    },
    {
      id: '65',
      name:'RAGE 2',
      img: 'rage.jpg',
      price: '1799 Inr'
    },
    {
      id: '66',
      name:'Star Wars Battlefront 2',
      img: 'bat2.jpg',
      price: '899 Inr'
    },
    {
      id: '67',
      name:'Halo 5 Guardians',
      img: 'halo5.jpg',
      price: '1199 Inr'
      
    },
    {
      id: '68',
      name:'Call of Duty: Black Ops 4',
      img: 'blackOps4.jpg',
      price: '1099.00 Inr'
    },
    {
      id: '69',
      name:'BioShock: The Collection',
      img: 'bioshock.jpg',
      price: '799.00 Inr'
    },
    {
      id: '70',
      name:'Wolfenstein: The New Order',
      img: 'newOrder.jpg',
      price: '899 Inr'
    },
    {
      id: '71',
      name:'Insurgency: Sandstorm',
      img: 'insur.jpg',
      price: '1199 Inr'
    },
    {
      id: '72',
      name:'Tom Clancy\'s Rainbow Six Siege',
      img: 'tom.jfif',
      price: '799 Inr'
    }
  ];


  public xboxRpgGames = [
    {
      id: '73',
      name: 'Assassin\'s Creed Valhalla',
      img: 'acVal.jpg',
      price: '1899 Inr'
    },
    {
      id: '74',
      name:'Anthem',
      img: 'Anthem.jpg',
      price: '2099 Inr'
    },
    {
      id: '75',
      name:'Yakuza: Like a Dragon',
      img: 'Yaku.jpg',
      price: '1999 Inr'
    },
    {
      id: '76',
      name:'Wasteland 3',
      img: 'wasteland.jpg',
      price: '1399 Inr'
    },
    {
      id: '77',
      name:'Dragon Ball Z: Kakarot',
      img: 'dargonZKa.jpg',
      price: '1699 Inr'
    },
    {
      id: '78',
      name:'The Outer Worlds',
      img: 'outer3.jpg',
      price: '1599 Inr'
    },
    {
      id: '79',
      name:'Middle-earth: Shadow of War',
      img: 'Middle.jpg',
      price: '1455 Inr'
    },
    {
      id: '80',
      name:'shadow of the tomb raider',
      img: 'shadow1.jpg',
      price: '1699 Inr'
    },
    {
      id: '81',
      name:'assassin\'s creed odyssey',
      img: 'ody.jpg',
      price: '1499 Inr'
    },
    {
      id: '82',
      name:'The Division 2',
      img: 'thedivision2.jpg',
      price: '1499. Inr'
    },
    {
      id: '83',
      name:'Nier: Automata',
      img: 'nierAuto.jpg',
      price: '1399 Inr'
    },
    {
      id: '84',
      name:'The Witcher 3: Wild Hunt',
      img: 'witch.jpg',
      price: '1299 Inr'
    },
    {
      id: '85',
      name:'Monster Hunter: World',
      img: 'mhw.jpg',
      price: '899 Inr'
    },
    {
      id: '86',
      name:'Dark Souls III',
      img: 'dark.jpg',
      price: '1099 Inr'
    },
    {
      id: '87',
      name:'Kingdom Come: Deliverance',
      img: 'kingdom.jpg',
      price: '1499 Inr'
    },
    {
      id: '88',
      name:'Mass Effect Andromeda',
      img: 'Andromeda.jpg',
      price: '1299 Inr'
    },
    {
      id: '89',
      name:'Final Fantasy XV',
      img: 'finalXV.jpg',
      price: '899 Inr'
    },
    {
      id: '90',
      name:'Divinity: Original Sin II',
      img: 'divine.jpg',
      price: '1199 Inr'
    }
  ];

  public xboxSportGames = [
    {
      id: '91',
      name: 'FIFA 21',
      img: 'fifa21.png',
      price: '2299 Inr'
    },
    {
      id: '92',
      name:'eFootball PES 2021',
      img: 'pes2021.jpg',
      price: '2099 Inr'
    },
    {
      id: '93',
      name:'UFC 4',
      img: 'ufc4.jpg',
      price: '1999 Inr'
    },
    {
      id: '94',
      name:'NBA 2K21',
      img: 'nbk21.jpg',
      price: '2199 Inr'
    },
    {
      id: '95',
      name:'NHL 21',
      img: 'NHL21.jpg',
      price: '1899 Inr'
    },
    {
      id: '96',
      name:'Madden 21',
      img: 'mad21.jpg',
      price: '1799 Inr'
    },
    {
      id: '97',
      name:'PGA Tour 2K21',
      img: 'pga21.jpg',
      price: '1659 Inr'
    },
    {
      id: '98',
      name:'Tony Hawk\'s Pro Skater 1 + 2',
      img: 'proSket.jpg',
      price: '1699 Inr'
    },
    {
      id: '99',
      name:'FIFA 20',
      img: 'fifa20.jpg',
      price: '1599 Inr'
    },
    {
      id: '100',
      name:'eFootball PES 2021',
      img: 'pes2020.jpg',
      price: '1499. Inr'
    },
    {
      id: '101',
      name:'WWE 2K19',
      img: 'wwe19.png',
      price: '1399 Inr'
    },
    {
      id: '102',
      name:'NBA 2K20',
      img: 'nbk20.jpg',
      price: '1599 Inr'
    },
    {
      id: '103',
      name:'Captain Tsubasa: Rise of New Champions',
      img: 'captaintsubasa.jpg',
      price: '1799 Inr'
    },
    {
      id: '104',
      name:'The Golf Club 2019 featuring PGA Tour',
      img: 'golf.jpg',
      price: '1599 Inr'
    },
    {
      id: '105',
      name:'Steep',
      img: 'steep.webp',
      price: '1299 Inr'
    },
    {
      id: '106',
      name:'Lonely Mountains: Downhill',
      img: 'lonely.jpg',
      price: '1499 Inr'
    },
    {
      id: '107',
      name:'Rocket League',
      img: 'rocketleague.jpg',
      price: '799 Inr'
    },
    {
      id: '108',
      name:'Summer Sports Games',
      img: 'summersports.jpg',
      price: '899 Inr'
    }
  ];





  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);


  }

}
