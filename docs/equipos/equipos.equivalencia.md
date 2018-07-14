# Api Equipos
## Crear un equipo

> Código: API_1

> Descripción: Crear un equipo

> Url : /api/web/equipos

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
				<td> cantidad</td>
				<td> <a id='CE_API_1[C31]'>CE_API_1[C31]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> cantidad</td>
				<td> <a id='CE_API_1[C32]'>CE_API_1[C32]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> cantidad</td>
				<td> <a id='CE_API_1[C33]'>CE_API_1[C33]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_1[1]__

Crear un equipo de forma correcta

__Datos prueba__

_url_ 

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
}
```

__Resultados__

_response_

```js
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Extintor",
    "descripcion": "esta hecho",
    "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
    "cantidad": 1,
    "fechaActualizacion": "2018-07-14T21:03:02.023Z",
    "fechaCreacion": "2018-07-14T21:03:02.023Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[2]__

nombre tipo no valido

__Datos prueba__

_url_ 

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": 1,
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": 1,
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "",
  "cantidad": 1
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

fotoUrl tipo no valido

__Datos prueba__

_url_ 

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": 1,
  "cantidad": 1
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


__ICE_API_1[7]__

fotoUrl formato no valido

__Datos prueba__

_url_ 

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "https://",
  "cantidad": 1
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


__ICE_API_1[8]__

cantidad tipo no valido

__Datos prueba__

_url_ 

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "cantidad": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_1[9]__

cantidad tamano no valido

__Datos prueba__

_url_ 

> /api/web/equipos

POST /api/web/equipos

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": -1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "cantidad": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Actualizar una equipo

> Código: API_2

> Descripción: Actualizar un equipo

> Url : /api/web/equipos/:equiposId

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
				<td> cantidad</td>
				<td> <a id='CE_API_2[C31]'>CE_API_2[C31]</a> </td>
				<td> { 'type': 'number', minimum: 1 }</td>
				<td> válido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> cantidad</td>
				<td> <a id='CE_API_2[C32]'>CE_API_2[C32]</a> </td>
				<td> 'type': !'number'</td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td> cantidad</td>
				<td> <a id='CE_API_2[C33]'>CE_API_2[C33]</a> </td>
				<td> minimum: !1 </td>
				<td> invalido </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  equiposId </td>
				<td> <a id='CE_API_2[C41]'>CE_API_2[C41]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_2[C42]'>CE_API_2[C42]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_2[C43]'>CE_API_2[C43]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_2[1]__

Actualizar equipo de forma correcta

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
    <td>aa</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>https://image.png</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "aa",
  "descripcion": "aa",
  "fotoUrl": "https://image.png",
  "cantidad": 1
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
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": 1,
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C12]"> CE_API_2[C12]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": 1,
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C13]"> CE_API_2[C13]</a></td>
    <td></td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
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

fotoUrl tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C22]"> CE_API_2[C22]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": 1,
  "cantidad": 1
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


__ICE_API_2[7]__

fotoUrl formato no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C23]"> CE_API_2[C23]</a></td>
    <td>https://</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "https://",
  "cantidad": 1
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


__ICE_API_2[8]__

cantidad tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C32]"> CE_API_2[C32]</a></td>
    <td>a</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": "a"
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "cantidad": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[9]__

cantidad tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C33]"> CE_API_2[C33]</a></td>
    <td>0</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C41]</a></td>
    <td>1</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/1

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 0
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "cantidad": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[10]__

equiposId tipo no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C42]</a></td>
    <td>a</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/a

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_2[11]__

equiposId tamano no valido

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
  <tr>
    <td>nombre</td>
    <td><a href="#CE_API_2[C01]"> CE_API_2[C01]</a></td>
    <td>Extintor</td>
  </tr>
  <tr>
    <td>descripcion</td>
    <td><a href="#CE_API_2[C11]"> CE_API_2[C11]</a></td>
    <td>esta hecho</td>
  </tr>
  <tr>
    <td>fotoUrl</td>
    <td><a href="#CE_API_2[C21]"> CE_API_2[C21]</a></td>
    <td>http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg</td>
  </tr>
  <tr>
    <td>cantidad</td>
    <td><a href="#CE_API_2[C31]"> CE_API_2[C31]</a></td>
    <td>1</td>
  </tr>
  <tr>
    <td>equiposId</td>
    <td><a href="#CE_API_2[]"> CE_API_2[C43]</a></td>
    <td>0</td>
  </tr>
</table>

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

PUT /api/web/equipos/0

_request o body_
```js
{
  "nombre": "Extintor",
  "descripcion": "esta hecho",
  "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
  "cantidad": 1
}
```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


