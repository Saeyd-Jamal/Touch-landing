/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./pages/*.html",
        "./assets/**/*.js",
        "./node_modules/tw-elements/js/**/*.js",
    ],
    theme: {
        extend: {
            listStyleImage: {
                checkmark: 'url("/asset/img/icon/Icon material-done.png")',
            },
            height: {
                72: "18rem",
            },
            width: {
                90: "90%",
                "1/2": "50%",
            },
            flex: {
                "1/2": "1 1 50%",
            },
            colors: {
                // Default Colors
                main: {
                    DEFAULT: "#50ADA3",
                },
                second: {
                    DEFAULT: "#43516D",
                },
                dark: {
                    DEFAULT: "#343434",
                },
                graye: {
                    DEFAULT: "#EBEBEB",
                },

                // Custom Colors
                info: {
                    DEFAULT: "#3b82f6",
                    600: "#3b82f6",
                },
                primary: {
                    DEFAULT: "#3b82f6",
                    600: "#3b82f6",
                    700: "#2563eb",
                    800: "#1d4ed8",
                    900: "#1e40af",
                },
                surface: {
                    DEFAULT: "#020617",
                },
                slate: {
                    300: "#e2e8f0",
                },
                gray: {
                    100: "#f3f4f6",
                    300: "#e2e8f0",
                    500: "#94a3b8",
                },
            },
        },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class",
};
