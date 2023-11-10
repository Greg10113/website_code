'use client';
import React from 'react';

function NavBar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-400 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <ul class="flex">
          <li class="mr-6">
            <a class="text-white-500 hover:text-blue-800" href="/">
              Home
            </a>
          </li>
          <li class="mr-6">
            <a class="text-white-500 hover:text-blue-800" href="#">
              Zelda
            </a>
          </li>
          <li class="mr-6">
            <a class="text-white-500 hover:text-blue-800" href="/movies">
              Movies
            </a>
          </li>
          <li class="mr-6">
            <a class="text-white-500 hover:text-blue-800" href="/pokedex">
              Pokedex
            </a>
          </li>
          <li class="mr-6">
            <a class="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
