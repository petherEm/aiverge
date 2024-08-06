import GridCategories from '@/components/categories/GridCategories'
import IntroCategories from '@/components/categories/IntroCategories'
import { Container } from '@/components/Container'

const Categories = () => {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <IntroCategories />
        <GridCategories />
      </Container>
    </div>
  )
}

export default Categories
