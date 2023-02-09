import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pokemonTypeColor",
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Feu":
        color = "red-300";
        break;
      case "Eau":
        color = "blue-300";
        break;
      case "Plante":
        color = "green-300";
        break;
      case "Insecte":
        color = "amber-700";
        break;
      case "Normal":
        color = "gray-300";
        break;
      case "Vol":
        color = "blue-500";
        break;
      case "Poison":
        color = "purple-400";
        break;
      case "Fée":
        color = "pink-500";
        break;
      case "Psy":
        color = "purple-700";
        break;
      case "Electrik":
        color = "lime-300";
        break;
      case "Combat":
        color = "orange-700";
        break;
      default:
        color = "lime-500";
        break;
    }

    return ` rounded-2xl bg-${color} py-2 px-3.5 w-16 font-sans text-xs font-bold uppercase leading-none text-white  mb-1`;
  }
}
