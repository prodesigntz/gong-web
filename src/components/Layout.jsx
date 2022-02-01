import { MainWavesLarge, MainWavesSmall } from './Layout.styled.components';
import Particles from 'react-tsparticles';

export default function Layout({ children }) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <main className="main">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 30,
          interactivity: {
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.3,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#365a68',
            },
            links: {
              color: '#365a68',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'triangle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <MainWavesLarge></MainWavesLarge>
      <MainWavesSmall variant="large"></MainWavesSmall>
      <div className="main-content">{children}</div>
    </main>
  );
}
