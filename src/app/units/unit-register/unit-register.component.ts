
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitService } from '../../_services/unit.service';
import { AlertifyService } from '../../_services/alertify.service';


export class AppModule { }

@Component({
  selector: 'app-unit-register',
  templateUrl: './unit-register.component.html',
  styleUrls: ['./unit-register.component.css']
})
export class RegisterNewUnitComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private unitService: UnitService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.unitService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
