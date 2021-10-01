import { useState } from "react";
import { VscComment } from "react-icons/vsc";
import { Button, TextField } from "@mui/material";

export function CommentForm({
  title = "Leave a comment",
  submitText = "Submit",
  haveCancel = false,
  onCancel,
}) {
  const [form, setForm] = useState({ name: "", comment: "" });
  function handleChangeForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function resetForm() {
    setForm({ name: "", comment: "" });
  }
  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-2xl mb-4">{title}</h4>
      <TextField
        className="w-full mb-3 font-serif"
        name="name"
        value={form.name}
        id="name-textarea"
        placeholder="Your name"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "2px solid #693c20",
            },
            borderRadius: 0,
            fontFamily: "sans-serif",
          },
        }}
        onChange={handleChangeForm}
      />
      <TextField
        className="w-full"
        name="comment"
        value={form.comment}
        id="comment-textarea"
        placeholder="Comment"
        minRows={3}
        multiline
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "2px solid #693c20",
            },
            borderRadius: 0,
            fontFamily: "sans-serif",
          },
        }}
        onChange={handleChangeForm}
      />
      <div className="font-sans flex items-center mb-5 mt-4 justify-end gap-3">
        {!!haveCancel && (
          <button
            class="px-6 py-3 text-sm font-medium border-0 focus:outline-none focus:ring transition focus:ring-gray-200"
            onClick={() => {
              resetForm();
              onCancel();
            }}
          >
            Cancel
          </button>
        )}
        <button
          class="px-6 py-3 text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-black hover:bg-prim-6 active:bg-prim-6 focus:ring-gray-200"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export function Comment({ comment }) {
  const [replying, setReplying] = useState(false);
  return (
    <div className="flex flex-col mb-6 leading-relaxed">
      <span>
        <span className="text-sm mb-4 underline">{comment.name}</span>
        <span className="text-sm text-gray-400 mx-2">·</span>
        <span className="text-sm text-gray-400">{comment.time}</span>
      </span>
      <span className="mt-2">{comment.content}</span>
      <div className="flex gap-6 mb-2">
        <button
          class="self-start py-2 font-sans text-sm tracking-widest border-0"
          onClick={() => setReplying((prev) => !prev)}
        >
          <div className="flex items-center gap-2">
            <VscComment />
            REPLY
          </div>
        </button>
        <button class=" text-gray-400 self-start py-2 font-sans text-sm tracking-widest border-0">
          REPORT
        </button>
      </div>
      {!!replying && (
        <CommentForm
          title={`Reply to ${comment.name}`}
          submitText="Reply"
          haveCancel
          onCancel={() => setReplying(false)}
        />
      )}
      {comment?.comments?.map((childComment) => (
        <ChildComment childComment={childComment} />
      ))}
    </div>
  );
}

function ChildComment({ childComment }) {
  const [replying, setReplying] = useState(false);
  return (
    <div>
      <div className="flex pt-2 flex-col pl-4 sm:pl-5 md:pl-6 border-l-2">
        <span>
          <span className="text-sm mb-4 underline">{childComment.name}</span>
          <span className="text-sm text-gray-400 mx-2">·</span>
          <span className="text-sm text-gray-400">{childComment.time}</span>
        </span>
        <span className="mt-2">{childComment.content}</span>
        <div className="flex gap-6 mb-2">
          <button
            class="self-start   py-2 font-sans text-sm tracking-widest border-0"
            onClick={() => setReplying((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              <VscComment />
              REPLY
            </div>
          </button>
          <button class=" text-gray-400 self-start py-2 font-sans text-sm tracking-widest border-0">
            REPORT
          </button>
        </div>
      </div>
      {!!replying && (
        <div className="ml-6">
          <CommentForm
            title={`Reply to ${childComment.name}`}
            submitText="Reply"
            haveCancel
            onCancel={() => setReplying(false)}
          />
        </div>
      )}
      {childComment?.comments?.map((grandComment) => (
        <GrandComment grandComment={grandComment} />
      ))}
    </div>
  );
}

function GrandComment({ grandComment }) {
  return (
    <div className="flex flex-col pl-4 sm:pl-5 md:pl-6 border-l-2">
      <div className="flex flex-col pl-4 sm:pl-5 md:pl-6 border-l-2">
        <span>
          <span className="text-sm mb-4 underline">{grandComment.name}</span>
          <span className="text-sm text-gray-400 mx-2">·</span>
          <span className="text-sm text-gray-400">{grandComment.time}</span>
        </span>
        <span className="mt-2">{grandComment.content}</span>
        <div className="flex gap-6 mb-2">
          <button class=" text-gray-400 self-start py-2 font-sans text-sm tracking-widest border-0">
            REPORT
          </button>
        </div>
      </div>
    </div>
  );
}
