import Image, { StaticImageData } from 'next/image'

interface Tool {
  name: string
  descriptionShort: string
  description: string
  web: string
  model: string
  image: string | StaticImageData
}

export default function ToolsTable({ tools }: { tools: Tool[] }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Tool Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    AI behind
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">More</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tools.map((tool) => (
                  <tr key={tool.web}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <Image
                            alt=""
                            src={tool.image}
                            className=""
                            width={42}
                            height={42}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {tool.name}
                          </div>
                          <div className="mt-1 text-gray-500">{tool.web}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">
                        {tool.descriptionShort}
                      </div>
                      <div className="mt-1 text-wrap text-gray-500">
                        {tool.description}
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {tool.model}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Check<span className="sr-only">, {tool.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
