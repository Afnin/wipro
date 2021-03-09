import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
searchForm: FormGroup;
searchresults: any;
  noresult: boolean;
  keyword: string;
  keywords:any;
  constructor(
    private formbuilder: FormBuilder,
    private service:SearchService   
     ) {
    this.buildSearchForm();
   }
 
  ngOnInit(): void {
   this.keyword='';
  this.keywords= this.getKeywords();

  }

  getEventList(){
    this.service.getEvents().subscribe(res=>{
      console.log('result', res);
    })
  }

  buildSearchForm() {
   this.searchForm= this.formbuilder.group({
    searchKey:['',Validators.required]
   })
  }
  get searchKey(){
    return this.searchForm.get('searchKey');
  }

 onSearch(){
   this.searchresults=null;
   const formData= this.searchForm.getRawValue();
   this.keyword= formData.searchKey;
   this.service.addKeyword(this.keyword);
   this.getKeywords();
   this.service.getEventByKeyWord(this.keyword).subscribe((res:any)=>{
     if(res._embedded)
       this.searchresults= res._embedded.events;
     else
      this.noresult=true;
   });


 }
 getKeywords(){
   const keywords=this.service.getkeyWords();
   console.log('keywords', keywords);
 }


}
