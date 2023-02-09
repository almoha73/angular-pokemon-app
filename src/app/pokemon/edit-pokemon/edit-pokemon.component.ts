import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-edit-pokemon",
  template: `
    <h2 class="text-center text-4xl mt-8">Editer {{ pokemon?.name }}</h2>
    <main class="flex flex-col justify-center items-center">
      <div *ngIf="pokemon" class=""><img [src]="pokemon.picture" alt="" /></div>

      <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
    </main>
  `,
  styles: [],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    } else {
      this.pokemon = undefined;
    }
  }
}
