# Api Personas
## Crear una persona

> Código: API_1

> Descripción: Crear una persona

> Url : /api/web/personas

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
				<td> <a id='CE_API_1[C01]'>CE_API_1[C01]</a> </td>
				<td> valido: Carlos Ñandí</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_1[C02]'>CE_API_1[C02]</a> </td>
				<td> contiene algun caracter no valido o numero</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_1[C03]'>CE_API_1[C03]</a> </td>
				<td> tamano mayor a 30</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_1[C04]'>CE_API_1[C04]</a> </td>
				<td> tamano menor a 2</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C11]'>CE_API_1[C11]</a> </td>
				<td> valido: Carlos Ñandí</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C12]'>CE_API_1[C12]</a> </td>
				<td> contiene algun caracter no valido o numero</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C13]'>CE_API_1[C13]</a> </td>
				<td> tamano mayor a 30</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C14]'>CE_API_1[C14]</a> </td>
				<td> tamano menor a 2</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> correo</td>
				<td> <a id='CE_API_1[C21]'>CE_API_1[C21]</a> </td>
				<td> { 'type': 'string', format: email }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> correo</td>
				<td> <a id='CE_API_1[C22]'>CE_API_1[C22]</a> </td>
				<td> 'format': !'email'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> cedula</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'cedula' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> cedula</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> 'type': !'cedula'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> telefono</td>
				<td> <a id='CE_API_1[C41]'>CE_API_1[C41]</a> </td>
				<td> { 'type': 'string', minLength: 10, maxLength: 10 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> telefono</td>
				<td> <a id='CE_API_1[C42]'>CE_API_1[C42]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> telefono</td>
				<td> <a id='CE_API_1[C43]'>CE_API_1[C43]</a> </td>
				<td> tamano != 10 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fechaNacimiento</td>
				<td> <a id='CE_API_1[C51]'>CE_API_1[C51]</a> </td>
				<td> { 'type': 'fecha' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fechaNacimiento</td>
				<td> <a id='CE_API_1[C52]'>CE_API_1[C52]</a> </td>
				<td> 'type': !'fecha'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C61]'>CE_API_1[C61]</a> </td>
				<td> { 'type': 'string', minLength: 2, maxLength: 50 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C62]'>CE_API_1[C62]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C63]'>CE_API_1[C63]</a> </td>
				<td> tamano < 2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C64]'>CE_API_1[C64]</a> </td>
				<td> tamano > 50 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C71]'>CE_API_1[C71]</a> </td>
				<td> { 'type': 'string', minLength: 2, maxLength: 25 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C72]'>CE_API_1[C72]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C73]'>CE_API_1[C73]</a> </td>
				<td> tamano < 2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C74]'>CE_API_1[C74]</a> </td>
				<td> tamano > 25 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> rol</td>
				<td> <a id='CE_API_1[C81]'>CE_API_1[C81]</a> </td>
				<td> { 'type': 'string', 'enum': ['admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'] }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> rol</td>
				<td> <a id='CE_API_1[C82]'>CE_API_1[C82]</a> </td>
				<td> 'enum': !['alta', 'media', 'baja']</td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Crear una persona de forma correcta

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "claveCreada": false,
    "creadaDump": false,
    "id": 1,
    "nombres": "Carlos",
    "apellidos": "Andres",
    "correo": "joelerll@gmail.com",
    "cedula": "0100967652",
    "telefono": "0986901270",
    "fechaNacimiento": "1995-05-21T19:27:28.576Z",
    "perfilOcupacional": "Inspector",
    "usuario": "carlos",
    "rol": "inspector-seguridad",
    "resetClaveToken": "084439e9919c299d713cbfd89765ea5143b2a533",
    "fechaActualizacion": "2018-08-01T05:00:00.000Z",
    "fechaCreacion": "2018-08-01T05:00:00.000Z",
    "puestosId": 1
  },
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

nombres tipo no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "tiene caracteres no validos"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[3]__

nombres tamano no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "tamaño muy pequeño"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[4]__

apellidos tipo no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "apellidos": "tiene caracteres no validos"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[5]__

apellidos tamano no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "apellidos": "tamaño muy pequeño"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[6]__

cedula no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "cedula": "cedula debe ser de tamano debe ser 10"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[7]__

