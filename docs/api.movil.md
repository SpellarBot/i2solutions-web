# Api Movil

## Obtener todos los puestas dada un area

__GET__ __/api/movil/puestosDeUnArea/:areasId__


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
      "nombre": "Oficina de gerente general",
      "descripcion": "AA"
    }
  ],
  "codigoEstado": 200
}
```


___



## Atender una novedad

__PUT__ __/api/movil/novedad__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  descripcion  | String  |   ---   | 
|  prioridad  | String  |   [alta,media,baja]   | 
|  fotoUrl  | String  |   ---   | 
|  puestosId  | Number  |   ---   | 
|  inspeccionesId  | Number  |   ---   | 

#### Request:

```json
{
  "atendida": true,
  "descripcionAtendida": ""
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
__El Id de la novedad no existe__




_request_

```js
{
  "atendida": true,
  "descripcionAtendida": ""
}
```

_response_

```js
{
  "estado": false,
  "datos": "La novedad con ese id no exite",
  "codigoEstado": 200
}
```
	
	


___



