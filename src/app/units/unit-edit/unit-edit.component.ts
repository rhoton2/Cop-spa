
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitService } from '../../_services/unit.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Unit } from 'src/app/_models/unit';



export class AppModule { }

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {
  @Input() id: Unit;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  query: string;
  unitData: Array<Unit>;

  constructor(private unitService: UnitService, private alertify: AlertifyService) { }

  ngOnInit() {

  }
  getUnit(id: number): void {
    this.unitService.getUnit(id).subscribe(
      (data: any) => { this.unitData = data; },
      error => console.log(error)
    );
  }

  addNewUnit() {
    this.unitService.addUnit(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
