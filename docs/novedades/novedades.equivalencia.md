# Api Novedades
## Crear una novedad

> Código: API_1

> Descripción: Crear una novedad

> Url : /api/web/novedades

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcion</td>
				<td> <a id='CE_API_1[C01]'>CE_API_1[C01]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_1[C02]'>CE_API_1[C02]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_1[C03]'>CE_API_1[C03]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> prioridad</td>
				<td> <a id='CE_API_1[C11]'>CE_API_1[C11]</a> </td>
				<td> { 'type': 'string', 'enum': ['alta', 'media', 'baja'] }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> prioridad</td>
				<td> <a id='CE_API_1[C12]'>CE_API_1[C12]</a> </td>
				<td> 'enum': !['alta', 'media', 'baja']</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_1[C21]'>CE_API_1[C21]</a> </td>
				<td> 'type': 'string', 'format': 'url'</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_1[C22]'>CE_API_1[C22]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fotoUrl</td>
				<td> <a id='CE_API_1[C23]'>CE_API_1[C23]</a> </td>
				<td> format: !url </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fecha</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'fecha' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fecha</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> 'type': !'fecha'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> puestosId</td>
				<td> <a id='CE_API_1[C41]'>CE_API_1[C41]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_1[C42]'>CE_API_1[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_1[C43]'>CE_API_1[C43]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Crear una novedad de forma correcta

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "fecha": "2011-10-01T05:00:00.000Z",
    "fotoUrl": "",
    "fueAtendida": false,
    "id": 1,
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "prioridad": "media",
    "puestosId": 1,
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

descripcion tipo no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": 1,
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1
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


__ICE_API_1[3]__

descripcion tamano no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "",
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1
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


__ICE_API_1[4]__

prioridad enum no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "otro",
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "prioridad": "deber ser igual a uno de los valores predefinidos"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[5]__

fotoUrl tipo no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": 1,
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1
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


__ICE_API_1[6]__

fotoUrl formato no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": "https://",
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1
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


__ICE_API_1[7]__

fecha no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-13-25T04:27:34Z",
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


__ICE_API_1[8]__

puestosId tipo no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-04-25T04:27:34Z",
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


__ICE_API_1[9]__

puestosId tamano no valido

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-04-25T04:27:34Z",
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


__ICE_API_1[10]__

puestosId no existe

__Datos prueba__

_url_ 

> /api/web/novedades

POST /api/web/novedades

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-04-25T04:27:34Z",
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


## Actualizar una novedad

> Código: API_2

> Descripción: Actualizar un novedad

> Url : /api/web/novedades/:novedadesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcion</td>
				<td> <a id='CE_API_2[C01]'>CE_API_2[C01]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_2[C02]'>CE_API_2[C02]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_2[C03]'>CE_API_2[C03]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> prioridad</td>
				<td> <a id='CE_API_2[C11]'>CE_API_2[C11]</a> </td>
				<td> { 'type': 'string', 'enum': ['alta', 'media', 'baja'] }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> prioridad</td>
				<td> <a id='CE_API_2[C12]'>CE_API_2[C12]</a> </td>
				<td> 'enum': !['alta', 'media', 'baja']</td>
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
				<td> fecha</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'fecha' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fecha</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> 'type': !'fecha'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> puestosId</td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> puestosId</td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_2[C51]'>CE_API_2[C51]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_2[C52]'>CE_API_2[C52]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_2[C53]'>CE_API_2[C53]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Actualizar un accidente de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2014-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "aa",
  "prioridad": "media",
  "fecha": "2014-05-21T19:27:28.576Z",
  "fotoUrl": "https://imagen.png",
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

descripcion tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C02]"> CE_API_2[C02]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": 1,
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
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


__ICE_API_2[3]__

descripcion tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C03]"> CE_API_2[C03]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
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


__ICE_API_2[4]__

prioridad enum no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C12]"> CE_API_2[C12]</a></td>
    <td>otro</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "otro",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "prioridad": "deber ser igual a uno de los valores predefinidos"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

fotoUrl tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C22]"> CE_API_2[C22]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": 1,
  "puestosId": 1
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


__ICE_API_2[6]__

fotoUrl formato no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C23]"> CE_API_2[C23]</a></td>
    <td>https://</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://",
  "puestosId": 1
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


__ICE_API_2[7]__

fecha no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C32]"> CE_API_2[C32]</a></td>
    <td>2014-05-21T25:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2014-05-21T25:27:28.576Z",
  "fotoUrl": "https://imagen.png",
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


__ICE_API_2[8]__

puestosId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C42]"> CE_API_2[C42]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
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


__ICE_API_2[9]__

puestosId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C43]"> CE_API_2[C43]</a></td>
    <td>0</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
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


__ICE_API_2[10]__

puestosId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>50</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/1

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
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


__ICE_API_2[11]__

novedadesId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C52]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/a

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "novedadesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[12]__

novedadesId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C53]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/0

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "novedadesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[13]__

