# Api {{nombre}}

{%- for nombre, ed in datos %}
## {{ ed.nombre }}

> Código: {{ ed.codigo }}

> Descripción: {{ ed.descripcion }}

> Url : {{ed.url}}

{%- if ed.body or ed.params %}

#### Clases de equivalencia

<table border="1">
  <tr>
  	<th> </th>
    <th>CE</th>
    <th>Descripción</th> 
    <th>Validez</th>
  </tr>
{%- for body in ed.body %}
	{%- if body.casos and body.casos.length != 0 %}
		{%- for caso in body.casos %}
			<tr {%- if not caso.valido %} style='background-color: #EC7063' {% else %} style='background-color: #82E0AA' {% endif %}>
				<td> {{body.nombre}}</td>
				<td> <a id='CE_{{ed.codigo}}[{{caso.codigo}}]'>CE_{{ed.codigo}}[{{caso.codigo}}]</a> </td>
				<td> {{caso.descripcion}}</td>
				<td>{%- if caso.valido %} válido {% else %} invalido {% endif %}</td>
			</tr>
			{%- set index = index + 1 %}
		{%- endfor %}
	{%- endif %}
{%- endfor %}
{%- for param in ed.params %}
	{%- if param.casos and param.casos.length != 0 %}
		{%- for caso in param.casos %}
			<tr {%- if not caso.valido %} style='background-color: #EC7063' {% else %} style='background-color: #82E0AA' {% endif %}>
				<td>  {{param.nombre}} </td>
				<td> <a id='CE_{{ed.codigo}}[{{caso.codigo}}]'>CE_{{ed.codigo}}[{{caso.codigo}}]</a> </td>
				<td>{{caso.descripcion}}</td>
				<td> {%- if caso.valido %} válido {% else %} invalido {% endif %} </td>
			</tr>
		{%- endfor %}
	{%- endif %}
{%- endfor %}
</table>

{%- endif %}


#### Intersecciónes de clases de equivalencia o Casos de prueba

{%- for codigo, interseccion in ed.intersecciones %}

__ICE_{{ed.codigo}}[{{codigo}}]__

{{ interseccion.descripcion }}

{%- if interseccion.body and interseccion.params %}

<table border="1">
  <tr>
    <th>Nombre</th>
    <th>CE</th> 
    <th>Prueba</th> 
  </tr>
{%- for nombre, body in interseccion.body %}
  <tr>
    <td>{{nombre}}</td>
    <td><a href="#CE_{{ed.codigo}}[{{body.codigo}}]"> CE_{{ed.codigo}}[{{body.codigo}}]</a></td>
    <td>{{body.valor}}</td>
  </tr>
{%- endfor %}
{%- for nombre, param in interseccion.params %}
  <tr>
    <td>{{nombre}}</td>
    <td><a href="#CE_{{ed.codigo}}[{{body.codigo}}]"> CE_{{ed.codigo}}[{{param.codigo}}]</a></td>
    <td>{{param.valor}}</td>
  </tr>
{%- endfor %}
</table>

{%- endif %}

__Datos prueba__

_url_ 

> {{ed.url}}

{{ ed.metodo }} {{interseccion.url}}

_request o body_
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

___

{% endfor %}
