'use client'

import dynamic from 'next/dynamic'
import type p5Types from 'p5'

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})

export default function GridLightAnimation() {
    const gridSize = 40
    let dots: {
        x: number
        y: number
        speed: number
        direction: 'x' | 'y'
        size: number
        color: p5Types.Color
        blur: boolean
    }[] = []

    let lastAddTime = 0
    let mouseXPos = -1
    let mouseYPos = -1

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        const canvas = p5.createCanvas(p5.windowWidth, 700)
        canvas.parent(canvasParentRef)
        p5.frameRate(60);
        (p5 as any).clear()
        dots = []

        for (let y = 0; y < p5.height; y += gridSize) {
            for (let x = 0; x < p5.width; x += gridSize) {
                if (p5.random() < 0.025) { // circle density
                    dots.push({
                        x,
                        y,
                        speed: p5.random(0.1, 1.25), // 50% slower
                        direction: p5.random(['x', 'y']),
                        size: p5.random(4, 12),
                        blur: p5.random() < 0.5,
                        color: p5.color(
                            p5.random(180, 255),
                            p5.random(100, 255),
                            p5.random(200, 255),
                            220
                        ),
                    })
                }
            }
        }
    }

    const draw = (p5: p5Types) => {
        (p5 as any).clear()

        // Update mouse pos globally
        mouseXPos = p5.mouseX
        mouseYPos = p5.mouseY

        // Subtle grid with fading edges
        const edgeFade = (val: number, max: number) => {
            const distToEdge = Math.min(val, max - val)
            return p5.map(distToEdge, 0, max / 2, 0, 255)
        }

        p5.strokeWeight(0.2)
        for (let x = 0; x < p5.width; x += gridSize) {
            const alpha = edgeFade(x, p5.width) * 0.15
            p5.stroke(255, 255, 255, alpha)
            p5.line(x, 0, x, p5.height)
        }

        for (let y = 0; y < p5.height; y += gridSize) {
            const alpha = edgeFade(y, p5.height) * 0.15
            p5.stroke(255, 255, 255, alpha)
            p5.line(0, y, p5.width, y)
        }

        // Animate dots
        for (const dot of dots) {
            if (dot.blur) {
                p5.drawingContext.shadowBlur = 12
                p5.drawingContext.shadowColor = dot.color.toString()
            } else {
                p5.drawingContext.shadowBlur = 0
            }

            p5.noStroke()
            p5.fill(dot.color)
            p5.ellipse(dot.x, dot.y, dot.size)

            if (dot.direction === 'x') {
                dot.x += dot.speed
                if (dot.x > p5.width) dot.x = 0
            } else {
                dot.y += dot.speed
                if (dot.y > p5.height) dot.y = 0
            }
        }

        // Add new dot every 5 seconds at mouse position if inside canvas
        if (
            mouseXPos >= 0 &&
            mouseXPos <= p5.width &&
            mouseYPos >= 0 &&
            mouseYPos <= p5.height &&
            p5.millis() - lastAddTime > 3000
        ) {
            dots.push({
                x: mouseXPos,
                y: mouseYPos,
                speed: p5.random(0.1, 1.25),
                direction: p5.random(['x', 'y']),
                size: p5.random(4, 12),
                blur: p5.random() < 0.5,
                color: p5.color(
                    p5.random(180, 255),
                    p5.random(100, 255),
                    p5.random(200, 255),
                    220
                ),
            })
            lastAddTime = p5.millis()
        }
    }

    return (
        <div className="w-full h-full">
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}
