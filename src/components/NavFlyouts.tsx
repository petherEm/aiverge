'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  BanknotesIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  TagIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'

const items = [
  {
    name: 'Foundation',
    description: 'Get the basic understanding of LLMs with our simple guide.',
    href: '/models',
    icon: AcademicCapIcon,
    comingSoon: true,
  },
  {
    name: 'Key LLMs',
    description: 'Review the most popular LLMs and their capabilities.',
    href: '/models',
    icon: MagnifyingGlassIcon,
    comingSoon: false,
  },
  {
    name: 'Key Categories',
    description: 'Structuring AI powered solutions into categories.',
    href: '/categories',
    icon: TagIcon,
    comingSoon: false,
  },
  {
    name: 'AI in Payments, Banking & Finance',
    description: 'Explore the true potential of AI in financial services.',
    href: '#',
    icon: BanknotesIcon,
    comingSoon: true,
  },
  {
    name: 'Cyber Sec',
    description: 'Grasp an understanding how AI can be used in Cyber Security.',
    href: '#',
    icon: FingerPrintIcon,
    comingSoon: true,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function NavFlyouts() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none focus:outline-none">
            More
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 w-5 flex-none text-gray-400"
            />
          </PopoverButton>

          <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-600 group-hover:text-[#d406cd]"
                    />
                  </div>
                  <div className="flex-auto">
                    <a
                      href={item.href}
                      className="block font-semibold text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                      {item.comingSoon && (
                        <span className="ml-3 inline-flex items-center rounded-md bg-[#d406cd]/10 px-2 text-[11px] font-medium text-[#d406cd] ring-1 ring-inset ring-red-600/10">
                          Coming Soon
                        </span>
                      )}
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
      </PopoverGroup>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AI Verge</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...items, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}
