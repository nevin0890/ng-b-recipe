import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private api:ApiService) { }
  name = ""
  description = ''
  price = ''
  image = ''


  addAllRecipe = () => {
    let data = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image
    }
    console.log(data)
    this.api.getRecipes(data).subscribe((res: any) => {
      console.log(res)
    })
    alert("Recipe Added")
    this.name = ''
    this.description = ''
    this.price = ''
    this.image = ''
    
  }
   
  
  addRecipe=[]

  ngOnInit(): void {
  }

}
