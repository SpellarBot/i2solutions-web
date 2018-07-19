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
  "usuario": "elsa",
  "clave": "aa"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzdWFyaW8iOiJlbHNhIiwiY29ycmVvIjoidmN0b3JfZGF6QGhvdG1haWwuY29tIiwibm9tYnJlcyI6IkVsc2EiLCJhcGVsbGlkb3MiOiJWZWdhIiwiaWQiOjEsInJvbCI6ImFkbWluLWkyc29sdXRpb25zIiwiZW1wcmVzYXNJZCI6MX0sImlhdCI6MTMxNzQ0NTIwMH0.XP37W3iEvRKQVJ82j-xR2ODPLGSzlERWiqgtauTzj2Y"
  },
  "codigoEstado": 200
}
```

#### ERRORS:
__Usuario no valido__




_request_

```js
{
  "usuario": "usaer",
  "clave": "aa"
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



