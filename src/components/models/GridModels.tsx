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

const actions = [
  {
    title: 'Open AI',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    bnParameters: '32',
    cheapestPrice: '$20/m',
  },
  {
    title: 'Gemini',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    bnParameters: '32',
    cheapestPrice: '$20/m',
  },
  {
    title: 'Schedule a one-on-one',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    bnParameters: '32',
    cheapestPrice: '$20/m',
  },
  {
    title: 'Payroll',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    bnParameters: '32',
    cheapestPrice: '$20/m',
  },
  {
    title: 'Submit an expense',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    bnParameters: '32',
    cheapestPrice: '$20/m',
  },
  {
    title: 'Training',
    href: '#',
    logo: openAIlogo,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    bnParameters: '32',
    cheapestPrice: '$20/m',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function GridModels() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
          )}
        >
          <div className="flex items-center">
            <span
              className={classNames(
                'inline-flex rounded-lg p-3 ring-4 ring-white',
              )}
            >
              <Image
                src={action.logo}
                aria-hidden="true"
                className="h-6 w-6"
                width={24}
                height={24}
                alt="logo"
              />
            </span>
            <h2>{action.title}</h2>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span aria-hidden="true" className="absolute inset-0" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
            <div className="bg-white py-2">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 text-center lg:grid-cols-3">
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">
                      parameters
                    </dt>
                    <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {action.bnParameters}
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">
                      starting fee
                    </dt>
                    <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {action.cheapestPrice}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
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
