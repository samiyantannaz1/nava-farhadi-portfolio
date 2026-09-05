import Container from '@/components/ui/Container'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import HeroCard from './HeroCard'
import HeroControls from './HeroControls'
export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <AnimatedBackground />

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center">
          <HeroCard />
        </div>
         <HeroControls />
      </Container>
    </section>
  )
}