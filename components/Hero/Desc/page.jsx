export default function Desc() {
  const desc =
    "I am a passionate web developer with a strong interest in the evolving field of Generative AI. I am fascinated by the potential of AI to revolutionize the way we interact with the digital world, and I am committed to using my skills to create innovative and adaptable web applications that incorporate AI capabilities.";

  const renderedDesc = desc.split(" ").map((word, index) => {
    return (
      <span className="px-1 text-[#e9e7e1]" key={index}>
        {word}
      </span>
    );
  });

  return (
    <div className="h-auto max-w-[600px] overflow-hidden overflow-ellipsis whitespace-nowrap">
      {renderedDesc}
    </div>
  );
}
