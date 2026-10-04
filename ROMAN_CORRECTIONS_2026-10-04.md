# Compte rendu de correction — Les Morts n’ont plus de visage

Passe complète de cohérence du 4 octobre 2026, enregistrée dans le projet officiel sur `main`.

## Source et structure réellement présentes
La lecture initiale a porté sur le texte du dépôt au commit `0df438571357f38206caf92e0ad96c007bf36a80`. Les changements d’interface intervenus pendant le travail ont été récupérés : le commit parent retenu est `f30b2f6a7cd09b68db6ad40d1b8d2e1fbe176a72`. Les données du roman étaient identiques entre ces deux états. Aucun ancien export ni ancien ZIP du roman n’a servi de source.

Le dépôt contient **un prologue, 24 chapitres numérotés, un épilogue et le chapitre spécial « Chapitre 1 — Seconde lecture »**. Il n’existe pas de chapitres numérotés 25, 26 et 27. Les **27** sont les pièces d’enquête. Tout le contenu officiel a été traité ; sa structure a été conservée.

Le ZIP fourni a servi d’audit. Ses 125 signalements uniques ont été lus avec leur contexte ; les copies par chapitre et dans le rapport complet ont été comparées et ne contenaient aucun signalement supplémentaire.

## Emplacements identifiés avant modification
| Contenu | Emplacement officiel | Traitement |
|---|---|---|
| Prologue, 24 chapitres, épilogue | `index.html`, JSON `bookData`, `pages` de type `text` | Corrections des chaînes `paragraphs` uniquement |
| Chapitre spécial | `index.html`, fonction `buildSecondReading()` | Même reprise du chapitre 1 ; deux textes narratifs corrigés, fonction et marquages inchangés |
| Manuscrit de lecture | `ROMAN_V2_MANUSCRIT.md` | Synchronisé avec le texte actuel de l’application ; ancienne annexe remplacée par le spécial effectivement présent dans l’application |
| Pièces intégrées au dossier | `index.html`, `EVIDENCE_ITEMS` et points d’entrée dans la lecture | Huit entrées multimédias, titres, URL, identifiants et points d’entrée inchangés |
| Fiches personnages | `index.html`, `CHARACTERS` | Neuf fiches et conditions d’apparition inchangées |
| Les 27 pièces judiciaires du récit | Chapitres, surtout 19–24 ; `ROMAN_V2_27_PIECES.md` | Contenu et progression narrative clarifiés |
| Références internes | `ROMAN_V2_BIBLE.md`, `ROMAN_V2_CONTINUITE_FINALE.md` | Canon, chronologie et connaissances synchronisés |
| Anciennes scènes d’expansion | `ROMAN_V2_PASSE_FINALE.md` | Corps historique conservé ; statut d’archive explicité pour empêcher une réintégration erronée |

## Décisions sur l’audit
- **113 signalements textuels traités** par des corrections ou qualifications du récit.
- **2 signalements traités dans leur volet textuel**, avec conservation des éléments de fonctionnement ou de présentation : F34 et F39.
- **1 écho volontaire conservé** : F122, « Qui êtes-vous ? ».
- **9 signalements médias hors périmètre**, laissés intacts : F31–33, F35–37, F103–105. Ils ne sont pas présentés comme corrigés.

Le détail F01–F125 figure plus bas. « Texte traité » signifie que le problème a été confronté au canon et que le passage a été adapté ; cela n’implique pas la suppression de toute anomalie apparente.

