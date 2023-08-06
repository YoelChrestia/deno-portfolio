const Presentation = () => (
  <>
    <div class="flex justify-end absolute w-full lg:relative">
      <a
        href="/placeholder.pdf"
        target="_blank"
        class="flex p-2 bg-almostwhite rounded lg:absolute w-10"
      >
        <img src="/cv.svg" alt="CV" />
      </a>
    </div>

    <div class="lg:flex lg:flex-row-reverse lg:gap-6">
      <div class="flex w-full mb-4 justify-between lg:flex-row-reverse lg:items-center lg:mb-0 lg:justify-center">
        <img
          src="/Bulbasaur.webp"
          class="rounded-full max-w-[100px] lg:max-w-[150px]"
        />
      </div>

      <div>
        <h1 class="text-3xl font-semibold text-almostwhite mt-1 lg:mt-0">
          Chrestia Yoel
        </h1>
        <h2 class="text-2xl font-medium text-accent mt-1">
          Front-end Developer
        </h2>
        <p class="text-secundary mt-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad
          nobis perspiciatis rerum adipisci modi deserunt repellendus,
          accusantium cupiditate ab hic sit delectus molestias, esse saepe error
          blanditiis laudantium debitis!
        </p>
      </div>
    </div>
  </>
);

export default Presentation;
