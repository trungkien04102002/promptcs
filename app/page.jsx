// import Feed from "@components/Feed";
import PromptCard from "@components/PromptCard";
import SearchText from "@components/SearchText";
const test = [1, 2, 3, 4, 5];
const Home = () => (
  <>
    <div className="hidden md:flex justify-end absolute top-5 right-1">
      <button className="btn mr-2  border-rose-500 hover:bg-amber-400 hover:text-white ">Login</button>
      <button className="btn hover:bg-amber-400 hover:text-white">Register</button>
    </div>
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
      </section>
    </div>
    <div className="mt-[20px]">
      {" "}
      <SearchText />
    </div>
    <div className="flex flex-wrap justify-around mt-8 gap-y-[30px]">
      {" "}
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
    </div>
  </>
);

export default Home;