## Principales corrections
- Élodie est bien la jeune interne des urgences ; les déclarations initiales de Clara sont compatibles avec ses témoignages ultérieurs.
- La mort de Mathieu précède les Morel de onze jours. Les appels, signatures, annotations et contacts ultérieurs proviennent de systèmes programmés, de comptes compromis ou d’un utilisateur inconnu. Ils ne prouvent pas qu’il est vivant et ne prédisent pas les détails du massacre.
- La falsification centrale porte sur le **rapport numérique associé au verre**, pas sur la disparition d’un second sachet : le vrai 81 reste au dépôt ; le 87 est une référence numérique fabriquée. La discordance du chapitre 19 précède la démonstration et l’analyse indépendante du chapitre 20.
- Gabriel ne connaît plus involontairement des découvertes futures. Souvenirs incomplets, hypothèses et certitudes des personnages sont distingués. Les cinquante-deux secondes ne deviennent pas une mesure certifiée à partir d’un nom de fichier.
- La nuit des Morel raccorde départ du fourgon, hall, Bluetooth, présence chez Emma, coupure de **11 min 17 s**, blessure en bas, lutte à l’étage, retour du fourgon et restauration achevée à 4 h 11.
- La vidéo 25 conserve deux points de vue distincts et s’arrête avant le meurtre. Son authenticité ne fournit pas à elle seule une innocence absolue. L’audio 26 reste indécidable ; la connaissance anticipée de son contenu par Hélène est une anomalie volontaire remarquée par Gabriel.
- Le protocole suit **010 → clé 27 → vidéo 25 → audio 26**, puis une notification d’achèvement. La disponibilité, l’intégration et l’utilisation de la clé ne sont plus trois premières découvertes contradictoires.
- Les révélations sur Sarah, Noé, le faux décès, la sédation et le bracelet ont un premier moment identifiable. Les passages ultérieurs sont des confirmations, comparaisons ou reprises émotionnelles.
- Les dates, horaires, déplacements, sacs, billets, boîtes, téléphones, sources d’images et scènes reprises après coup ont été raccordés. Les analepses utiles sont annoncées.

## Problèmes supplémentaires trouvés pendant les relectures
- Gabriel et Emma parlaient de Mathieu comme officiellement mort dans la nuit du 3 octobre, avant la découverte de son corps : désormais ils se fondent sur un message qui l’annonce, sans preuve officielle.
- Des exemples de souvenirs au chapitre 12 citaient des phrases retrouvées seulement au chapitre 20 : remplacés par des fragments déjà disponibles.
- Une grossesse de Sarah était explicitée avant son récit du chapitre 8 : l’indice antérieur est conservé sans révélation prématurée.
- Les « huit verres » étaient comptés comme sept dans la cuisine plus ceux de la table : répartition quatre plus quatre rétablie.
- Une comparaison familiale d’ADN ne permettait pas de désigner toutes les femmes d’une lignée de la manière décrite : la portion mitochondriale exploitable et sa limite sont explicitées, sans identifier une personne.
- Le message de Cazeneuve confondait expéditeur et destinataire identifiable ; les entrées de son journal médical étaient dans le désordre.
- Les contacts directs entre Théo et Hélène étaient dits interrompus après la mort de Mathieu tout en se poursuivant la nuit des Morel : l’interruption se situe après cette nuit.
- Un examen de la plaie avait été ajouté avant la visite médicale déjà présente : l’examen est intégré à cette visite, avec datation incertaine.
- L’audition de 7 h 12 replaçait Gabriel au commissariat alors que les constatations sur place continuaient : l’audition préliminaire est située sur place.
- Des dialogues et comptes rendus adoptaient trop vite des conclusions absolues à partir de traces partielles ; leur portée a été rectifiée.

## Anomalies volontairement conservées
La vanille, la connaissance physique du seuil, les réactions de Sarah, la batterie à 68 %, le redémarrage, le disque vide étiqueté, les photos mutilées, la présence blanche dans la photographie, les voix ressemblantes, la météo reconstruite, les messages signés « M », le compte posthume et les versions divergentes de souvenirs restent des éléments de doute.

La double formulation « il faut qu’il voie / vive », le souvenir du verre, les voix autour de « Regarde-moi » et l’audio de cinq secondes gardent leur ambiguïté maîtrisée. Le compte Observer n’obtient pas une identité arbitraire. La cause finale de la mort de Clara, le coup de 2009, le sort du film et l’attribution de certains homicides restent explicitement ouverts, avec les limites des preuves décrites. Les pistes Philippe Serra, fausse intérimaire, femmes boitant, Clio et silhouettes ont une place dans le bilan au lieu de disparaître.

