<template>
    <Listbox as="div" v-model="selected">
      <div class="relative mt-2">
        <ListboxButton class="relative w-full cursor-default rounded-xl bg-slate-50 p-4 text-left text-slate-800 shadow-sm ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6">
          <span class="flex items-center gap-2">
            <!-- <span class="block truncate">{{ selected.name }}</span> -->
            <span class="text-slate-800 text-sm font-normal leading-tight tracking-tight">Advance UI UX Design Course</span>
            <span class="text-slate-400 text-xs font-normal leading-none">Jahidul Islam</span>
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
  
        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="course in courses" :key="course.id" :value="course" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <div class="flex items-center">
                  <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ course.name }}</span>
                  <span>{{ course.author }}</span>
                </div>
  
                <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
  <script setup>
  import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { ref } from 'vue';
  
  const courses = [
    {
      id: 1,
      name: 'Advance UI UX Design Course',
      author: 'Jahidul Islam',
    },
    {
      id: 2,
      name: 'Advance UI UX Design Course 2',
      author: 'Jahidul Islam 2',
    },
    {
      id: 3,
      name: 'Advance UI UX Design Course 3',
      author: 'Jahidul Islam 3',
    },
    {
      id: 4,
      name: 'Advance UI UX Design Course 4',
      author: 'Jahidul Islam 4',
    },
    {
      id: 5,
      name: 'Advance UI UX Design Course 5',
      author: 'Jahidul Islam 5',
    },
    {
      id: 6,
      name: 'Advance UI UX Design Course 6',
      author: 'Jahidul Islam 6',
    },
    {
      id: 7,
      name: 'Advance UI UX Design Course 7',
      author: 'Jahidul Islam 7',
    },
    {
      id: 8,
      name: 'Advance UI UX Design Course 8',
      author: 'Jahidul Islam 8',
    },
    {
      id: 9,
      name: 'Advance UI UX Design Course 9',
      author: 'Jahidul Islam 9',
    },
    {
      id: 10,
      name: 'Advance UI UX Design Course 10',
      author: 'Jahidul Islam 10',
    },
  ]
  
  const selected = ref('')
  </script>