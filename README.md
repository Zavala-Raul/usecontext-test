# usecontext-test

Ejercicio para compartir estado con `useContext` sin pasarlo por props.

## Cadena de componentes

Los componentes están anidados en este orden:

1. `Header` muestra **Items: 0**.
2. `Page` solo envuelve el contenido.
3. `Panel` muestra el producto.
4. `AddButton` renderiza **Add to cart**.

`Page` y `Panel` no usan el conteo. El valor lo necesitan el primero y el cuarto.

## Qué hay que lograr

Al pulsar **Add to cart**, el texto **Items** del header debe aumentar.

Ese estado se comparte con `useContext`. No se pasa por props a través de `Page` ni de `Panel`.
