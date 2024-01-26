Sont regroupés ici les concepts clefs à retenir de ce cours.

Tentez de répondre vous même à chacune de ces questions, avant d'aller vérifier sur d'autres sources.

Vous pouvez régulièrement faire un tour ici jusqu'à ce que ces notions soient familières.

## 01 Python Html

**Expliquer ce qu'est DSL**

Et donner au moins 1 exemple.

**Fonction en Python 101**

Écrire une fonction `evil_add` en Python prenant deux paramètres `a` et `b` et renvoyant `a+b+666`.

**Listes en Python 101**

Écrire une liste en python comprenant les éléments `42` (l'entier) et `"Hello world"`.

**Fonction pure (ou référentiellement transparente)**

Contre-exemple: donnez plusieurs exemples de fonctions "non-pure".

**Compréhension de liste ("list comprehension" en anglais)**

Exemple: disons qu'on a une liste de nombre `numbers` en python. Comment créer une liste `triples` qui triple chacun des éléments de `numbers`.

## 02 Elm Html

**Fonction en Elm 101**
Écrire une fonction `evil_add` en Elm prenant deux paramètres `a` et `b` et renvoyant `a+b+666`.

**Listes en Elm 101**

Peut-on créer une liste avec `42` (l'entier) et `"Hello world"` (la chaîne de caractère) en Elm ?
Si oui, faites le, sinon expliquez pourquoi.

**Que fait `List.map` ?**

**Appel de fonctions complexes**

Dans l'expression suivante, quelles variables sont forcément des fonctions ? Combien d'arguments
prennent elles ?

```
a b (c d e) (f (g h) i j k)
```

**Enregistrement ("record" en anglais)**

Définir un _record_ représentant un utilisateur dont le nom est "Charles-Édouard" et
l'âge est 42.

**Accès à un champ d'enregistrement**

J'ai une valeur `user`, comment ai-je accès au champ `age`?

**Annotation de types en Elm 101**

Annotez la fonction `evil_add`

**Types en Elm 102**

Définir un alias de type pour le record représentant un utilisateur comme Charles Edouard.

## 04 Elm TEA

1. Comment appelle-t-on respectivement "l'état" et "les événements" dans TEA ?

2. Dans "The Elm Architecture" quelle est la signature de la fonction `update` ?

3. ```elm
   person = { age = 42, name = "John", address = "Holywood", phone= "+1 666"}
   ```
   Quelle est la syntaxe pour créer un nouveau record qui contient les mêmes données, sauf que John a maintenant 43 ans.
4. Comment peut-on modifier des données en Elm ?

## 05 Calculator

1. Quel type peut-on utiliser pour indiquer qu'un calcul a échoué ? (Par exemple lorsqu'on cherche à convertir en nombre la chaîne de caractères `"Coucou!"`).

2. Écrire une fonction `viewMaybeInt : Maybe Int -> Html msg`, affichant un entier
   s'il y en a un, ou `"Pas d'pot, y a rien là !"` sinon.

3. Comment indiquer un "message d'erreur" lorsqu'un calcul a échoué ?

## 06 Make impossible states impossible

On modélise un processus de chargement avec le type suivant:

```
type alias Model = { isLoading : Bool, dataCorrectlyReceived : Bool }
```

(le champ `dataCorrectlyReceived` peut être à `False` par exemple si on a reçu
`"Coucou"` au lieu d'un entier)

1. Que penser de l'état `{ isLoading = True, et dataCorrectlyReceived = True }`?
2. Proposer une meilleure modélisation ne pouvant pas représenter cet état
   impossible.

## 07 Elm training

1. Quel type utiliser pour représenter un calcul qui a échoué ?

2. Pour chacun des éléments suivants, déterminer s'il s'agit d'un type
   ou d'une valeur: `Maybe Int`, `Just 42`, `Nothing`.
3. Ré-écrire en utilisant une fonction anonyme à la place de `isBig`:

   ```elm
   isBig x = x > 100

   keepBigNumbers numbers =
       List.filter isBig numbers
   ```

4. Ré-écrire en utilisant un pipe `|>`:
   ```elm
   doublePositive numbers =
       List.map (\x -> x*2) (List.filter (\x-> x >0) numbers)
   ```

## 08 Liste et Recursivité (optionnel)

1. Quelle est la différence entre l'opérateur `::` et l'opérateur `++` ?
2. Comment "déconstruire" une liste pour extraire son premier élément et
   le reste ?
3. Écrire `[5, 42, 3]` grâce uniquement à des entiers, le symbole `[]` et
   l'opérateur `::`.
4. Que signifie le `_` dans les différentes branches d'un `case` ?
5. Voici la définition (récursive) d'un type "arbre":

   ```elm
   type Arbre
      = Feuille Int
      | Noeud {gauche : Arbre, droite : Arbre }
   ```

   5.a. En quoi cette définition est-elle récursive ?

   5.b Dessiner une représentation schématique de l'arbre suivant :

   ```
    Noeud
      { gauche = Feuille 5
      , droite =
         Noeud
            { gauche =
                Noeud { gauche = Feuille 40, droite = Feuille 10 }
            , droite = Feuille 12
            }
      }
   ```

   5.c Écrire une fonction `somme : Arbre -> Int` qui somme toutes les
   valeurs sur les feuilles de l'arbre. Par exemple sur l'arbre ci-dessus,
   on doit trouver 27 (testez votre fonction dans le repl!).

## 09 JSON

1. Quels sont les 4 types "primitifs" de JSON ?
2. Quels sont les 2 types "composés" de JSON ?
3. Que représente le type `Value` du module `Json.Encode` en Elm ?
4. On rappelle la signature des fonctions suivantes :
   ```elm
   JE.string : String -> Value
   JE.int : Int -> Value
   JE.object : List (String, Value) -> Value
   ```
   Écrire une fonction qui convertit l'objet Elm suivant en objet
   JSON en conservant les noms des champs :
   `{ price = 42, productName = "computer" }`
5. Comment encoder encoder en JSON une valeur de type `Maybe Int` ?
6. On rappelle la fonction suivante :

   ```elm
   JE.list : (a -> Value) -> List a -> Value
   ```

   On suppose qu'on a déjà écrit une fonction:
   `encodeCustomer : Customer -> Value`
   Écrire la fonction suivante:

   ```elm
   encodeCustomers : List Customer -> Value
   ```

7. Écrire un décodeur `Decoder Float` pour récupérer la distance au soleil
   de ce JSON: `{ "name": "Earth", "distance_to_sun": 149000000}`
8. Écrire un type Elm et un décodeur pour représenter la totalité du JSON
   suivant : `{ "name": "Earth", "distance_to_sun": 149000000}`
9. Les noms des champs en JSON doivent ils correspondre aux noms des champs
   dans les record Elm ?
10. Écrire un encodeur et un décodeur pour le type suivant (vous pouvez utiliser
    des fonctions utilitaires pour découper le code):
    ```elm
    type User
      = Anonymous
      | LoggedIn { username : String, age : Int }
    ```

## 10 HTTP

1. Quelle est la signature de la fonction `update` dans le cas où on veut
   effectuer des "effets de bord" (comme un appel HTTP) ?
2. Quel partie du code effectue ces effets de bord ?
3. Ai-je un risque d'être victime d'une "attaque"
   (fuite de données vers un service malveillant, injection de code, ...)
   en utilisant une bibliothèque proposant les fonctions suivantes :

   ```elm
   complicatedComputation :
         { secretMode : Bool }
         -> Float
         -> Float
         -> Float

   launchRocket : Int -> String -> Html msg

   nextRainyDay : Cmd Date

   unsafeSolveEquation :
      (Float -> Float)
      -> Float
      -> Float
   ```

4. On veut construire une interface où l'utilisateur
   peut presser un bouton pour déclencher le chargement de données.
   Sur le côté, on veut afficher soit:
   - un message invitant l'utilisateur à cliquer,
   - un message indiquant que le contenu est en train de charger,
   - le contenu de la donnée chargée (une simple string),
   - un message d'erreur précis.
   Proposer un type `Model` permettant de modéliser cet état correctement sans
   introduire "d'états impossibles".
