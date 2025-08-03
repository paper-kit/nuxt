<template>
  <div
    ref="containerRef"
    class="pu-confetti font-patrick"
    :class="[confettiClass, customClass]"
  >
    <canvas
      ref="canvasRef"
      class="pu-confetti__canvas"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, onMounted, onUnmounted, watch } from 'vue'

interface ConfettiPiece {
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  color: string
  size: number
  type: 'circle' | 'square' | 'triangle'
}

const props = withDefaults(
  defineProps<{
    active?: boolean
    colors?: string[]
    particleCount?: number
    duration?: number
    width?: number
    height?: number
    customClass?: string
  }>(),
  {
    active: false,
    colors: () => ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
    particleCount: 50,
    duration: 3000,
    width: 400,
    height: 300,
    customClass: '',
  },
)

const emit = defineEmits<{
  start: []
  end: []
}>()

const containerRef = ref<HTMLElement>()
const canvasRef = ref<HTMLCanvasElement>()
const animationId = ref<number>()
const particles = ref<ConfettiPiece[]>([])
const startTime = ref<number>(0)

const confettiClass = computed(() => [
  'pu-confetti',
  {
    'pu-confetti--active': props.active,
  },
])

const createParticle = (): ConfettiPiece => {
  const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle']
  const type = types[Math.floor(Math.random() * types.length)]

  return {
    x: Math.random() * props.width,
    y: -10,
    vx: (Math.random() - 0.5) * 8,
    vy: Math.random() * 3 + 2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
    color: props.colors[Math.floor(Math.random() * props.colors.length)],
    size: Math.random() * 8 + 4,
    type,
  }
}

const drawParticle = (ctx: CanvasRenderingContext2D, particle: ConfettiPiece) => {
  ctx.save()
  ctx.translate(particle.x, particle.y)
  ctx.rotate((particle.rotation * Math.PI) / 180)

  ctx.fillStyle = particle.color
  ctx.strokeStyle = particle.color
  ctx.lineWidth = 1

  switch (particle.type) {
    case 'circle':
      ctx.beginPath()
      ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2)
      ctx.fill()
      break
    case 'square':
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
      break
    case 'triangle':
      ctx.beginPath()
      ctx.moveTo(0, -particle.size / 2)
      ctx.lineTo(-particle.size / 2, particle.size / 2)
      ctx.lineTo(particle.size / 2, particle.size / 2)
      ctx.closePath()
      ctx.fill()
      break
  }

  ctx.restore()
}

const animate = (currentTime: number) => {
  if (!canvasRef.value) return

  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  if (!startTime.value) {
    startTime.value = currentTime
  }

  const elapsed = currentTime - startTime.value
  const progress = elapsed / props.duration

  ctx.clearRect(0, 0, props.width, props.height)

  particles.value.forEach((particle, index) => {
    particle.x += particle.vx
    particle.y += particle.vy
    particle.rotation += particle.rotationSpeed

    particle.vy += 0.1

    drawParticle(ctx, particle)

    if (particle.y > props.height + 20 || progress > 0.8) {
      particles.value.splice(index, 1)
    }
  })

  if (particles.value.length > 0 && progress < 1) {
    animationId.value = requestAnimationFrame(animate)
  }
  else {
    emit('end')
  }
}

const startConfetti = () => {
  if (!canvasRef.value) return

  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }

  particles.value = []
  startTime.value = 0

  for (let i = 0; i < props.particleCount; i++) {
    particles.value.push(createParticle())
  }

  emit('start')
  animationId.value = requestAnimationFrame(animate)
}

watch(() => props.active, (newValue) => {
  if (newValue) {
    startConfetti()
  }
})

onMounted(() => {
  if (props.active) {
    startConfetti()
  }
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
})
</script>

<style lang="css" scoped>
.pu-confetti {
  @apply relative overflow-hidden;
}

.pu-confetti__canvas {
  @apply block;
}

/* Hand-drawn effects */
.pu-confetti::before {
  content: '';
  @apply absolute inset-0 pointer-events-none;
  background:
    radial-gradient(circle at 20% 20%, rgba(28, 28, 28, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(28, 28, 28, 0.05) 0%, transparent 50%);
}

.dark .pu-confetti::before {
  background:
    radial-gradient(circle at 20% 20%, rgba(193, 193, 193, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(193, 193, 193, 0.05) 0%, transparent 50%);
}
</style>
