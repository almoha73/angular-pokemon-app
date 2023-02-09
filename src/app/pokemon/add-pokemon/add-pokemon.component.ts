import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-add-pokemon",
  template: `
    <h2 class="text-center text-4xl my-8">Ajouter un pokémon</h2>
    <main class="flex flex-col justify-center items-center">
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </main>
  `,
  styles: [],
})
export class AddPokemonComponent implements OnInit{
  pokemon: Pokemon

  ngOnInit(){
this.pokemon = new Pokemon()
  }
}
