# Ruta Básica de la API del Servidor

## Aprenda los conceptos básicos de la API de Nuxt

Comencemos creando una API en la carpeta de `server/`. Cree una nueva carpeta y llamémosla `api/`. Luego, dentro de esta carpeta, cree un nuevo archivo y llamémoslo `test.ts`.

![screen01](./img/screen01.jpg)

Luego dentro del archivo `test.ts` exportar predeterminadamente el método `defineEventHandler` pasando como argumento una función de flecha que a su vez recibe el parametro `event` y simplemente regresaremos `'Hello World'`.

📃`./server/api/test.js`
```ts
export default defineEventHandler((event)=>{
  return 'Hello World'
})
```

Luego guarde el archivo y diríjase a Postman, llamemos desde la url `http://localhost:3000/api/test` y pruebe.

![screen02](./img/screen02.jpg)

Como puede ver, genera el  `'Hello World'`, volvemos aquí.














 y si quieres configurar un HTTP específico.
2:38
método en la API de su servidor um, simplemente puede solucionarlo con el uh
2:44
método que desea, así que cambie el nombre y luego pruebe, obtenga, por ejemplo, para que
2:51
Será prueba. conseguir. DS, por lo que esto se convertirá automáticamente en un controlador de obtención.
2:58
Bien, volvamos al cartero y si lo enviamos, generará el
3:05
Hola mundo, está bien, pero si vamos a cambiar el método uh a publicación.
3:11
enviar eso ya no funcionará ya que este es el controlador de obtención ahora
3:18
Está bien, pero si quieres que tu API publique, puedes cambiar el nombre.
3:24
eso nuevamente y luego cambiarlo para publicarlo bien en el
3:30
cartero, envía eso y funcionará igual, así que lo mismo para el
3:37
Um, ponga el parche y elimine, está bien, así que veamos la siguiente documentación real.
3:44
rápido, así que aquí en el método HTTP de coincidencia U hay una publicación um get y
3:52
poner y eliminar, está bien, así que aquí el método get devuelve obtener el controlador, está bien, lo mismo
3:59
cosa para la publicación, devolverá un controlador de publicación um, está bien, cualquier otro
4:04
Los métodos devuelven el error 405, está bien en caso de que no desee utilizar la palabra API en
4:11
su servidor enruta, así que, por ejemplo, aquí en el cartero, puede ver si
4:17
Voy a cambiar eso a publicación y luego enviaré como puedes ver que hay un um
4:22
API allí, por lo que la prueba API SL está bien, pero si desea eliminar la API y simplemente
4:29
llame al nombre del archivo um de la API um allí para enviarlo y ya no funcionará, así que
4:36
para lograr eso, simplemente necesita cambiar el nombre de la API aquí y luego cambiar
4:41
a las rutas, está bien así y luego regresa al cartero y si lo intentas
4:48
eso nuevamente, envíelo y, como puede ver, genera hola mundo sin um
4:54
El sufijo API aquí está bien, así que esto es opcional, um si todavía
5:00
Si desea utilizar la API SL API um U SL, entonces
5:05
La prueba que fue um funciona igual, pero el uso común aquí es um host y
5:13
Luego, seguido de una API y luego el nombre de la API, está bien, así que envíe eso no
5:20
ya no funciona, así que voy a cambiarlo de nuevo a API, ya que me gusta así.
5:27
camino y luego de vuelta en el correo, hombre, envíalo de vuelta y funcionará de nuevo.
