# Api Puestos
## Obtener todas las puestos de un area

> Código: API_1

> Descripción: obtiene todas las puestos de un area

> Url : /api/web/puestos/areas/:areasId

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
				<td> <a id='CE_API_1[C1]'>CE_API_1[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_1[C2]'>CE_API_1[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_1[C3]'>CE_API_1[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Con  existentes

__Datos prueba__

_url_ 

> /api/web/puestos/areas/:areasId

GET /api/web/puestos/areas/1

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
      "descripcion": "AA",
      "nombre": "Oficina de gerente general",
      "cantidadPersonas": 0,
      "cantidadAccidentes": 0,
      "cantidadNovedadesSinAtender": 0,
      "cantidadEquipos": 0,
      "cantidadRiesgos": 0
    },
    {
      "id": 2,
      "descripcion": "AA",
      "nombre": "Oficina de jefe de TTHH",
      "cantidadPersonas": 0,
      "cantidadAccidentes": 0,
      "cantidadNovedadesSinAtender": 0,
      "cantidadEquipos": 0,
      "cantidadRiesgos": 0
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

areasId no es un numero

__Datos prueba__

_url_ 

> /api/web/puestos/areas/:areasId

GET /api/web/puestos/areas/a

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


__ICE_API_1[3]__

areasId debe ser minimo 1

__Datos prueba__

_url_ 

> /api/web/puestos/areas/:areasId

GET /api/web/puestos/areas/0

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


___


