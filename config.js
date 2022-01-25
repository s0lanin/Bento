// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Fennel',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Up late?',

  // Weather
  weatherKey: '138a9354c4ce53348ba6d8ff20228795',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F',
  weatherLatitude: '18.017705',
  weatherLongitude: '-66.645080',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'SA Forums',
      icon: 'trash',
      link: 'https://forums.somethingawful.com/',
    },
    {
      id: '3',
      name: '4ch',
      icon: 'command',
      link: 'https://4chan.org/',
    },
    {
      id: '4',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://twitch.tv/',
    },
    {
      id: '5',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'book',
  secondListIcon: 'loader',

  // Links
  lists: {
    firstList: [
      {
        name: 'Canvas',
        link: 'https://nuc.instructure.com',
      },
      {
        name: 'NUC Portal Estudiantes',
        link: 'https://miportal.edukgroup.com/',
      },
      {
        name: 'Mic Test',
        link: 'https://webcammictest.com/check-mic.html',
      },
      {
        name: 'BibGuru',
        link: 'https://app.bibguru.com/p/7895ae76-c7f7-4e3e-a27b-a0c6de5b6a38',
      },
    ],
    secondList: [
      {
        name: 'wallhaven.cc',
        link: 'https://wallhaven.cc/',
      },
      {
        name: 'Fitgirl',
        link: 'https://fitgirl-repacks.site/',
      },
      {
        name: 'Vimm.net',
        link: 'https://vimm.net/?p=vault',
      },
      {
        name: 'The Hunger Site',
        link: 'https://thehungersite.greatergood.com/clicktogive/ths/home',
      },
    ],
  },
};
