import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export function P1(props) {
  return (
    <p
      className="mb-5 leading-relaxed first-letter:float-left first-letter:text-5xl first-letter:pr-3 first-letter:font-black"
      {...props}
    />
  );
}

export function P(props) {
  return <p className="mb-5 leading-relaxed" {...props} />;
}

export function H2(props) {
  return (
    <h2 className="font-sans text-3xl font-semibold pt-3 mb-5" {...props} />
  );
}

export function H3(props) {
  return <h3 className="font-sans text-2xl font-semibold mb-5" {...props} />;
}

export function Code(props) {
  return <code className="bg-gray-200 p-1 rounded-md" {...props} />;
}

export function CodeBlock(props) {
  return (
    <div className="mb-5">
      <SyntaxHighlighter
        useInlineStyles
        language="javascript"
        customStyle={{
          overflow: "hidden",
          backgroundColor: "rgba(243, 244, 246)",
          borderRadius: "0.5rem",
        }}
        lineProps={{
          style: {
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
          },
        }}
        wrapLines={true}
        {...props}
      />
    </div>
  );
}

export function Ol(props) {
  return <ol className="list-decimal mb-5 pl-5" {...props} />;
}

export function Ul(props) {
  return <ul className="list-decimal mb-5 pl-5" {...props} />;
}

export function Li(props) {
  return <li className="mb-2" {...props} />;
}

export function Blockquote({ quote, person }) {
  return (
    <blockquote className="relative p-4 pb-3 mb-5 text-xl italic border-l-4 border-neutral-500 quote">
      <span className="text-4xl absolute font-black text-gray-400 left-2 top-0">
        &ldquo;
      </span>
      <p className="mb-4 pt-2">{quote}</p>
      <cite className="flex">
        <span className="text-sm italic font-bold">- {person}</span>
      </cite>
    </blockquote>
  );
}
