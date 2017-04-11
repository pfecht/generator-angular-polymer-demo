# Demo for generator-angular-polymer
This project demonstrates the basic usage of [generator-angular-polymer](https://github.com/pfecht/generator-angular-polymer) for [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Getting started
1. Install [generator-angular-polymer](https://github.com/pfecht/generator-angular-polymer).
2. Get the code: ```git clone https://github.com/pfecht/generator-angular-polymer-demo.git```.
3. Install the dependencies: run ```npm install```.
4. Install Polymer elements: run `bower install` in `src/assets/`
4. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Structure 

### Integration of Polymer
Polymer and its elements are located in `src/assets/`:

1. The core library and external elements are managed with bower.
2. `components/` contains custom Polymer elements.
3. `elements.html` sums up all Polymer elements which should be part of the application.

To integrate them in angular-cli, `elements.html` is included in two files:
1. `src/index.html` to add them to the Angular application
2. `.yo-rc.json` to configure them for the generator.

Finally, the `angular-cli.json` has been changed to add the polyfill:
```
{
  ...
  "apps": [
    {
      ...
      "scripts": [
        "assets/bower_components/webcomponentsjs/webcomponents-lite.min.js"
      ]
      ...
}

```

### Integration of generator-angular-polymer
The generator is configured in `.yo-rc-json` and automatically recreates the directives since he is part of the `package.json`:
```
"scripts": {
  "ng": "ng",
  "start": "yo angular-polymer && ng serve",
  ...
},
```

`src/app/shared/polymer-elements/` contains the generated directives.

`AppModule` (src/app/app.module.ts) includes the generated directives:
```
...
import { POLYMER_ELEMENTS } from './shared/polymer-elements/index';

@NgModule({
  declarations: [
    ...
    POLYMER_ELEMENTS
  ],
  ...
})
export class AppModule { }
```

## License
Apache 2.0