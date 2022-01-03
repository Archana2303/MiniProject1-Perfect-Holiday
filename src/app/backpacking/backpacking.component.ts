import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backpacking',
  templateUrl: './backpacking.component.html',
  styleUrls: ['./backpacking.component.css']
})
export class BackpackingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backpacking= [
    {'id':1,'name':'Leh-Ladhak Road/SUV Trip - 5D/6N','description':'Ladhak is a favorite among adventure sports enthusiasts, offering trekking, mountaineering and rafting.','image': '../../assets/ladakh.jpg','price': '14,999'},
    {'id':2,'name':'Meghalaya Backpacking - 5D/4N','description': 'Meghalaya, the abode of clouds, is one of the most beautiful states in North-East India offering a variety of activities, food and festivals to the tourists. ','image': '../../assets/meghalaya.jpg','price':'21,999'},
    {'id':3,'name':'Kedarkantha - 6D/5N','description':'Kedarkantha is one of the most popular winter treks in India, located at an elevation is 12,500 ft.','image': '../../assets/kedarkantha.jpg','price':'10,999'},
    {'id':4,'name':'Jaipur & Agra Backpacking Trip','description':'Taj Mahal is admired across the world as a masterpiece of Indian art.','image': '../../assets/Taj2.jpg','price':'11,999'},
    {'id':5,'name':'Murudeshwar + Vibuthi falls + Dandeli- 3in1 Trip','description':'With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly found hub for beach lovers.','image': '../../assets/gokarna.jpg','price':'8,999'},
   
  ]
}
