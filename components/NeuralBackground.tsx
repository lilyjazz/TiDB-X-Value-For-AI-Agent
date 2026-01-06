import React, { useEffect, useRef } from 'react';

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;

    const properties = {
      bgColor: 'rgba(5, 5, 5, 1)',
      particleColor: 'rgba(255, 255, 255, 0.3)', // Subtle white
      particleColorRed: 'rgba(255, 0, 51, 0.6)', // Brand Red
      lineColor: 'rgba(200, 200, 200, 0.05)',
      particleCount: Math.floor((width * height) / 18000), // Density based on screen size
      connectionDistance: 140,
      moveSpeed: 0.3,
    };

    class Particle {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;
      size: number;
      isRed: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.velocityX = (Math.random() - 0.5) * properties.moveSpeed;
        this.velocityY = (Math.random() - 0.5) * properties.moveSpeed;
        this.size = Math.random() * 1.5 + 0.5; // Random size between 0.5 and 2
        this.isRed = Math.random() > 0.90; // 10% chance to be a "hot" node (red)
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.isRed ? properties.particleColorRed : properties.particleColor;
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = Math.floor((width * height) / 18000); // Re-calculate density
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < properties.connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / properties.connectionDistance;
            
            // If one of them is red, slight tint to the line
            if (particles[i].isRed || particles[j].isRed) {
                ctx.strokeStyle = `rgba(255, 50, 80, ${opacity * 0.15})`; 
            } else {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
            }
            
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60"
    />
  );
};

export default NeuralBackground;