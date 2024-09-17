import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interfaces';
import { enviroments } from '../../../enviroments/enviroment';

@Injectable({providedIn: 'root'})

export class HeroresServices {
    constructor(private http: HttpClient) { }
    
    baserUrl:string=enviroments.baseUrl

    getHeroes():Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baserUrl}/heroes`)
        //http://localhost:3000/heroes
    }

    getHeroById(id:string):Observable<Hero | undefined >{
        return this.http.get<Hero>(`${this.baserUrl}/heroes/${id}`)
        .pipe(
            catchError(error=>of(undefined))
        )
    }



    // addHero():Observable<Hero[]>{
    //     return this.http.get<Hero[]>(`${this.baserUrl}/heroes`)
    //     //http://localhost:3000/heroes
    // }

    // updateHero():Observable<Hero[]>{
    //     return this.http.get<Hero[]>(`${this.baserUrl}/heroes`)
    //     //http://localhost:3000/heroes
    // }

    // deleteHeroe():Observable<Hero[]>{
    //     return this.http.get<Hero[]>(`${this.baserUrl}/heroes`)
    //     //http://localhost:3000/heroes
    // }

}