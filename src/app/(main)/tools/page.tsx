import { Container } from '@/components/Container'
import ToolsHeader from '@/components/ToolsHeader'
import ToolsTable from '@/components/ToolsTable'
import openAIlogo from '@/images/logos/openai.png'
import React from 'react'

const tools = [
  {
    name: 'DALL-E',
    descriptionShort: 'Image Generation',
    description:
      'Zaletą DALL-E jest jego zdolność do tworzenia wysokiej jakości obrazów, które mogą być dostosowane do niemal każdej koncepcji. Wadą może być czasami zbytnia kreatywność w interpretacji poleceń i nadmiar detali na obrazie, co wymaga od użytkownika precyzyjnego formułowania zapytań.',
    web: 'https://chat.openai.com',
    model: 'OpenAI DALL·E 2',
    image: openAIlogo,
  },
  {
    name: 'Midjourney',
    descriptionShort: 'Image Generation',
    description:
      'Midjourney to innowacyjne narzędzie AI, skupiające się na podróżach użytkownika przez świat generatywnej sztuki (tak powstała jego nazwa). Umożliwia tworzenie unikatowych obrazów i wizualizacji, które mogą służyć jako inspiracja, materiały projektowe czy artystyczne dzieła.',
    web: 'https://midjourney.com',
    model: 'Midjourney LLM',
    image: openAIlogo,
  },
  {
    name: 'Stable Diffusion',
    descriptionShort: 'Image Generation',
    description:
      'Stable Diffusion to narzędzie AI umożliwiające generowanie wysokiej jakości obrazów i grafik na podstawie promptów. Charakteryzuje się elastycznością, co pozwala na szerokie zastosowanie w różnych dziedzinach, od sztuki, przez marketing, po edukację. Stable Diffusion jest dostępne zarówno w wersji darmowej, jak i płatnej, oferując dodatkowe funkcje i wydajność w wyższych planach subskrypcyjnych.',
    web: 'https://dreamstudio.ai/generate',
    model: 'Stablediffusion LLM',
    image: openAIlogo,
  },
  {
    name: 'Synthesia',
    descriptionShort: 'Video Generation',
    description:
      'Stable Diffusion to narzędzie AI umożliwiające generowanie wysokiej jakości obrazów i grafik na podstawie promptów. Charakteryzuje się elastycznością, co pozwala na szerokie zastosowanie w różnych dziedzinach, od sztuki, przez marketing, po edukację. Stable Diffusion jest dostępne zarówno w wersji darmowej, jak i płatnej, oferując dodatkowe funkcje i wydajność w wyższych planach subskrypcyjnych.',
    web: 'https://synthesia.io',
    model: 'Stablediffusion LLM',
    image: openAIlogo,
  },
  // More people...
]

const Tools = () => {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <ToolsHeader />
        <ToolsTable tools={tools} />
      </Container>
    </div>
  )
}

export default Tools
