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
        let filteredProducts = products;
  
        if (TypeFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['typeofproductroute'] === TypeFilter);
        }
  
        if (CategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['category'] === CategoryFilter);
        }
  
        if (ItemCategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['itemcategory'] === ItemCategoryFilter);
        }
  
        if (SubCategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['subcategory'] === SubCategoryFilter);
        }
  
        if (AgeFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['age'] === AgeFilter);
        }
  
        return filteredProducts;
      })
    );
  }
  getProductDetail(id: number): Observable<ProductInterface|undefined> {
    return this.products$.pipe(
      map(products => products.find(product => product.id === id))
    );
  }  
}
