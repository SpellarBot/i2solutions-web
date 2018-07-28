# Api Personas

## Crear persona

__POST__ __/api/web/personas__

La clave se genera en el back y enviar el correo dependiendo del rol
#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  apellidos  | String  |   ---   | 
|  correo  | String  |   ---   | 
|  cedula  | String  |   ---   | 
|  telefono  | String  |   0931823448, 2988383   | 
|  fechaNacimiento  | ISOdate  |   ---   | 
|  usuario  | String  |   ?, por definir   | 
|  rol  | String  |  'admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'  | 
|  personasId  | Number  |     | 

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombres": "Elsa",
    "apellidos": "Vega",
    "correo": "vctor_daz@hotmail.com",
    "cedula": "0931823447",
    "telefono": "0986901270",
    "fechaNacimiento": "2014-05-21T19:27:28.576Z",
    "perfilOcupacional": "admin",
    "usuario": "elsa",
    "rol": "admin-i2solutions",
    "clave": "$2b$05$OTCzBEy1medCs7ONJ3L9k.tpxfpvU8xrk23KGDK23hBF0YTj5V8jO",
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z",
    "puestosId": 1
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
|  cedula  | String  |   0931823448, 2988383   | 
|  telefono  | String  |   ---   | 
|  fechaNacimiento  | ISOdate  |   ---   | 
|  usuario  | String  |   ?, por definir   | 
|  rol  | String  |  'admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'  | 

#### Request:

```json
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0931823447",
  "telefono": "2948373",
  "fechaNacimiento": "2014-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
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


___



## Eliminar persona

__DELETE__ __/api/web/personas/:personasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
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
    "cedula": "0931823447",
    "telefono": "0986901270",
    "fechaNacimiento": "2014-05-21T19:27:28.576Z",
    "perfilOcupacional": "admin",
    "usuario": "elsa",
    "rol": "admin-i2solutions",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


___



## Obtener personas por establecimiento

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
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "2014-05-21T19:27:28.576Z",
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


___



## Obtener personas por area

__GET__ __/api/web/personas/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

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
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "2014-05-21T19:27:28.576Z",
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


___



## Obtener personas por puesto

__GET__ __/api/web/personas/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

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
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "2014-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "puestosNombre": "Oficina de gerente general",
      "usuario": "elsa",
      "rol": "admin-i2solutions"
    }
  ],
  "codigoEstado": 200
}
```


___



## Anadir una persona a un puesto

__GET__ __/api/web/personas/:personasId/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "puestosId": "1",
    "personasId": "1",
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


___



