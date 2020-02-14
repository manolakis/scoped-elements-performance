let counter = 0;
const SUFFIX = 'ˈ'; //Open-WC

const toDashCase = name => {
  const dashCaseLetters = [];

  for (let i = 0; i < name.length; i += 1) {
    const letter = name[i];
    const letterLowerCase = letter.toLowerCase();

    if (letter !== letterLowerCase && i !== 0) {
      dashCaseLetters.push("-");
    }

    dashCaseLetters.push(letterLowerCase);
  }

  return dashCaseLetters.join("");
};

const isTagRegistered = (registry, name) => !!registry.get(name);

const incrementTagName = (registry, tag) => {
  const newName = `${tag}${(counter += 1)}`;

  if (isTagRegistered(registry, newName)) {
    return incrementTagName(registry, tag);
  }

  return newName;
};

export const createUniqueTag = (registry, tagName) => {
  if (tagName) {
    // maybe we should clean the tagName to valid characters
    const tag = `${toDashCase(tagName)}${SUFFIX}`;

    if (isTagRegistered(registry, tag)) {
      return incrementTagName(registry, tag);
    }

    return tag;
  }

  return incrementTagName(registry, SUFFIX);
};
