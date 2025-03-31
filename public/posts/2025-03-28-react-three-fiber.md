---
title: 3d navigable menu
order: 20
description: Showcase demo
shortDescription: Showcase demo
slug: r3f
image: https://res.cloudinary.com/dmgymopan/image/upload/v1743196346/marcelloluatti.com/Screenshot_2025-03-28_alle_19.51.40_winkmh.png
tags:
  - name: react three fiber
  - name: 3d menu
  - name: live demo
content: >-
  During the previous release of this personal website, I wanted to create a
  **3d clickable menu** that was rotating inside a sphere with lights and stars.


  **React three fiber** and some **helpers libs** were the right tool for this purpose.


  Here the result, with a [live demo](/demo/sky)


  What's going on?             


  1. Inside the Canvas scene, the user is automatically moved in front of the main menu, using a component that does the navigation (see Surfing) and a **lerp** function

  2. Then, when the Navigation is done, **OrbitControls** takes place and the user can freely moves around

  3. The Totems collects the items, that are basically the menu elements


  ```

  function Surfing({ handleSetSurfed }: { handleSetSurfed: VoidFunction }) {
    useFrame(({ camera, clock }) => {
      if (clock?.elapsedTime < 0.75) return;
      if (camera.position.z > 5) {
        camera.position.z = MathUtils.lerp(camera.position.z, 4, 0.03);
      }
      if (camera.position.y > 0) {
        camera.position.y = MathUtils.lerp(camera.position.y, -1, 0.03);
      }

      if (camera.position.y <= 0 && camera.position.z <= 5) {
        camera.position.y = 0;
        camera.position.z = 5;
        handleSetSurfed();
      }
    });
    return null;
  }


  ...

      
  <Canvas camera={{ fov: 75, position: [0, 5, 700] }}>
    <Suspense fallback={null}>
      {surfed ? <OrbitControls /> : <Surfing handleSetSurfed={handleSetSurfed} />}
      <Stars speed={2} count={5000} saturation={10} radius={120} />
      <Sphere position={[0, 2, 0]} />
      {items.map(({ label, slug }, i) => (
        <Totem
          key={label}
          position={[0, 1 - i, 0]}
          label={label}
          timer={0.5 + i * 0.15}
          negative={i % 2}
          onClick={() => {
            router.push(slug);
          }}
        />
      ))}
      <Sphere position={[0, 1 - items.length, 0]} />
      <Lights />
    </Suspense>
  </Canvas>

  ```


  [](/demo/sky)
---
