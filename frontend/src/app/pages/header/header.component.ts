import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  carouselItems:any[] = [
    {
      image: 'assets/images/slider-bg.jpg',
      title: 'Sale 20% Off',
      subtitle: 'On Everything',
      description: 'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias.'
    },
    {
      image: 'assets/images/slider-bg.jpg',
      title: 'Summer Collection',
      subtitle: 'Shop Now!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula risus quis enim.'
    },
    {
      image: 'assets/images/slider-bg.jpg',
      title: 'New Arrivals',
      subtitle: 'Fresh Styles',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ante eu arcu aliquet fringilla.'
    }
  ];
 
  

  constructor() { 
    
  }
   ngOnInit(): void {
   
  }

}
 