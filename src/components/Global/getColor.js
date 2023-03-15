import genres from './genres.json';

export default function getColor(tag) {
  return genres[tag.toLowerCase()];
}