correo no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "correo": "debe coincidir con el formato \"email\""
  },
  "codigoEstado": 200
}
```


__ICE_API_1[8]__

telefono no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "telefono": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[9]__

fechaNacimiento no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fechaNacimiento": "La fecha tiene formato no valido"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[10]__

perfilOcupacional tipo no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "perfilOcupacional": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[11]__

perfilOcupacional tamano no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "perfilOcupacional": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[12]__

usuario tipo no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "usuario": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[13]__

usuario tamano no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "usuario": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[14]__

rol no valido

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "rol": "deber ser igual a uno de los valores predefinidos"
  },
  "codigoEstado": 200
}
```


___


## Crear una persona

> Código: API_1

> Descripción: Crear una persona

> Url : /api/web/personas

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
				<td> <a id='CE_API_1[C01]'>CE_API_1[C01]</a> </td>
				<td> valido: Carlos Ñandí</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_1[C02]'>CE_API_1[C02]</a> </td>
				<td> contiene algun caracter no valido o numero</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_1[C03]'>CE_API_1[C03]</a> </td>
				<td> tamano mayor a 30</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> nombres</td>
				<td> <a id='CE_API_1[C04]'>CE_API_1[C04]</a> </td>
				<td> tamano menor a 2</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C11]'>CE_API_1[C11]</a> </td>
				<td> valido: Carlos Ñandí</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C12]'>CE_API_1[C12]</a> </td>
				<td> contiene algun caracter no valido o numero</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C13]'>CE_API_1[C13]</a> </td>
				<td> tamano mayor a 30</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> apellidos</td>
				<td> <a id='CE_API_1[C14]'>CE_API_1[C14]</a> </td>
				<td> tamano menor a 2</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> correo</td>
				<td> <a id='CE_API_1[C21]'>CE_API_1[C21]</a> </td>
				<td> { 'type': 'string', format: email }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> correo</td>
				<td> <a id='CE_API_1[C22]'>CE_API_1[C22]</a> </td>
				<td> 'format': !'email'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> cedula</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'cedula' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> cedula</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> 'type': !'cedula'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> telefono</td>
				<td> <a id='CE_API_1[C41]'>CE_API_1[C41]</a> </td>
				<td> { 'type': 'string', minLength: 10, maxLength: 10 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> telefono</td>
				<td> <a id='CE_API_1[C42]'>CE_API_1[C42]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> telefono</td>
				<td> <a id='CE_API_1[C43]'>CE_API_1[C43]</a> </td>
				<td> tamano != 10 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> fechaNacimiento</td>
				<td> <a id='CE_API_1[C51]'>CE_API_1[C51]</a> </td>
				<td> { 'type': 'fecha' }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> fechaNacimiento</td>
				<td> <a id='CE_API_1[C52]'>CE_API_1[C52]</a> </td>
				<td> 'type': !'fecha'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C61]'>CE_API_1[C61]</a> </td>
				<td> { 'type': 'string', minLength: 2, maxLength: 50 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C62]'>CE_API_1[C62]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C63]'>CE_API_1[C63]</a> </td>
				<td> tamano < 2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> perfilOcupacional</td>
				<td> <a id='CE_API_1[C64]'>CE_API_1[C64]</a> </td>
				<td> tamano > 50 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C71]'>CE_API_1[C71]</a> </td>
				<td> { 'type': 'string', minLength: 2, maxLength: 25 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C72]'>CE_API_1[C72]</a> </td>
				<td> 'type': !'string'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C73]'>CE_API_1[C73]</a> </td>
				<td> tamano < 2 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> usuario</td>
				<td> <a id='CE_API_1[C74]'>CE_API_1[C74]</a> </td>
				<td> tamano > 25 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td> rol</td>
				<td> <a id='CE_API_1[C81]'>CE_API_1[C81]</a> </td>
				<td> { 'type': 'string', 'enum': ['admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'] }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> rol</td>
				<td> <a id='CE_API_1[C82]'>CE_API_1[C82]</a> </td>
				<td> 'enum': !['alta', 'media', 'baja']</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  personasId </td>
				<td> <a id='CE_API_1[C91]'>CE_API_1[C91]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_1[C92]'>CE_API_1[C92]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_1[C93]'>CE_API_1[C93]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Crear una persona de forma correcta

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
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


__ICE_API_1[2]__

nombres tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C02]"> CE_API_1[C02]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": 1,
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "tiene caracteres no validos"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[3]__

nombres tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C03]"> CE_API_1[C03]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "nombres": "tamaño muy pequeño"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[4]__

