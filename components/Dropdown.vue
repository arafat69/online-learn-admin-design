<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="inline-flex w-full justify-center items-center gap-x-1.5 p-4 rounded-xl text-sm font-normal ring-inset ring-gray-300 " :class="props.buttonClass">
                {{ props.buttonName }}
                <ChevronDownIcon v-if="props.showArrow" class="-mr-1 h-5 w-5" :class="props.showArrowColor" aria-hidden="true" />
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute left-0 z-20 mt-1 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="props.class">
                <div class="py-1">
                    <slot />
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    class: {
        type: String,
        default: 'min-w-[110px]'
    },
    buttonName: {
        type: String,
        default: 'Dropdown'
    },
    showArrow: {
        type: Boolean,
        default: true
    },
    showArrowColor: {
        type: String,
        default: 'text-gray-400'
    },
    buttonClass: {
        type: String,
        default: "bg-white hover:bg-gray-50 text-gray-900 shadow-sm"
    },
    
})
</script>