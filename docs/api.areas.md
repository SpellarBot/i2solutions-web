# Api Areas

## Obtener un areas categorizados por puestos dado un establecimiento

__GET__ __/api/areas/puestos/establecimientos/:establecimientosId__


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
      "nombre": "Gerente General",
      "actividad": "gerencia",
      "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "puestos": [
        {
          "cantidadPersonas": 1,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 1,
          "cantidadEquipos": 0,
          "cantidadRiesgos": 0,
          "id": 1,
          "nombre": "Oficina de gerente general",
          "descripcion": "AA"
        },
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 0,
          "cantidadEquipos": 0,
          "cantidadRiesgos": 0,
          "id": 2,
          "nombre": "Oficina de jefe de TTHH",
          "descripcion": "AA"
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Jefe TTHH",
      "actividad": "recursos humanos",
      "descripcionLugar": "Facilis nemo accusamus ipsa nesciunt nobis.",
      "puestos": [
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 0,
          "cantidadNovedadesSinAtender": 0,
          "cantidadEquipos": 0,
          "cantidadRiesgos": 0,
          "id": 3,
          "nombre": "Oficina de jefe de TTHH",
          "descripcion": "AA"
        }
      ]
    }
  ],
  "codigoEstado": 200
}
```


___



