import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addtoCart = new EventEmitter<Product>();
  constructor() {}

  ngOnInit() {}

  addProductCart(){
    console.log(this.product);
    
    this.addtoCart.emit(this.product)
  }
}
