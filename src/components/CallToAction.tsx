import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get in touch with us! We are here to help.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            You can reach out to us anytime via
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="solid">LinkedIn</Button>
            <Button variant="solid">X</Button>
            <Button variant="solid">Instagram</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
