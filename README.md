# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto: Poké!dex](#2-resumen-del-proyecto-pokedex)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño UX](#4-diseño-ux)
* [5. Interfaz finalizada](#5-interfaz-finalizada)
* [6. Test de usabilidad](#6-test-de-usabilidad)
* [7. Checklist](#7-checklist)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por las
usuarias, al lado derecho.

![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Resumen del proyecto: Poké!dex

![pokedex png](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/59800fac-db15-436d-9204-a9fa59e0c35b)

Poké!dex es una interfaz donde usuarios frecuentes de la app Pokémon Go pueden conocer las características de los 251 pokémon de la región de Kanto y Johto mediante una lista. Por medio de 3 filtros, pueden conocer a los pokémon por tipo, ordenarlos alfabéticamente y buscarlos por nombre.

Se consideró como usuario principal personas que juegan regularmente y tienen un conocimiento básico de conceptos utilizados en el juego, que desean complementar o buscar información extra para mejorar la calidad de su experiencia a la hora de ingresar a la app.

### Desarrollado para
[Laboratoria](https://www.laboratoria.la/)

### Tecnología y lenguaje utilizado
JavaScript (ES6)
Vanilla JS
HTML
CSS

## 3. Historias de Usuario

### a. Definiendo al usuario

¿Quiénes son los principales usuarios de producto?

Dirigimos nuestro proyecto a personas que utilizan la aplicación de manera regular, independientemente de su género, y que están familiarizadas con el lenguaje y las dinámicas del juego. No consideramos necesario que fueran expertos, pero sí importante que utilicen la aplicación con frecuencia. El rango de edades que abarcamos fue de 20 a 35 años, considerando que se trata de una población de nativos digitales. Esta información tuvo un impacto en el diseño y la interfaz de nuestro proyecto, ya que nos permitió determinar la cantidad de información que podíamos incluir en la página y cómo presentarla de manera óptima para su comprensión.

Con el fin de comprender las prioridades de los usuarios, optamos por presentarles una encuesta que destacó diferentes características de los Pokémon. Posteriormente, solicitamos a los usuarios que las clasificaran en orden de importancia, desde la más relevante hasta la menos relevante, en el contexto de jugar Pokémon GO. 

### b. Definiendo historias de usuario a partir de los resultados de la encuesta.

A partir del research definimos las siguientes historias de usuario, priorizando el orden de importancia seleccionado por los 21 usuarios que respondieron la encuesta. Para definir cada Historia de Usuario (H.U), utilizamos 3 parámetros:

Yo, (usuario), Quiero (objetivo del usuario), Para (propósito de ese objetivo). Además definimos criterios de aceptación y definiciones de terminado por cada H.U, para ello utilizamos un tablero de [Trello](https://trello.com/b/zJZRZyhv/data-lovers-pokemon-go) donde organizamos cada sprint en torno a una H.U.

#### **HU1**
Yo, jugador frecuente de Pokemon Go.
Quiero: Conocer los tipos de cada Pokemon.
Para: Poder elegir el indicado para la batalla.

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/0460e7f0-918a-4ccb-a40f-2bded3b6f1ae)

##### **HU2**
    
Yo, jugador frecuente de Pokemon Go.
Quiero: Conocer stats de cada Pokemon.
Para: Decidir mas rápido cuál elegir a la hora de jugar PvP (hp, cp, atk, def, etc)

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/347fe594-fd23-49a7-8b30-5dbcfb0e0c8d)

##### **HU3**
Yo, jugador frecuente de Pokemon Go.
Quiero: Conocer estadísticas de un pokemon.
Para: Complementar mi conocimiento acerca de las generaciones de Kanto y Johto.

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/3c2a4546-b8f3-4e65-a36d-b8fa2815375a)

## 4. Diseño UX

### a. Prototipo de baja fidelidad colaborativo

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/6ee20df5-145b-4549-a0bd-536996a3e4a1)

Realizamos nuestro prototipo de baja fidelidad de las tres historias, consideramos las respuestas de mayor importancia en la encuesta llenada por los usuarios.

Definimos las categorías en base a sus características (tipo), debilidades, ataque, estadísticas y una barra de búsqueda. Al poner el mouse sobre alguno de los botones se desplegarían las subcategorías. Al clickear en cualquiera de ellas se dirigiría al filtro seleccionado.

En la parte lateral derecha queremos colocar una selección donde al clickear se visualicen las siguientes opciones: ordenar por nombres y ordenar por número de Pokémon. El orden por default es por número de pokémon.

En la parte de central de la página se visualizaría la lista de todos los Pokémon con una imagen incluida, en formato de tarjeta. Al poner el mouse sobre cualquiera de las tarjetas se activaría una función flip que al reverso mostraría los stats.


### b. Prototipo de alta fidelidad

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/850ee951-6737-4281-a379-486a93755128)
![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/15b18ee6-7ff5-4d3c-9a23-8eaee4b6909c)


### c. Modificaciones basadas en test de usabilidad


## 5. Interfaz finalizada

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/9c5b90d2-ba0a-429d-9ad7-88dcae45e90b)

### Responsive

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/18a2c022-2fd3-4d81-913e-ec4b80195129)

## 6. Test de usabilidad

![image](https://github.com/martinaemunoz/DEV007-data-lovers/assets/52142059/700a2ba5-12cd-4540-8b2e-94f3ea913ab1)

## 7. Checklist

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
