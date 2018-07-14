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
      "nombre": "Oficina de gerente general",
      "descripcion": "AA"
    },
    {
      "id": 2,
      "nombre": "Oficina de jefe de TTHH",
      "descripcion": "AA"
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


## Crear un puesto

> Código: API_2

> Descripción: Crear un puesto

> Url : /api/web/puestos

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
				<td> <a id='CE_API_2[C1]'>CE_API_2[C1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C2]'>CE_API_2[C2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[C3]'>CE_API_2[C3]</a> </td>
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
				<td> areasId</td>
				<td> <a id='CE_API_2[C21]'>CE_API_2[C21]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> areasId</td>
				<td> <a id='CE_API_2[C22]'>CE_API_2[C22]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> areasId</td>
				<td> <a id='CE_API_2[C23]'>CE_API_2[C23]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Crear un puesto de forma correcta

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": "AA",
  "areasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 4,
    "nombre": "Oficina de gerente general",
    "descripcion": "AA",
    "fechaActualizacion": "2018-07-14T17:59:47.227Z",
    "fechaCreacion": "2018-07-14T17:59:47.227Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[2]__

nombre tipo no valido

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": 1,
  "descripcion": "AA",
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


__ICE_API_2[3]__

nombre tamano no valido

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": "",
  "descripcion": "AA",
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


__ICE_API_2[4]__

descripcion tipo no valido

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": 2,
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


__ICE_API_2[5]__

descripcion tamano no valido

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": "",
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


__ICE_API_2[6]__

areasId tipo no valido

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": "AA",
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


__ICE_API_2[7]__

areasId tamano no valido

__Datos prueba__

_url_ 

> /api/web/puestos

POST /api/web/puestos

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": "AA",
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


## Actualizar un puesto

> Código: API_3

> Descripción: Actualizar un puesto

> Url : /api/web/puestos/:puestosId

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
				<td> <a id='CE_API_3[C1]'>CE_API_3[C1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_3[C2]'>CE_API_3[C2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_3[C3]'>CE_API_3[C3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> descripcion</td>
				<td> <a id='CE_API_3[C11]'>CE_API_3[C11]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_3[C12]'>CE_API_3[C12]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> descripcion</td>
				<td> <a id='CE_API_3[C13]'>CE_API_3[C13]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  puestosId </td>
				<td> <a id='CE_API_3[C21]'>CE_API_3[C21]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_3[C22]'>CE_API_3[C22]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_3[C23]'>CE_API_3[C23]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Crear un puesto de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C1]"> CE_API_3[C1]</a></td>
    <td>AAA</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C11]"> CE_API_3[C11]</a></td>
    <td>AAA</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C21]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": "AAA",
  "descripcion": "AAA"
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


__ICE_API_3[2]__

nombre tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C2]"> CE_API_3[C2]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C11]"> CE_API_3[C11]</a></td>
    <td>AA</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C21]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": 1,
  "descripcion": "AA"
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


__ICE_API_3[3]__

nombre tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C3]"> CE_API_3[C3]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C11]"> CE_API_3[C11]</a></td>
    <td>AA</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C21]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": "",
  "descripcion": "AA"
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


__ICE_API_3[4]__

descripcion tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C1]"> CE_API_3[C1]</a></td>
    <td>Oficina de gerente general</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C12]"> CE_API_3[C12]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C21]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": 1
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


__ICE_API_3[5]__

descripcion tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C1]"> CE_API_3[C1]</a></td>
    <td>Oficina de gerente general</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C13]"> CE_API_3[C13]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C21]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": ""
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


__ICE_API_3[6]__

puestosId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C1]"> CE_API_3[C1]</a></td>
    <td>Oficina de gerente general</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C11]"> CE_API_3[C11]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C22]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": "a"
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


__ICE_API_3[7]__

puestosId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C1]"> CE_API_3[C1]</a></td>
    <td>Oficina de gerente general</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C11]"> CE_API_3[C11]</a></td>
    <td>0</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C23]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/1

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": 0
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


__ICE_API_3[8]__

puesto id no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[C1]"> CE_API_3[C1]</a></td>
    <td>Oficina de gerente general</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_3[C11]"> CE_API_3[C11]</a></td>
    <td>AA</td>
  </tr>
  <tr>
    <td>puestosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[C21]</a></td>
    <td>50</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

PUT /api/web/puestos/50

_request o body_
```js
{
  "nombre": "Oficina de gerente general",
  "descripcion": "AA"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El id del puesto no existe",
  "codigoEstado": 200
}
```


___


## Eliminar un puesto

> Código: API_4

> Descripción: Borrar un puesto

> Url : /api/web/puestos/:puestosId

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
				<td> <a id='CE_API_4[C1]'>CE_API_4[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C2]'>CE_API_4[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C3]'>CE_API_4[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Eliminada una puesto de forma correcta

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

DELETE /api/web/puestos/1

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

puestosId no valido numero

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

DELETE /api/web/puestos/0

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


__ICE_API_4[3]__

puestosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

DELETE /api/web/puestos/a

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


__ICE_API_4[4]__

puestosId no exite

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

DELETE /api/web/puestos/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "puesto con es id no existe",
  "codigoEstado": 200
}
```


___


## Obtener un puesto

> Código: API_4

> Descripción: Obtener un puesto

> Url : /api/web/puestos/:puestosId

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
				<td> <a id='CE_API_4[C1]'>CE_API_4[C1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C2]'>CE_API_4[C2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C3]'>CE_API_4[C3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Obtener una puesto de forma correcta

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

GET /api/web/puestos/1

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
    "nombre": "Oficina de gerente general",
    "descripcion": "AA",
    "fechaCreacion": "2018-07-14 17:59:48.049 +00:00",
    "fechaActualizacion": "2018-07-14 17:59:48.049 +00:00"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

puestosId no valido numero

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

GET /api/web/puestos/a

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


__ICE_API_4[3]__

puestosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/puestos/:puestosId

GET /api/web/puestos/a

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


___


