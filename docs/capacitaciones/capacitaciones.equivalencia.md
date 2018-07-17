# Api Capacitaciones
## Crear una capacitacion

> Código: API_1

> Descripción: Crear una capacitacion

> Url : /api/web/capacitaciones

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> nombre</td>
				<td> <a id='CE_API_1[C01]'>CE_API_1[C01]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_1[C02]'>CE_API_1[C02]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_1[C03]'>CE_API_1[C03]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcion</td>
				<td> <a id='CE_API_1[C11]'>CE_API_1[C11]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_1[C12]'>CE_API_1[C12]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_1[C13]'>CE_API_1[C13]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> tema</td>
				<td> <a id='CE_API_1[C21]'>CE_API_1[C21]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tema</td>
				<td> <a id='CE_API_1[C22]'>CE_API_1[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tema</td>
				<td> <a id='CE_API_1[C23]'>CE_API_1[C23]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fechaCapacitacion</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'string', type: 'date-time' EJ: 2018-04-25T04:27:34Z }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fechaCapacitacion</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> type: !string</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fechaCapacitacion</td>
				<td> <a id='CE_API_1[C33]'>CE_API_1[C33]</a> </td>
				<td> type: !date-time</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> areasId</td>
				<td> <a id='CE_API_1[C41]'>CE_API_1[C41]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> areasId</td>
				<td> <a id='CE_API_1[C42]'>CE_API_1[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> areasId</td>
				<td> <a id='CE_API_1[C43]'>CE_API_1[C43]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Crear un capacitacion de forma correcta

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Joel Rodriguez",
    "descripcion": "La capacitación fue un éxito",
    "tema": "Como hacer que todo valga",
    "fechaCapacitacion": "2018-04-25T04:27:34.000Z",
    "areasId": 1,
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

nombre tipo no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": 1,
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
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


__ICE_API_1[3]__

nombre tamano no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombre": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[4]__

descripcion tipo no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": 1,
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[5]__

descripcion tamano no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[6]__

tema tipo no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": 1,
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tema": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[7]__

tema tamano no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tema": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[8]__

fechaCapacitacion tipo no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": 1,
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fechaCapacitacion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[9]__

fechaCapacitacion formato no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2017-08-09",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fechaCapacitacion": "debe coincidir con el formato \"date-time\""
  },
  "codigoEstado": 200
}
```


__ICE_API_1[10]__

areasId tipo no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": "a"
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


__ICE_API_1[11]__

areasId tamano no valido

__Datos prueba__

_url_ 

> /api/web/capacitaciones

POST /api/web/capacitaciones

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z",
  "areasId": 0
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


## Actualizar una capacitacion

> Código: API_2

> Descripción: Actualizar una capacitacion

> Url : /api/web/capacitaciones/:capacitacionesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C01]'>CE_API_2[C01]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C02]'>CE_API_2[C02]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C03]'>CE_API_2[C03]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcion</td>
				<td> <a id='CE_API_2[C11]'>CE_API_2[C11]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_2[C12]'>CE_API_2[C12]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_2[C13]'>CE_API_2[C13]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> tema</td>
				<td> <a id='CE_API_2[C21]'>CE_API_2[C21]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tema</td>
				<td> <a id='CE_API_2[C22]'>CE_API_2[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tema</td>
				<td> <a id='CE_API_2[C23]'>CE_API_2[C23]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fechaCapacitacion</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'string', type: 'date-time' EJ: 2018-04-25T04:27:34Z }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fechaCapacitacion</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> type: !string</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fechaCapacitacion</td>
				<td> <a id='CE_API_2[C33]'>CE_API_2[C33]</a> </td>
				<td> type: !date-time</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Actualizar capacitacion de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>aaa</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "aa",
  "descripcion": "aaa",
  "tema": "aa",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
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

nombre tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C02]"> CE_API_2[C02]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": 1,
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
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


__ICE_API_2[3]__

nombre tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C03]"> CE_API_2[C03]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombre": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[4]__

descripcion tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C12]"> CE_API_2[C12]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": 1,
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

descripcion tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C13]"> CE_API_2[C13]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "descripcion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[6]__

tema tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C22]"> CE_API_2[C22]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": 1,
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tema": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[7]__

tema tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C23]"> CE_API_2[C23]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tema": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

fechaCapacitacion tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C32]"> CE_API_2[C32]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fechaCapacitacion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

fechaCapacitacion formato no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C33]"> CE_API_2[C33]</a></td>
    <td>2018-18-02</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/1

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-18-02"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fechaCapacitacion": "debe coincidir con el formato \"date-time\""
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

capacitacionesId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C42]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/a

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "capacitacionesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[11]__

capacitacionesId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Joel Rodriguez</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>La capacitación fue un éxito</td>
  </tr>
  <tr>
    <td>tema</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>Como hacer que todo valga</td>
  </tr>
  <tr>
    <td>fechaCapacitacion</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>capacitacionesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C43]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

PUT /api/web/capacitaciones/0

_request o body_
```js
{
  "nombre": "Joel Rodriguez",
  "descripcion": "La capacitación fue un éxito",
  "tema": "Como hacer que todo valga",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "capacitacionesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Eliminar una capacitacion

> Código: API_3

> Descripción: Eliminar una capacitacion

> Url : /api/web/capacitaciones/:capacitacionesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_3[C03]'>CE_API_3[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Eliminada una capacitacion de forma correcta

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

DELETE /api/web/capacitaciones/1

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


__ICE_API_3[2]__

capacitacionesId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

DELETE /api/web/capacitaciones/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "capacitacionesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

capacitacionesId  no valido numero

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

DELETE /api/web/capacitaciones/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "capacitacionesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

capacitacionesId no exite

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

DELETE /api/web/capacitaciones/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "capacitacion con es id no existe",
  "codigoEstado": 200
}
```


___


## Obtener una capacitacion

> Código: API_4

> Descripción: Obtener una capacitacion

> Url : /api/web/capacitaciones/:capacitacionesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_4[C01]'>CE_API_4[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_4[C02]'>CE_API_4[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  capacitacionesId </td>
				<td> <a id='CE_API_4[C03]'>CE_API_4[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Obtener una capacitacion de forma correcta

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

GET /api/web/capacitaciones/1

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
    "nombre": "Joel Rodriguez",
    "descripcion": "La capacitación fue un éxito",
    "tema": "Como hacer que todo valga",
    "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "areasId": 1
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

capacitacionesId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

GET /api/web/capacitaciones/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "capacitacionesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

capacitacionesId  no valido numero

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

GET /api/web/capacitaciones/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "capacitacionesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[4]__

capacitacionesId no exite

__Datos prueba__

_url_ 

> /api/web/capacitaciones/:capacitacionesId

GET /api/web/capacitaciones/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": null,
  "codigoEstado": 200
}
```


