import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  destination= [
    {'id':1,'name':'Ladhak','description':'Ladhak is a favorite among adventure sports enthusiasts, offering trekking, mountaineering and rafting.','image': '../../assets/ladakh.jpg'},
    {'id':2,'name':'Ooty','description':'Dotted with tea gardens, serene waterfalls, country lanes, and charming architecture, Ooty is the perfect respite everyone.','image': '../../assets/ooty.jpg'},
    {'id':3,'name':'Chikmagalur','description':'Deep in the foothills of the Western Ghats, Chikmagalur draws in-the-know travellers in search of a green getaway.','image': '../../assets/Chikmagalur.png'},
    {'id':4,'name':'Agra','description':'Taj Mahal is admired across the world as a masterpiece of Indian art.','image': '../../assets/Taj2.jpg'},
    {'id':5,'name':'Gokarna','description':'With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly found hub for beach lovers.','image': '../../assets/gokarna.jpg'},
    {'id':6,'name':'Hampi','description':'Hampi is a backpackers paradise, the same way a pilgrims delight','image': '../../assets/hampi1.jpg'},
    {'id':7,'name':'Kerala','description':'Fondly referred to as ‘God’s Own Country’, Kerala was selected by the National Geographic Traveller as one of the thirteen paradises in the world.','image': '../../assets/kerala1.jpg'},
    {'id':8,'name':'Meghalaya','description':'Meghalaya, the abode of clouds, is one of the most beautiful states in North-East India offering a variety of activities, food and festivals to the tourists. ','image': '../../assets/meghalaya.jpg'},
    {'id':9,'name':'Jaipur','description':'If you take one look at the glorious stucco buildings that line Jaipurs wide streets, you will understand why this is nicknamed "The Pink City."','image': '../../assets/jaipur.jpg'},
    {'id':10,'name':'Lonavla','description':'Lonavala is one of the twin hill stations located near to each other, the other being Khandala.','image': '../../assets/lonavla.jpg'}
  ]
}