novedadesId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA</td>
  </tr>
  <tr>
    <td>prioridad</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>media</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://imagen.png</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>2018-04-25T04:27:34Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>novedadesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C51]</a></td>
    <td>50</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

PUT /api/web/novedades/50

_request o body_
```js
{
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fecha": "2018-04-25T04:27:34Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "Error en actualizar la novedad",
  "codigoEstado": 200
}
```


___


## Eliminar una novedad

> Código: API_3

> Descripción: Eliminar una novedad

> Url : /api/web/novedades/:novedadesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_3[C03]'>CE_API_3[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Eliminar una novedad de forma correcta

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

DELETE /api/web/novedades/1

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

novedadesId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

DELETE /api/web/novedades/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "novedadesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

novedadesId  no valido numero

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

DELETE /api/web/novedades/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "novedadesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

novedadesId no exite

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

DELETE /api/web/novedades/50

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


## Obtener una novedad

> Código: API_4

> Descripción: Obtener una novedad

> Url : /api/web/novedades/:novedadesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_4[C01]'>CE_API_4[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_4[C02]'>CE_API_4[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  novedadesId </td>
				<td> <a id='CE_API_4[C03]'>CE_API_4[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Obtener una novedad de forma correcta

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

GET /api/web/novedades/1

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
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "descripcionAtendida": null,
    "prioridad": "media",
    "fecha": "2011-10-01 05:00:00.000 +00:00",
    "fotoUrl": "https://imagen.png",
    "fueAtendida": "0",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "puestosId": 1,
    "inspeccionesId": null
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

novedadesId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

GET /api/web/novedades/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "novedadesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

novedadesId  no valido numero

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

GET /api/web/novedades/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "novedadesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[4]__

novedadesId no exite

__Datos prueba__

_url_ 

> /api/web/novedades/:novedadesId

GET /api/web/novedades/50

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


## Obtener novedades por establecimiento

> Código: API_5

> Descripción: 

> Url : /api/web/novedades/establecimientos/:establecimientosId

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

Obtener novedades de forma correcta

__Datos prueba__

_url_ 

> /api/web/novedades/establecimientos/:establecimientosId

GET /api/web/novedades/establecimientos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1,
        "areasId": 1,
        "areasActividad": "gerencia",
        "areasNombre": "Gerente General",
        "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
        "puestosNombre": "Oficina de gerente general"
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1,
        "areasId": 1,
        "areasActividad": "gerencia",
        "areasNombre": "Gerente General",
        "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
        "puestosNombre": "Oficina de gerente general"
      }
    ]
  },
  "codigoEstado": 200
}
```


__ICE_API_5[2]__

establecimientosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/novedades/establecimientos/:establecimientosId

GET /api/web/novedades/establecimientos/a

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

> /api/web/novedades/establecimientos/:establecimientosId

GET /api/web/novedades/establecimientos/0

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

> /api/web/novedades/establecimientos/:establecimientosId

GET /api/web/novedades/establecimientos/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [],
    "novedadesNoAtendidas": []
  },
  "codigoEstado": 200
}
```


___


## Obtener novedades por area

> Código: API_6

> Descripción: 

> Url : /api/web/novedades/areas/:areasId

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

Obtener novedades de forma correcta

__Datos prueba__

_url_ 

> /api/web/novedades/areas/:areasId

GET /api/web/novedades/areas/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1,
        "puestosNombre": "Oficina de gerente general"
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1,
        "puestosNombre": "Oficina de gerente general"
      }
    ]
  },
  "codigoEstado": 200
}
```


__ICE_API_6[2]__

areasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/novedades/areas/:areasId

GET /api/web/novedades/areas/a

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

> /api/web/novedades/areas/:areasId

GET /api/web/novedades/areas/0

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


__ICE_API_6[4]__

areasId no exite

__Datos prueba__

_url_ 

> /api/web/novedades/areas/:areasId

GET /api/web/novedades/areas/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [],
    "novedadesNoAtendidas": []
  },
  "codigoEstado": 200
}
```


___


## Obtener novedades por puesto

> Código: API_7

> Descripción: 

> Url : /api/web/novedades/puestos/:puestosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  puestosId </td>
				<td> <a id='CE_API_7[C01]'>CE_API_7[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_7[C02]'>CE_API_7[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_7[C03]'>CE_API_7[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_7[1]__

Obtener novedades de forma correcta

__Datos prueba__

_url_ 

> /api/web/novedades/puestos/:puestosId

GET /api/web/novedades/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


__ICE_API_7[2]__

puestosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/novedades/puestos/:puestosId

GET /api/web/novedades/puestos/a

_request o body_
```js

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


__ICE_API_7[3]__

puestosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/novedades/puestos/:puestosId

GET /api/web/novedades/puestos/0

_request o body_
```js

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


__ICE_API_7[4]__

puestosId no exite

__Datos prueba__

_url_ 

> /api/web/novedades/puestos/:puestosId

GET /api/web/novedades/puestos/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [],
    "novedadesNoAtendidas": []
  },
  "codigoEstado": 200
}
```


___


