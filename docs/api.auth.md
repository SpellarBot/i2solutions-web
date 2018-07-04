# Api Auth

## Autenticarse

__POST__ __/api/auth/login__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  usuario  | String  |   ---   | 
|  clave  | String  |   ---   | 

#### Request:

```json
{
  "usuario": "Antonio69",
  "clave": "tggQK3M3L__1KRO"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzdWFyaW8iOiJBbnRvbmlvNjkiLCJjb3JyZW8iOiJ2Y3Rvcl9kYXpAaG90bWFpbC5jb20iLCJub21icmVzIjoiRWxzYSIsImFwZWxsaWRvcyI6IlZlZ2EiLCJpZCI6MX0sImlhdCI6MTUzMDY2OTE4Nn0.OgfKyQ68WVJ1vA3sxEISlbSwue5VyqVnf-yKlmKOUvQ"
  },
  "codigoEstado": 200
}
```

#### ERRORS:
__Usuario no valido__




_request_

```js
{
  "usuario": "Antonio69a",
  "clave": "tggQK3M3L__1KRO"
}
```

_response_

```js
{
  "estado": false,
  "datos": "El usuario no existe. Clave o usuario mal ingresado",
  "codigoEstado": 200
}
```
	
	


___



## Verificar validez jwt

__GET__ __/api/auth/verify__

{ Authorization: Bearer token}
#### Response:

```json
{
  "estado": true,
  "datos": "Autorizado",
  "codigoEstado": 200
}
```

#### ERRORS:
__Usuario no autorizado__




_response_

```js
{
  "datos": {
    "mensaje_error": "No autorizado"
  },
  "codigoEstado": 401,
  "estado": false
}
```
	
	


___



