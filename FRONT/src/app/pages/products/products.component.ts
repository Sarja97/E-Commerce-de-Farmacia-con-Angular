import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  medicine:any;

  constructor( private producto:ProductsService )
  {

    this.producto.getProductInfo().subscribe({
      next:(medicineData) => {
        this.medicine = medicineData //asignacion de valor a variable medicine
      },
      error:(errorData) => {
        console.log(errorData);
      }
    });

  }

  ngOnInit(): void {

  }

}
