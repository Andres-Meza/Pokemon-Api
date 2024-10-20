# Pokémon Api

## Descripción

Pokémon Team Manager es una aplicación web desarrollada en React que permite a los usuarios buscar Pokémon, visualizar detalles de cada uno y añadirlos o eliminarlos de un equipo personalizado. Los usuarios también pueden marcar los Pokémon como vistos. El diseño de la aplicación es minimalista, con un tema oscuro que hace que la interfaz sea agradable a la vista.

## Funcionalidades

- Buscar Pokémon por nombre
- Visualizar detalles de un Pokémon (tipo, habilidades, altura, peso)
- Añadir o eliminar Pokémon de un equipo personalizado
- Marcar Pokémon como vistos

## Tecnologías utilizadas

- **React**: Biblioteca principal para la creación de la interfaz de usuario.
- **CSS**: Para el diseño visual de los componentes.
- **Pokémon API**: Para obtener la información de los Pokémon en tiempo real.
- **Vite**: Para la configuración del entorno de desarrollo rápido y eficiente.

## Instalación

Sigue los siguientes pasos para clonar e instalar el proyecto en tu entorno local:

1. Clona el repositorio:
```bash
git clone https://github.com/Andres-Meza/pokemon-api.git
```
2. Navega a la carpeta del proyecto:
```bash
cd pokemon-team-manager
```
3. Instala las dependencias del proyecto:
```bash
npm install
```
4. Inicia el servidor de desarrollo:
```bash
npm run dev
```
5. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
pokemon-team-manager/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── PokemonCard.jsx  # Tarjeta que muestra los detalles de un Pokémon
│   │   ├── PokemonList.jsx  # Lista de Pokémon con opción de búsqueda
│   ├── styles/              # Archivos CSS
│   │   └── PokemonCard.css  # Estilos específicos para la tarjeta de Pokémon
│   ├── App.jsx              # Componente principal de la aplicación
│   └── index.jsx            # Punto de entrada de la aplicación
├── package.json             # Dependencias y scripts del proyecto
└── README.md                # Información del proyecto (este archivo)
```

## Cómo usar la aplicación

1. **Buscar un Pokémon**: Escribe el nombre del Pokémon en la barra de búsqueda para encontrar un Pokémon específico.
2. **Ver detalles**: Haz clic en el nombre de cualquier Pokémon para ver sus detalles como tipo, habilidades, altura y peso.
3. **Añadir o eliminar del equipo**: Usa el botón "Add to Team" o "Remove from Team" en la tarjeta de detalles de Pokémon para añadirlo o eliminarlo de tu equipo.
4. **Marcar como visto**: Puedes marcar un Pokémon como visto con el botón "Mark as Seen".

## Contribución

Si deseas contribuir al proyecto, sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tu nueva funcionalidad o arreglo de bug:

```bash
git checkout -b feature/nueva-funcionalidad
```

3. Realiza tus cambios y crea un commit:

```bash
git commit -m "Añadida nueva funcionalidad"
```

4. Sube tus cambios a tu repositorio fork:

```bash
git push origin feature/nueva-funcionalidad
```

5. Crea un pull request en el repositorio principal.

## Créditos

- Proyecto desarrollado por [Andres Meza](https://github.com/usuario).
- Información de Pokémon obtenida de la [Pokémon API](https://pokeapi.co/).

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).