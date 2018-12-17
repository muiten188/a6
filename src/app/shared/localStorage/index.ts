import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';


@Injectable({
    providedIn: 'root'
})
export class LocalStorage {
    constructor() {}

    public getUser(){
        if(!localStorage.user){
            return {}
        }
        else{
            return JSON.parse(localStorage.user);
        }
    }
}
