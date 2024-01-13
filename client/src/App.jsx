import "./index.css";

// NOTE \\
// - In React js, to use inline style you need to set styling properties as an object
//   e.g style={{ fontSize: 20px }}. also note that styling props use the camel case format
// - In react also all html elements require a closing tag. example <img /> not <img>. this is why your
//   page didn't load
// - I also know that you copied and pasted this form 🙄 however, make sure you understand what you copy

// Things i've done \\

// - i added bootrap as a directory
// - removed unessary files from the folder structure.

// WHAT TO DO: \\
// - Remove the register button
// - Uncomment the img tag & fix by closing the element tag
// - Fix the inline style error on line 71
// - correct the all the html class property to use className
// - correct the html for property to use htmlFor in your input lable tag line 47 & 60.
// - aligin your form and the image to the center of the page heught. It is too close to the top
// - open dev tools in your browser to see application errors and debugging.

// GOODLUCK 👍🏽

function App() {
  return (
    <>
      {/* <h1>Wakanda Zone</h1> */}
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              > */}
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  >
                    Login
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
