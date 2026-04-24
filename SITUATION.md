El problema:

Los módulos síncronos son:

```js
(function(module) {
    try {
        // ENGANCHAS EL CÓDIGO AQUÍ
    } finally {
        Pax.modules[id] = module.exports;
    }
})({ exports: undefined });
```

Pero los asíncronos tienen que ser:

```js
Pax.promises[id] = (async function(module) {
    try {
        await Promise.all([
            Pax.promises[dpndc1],
            Pax.promises[dpndc2],
            Pax.promises[dpndc3],
            Pax.promises[dpndc4],
        ]);
        // ENGANCHAS EL CÓDIGO AQUÍ
        // SÍ, LOS ASYNC o con dependencias async ADMITEN DIRECTAMENTE SINTAXIS AWAIT
    } finally {
        Pax.modules[id] = module.exports;
    }
})({ exports: undefined });
```


La solución:
