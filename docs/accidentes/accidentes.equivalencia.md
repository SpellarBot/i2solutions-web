# Api Accidentes
## Crear un accidente

> Código: API_1

> Descripción: Crear un accidente

> Url : /api/web/accidentes

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
				<td> heridos</td>
				<td> <a id='CE_API_1[C21]'>CE_API_1[C21]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> heridos</td>
				<td> <a id='CE_API_1[C22]'>CE_API_1[C22]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> heridos</td>
				<td> <a id='CE_API_1[C23]'>CE_API_1[C23]</a> </td>
				<td> minimum: !0 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> atendidoEnEmpresa</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'boolean' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> atendidoEnEmpresa</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> 'type': !'boolean'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> muertos</td>
				<td> <a id='CE_API_1[C41]'>CE_API_1[C41]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> muertos</td>
				<td> <a id='CE_API_1[C42]'>CE_API_1[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> muertos</td>
				<td> <a id='CE_API_1[C43]'>CE_API_1[C43]</a> </td>
				<td> minimum: !0 </td>
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

Crear un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "descripcion": "Se cayó la solución",
    "nombre": "Caída de instrumentos",
    "heridos": 1,
    "atendidoEnEmpresa": true,
    "muertos": 0,
    "fecha": "2014-05-21T19:27:28.576Z",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-13T14:22:00.613Z",
    "fechaCreacion": "2018-07-13T14:22:00.613Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

nombre tipo no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": 1,
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "nombre": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[3]__

nombre tamano no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "nombre": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[4]__

descripcion tipo no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": 1,
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "descripcion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[5]__

descripcion tamano no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "descripcion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[6]__

heridos tipo no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": "a",
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "heridos": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[7]__

heridos tamano no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": -1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "heridos": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[8]__

atendidoEnEmpresa tipo no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": "a",
  "muertos": 0,
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
    "atendidoEnEmpresa": "debe ser boolean"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[9]__

muertos tipo no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": "a",
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
    "muertos": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[10]__

muertos tamano no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": -1,
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
    "muertos": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[11]__

fecha no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST /api/web/accidentes

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
  "fecha": "2014-13-21T19:27:28.576Z",
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


__ICE_API_1[12]__

puestosId tipo no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST 

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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


__ICE_API_1[13]__

puestosId tamano no valido

__Datos prueba__

_url_ 

> /api/web/accidentes

POST 

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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


__ICE_API_1[14]__

puestosId no existe

__Datos prueba__

_url_ 

> /api/web/accidentes

POST 

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 50
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "el puesto no existe",
  "codigoEstado": 200
}
```


___


## Actualizar una accidente

> Código: API_2

> Descripción: Actualizar un accidente

> Url : /api/web/accidentes/:accidentesId

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
				<td> heridos</td>
				<td> <a id='CE_API_2[C21]'>CE_API_2[C21]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> heridos</td>
				<td> <a id='CE_API_2[C22]'>CE_API_2[C22]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> heridos</td>
				<td> <a id='CE_API_2[C23]'>CE_API_2[C23]</a> </td>
				<td> minimum: !0 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> atendidoEnEmpresa</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'boolean' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> atendidoEnEmpresa</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> 'type': !'boolean'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> muertos</td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td> { 'type': 'number', minimum: 0 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> muertos</td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> muertos</td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td> minimum: !0 </td>
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
				<td>  accidentesId </td>
				<td> <a id='CE_API_2[C71]'>CE_API_2[C71]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_2[C72]'>CE_API_2[C72]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_2[C73]'>CE_API_2[C73]</a> </td>
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
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>aa</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>AA</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>false</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "AA",
  "nombre": "aa",
  "heridos": 1,
  "atendidoEnEmpresa": false,
  "muertos": 0,
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
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": 1,
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C12]"> CE_API_2[C12]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": 1,
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C13]"> CE_API_2[C13]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "descripcion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[6]__

heridos tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C22]"> CE_API_2[C22]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": "a",
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "heridos": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[7]__

heridos tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C23]"> CE_API_2[C23]</a></td>
    <td>-1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": -1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "heridos": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

atendidoEnEmpresa tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C32]"> CE_API_2[C32]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": "a",
  "muertos": 0,
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
    "atendidoEnEmpresa": "debe ser boolean"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

muertos tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C42]"> CE_API_2[C42]</a></td>
    <td>a</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": "a",
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
    "muertos": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

muertos tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C43]"> CE_API_2[C43]</a></td>
    <td>-1</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": -1,
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
    "muertos": "debe ser >= 0"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[11]__

fecha no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
  </tr>
  <tr>
    <td>fecha</td>
    <td><a href="#CE_API_2[C52]"> CE_API_2[C52]</a></td>
    <td>2014-13-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_2[C61]"> CE_API_2[C61]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
  "fecha": "2014-13-21T19:27:28.576Z",
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

puestosId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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


__ICE_API_2[13]__

puestosId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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


__ICE_API_2[14]__

puestosId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/1

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 50
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "el puesto no existe",
  "codigoEstado": 200
}
```


__ICE_API_2[15]__

accidentesId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C72]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/a

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "accidentesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[16]__

accidentesId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C73]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/0

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
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
    "accidentesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[17]__

accidentesId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Caída de instrumentos</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>Se cayó la solución</td>
  </tr>
  <tr>
    <td>heridos</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>atendidoEnEmpresa</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>true</td>
  </tr>
  <tr>
    <td>muertos</td>
    <td><a href="#CE_API_2[C41]"> CE_API_2[C41]</a></td>
    <td>0</td>
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
    <td>accidentesId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C71]</a></td>
    <td>50</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

PUT /api/web/accidentes/50

_request o body_
```js
{
  "descripcion": "Se cayó la solución",
  "nombre": "Caída de instrumentos",
  "heridos": 1,
  "atendidoEnEmpresa": true,
  "muertos": 0,
  "fecha": "2014-05-21T19:27:28.576Z",
  "puestosId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El id del area no existe",
  "codigoEstado": 200
}
```


___


## Eliminar un accidente

> Código: API_3

> Descripción: Eliminar un accidente

> Url : /api/web/accidentes/:accidentesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_3[C03]'>CE_API_3[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Eliminar un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

DELETE /api/web/accidentes/1

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

accidentesId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

DELETE /api/web/accidentes/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "accidentesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

accidentesId  no valido numero

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

DELETE /api/web/accidentes/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "accidentesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

accidentesId no exite

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

DELETE /api/web/accidentes/50

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


## Obtener un accidente

> Código: API_3

> Descripción: Obtener un accidente

> Url : /api/web/accidentes/:accidentesId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  accidentesId </td>
				<td> <a id='CE_API_3[C03]'>CE_API_3[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Obtener un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

GET /api/web/accidentes/1

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
    "fechaCreacion": "2018-07-13 14:22:02.459 +00:00",
    "fechaActualizacion": "2018-07-13 14:22:02.459 +00:00",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


__ICE_API_3[2]__

accidentesId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

GET /api/web/accidentes/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "accidentesId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

accidentesId  no valido numero

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

GET /api/web/accidentes/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "accidentesId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

accidentesId no exite

__Datos prueba__

_url_ 

> /api/web/accidentes/:accidentesId

GET /api/web/accidentes/50

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


