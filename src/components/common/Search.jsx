import React from 'react'
import search from '@assets/images/HeroSection/srch.svg'
const Search = ({ handleSearchChange , searchQuery }) => {
    return (
        <form class=" mx-auto w-full ">
            <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 end-0 flex items-center px-3 pointer-events-none">
                    <img src={search} />
                </div>
                <input type="search" onChange={handleSearchChange} value={searchQuery} id="default-search" class="block w-full p-4 text-sm text-[#607D8B] rounded-2xl bg-[#FFFFFF]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="چی میخوای یاد بگیری؟" required />
            </div>
        </form>
    )
}

export default Search