# Api Establecimientos
## Obtener todas los establecimientos de una empresa

> Código: API_1

> Descripción: obtiene todas los establecimientos de una empresa

> Url : /api/web/establecimientos/:empresasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  empresasId </td>
				<td> <a id='CE_API_1[1]'>CE_API_1[1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_1[2]'>CE_API_1[2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_1[3]'>CE_API_1[3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Con establecimientos existentes

__Datos prueba__

_url_ 

> /api/web/establecimientos/:empresasId

GET /api/web/establecimientos/1

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
      "nombres": "matriz",
      "direccion": "22050 Felipe Rampa",
      "ruc": "0923651688001",
      "fechaCreacion": "2018-07-13 14:02:11.928 +00:00",
      "fechaActualizacion": "2018-07-13 14:02:11.928 +00:00",
      "empresasId": 1
    },
    {
      "id": 2,
      "nombres": "Lira - Barajas",
      "direccion": "0119 Laboy Mercado",
      "ruc": "2023651688001",
      "fechaCreacion": "2018-07-13 14:02:11.929 +00:00",
      "fechaActualizacion": "2018-07-13 14:02:11.929 +00:00",
      "empresasId": 1
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

empresasId no es un numero

__Datos prueba__

_url_ 

> /api/web/establecimientos/:empresasId

GET /api/web/establecimientos/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "empresasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[3]__

empresasId debe ser minimo 1

__Datos prueba__

_url_ 

> /api/web/establecimientos/:empresasId

GET /api/web/establecimientos/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "empresasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Crear un establecimiento

> Código: API_2

> Descripción: Crear un establecimiento

> Url : /api/web/establecimientos

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> nombres</td>
				<td> <a id='CE_API_2[1]'>CE_API_2[1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_2[2]'>CE_API_2[2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_2[3]'>CE_API_2[3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> direccion</td>
				<td> <a id='CE_API_2[4]'>CE_API_2[4]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> direccion</td>
				<td> <a id='CE_API_2[5]'>CE_API_2[5]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> direccion</td>
				<td> <a id='CE_API_2[6]'>CE_API_2[6]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> empresasId</td>
				<td> <a id='CE_API_2[7]'>CE_API_2[7]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> empresasId</td>
				<td> <a id='CE_API_2[8]'>CE_API_2[8]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> empresasId</td>
				<td> <a id='CE_API_2[9]'>CE_API_2[9]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> ruc</td>
				<td> <a id='CE_API_2[10]'>CE_API_2[10]</a> </td>
				<td> ruc valido</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[11]'>CE_API_2[11]</a> </td>
				<td> 1-2 digitos valor>24</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[12]'>CE_API_2[12]</a> </td>
				<td> 1-2 digitos valor=00</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[13]'>CE_API_2[13]</a> </td>
				<td> 3er digito valor={7,8}</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[14]'>CE_API_2[14]</a> </td>
				<td> 11-13 digitos valor<001</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[15]'>CE_API_2[15]</a> </td>
				<td> minLength: !13, maxLength: !13</td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Crear un establecimiento de forma correcta

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombres": "matriz",
    "direccion": "22050 Felipe Rampa",
    "ruc": "0923651688001",
    "empresasId": 1,
    "fechaActualizacion": "2018-07-13T14:02:12.046Z",
    "fechaCreacion": "2018-07-13T14:02:12.046Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[2]__

nombres tipo no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": 1,
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[3]__

nombres tamano no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[4]__

direccion tipo no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": 1,
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "direccion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

direccion tamano no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "direccion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[6]__

empresasId tipo no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "empresasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[7]__

empresasId tamano no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 0
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "empresasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

ruc 1-2 digitos valor>24

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "2502365486001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

ruc 1-2 digitos valor=00

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0002365486001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

ruc 3er digito valor={7,8}

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "1772365486001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El tercer dígito ingresado es inválido: debe ser 9 para sociedades privadas y extranjeros, 6 para sociedades publicas, menor que 6 (0,1,2,3,4,5) para personas naturales"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[11]__

ruc 11-13 digitos valor<001

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "1762365486000",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El ruc de la empresa del sector público es incorrecto"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[12]__

ruc tamano no valido

__Datos prueba__

_url_ 

> /api/web/establecimientos

POST /api/web/establecimientos

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "17236548600",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "ruc debe ser de tamano debe ser 13"
  },
  "codigoEstado": 200
}
```


___


## Actualizar un establecimiento

> Código: API_3

> Descripción: Actualizar un establecimiento

> Url : /api/web/establecimientos/:establecimientosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td> nombres</td>
				<td> <a id='CE_API_3[1]'>CE_API_3[1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_3[2]'>CE_API_3[2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_3[3]'>CE_API_3[3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> direccion</td>
				<td> <a id='CE_API_3[4]'>CE_API_3[4]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> direccion</td>
				<td> <a id='CE_API_3[5]'>CE_API_3[5]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> direccion</td>
				<td> <a id='CE_API_3[6]'>CE_API_3[6]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> empresasId</td>
				<td> <a id='CE_API_3[7]'>CE_API_3[7]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> empresasId</td>
				<td> <a id='CE_API_3[8]'>CE_API_3[8]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> empresasId</td>
				<td> <a id='CE_API_3[9]'>CE_API_3[9]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> ruc</td>
				<td> <a id='CE_API_3[10]'>CE_API_3[10]</a> </td>
				<td> ruc valido</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_3[11]'>CE_API_3[11]</a> </td>
				<td> 1-2 digitos valor>24</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_3[12]'>CE_API_3[12]</a> </td>
				<td> 1-2 digitos valor=00</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_3[13]'>CE_API_3[13]</a> </td>
				<td> 3er digito valor={7,8}</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_3[14]'>CE_API_3[14]</a> </td>
				<td> 11-13 digitos valor<001</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_3[15]'>CE_API_3[15]</a> </td>
				<td> minLength: !13, maxLength: !13</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_3[16]'>CE_API_3[16]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_3[17]'>CE_API_3[17]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_3[18]'>CE_API_3[18]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Actualizar un establecimiento de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Empresa editada</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "Empresa editada",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
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

nombres tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[2]"> CE_API_3[2]</a></td>
    <td>2</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": 2,
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

nombres tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[3]"> CE_API_3[3]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

direccion tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[5]"> CE_API_3[5]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": 1,
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "direccion": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[5]__

direccion tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[6]"> CE_API_3[6]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "direccion": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[6]__

empresasId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[8]"> CE_API_3[8]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "empresasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[7]__

empresasId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[9]"> CE_API_3[9]</a></td>
    <td>0</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 0
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "empresasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[8]__

ruc 1-2 digitos valor>24

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[11]"> CE_API_3[11]</a></td>
    <td>2502365486001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "2502365486001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[9]__

ruc 1-2 digitos valor=00

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[12]"> CE_API_3[12]</a></td>
    <td>0002365486001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0002365486001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[10]__

ruc 3er digito valor={7,8}

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[13]"> CE_API_3[13]</a></td>
    <td>1772365486001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "1772365486001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El tercer dígito ingresado es inválido: debe ser 9 para sociedades privadas y extranjeros, 6 para sociedades publicas, menor que 6 (0,1,2,3,4,5) para personas naturales"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[11]__

ruc 11-13 digitos valor<001

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[14]"> CE_API_3[14]</a></td>
    <td>1762365486000</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "1762365486000",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "El ruc de la empresa del sector público es incorrecto"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[12]__

ruc tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[15]"> CE_API_3[15]</a></td>
    <td>17236548600</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/1

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "17236548600",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "ruc": "ruc debe ser de tamano debe ser 13"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[13]__

establecimientosId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[15]"> CE_API_3[15]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[17]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/a

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
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


__ICE_API_3[14]__

establecimientosId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[15]"> CE_API_3[15]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[18]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/0

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
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


__ICE_API_3[15]__

El establecimiento con ese id no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>matriz</td>
  </tr>
  <tr>
    <td>direccion</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>22050 Felipe Rampa</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>ruc</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>0923651688001</td>
  </tr>
  <tr>
    <td>establecimientosId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[16]</a></td>
    <td>500</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

PUT /api/web/establecimientos/500

_request o body_
```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El id del establecimento no existe",
  "codigoEstado": 200
}
```


___


## Eliminar un establecimiento

> Código: API_4

> Descripción: Borrar una establecimiento

> Url : /api/web/establecimientos/:establecimientosId

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
				<td> <a id='CE_API_4[1]'>CE_API_4[1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_4[2]'>CE_API_4[2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  establecimientosId </td>
				<td> <a id='CE_API_4[3]'>CE_API_4[3]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Eliminada un establecimiento de forma correcta

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

DELETE /api/web/establecimientos/1

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

establecimientosId no valido numero

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

DELETE /api/web/establecimientos/0

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


__ICE_API_4[3]__

establecimientosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

DELETE /api/web/establecimientos/a

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


__ICE_API_4[4]__

establecimientosId no exite

__Datos prueba__

_url_ 

> /api/web/establecimientos/:establecimientosId

DELETE /api/web/establecimientos/500

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "establecimientos con es id no existe",
  "codigoEstado": 200
}
```


___