apellidos tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C12]"> CE_API_1[C12]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": 1,
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "apellidos": "tiene caracteres no validos"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[5]__

apellidos tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C13]"> CE_API_1[C13]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "apellidos": "tamaño muy pequeño"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[6]__

cedula no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C22]"> CE_API_1[C22]</a></td>
    <td>093213</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "093213",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "cedula": "cedula debe ser de tamano debe ser 10"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[7]__

correo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C32]"> CE_API_1[C32]</a></td>
    <td>joelerll@</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "joelerll@",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "correo": "debe coincidir con el formato \"email\""
  },
  "codigoEstado": 200
}
```


__ICE_API_1[8]__

telefono no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C42]"> CE_API_1[C42]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": 1,
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "telefono": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[9]__

fechaNacimiento no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C52]"> CE_API_1[C52]</a></td>
    <td>2017-13-05</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "2017-13-05",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "fechaNacimiento": "La fecha tiene formato no valido"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[10]__

perfilOcupacional tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C62]"> CE_API_1[C62]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": 1,
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "perfilOcupacional": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[11]__

perfilOcupacional tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C63]"> CE_API_1[C63]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "a",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "perfilOcupacional": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[12]__

usuario tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C72]"> CE_API_1[C72]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": 1,
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "usuario": "debe ser string"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[13]__

usuario tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C73]"> CE_API_1[C73]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "usuario": "no debe contener menos de 2 caracteres"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[14]__

rol no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C82]"> CE_API_1[C82]</a></td>
    <td>otro rol</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/1

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "otro rol"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "rol": "deber ser igual a uno de los valores predefinidos"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[15]__

personasId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C92]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/a

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[16]__

personasId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C93]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/0

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[17]__

personasId no existe

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombres</td>
    <td><a href="#CE_API_1[C01]"> CE_API_1[C01]</a></td>
    <td>Irene</td>
  </tr>
  <tr>
    <td>apellidos</td>
    <td><a href="#CE_API_1[C11]"> CE_API_1[C11]</a></td>
    <td>Espinosa</td>
  </tr>
  <tr>
    <td>cedula</td>
    <td><a href="#CE_API_1[C21]"> CE_API_1[C21]</a></td>
    <td>0102051349</td>
  </tr>
  <tr>
    <td>correo</td>
    <td><a href="#CE_API_1[C31]"> CE_API_1[C31]</a></td>
    <td>irenesp@yahoo.com</td>
  </tr>
  <tr>
    <td>telefono</td>
    <td><a href="#CE_API_1[C41]"> CE_API_1[C41]</a></td>
    <td>0986901270</td>
  </tr>
  <tr>
    <td>fechaNacimiento</td>
    <td><a href="#CE_API_1[C51]"> CE_API_1[C51]</a></td>
    <td>1995-05-21T19:27:28.576Z</td>
  </tr>
  <tr>
    <td>perfilOcupacional</td>
    <td><a href="#CE_API_1[C61]"> CE_API_1[C61]</a></td>
    <td>torno</td>
  </tr>
  <tr>
    <td>usuario</td>
    <td><a href="#CE_API_1[C71]"> CE_API_1[C71]</a></td>
    <td>irene</td>
  </tr>
  <tr>
    <td>rol</td>
    <td><a href="#CE_API_1[C81]"> CE_API_1[C81]</a></td>
    <td>empleado</td>
  </tr>
  <tr>
    <td>personasId</td>
    <td><a href="#CE_API_1[]"> CE_API_1[C91]</a></td>
    <td>50</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/personas

POST /api/web/personas/50

_request o body_
```js
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "Persona con ese id no existe",
  "codigoEstado": 200
}
```


___


## Eliminar una persona

> Código: API_3

> Descripción: 

> Url : /api/web/personas/:personasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  personasId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
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

> /api/web/personas/:personasId

DELETE /api/web/personas/1

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

personasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

DELETE /api/web/personas/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

personasId  no valido numero

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

DELETE /api/web/personas/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

personasId no exite

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

DELETE /api/web/personas/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "persona con es id no existe",
  "codigoEstado": 200
}
```


___


## Obtener una persona

> Código: API_4

> Descripción: 

