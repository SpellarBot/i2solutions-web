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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzdWFyaW8iOiJlbHNhIiwiY29ycmVvIjoidmN0b3JfZGF6QGhvdG1haWwuY29tIiwibm9tYnJlcyI6IkVsc2EiLCJhcGVsbGlkb3MiOiJWZWdhIiwiaWQiOjEsInJvbCI6ImFkbWluLWkyc29sdXRpb25zIiwiY3JlYWRhRHVtcCI6MSwiY2xhdmVDcmVhZGEiOjAsImVtcHJlc2FzSWQiOjF9LCJpYXQiOjEzMTc0NDUyMDB9.l47qQTftuRThXlJfC-oZnxyXpOwM3MgHncvZuCQui60"
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
  "datos": "el usuario no existe",
  "codigoEstado": 200
}
```
	
	


___



