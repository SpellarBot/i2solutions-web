# Api Personas

## Obtener todas las personas

__GET__ __/api/web/personas__

Obtener todas las personas
#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "9992332599",
      "clave": "tggQK3M3L__1KRO",
      "telefono": "966.155.986",
      "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
      "perfilOcupacional": "",
      "usuario": "Antonio69",
      "rol": "",
      "fechaCreacion": "2018-07-12 01:22:34.816 +00:00",
      "fechaActualizacion": "2018-07-12 01:22:34.816 +00:00"
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear persona

__POST__ __/api/web/personas__

Crear una persona pero sin anadirla a ningun establecimiento
#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  apellidos  | String  |   ---   | 
|  correo  | String  |   ---   | 
|  cedula  | String  |   ---   | 
|  clave  | String  |   ---   | 
|  telefono  | String  |   ---   | 
|  fechaNacimiento  | ISOdate  |   ---   | 
|  usuario  | String  |   ?, por definir   | 
|  rol  | String  |   ?, por definir   | 

#### Request:

```json
{
  "nombres": "Elsa",
  "apellidos": "Vega",
  "correo": "vctor_daz@hotmail.com",
  "cedula": "9992332599",
  "clave": "tggQK3M3L__1KRO",
  "telefono": "966.155.986",
  "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
  "perfilOcupacional": "",
  "usuario": "Antonio69",
  "rol": ""
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombres": "Elsa",
    "apellidos": "Vega",
    "correo": "vctor_daz@hotmail.com",
    "cedula": "9992332599",
    "clave": "tggQK3M3L__1KRO",
    "telefono": "966.155.986",
    "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
    "perfilOcupacional": "",
    "usuario": "Antonio69",
    "rol": "",
    "fechaActualizacion": "2018-07-12T01:22:34.850Z",
    "fechaCreacion": "2018-07-12T01:22:34.850Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar persona

__PUT__ __/api/web/personas/:personasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  apellidos  | String  |   ---   | 
|  correo  | String  |   ---   | 
|  cedula  | String  |   ---   | 
|  clave  | String  |   ---   | 
|  telefono  | String  |   ---   | 
|  fechaNacimiento  | ISOdate  |   ---   | 
|  usuario  | String  |   ?, por definir   | 
|  rol  | String  |   ?, por definir   | 

#### Request:

```json
{
  "id": 1,
  "nombres": "Nombre cambiado",
  "apellidos": "Vega",
  "correo": "vctor_daz@hotmail.com",
  "cedula": "9992332599",
  "clave": "tggQK3M3L__1KRO",
  "telefono": "966.155.986",
  "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
  "perfilOcupacional": "",
  "usuario": "Antonio69",
  "rol": "",
  "fechaActualizacion": "2018-07-12T01:22:34.878Z",
  "fechaCreacion": "2018-07-12T01:22:34.878Z"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```

#### ERRORS:
__El id de la persona no existe__




_request_

```js
{
  "nombres": "Elsa",
  "apellidos": "Vega",
  "correo": "vctor_daz@hotmail.com",
  "cedula": "9992332599",
  "clave": "tggQK3M3L__1KRO",
  "telefono": "966.155.986",
  "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
  "perfilOcupacional": "",
  "usuario": "Antonio69",
  "rol": ""
}
```

_response_

```js
{
  "estado": false,
  "datos": "Persona con ese id no existe",
  "codigoEstado": 200
}
```
	
	


___



## Obtener una persona

__GET__ __/api/web/personas/:personasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombres": "Elsa",
    "apellidos": "Vega",
    "correo": "vctor_daz@hotmail.com",
    "cedula": "9992332599",
    "clave": "tggQK3M3L__1KRO",
    "telefono": "966.155.986",
    "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
    "perfilOcupacional": "",
    "usuario": "Antonio69",
    "rol": "",
    "fechaCreacion": "2018-07-12 01:22:34.971 +00:00",
    "fechaActualizacion": "2018-07-12 01:22:34.971 +00:00"
  },
  "codigoEstado": 200
}
```


___



## Obtener una personas por establecimiento

__GET__ __/api/web/personas/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombres": "Benjamín",
      "apellidos": "Esquibel",
      "correo": "cristina.ferrer@yahoo.com",
      "cedula": "9758314659",
      "clave": "EcL1oCaneOr5ZbF",
      "telefono": "985-612-994",
      "fechaNacimiento": "Sat Aug 05 2017 15:30:55 GMT-0500 (-05)",
      "perfilOcupacional": "",
      "usuario": "Jaime_Solís",
      "rol": "",
      "fechaCreacion": "2018-07-12T01:22:35.013Z",
      "fechaActualizacion": "2018-07-12T01:22:35.013Z",
      "establecimientos": [
        {
          "id": 1,
          "nombres": "matriz",
          "direccion": "22050 Felipe Rampa",
          "ruc": "0923651688001",
          "fechaCreacion": "2018-07-12T01:22:35.012Z",
          "fechaActualizacion": "2018-07-12T01:22:35.012Z",
          "empresasId": null,
          "personasEstablecimientos": {
            "id": 2,
            "rol": "empleado",
            "fechaCreacion": "2018-07-12T01:22:35.017Z",
            "fechaActualizacion": "2018-07-12T01:22:35.017Z",
            "establecimientosId": 1,
            "personasId": 1
          }
        }
      ]
    },
    {
      "id": 2,
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "9992332599",
      "clave": "tggQK3M3L__1KRO",
      "telefono": "966.155.986",
      "fechaNacimiento": "Mon Mar 26 2018 23:40:21 GMT-0500 (-05)",
      "perfilOcupacional": "",
      "usuario": "Antonio69",
      "rol": "",
      "fechaCreacion": "2018-07-12T01:22:35.014Z",
      "fechaActualizacion": "2018-07-12T01:22:35.014Z",
      "establecimientos": [
        {
          "id": 1,
          "nombres": "matriz",
          "direccion": "22050 Felipe Rampa",
          "ruc": "0923651688001",
          "fechaCreacion": "2018-07-12T01:22:35.012Z",
          "fechaActualizacion": "2018-07-12T01:22:35.012Z",
          "empresasId": null,
          "personasEstablecimientos": {
            "id": 1,
            "rol": "jefe",
            "fechaCreacion": "2018-07-12T01:22:35.016Z",
            "fechaActualizacion": "2018-07-12T01:22:35.016Z",
            "establecimientosId": 1,
            "personasId": 2
          }
        }
      ]
    }
  ],
  "codigoEstado": 200
}
```


___



