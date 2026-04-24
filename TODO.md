- [x] Cambiar module y static por sync y async
- [x] Preparar tests independientes y automáticos
- [ ] Completar la carga asíncrona step[2]:
   - [ ] Si el pack tiene asyncs, el entry es automáticamente wrapeado en un `(async function() { ${code} })()`
      - [ ] Y en el entry puedes usar el `await` en tabulación 0.
   - [ ] La cosa es la siguiente:

El pack que tiene async dentro es:

```js
module.exports = Promise.all([ ...dependencias ]).then(function() {
   // aquí el código del módulo realmente.
});
```

El compiler puede ocuparse de esto?


----

- [x] Que el algoritmo ordene las dependencias
   - [x] por orden
   - [x] conforme use Pax.sync(...) y Pax.async(...)
   - [x] conforme los módulos que se usan dentro
   - [x] conforme los 3 waves
   - [ ] detectando circularidad y bloqueándola
- [x] Que el algoritmo genere javascript correcto
   - [x] Plantilla mínima por cada dependencia
   - [x] Todo wrapeado
   - [x] Que reutilice la instancia de Pax
   - [x] En ficheros aparte
   - [ ] Con soporte para drivers
- [ ] Hay que hacer una CLI también que permita:
   - [ ] «pax compile» con las opciones:
      - [ ] --entry file.js => ruta al fichero de entrada
      - [ ] --output dist/dist => ruta de fichero (sin extensión) para el js y el css de salida
      - [ ] --basedir . => el basedir del PaxCompiler