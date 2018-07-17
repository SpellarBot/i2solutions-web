# Api Areas
## Obtener todas las areas de un establecimiento

> Código: API_1

> Descripción: obtiene todas las areas de un establecimiento

> Url : /api/web/areas/establecimientos/:establecimientosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_1[C1]'>CE_API_1[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_1[C2]'>CE_API_1[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_1[C3]'>CE_API_1[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Con areas existentes

__Datos prueba__

_url_ 

> /api/web/areas/establecimientos/:establecimientosId

GET /api/web/areas/establecimientos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "actividad": "gerencia",
      "nombre": "Gerente General",
      "fotoUrl": "http://lorempixel.com/640/480",
      "metrosCuadrados": "20x20",
      "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
      "establecimientosId": 1
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

establecimientosId no es un numero

__Datos prueba__

_url_ 

> /api/web/areas/establecimientos/:establecimientosId

GET /api/web/areas/establecimientos/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "establecimientosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[3]__

establecimientosId debe ser minimo 1

__Datos prueba__

_url_ 

> /api/web/areas/establecimientos/:establecimientosId

GET /api/web/areas/establecimientos/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "establecimientosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Crear un area

> Código: API_2

> Descripción: Crear un area

> Url : /api/web/areas

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> actividad</td>
				<td> <a id='CE_API_2[C1]'>CE_API_2[C1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividad</td>
				<td> <a id='CE_API_2[C2]'>CE_API_2[C2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividad</td>
				<td> <a id='CE_API_2[C3]'>CE_API_2[C3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C11]'>CE_API_2[C11]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C12]'>CE_API_2[C12]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C13]'>CE_API_2[C13]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_2[C21]'>CE_API_2[C21]</a> </td>
				<td> 'type': 'string', 'format': 'url'</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_2[C22]'>CE_API_2[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_2[C23]'>CE_API_2[C23]</a> </td>
				<td> format: !url </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> metrosCuadrados</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> metrosCuadrados</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> metrosCuadrados</td>
				<td> <a id='CE_API_2[C33]'>CE_API_2[C33]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcionLugar</td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcionLugar</td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcionLugar</td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> establecimientosId</td>
				<td> <a id='CE_API_2[C51]'>CE_API_2[C51]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> establecimientosId</td>
				<td> <a id='CE_API_2[C52]'>CE_API_2[C52]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> establecimientosId</td>
				<td> <a id='CE_API_2[C53]'>CE_API_2[C53]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Crear un area de forma correcta

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "actividad": "gerencia",
    "nombre": "Gerente General",
    "fotoUrl": "http://lorempixel.com/640/480",
    "metrosCuadrados": "20x20",
    "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
    "establecimientosId": 1,
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[2]__

actividad tipo no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": 1,
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividad": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[3]__

actividad tamano no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividad": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[4]__

nombre tipo no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": 1,
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombre": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

nombre tamano no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": 0,
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombre": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[6]__

fotoUrl tipo no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": 1,
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fotoUrl": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[7]__

fotoUrl formato no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "https//",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fotoUrl": "debe coincidir con el formato \"url\""
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

metrosCuadrados tipo no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "metrosCuadrados": 1,
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "metrosCuadrados": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

metrosCuadrados tamano no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "metrosCuadrados": 0,
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "metrosCuadrados": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

descripcionLugar tipo no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "metrosCuadrados": "20x20",
  "descripcionLugar": 1,
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcionLugar": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[11]__

descripcionLugar tamano no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "metrosCuadrados": "20x20",
  "descripcionLugar": 0,
  "establecimientosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcionLugar": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[12]__

establecimientosId tipo no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "establecimientosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[13]__

establecimientosId tamano no valido

__Datos prueba__

_url_ 

> /api/web/areas

POST /api/web/areas

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 0
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "establecimientosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Actualizar un area

> Código: API_2

> Descripción: Actualizar un area

> Url : /api/web/areas/:areasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> actividad</td>
				<td> <a id='CE_API_2[C1]'>CE_API_2[C1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividad</td>
				<td> <a id='CE_API_2[C2]'>CE_API_2[C2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividad</td>
				<td> <a id='CE_API_2[C3]'>CE_API_2[C3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C11]'>CE_API_2[C11]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C12]'>CE_API_2[C12]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C13]'>CE_API_2[C13]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_2[C21]'>CE_API_2[C21]</a> </td>
				<td> 'type': 'string', 'format': 'url'</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_2[C22]'>CE_API_2[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_2[C23]'>CE_API_2[C23]</a> </td>
				<td> format: !url </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> metrosCuadrados</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> metrosCuadrados</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> metrosCuadrados</td>
				<td> <a id='CE_API_2[C33]'>CE_API_2[C33]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcionLugar</td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcionLugar</td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcionLugar</td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  areasId </td>
				<td> <a id='CE_API_2[C51]'>CE_API_2[C51]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_2[C52]'>CE_API_2[C52]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_2[C53]'>CE_API_2[C53]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Crear un area de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>AA</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Mi nombre editado</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://image.png</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>50</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>AA</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "AA",
  "nombre": "Mi nombre editado",
  "fotoUrl": "https://image.png",
  "metrosCuadrados": "50",
  "descripcionLugar": "AA"
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


__ICE_API_2[2]__

actividad tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C2]"> CE_API_2[C2]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": 1,
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividad": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[3]__

actividad tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C3]"> CE_API_2[C3]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividad": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[4]__

nombre tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C12]"> CE_API_2[C12]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": 1,
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombre": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

