import Link from "next/link";

const NewPromptForm = ({ post, setPost, submitting, handleSubmit }) => {
  const type = "Create";
  return (
    <section className="w-full max-w-full flex-start flex-col m-auto">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form
        // onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold text-base text-gray-700">
            Topic <span className="font-normal"></span>
          </span>
          <input
            // value={post.tag}
            // onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="DevOps, Marketing, etc."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Description
          </span>
          <textarea
            // value={post.prompt}
            // onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Description for your prompt"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            // value={post.prompt}
            // onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700">
            Tag of Prompt{" "}
          </span>
          <input
            // value={post.tag}
            // onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="SEO, marketing email, etc."
            required
            className="form_input"
          />
          <div className="mt-[10px]">
            <span className="text-xs">
              <span className="text-xs text-blue-700">Tags</span> are used to
              help the community find your prompt. You can add up to 5 tags.
              Each can be up to two words and must consist of letters and spaces
              only.
            </span>
          </div>
        </label>

        <div class="flex gap-3 max-w-sm">
          <button class="py-2.5 px-6 rounded-lg text-sm font-medium bg-sky-200 text-sky-800 hover:bg-sky-300">
          <Link href="/">
            Cancel
          </Link>
          </button>
          <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-sky-600 hover:bg-sky-900">
          Create
          </button>
        </div>

        {/* <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Create
          </button> */}
          {/* <button
        type="submit"
        disabled={submitting}
        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
      >
        {submitting ? `${type}ing...` : type}
      </button> */}
        {/* </div> */}
      </form>
    </section>
  );
};

export default NewPromptForm;
