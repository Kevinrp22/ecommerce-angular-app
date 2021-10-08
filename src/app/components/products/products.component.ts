import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from 'src/services/products.service';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductsService, private shoppingCartService:ShoppingCartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product):void{
    console.log("add", product);
    this.shoppingCartService.updateCart(product)
    
  }
}
