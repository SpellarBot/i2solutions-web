# Api Riesgos
## Crear un riesgo

> Código: API_1

> Descripción: Crear un riesgo

> Url : /api/web/riesgos

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> tipoRiesgo</td>
				<td> <a id='CE_API_1[C01]'>CE_API_1[C01]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tipoRiesgo</td>
				<td> <a id='CE_API_1[C02]'>CE_API_1[C02]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tipoRiesgo</td>
				<td> <a id='CE_API_1[C03]'>CE_API_1[C03]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> personasExpuestas</td>
				<td> <a id='CE_API_1[C11]'>CE_API_1[C11]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> personasExpuestas</td>
				<td> <a id='CE_API_1[C12]'>CE_API_1[C12]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> personasExpuestas</td>
				<td> <a id='CE_API_1[C13]'>CE_API_1[C13]</a> </td>
				<td> minimum: !0 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> valoracion</td>
				<td> <a id='CE_API_1[C21]'>CE_API_1[C21]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracion</td>
				<td> <a id='CE_API_1[C22]'>CE_API_1[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracion</td>
				<td> <a id='CE_API_1[C23]'>CE_API_1[C23]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> valoracionLiteral</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracionLiteral</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracionLiteral</td>
				<td> <a id='CE_API_1[C33]'>CE_API_1[C33]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> porcentajeRiesgo</td>
				<td> <a id='CE_API_1[C41]'>CE_API_1[C41]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> porcentajeRiesgo</td>
				<td> <a id='CE_API_1[C42]'>CE_API_1[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> porcentajeRiesgo</td>
				<td> <a id='CE_API_1[C43]'>CE_API_1[C43]</a> </td>
				<td> minimum: !0</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fecha</td>
				<td> <a id='CE_API_1[C51]'>CE_API_1[C51]</a> </td>
				<td> { 'type': 'fecha' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fecha</td>
				<td> <a id='CE_API_1[C52]'>CE_API_1[C52]</a> </td>
				<td> 'type': !'fecha'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> puestosId</td>
				<td> <a id='CE_API_1[C61]'>CE_API_1[C61]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_1[C62]'>CE_API_1[C62]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_1[C63]'>CE_API_1[C63]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Crear un riesgo de forma correcta

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "tipoRiesgo": "Caida de objetos",
    "personasExpuestas": 15,
    "valoracion": "1524",
    "valoracionLiteral": "aa",
    "porcentajeRiesgo": 2,
    "fecha": "2014-05-21T19:27:28.576Z",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-14T23:21:25.786Z",
    "fechaCreacion": "2018-07-14T23:21:25.786Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

tipoRiesgo tipo no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": 1,
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tipoRiesgo": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[3]__

tipoRiesgo tamano no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tipoRiesgo": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[4]__

personasExpuestas tipo no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": "a",
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasExpuestas": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[5]__

personasExpuestas tamano no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": -1,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasExpuestas": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[6]__

valoracion tipo no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": 1,
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[7]__

valoracion tamano no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[8]__

valoracionLiteral tipo no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": 1,
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracionLiteral": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[9]__

valoracionLiteral tamano no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracionLiteral": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[10]__

porcentajeRiesgo tipo no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": "a",
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "porcentajeRiesgo": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[11]__

porcentajeRiesgo tamano no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": -1,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "porcentajeRiesgo": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[12]__

fecha no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-32T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fecha": "La fecha no es valida"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[13]__

puestosId tipo no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "puestosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[14]__

puestosId tamano no valido

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 0
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "puestosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[15]__

puestosId no existe

__Datos prueba__

_url_ 

> /api/web/riesgos

POST /api/web/riesgos

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 50
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El puesto no existe",
  "codigoEstado": 200
}
```


___


## Actualizar un riesgo

> Código: API_2

> Descripción: Actualizar un riesgo

> Url : /api/web/riesgos/:riesgosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> tipoRiesgo</td>
				<td> <a id='CE_API_2[C01]'>CE_API_2[C01]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tipoRiesgo</td>
				<td> <a id='CE_API_2[C02]'>CE_API_2[C02]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> tipoRiesgo</td>
				<td> <a id='CE_API_2[C03]'>CE_API_2[C03]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> personasExpuestas</td>
				<td> <a id='CE_API_2[C11]'>CE_API_2[C11]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> personasExpuestas</td>
				<td> <a id='CE_API_2[C12]'>CE_API_2[C12]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> personasExpuestas</td>
				<td> <a id='CE_API_2[C13]'>CE_API_2[C13]</a> </td>
				<td> minimum: !0 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> valoracion</td>
				<td> <a id='CE_API_2[C21]'>CE_API_2[C21]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracion</td>
				<td> <a id='CE_API_2[C22]'>CE_API_2[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracion</td>
				<td> <a id='CE_API_2[C23]'>CE_API_2[C23]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> valoracionLiteral</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracionLiteral</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> valoracionLiteral</td>
				<td> <a id='CE_API_2[C33]'>CE_API_2[C33]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> porcentajeRiesgo</td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> porcentajeRiesgo</td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> porcentajeRiesgo</td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td> minimum: !0</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fecha</td>
				<td> <a id='CE_API_2[C51]'>CE_API_2[C51]</a> </td>
				<td> { 'type': 'fecha' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fecha</td>
				<td> <a id='CE_API_2[C52]'>CE_API_2[C52]</a> </td>
				<td> 'type': !'fecha'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> puestosId</td>
				<td> <a id='CE_API_2[C61]'>CE_API_2[C61]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_2[C62]'>CE_API_2[C62]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_2[C63]'>CE_API_2[C63]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_2[C71]'>CE_API_2[C71]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_2[C72]'>CE_API_2[C72]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_2[C73]'>CE_API_2[C73]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Crear un riesgo de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>aaa</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "aaa",
  "personasExpuestas": 2,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
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

tipoRiesgo tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C02]"> CE_API_2[C02]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": 1,
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tipoRiesgo": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[3]__

tipoRiesgo tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C03]"> CE_API_2[C03]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "tipoRiesgo": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[4]__

personasExpuestas tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C12]"> CE_API_2[C12]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": "",
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasExpuestas": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

personasExpuestas tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C13]"> CE_API_2[C13]</a></td>
    <td>-1</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": -1,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasExpuestas": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[6]__

valoracion tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C22]"> CE_API_2[C22]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": 1,
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[7]__

valoracion tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C23]"> CE_API_2[C23]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

valoracionLiteral tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C32]"> CE_API_2[C32]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": 2,
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "valoracionLiteral": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

valoracionLiteral tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C33]"> CE_API_2[C33]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": "",
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "porcentajeRiesgo": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

porcentajeRiesgo tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C42]"> CE_API_2[C42]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td></td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT 

_request o body_
```js

```

__Resultados__

_response_

```js

```


__ICE_API_2[11]__

porcentajeRiesgo tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C43]"> CE_API_2[C43]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T25:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T25:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fecha": "La fecha no es valida"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[12]__

fecha no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C52]"> CE_API_2[C52]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td></td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT 

_request o body_
```js

```

__Resultados__

_response_

```js

```


__ICE_API_2[13]__

puestosId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C62]"> CE_API_2[C62]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "puestosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[14]__

puestosId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C63]"> CE_API_2[C63]</a></td>
    <td>0</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 0
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "puestosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[15]__

puestosId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>50</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/1

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 50
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El puesto no existe",
  "codigoEstado": 200
}
```


__ICE_API_2[16]__

riesgosId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/0

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "riesgosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[17]__

riesgosId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caida de objetos</td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>15</td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1524</td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>50</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT /api/web/riesgos/50

_request o body_
```js
{
  "tipoRiesgo": "Caida de objetos",
  "personasExpuestas": 15,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "Error en actualizar el riesgo",
  "codigoEstado": 200
}
```


__ICE_API_2[18]__

riesgosId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>tipoRiesgo</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>personasExpuestas</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracion</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>valoracionLiteral</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>porcentajeRiesgo</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C51]"> CE_API_2[C51]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>riesgosId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td></td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

PUT 

_request o body_
```js

```

__Resultados__

_response_

```js

```


___


## Eliminar un riesgo

> Código: API_3

> Descripción: Eliminar un riesgo

> Url : /api/web/riesgos/:riesgosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_3[C03]'>CE_API_3[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Eliminar un puesto de forma correcta

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

DELETE /api/web/riesgos/1

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

riesgosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

DELETE /api/web/riesgos/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "riesgosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

riesgosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

DELETE /api/web/riesgos/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "riesgosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

riesgosId no exite

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

DELETE /api/web/riesgos/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "riesgo con es id no existe",
  "codigoEstado": 200
}
```


___


## Obtener una riesgo

> Código: API_4

> Descripción: Obtener un riesgo

> Url : /api/web/riesgos/:riesgosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_4[C01]'>CE_API_4[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_4[C02]'>CE_API_4[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  riesgosId </td>
				<td> <a id='CE_API_4[C03]'>CE_API_4[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Obtener una riesgo de forma correcta

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

GET /api/web/riesgos/1

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
    "tipoRiesgo": null,
    "personasExpuestas": null,
    "valoracion": null,
    "valoracionLiteral": null,
    "fecha": "2018-07-14 23:21:27.273 +00:00",
    "porcentajeRiesgo": null,
    "fechaCreacion": "2018-07-14 23:21:27.273 +00:00",
    "fechaActualizacion": "2018-07-14 23:21:27.273 +00:00",
    "puestosId": 1
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

riesgosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

GET /api/web/riesgos/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "riesgosId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

riesgosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

GET /api/web/riesgos/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "riesgosId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[4]__

riesgosId no exite

__Datos prueba__

_url_ 

> /api/web/riesgos/:riesgosId

GET /api/web/riesgos/50

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


