  var bor1 = document.getElementById("bor1");
  var bor2 = document.getElementById("bor2");
  var bor3 = document.getElementById("bor3");
  var bor4 = document.getElementById("bor4");

  // var mydiv1 = border1();
  //   var mydiv2 = border2();
  //   var mydiv3 = border3();
  //   var mydiv4 = border4();
  //   bor1.style.borderColor = mydiv1;
  //   bor2.style.borderColor = mydiv2;
  //   bor3.style.borderColor = mydiv3;
  //   bor4.style.borderColor = mydiv4;

      var img1 = document.getElementById("img");
      
      img1.setAttribute("src","9mm.jpg")
      img1.setAttribute("class","demo")


      
      var a = document.getElementById("onep")
      a.setAttribute("class","mm9-1")
      bor1.setAttribute("class","mm9-1b")
      a.innerHTML = "<h3> What is this?</h3>It is 9MM CSS project ,this is my first css project with responsive design.. so its closed to my heart."
    
      
      var b = document.getElementById("twop")
      b.setAttribute("class","mm9-2")
      bor2.setAttribute("class","mm9-2b")
      b.innerHTML = "<h3 class='learn'>What you learned from this?</h3>Enhanced responsive design skills with fluid layouts, media queries, and CSS techniques like flexbox/grid. Conducted thorough browser compatibility tests, deepened understanding of design principles."
    
      var c = document.getElementById("threep")
      c.setAttribute("class","mm9-3")
      bor3.setAttribute("class","mm9-3b")

      c.innerHTML ="<h4>How much time you taken to complete?</h4>5 Days."
    
      var d = document.getElementById("fourp")
      d.setAttribute("class","mm9-4")
      bor4.setAttribute("class","mm9-4b")

      d.innerHTML ="<h3>What technology used?</h3><div class='tech-used'><p>a.HTML</p><p>b.CSS</p><p>c.CodeEditor VScode</p><p>d.Deployment on firebase</p><p>e.Github for post</p></div>"
  

      var extra = document.querySelector(".about-project")
      extra.innerHTML="This project is a personal exploration of responsive design principles using HTML and CSS. I aimed to create a responsive website that adapts seamlessly to various screen sizes and devices."

      var ninemm = document.querySelector(".livehref");
      ninemm.setAttribute("href","https://mm-responsive-task.web.app")

      var viewmm = document.querySelector(".viewhref");
      viewmm.setAttribute("href","https://github.com/PradeepMadhavan/9mm-Responsive")

      // border colors
      function border1() {
          var r = Math.floor(Math.random() * 256);
          var g = Math.floor(Math.random() * 256);
          var b = Math.floor(Math.random() * 256);
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }
        function border2() {
          var r = Math.floor(Math.random() * 256);
          var g = Math.floor(Math.random() * 256);
          var b = Math.floor(Math.random() * 256);
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }
        function border3() {
          var r = Math.floor(Math.random() * 256);
          var g = Math.floor(Math.random() * 256);
          var b = Math.floor(Math.random() * 256);
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }
        function border4() {
          var r = Math.floor(Math.random() * 256);
          var g = Math.floor(Math.random() * 256);
          var b = Math.floor(Math.random() * 256);
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }



      function one(){
    var mydiv1 = border1();
    var mydiv2 = border2();
    var mydiv3 = border3();
    var mydiv4 = border4();
    bor1.style.borderColor = mydiv1;
    bor2.style.borderColor = mydiv2;
    bor3.style.borderColor = mydiv3;
    bor4.style.borderColor = mydiv4;

      var img1 = document.getElementById("img");
      
      img1.setAttribute("src","9mm.jpg")
      img1.setAttribute("class","demo")


      
      var a = document.getElementById("onep")
      a.setAttribute("class","mm9-1")
      bor1.setAttribute("class","mm9-1b")
      a.innerHTML = "<h3> What is this?</h3>It is 9MM CSS project ,this is my first css project with responsive design.. so its closed to my heart."
    
      
      var b = document.getElementById("twop")
      b.setAttribute("class","mm9-2")
      bor2.setAttribute("class","mm9-2b")
      b.innerHTML = "<h3 class='learn'>What you learned from this?</h3>Enhanced responsive design skills with fluid layouts, media queries, and CSS techniques like flexbox/grid. Conducted thorough browser compatibility tests, deepened understanding of design principles."
    
      var c = document.getElementById("threep")
      c.setAttribute("class","mm9-3")
      bor3.setAttribute("class","mm9-3b")

      c.innerHTML ="<h4>How much time you taken to complete?</h4>5 Days."
    
      var d = document.getElementById("fourp")
      d.setAttribute("class","mm9-4")
      bor4.setAttribute("class","mm9-4b")

      d.innerHTML ="<h3>What technology used?</h3><div class='tech-used'><p>a.HTML</p><p>b.CSS</p><p>c.CodeEditor VScode</p><p>d.Deployment on firebase</p><p>e.Github for post</p></div>"
  

      var extra = document.querySelector(".about-project")
      extra.innerHTML="This project is a personal exploration of responsive design principles using HTML and CSS. I aimed to create a responsive website that adapts seamlessly to various screen sizes and devices."

      var ninemm = document.querySelector(".livehref");
      ninemm.setAttribute("href","https://mm-responsive-task.web.app")

      var viewmm = document.querySelector(".viewhref");
      viewmm.setAttribute("href","https://github.com/PradeepMadhavan/9mm-Responsive")
  }
      function two(){
          var mydiv1 = border4();
          var mydiv2 = border3();
          var mydiv3 = border2();
          var mydiv4 = border1();
          bor1.style.borderColor = mydiv1;
          bor2.style.borderColor = mydiv2;
          bor3.style.borderColor = mydiv3;
          bor4.style.borderColor = mydiv4;

          var img2 = document.getElementById("img");
      img2.setAttribute("src","bootstrap1.jpg")
      img2.setAttribute("class","demo2")
      

          var a = document.getElementById("fourp")
      a.setAttribute("class","bootsp-4")
      bor4.setAttribute("class","bootsp-4b")
      a.innerHTML = "<h3>What technology used?</h3><div class='tech-used'><p>a.HTML</p><p>b.CSS</p><p>c.BOOTSTRAP</p><p>d.CodeEditor VScode</p><p>e.Deployment on firebase</p></div>"
    
      var b = document.getElementById("threep")
      b.setAttribute("class","bootsp-3")
      bor3.setAttribute("class","bootsp-3b")
      b.innerHTML = "<h4>How much time you taken to complete?</h4>3 Days."
    
      
      var c = document.getElementById("twop")
      c.setAttribute("class","bootsp-2")
      bor2.setAttribute("class","bootsp-2b")
      

      c.innerHTML ="<h3 class='learn'>What you learned from this?</h3>Responsive Design Principles: I gained a solid understanding of responsive design principles and techniques, particularly how to create layouts that adapt to different screen sizes using media queries and Bootstrap's responsive grid system."
    
      var d = document.getElementById("onep")
      d.setAttribute("class","bootsp-1")
      bor1.setAttribute("class","bootsp-1b")
      d.innerHTML ="<h3> What is this?</h3>My Bootstrap project offers pre-designed HTML, CSS, and JavaScript components for responsive web applications."

      var extra = document.querySelector(".about-project")
      extra.innerHTML="For my Bootstrap project, I designed and developed a responsive website using HTML, CSS, and Bootstrap framework. The project involved creating a modern and dynamic website layout that adjusts seamlessly across various screen sizes and devices. Leveraging Bootstrap's grid system and responsive utility classes, I ensured that the website maintains its functionality and aesthetics regardless of the device being used."

      var boots = document.querySelector(".livehref");
      boots.setAttribute("href","https://bootstrap-1-c26fc.web.app/")

      var viewboots = document.querySelector(".viewhref");
      viewboots.setAttribute("href","https://github.com/PradeepMadhavan/Bootstrap-port-1")
      }

      function three(){
          var mydiv1 = border3();
          var mydiv2 = border4();
          var mydiv3 = border1();
          var mydiv4 = border2();
          bor1.style.borderColor = mydiv1;
          bor2.style.borderColor = mydiv2;
          bor3.style.borderColor = mydiv3;
          bor4.style.borderColor = mydiv4;

          var img3 = document.getElementById("img");
      img3.setAttribute("src","foodimg.png")
      img3.setAttribute("class","demo3")

          var a = document.getElementById("threep")
      a.setAttribute("class","foodjs3")
      bor3.setAttribute("class","foodjs3b")
      a.innerHTML ="<h4>How much time you taken to complete?</h4>1 Days."
    
      var b = document.getElementById("fourp")
      b.setAttribute("class","foodjs4")
      bor4.setAttribute("class","foodjs4b")
      b.innerHTML = "<h3>What technology used?</h3><div class='tech-used'><p>a.HTML</p><p>b.CSS</p><p>c.JAVASCRIPT</p><p>d.CodeEditor VScode</p><p>e.Deployment on firebase</p></div>"
    
      var c = document.getElementById("onep")
      c.setAttribute("class","foodjs1")
      bor1.setAttribute("class","foodjs1b")
      c.innerHTML ="<h3> What is this?</h3>This JS food order web uses createElement and appendChild to dynamically manipulate the DOM."
    
      var d = document.getElementById("twop")
      d.setAttribute("class","foodjs2")
      bor2.setAttribute("class","foodjs2b")
      d.innerHTML ="<h3 class='learn'>What you learned from this?</h3>I adeptly manipulated HTML in JavaScript for an improved user experience, using event handling techniques such as onclick and addEventListener to respond to actions like button clicks and form submissions."

      var extra = document.querySelector(".about-project")
      extra.innerHTML="This project extensively utilizes event handling mechanisms provided by JavaScript, including both inline event attributes like onclick and modern event listeners such as addEventListener. This enables the application to respond to user actions in real-time, providing immediate feedback and enhancing usability."

      var foodjs = document.querySelector(".livehref");
      foodjs.setAttribute("href","https://pradeep-food-order-site.web.app")

      var viewfood = document.querySelector(".viewhref");
      viewfood.setAttribute("href","https://github.com/PradeepMadhavan/pradeep-food-site")
      
      }

      function four(){
          var mydiv1 = border2();
          var mydiv2 = border1();
          var mydiv3 = border4();
          var mydiv4 = border3();
          bor1.style.borderColor = mydiv1;
          bor2.style.borderColor = mydiv2;
          bor3.style.borderColor = mydiv3;
          bor4.style.borderColor = mydiv4;

          var img4 = document.getElementById("img");
      img4.setAttribute("src","schoolimg.jpg")
      img4.setAttribute("class","demo4")

          var a = document.getElementById("twop")
      a.setAttribute("class","sch2")
      bor2.setAttribute("class","sch2b")
      a.innerHTML = "<h3 class='learn'>What you learned from this?</h3>In this project, I upgraded CRUD operations, used mock APIs, managed local storage efficiently, ensured smooth navigation with JavaScript, and organized the structure for easier maintenance."
    
      var b = document.getElementById("onep")
      b.setAttribute("class","sch1")
      bor1.setAttribute("class","sch1b")
      b.innerHTML = "<h3> What is this?</h3>This school register website in JavaScript features CRUD functionality with a mock API and local storage. Users can add, update, and delete entries, and easily navigate through the interface."
    
      var c = document.getElementById("fourp")
      c.setAttribute("class","sch4")
      bor4.setAttribute("class","sch4b")
      c.innerHTML ="<h3>What technology used?</h3><div class='tech-used'><p>a.HTML</p><p>b.CSS</p><p>c.JAVASCRIPT</p><p>d.mockApi</p><p>e.localstorage</p></div>"
    
      var d = document.getElementById("threep")
      d.setAttribute("class","sch3")
      bor3.setAttribute("class","sch3b")
      d.innerHTML ="<h4>How much time you taken to complete?</h4>7 Days."

      
      var extra = document.querySelector(".about-project")
      extra.innerHTML="The project supports CRUD operations and utilizes mock API integration for backend simulation. It employs local storage for data persistence, offers seamless navigation, and utilizes JavaScript's window.location for smooth transitions. The user-friendly interface is complemented by error handling, responsive design, and data validation for enhanced usability and reliability."

      var schjs = document.querySelector(".livehref");
      schjs.setAttribute("href","https://js-school-register.web.app")

      var viewsch = document.querySelector(".viewhref");
      viewsch.setAttribute("href","https://github.com/PradeepMadhavan/school-register-js")
      }

      function five(){
      
        var mydiv1 = border2();
        var mydiv2 = border1();
        var mydiv3 = border4();
        var mydiv4 = border3();
        bor1.style.borderColor = mydiv1;
        bor2.style.borderColor = mydiv2;
        bor3.style.borderColor = mydiv3;
        bor4.style.borderColor = mydiv4;

        var img5 = document.getElementById("img");
    img5.setAttribute("src","hooks-page.png")
    img5.setAttribute("class","demo5")

        var a = document.getElementById("twop")
    a.setAttribute("class","hook2")
    bor2.setAttribute("class","hook2b")
    a.innerHTML = "<h3 class='learn'>What you learned from this?</h3>This project showcases CRUD operations in a React Hooks app, using useState for local state, useReducer for complex state management, and useContext for global data. It interacts with an external API for CRUD actions, providing a comprehensive example of React Hooks usage."
  
    var b = document.getElementById("onep")
    b.setAttribute("class","hook1")
    bor1.setAttribute("class","hook1b")
    b.innerHTML = "<h3> What is this?</h3>This is a CRUD operation in a React Hooks project, utilizing useState, useReducer, and useContext with an API."
  
    var c = document.getElementById("fourp")
    c.setAttribute("class","hook4")
    bor4.setAttribute("class","hook4b")
    c.innerHTML ="<h3>What technology used?</h3><div class='tech-used'><p>a.HTML</p><p>b.CSS</p><p>c.JAVASCRIPT</p><p>d.react hooks</p><p>e.mockApi</p></div>"
  
    var d = document.getElementById("threep")
    d.setAttribute("class","hook3")
    bor3.setAttribute("class","hook3b")
    d.innerHTML ="<h4>How much time you taken to complete?</h4>9 Days."

    
    var extra = document.querySelector(".about-project")
    extra.innerHTML="React.js simplifies UI development with its component-based structure and declarative syntax. Introduced in React 16.8, Hooks streamline state management and side effects in functional components, offering a more concise alternative to class components. Basic Hooks like useState and useEffect handle state and side effects efficiently, while custom Hooks promote code reusability. An example todo list project demonstrates Hooks' benefits in managing state, side effects, and component logic. In conclusion, React Hooks revolutionize React development, providing clarity, reusability, and maintainability over traditional approaches."


      var hookjs = document.querySelector(".livehref");
      hookjs.setAttribute("href","https://react-hooks-crud-18.web.app")

      var viewhook = document.querySelector(".viewhref");
      viewhook.setAttribute("href","https://github.com/PradeepMadhavan/HOOKS-IN-REACT")
      }

      // scroll

      $(document).ready(function () {
          $("a").on("click", function (event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
    
              $("html, body").animate(
                {
                  scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                  window.location.hash = hash;
                }
              );
            } 
          });
        });

      // get in touch

      const form = document.getElementById('contact-form');

      form.addEventListener('submit', function(event) {
          event.preventDefault();


          const fullName = document.getElementById('fname');
          const fullNameError = document.getElementById('name-error');
          if (fullName.value.trim() === '') {
              fullNameError.textContent = 'Please enter your full name';
              fullName.focus();
              return false;
          } else {
              fullNameError.textContent = '';
          }

          const email = document.getElementById('email');
          const emailError = document.getElementById('email-error');
          if (email.value.trim() === '') {
              emailError.textContent = 'Please enter your email';
              email.focus();
              return false;
          } else {
              emailError.textContent = '';
          }

          const mobileNumber = document.getElementById('mnumber');
          const numberError = document.getElementById('number-error');
          if (mobileNumber.value.trim() === '') {
              numberError.textContent = 'Please enter your mobile number';
              mobileNumber.focus();
              return false;
          } else {
              numberError.textContent = '';
          }

          this.submit();
      });




