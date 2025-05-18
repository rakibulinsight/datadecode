import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NetworkGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const edges: { from: number; to: number }[] = [];

    // Initialize nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      });
    }

    // Create edges between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < 0.05) {
          edges.push({ from: i, to: j });
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.1)';
      ctx.fillStyle = '#60A5FA';

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw edges
      edges.forEach(edge => {
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-400">
      <NetworkGraph />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 via-transparent to-dark-400"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
                  v2.0.4 // Latest Release
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold"
              >
                <span className="text-gradient bg-gradient-to-r from-primary via-accent-blue to-accent-neon">
                  Data Science
                </span>
                <br />
                <span className="text-dark-50">
                  Redefined.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-dark-50/80 max-w-lg"
              >
                Transform raw data into actionable intelligence with our AI-powered analytics platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-4"
              >
                <button className="btn-primary text-lg px-8 py-4 font-bold">
                  Start Transformation
                </button>
                <div className="font-mono text-dark-50/60 text-sm">
                  <div>{'>'} 500+ Projects</div>
                  <div>{'>'} 98% Success Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-dark-300/50 backdrop-blur-sm rounded-lg border border-primary/20 overflow-hidden group">
                <div className="p-6 font-mono text-sm h-full">
                  <div className="space-y-2">
                    <div className="text-dark-50/70">
                      <span className="text-primary">const</span>{' '}
                      <span className="text-accent-blue">dataSolution</span>{' '}
                      <span className="text-dark-50">=</span>{' '}
                      <span className="text-accent-green">async</span>{' '}
                      <span className="text-dark-50">{'() => {'}</span>
                    </div>
                    <div className="pl-4 text-dark-50/70">
                      <span className="text-primary">const</span>{' '}
                      <span className="text-accent-blue">data</span>{' '}
                      <span className="text-dark-50">=</span>{' '}
                      <span className="text-accent-green">await</span>{' '}
                      <span className="text-code-purple">fetchData</span>
                      <span className="text-dark-50">();</span>
                    </div>
                    <div className="pl-4 text-dark-50/70">
                      <span className="text-primary">const</span>{' '}
                      <span className="text-accent-blue">insights</span>{' '}
                      <span className="text-dark-50">=</span>{' '}
                      <span className="text-code-purple">analyzeData</span>
                      <span className="text-dark-50">(data);</span>
                    </div>
                    <div className="pl-4 text-dark-50/70">
                      <span className="text-primary">return</span>{' '}
                      <span className="text-accent-blue">insights</span>
                      <span className="text-dark-50">;</span>
                    </div>
                    <div className="text-dark-50/70">
                      <span className="text-dark-50">{'}'};</span>
                    </div>
                    <div className="text-dark-50/70 animate-pulse">
                      <span className="text-accent-green">{'>'}</span>{' '}
                      Running analysis<span className="animate-code-blink">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;