___


## Eliminar un equipo

> Código: API_3

> Descripción: Eliminar un equipo

> Url : /api/web/equipos/:equiposId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  equiposId </td>
				<td> <a id='CE_API_3[C01]'>CE_API_3[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_3[C02]'>CE_API_3[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_3[C03]'>CE_API_3[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_3[1]__

Eliminar un equipo de forma correcta

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

DELETE /api/web/equipos/1

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

equiposId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

DELETE /api/web/equipos/a

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[3]__

equiposId  no valido numero

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

DELETE /api/web/equipos/0

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_3[4]__

equiposId no exite

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId

DELETE /api/web/equipos/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "equipos con es id no existe",
  "codigoEstado": 200
}
```


___


## Anadir equipo a un puesto

> Código: API_4

> Descripción: Anadir equipo a un puesto

> Url : /api/web/equipos/:equiposId/puestos/:puestosId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  equiposId </td>
				<td> <a id='CE_API_4[C01]'>CE_API_4[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_4[C02]'>CE_API_4[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_4[C03]'>CE_API_4[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C11]'>CE_API_4[C11]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C12]'>CE_API_4[C12]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  puestosId </td>
				<td> <a id='CE_API_4[C13]'>CE_API_4[C13]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_4[1]__

Anadir equipo a un puesto de forma correcta

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/1/puestos/1

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
    "equiposId": "1",
    "puestosId": "1",
    "fechaActualizacion": "2018-07-14T21:03:03.049Z",
    "fechaCreacion": "2018-07-14T21:03:03.049Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[2]__

equiposId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/a/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[3]__

equiposId  no valido numero

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/0/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_4[4]__

puestosId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/1/puestos/a

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


__ICE_API_4[5]__

puestosId  no valido numero

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/1/puestos/0

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


__ICE_API_4[6]__

equipo no existe

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/50/puestos/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El equipo no existe",
  "codigoEstado": 200
}
```


__ICE_API_4[7]__

puesto no existe

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/puestos/:puestosId

PUT /api/web/equipos/1/puestos/50

_request o body_
```js

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


## Anadir equipo a un area

> Código: API_5

> Descripción: Anadir equipo a un area

> Url : /api/web/equipos/:equiposId/areas/:areasId

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
			<tr style='background-color: #82E0AA' >
				<td>  equiposId </td>
				<td> <a id='CE_API_5[C01]'>CE_API_5[C01]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_5[C02]'>CE_API_5[C02]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  equiposId </td>
				<td> <a id='CE_API_5[C03]'>CE_API_5[C03]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #82E0AA' >
				<td>  areasId </td>
				<td> <a id='CE_API_5[C11]'>CE_API_5[C11]</a> </td>
				<td>{ 'type': 'number', minimum: 1 }</td>
				<td> válido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_5[C12]'>CE_API_5[C12]</a> </td>
				<td>'type': !'number'</td>
				<td> invalido  </td>
			</tr>
			<tr style='background-color: #EC7063' >
				<td>  areasId </td>
				<td> <a id='CE_API_5[C13]'>CE_API_5[C13]</a> </td>
				<td>minimum: !1 </td>
				<td> invalido  </td>
			</tr>
</table>


#### Intersecciónes de clases de equivalencia o Casos de prueba

__ICE_API_5[1]__

Anadir equipo a un puesto de forma correcta

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/1/areas/1

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
    "equiposId": "1",
    "areasId": "1",
    "fechaActualizacion": "2018-07-14T21:03:03.330Z",
    "fechaCreacion": "2018-07-14T21:03:03.330Z"
  },
  "codigoEstado": 200
}
```


__ICE_API_5[2]__

equiposId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/a/areas/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser number"
  },
  "codigoEstado": 200
}
```


__ICE_API_5[3]__

equiposId  no valido numero

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/0/areas/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": {
    "equiposId": "debe ser >= 1"
  },
  "codigoEstado": 200
}
```


__ICE_API_5[4]__

areasId no valido tipo de dato

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/1/areas/a

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


__ICE_API_5[5]__

areasId  no valido numero

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/1/areas/0

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


__ICE_API_5[6]__

equiposId no exite

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/50/areas/1

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El equipo no existe",
  "codigoEstado": 200
}
```


__ICE_API_5[7]__

areasId no exite

__Datos prueba__

_url_ 

> /api/web/equipos/:equiposId/areas/:areasId

PUT /api/web/equipos/1/areas/50

_request o body_
```js

```

__Resultados__

_response_

```js
{
  "estado": false,
  "datos": "El area no existe",
  "codigoEstado": 200
}
```


___


