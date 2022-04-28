import { Component, OnInit } from '@angular/core';
import { UsercartlistService } from '../usercartlist.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : UsercartlistService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  orderplaced(){
    this.cartService.removeAllCart();
    alert("Your order has been placed Successfully,Have a Great Day!!")
  }

}
