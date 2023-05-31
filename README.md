# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto: Poké!dex](#2-resumen-del-proyecto-poké!dex)
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

#### HU1
Yo, jugador frecuente de Pokemon Go.
Quiero: Conocer las debilidades y ataques especiales de cada Pokemon.
Para: Que pueda elegir el indicado para la batalla.

##### HU2
Yo, jugador frecuente de Pokemon Go.
Quiero: Conocer stats de cada Pokemon.
Para: Decidir mas rápido cuál elegir a la hora de jugar PvP (hp, cp, atk, def, etc)

##### HU3
Yo, jugador frecuente de Pokemon Go.
Quiero: Conocer estadísticas de un pokemon.
Para: Complementar mi conocimiento acerca de las generaciones de Kanto y Johto.

## 4. Diseño UX

### a. Prototipo de baja fidelidad
### b. Prototipo de alta fidelidad
### c. Modificaciones basadas en test de usabilidad


## 5. Interfaz finalizada

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Test de usabilidad

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
* [] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
