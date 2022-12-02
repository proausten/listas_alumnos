import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
   public nombre: string;
   public Alumnos=['Jose', 'Alberto', 'Diego', 'Fraco', 'Susana', 'Marcos']
   public hoy = new Date();

   constructor(){
    
   }

   ngOnInit(): void{

   }

  
   }

