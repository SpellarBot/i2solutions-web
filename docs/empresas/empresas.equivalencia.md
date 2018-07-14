# Api Empresas
## Obtener todas las Empresas

> Código: API_1

> Descripción: obtiene todas las empresas

> Url : /api/web/empresas


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Con empresas existentes

__Datos prueba__

_url_ 

> /api/web/empresas

GET /api/web/empresas

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
      "nombre": "Zapata S.A.",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "razonSocial": "La casa",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "fechaCreacion": "2018-07-14 17:59:40.730 +00:00",
      "fechaActualizacion": "2018-07-14 17:59:40.730 +00:00"
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

Sin empresas existentes

__Datos prueba__

_url_ 

> /api/web/empresas

GET /api/web/empresas

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


## Crear Empresa

> Código: API_2

> Descripción: Crear una empresa

> Url : /api/web/empresas

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
				<td> <a id='CE_API_2[1]'>CE_API_2[1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[2]'>CE_API_2[2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_2[3]'>CE_API_2[3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> actividadComercial</td>
				<td> <a id='CE_API_2[4]'>CE_API_2[4]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividadComercial</td>
				<td> <a id='CE_API_2[5]'>CE_API_2[5]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividadComercial</td>
				<td> <a id='CE_API_2[6]'>CE_API_2[6]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> razonSocial</td>
				<td> <a id='CE_API_2[7]'>CE_API_2[7]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> razonSocial</td>
				<td> <a id='CE_API_2[8]'>CE_API_2[8]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> razonSocial</td>
				<td> <a id='CE_API_2[9]'>CE_API_2[9]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> direccion</td>
				<td> <a id='CE_API_2[10]'>CE_API_2[10]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> direccion</td>
				<td> <a id='CE_API_2[11]'>CE_API_2[11]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> direccion</td>
				<td> <a id='CE_API_2[12]'>CE_API_2[12]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> ruc</td>
				<td> <a id='CE_API_2[13]'>CE_API_2[13]</a> </td>
				<td> ruc valido</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[14]'>CE_API_2[14]</a> </td>
				<td> digitos 1-2  valor>24</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[15]'>CE_API_2[15]</a> </td>
				<td> digitos 1-2  valor=00</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[16]'>CE_API_2[16]</a> </td>
				<td> 3er digito valor={7,8}</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[17]'>CE_API_2[17]</a> </td>
				<td> digitos 11-13 valor<001</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> ruc</td>
				<td> <a id='CE_API_2[18]'>CE_API_2[18]</a> </td>
				<td> minLength: !13, maxLength: !13</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> urlFoto</td>
				<td> <a id='CE_API_2[19]'>CE_API_2[19]</a> </td>
				<td> 'type': 'string', 'format': 'url'</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> urlFoto</td>
				<td> <a id='CE_API_2[20]'>CE_API_2[20]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> urlFoto</td>
				<td> <a id='CE_API_2[21]'>CE_API_2[21]</a> </td>
				<td> format: !url </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Crear una empresa de forma correcta

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001"
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Zapata S.A.",
    "actividadComercial": "Integrado sensible al contexto sistema abierto",
    "razonSocial": "La casa",
    "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
    "fechaActualizacion": "2018-07-14T17:59:40.807Z",
    "fechaCreacion": "2018-07-14T17:59:40.807Z",
    "establecimiento": {
      "id": 1,
      "nombres": "matriz",
      "direccion": "Plaza Mayor",
      "ruc": "1702365486001",
      "empresasId": 1,
      "fechaActualizacion": "2018-07-14T17:59:40.809Z",
      "fechaCreacion": "2018-07-14T17:59:40.809Z"
    }
  },
  "codigoEstado": 200
}
```


__ICE_API_2[2]__

nombre tamaño no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[3]__

actividadComercial tamaño no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "",
  "razonSocial": "La casa",
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividadComercial": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[4]__

razonSocial tamaño no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "",
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "razonSocial": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[5]__

direccion tamaño no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "",
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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

ruc tamaño no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "Plaza Mayor",
  "ruc": "17236548600",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[7]__

nombre tipo no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": 1,
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "",
  "ruc": "172365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombre": "debe ser string",
    "direccion": "no debe contener menos de 2 caracteres",
    "ruc": "ruc debe ser de tamano debe ser 13"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[8]__

actividadComercial tipo no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": 1,
  "razonSocial": "La casa",
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividadComercial": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

razonSocial tipo no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": 1,
  "direccion": "Plaza Mayor",
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "razonSocial": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

direccion tipo no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": 1,
  "ruc": "1702365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[11]__

ruc 1-2 digitos valor>24

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "ab",
  "ruc": "2502365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[12]__

ruc 1-2 digitos valor=00

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "ab",
  "ruc": "0002365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[13]__

ruc 3er digito valor={7,8}

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "ab",
  "ruc": "1772365486001",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[14]__

ruc 11-13 digitos valor<001

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "ab",
  "ruc": "1762365486000",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_2[15]__

urlFoto tipo no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "ab",
  "ruc": "1702365486001",
  "urlFoto": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "urlFoto": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[16]__

urlFoto formato no válido

__Datos prueba__

_url_ 

> /api/web/empresas

POST /api/web/empresas

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "direccion": "ab",
  "ruc": "1702365486001",
  "urlFoto": "http://"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "urlFoto": "debe coincidir con el formato \"url\""
  },
  "codigoEstado": 200
}
```


