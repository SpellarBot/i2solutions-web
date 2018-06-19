# Api {{nombre}}

{%- for ed in datos %}
## {{ ed.nombre }}[{{ ed.codigo }}]

__{{ ed.metodo }}__ __{{ ed.url }}__

{{ ed.descripcion }}

### Clases de equivalencia
{%- set index = 0 %}
|        | CE        | Descripcion | Validez  |
|--------|-----------|-------------|----------|

{%- for body in ed.body %}
| {{body.nombre}} | CE_{{ed.codigo}}[{{index}}]|{{body.descripcion}}| valido |
{%- set index = index + 1 %}
|   | CE_{{ed.codigo}}[{{index}}]|!{{body.descripcion}}| <span style="color: red;">invalido</span> |
{%- set index = index + 1 %}
{% endfor %}

{%- for param in ed.params %}
| {{param.nombre}} | CE_{{ed.codigo}}[{{index}}]|{{param.descripcion}}| valido |
{%- set index = index + 1 %}
|   | CE_{{ed.codigo}}[{{index}}]|!{{param.descripcion}}| <span style="color: red;">invalido</span> |
{%- set index = index + 1 %}
{% endfor %}

### Intersección de clases de equivalencia
{%- set index = 0 %}
{%- for interseccion in ed.intersecciones %}
##### ICE_{{ed.codigo}}[{{index}}]

* Clases de equivalencia

{{ interseccion.descripcion }}

|  CE      |  Codigo       | tipo |
|--------|-----------|
| nombre | CE_API_2[1] | body |
| actividadComercial| CE_API_2[1] | body |
| razonSocial | CE_API_2[1] | body |
| direccion | CE_API_2[1] | body |
| ruc |CE_API_2[1] | body |
| empresasId | CE_API_2[1] | params |

__Datos prueba__


_url_ {{interseccion.url}}

_params_ 

| Nombre       | Prueba    |
| :--------- | :------ |
    {%- for params in interseccion.params %}
| {{params.nombre}} | {{params.valor}} |
    {% endfor %}

_request_
```js
{{interseccion.request}}
```

__Resultados__

_response_

```js
{{interseccion.response}}
```

{%- set index = index + 1 %}
{% endfor %}


{% endfor %}
