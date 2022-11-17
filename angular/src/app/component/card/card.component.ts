import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  products: Product[] | any = [];
  constructor(private productService: ProductService) {
    let productObservable: Observable<Product[]>;

    productObservable = productService.getAll();

    productObservable.subscribe((serverProducts) => {
      this.products = serverProducts;
    });
  }

  ngOnInit(): void {}
}
