import { Component } from '@angular/core';

@Component({
  selector: 'app-hack',
  templateUrl: './hack.component.html',
  styleUrls: ['./hack.component.css']
})
export class HackComponent {

 
    shoes = [
      {
        image: 'assets/images/image 5.svg',
        header: 'Nike Shoe',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$ 234',
        icon: 'assets/images/Group 33065.svg',
        doller:"doller"
      },
      {
        image: 'assets/images/Daco_1703273 1.svg',
        header: 'Sneakers Skate Shoe',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$ 234',
        icon: 'assets/images/Group 33065.svg',
         doller:"doller"
      },
      {
        image: 'assets/images/pngegg 1.svg',
        header: 'Sneakers Basketball',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$ 234',
        icon: 'assets/images/Group 33065.svg',
         doller:"doller"
      }
    ];
  
  

}
