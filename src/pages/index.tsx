import CustomLink from "@/components/CustomLink";

const Home = () => {
  return (
    <div className="m-10 flex flex-col gap-10 md:m-20">
      <div className="text-5xl md:text-6xl">Hi, I&apos;m Alakh</div>

      <div className="text-md flex flex-col gap-2 text-lg md:text-xl">
        <p>
          <>I&apos;m currently studying Software Engineering at the </>
          <CustomLink
            text="University of Waterloo."
            url="https://uwaterloo.ca"
          />
        </p>

        <p>
          <>Check out some of my work </>
          <CustomLink text="here." url="https://github.com/alakhpc" />
        </p>

        <p className="mt-4">
          <>You can reach out to me by </>
          <CustomLink text="email" url="mailto:alakhpc@gmail.com" />
          <> or on </>
          <CustomLink text="linkedin." url="https://linkedin.com/in/alakhpc" />
        </p>

        <p className="mt-4 text-xl">
          <CustomLink text="Resume" url="/resume" />
        </p>
      </div>
    </div>
  );
};

export default Home;