___


## Actualizar una empresa

> Código: API_3

> Descripción: actualizar

> Url : /api/web/empresas/:empresasId

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
				<td> <a id='CE_API_3[1]'>CE_API_3[1]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_3[2]'>CE_API_3[2]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombre</td>
				<td> <a id='CE_API_3[3]'>CE_API_3[3]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> actividadComercial</td>
				<td> <a id='CE_API_3[4]'>CE_API_3[4]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividadComercial</td>
				<td> <a id='CE_API_3[5]'>CE_API_3[5]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> actividadComercial</td>
				<td> <a id='CE_API_3[6]'>CE_API_3[6]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> razonSocial</td>
				<td> <a id='CE_API_3[7]'>CE_API_3[7]</a> </td>
				<td> { 'type': 'string', minLength: 2 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> razonSocial</td>
				<td> <a id='CE_API_3[8]'>CE_API_3[8]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> razonSocial</td>
				<td> <a id='CE_API_3[9]'>CE_API_3[9]</a> </td>
				<td> minLength: !2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> urlFoto</td>
				<td> <a id='CE_API_3[10]'>CE_API_3[10]</a> </td>
				<td> 'type': 'string', 'format': 'url'</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> urlFoto</td>
				<td> <a id='CE_API_3[11]'>CE_API_3[11]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> urlFoto</td>
				<td> <a id='CE_API_3[12]'>CE_API_3[12]</a> </td>
				<td> format: !url </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  empresasId </td>
				<td> <a id='CE_API_3[13]'>CE_API_3[13]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_3[14]'>CE_API_3[14]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_3[15]'>CE_API_3[15]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Actualizar una empresa de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Nombre cambiado</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Nombre cambiado",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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

nombre no valido tipo de dato

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[2]"> CE_API_3[2]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": 1,
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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

nombre no valido tamaño

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[3]"> CE_API_3[3]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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

actividadComercial no valido tipo de dato

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[5]"> CE_API_3[5]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": 1,
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividadComercial": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[5]__

actividadComercial no valido tamaño

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[6]"> CE_API_3[6]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "actividadComercial": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[6]__

razonSocial no valido tipo de dato

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[3]"> CE_API_3[3]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[8]"> CE_API_3[8]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": 1,
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "razonSocial": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[7]__

razonSocial no valido tamaño

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[3]"> CE_API_3[3]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[9]"> CE_API_3[9]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "razonSocial": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[8]__

empresasId no valido tipo de dato

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[14]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/a

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_3[9]__

empresasId no valido numero

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[15]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/0

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
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


__ICE_API_3[10]__

empresasId no exite

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[10]"> CE_API_3[10]</a></td>
    <td>https://www.seoclerk.com/pics/558390-11FO8A1505384509.png</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>500</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/500

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "La empresa con ese id no existe",
  "codigoEstado": 200
}
```


__ICE_API_3[11]__

urlFoto tipo no válido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[11]"> CE_API_3[11]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "urlFoto": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[12]__

urlFoto formato no válido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_3[1]"> CE_API_3[1]</a></td>
    <td>Zapata S.A.</td>
  </tr>
  <tr>
    <td>actividadComercial</td>
    <td><a href="#CE_API_3[4]"> CE_API_3[4]</a></td>
    <td>Integrado sensible al contexto sistema abierto</td>
  </tr>
  <tr>
    <td>razonSocial</td>
    <td><a href="#CE_API_3[7]"> CE_API_3[7]</a></td>
    <td>La casa</td>
  </tr>
  <tr>
    <td>urlFoto</td>
    <td><a href="#CE_API_3[12]"> CE_API_3[12]</a></td>
    <td>http://</td>
  </tr>
  <tr>
    <td>empresasId</td>
    <td><a href="#CE_API_3[]"> CE_API_3[13]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

PUT /api/web/empresas/1

_request o body_
```js
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "La casa",
  "urlFoto": "http://"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "urlFoto": "debe coincidir con el formato \"url\""
  },
  "codigoEstado": 200
}
```


___


## Borrar una empresa

> Código: API_4

> Descripción: Borrar

> Url : /api/web/empresas/:empresasId

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
				<td> <a id='CE_API_4[1]'>CE_API_4[1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_4[2]'>CE_API_4[2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_4[3]'>CE_API_4[3]</a> </td>
				<td>minimum: !1 }</td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Eliminar una empresa de forma correcta

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

DELETE /api/web/empresas/1

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

empresasId no valido numero

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

DELETE /api/web/empresas/0

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


__ICE_API_4[3]__

empresasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

DELETE /api/web/empresas/a

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


__ICE_API_4[4]__

empresasId no exite

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

DELETE /api/web/empresas/500

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "empresa con es id no existe",
  "codigoEstado": 200
}
```


