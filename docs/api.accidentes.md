# Api Accidentes

## Obtener accidentes por establecimiento

__GET__ __/api/web/accidentes/establecimientos/:establecimientosId__


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
      "nombre": "Caída de instrumentos",
      "descripcion": "Se cayó la solución",
      "heridos": "1",
      "atendidoEnEmpresa": 1,
      "muertos": 0,
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "puestosId": 1,
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "puestosNombre": "Oficina de gerente general"
    }
  ],
  "codigoEstado": 200
}
```


___



