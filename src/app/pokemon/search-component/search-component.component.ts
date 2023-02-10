import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from "rxjs";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styles: [],
})
export class SearchComponentComponent implements OnInit {
 searchValue = new Subject<string>(); // class Rxjs flux de données dans le temps avec les recherches de l'utilisateur {..."a...."ab"..."abz"...}
  pokemons$: Observable<Pokemon[]>

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
   this.pokemons$ = this.searchValue.pipe(
    debounceTime(300), //sorte de setTimeOut
    distinctUntilChanged(), //attendre qu'il y ait un changement dans les termes de recherche
    switchMap((value) => this.pokemonService.searchPokemonList(value)) //  map transforme "ab" en un flux de données qui contient "ab" Observable<"ab"> donc on va pas l'utiliser mais plutôt SwitchMap
   )
  }

  search(value: string) {
    this.searchValue.next(value); // sorte de méthode push mais avec un flux de données
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
