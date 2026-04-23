- [ ] Cambiar module y static por sync y async
- [ ] Preparar tests independientes y automáticos
- [ ] Tests para:
   - [ ] 1. Ordena bien los módulos


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