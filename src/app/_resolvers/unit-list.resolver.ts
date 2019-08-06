import {Injectable} from '@angular/core';
import {Unit} from '../_models/unit';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UnitService } from '../_services/unit.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UnitListResolver implements Resolve<Unit[]> {
    constructor(private unitService: UnitService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Unit[]> {
        return this.unitService.getUnits().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
