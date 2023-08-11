const Presentation = () => (
  <>
    <div class="flex justify-end absolute w-full lg:relative">
      <a
        href="/placeholder.pdf"
        target="_blank"
        class="flex p-1.5 bg-almostwhite rounded lg:absolute w-10 border-2 border-almostwhite hover:border-2 hover:border-secundary justify-center"
      >
        <img src="/cv.svg" alt="CV" />
      </a>
    </div>

    <div class="lg:flex lg:flex-row-reverse lg:gap-6">
      <div class="flex w-full mb-4 justify-between lg:flex-row-reverse lg:items-center lg:mb-0 lg:justify-center">
        <img
          src="/Bulbasaur.webp"
          class="rounded-full max-w-[100px] lg:max-w-[140px]"
        />
      </div>

      <div>
        <h1 class="text-4xl font-bold text-almostwhite mt-1 lg:mt-0">
          Chrestia Yoel
        </h1>
        <h2 class="text-2xl font-bold text-secundary mt-1">
          Front-end Developer
        </h2>
        <p class="text-almostwhite mt-1">
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