## Préfigurations et chapitre spécial
Une petite croûte au-dessus de l’oreille, remarquée par Martin puis Sarah et examinée ensuite, prépare la blessure de la nuit. Gabriel donne l’explication du placard comme une croyance, sans transformer cet ajout en preuve certaine.

Les indices décisifs du chapitre 1 ont été préservés : **5 h 26, voix, tenue blanche, caisse, pas de côté, silhouette photographiée, nom non demandé**. La dernière phrase évite les révélations explicites prématurées sur toute la nuit.

Le spécial garde sa vérité fondamentale et la phrase « Personne ne regarde ceux qui regardent ». Son texte distingue le départ à 3 h 29 du retour déguisé puis de la sortie à 5 h 26. Il exprime la reconnaissance de Gabriel et son aveuglement devant une fonction. Son introduction et l’épilogue décrivent une relecture éclairée par le contexte ; ils ne promettent plus un cryptogramme formé par des effacements arbitraires. Les effets visuels et tableaux de marquage sont inchangés.

## Relectures et vérifications
- Chapitre spécial lu intégralement avant toute modification ; vérité et chronologie de contrôle écrites avant la réécriture.
- Lecture intégrale de la version officielle initiale, puis lecture suivie de toutes les sections corrigées du prologue à l’épilogue.
- Relecture du spécial corrigé, retour intégral au chapitre 1, retour aux premières apparitions et indices majeurs avec connaissance du canon.
- Corrections supplémentaires découvertes pendant cette passe appliquées et relues dans leur contexte ; contrôle transversal des personnages, preuves, dates et horaires renouvelé.
- Le chapitre 1 fonctionne après révélation : ses détails ne changent pas, mais leur interprétation change. Le spécial est raccordé à **toutes les sections réellement présentes**.
- Le roman principal passe de **69 978 à 74,173 mots**, avec **496 paragraphes modifiés**. Les scènes ne sont pas transformées en résumés.
- Comparaison exacte de l’application en dehors du JSON narratif et des deux chaînes du spécial ; métadonnées et positions de tous les paragraphes inchangées. Vérification de syntaxe des scripts et synchronisation du manuscrit.

## Fichiers réellement modifiés
1. `index.html` — texte du roman et deux chaînes narratives du spécial.
2. `ROMAN_V2_MANUSCRIT.md` — texte actuel synchronisé et spécial.
3. `ROMAN_V2_BIBLE.md` — référence canonique.
4. `ROMAN_V2_27_PIECES.md` — fonctions et progression des preuves.
5. `ROMAN_V2_CONTINUITE_FINALE.md` — chronologie et connaissances.
6. `ROMAN_V2_PASSE_FINALE.md` — statut d’archive seulement.
7. `ROMAN_CORRECTIONS_2026-10-04.md` — présent rapport.

**Aucun asset graphique, image, illustration, couverture, logo, icône, vidéo, audio, musique ou animation n’a été modifié, déplacé, renommé, supprimé ou remplacé. Aucun CSS, couleur, police, dimension, menu, navigation, lecteur audio, plein écran, PWA ou fonction existante n’a été modifié.** Les mises à jour visuelles du parent courant sont conservées.

Les marquages visuels du spécial et l’aria-label mentionnés par F34/F39 restent inchangés. Les corrections textuelles satisfont la cohérence narrative sans intervenir sur ces éléments de l’application.

## Détail des 125 signalements
Les références § ci-dessous utilisent les indices de paragraphes du JSON, à partir de zéro, pour permettre de retrouver directement les passages sans déplacer leurs points d’entrée.

