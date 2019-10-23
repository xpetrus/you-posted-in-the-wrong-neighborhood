import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chatboxes',
  templateUrl: './chatboxes.component.html',
  styleUrls: ['./chatboxes.component.css']
})
export class ChatboxesComponent implements OnInit {

  selectedCategory: any = [];
  quotePool: any = [];
  selectedQuote: any = '';
  messageOn = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.apiService.getQuotes().subscribe(
    //   data => {
    //     this.quotePool = data;
    //     console.log(this.quotePool);
    //   },
    //   error => console.log(error)
    // );

  }

  getCategoryQuotes(cid) {
    console.log('clicked butttttt' + cid);
    this.messageOn = true;
    this.apiService.getQuoteCategory(cid).subscribe(data => {
      this.selectedCategory = data;
      this.renderRandomQuote();
    });
  }

  renderRandomQuote() {
    console.log(this.selectedCategory.all_category_items.length);
    let categoryNums = this.selectedCategory.all_category_items;

    let randomNum = Math.floor(Math.random() * this.selectedCategory.all_category_items.length);
    let finalNum = categoryNums[randomNum];
    this.apiService.getAQuote(finalNum).subscribe(data => {
      this.selectedQuote = data;
    });
  }


}
