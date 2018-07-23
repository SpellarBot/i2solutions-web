# Api Areas
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
          "cantidadRiesgos": 0,
          "id": 1,
          "nombre": "Oficina de gerente general",
          "descripcion": "AA"
        },
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 0,
          "cantidadEquipos": 0,
          "cantidadRiesgos": 0,
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
          "cantidadRiesgos": 0,
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

GET 

_request o body_
```js

```

__Resultados__

_response_

```js

```


__ICE_API_6[3]__

establecimientosId debe ser minimo 1

__Datos prueba__

_url_ 

> /api/areas/puestos/establecimientos/:establecimientosId

GET 

_request o body_
```js

```

__Resultados__

_response_

```js

```


___


