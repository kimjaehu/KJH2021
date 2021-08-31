const CreateSpans = (props) => {
  const { content } = props;
  const letters = content.split(/(\s+)/);
  let random;
  return letters.map((letter, idx) => {
    random = Math.floor(Math.random() * 4);
    return (
      <span className={`letter-${random}`} key={idx}>
        {letter}
      </span>
    );
  });
};

export default CreateSpans;
