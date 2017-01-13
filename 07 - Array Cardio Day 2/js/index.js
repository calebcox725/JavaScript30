const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some() // is at least one person 19 or older?
function adult_check(person) {
  const this_year = new Date().getFullYear()
  return this_year - person.year >= 19
}
const has_adult = people.some(adult_check)

// Array.prototype.every() // is everyone 19 or older?
const all_adults = people.every(adult_check)

// Array.prototype.find() // find the comment with the ID of 823423
function find_comment_by_id(id) {
  return comments.find(comment => comment.id == id)
}
const found_comment = find_comment_by_id(823423)

// Array.prototype.findIndex() // delete the comment with the ID of 823423
function delete_comment_by_id(id) {
  const index = comments.findIndex(comment => comment.id == id)
  let new_comments = [...comments]
  new_comments.splice(index, 1)
  return new_comments
}
const new_comments = delete_comment_by_id(823423)