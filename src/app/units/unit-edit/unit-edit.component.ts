
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitService } from '../../_services/unit.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Unit } from 'src/app/_models/unit';
import { ActivatedRoute, Router } from '@angular/router';



export class AppModule { }

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})




export class UnitEditComponent implements OnInit {

  query: string;
  model: any;
  @Input() id: number;
  @Output() cancelRegister = new EventEmitter();


  unitData: Array<Unit>;

  constructor(private unitService: UnitService
            , private alertify: AlertifyService
            , private router: Router
            , private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
  });
    if (isNaN(this.id) || this.id <= 0) {
      this.router.navigate(['unit/edit']);
      return;
  }

    this.getUnit(this.id);
  }

  search(): void {
    this.unitService.getAll().subscribe(
      (data: any) => { this.model = data; },
      error => console.log(error)
    );
  }

 
  getUnit(id: number): void {
    this.unitService.getUnit(id).subscribe(
      (data: any) => { this.model = data; },
      error => console.log(error)
    );
  }

  addNewUnit() {
    this.unitService.addUnit(this.model).subscribe(() => {
      this.alertify.success('Unit Saved');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
