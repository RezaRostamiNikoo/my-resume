
import Head from "next/Head";
import data from "../data";

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>{`${data.author.first_name} ${data.author.last_name}`} | Resume</title>
      </Head> */}


      <div class="container mx-auto max-w-screen-xl">
        <main
          id="wrapper"
          class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
        >
          <div
            id="sidebar"
            class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
          >
            <div class="px-2 mb-12">
              <img src="./assets/images/profile.jpg"
                alt="Profile Picture"
                class="rounded-full w-48 mx-auto mb-2"
              />
              <h1 class="text-center text-3xl font-semibold mb-2">Danny Dev</h1>
              <h2 class="text-center text-xl font-light">Fullstack Developer</h2>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Contact</h2>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/mail-outline.svg"
                  class="inline w-6 mr-4"
                  alt="Mail icon"
                />
                <a href="mailto:">RezaRostaminikoo@gmail.com</a>
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/call-outline.svg"
                  class="inline w-6 mr-4"
                  alt="Phone icon"
                />
                <a href="tel:">343 297 1271</a>
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/home-outline.svg"
                  class="inline w-6 pb-1 mr-4"
                  alt="House icon"
                />
                <div>
                  <p>Ottawa, Canada</p>
                </div>
              </div>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Personal</h2>
              <div class="flex items-center my-3">
                {/*  */}
                <img
                  src="./assets/images/egg-outline.svg"
                  class="inline w-6 mr-4"
                  alt="Egg Icon"
                />
                <span>Born on 4th of July 1993</span>
              </div>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">On the Web</h2>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/logo-github.svg"
                  class="inline w-6 mr-4"
                  alt="GitHub Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/logo-stackoverflow.svg"
                  class="inline w-6 mr-4"
                  alt="Stack Overflow Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer"
                >StackOverflow</a
                >
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/logo-linkedin.svg"
                  class="inline w-6 mr-4"
                  alt="LinkedIn Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/logo-twitter.svg"
                  class="inline w-6 mr-4"
                  alt="Twitter Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer"
                >@twitter_handle</a
                >
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/logo-codepen.svg"
                  class="inline w-6 mr-4"
                  alt="CodePen Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">CodePen</a>
              </div>
              <div class="flex items-center my-3">
                <img
                  src="./assets/images/globe-outline.svg"
                  class="inline w-6 mr-4"
                  alt="Globe icon"
                />
                <a href="#" target="_blank" rel="noopener noreferrer"
                >Portfolio</a
                >
              </div>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
              <ul class="list-none">
                <li>
                  <label for="js-skill">JavaScript</label>
                  <progress id="js-skill" max="100" value="70"></progress>
                </li>
                <li>
                  <label for="vue-skill">Vue / Vuex</label>
                  <progress id="vue-skill" max="100" value="80"></progress>
                </li>
                <li>
                  <label for="react-skill">React</label>
                  <progress id="react-skill" max="100" value="66"></progress>
                </li>
                <li>
                  <label for="nextjs-skill">Next.js</label>
                  <progress id="nextjs-skill" max="100" value="72"></progress>
                </li>
                <li>
                  <label for="eleventy-skill">Eleventy</label>
                  <progress id="eleventy-skill" max="100" value="66"></progress>
                </li>
                <li>
                  <label for="node-skill">Node / Express.js</label>
                  <progress id="node-skill" max="100" value="45"></progress>
                </li>
                <li>
                  <label for="css-skill">SCSS</label>
                  <progress id="css-skill" max="100" value="75"></progress>
                </li>
                <li>
                  <label for="design-skill">Inkscape / Figma</label>
                  <progress id="design-skill" max="100" value="62"></progress>
                </li>
                <li>
                  <div>Infrastructure / Hosting / DB</div>
                  <p class="leading-8 flex flex-wrap gap-1">
                    <span class="rounded-xl bg-gray-300 px-3">AWS</span>
                    <span class="rounded-xl bg-gray-300 px-3">Vercel</span>
                    <span class="rounded-xl bg-gray-300 px-3">Heroku</span>
                    <span class="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                    <span class="rounded-xl bg-gray-300 px-3">MongoDB</span>
                    <span class="rounded-xl bg-gray-300 px-3">SQLite</span>
                  </p>
                </li>
              </ul>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Education</h2>
              <h3 class="font-semibold">BSc Computer Science</h3>
              <p>2016 - 2019 University of London</p>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Languages</h2>
              <h3 class="font-semibold">German</h3>
              <p>Native</p>
              <h3 class="font-semibold">English</h3>
              <p>Fluent</p>
            </div>
          </div>
          <div class="content w-full p-12">
            <div id="profile" class="prose">
              <h2 class="section-headline">Profile</h2>
              <p>
                I&apos;m a self-taught web developer focusing on the core web
                fundamentals - HTML, CSS and JS. I&apos;m experienced in frontend
                frameworks like Vue and React and static site generators like
                Next.js and Eleventy. I write SCSS or use CSS frameworks like
                TailwindCSS, Bootstrap or Bulma to speed up styling of my
                projects.
              </p>
              <p>
                I am highly motivated in expanding my horizons day by day for
                better performance, testing and user experience.
              </p>
            </div>
            <hr class="mt-8 mb-12" />
            <div id="experience" class="prose">
              <h2 class="section-headline">Experience</h2>
              <div>
                <h3>Example Inc</h3>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Jul.&nbsp;2019:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    Fullstack Developer
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Task:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Description:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Tools:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    <span class="rounded-xl bg-gray-300 px-3">Vue</span>
                    <span class="rounded-xl bg-gray-300 px-3">Vuex</span>
                    <span class="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                    <span class="rounded-xl bg-gray-300 px-3">Docker</span>
                    <span class="rounded-xl bg-gray-300 px-3">Git</span>
                    <span class="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                    <span class="rounded-xl bg-gray-300 px-3">Jira</span>
                  </div>
                </section>
              </div>
            </div>
            <hr class="mt-8 mb-12" />
            <div id="projects" class="prose">
              <h2 class="section-headline">Projects</h2>
              <div class="mb-16">
                <h3 id="chrisko-headline">Chrisko.io</h3>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Personal blog:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    My blog is the center of my online presence. Here, I share
                    posts about what I&apos;ve learnt, tutorials and my thoughts on web
                    development in general.
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Deployed to:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    <a
                      href="https://chrisko.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >chrisko.io</a
                    >
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Code on:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    <a
                      href="https://github.com/christiankozalla/nextjs-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >GitHub/nextjs-blog</a
                    >
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Features:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    <ul>
                      <li>Static generation</li>
                      <li>Blog content written in Markdown</li>
                      <li>Counter for pageviews and likes</li>
                      <li>My latest tweets</li>
                      <li>Featured images made with Inkscape</li>
                      <li>SEO</li>
                    </ul>
                  </div>
                </section>

                <section class="mb-6">
                  <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Built with:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    <span class="rounded-xl bg-gray-300 px-3">Next.js</span>
                    <span class="rounded-xl bg-gray-300 px-3">CSS</span>
                    <span class="rounded-xl bg-gray-300 px-3">styled-jsx</span>
                    <span class="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                    <span class="rounded-xl bg-gray-300 px-3">Vercel</span>
                  </div>
                </section>
              </div>
            </div>
            <hr class="mt-8 mb-12" />
            <div id="projects" class="prose">
              <h2 class="section-headline">Expand my skills</h2>
              <div class="mb-16">
                <h4 id="expand-knowledge-headline">
                  I&apos;d like to expand my skills and knowledge in several fields
                </h4>
                <ul>
                  <li>TypeScript</li>
                  <li>Testing, e.g. with Mocha, Chai, Jest</li>
                  <li>Web Components, e.g. with StencilJS, LitElement</li>
                  <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
                  <li>Scalable Vector Graphics</li>
                  <li>Databases</li>
                  <li>Mobile development</li>
                  <li>
                    Backend development, e.g. learn additional language like Go,
                    Python, PHP, Ruby, Java, Rust
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer
        class="mt-12 text-center flex justify-center flex-col md:flex-row mx-12"
      >
        <a
          href="https://chrisko.io/"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >Made with ❤️ by Chrisko</a
        >
        <a
          href="https://tailwindcss.com/"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >TailwindCSS</a
        >
        <a
          href="https://vitejs.dev/"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >Vite</a
        >
        <a
          href="https://github.com/L33T-KR3W/push-dir"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >Push Dir</a
        >
        <a
          href="https://ionicons.com/"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >Ionicons</a
        >
        <a
          href="https://unsplash.com/@jackofallstreets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >Photo by Jack Finnigan</a
        >
      </footer>
    </>
  )
}

export default Home;