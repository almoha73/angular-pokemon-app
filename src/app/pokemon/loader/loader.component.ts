import { Component } from "@angular/core";

@Component({
  selector: "app-loader",
  template: `
    <main class="w-full h-screen flex justify-center items-center bg-blue-100">
      <div class="item w-[300px] h-[300px] border border-4">
        <div class="loader --5"></div>
      </div>
    </main>
  `,
  styles: [
    `
      .loader {
        display: block;
        position: relative;
        width: 50%;
        display: grid;
        place-items: center;
      }

      .loader::before,
      .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
      }

      /**
	loader --5
**/
      .loader.--5::before,
      .loader.--5::after {
        height: 3vmin;
        width: 0.4vmin;
        background-color: blue;
        animation: loader-5 0.6s cubic-bezier(0, 0, 0.03, 0.9) infinite;
      }

      .loader.--5::before {
        left: calc(50% - 1vmin);
        top: calc(50% - 3vmin);
      }

      .loader.--5::after {
        left: calc(50% + 1vmin);
        top: calc(50% - 1vmin);
        animation-delay: 0.2s;
      }

      @keyframes loader-5 {
        0%,
        88%,
        100% {
          opacity: 0;
        }

        0% {
          transform: translateY(-6vmin);
        }

        33% {
          opacity: 1;
        }

        33%,
        88% {
          transform: translateY(3vmin);
        }
      }
    `,
  ],
})
export class LoaderComponent {}
