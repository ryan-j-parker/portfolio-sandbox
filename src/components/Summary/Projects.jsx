export const Projects = [
  {
    id: 0,
    name: 'Sound Palette',
    image: 'sound-palette',
    description:
      'An interactive music app that renders color gradients in a dynamic 3D environment when notes are played on a virtual piano keyboard. Built with a team of 5 in a 4-day sprint, using React, React Three Fiber, React Piano, the Soundfont audio library, and the WebAudio API. Users can customize their experience with a GUI built with Leva, which allows for modifications to the 3D geometries, materials, color, lighting, and more. The app also includes a comprehensive walkthrough tutorial!',
    tools: ['react', 'threejs-white', 'javascript', 'css'],
    personal:
      'My primary contributions to this project were the creation of the 3D environment and the GUI. I also contributed to the audio engine, the keyboard, and the overall styling of the app, and led the efforts to refactor the SoundFont module for instrument sounds from a class component to a functional component.',
    github: 'https://github.com/ryanjeffrey/sound-palette',
    netlify: 'https://sound-palette.netlify.app/',
  },
  {
    id: 1,
    name: 'Collabo',
    image: 'collabo',
    description:
      'An open-source collaborative music platform that allows musicians to connect remotely and create and contribute to song projects. Built with a team of 4 in a 4-day sprint using vanilla JS, Supabase, and the Waveform Playlist API. Users can create and join projects, add tracks, and collaborate in real-time on the same project. Users can upload and download mp3 tracks and add tags for genre, tempo, time signature, and key. Built in a 4-day sprint with a team of 5.',
    tools: ['javascript', 'css', 'supabase'],
    personal:
      'My primary contributions to this app included building the landing page and the auth component. I also contributed to the overall styling of the app.',
    github: 'https://github.com/Collabo-Team/collabo',
    netlify: 'https://collabomusic.co/',
  },
  {
    id: 2,
    name: 'Marble Ninja Warrior',
    image: 'marble-runner',
    description:
      'A 3D platformer game built as a solo project in a 3-day sprint using React Three Fiber and the Rapier physics library. Game state is managed with Zustand and the game logic is handled through a central GameContext file. The game features a dynamic camera that follows the player, procedurally generated obstacles, and the length of the level can be updated by changing the value of a single variable.',
    tools: ['threejs-white', 'react', 'javascript', 'css'],

    personal:
      'My sister asked me to make her a game, so I used the opportunity to learn the Rapier physics library. I also wanted to create a game that was fun to play and share with others.',
    github: 'https://github.com/ryan-j-parker/r3f-game',
    netlify: 'https://marble-ninja-warrior.netlify.app/',
  },
  {
    id: 3,
    name: 'Escape From Terminal Forest',
    image: 'terminal-forest',
    description:
      'A command-line application in which users interact with objects to find clues to aid their escape from a cabin in the woods. Built with a team of 4 in a 4-day sprint using Express, Node, and PostgreSQL. Includes custom ASCII art, SQL tables for in-game objects, player items, and game state. Deployed on Heroku and published as an NPM package.',
    tools: ['postgresql', 'nodejs', 'express', 'heroku', 'adobe-photoshop'],

    personal:
      'For this project, I created a library of over 30 unique ASCII assets and wrote the conditional logic for their display based on game state. I also built the CLI and provided the styling for the app.',
    github: 'https://github.com/Terminal-Escape/terminal-frontend',
    netlify: 'https://terminalescaperoom.herokuapp.com',
  },
  {
    id: 4,
    name: 'Alchemy Tic-Tac-Toe',
    image: 'tic-tac-toe',
    description:
      'A React-built tic-tac-toe app with all game logic handled through a central GameContext file. Includes a custom hook for handling game state and a custom hook for handling the game board.',
    tools: ['react', 'javascript', 'css', 'html'],

    personal: 'This project was built as a way to learn React and to practice using custom hooks.',
    github: 'https://github.com/ryan-j-parker/react-tic-tac-toe',
    netlify: 'https://xs-vs-os.netlify.app/',
  },
  {
    id: 5,
    name: 'Flags of the World',
    image: 'world-flags',
    description:
      "Web app built with React, Supabase, and the Flagpedia API to render a searchable index of the world's flags. Filter alphabetically, by continent, or use the search bar to partially or completely match a country's name.",
    tools: ['react', 'supabase', 'css'],

    personal:
      'This project was built as a way to learn React and to practice fetching data from an API. Includes simple CSS and dropdown menus.',
    github: 'https://github.com/ryan-j-parker/react-countries',
    netlify: 'https://flags-of-earth.netlify.app/',
  },
  {
    id: 6,
    name: 'devPal',
    image: 'devPal',
    description:
      'Message-board app built with a team of 3 using React router and Supabase that allows authenticated users to add posts to a community message board. Also includes a user profile feature that allows users to see their past posts, update and delete posts, and change their profile picture.',
    tools: ['react', 'supabase', 'mui'],

    personal:
      'My primary contributions to this app include building an authentication page with user sign-up and sign-in options, creating routes for posting, fetching and updating user posts, styling the app with Material UI, and implementing the ts-particles library to create a dynamic background.',
    github: 'https://github.com/ryan-j-parker/react-crud',
    netlify: 'https://dev-pal.netlify.app/',
  },
  {
    id: 7,
    name: 'Color Router',
    image: 'color-router',
    description:
      'A simple React app that uses React Router to update the URL with RGB values and updates the background with the corresponding color.',
    tools: ['react', 'javascript', 'css', 'html'],
    personal:
      'This project was built as a way to learn React Router and uses template literals to update the URL.',
    github: 'https://github.com/ryan-j-parker/react-colors',
    netlify: 'https://color-router-react.netlify.app/',
  },
  {
    id: 8,
    name: '3x3x3 Algorithms',
    image: '3x3x3-algorithms',
    description:
      "A simple app that uses CSS grid to render CFOP method algorithms for the final two stages of solving a Rubik's cube. This is a static, single page site built with vanilla JavaScript making use of CSS grid.",
    tools: ['javascript', 'html', 'css'],

    personal:
      "This project was built as a way to learn CSS grid with the aim of helping a classmate learn Rubik's cube algorithms.",
    github: 'https://github.com/ryan-j-parker/3x3x3-algorithms',
    netlify: 'https://3x3x3-algorithms.netlify.app/',
  },
  {
    id: 9,
    name: 'Alchemy Astrology',
    image: 'zodiac',
    description:
      'A front-end application built with React that indexes through an array of items and renders them on the page',
    tools: ['react', 'css'],

    personal:
      'This project was built as a way to learn React and to practice using the map method.',
    github: 'https://github.com/ryan-j-parker/react-zodiac',
    netlify: 'https://alchemy-astrology.netlify.app/',
  },
  {
    id: 10,
    name: 'Pokemon Compendium',
    image: 'pokemon',
    description:
      'A compendium of Pokemon built with React and the Alchemy Pokemon API. Pokemon can be filtered by type and searched by name. Built in a 2-day sprint on a team of 2.',
    tools: ['react', 'css'],

    personal:
      'For this app, I developed the search bar and the filter by type functionality, and all styling for the app.',
    github: 'https://github.com/ryan-j-parker/react-pokemon',
    netlify: 'https://pokemon-compendium.netlify.app/',
  },
];
