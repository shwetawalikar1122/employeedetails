import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empdetail } from './empdetail';
import { EmpService } from './emp.service';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs/operators';
// import {pipe } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<boolean>();
   config: any;
   collection = [];
    employee: Empdetail[] = [];
    empid: number;
    employeename: string;
    department: string;
     i1: number;
     display = 'none';

  constructor(private _data: EmpService,
              private confirmationService: ConfirmationService,
              private route: ActivatedRoute,
              private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10
};

    this.route.queryParamMap
        .pipe(map(params => params.get('page')))
        .subscribe(page => this.config.currentPage = page);

    for (let i = 1; i <= 100; i++) {
  this.collection.push(`item ${i}`);
}
  }

  ngOnInit() {

     this._data.getAllEmployees().forEach(
       (data: Empdetail[]) => {
        this.employee = data;
       }

     );
  }
  //for closing popup

//   loadData() {
//     //Call the method for loading your data
//     this.getTransactions();
// }




  pageChange(newPage: number) {
		this.router.navigate(['/employee'], { queryParams: { page: newPage } });

	}
  onEmployeeDelete(id: number)
  {
    this._data.deleteEmployee(id).subscribe(
      (data: any) => {

        // this._data.getAllEmployees().subscribe(
        //   (data: Empdetail[]) => {
        //    this.employee = data
        // }

        // );
         // alert('successfully deleted');
      this.ngOnInit();
      }
    );
  }
  onEmployeeSave(f: NgForm)
  {
    this._data.addemployee(f.value).subscribe((data: any) => {
      this._data.getAllEmployees().subscribe(
        ( data: Empdetail[]) =>
        {
         this.employee = data;
        }

      );
      alert(' New employee added');
      this.ngOnInit();
    });
  }


  SearchEmployee(value) {
    if (value != '') {
      this.employee = this.employee.filter(x => x.name.indexOf(value) != -1);
    } else {
      this._data.getAllEmployees().subscribe(
        (data: Empdetail[]) => {
          this.employee = data;
        },
        function (error) {
          alert(error);
        },
        function () {}
      );
    }
  }

  editEmployee(i)
  {
     this.empid = this.employee[i].id;
     this.employeename = this.employee[i].name;
     this.department = this.employee[i].description;
     this.i1 = i;
  }

  UpdateEmployee(f1)
  {
      var req = {
        id: f1.value.id,
        organizationId: this.employee[this.i1].organizationId,
        name: f1.value.name,
        description: f1.value.description,
        isactive: this.employee[this.i1].isactive,
        createdby: this.employee[this.i1].createdby,
        createddate: this.employee[this.i1].createddate,
        modifiedby: this.employee[this.i1].modifiedby,
        modifieddate: this.employee[this.i1].modifieddate
      }
      this._data.addemployee(req).subscribe((data: any) => {
        this._data.getAllEmployees().subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          (data: Empdetail[]) => {
           this.employee = data;
          }

        );
        alert('record updated');
      });
  }

  confirmDelete(id: number) {
    // console.log(id);
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.onEmployeeDelete(id);
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }
  closeModalDialog(){
    this.display='none'; //set none css after close dialog
   }
}
