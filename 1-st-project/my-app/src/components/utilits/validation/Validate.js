export const required = (value) => value?undefined:'Must be filled!';

export const maxLength = (length) => (value) => value.length>length?`Maximum length is ${length} characters!`:undefined;

