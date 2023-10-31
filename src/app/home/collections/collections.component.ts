import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from 'src/app/models/collections.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[] = [];
  filteredCollections: Collection[] = [];

  categories: string[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }

  getAllCollections() {
    this.httpClient.get('assets/data/courses.json').subscribe({
      next: (collections) => {
        this.collections = collections as Collection[];
        this.filteredCollections = collections as Collection[];
        this.getCategories()
      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }

  getCategories() {
    this.categories = this.collections.map((collection) => { return collection.category })
    this.categories = [...new Set(this.categories)]
  }

  filterCollections(category: string) {
    this.filteredCollections = this.collections.filter(collection => collection.category===category)
  }
}
