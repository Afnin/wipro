import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
searchForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.buildSearchForm();
   }
 
  ngOnInit(): void {
  }
  
  buildSearchForm() {
   this.searchForm= this.formbuilder.group({
     searchKey: new FormControl('',Validators.required)
   })
  }
  get searchKey(){
    return this.searchForm.get('searchKey');
  }

}