___


## Obtener capacitaciones por establecimiento

> Código: API_5

> Descripción: 

> Url : /api/web/capacitaciones/establecimientos/:establecimientosId

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
				<td> <a id='CE_API_5[C01]'>CE_API_5[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_5[C02]'>CE_API_5[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_5[C03]'>CE_API_5[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_5[1]__

Obtener capacitaciones por establecimientos

__Datos prueba__

_url_ 

> /api/web/capacitaciones/establecimientos/:establecimientosId

GET /api/web/capacitaciones/establecimientos/1

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
      "nombre": "Joel Rodriguez",
      "id": 1,
      "descripcion": "La capacitación fue un éxito",
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Como hacer que todo valga",
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
    },
    {
      "nombre": "Andres Escobar",
      "id": 2,
      "descripcion": "Ensenar como hacer algo",
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Datos ",
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_5[2]__

establecimientosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/capacitaciones/establecimientos/:establecimientosId

GET /api/web/capacitaciones/establecimientos/a

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


__ICE_API_5[3]__

establecimientosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/capacitaciones/establecimientos/:establecimientosId

GET /api/web/capacitaciones/establecimientos/0

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


__ICE_API_5[4]__

establecimientosId no exite

__Datos prueba__

_url_ 

> /api/web/capacitaciones/establecimientos/:establecimientosId

GET /api/web/capacitaciones/establecimientos/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": [],
  "codigoEstado": 200
}
```


___


## Obtener capacitaciones por areas

> Código: API_6

> Descripción: 

> Url : /api/web/capacitaciones/areas/:areasId

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
				<td> <a id='CE_API_6[C01]'>CE_API_6[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_6[C02]'>CE_API_6[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_6[C03]'>CE_API_6[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_6[1]__

Obtener capacitaciones por area

__Datos prueba__

_url_ 

> /api/web/capacitaciones/areas/:areasId

GET /api/web/capacitaciones/areas/1

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
      "nombre": "Joel Rodriguez",
      "id": 1,
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Como hacer que todo valga",
      "areasId": 1
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_6[2]__

areasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/capacitaciones/areas/:areasId

GET /api/web/capacitaciones/areas/a

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


__ICE_API_6[3]__

areasId  no valido numero

__Datos prueba__

_url_ 

> /api/web/capacitaciones/areas/:areasId

GET /api/web/capacitaciones/areas/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": [],
  "codigoEstado": 200
}
```


__ICE_API_6[4]__

areasId no exite

__Datos prueba__

_url_ 

> /api/web/capacitaciones/areas/:areasId

GET 

_request o body_
```js

```

__Resultados__

_response_

```js

```


___


