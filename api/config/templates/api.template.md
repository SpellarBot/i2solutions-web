# Api {{ nombre }}
{%- for doc in docs %}

## {{ doc.nombre }}

__{{ doc.metodo }}__ __{{ doc.url }}__

{{ doc.descripcion }}

{%- if doc.params and doc.params.length != 0 %}
#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
	{%- for params in doc.params %}
| {{params.nombre}} | {{params.tipo}} |  {{params.descripcion}}  |
	{% endfor %}
{% endif %}

{%- if doc.body and doc.body.length != 0 %}
#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| {% for body in doc.body %}
| {%if body.margen %}<{{body.margen}}> {{body.nombre}} </{{body.margen}}>{% else %} {{body.nombre}} {% endif %} | {{body.tipo}}  |  {{body.descripcion}}  | {% endfor %}
{% endif %}

{%- if doc.request %}
#### Request:

```json
{{ doc.request }}
```
{% endif %}

{%- if doc.response %}
#### Response:

```json
{{ doc.response }}
```
{% endif %}


{%- if doc.errors and doc.errors != 0 %}
#### ERRORS:
	{%- for error in doc.errors %}
__{{ error.nombre }}__

{{ error.descripcion }}

{% if error.request %}
_request_

```js
{{ error.request }}
```
{% endif %}

{%- if error.response %}
_response_

```js
{{ error.response }}
```
	{% endif %}
	{% endfor %}
{% endif %}

___

{% endfor %}

