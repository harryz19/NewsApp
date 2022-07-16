import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/news-response';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news: Article;
  constructor() { }

  ngOnInit() {}

}
