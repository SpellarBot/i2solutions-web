# Api Accidentes
## Obtener accidentes por establecimientos

> Código: API_5

> Descripción: 

> Url : /api/web/accidentes/establecimientos/:establecimientosId

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

Obtener accidentes de forma correcta

__Datos prueba__

_url_ 

> /api/web/accidentes/establecimientos/:establecimientosId

GET /api/web/accidentes/establecimientos/1

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
      "nombre": "Caída de instrumentos",
      "descripcion": "Se cayó la solución",
      "heridos": "1",
      "atendidoEnEmpresa": 1,
      "muertos": 0,
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "puestosId": 1,
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "puestosNombre": "Oficina de gerente general"
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_5[2]__

establecimientosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/accidentes/establecimientos/:establecimientosId

GET 

_request o body_
```js

```

__Resultados__

_response_

```js

```


__ICE_API_5[3]__

establecimientosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/accidentes/establecimientos/:establecimientosId

GET 

_request o body_
```js

```

__Resultados__

_response_

```js

```


__ICE_API_5[4]__

establecimientosId no exite

__Datos prueba__

_url_ 

> /api/web/accidentes/establecimientos/:establecimientosId

GET 

_request o body_
```js

```

__Resultados__

_response_

```js

```


___