nombre tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C13]"> CE_API_2[C13]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": 1,
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "metrosCuadrados": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[6]__

fotoUrl tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C22]"> CE_API_2[C22]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": 1,
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fotoUrl": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[7]__

fotoUrl formato no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C23]"> CE_API_2[C23]</a></td>
    <td>https://</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "https://",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fotoUrl": "debe coincidir con el formato \"url\""
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

metrosCuadrados tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C32]"> CE_API_2[C32]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td></td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas

_request o body_
```js

```

__Resultados__

_response_

```js

```


__ICE_API_2[9]__

metrosCuadrados tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C33]"> CE_API_2[C33]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "metrosCuadrados": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

descripcionLugar tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C42]"> CE_API_2[C42]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcionLugar": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[11]__

descripcionLugar tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C43]"> CE_API_2[C43]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/1

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": ""
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcionLugar": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[12]__

areasId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C52]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/a

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "areasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[13]__

areasId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>actividad</td>
    <td><a href="#CE_API_2[C1]"> CE_API_2[C1]</a></td>
    <td>gerencia</td>
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Gerente General</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://lorempixel.com/640/480</td>
  </tr>
  <tr>
    <td>metrosCuadrados</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>20x20</td>
  </tr>
  <tr>
    <td>descripcionLugar</td>
    <td><a href="#CE_API_2[C42]"> CE_API_2[C42]</a></td>
    <td>Neque incidunt earum quia sint dolorem dolores ut amet.</td>
  </tr>
  <tr>
    <td>areasId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C53]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

PUT /api/web/areas/0

_request o body_
```js
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "areasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Eliminar un area

> Código: API_4

> Descripción: Borrar un area

> Url : /api/web/areas/:areasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  areasId </td>
				<td> <a id='CE_API_4[C1]'>CE_API_4[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_4[C2]'>CE_API_4[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_4[C3]'>CE_API_4[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Eliminada una area de forma correcta

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

DELETE /api/web/areas/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

areasId no valido numero

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

DELETE /api/web/areas/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "areasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

areasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

DELETE /api/web/areas/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "areasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[4]__

areasId no exite

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

DELETE /api/web/areas/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "areas con es id no existe",
  "codigoEstado": 200
}
```


___


## Obtener un area

> Código: API_4

> Descripción: Obtener un area

> Url : /api/web/areas/:areasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  areasId </td>
				<td> <a id='CE_API_4[C1]'>CE_API_4[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_4[C2]'>CE_API_4[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_4[C3]'>CE_API_4[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Obtener una area de forma correcta

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

GET /api/web/areas/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "actividad": "gerencia",
    "nombre": "Gerente General",
    "fotoUrl": "http://lorempixel.com/640/480",
    "metrosCuadrados": "20x20",
    "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

areasId no valido numero

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

GET /api/web/areas/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "areasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

areasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/areas/:areasId

GET /api/web/areas/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "areasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


___


## Obtener un areas categorizados por puestos dado un establecimiento

> Código: API_6

> Descripción: Obtener un areas categorizados por puestos dado un establecimiento

> Url : /api/areas/puestos/establecimientos/:establecimientosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_6[C1]'>CE_API_6[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_6[C2]'>CE_API_6[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_6[C3]'>CE_API_6[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_6[1]__

Con areas existentes

__Datos prueba__

_url_ 

> /api/areas/puestos/establecimientos/:establecimientosId

GET /api/web/areas/puestos/establecimientos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombre": "Gerente General",
      "actividad": "gerencia",
      "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "puestos": [
        {
          "cantidadPersonas": 1,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 1,
          "cantidadEquipos": 0,
          "id": 1,
          "nombre": "Oficina de gerente general",
          "descripcion": "AA"
        },
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 0,
          "cantidadEquipos": 0,
          "id": 2,
          "nombre": "Oficina de jefe de TTHH",
          "descripcion": "AA"
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Jefe TTHH",
      "actividad": "recursos humanos",
      "descripcionLugar": "Facilis nemo accusamus ipsa nesciunt nobis.",
      "puestos": [
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 0,
          "cantidadNovedadesSinAtender": 0,
          "cantidadEquipos": 0,
          "id": 3,
          "nombre": "Oficina de jefe de TTHH",
          "descripcion": "AA"
        }
      ]
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_6[2]__

establecimientosId no es un numero

__Datos prueba__

_url_ 

> /api/areas/puestos/establecimientos/:establecimientosId

GET /api/web/areas/puestos/establecimientos/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "establecimientosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_6[3]__

establecimientosId debe ser minimo 1

__Datos prueba__

_url_ 

> /api/areas/puestos/establecimientos/:establecimientosId

GET /api/web/areas/puestos/establecimientos/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "establecimientosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


