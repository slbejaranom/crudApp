import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private router: Router) { }
  dataSource: Persona[] = [
    {id:1,nombre:'Bryan', apellido:'Luis',correo:'bryan.luis@segurosbolivar.com'}
  ];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'correo', 'acciones'];
  ngOnInit(): void {
  }
  editar() {
    this.router.navigate(['editar']);
    console.log("Editar");
  }
  eliminar() {
    console.log("Eliminar");
  }
}
