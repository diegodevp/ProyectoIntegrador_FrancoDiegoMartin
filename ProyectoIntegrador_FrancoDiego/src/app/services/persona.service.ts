import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../moduls/persona.modul';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlAPI= 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.urlAPI + 'get/profile');
  }
}
