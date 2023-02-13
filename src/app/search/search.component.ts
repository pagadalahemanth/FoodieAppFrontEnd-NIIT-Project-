import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText!:any;
  constructor() { }

  search(){
    this.text.emit(this.searchText)
  }
  @Output()
  text:EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {

  }

}
