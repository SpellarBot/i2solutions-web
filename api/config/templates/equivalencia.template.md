# Clases de equivalencia {{ nombre }}


|        | CE        | Descripcion | Validez  |
|--------|-----------|-------------|----------|
{%- set index = 0 %}
{%- for ce in datos %}
 {%- for caso in ce.casos %}
| {{ce.nombre}}    | CE_{{nombre | lower}}{{index}} |  {{caso.descripcion}} | {{caso.tipo}}   |
{%- set index = index + 1 %}
 {%- endfor %}
{%- endfor %}

# Interseccion de clase

CE | Descripcion | Datos de prueba | Resultados
nombre | actividadComercial | razonSocial | direccion | ruc
CE0    | CE1  | CE2  | CE3 | CE4

<table>
    <thead>
        <tr>
            <th>CE</th>
            <th>Layer 2</th>
            <th>Layer 3</th>
        </tr>
    </thead>
    <tbody>
    	colspan
        <tr>
            <td rowspan=4>L1 Name</td>
            <td rowspan=2>L2 Name A</td>
            <td>L3 Name A</td>
        </tr>
        <tr>
            <td>L3 Name B</td>
        </tr>
        <tr>
            <td rowspan=2>L2 Name B</td>
            <td>L3 Name C</td>
        </tr>
        <tr>
            <td>L3 Name D</td>
        </tr>
    </tbody>
</table>
