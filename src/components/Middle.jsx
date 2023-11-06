import React from 'react';
import Link from 'next/link';
import './Middle.css';

export default function Middle() {
  return (
    <div>
      <div className="container mx-auto px-20 h-full w-full">
        <div
        // style={{ backgroundColor: 'rgb(255, 255, 255)'
        // }}
        >
          <h2 className="text-xl text-center font-bold mt-10">
            My notable projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-10 lg:pb-10">
            {/* Card 1 */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                  viewBox="0 0 576 512"
                  stroke="currentColor"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Zelda Game Info</h3>

              <p className="text-sm leading-6 text-gray-600">
                This project was built with python and flask. It works by
                requesting data from the zelda API, and Hyrule Compendium API,
                and displaying the data on the front end.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <Link href={'/movies'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                    viewBox="0 0 576 512"
                    stroke="currentColor"
                  >
                    <path d="M0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192V128z" />
                  </svg>
                </Link>
              </div>

              <h3 className="text-lg font-bold mb-2">Movies Showcase</h3>

              <p className="text-sm leading-6 text-gray-600">
                This project is a simple one, I created a fictional website that
                fetches movie data from <em>The Movie Database</em> API and
                displays it for the client.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5 items-center">
                <Link href={'/pokedex'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                    viewBox="0 0 1024 1024"
                    stroke="currentColor"
                  >
                    <path
                      id="pkmn-go-teamless"
                      fill="#000000"
                      stroke="none"
                      stroke-width="1"
                      d="M 512.00,96.80
           C 304.28,96.94 132.17,249.33 101.24,448.41
             101.24,448.41 312.51,448.80 312.51,448.80
             339.50,364.37 418.60,303.25 512.00,303.20
             605.25,303.31 684.24,364.33 711.33,448.61
             711.33,448.61 922.53,448.80 922.53,448.80
             891.82,249.60 719.75,97.06 512.00,96.80
             512.00,96.80 512.00,96.80 512.00,96.80 Z
           M 512.00,376.80
           C 436.89,376.80 376.00,437.69 376.00,512.80
             376.00,587.91 436.89,648.80 512.00,648.80
             512.00,648.80 512.00,648.80 512.00,648.80
             587.11,648.80 648.00,587.91 648.00,512.80
             648.00,512.80 648.00,512.80 648.00,512.80
             648.00,437.69 587.11,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80
             512.00,376.80 512.00,376.80 512.00,376.80 Z
           M 101.47,576.80
           C 132.18,776.00 304.25,928.54 512.00,928.80
             719.72,928.66 891.83,776.27 922.76,577.19
             922.76,577.19 711.49,576.80 711.49,576.80
             684.50,661.23 605.40,722.35 512.00,722.40
             418.75,722.29 339.76,661.27 312.67,576.99
             312.67,576.99 101.47,576.80 101.47,576.80
             101.47,576.80 101.47,576.80 101.47,576.80 Z"
                    />
                  </svg>
                </Link>
              </div>

              <h3 className="text-lg font-bold mb-2">Pokedex</h3>

              <p className="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                  viewBox="0 0 640 512"
                  stroke="currentColor"
                >
                  <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">GitHub</h3>

              <p className="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me text-left mx-auto px-20 mb-40 w-full h-96 block rounded-lg ">
        <h2 className="text-xl text-left font-bold mt-10">About me</h2>
        <p className="mt-4">
          I have a deep passion for learning and am always seeking different
          ways to challenge myself. I'm into a wide range of interests,
          including jiu-jitsu, reptiles, and video games.
        </p>
        <p>
          As a developer, I am most knowledgeable in web development and its
          associated technologies, including HTML, CSS, JavaScript, React,
          Next.js, SQL, Node.js, and Express. I am also working to include
          Python in this stack.
        </p>
      </div>
    </div>
  );
}
