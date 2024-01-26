Voici les éléments qui seront considérés connus pour l'examen et ne
feront pas l'objet de rappels. Cette fiche constitue uniquement le "minimum
vital" pour a minima comprendre les questions de l'examen.

# Python

- Affecter une variable.
- Définir une fonction avec des paramètres, renvoyant une valeur (`return`).
- Les compréhension de liste.

# Elm

- Définir une fonction
- Annotations de types
- Distinction type/valeur (vous devez être capable de dire pour chaque élément
  s'il s'agit de l'un ou l'autre).
- Fonctions anonymes
- L'opérateur "pizza" (ou "pipe") `|>`
- Les types et fonctions suivantes de la biliothèque standard:
  - `Int, String, Float, Bool, Char`
  - `List a` (les types commençant par une minuscule comme `a` représentent un type quelconque)
  - `List.map` (connaître sa signature !)
  - `Maybe a`
  - `Result err val`
  - `Value` dans le module `Json.Encode`
  - `Decoder a` dans le module `Json.Decode`
  - Dans le module `Json.Decode` (connaître les signatures !): `succeed`,
    `fail`, `map` , `andThen`
- `type alias`
- Les "records" :
  - en construire, accéder à un champ,
  - "mettre à jour" des champs `{ r | field1 = 42, field2 = 65 }`,
  - leur type
  - si un type record est défini par un `type alias MyRecord` alors
    `MyRecord` peut-être utilisé comme une fonction (une valeur).
- "custom type". Par exemple `type Shape = Point | Circle Float`.
  Note: `Shape` est un type, `Point` et `Circle` sont des valeurs.
  `Point` et `Circle` sont appelés les "variants" du type `Shape`.
- "The Elm Architecture" avec les fonctions `init`, `update` et `view` et les
  types `Model` et `Msg`.
- importer des module avec `import`, en les "aliasant" grâce à `as` et/ou
  rendant certaines valeurs du module accessible dans le fichier courant avec
  `exposing`.

Pour les autres fonctions de la bibliothèque standard, le sujet
fournira les signatures (et en cas d'ambiguïté quelques exemples).
Il faudra donc savoir lire ces signatures et être quelque peu familier
de ces fonctions.
