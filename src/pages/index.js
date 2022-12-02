import Skill from "../components/Skill";
import data from "../data";

import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
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
              <h1 class="text-center text-3xl font-semibold mb-2">{data.author.first_name + " " + data.author.last_name}</h1>
              <h2 class="text-center text-xl font-light">{data.author.title}</h2>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Contact</h2>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="ph:envelope" /></i>
                <a href="mailto:">RezaRostaminikoo@gmail.com</a>
              </div>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"> <Icon icon="material-symbols:phone-enabled-sharp" /></i>
                <a href="tel:">343 297 1271</a>
              </div>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="material-symbols:location-home" /></i>
                <div>
                  <p>Ottawa, Canada</p>
                </div>
              </div>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Personal</h2>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="fluent-emoji-high-contrast:birthday-cake" /></i>
                <span>Born on 4th of July 1993</span>
              </div>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">On the Web</h2>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="mdi:github" /></i>
                <a href="https://github.com/RezaRostamiNikoo" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="vscode-icons:file-type-gitlab" /></i>
                <a href="https://gitlab.com/rezarostaminikoo" target="_blank" rel="noopener noreferrer">GitLab</a>
              </div>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="mdi:linkedin" color="#0a66c2" /></i>
                <a href="https://www.linkedin.com/in/reza-rostaminikoo-230a5913a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div class="flex items-center my-3">
                <i class="inline text-2xl mr-4"><Icon icon="mdi:twitter" color="#1d9bf0" /></i>
                <a href="https://twitter.com/RostamiNikoo" target="_blank" rel="noopener noreferrer"
                >@RostamiNikoo</a>
              </div>
              {/* <div class="flex items-center my-3">
                <img
                  src="./assets/images/logo-codepen.svg"
                  class="inline w-6 mr-4"
                  alt="CodePen Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">CodePen</a>
              </div> */}
              {/* <div class="flex items-center my-3">
                <img
                  src="./assets/images/globe-outline.svg"
                  class="inline w-6 mr-4"
                  alt="Globe icon"
                />
                <a href="#" target="_blank" rel="noopener noreferrer"
                >Portfolio</a
                >
              </div> */}
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
              <ul class="list-none">
                <Skill title="Docker" value="70" />
                <Skill title="Ansible" value="70" />
                <Skill title="Gitlab CI/CD" value="70" />
                <Skill title="javascript" value="70" />
                <Skill title="React" value="70" />
                <Skill title="Next.js" value="70" />
                <Skill title="Laravel" value="90" />
                <Skill title="Figma" value="40" />
                <li>
                  <div>Infrastructure / Hosting / DB</div>
                  <p class="leading-8 flex flex-wrap gap-1">
                    <Skill title="Ansible" />
                    <Skill title="GitLab CI/CD" />
                    <Skill title="Docker" />
                  </p>
                </li>
              </ul>
            </div>

            <div class="font-light text-lg px-2 mb-12">
              <h2 class="text-xl font-semibold mb-4">Languages</h2>
              <h3 class="font-semibold">English</h3>
              <p>Fluent</p>
              <h3 class="font-semibold">Persian</h3>
              <p>Native</p>
            </div>
          </div>
          <div class="content w-full p-12">
            <div class="pose">
              <h2 class="section-headline mb-4">Education</h2>
              <div class="font-light text-lg px-2 mb-6">
                <h3 class="font-semibold">PhD in Civil Engineering</h3>
                <h3>University of Ottawa</h3>
                <p>Fall 2022 - present</p>
              </div>
              <div class="font-light text-lg px-2 mb-6">
                <h3 class="font-semibold">MSc in Construction Engineering and Management</h3>
                <h3>Iran University of Science and Technology</h3>
                <p>Fall 2016 - Summer 2019</p>
              </div>
              <div class="font-light text-lg px-2">
                <h3 class="font-semibold">BSc in Civil Engineering</h3>
                <h3>Islamic Azad University Najafabad Branch</h3>
                <p>Fall 2011 - Spring 2015</p>
              </div>
            </div>
            <hr class="mt-8 mb-12" />
            <div class="prose">
              <h2 class="section-headline mb-4">Experience</h2>
              <div>
                <div class="flex justify-between">
                  <h3 class="font-semibold">Viratarhe Farda Co.</h3>
                  <p class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Jan&nbsp;2022 - Agust&nbsp;2022
                  </p>
                </div>
                <section class="mb-2">
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    Fullstack Developer
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-4/12 lg:align-top italic mb-2">
                    Task:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full">
                    When I joined the team they were at the state of 40% progression in backend, and 0% in front-end. Then I became in charge of <b>designing</b> and <b>developing</b> the database and the back-end codes with the <b>Laravel</b> framework. After progressing 90 percent in the back-end part, I was switched to start managing and developing the front-end with <b>React.js</b> library. I was responsible for <b>managing</b> a front-end team consisting of <b>4</b> people.
                    Meanwhile, I had been collaborating with devops team to implement a pipeline. I would <b>dockerize</b> the back-end and the front-end and write <b>gitlab ci/cd</b> workflow to test and create image from project by <b>docker in docker (dind)</b> technology, and then with the help of <b>ansible (playbooks) </b>I would make configuring and deploying automatic.
                  </div>
                </section>
                <section class="mb-6">
                  <div class="lg:inline-block lg:w-4/12 lg:align-top italic mb-2">
                    Tools:
                  </div>
                  <div class="lg:inline-block lg:w-8/12 w-full flex gap-1 flex-wrap">
                    <Skill title="Docker" />
                    <Skill title="Gitlab CI/CD" />
                    <Skill title="Ansible" />
                    <Skill title="React" />
                    <Skill title="Laravel" />
                  </div>
                </section>
              </div>
            </div>
            <hr class="mt-8 mb-12" />
            <div class="prose">
              <h2 class="section-headline mb-4">Projects</h2>
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
            <div class="prose">
              <h2 class="section-headline  mb-4">Expand my skills</h2>
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
      <footer class="mt-12 text-center flex justify-center flex-col md:flex-row mx-12">
        <a
          href="https://www.freepik.com/free-vector/branding-identity-corporate-vector-logo-r-design_23214892.htm#query=R&position=12&from_view=search&track=sph"
          class="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
        >Image by Rochak Shukla on Freepik</a>
      </footer>
    </>
  )
};
