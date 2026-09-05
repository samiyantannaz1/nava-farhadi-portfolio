import AnimatedBackground from '../../components/ui/AnimatedBackground'
import Container from '../../components/ui/Container'
import HeroCard from './HeroCard'
import HeroControls from './HeroControls'

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[620px]
        overflow-hidden
        md:min-h-[calc(100vh-80px)]
      "
    >
      <AnimatedBackground />

      <Container>
        <div
          className="
            relative
            z-10
            flex
            min-h-[540px]
            items-center
            justify-center
            md:min-h-[calc(100vh-80px)]
          "
        >
          <HeroCard />
        </div>

        <HeroControls />
      </Container>
    </section>
  )
}