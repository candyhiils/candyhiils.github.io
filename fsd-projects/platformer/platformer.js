$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 10, 20, 290);
    createPlatform(50, 500, 200, 50, "blue");
    createPlatform(500, 500, 200, 50, "blue");
    createPlatform(800, 400, 200, 50, "blue");
    createPlatform(500, 300, 200, 50, "blue");
    createPlatform(1300, 300, 200, 50, "blue");
    createPlatform(800, 200, 200, 50, "blue");
    createPlatform(1300, 600, 200, 50, "blue");
    createPlatform(1900, 400, 20, 400);
   
    
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 500);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("diamond", 600, 170, 0.5, 0.7);
    createCollectable("diamond", 600, 470, 0.5, 0.7);
    createCollectable("diamond", 900, 100, 0.5, 0.7);
    createCollectable("diamond", 1350, 200, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    createCannon("top", 850, 1000);
    createCannon("top", 400, 1000);
    createCannon("top", 200, 2000, 20, 10, 100, 1300, 2)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
