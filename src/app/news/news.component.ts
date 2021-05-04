import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  public objNewGames = [
    {
      name: 'Far Cry 6',
      url: 'far.webp',
      platform: 'PS4, PS5, Xbox One, Xbox Series X, PC',
      release: 'TBC 2021',
      description: 'Yes, that\'s right. Far Cry is returning once again. Set in Yara, which is described as a \"tropical paradise frozen in time\", Far Cry 6 sees you play as a local Yaran called Dani Rojas. Taking on the role of a guerrilla fighter, you set out to take down the dictatorship regime of  Anton Castillo (played by Giancarlo Esposito). As the leader of Yara, Castillo wants to restore the nation back to its former glory, and he\'s willing to do it by any means necessary.'
    },
    {
      name: 'Halo Infinite',
      url: 'halo.jpg',
      platform: 'PC, Xbox One, Xbox Series X',
      release: '2021',
      description: 'Bearing a curious new sub-header and running on a brand new game engine known as Slipspace, the first Halo Infinite trailer almost seems to suggest that Master Chief\'s next adventure will have MMO qualities to it, or at least be more open-ended and sandbox-like in flavour. That instantly familiar shot of his armour also teases a potential technological downgrade for everyone\'s favourite Spartan, though plot details remain threadbare for now. MMO or otherwise, Halo: Infinite could just be the Halo comeback we\'ve all been waiting for.'
    },
    {
      name: 'Horizon Forbidden West',
      url: 'hori.jpg',
      platform: 'PS5',
      release: 'TBC 2021',
      description:'Aloy is officially back in a sequel to 2017\'s Horizon Zero Dawn, and this time we\'ll be journeying to the post-apocalyptic setting of San Franciso in America. The trailer which debuted during Sony\'s Future of Gaming event revealed Horizon Forbidden West will be coming to the PS5, and showed off gorgeous, vibrant landscapes, new big machines creatures, and - most interestingly of all - underwater sequences. We\'ll no doubt have more mysteries to unravel as we return to Guerrilla Games\' unique world when it does eventually release on the next-gen console.'

    },
    {
      name: 'Returnal',
      url: 'ret.jpg',
      Platform: 'PS5',
      release: 'April 30, 2021',
      description:'The first major PS5 exclusive of the year is also Housemarque\'s return to the genre that it made a name for itself with, blending its patented arcade shoot-em-up style into a story driven, third-person adventure for Returnal. You play as Selene, an astronaut stuck in a hellish Groundhog Day of sorts, as she endlessly attempts to fight her way out of a recurring death cycle. Y\'know, exactly the kind of light-hearted romp you\'d want to see in the Spring months with.'

    },
    {
      name: 'Ark 2',
      url: 'ark2.jpeg',
      platform: 'PC, PS5, Xbox Series X/S',
      release: 'TBC 2022',
      description:'The dinosaur hunting PC hit is back with a bigger, ballsier sequel that features none other than Vin Diesel both in front and behind of the digital camera. Yep, the Fast & Furious star is not only playing a key character in the next-gen survival game, but he\'s joined series developer Studio Wildcard as an executive producer, having long been a fan of the original game. Goodness knows what that means for the final product… perhaps the dinosaurs were part of our family all along?'

    },
    {
      name: 'Prince of Persia: The Sands of Time remake',
      url: 'pp2.jpg',
      platform: 'PS4, Xbox One, PC',
      release: 'TBC 2021',
      description:'Ubisoft is bringing back one of the PS2/Xbox/Gamecube era\'s most memorable titles with a fresh remake of Prince of Persia: The Sands of Time. It might sound surprising for a studio that\'s been around so long, but this marks Ubisoft\'s first full-fledged remake, distinct from other titles they\'ve simply remastered for newer hardware. That said, The Sands of Time remake is pretty darn faithful to the original, just with modern graphics and gameplay.'
    },
    {
      name: 'Hogwarts Legacy',
      url: 'hog.jpg',
      platform: 'PC, PS5, Xbox Series X/S',
      release: 'TBC 2022',
      description:'While not a direct adaptation of the Harry Potter books, Hogwarts Legacy is taking all of its inspo straight from the lore. You\'ll be playing as a student attending Hogwarts during the 1800s, some hundreds of years before Harry and co were born, but no doubt will get up to plenty of wizardy mischief. It\'s an open world RPG, so expect plenty to explore too.'
    },
    {
      name: 'Resident Evil 8: Village',
      url: 'vil.jpg',
      platform: 'PS5, Xbox Series X, PC',
      release: 'May 7, 2021',
      description:'Resident Evil Village is a sequel to Resident Evil 7 and takes place a few years after the events of the latter game. Ethan returns and finds himself in a new kind of spot of trouble in a mysterious village as he searches for answers. In the trailer we see familiar face Chris Redfield make an appearance, and he\'s said to set off a chain of events that lead Ethan to this strange new setting. But why is Chris there? And is he friend or foe? The trailer leaves us with plenty of questions. We also see a big werewolf-like creature feature, which will no doubt be a new type of enemy we have to contend with.'

    }
  ];


  public latestStory = [
    {
      des: 'Xbox March Update Prepares For The Xbox Wireless Headset And Refines Backwards-Compatibility',
      img: 'xboxWire.jpg',
      time: '8 mins',
      lke: '30',
      comment: '13' 
    },
    {
      des: 'Marvel\'s Avengers Update Will Finally Let You Replay The Campaign',
      img: 'ave.jpg',
      time: '9 mins',
      lke: '10',
      comment: '6' 
    },
    {
      des: 'Outriders Demo Guide: Where To Farm For Legendary Loot',
      img: 'outriders.jpg',
      time: '9 mins',
      lke: '11',
      comment: '7' 
    },
    {
      des: 'Microsoft Flight Simulator\'s Sim Update 3 Is Out Now: Patch Notes',
      img: 'ms-fight.jpg',
      time: '6 mins',
      lke: '3',
      comment: '0' 
    },
    {
      des: 'Rainbow Six Siege PC Patch Is Live On Test Server, Addressing Several Bugs',
      img: 'rainbow.jpg',
      time: '19 mins',
      lke: '20',
      comment: '8' 
    },
    {
      des: 'Apex Legends Chaos Theory Event Is Live, Legendary "Conquistador" Wattson Skin Renamed Following Backlash',
      img: 'apex.jpg',
      time: '6 mins',
      lke: '6',
      comment: '1' 
    },
    {
      des: 'Bungie Says To Enjoy Destiny 2\'s 12-Person Raid Glitch While It Lasts',
      img: 'destiny2.jpg',
      time: '10 mins',
      lke: '10',
      comment: '11' 
    },
    {
      des: 'Disco Elysium: The Final Cut Is Still Releasing In March',
      img: 'disco.jpg',
      time: '11 mins',
      lke: '21',
      comment: '4' 
    },
    {
      des: 'Fortnite Zero Crisis Finale Event Revealed For Season 6, And You Can\'t Miss It This Time',
      img: 'fort.jpg',
      time: '33 mins',
      lke: '17',
      comment: '3' 
    },
    {
      des: 'Call Of Duty: Black Ops Cold War 3/8 Patch Includes Multiplayer, Zombies Fixes',
      img: 'coldWar.jpg',
      time: '50 mins',
      lke: '30',
      comment: '15' 
    },
    {
      des: 'Valheim Wolf Armor Guide - How To Find Silver And Craft Mountain Gear',
      img: 'val1.jpg',
      time: '7 mins',
      lke: '6',
      comment: '2' 
    },
    {
      des: 'The Valheim Viking Guide For Beginners: How To Best Survive And Ascend To Valhalla',
      img: 'val2.jpg',
      time: '1 hour',
      lke: '45',
      comment: '22' 
    },
    {
      des: 'Counter-Strike: GO And Other Steam Games Were Temporarily Removed, And Nobody Knows Why',
      img: 'cs.jpg',
      time: '55 mins',
      lke: '25',
      comment: '17' 
    },
    {
      des: 'Watch Dogs: Legion Update 3.20 Adds Online Mode',
      img: 'watch.jpg',
      time: '2 hour',
      lke: '60',
      comment: '22' 
    },
    {
      des: 'Hogwarts Legacy Designer With Controversial YouTube Past Leaves Studio',
      img: 'hogward.jpg',
      time: '27 mins',
      lke: '13',
      comment: '4' 
    }
  ];


  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
