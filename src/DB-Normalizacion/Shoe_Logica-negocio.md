
## listados_de_entidades

# shoes **ED**
- shoe_id **(PK)** : number
- shoe_model **(FK)**: string
- line_id **(FK)** : string
- categorie_id **(FK)**: string
- shoe_price: float
- shoe_availability: boolean
- shoe_photo : blob


### name **EC**
- name_id **(PK)**
- name_description


### categorie **EC**
- categorie_id **(PK)**
- categorie_name
- categorie_type
- categorie_description


### line **EC**
- line_id **(PK)**
- line_description


### Relaciones
1. Muchos **name** _pertenece_ a una **categorie** (1 a M)
2. Una **categorie** _pertenece_ a una **line** (1 a 1)
3. Muchas **shoes** _pertenece_ a una **lines** (M a 1)
3. Muchas **shoes** _pertenece_ a una **categorie** (M a 1)

<br>
<br>
<br>
<br>
<br>
<br>

# Modelo Entidad-Relacion:
![Modelo-Entidad-Relacion](Diagrama%20Entidad-Relacion%20Shoes.png)
-----------------------------------------------------------------------
<br>
<br>
<br>


# Modelo Relacional:
![Modelo-Relacional](./modelo%20relacional%20BD.drawio.png)
-----------------------------------------------------------------------
<br>
<br>
<br>
<br>
<br>
<br>

## Reglas de negocio (CRUD)

## shoes
- Crear un nuevo registro de una nueva zapatilla
<!-- Esta regla es fundamental para permitir la adición de nuevos productos al catálogo. -->

- Leer el registro de un(s) zapatilla(s)
<!--  La capacidad de leer la información de una zapatilla es esencial para mostrar los detalles del producto a los clientes. -->

- Actualizar status de disponibilidad
<!-- Es importante poder actualizar el estado de disponibilidad de una zapatilla para reflejar su disponibilidad actual en el inventario. -->

- Eliminar una zapatilla(s) dada una condicion en particular
<!-- La capacidad de eliminar zapatillas puede ser necesaria en ciertas situaciones, como productos descontinuados -->

-----------------------------------------------------------------------
### name
- Crear un nuevo registro de un nuevo nombre
- Leer registro de nombre(s)
- Eliminar el nombre(s) dada una condicion en particular
-----------------------------------------------------------------------

### categorie
- Crear un nuevo registro de una nueva(s) categoria(s)
- Traer todos los registros de las diferentes categorias
<!-- Esta regla permite obtener una lista de todas las categorías disponibles en el sistema. Es útil para mostrar las opciones de categorías a los usuarios y para organizar el catálogo de productos. -->
- Eliminar una categoría(s) dada una condicion en particular
- Leer todos los registros de la(s) diferente(s) categoria(s)
<!-- esta regla permite acceder a la información detallada de todas las categorías. Es útil para mostrar información adicional sobre las categorías, como descripciones o imágenes. -->
-----------------------------------------------------------------------























<!--(Air Max, Air Force 1, Jordan, Dunk, Blazer, Cortez, Presto, React, Free, Huarache, Roshe, Zoom, VaporMax, SB, Flyknit, Air Max Plus, Air Max 270, Air Max 90, Air Max 95, Air Max 97)->