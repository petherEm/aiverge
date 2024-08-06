import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import openAIlogo from '@/images/logos/openai.png'
import Image from 'next/image'

const categories = [
  {
    title: 'Chats',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    examples: ['ChatGPT', 'Gemini', 'Grok', 'Llama'],
  },
  {
    title: 'AI Agents',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    examples: ['ChatGPT', 'Gemini', 'Grok', 'Llama'],
  },
  {
    title: 'AI Assistants',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'AI powered tools',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Embedded chatbots',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Plugins',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function GridCategories() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {categories.map((category, actionIdx) => (
        <div
          key={category.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
          )}
        >
          <div className="flex items-center justify-start">
            {/* <span
              className={classNames(
                'inline-flex rounded-lg p-3 ring-4 ring-white',
              )}
            >
              <Image
                src={category.logo}
                aria-hidden="true"
                className="h-6 w-6"
                width={24}
                height={24}
                alt="logo"
              />
            </span> */}
            <div className="mt-4 flex flex-1 flex-col">
              {' '}
              <h2 className="text-2xl font-bold text-gray-900">
                {category.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </p>
            </div>
          </div>
          {category.examples?.map((example) => (
            <div key={example} className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href="#" className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <div className="flex gap-x-2">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {example}
                    <span className="text-sm font-normal">
                      short description
                    </span>
                  </div>
                </a>
              </h3>
            </div>
          ))}

          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 transition group-hover:rotate-45 group-hover:text-gray-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  )
}
