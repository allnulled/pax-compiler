# pax-compiler

Empaquetador de JavaScript y CSS consciente de asincronicidad.

## Instalación

Es un proyecto de proyectos, así que lo mejor es iniciar tu proyecto desde esto:

```sh
git clone https://github.com/allnulled/pax-compiler.git .
npm install
```

## Dependencias externas

Con `npm install` usas:

- `ejs` para renderizar las plantillas que componen el compilador.
- `js-beautify` para embellecer el código JavaScript que se compila.

## Alterar la compilación de Pax

Para iniciar desarrollo personalizado del compilador (necesitas compilarlo 1 vez porque la ruta del `basedir` necesita pillarla del PC), en `dev.sh` tienes el ejemplo para usar con [`allnulled@refrescador`](https://github.com/allnulled/refrescador), pero en esencia son estos 2 comandos:

```sh
node pax_compiler/make.js          # reconstruye el compilador desde los fuentes y plantillas
node pax_compiler/test/index.js    # testea el compilador
```

Si quieres profundizar, el punto de partida para esto son los ficheros `make.js` y `PaxCompilerBuilder.js`.

Se usan plantillas para que el código fuente quede recogido en 1 fichero para que:

- sea más fácil preguntar a ChatGPT
- sea más fácil extender sin afectar performance

## Uso de la librería

Normalmente vas a querer empaquetar código desde línea de comandos, o si quieres más control desde API programática.

A continuación se explican ambos casos.

### Uso por línea de comandos

Ahora mismo no está soportando esta feature.

### Uso programático

En el `pax_compiler/test/index.js` tienes el siguiente ejemplo de uso:

```js
require(__dirname + "/../../pax-compiler.dist.js");

const main = async function() {
  // Si quieres tener drivers tienes que hacer esto antes de usar compile:
  await PaxCompiler.global.loadSettings();
  const compilation = await PaxCompiler.global.compile("pax_compiler/test/entry.js");
  await require(__dirname + "/entry.test.js")(compilation);
};

main();
```

## Reutilización de módulos

Realmente, se ha hecho para simplificar mucho las cosas, al punto que solo tienes que tener algunas cosas en cuenta, y de ahí ya puedes modular cómodamente. Estas son las cosas a tener en cuenta:

- Exporta módulos síncronos (cualquier valor) o asíncronos (Promise o immediately called async functions)
   - con la sintaxis única de `module.exports` tanto en node.js como en browser
- Importa módulos síncronos (valores) o asíncronos (valores devueltos por una Promise)
   - Usa `Pax.sync("path/to/file.js")` para importar valores síncronamente
   - Usa `Pax.async("path/to/file.js")` para importar valores asíncronamente
      - Sin usar `await` porque el módulo ya está resuelto
         - que es la principal gracia de la librería
         - que es el por qué `pak` no lo consiguió todo
   - Usa `Pax.$module["path/to/file.js"]` para saltarte el análisis del compilador y acceder a los módulos igual
- Usa `drivers.json` para expandir shortnames de rutas

Principalmente, esto es lo que tienes que saber. Esto es el nicho que soluciona esta librería. Podemos extendernos en la teoría y tal, pero esencialmente, es esto, que puedas usar `Pax.async` para acceder a módulos que se cargan de forma asíncrona.
