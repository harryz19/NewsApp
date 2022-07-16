import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/news-response';
import { NewsapiService } from '../services/newsapi.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  newslist : Article[];

  constructor(private activatedRoute: ActivatedRoute,private newsapiservices : NewsapiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.newsapiservices.getTopCountryHeadlines('in',this.folder)
    .pipe(map((res)=> res.articles))
    .subscribe((news) => (this.newslist = news))
  }

}
