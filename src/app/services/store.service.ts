import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseurl: string = 'https://shopvillaapi.vercel.app/'; //'https://localhost:7042/api/';
  private _products = new BehaviorSubject<ProductInterface[]>([]);
  readonly products$ = this._products.asObservable();

  constructor(private http: HttpClient) {
    this.loadAllProducts();
  }

  private loadAllProducts():void {
    this.http.get<ProductInterface[]>(`${this.baseurl}products`).subscribe( //`${this.baseurl}Store/getAllProducts`
      data => {
        console.log(2 + " -- " + JSON.stringify(data));
        this._products.next(data);
      }
    );
  }

  // getProductsBasedOnRoute(TypeFilter: string, CategoryFilter: string, ItemCategoryFilter: string, SubCategoryFilter: string, AgeFilter: string): Observable<ProductInterface[]> {
  //   return this.products$.pipe(
  //     map(products => {
  //       let filteredProducts = products;
  
  //       if (TypeFilter !== '') {
  //         filteredProducts = filteredProducts.filter(product => product['typeofproductroute'] === TypeFilter);
  //       }
  
  //       if (CategoryFilter !== '') {
  //         filteredProducts = filteredProducts.filter(product => product['category'] === CategoryFilter);
  //       }
  
  //       if (ItemCategoryFilter !== '') {
  //         filteredProducts = filteredProducts.filter(product => product['itemcategory'] === ItemCategoryFilter);
  //       }
  
  //       if (SubCategoryFilter !== '') {
  //         filteredProducts = filteredProducts.filter(product => product['subcategory'] === SubCategoryFilter);
  //       }
  
  //       if (AgeFilter !== '') {
  //         filteredProducts = filteredProducts.filter(product => product['age'] === AgeFilter);
  //       }
  //       console.log(3 + " -- " + JSON.stringify(filteredProducts));
  //       console.log(this.products$);
  //       return filteredProducts;
  //     })
  //   );
  // }
  getProductsBasedOnRoute(TypeFilter: string, CategoryFilter: string, ItemCategoryFilter: string, SubCategoryFilter: string, AgeFilter: string): Observable<ProductInterface[]> {
    return this.products$.pipe(
      map(products => {
        let filteredProducts = products;
  
        if (TypeFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['TypeOfProductRoute'] === TypeFilter);
        }
  
        if (CategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['Category'] === CategoryFilter);
        }
  
        if (ItemCategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['ItemCategory'] === ItemCategoryFilter);
        }
  
        if (SubCategoryFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['SubCategory'] === SubCategoryFilter);
        }
  
        if (AgeFilter !== '') {
          filteredProducts = filteredProducts.filter(product => product['Age'] === AgeFilter);
        }
        console.log(3 + " -- " + JSON.stringify(filteredProducts));
        console.log(this.products$);
        return filteredProducts;
      })
    );
  }
  getProductDetail(id: number): Observable<ProductInterface|undefined> {
    return this.products$.pipe(
      map(products => products.find(product => product.Id === id))
    );
  }  
}
