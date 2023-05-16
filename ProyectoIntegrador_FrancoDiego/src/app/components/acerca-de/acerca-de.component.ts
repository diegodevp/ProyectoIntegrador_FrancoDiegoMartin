import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/moduls/persona.modul';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  persona: Persona = new Persona(1, 'Diego', 'Franco');
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data; });
  }
}
