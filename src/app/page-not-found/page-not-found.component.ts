import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div
      class="flex flex-col justify-center items-center gap-4 h-screen w-full"
    >
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
      />
      <h1 class="text-4xl text-center">Hey, cette page n'existe pas !</h1>
      <a
        routerLink="/pokemons"
        class="px-4 py-2 bg-teal-600 rounded-xl text-white"
      >
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: [],
})
export class PageNotFoundComponent {}
