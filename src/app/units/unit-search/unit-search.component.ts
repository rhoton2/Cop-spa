import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/_models/unit';
import { UnitService } from 'src/app/_services/unit.service';

@Component({
  selector: 'app-unit-search',
  templateUrl: './unit-search.component.html',
  styleUrls: ['./unit-search.component.css']
})

export class UnitSearchComponent implements OnInit {
  query: string;
  searchResults: Array<Unit>;

  constructor(private unitService: UnitService) { }

  ngOnInit() {
  }

  search(): void {
    this.unitService.getAll().subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.log(error)
    );
  }

}