| Audit | Sujet signalé | Décision | Passages traités / justification |
|---|---|---|---|
| F01 | Ch6 §570-601 ↔ Ch9 §62-66, §102-104, §338-355 | Texte traité | Ch. 6 §§ 502, 570, 587, 601 ; Ch. 9 §§ 65 |
| F02 | Ch19 §317-346 ↔ Ch20 §0-48 et §164-169 ↔ Ch9 §421-424 ↔ Ch13 §255-259 ↔ Ch1 §475-477 | Texte traité | Ch. 1 §§ 475 ; Ch. 3 §§ 204 ; Ch. 9 §§ 423, 424 ; Ch. 13 §§ 264 ; Ch. 19 §§ 132, 133, 134, 318, 344 ; Ch. 20 §§ 8, 164 |
| F03 | Prologue §19-24 ↔ Ch4 §154-155 ↔ Ch5 §240-242 | Texte traité | Prologue §§ 19, 22, 32 |
| F04 | Ch9 §332-355 | Texte traité | Ch. 9 §§ 332, 351, 353, 355, 356 |
| F05 | Ch22 §180-199 | Texte traité | Ch. 5 §§ 260 ; Ch. 6 §§ 332, 334, 349, 371 ; Ch. 9 §§ 199 ; Ch. 12 §§ 232 ; Ch. 19 §§ 52 ; Ch. 22 §§ 183, 187, 188, 190, 196, 199 |
| F06 | Ch9 §177 ↔ Ch17 §132 ↔ Ch19 §309-316 ↔ Ch21 §66 | Texte traité | Ch. 9 §§ 177, 178 ; Ch. 17 §§ 132 |
| F07 | Ch17 §277-284 ↔ Ch17 §90-102 | Texte traité | Ch. 17 §§ 279, 280, 281, 284 |
| F08 | Ch17 §205, §237, §299 ↔ §349-361 | Texte traité | Ch. 17 §§ 205, 299, 349 |
| F09 | Ch17 §413-416 | Texte traité | Ch. 17 §§ 413, 415, 420 |
| F10 | Ch6 §245-254 ↔ Ch16 §261-272 ↔ Ch17 §465-469 ↔ Ch18 §247-253 | Texte traité | Ch. 16 §§ 268, 270, 272 ; Ch. 17 §§ 469 ; Ch. 18 §§ 253 |
| F11 | Ch17 §171-180 ↔ Ch10 §195 ↔ Ch18 §457-461 | Texte traité | Ch. 17 §§ 176 ; Ch. 18 §§ 459, 460 |
| F12 | Ch18 §3-128 | Texte traité | Ch. 18 §§ 38, 46, 47, 87, 108 |
| F13 | Ch20 §30-90 | Texte traité | Ch. 20 §§ 74, 75, 76, 78 |
| F14 | Ch19 §194-197, §228-231 ↔ Ch22 §473, §539 ↔ Ch23 §0-15 | Texte traité | Ch. 19 §§ 194, 195, 197, 226, 369 ; Ch. 20 §§ 343, 346 ; Ch. 23 §§ 0, 330 |
| F15 | Ch23 §306-315, §446 | Texte traité | Ch. 23 §§ 306, 307, 318 |
| F16 | Ch23 §47-166 ↔ Ch20 §311-336 ↔ Ch21 §307-315 | Texte traité | Ch. 20 §§ 315, 320 ; Ch. 22 §§ 435, 436, 437, 438 |
| F17 | Ch21 §28-34 ↔ Ch22 §55-62, §526-531, §572-582 ↔ Ch23 §369 | Texte traité | Ch. 21 §§ 30, 31, 34 ; Ch. 22 §§ 55, 57, 63, 525, 526, 529, 574, 576, 579 ; Ch. 23 §§ 42, 369 |
| F18 | Ch22 §388-392 ↔ Ch12 / Ch13 §168-176 / Ch18 §233-243 | Texte traité | Ch. 22 §§ 388, 389 |
| F19 | Ch22 §621-638 ↔ Ch23 §246-250, §420 ↔ Ch24 §188-191, §280-281 ↔ Ch1-Ch4 | Texte traité | Ch. 1 §§ 51, 93, 237 ; Ch. 2 §§ 110 ; Ch. 22 §§ 621 ; Ch. 23 §§ 226, 246, 250 ; Ch. 24 §§ 188, 189, 190, 269, 281 |
| F20 | Ch2 §456 ; Ch14 §318-320 ; Ch16 §330-337, §388-402, §401-435 ; Ch17 §442-445 ; Ch14 §370 ; Ch20 §227-240 ; Ch1 §100, §367-381, §437-446 | Texte traité | Ch. 17 §§ 354 ; Ch. 20 §§ 233 ; Ch. 24 §§ 119, 299, 301, 509, 514, 515 |
| F21 | Ch6 §137-157, §222-233, §261-265, §281-292, §557-558 ; Ch5 §284-285 ; Ch7 §355 | Texte traité | Ch. 5 §§ 284, 285 ; Ch. 6 §§ 157, 222, 233, 261, 262, 264, 271, 274, 281, 286, 288, 292, 293, 295, 299, 300, 301, 302, 303, 310, 558, 560, 587, 601 ; Ch. 7 §§ 355, 356 ; Ch. 9 §§ 86, 88, 94, 96 ; Ch. 10 §§ 409, 410 ; Ch. 13 §§ 73, 75, 76 |
| F22 | Ch7 §171-173 ↔ Ch5 §244-248 | Texte traité | Ch. 7 §§ 171, 172, 173, 175 |
| F23 | Ch6 §466-468 ↔ Ch7 §258-261 ↔ Ch8 §44-51, §232-246 | Texte traité | Ch. 6 §§ 466, 468 ; Ch. 7 §§ 261 ; Ch. 8 §§ 44, 45, 50, 51 |
| F24 | Ch8 §281-284 ↔ Ch12 §336-345 ↔ Ch13 §41-49, §268-276 ↔ Ch18 §442-447 ↔ Ch22 §526-531 | Texte traité | Ch. 8 §§ 278 ; Ch. 12 §§ 324, 326, 336 ; Ch. 13 §§ 42, 45, 70, 72 ; Ch. 22 §§ 529 |
| F25 | Ch19 §362-369 | Texte traité | Ch. 19 §§ 225, 365, 366, 367, 369 |
| F26 | Ch11 §57-71 ; Ch10 §43-45 ; Ch11 §343-345 ; Ch24 §84-97 | Texte traité | Ch. 10 §§ 343 ; Ch. 11 §§ 57, 63, 65, 69 |
| F27 | Ch14 §26-29, §192-193, §241-246, §296-318 | Texte traité | Ch. 14 §§ 26, 27, 28, 310 |
| F28 | Épilogue §286-301 ↔ Ch20 §105-111, §129-131 | Texte traité | Épilogue §§ 293, 294, 295, 296, 297, 298, 301, 309, 311, 312 |
| F29 | Ch17 §228-233 ↔ Ch14 §41-64 | Texte traité | Ch. 17 §§ 229, 232, 233 |
| F30 | Ch1 §15-16 ↔ Ch1 §474-477 (et seconde lecture) | Texte traité | Ch. 1 §§ 475, 476, 477 |
| F31 | MÉDIA — Prologue01.png (illustration du Prologue) et Incrustationromanprologues01.png (« Photo reçue — 1 h 36 ») | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F32 | MÉDIA — Chapitre01002.png (« Photographie de famille — Emma ») | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F33 | MÉDIA — Chapitre 01005.png (« Photo reçue — devant la maison ») | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F34 | SECONDE LECTURE (Chapitre 1 caché) — marquage des paragraphes | Volet textuel traité | Épilogue §§ 387, 388, 390 ; introduction et révélation du spécial reformulées ; effets visuels inchangés. |
| F35 | MÉDIA — Pièce003_bureau_Emma_corrigée.png | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F36 | MÉDIA — Chapitre01.png | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F37 | MÉDIA — Prologue01.png | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F38 | SECONDE LECTURE — révélation finale | Texte traité | Épilogue §§ 388 |
| F39 | SECONDE LECTURE — déverrouillage | Volet textuel traité | Ch. 19 §§ 197, 272 ; clôture du récit alignée ; déblocage et aria-label inchangés. |
| F40 | Ch2 §163-164 ↔ §237-238 | Texte traité | Ch. 2 §§ 164 |
| F41 | Ch2 §189 ↔ Ch1 §262-263 | Texte traité | Ch. 2 §§ 186, 189 ; Ch. 19 §§ 117 |
| F42 | Ch3 §29, §103, §158, §228, §248 ↔ Ch2 §329 | Texte traité | Ch. 3 §§ 29, 103, 158, 228, 248 |
| F43 | Ch3 §262 | Texte traité | Ch. 3 §§ 262 |
| F44 | Ch3 §266 (↔ Ch3 §335) | Texte traité | Ch. 3 §§ 266 |
| F45 | Ch3 §258-259 | Texte traité | Ch. 3 §§ 229 |
| F46 | Ch4 §96-102 | Texte traité | Ch. 4 §§ 98 |
| F47 | Ch4 §122-124 ↔ Ch1 §196 ↔ Ch2 §227 | Texte traité | Ch. 2 §§ 217, 227 ; Ch. 4 §§ 122, 124 |
| F48 | Ch4 §18 | Texte traité | Ch. 13 §§ 222 |
| F49 | Ch5 §181, §275-276 ↔ Ch9 §251-257 | Texte traité | Ch. 5 §§ 275, 276 |
| F50 | Ch5 §200-203 ↔ §192 | Texte traité | Ch. 5 §§ 200, 203 |
| F51 | Ch5 §121-127, §167 | Texte traité | Ch. 5 §§ 121, 158, 167 |
| F52 | Ch5 §307 | Texte traité | Ch. 5 §§ 307 |
| F53 | Ch6 §12 ↔ §71 | Texte traité | Ch. 6 §§ 12 |
| F54 | Ch6 §18-21 ↔ §627-638 | Texte traité | Ch. 6 §§ 626 |
| F55 | Ch6 §372-386 ↔ Ch5 §8 | Texte traité | Ch. 6 §§ 373 |
| F56 | Ch6 §348 ↔ Prologue | Texte traité | Prologue §§ 186 |
| F57 | Ch6 §415-416 ↔ Ch5 §244 | Texte traité | Ch. 6 §§ 416 |
| F58 | Ch7 §15 ↔ §422 | Texte traité | Ch. 7 §§ 15 |
| F59 | Ch7 §128-129 ↔ §200-201 | Texte traité | Ch. 7 §§ 128 |
| F60 | Ch7 §135-141 ↔ Prologue §60-65 | Texte traité | Prologue §§ 53 |
| F61 | Ch8 §30-71 | Texte traité | Ch. 8 §§ 44, 45, 52, 56 |
| F62 | Ch8 §281 ↔ Ch5/Ch6 | Texte traité | Ch. 8 §§ 278, 281 |
| F63 | Ch8 §448 ↔ Ch15 §79-80 ↔ Ch21 §193-203 | Texte traité | Ch. 15 §§ 80 ; Ch. 21 §§ 193, 195, 202 |
| F64 | Ch9 §121-126 | Texte traité | Ch. 9 §§ 122 |
| F65 | Ch10 §207-221 | Texte traité | Ch. 10 §§ 217 |
| F66 | Ch10 §225-236 ↔ Ch7 §22 ↔ Ch6 §198-201 | Texte traité | Ch. 7 §§ 22 ; Ch. 10 §§ 224, 225, 226 |
| F67 | Ch10 §301 ↔ §274 | Texte traité | Ch. 10 §§ 301 |
| F68 | Ch11 §85-94 ↔ §252 | Texte traité | Ch. 11 §§ 252 |
| F69 | Ch11 §358-360 ↔ §153 | Texte traité | Ch. 11 §§ 253, 357, 358, 360 |
| F70 | Ch11 §440-447 | Texte traité | Ch. 11 §§ 440 |
| F71 | Ch12 §217-232 | Texte traité | Ch. 12 §§ 217, 232 |
| F72 | Ch12 §403-407 | Texte traité | Ch. 12 §§ 403 |
| F73 | Ch14 §330-334 ↔ Ch15 §285-296 ↔ Ch7 §177-178 ↔ Épilogue §248 | Texte traité | Ch. 14 §§ 334 ; Ch. 15 §§ 287, 294, 295, 296 ; Épilogue §§ 248 |
| F74 | Ch14 §385-386 ↔ §96-110 | Texte traité | Ch. 14 §§ 385, 386, 387 ; Ch. 22 §§ 304, 305, 306 |
| F75 | Ch15 §345-352 | Texte traité | Ch. 15 §§ 345, 346, 348, 350, 352 |
| F76 | Ch15 (calendrier) | Texte traité | Ch. 15 §§ 0 ; Ch. 19 §§ 0 |
| F77 | Ch16 §94-122 ↔ §230-238 ; Ch12 §257-258 | Texte traité | Ch. 12 §§ 258 ; Ch. 16 §§ 94 |
| F78 | Ch16 §310-316, §344-354, §385-391 | Texte traité | Ch. 16 §§ 310, 353, 386 |
| F79 | Ch17 §104 ↔ Ch3 §56 | Texte traité | Ch. 3 §§ 35 ; Ch. 9 §§ 344 ; Ch. 17 §§ 104 |
| F80 | Ch18 §372-375 ↔ Ch16 | Texte traité | Ch. 18 §§ 372 |
| F81 | Ch19 §52-55 ↔ §307 ↔ Ch1 §253 | Texte traité | Ch. 19 §§ 52, 307 |
| F82 | Ch19, Ch20 | Texte traité | Ch. 19 §§ 0 |
| F83 | Ch20 §45, §65, §194 ↔ §106-111 | Texte traité | Ch. 19 §§ 318 ; Ch. 20 §§ 45, 46, 47, 166 |
| F84 | Ch20 §215-224, §245-256 | Texte traité | Ch. 20 §§ 247, 254, 255, 256 |
| F85 | Ch21 §136 ↔ Ch15 §76-106 | Texte traité | Ch. 21 §§ 136 |
| F86 | Ch21 §101-123, §361-369 | Texte traité | Ch. 21 §§ 253, 270, 328, 366, 369, 370, 372 |
| F87 | Ch22 §104-106, §155 ↔ Ch21 §220-224 | Texte traité | Ch. 22 §§ 107, 155 |
| F88 | Ch22 §84-91 ↔ Ch17 §133-134 | Texte traité | Ch. 22 §§ 84, 85 |
| F89 | Ch22 §455-476 | Texte traité | Ch. 22 §§ 468, 469, 470, 471, 473, 482 |
| F90 | Ch22 §640 ↔ Ch24 §181 | Texte traité | Ch. 22 §§ 640 |
| F91 | Ch23 §49 ↔ §97-111, §192-195 ; Ch17 §216-223 | Texte traité | Ch. 17 §§ 217 ; Ch. 23 §§ 49, 269, 271, 299 |
| F92 | Ch23 §461-477 ↔ §47-166 | Texte traité | Ch. 23 §§ 461, 462, 471, 472 |
| F93 | Ch23 §272-279 ↔ §460-476 | Texte traité | Ch. 23 §§ 269, 278, 279, 471, 472 |
| F94 | Ch24 §133-137 ↔ §270-274 | Texte traité | Ch. 24 §§ 134, 274 |
| F95 | Ch24 §321-324 ↔ §393-394 | Texte traité | Ch. 24 §§ 321 |
| F96 | Ch24 §490 ↔ Ch23 §0-2 | Texte traité | Ch. 24 §§ 490, 491, 492 |
| F97 | Ch24 §312-313 ↔ Ch18 §302, §424 ↔ Ch22 §218 | Texte traité | Ch. 24 §§ 313 |
| F98 | Ch24 §423-428 ↔ Ch6 §49-50, Ch13 §168-176 | Texte traité | Ch. 24 §§ 422 |
| F99 | Épilogue §162-197 ↔ Ch8 §44-51, §437-448 | Texte traité | Épilogue §§ 162, 164, 187, 196 |
| F100 | Épilogue §50-64 ↔ Ch9 | Texte traité | Épilogue §§ 52, 62 |
| F101 | Ch5 §43 ↔ Ch1 §152-159 | Texte traité | Ch. 5 §§ 43 ; Ch. 20 §§ 221 |
| F102 | Ch23 §320 ↔ Ch17 §114-117 | Texte traité | Ch. 23 §§ 318, 320, 321 |
| F103 | MÉDIA — Chapitre 01001.png (PIÈCE 010) | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F104 | MÉDIA — app-icon.jpg (et icon-192/512.svg qui l’incorporent) | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F105 | MÉDIA — Page d’accueil .png (couverture) | Hors périmètre médias | Asset ou contenu vidéo conservé conformément à la consigne ; aucune modification média. |
| F106 | Prologue §155 | Texte traité | Prologue §§ 155 |
| F107 | Ch1 §407 (6 h 38) | Texte traité | Ch. 1 §§ 407 |
| F108 | Ch1 §195-200 | Texte traité | Ch. 1 §§ 197, 240 |
| F109 | Ch2 §402-403, §444 | Texte traité | Ch. 2 §§ 402, 444 |
| F110 | Ch3 §194-206 | Texte traité | Ch. 3 §§ 204, 205, 206 |
| F111 | Ch3 §255 | Texte traité | Ch. 3 §§ 255 |
| F112 | Ch4 §12 ↔ §287 | Texte traité | Ch. 4 §§ 287 |
| F113 | Ch7 §285 ; Ch12 §233 ↔ §376 | Texte traité | Ch. 7 §§ 285 ; Ch. 12 §§ 233, 367, 376 |
| F114 | Ch8 §243 ↔ Ch6 §466 ; Ch8 §309 ↔ §431-444 | Texte traité | Ch. 6 §§ 466 ; Ch. 8 §§ 309 |
| F115 | Ch9 §241-246 | Texte traité | Ch. 9 §§ 246 |
| F116 | Ch15 §317-320 | Texte traité | Ch. 15 §§ 320 |
| F117 | Ch16 §22, §326-337 ↔ Ch13 | Texte traité | Ch. 16 §§ 330 |
| F118 | Ch18 §84, §147, §171-177 ; §154-157 ↔ Ch14 §161 | Texte traité | Ch. 18 §§ 157, 173 |
| F119 | Ch20 §161 ↔ Ch19 §243 | Texte traité | Ch. 20 §§ 106 |
| F120 | Ch20 §164, §316-335 | Texte traité | Ch. 20 §§ 315, 335 |
| F121 | Ch21 §3, §65, §175 | Texte traité | Ch. 19 §§ 53 ; Ch. 21 §§ 3, 72 |
| F122 | Ch22 §336 ↔ Ch17 §447 | Écho conservé | Question commune à Gabriel et Hélène ; reprise volontaire, sans connaissance impossible. |
| F123 | Ch23 §216 ↔ Ch21 §65-74 | Texte traité | Ch. 23 §§ 213, 214 |
| F124 | Ch1 §100 (alarme 23 h 52) | Texte traité | Ch. 24 §§ 118, 119 |
| F125 | Ch17 §248, §423, §387-393 | Texte traité | Ch. 17 §§ 247, 248, 387, 423, 424 |

## Référence de contrôle
La chronologie à huit colonnes et la progression des connaissances figurent dans [ROMAN_V2_CONTINUITE_FINALE.md](ROMAN_V2_CONTINUITE_FINALE.md). Le [manuscrit synchronisé](ROMAN_V2_MANUSCRIT.md) permet de lire le texte corrigé indépendamment de l’application.
