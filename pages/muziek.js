import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const tracks = [
    {
        url: 'https://puurband.nl/muziek/live-als-ze-er-niet-is.mp3',
        title: 'Als ze er niet is',
        tags: ['live']
    },
    {
        url: 'https://puurband.nl/muziek/live-seventeen.mp3',
        title: 'Seventeen',
        tags: ['live']
    },
    {
        url: 'https://puurband.nl/muziek/demoplaythatfunky.mp3',
        title: 'Play that funky music',
        tags: ['studio']
    },
    {
        url: ' https://puurband.nl/muziek/demosunshine.mp3',
        title: 'Ain\'t no sunshine',
        tags: ['studio']
    },
    {
        url: ' https://puurband.nl/muziek/demobakerstreet.mp3',
        title: 'Bakerstreet',
        tags: ['studio']
    },
    {
        url: ' https://puurband.nl/muziek/demoworry.mp3',
        title: 'Don\'t worry Be happy',
        tags: ['studio']
    },
    {
        url: ' https://puurband.nl/muziek/m01CloseYourEyes.mp3',
        title: 'Close your Eyes [ All my loving ]',
        tags: ['live']
    },
]

const colors = `html {
    --tagsBackground: #3650A3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #3650A3;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #3650A3;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
}`;


export default function Landing() {
    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://static.wixstatic.com/media/a821ba_350f08b847c44093acf0a4ce968d4de6~mv2.jpg/v1/fill/w_2171,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a821ba_350f08b847c44093acf0a4ce968d4de6~mv2.jpg')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>

                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        MUZIEK
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        Van The Beatles tot Bob Marley, van Don’t worry tot Rage against the Machine, van Andre tot Zappa, we hebben 50 ways to entertain you!
                                        Heb je een feest of ben je van plan te gaan je verjaardag te vieren of te gaan trouwen? Boek ons nu.
                                    </p>
                                    <div>
                                        <Player
                                            trackList={tracks}
                                            includeTags={true}
                                            includeSearch={true}
                                            showPlaylist={true}
                                            autoPlayNextTrack={true}
                                            customColorScheme={colors}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
