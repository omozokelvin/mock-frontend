export const sentenceCase = (sentence: string) => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
};

export const titleCase = (sentence: string, removeUnderscores = false) => {
  if (!sentence) {
    return '';
  }

  const transformedSentence = removeUnderscores
    ? sentence.replaceAll('_', ' ')
    : sentence;

  return transformedSentence
    .split(' ')
    .map((word) => sentenceCase(word))
    .join(' ');
};
