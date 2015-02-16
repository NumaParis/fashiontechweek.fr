// credit to this guy for the script http://codepen.io/kenjiSpecial/

      var container;

      var camera, scene, renderer;
      var sqLength = 120; // window.innerHeight * .9;
      var num = 30;

      var group = new THREE.Group();
      var meshArr = [];
      var rotYArr = [];

      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;
      var width = window.innerWidth;
      var height = window.innerHeight;

      init();
      animate();

      function init() {

          container = document.createElement('div');
          document.body.appendChild(container);


          scene = new THREE.Scene();

          //camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 10000);
          camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);

          camera.position.set(0, 400, 800);
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          scene.add(camera);

          var light = new THREE.PointLight(0xffffff, 0.8);
          camera.add(light);


          // Square


          for (var ii = -num; ii < num; ii++) {
              var squareShape = new THREE.Shape();

              var dx = sqLength / 2;
              squareShape.moveTo(-sqLength / 2 + dx, -sqLength / 2);
              squareShape.lineTo(-sqLength / 2 + dx, sqLength / 2);
              squareShape.lineTo(sqLength / 2 + dx, sqLength / 2);
              squareShape.lineTo(sqLength / 2 + dx, -sqLength / 2);
              squareShape.lineTo(-sqLength / 2 + dx, -sqLength / 2);

              var squareMesh = addShape(squareShape, 0xffffff, 0, ii * (sqLength + 10), 0);

              meshArr.push(squareMesh);
          }

          scene.add(group);


      for (var ii = -num; ii < num; ii++) {
          var velRotY = ii / num * Math.PI / 10;
          rotYArr.push(velRotY);
      }


      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setClearColor(0xf0f0f0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      //

      window.addEventListener('resize', onWindowResize, false);

      }

      function onWindowResize() {
          windowHalfX = window.innerWidth / 2;
          windowHalfY = window.innerHeight / 2;

          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();

          renderer.setSize(window.innerWidth, window.innerHeight);
      }



      function animate() {
          //squareMesh.rotation.y += .01;
          //group.rotation.x += .06;
          //group.rotation.y += .08;
          group.rotation.z += .02;
          var ii;
          for (ii = 0; ii < meshArr.length; ii++) {
              //meshArr[ii].rotation. += .2;
              meshArr[ii].rotation.y += rotYArr[ii];
              var rot = meshArr[ii].rotation.y;
              meshArr[ii].position.x = 300 * Math.cos(rot);
              meshArr[ii].position.z = 300 * Math.sin(rot);
          }

          requestAnimationFrame(animate);

          render();

      }

      function render() {

          renderer.render(scene, camera);

      }


      function addShape(shape, color, x, y, z) {
          var points = shape.createPointsGeometry();
          var spacedPoints = shape.createSpacedPointsGeometry(50);

          // flat shape

          var geometry = new THREE.ShapeGeometry(shape);

          var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
              color: color,
              ambient: color,
              side: THREE.DoubleSide
          }));
          mesh.position.set(x, y, 0);
          group.add(mesh);

          return mesh;
      }