> Url : /api/web/personas/:personasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  personasId </td>
				<td> <a id='CE_API_4[C01]'>CE_API_4[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_4[C02]'>CE_API_4[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_4[C03]'>CE_API_4[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Obtener un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

GET /api/web/personas/1

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
    "nombres": "Elsa",
    "apellidos": "Vega",
    "correo": "vctor_daz@hotmail.com",
    "cedula": "0931823447",
    "clave": null,
    "telefono": "0986901270",
    "fechaNacimiento": "1995-05-21T19:27:28.576Z",
    "perfilOcupacional": "admin",
    "usuario": "elsa",
    "rol": "admin-i2solutions",
    "claveCreada": 0,
    "creadaDump": 0,
    "resetClaveToken": null,
    "resetClaveExpires": null,
    "fechaCreacion": "2018-08-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2018-08-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

personasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

GET /api/web/personas/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

personasId  no valido numero

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

GET /api/web/personas/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[4]__

personasId no exite

__Datos prueba__

_url_ 

> /api/web/personas/:personasId

GET /api/web/personas/50

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


## OBTENER PERSONAS POR ESTABLECIMIENTO

> Código: API_5

> Descripción: 

> Url : /api/web/personas/establecimientos/:establecimientosId

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

Obtener un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/personas/establecimientos/:establecimientosId

GET /api/web/personas/establecimientos/1

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
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "1995-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "usuario": "elsa",
      "rol": "admin-i2solutions",
      "puestosNombre": "Oficina de gerente general",
      "puestosId": 1,
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

> /api/web/personas/establecimientos/:establecimientosId

GET /api/web/personas/establecimientos/a

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

> /api/web/personas/establecimientos/:establecimientosId

GET /api/web/personas/establecimientos/0

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

> /api/web/personas/establecimientos/:establecimientosId

GET /api/web/personas/establecimientos/50

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


## OBTENER PERSONAS POR AREA

> Código: API_6

> Descripción: 

> Url : /api/web/personas/areas/:areasId

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

Obtener un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/personas/areas/:areasId

GET /api/web/personas/areas/1

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
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "1995-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "usuario": "elsa",
      "rol": "admin-i2solutions",
      "puestosNombre": "Oficina de gerente general",
      "puestosId": 1,
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_6[2]__

areasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/personas/areas/:areasId

GET /api/web/personas/areas/a

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

> /api/web/personas/areas/:areasId

GET /api/web/personas/areas/0

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

> /api/web/personas/areas/:areasId

GET /api/web/personas/areas/50

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


## OBTENER PERSONAS POR PUESTO

> Código: API_7

> Descripción: 

> Url : /api/web/personas/puestos/:puestosId

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

Obtener un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/personas/puestos/:puestosId

GET /api/web/personas/puestos/1

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
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "1995-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "puestosNombre": "Oficina de gerente general",
      "usuario": "elsa",
      "rol": "admin-i2solutions"
    }
  ],
  "codigoEstado": 200
}
```


__ICE_API_7[2]__

puestosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/personas/puestos/:puestosId

GET /api/web/personas/puestos/a

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

> /api/web/personas/puestos/:puestosId

GET /api/web/personas/puestos/0

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

> /api/web/personas/puestos/:puestosId

GET /api/web/personas/puestos/50

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


## ANADIR UNA PERSONA A UN PUESTO

> Código: API_8

> Descripción: 

> Url : /api/web/personas/:personasId/puestos/:puestosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  personasId </td>
				<td> <a id='CE_API_8[C01]'>CE_API_8[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_8[C02]'>CE_API_8[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  personasId </td>
				<td> <a id='CE_API_8[C03]'>CE_API_8[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  puestosId </td>
				<td> <a id='CE_API_8[C11]'>CE_API_8[C11]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_8[C12]'>CE_API_8[C12]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_8[C13]'>CE_API_8[C13]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_8[1]__

Obtener un accidente de forma correcta

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/1/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "puestosId": "1",
    "personasId": "1",
    "fechaActualizacion": "2018-08-01T05:00:00.000Z",
    "fechaCreacion": "2018-08-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_8[2]__

personasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/a/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_8[3]__

personasId  no valido numero

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/0/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "personasId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_8[4]__

personasId no exite

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/50/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "persona con es id no existe",
  "codigoEstado": 200
}
```


__ICE_API_8[5]__

puestosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/1/puestos/a

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


__ICE_API_8[6]__

puestosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/1/puestos/0

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


__ICE_API_8[7]__

puestosId no exite

__Datos prueba__

_url_ 

> /api/web/personas/:personasId/puestos/:puestosId

GET /api/web/personas/1/puestos/50

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


