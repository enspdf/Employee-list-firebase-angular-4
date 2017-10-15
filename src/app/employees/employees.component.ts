import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './shared/employee.service';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.css'],
	providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

	constructor (private employeeService: EmployeeService) { }

	ngOnInit() {
	}

}
