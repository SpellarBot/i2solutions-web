# Api Puestos

## Obtener todos los puestos de un area

__GET__ __/api/web/puestos/areas/:areasId__


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
      "descripcion": "AA",
      "nombre": "Oficina de gerente general",
      "cantidadPersonas": 0,
      "cantidadAccidentes": 0,
      "cantidadNovedadesSinAtender": 0,
      "cantidadEquipos": 0,
      "cantidadRiesgos": 0
    },
    {
      "id": 2,
      "descripcion": "AA",
      "nombre": "Oficina de jefe de TTHH",
      "cantidadPersonas": 0,
      "cantidadAccidentes": 0,
      "cantidadNovedadesSinAtender": 0,
      "cantidadEquipos": 0,
      "cantidadRiesgos": 0
    }
  ],
  "codigoEstado": 200
}
```


___