___


## Obtener una empresa

> Código: API_5

> Descripción: 

> Url : /api/web/empresas/:empresasId

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
				<td> <a id='CE_API_5[1]'>CE_API_5[1]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_5[2]'>CE_API_5[2]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  empresasId </td>
				<td> <a id='CE_API_5[3]'>CE_API_5[3]</a> </td>
				<td>minimum: !1 }</td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_5[1]__

Obtener una empresa de forma correcta

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

GET /api/web/empresas/1

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
    "nombre": "Zapata S.A.",
    "actividadComercial": "Integrado sensible al contexto sistema abierto",
    "razonSocial": "La casa",
    "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
    "fechaCreacion": "2018-07-14 17:59:41.889 +00:00",
    "fechaActualizacion": "2018-07-14 17:59:41.889 +00:00",
    "establecimientos": [
      {
        "id": 1,
        "nombres": "matriz",
        "direccion": "22050 Felipe Rampa",
        "ruc": "0923651688001",
        "fechaCreacion": "2018-07-14 17:59:41.890 +00:00",
        "fechaActualizacion": "2018-07-14 17:59:41.890 +00:00",
        "empresasId": 1
      },
      {
        "id": 2,
        "nombres": "Lira - Barajas",
        "direccion": "0119 Laboy Mercado",
        "ruc": "2023651688001",
        "fechaCreacion": "2018-07-14 17:59:41.891 +00:00",
        "fechaActualizacion": "2018-07-14 17:59:41.891 +00:00",
        "empresasId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


__ICE_API_5[2]__

empresasId no valido numero

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

GET /api/web/empresas/0

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


__ICE_API_5[3]__

empresasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

GET /api/web/empresas/a

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


__ICE_API_5[4]__

empresas no existe

__Datos prueba__

_url_ 

> /api/web/empresas/:empresasId

GET /api/web/empresas/500

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "La empresa no existe",
  "codigoEstado": 200
}
```


___


## OBTENER EMPRESAS PARA PAGINA PRINCIPAL FRONT

> Código: API_6

> Descripción: OBTENER EMPRESAS PARA PAGINA PRINCIPAL FRONT

> Url : /api/web/empresas

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_6[1]__

empresa con novedades

__Datos prueba__

_url_ 

> /api/web/empresas

GET /api/web/administrador/empresas

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
      "nombre": "Zapata S.A.",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "tieneNovedades": true
    },
    {
      "id": 2,
      "nombre": "Quintanilla, Roldán and Mena",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Descentralizado sensible al contexto acceso",
      "tieneNovedades": false
    },
    {
      "id": 3,
      "nombre": "Zapata S.A.",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "tieneNovedades": false
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_6[2]__

empresa sin novedades

__Datos prueba__

_url_ 

> /api/web/empresas

GET /api/web/administrador/empresas

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
      "nombre": "Zapata S.A.",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "tieneNovedades": false
    },
    {
      "id": 2,
      "nombre": "Quintanilla, Roldán and Mena",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Descentralizado sensible al contexto acceso",
      "tieneNovedades": false
    },
    {
      "id": 3,
      "nombre": "Zapata S.A.",
      "urlFoto": "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "tieneNovedades": false
    }
  ],
  "codigoEstado": 200
}
```


___


