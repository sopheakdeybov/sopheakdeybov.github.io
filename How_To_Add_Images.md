 <!-- Single Image with Caption (Best for System Diagrams or Bench Setups)-->
<figure class="my-6">
  <img 
    src="assets/fat-station.jpg" 
    alt="Nicslab FAT Testing Station" 
    class="w-full rounded-lg border border-zinc-200 object-cover max-h-96 bg-zinc-100"
  />
  <figcaption class="mt-2 text-xs text-zinc-500 text-center">
    Factory Acceptance Testing (FAT) station with high-precision DMM and SMU load fixtures.
  </figcaption>
</figure>


<!-- Side-by-Side Comparison Grid (Best for KiCad Layout vs. Physical PCB)-->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <figure>
    <img 
      src="assets/middle-pcb-kicad.png" 
      alt="KiCad 3D Render of Middle Board" 
      class="w-full h-56 object-cover rounded-lg border border-zinc-200 bg-zinc-100"
    />
    <figcaption class="mt-1.5 text-xs text-zinc-500 text-center">
      KiCad 3D render of the Teensy 4.1 carrier PCB.
    </figcaption>
  </figure>

  <figure>
    <img 
      src="assets/middle-pcb-assembled.jpg" 
      alt="Assembled Middle Board on Rover" 
      class="w-full h-56 object-cover rounded-lg border border-zinc-200 bg-zinc-100"
    />
    <figcaption class="mt-1.5 text-xs text-zinc-500 text-center">
      Assembled PCB integrated with the H-bridge driver and relays.
    </figcaption>
  </figure>
</div>

<!-- Auto-Playing Loop Video (Best for RViz2 & Gazebo Simulations)-->
<figure class="my-6">
  <video 
    autoplay 
    loop 
    muted 
    playsinline 
    class="w-full rounded-lg border border-zinc-200 bg-zinc-900"
  >
    <source src="assets/rviz-lattice.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <figcaption class="mt-2 text-xs text-zinc-500 text-center">
    Real-time A* state-lattice expansion and 64-bit bitmask collision checking in RViz2.
  </figcaption>
</figure>



<!-- Optional: Add Thumbnail Previews to the Home Page Cards-->
<img 
  src="assets/rover-thumb.jpg" 
  alt="UR Robotics Rover" 
  class="w-full h-40 object-cover rounded-lg border border-zinc-100 mb-4 bg-zinc-100"
/>
