const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

const nextConfig = {
images: {
disableStaticImages: true,
},
};

module.exports = withPlugins(
[withTM, withExpo, withImages, withFonts],
nextConfig
);