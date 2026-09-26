# Nojoda Chica — propuesta visual

Mockup público y no oficial para explorar una web del podcast **Nojoda Chica**.

Vista publicada: https://nojoda-chica-concept.pages.dev/
No procesa pagos, no autentica miembros y no ofrece acceso a contenido privado.

## Contenido utilizado

- Perfil y enlaces oficiales: https://linktr.ee/nojodachica
- Canal de YouTube: https://www.youtube.com/channel/UC6_aVEBIdfagJT89nOoDJbw
- Patreon: https://www.patreon.com/NojodaChica
- Instagram: https://www.instagram.com/nojodachica/

Las imágenes locales son miniaturas de episodios públicos del canal de YouTube.
No se copiaron publicaciones de Instagram; esa sección enlaza al perfil oficial.
Los episodios se abren con el reproductor oficial de YouTube y tienen un enlace
directo de respaldo.

## Ver localmente

```sh
python3 -m http.server 8765
```

Abrir `http://localhost:8765/`. El sitio es HTML, CSS y JavaScript sin dependencias
de compilación.

## Alcance del prototipo

La entrada de Patreon abre su página actual. La opción de suscripción directa
muestra una explicación conceptual. Un producto real necesitaría autenticación,
verificación de membresía, pagos recurrentes y almacenamiento protegido para
episodios completos.
