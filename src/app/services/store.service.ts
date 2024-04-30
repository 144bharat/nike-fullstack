import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseurl: string = 'https://localhost:7042/api/';
  private _products = new BehaviorSubject<ProductInterface[]>([]);
  readonly products$ = this._products.asObservable();

  constructor(private http: HttpClient) {
    this.loadAllProducts();
  }

  private loadAllProducts():void {
    this.http.get<ProductInterface[]>(`${this.baseurl}Store/getAllProducts`).subscribe(
      data => {
        this._products.next(data);
      }
    );
  }

  getProductsBasedOnRoute(TypeFilter: string, CategoryFilter: string, ItemCategoryFilter: string, SubCategoryFilter: string, AgeFilter: string): Observable<ProductInterface[]> {
    return this.products$.pipe(
      map(products => {
        console.log('Initial products:', products);
        let filteredProducts = products;
  
        if (TypeFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['typeofproductroute'] === TypeFilter);
          console.log('After type filter:', filteredProducts);
        }
  
        if (CategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['category'] === CategoryFilter);
          console.log('After category filter:', filteredProducts);
        }
  
        if (ItemCategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['itemcategory'] === ItemCategoryFilter);
          console.log('After item category filter:', filteredProducts);
        }
  
        if (SubCategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['subcategory'] === SubCategoryFilter);
          console.log('After subcategory filter:', filteredProducts);
        }
  
        if (AgeFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['age'] === AgeFilter);
          console.log('After age filter:', filteredProducts);
        }
  
        return filteredProducts;
      })
    );
  }
  
}
