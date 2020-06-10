import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  teamName: String[] = [
    'Chennai super kings',
    'mumbai indians',
    'Rajasthan Royals',
    'Delhi capitals',
    'Royal Challengers Banglore',
    'kolkata knight Riders',
    'Delhi Capitals',
    'Royal Challengers Banglore',
    'kolkata knight Riders',
    'kings xl punjab',
    'Sunrises Hyderabad'
  ];
phoneNumbers: String[] = [
    '965-144-6018',
    '1-522-714-2638 x44811',
    '(038)030-9641 x7086',
    '005-851-7095 x72027',
    '1-471-836-5871 x5841',
    '(247)305-7427',
    '005-851-7095 x72027',
    '1-471-836-5871 x5841',
    '475.071.4608 x101',
    '070-610-2661'
  ];
links: String[] = ['https://www.chennaisuperkings.com/', 'https://www.mumbaiindians.com/','rajasthanroyals.com', 'https://www.dehlicapitals.in/', 'https://www.royalchallegers.com/', 'https://www.kkr.in/', 'https://www.dehlicapitals.in/', 'https://www.royalchallegers.com/', 'https://www.kkr.in/','https://www.kxip.in/','https://www.sunrisershyderabad.in'];
images: String[] = ['../../assets/csk.png','../../assets/MI.png','../../assets/RR.png', '../../assets/Delhi.png','../../assets/RCB.png','../../assets/KKR.png',, '../../assets/Delhi.png','../../assets/RCB.png','../../assets/KKR.png', '../../assets/KXI.png', '../../assets/SRH.png'];

}
