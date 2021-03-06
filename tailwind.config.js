const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./{components,pages}/**/*.js"],
  theme: {
    extend: {
      colors: {
        clementine: "#EF7300",
        tumbleweed: "#D9A876",
        "hawkes-blue": "#C7DDFD",
        asparagus: "#789750",
        goldenrod: "#FFCE70",
        black: "#150703",
        "faded-black": "rgba(21,7,3,0.6)",
        "ecru-white": "#FAF8F3",
        "white-rock": "#E8E0CF",
        black: "#000"
      },
      height: {
        112: "28rem",
      },
      height: {
        '128': '90vh',
      },
      rotate: {
        '-25': '-25deg',
      },
      boxShadow: {
        'thank-you': '-2.63365px 5.92572px 8.55938px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["'EB Garamond'", ...defaultTheme.fontFamily.serif],
      'Lato': ['Lato', 'sans-serif'] 
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      borderRadius: ["hover"],
      fontStyle: ["hover"],
      textColor: ["checked"],
      rotate: ['group-hover'],
      scale: ['group-hover'],
      display: ["group-hover"],
    
    },
  },
};
