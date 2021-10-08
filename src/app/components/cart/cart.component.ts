import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  quantity$ = this.shoppingCartService.quantityAction$ ;
  total$ = this.shoppingCartService.TotalAction$ ;
  cart$ = this.shoppingCartService.cartAction$;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    
  }
}
