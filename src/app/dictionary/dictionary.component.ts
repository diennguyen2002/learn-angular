import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words = [
    {id: 1, en: 'book', vn: 'sách', memorized: false},
    {id: 2, en: 'table', vn: 'bàn', memorized: true},
    {id: 3, en: 'note', vn: 'ghi chú', memorized: true},
    {id: 4, en: 'shoes', vn: 'giày', memorized: false},
  ];
  newEn = '';
  newVn = '';
  isShowForm = false;
  filterStatus = 'ALL';
  
  constructor() { }
  
  ngOnInit(): void {
  }

  addWord(){
    this.words.unshift({
      id: this.words.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newVn = '';
    this.newEn = '';
    this.isShowForm = false;
  }

  deleteWord(id){
    let index = this.words.findIndex(function(element){
      return element.id === id;
    });
    this.words.splice(index,1);
  }

  doFilter(word){
    if(this.filterStatus === 'ALL' || 
       (this.filterStatus === 'MEMORIZED' && word.memorized) ||
       (this.filterStatus === 'FORGOT' && !word.memorized)
    ){
      return true;
    }
    return false;
  }

}
