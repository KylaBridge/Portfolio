import Particles from "../effects/Particles";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 z-10" aria-hidden="true">
        <Particles
          className="w-screen h-screen"
          particleColors={["#ffffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
}
