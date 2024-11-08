(() => {
  console.log("IIFE Fired");
  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  //console.log(hotspots);

  //array
  const annotation = [
    {
      name: "Charging Light",
      description: "LED charging lights on the buds indicate the charge % of each earbud when you put them in the case."
    },
    {
      name: "Comfort Fitment Piece",
      description: "Ensure perfect ear fitment with 3 different sized Comfort Pieces."
    },
    {
      name: "Charging Points",
      description: "Up to 12 hours of battery life in 30 minutes with our new fast-charge technology."
    },
    {
      name: "Mesh Speakers",
      description: "High quality fine carbon-fibre mesh speakers will give you a premium listening experience you can't find anywhere else."
    },
    {
      name: "Loop",
      description: "The loop. It's what sets the Loop Pods apart. Hear or filter out your environment with varial decibel control.The loop also ensures zero discomfort and all- day wearability.This is where our innovative Lossless Hi-Fi audio drivers are kept."
    },
    {
      name: "Battery Housing",
      description: "The battery housing is made of premium recycled plastic with a nice smooth gloss finish."
    }
  ];

  //functions

  //fill hotspots with array content
  hotspots.forEach((hotspot, index) => {
    const annotationContent = annotation[index];
    if (annotationContent) {
      const title = hotspot.querySelector("h2");
      const description = hotspot.querySelector("p");

      title.textContent = annotationContent.name;
      description.textContent = annotationContent.description;
    }
  });

  function showInfo(e) {
    //console.log("showInfo called")
    //console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    //console.log(selected)
    gsap.to(selected, 1, { autoAlpha: 1 })
  }

  function hideInfo(e) {
    //console.log("hideInfo called");
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //eventListeners
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo)
  });


  //green sock animation (NOT WORKING, WILL DEVELOP)
  const startAnim = gsap.to(".hotspot", {
    rotation: "+=360",
    ease: "power1.in",
    duration: 3,
    onComplete: () => loopAnim.play()
  });
})();