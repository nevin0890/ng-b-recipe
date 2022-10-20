import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.css']
})
export class ViewrecipeComponent implements OnInit {

  constructor(private api: ApiService) { 

    this.fetchRecipe()
  }

  fetchRecipe = () => {
    this.api.viewAllRecipes().subscribe((res: any) => {
      this.viewAllRecipes =res
    })

  }

  deleteRecipe = (id: any) => {
    let data = {
      "id": id
    }
    this.api.Deleterecipe(data).subscribe((res) => {
      console.log(res)
      alert("Recipe Deleted")
    
      this.fetchRecipe()
    })
  }
  
  viewAllRecipes:any =  []

  ngOnInit(): void {
  }

}
