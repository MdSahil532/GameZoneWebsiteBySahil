import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-play-station',
  templateUrl: './play-station.component.html',
  styleUrls: ['./play-station.component.css']
})
export class PlayStationComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  public adventureGames = [
    
    {
      id:'1',
      name: 'Ghost of Tsushima',
      img: 'ghost.jpg',
      price: '1699 Inr'
    },
    {
      id:'2',
      name:'Uncharted 4: A thief\'s End',
      img: 'un4.jpg',
      price: '799 Inr'
    },
    {
      id:'3',
      name:'Control',
      img: 'control.jpg',
      price: '799.00 Inr'
    },
    {
      id:'4',
      name:'Death Standing',
      img: 'Death.jpg',
      price: '1599 Inr'
    },
    {
      id:'5',
      name:'Detroit Become Human',
      img: 'detroit.jpg',
      price: '799 Inr'
    },
    {
      id:'6',
      name:'God Of War',
      img: 'God.jpg',
      price: '1299 Inr'
    },
    {
      id:'7',
      name:'Hitman 3',
      img: 'hitman3.png',
      price: '1899 Inr'
    },
    {
      id:'8',
      name:'Horizon Zero Down',
      img: 'hori.jpg',
      price: '999 Inr'
    },
    {
      id:'9',
      name:'Uncharted: Lost Legacy',
      img: 'legacy.jpg',
      price: '1799 Inr'
    },
    {
      id:'10',
      name:'Assassins\'s Creed Odyssey',
      img: 'ody.jpg',
      price: '1499 Inr'
    },
    {
      id:'11',
      name:'The Last Of Us II',
      img: 'ofUs.jpg',
      price: '2299 Inr'
    },
    {
      id:'12',
      name:'Red Dead Redemption II',
      img: 'red.jpg',
      price: '1699 Inr'
    },
    {
      id:'13',
      name:'Marvel\'s Spider Man',
      img: 'spider.jpg',
      price: '1099 Inr'
    },
    {
      id:'14',
      name:'Marvel\'s Spider-Man: Miles Morales',
      img: 'spider2.jpg',
      price: '1899 Inr'
    },
    {
      id:'15',
      name:'Life Is Strange 2',
      img: 'strange.jpg',
      price: '699 Inr'
    },
    {
      id:'16',
      name:'Until Down',
      img: 'Until.jpg',
      price: '799 Inr'
    },
    {
      id:'17',
      name:'Marvel\'s Avengers',
      img: 'ave.png',
      price: '2099 Inr'
    },
    {
      id:'18',
      name:'Sekiro: Shadows Die Twice',
      img: 'sek.jfif',
      price: '1199 Inr'
    }

  ];


  public actionGames = [

    {
      id:'19',
      name: 'Mortal Kombat 11',
      img: 'kombat.jpg',
      price: '1399 Inr'
    },
    {
      id:'20',
      name:'Ghost Of Tsushima',
      img: 'ghost.jpg',
      price: '1699 Inr'
    },
    {
      id:'21',
      name:'Devil May Cry 5',
      img: 'devil.jpg',
      price: '1299 Inr'
    },
    {
      id:'22',
      name:'Fortnite',
      img: 'fortnite.jpg',
      price: '1599 Inr'
    },
    {
      id:'23',
      name:'Cyberpunk 2077',
      img: 'cyber.jpg',
      price: '1999 Inr',
    },
    {
      id:'24',
      name:'God Of War',
      img: 'God.jpg',
      price: '1299 Inr'
    },
    {
      id:'25',
      name:'Call of Duty: Modern Warfare',
      img: 'callOf.webp',
      price: '999 Inr'
    },
    {
      id:'26',
      name:'Just Cause 4',
      img: 'just4.jpg',
      price: '1499 Inr'
    },
    {
      id:'27',
      name:'Overwatch',
      img: 'Over.jfif',
      price: '1799 Inr'
    },
    {
      id:'28',
      name:'Call Of Duty: Warzone',
      img: 'warzone.jpg',
      price: '1599 Inr'
    },
    {
      id:'29',
      name:'Nioh 2',
      img: 'nio.jpeg',
      price: '2099 Inr'
    },
    {
      id:'30',
      name:'Doom Ethernal',
      img: 'DOOM.jpg',
      price: '1699 Inr'
    },
    {
      id:'31',
      name:'Days Gone',
      img: 'days.jpg',
      price: '1799 Inr'
    },
    {
      id:'32',
      name:'Destiny 2',
      img: 'destiny2.0.jpg',
      price: '1099 Inr'
    },
    {
      id:'33',
      name:'Apex Legends',
      img: 'apex.jpg',
      price: '1199 Inr'
    },
    {
      id:'34',
      name:'Final Fantasy VII Remake',
      img: 'fantasy.jpg',
      price: '1499 Inr'
    },
    {
      id:'35',
      name:'Star Wars Jedi: Fallen Order',
      img: 'star.jpg',
      price: '2099 Inr'
    },
    {
      id:'36',
      name:'Borderlands 3',
      img: 'border.jpg',
      price: '1999 Inr'
    }
  ];

  public racingGames = [

    {
      id:'37',
      name: 'Need For Speed: Heat',
      img: 'nfsHeat.jpg',
      price: '1599 Inr'
    },
    {
      id:'38',
      name:'The Crew 2',
      img: 'crew2.jpg',
      price: '1699 Inr'
    },
    {
      id:'39',
      name:'Gran Turismo Sport',
      img: 'GranTurismo.jpg',
      price: '1299 Inr'
    },
    {
      id:'40',
      name:'Gravel',
      img: 'Gravel.jpg',
      price: '799 Inr'
    },
    {
      id:'41',
      name:'Need For Speed: Payback',
      img: 'nfsPay.jpg',
      price: '1399 Inr'
    },
    {
      id:'42',
      name:'Dirt 5',
      img: 'dirt5.jpg',
      price: '1699 Inr'
    },
    {
      id:'43',
      name:'Project Cars 3',
      img: 'project3.jpg',
      price: '1999 Inr'
    },
    {
      id:'44',
      name:'Inertial Drift',
      img: 'Iner.jpg',
      price: '1699 Inr'
    },
    {
      id:'45',
      name:'Forza Horizon 4',
      img: 'forza.jpg',
      price: '1499 Inr'
    },
    {
      id:'46',
      name:'Project Cars 2',
      img: 'project2.jpeg',
      price: '1299 Inr'
    },
    {
      id:'47',
      name:'Dirt Rally 2.0',
      img: 'dirt2.jpg',
      price: '1099 Inr'
    },
    {
      id:'48',
      name:'Grid',
      img: 'grid.jpg',
      price: '1199 Inr'
    },
    {
      id:'49',
      name:'Assetto Corsa Competizione',
      img: 'assetto.jpg',
      price: '999 Inr'
    },
    {
      id:'50',
      name:'WRC 8',
      img: 'w2c.jpg',
      price: '1099 Inr'
    },
    {
      id:'51',
      name:'SnowRunner',
      img: 'snow.png',
      price: '1899 Inr'
    },
    {
      id:'52',
      name:'F1 2020',
      img: 'f12020.jpg',
      price: '1699 Inr'
    },
    {
      id:'53',
      name:'Cars 3: Driven to Win',
      img: 'car.jpg',
      price: '1099 Inr'
    },
    {
      id:'54',
      name:'Team Sonic Racing',
      img: 'sonic.jpg',
      price: '1499 Inr'
    }
  ];


  public fpsGames = [

    {
      id:'55',
      name: 'Doom Ethernal',
      img: 'dom.jpg',
      price: '1899 Inr'
    },
    {
      id:'56',
      name:'Metro Exodus',
      img: 'metro.jpg',
      price: '1699 Inr'
    },
    {
      id:'57',
      name:'Battlefield V',
      img: 'battle5.jpg',
      price: '1299 Inr'
    },
    {
      id:'58',
      name:'Wolfenstein II: The New Colossus',
      img: 'colossus.jpg',
      price: '999 Inr'
    },
    {
      id:'59',
      name:'Battlefield 1',
      img: 'battle1.jpg',
      price: '1399 Inr'
    },
    {
      id:'60',
      name:'Titanfall 2',
      img: 'titan2.jpg',
      price: '1199 Inr'
    },
    {
      id:'61',
      name:'Far Cry5',
      img: 'far5.webp',
      price: '1455 Inr'
    },
    {
      id:'62',
      name:'Call of Duty: WWII',
      img: 'callWW.jpg',
      price: '1499 Inr'
    },
    {
      id:'63',
      name:'Prey',
      img: 'Prey.jpg',
      price: '1299 Inr'
    },
    {
      id:'64',
      name:'Resident Evil 7: Biohazard',
      img: 'resEvil.jpg',
      price: '1099 Inr'
    },
    {
      id:'65',
      name:'RAGE 2',
      img: 'rage.jpg',
      price: '1799 Inr'
    },
    {
      id:'66',
      name:'Star Wars Battlefront 2',
      img: 'bat2.jpg',
      price: '899 Inr'
    },
    {
      id:'67',
      name:'Deus Ex: Mankind Divided',
      img: 'deus.png',
      price: '1099 Inr'
    },
    {
      id:'68',
      name:'Firewall: Zero Hour',
      img: 'fireWall.jpg',
      price: '1099 Inr'
    },
    {
      id:'69',
      name:'Call of Duty: Black Ops 4',
      img: 'blackOps4.jpg',
      price: '1099 Inr'
    },
    {
      id:'70',
      name:'Fallout 4',
      img: 'Fallout.jpg',
      price: '799 Inr'
    },
    {
      id:'71',
      name:'Wolfenstein: The New Order',
      img: 'newOrder.jpg',
      price: '899 Inr'
    },
    {
      id:'72',
      name:'Killing Floor 2',
      img: 'killing.png',
      price: '1199 Inr'
    }
  ];

  public rpgGames = [
    {
      id:'73',
      name: 'Assassin\'s Creed Valhalla',
      img: 'acVal.jpg',
      price: '1899 Inr'
    },
    {
      id:'74',
      name:'Nioh 2',
      img: 'nio.jpeg',
      price: '2099 Inr'
    },
    {
      id:'75',
      name:'Yakuza: Like a Dragon',
      img: 'Yaku.jpg',
      price: '1999 Inr'
    },
    {
      id:'76',
      name:'Remnant: From the Ashes',
      img: 'rem.jpg',
      price: '1399 Inr'
    },
    {
      id:'77',
      name:'Dragon Ball Z: Kakarot',
      img: 'dargonZKa.jpg',
      price: '1699 Inr'
    },
    {
      id:'78',
      name:'Anthem',
      img: 'Anthem.jpg',
      price: '2099 Inr'
    },
    {
      id:'79',
      name:'The Outer Worlds',
      img: 'outer3.jpg',
      price: '1599 Inr'
    },
    {
      id:'80',
      name:'Middle-earth: Shadow of War',
      img: 'Middle.jpg',
      price: '1455 Inr'
    },
    {
      id:'81',
      name:'shadow of the tomb raider',
      img: 'shadow1.jpg',
      price: '1699 Inr'
    },
    {
      id:'82',
      name:'assassin\'s creed odyssey',
      img: 'ody.jpg',
      price: '1499 Inr'
    },
    {
      id:'83',
      name:'Final Fantasy VII Remake',
      img: 'fantasy.jpg',
      price: '1499 Inr'
    },
    {
      id:'84',
      name:'The Witcher 3: Wild Hunt',
      img: 'witch.jpg',
      price: '1299 Inr'
    },
    {
      id:'85',
      name:'Monster Hunter: World',
      img: 'mhw.jpg',
      price: '899 Inr'
    },
    {
      id:'86',
      name:'Dark Souls III',
      img: 'dark.jpg',
      price: '1099 Inr'
    },
    {
      id:'87',
      name:'Kingdom Come: Deliverance',
      img: 'kingdom.jpg',
      price: '1499 Inr'
    },
    {
      id:'88',
      name:'The Elder Scrolls Online',
      img: 'elder.jpg',
      price: '799 Inr'
    },
    {
      id:'89',
      name:'Final Fantasy XV',
      img: 'finalXV.jpg',
      price: '899 Inr'
    },
    {
      id:'90',
      name:'Divinity: Original Sin II',
      img: 'divine.jpg',
      price: '1199 Inr'
    }
  ];


  public psSportGames = [
    {
      id:'91',
      name: 'FIFA 21',
      img: 'fifa21.png',
      price: '2299 Inr'
    },
    {
      id:'92',
      name:'eFootball PES 2021',
      img: 'pes2021.jpg',
      price: '2099 Inr'
    },
    {
      id:'93',
      name:'UFC 4',
      img: 'ufc4.jpg',
      price: '1999 Inr'
    },
    {
      id:'94',
      name:'NBA 2K21',
      img: 'nbk21.jpg',
      price: '2199 Inr'
    },
    {
      id:'95',
      name:'NHL 21',
      img: 'NHL21.jpg',
      price: '1899 Inr'
    },
    {
      id:'96',
      name:'Madden 21',
      img: 'mad21.jpg',
      price: '1799 Inr'
    },
    {
      id:'97',
      name:'PGA Tour 2K21',
      img: 'pga21.jpg',
      price: '1659 Inr'
    },
    {
      id:'98',
      name:'Tony Hawk\'s Pro Skater 1 + 2',
      img: 'proSket.jpg',
      price: '1699 Inr'
    },
    {
      id:'99',
      name:'FIFA 20',
      img: 'fifa20.jpg',
      price: '1599 Inr'
    },
    {
      id:'100',
      name:'eFootball PES 2021',
      img: 'pes2020.jpg',
      price: '1499. Inr'
    },
    {
      id:'101',
      name:'WWE 2K19',
      img: 'wwe19.png',
      price: '1399 Inr'
    },
    {
      id:'102',
      name:'NBA 2K20',
      img: 'nbk20.jpg',
      price: '1599 Inr'
    },
    {
      id:'103',
      name:'Captain Tsubasa: Rise of New Champions',
      img: 'captaintsubasa.jpg',
      price: '1799 Inr'
    },
    {
      id:'104',
      name:'The Golf Club 2019 featuring PGA Tour',
      img: 'golf.jpg',
      price: '1599 Inr'
    },
    {
      id:'105',
      name:'Steep',
      img: 'steep.webp',
      price: '1299 Inr'
    },
    {
      id:'106',
      name:'Lonely Mountains: Downhill',
      img: 'lonely.jpg',
      price: '1499 Inr'
    },
    {
      id:'107',
      name:'Rocket League',
      img: 'rocketleague.jpg',
      price: '799 Inr'
    },
    {
      id:'108',
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
