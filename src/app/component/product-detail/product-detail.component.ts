import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { ProductInterface } from '../../interfaces/product-interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: ProductInterface | undefined;
  constructor(private route: ActivatedRoute,private storeservice:StoreService) {
    this.getProductDetail();
  }
  getProductDetail(){
    let productId = Number(this.route.snapshot.paramMap.get('id'));
this.storeservice.getProductDetail(productId).subscribe(product=>{
  this.product = product;
})
  }
  
}
