// Values stored for hacker object:
// name : text
// school : text
// major : text
// age : int
// attendedPreviously : bool
// previousHackathons : int
// email : text
// id : int
// receivedHack : bool

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hacker_models').del()
    .then(function () {
      const hackers = [{
        name: 'John Doe',
        age: 21,
        attendedPreviously: false,
        previousHackathons: 3,
        email: 'john@doe.com',
      },
      {
        name: 'Jane Doe',
        school: 'UCSC',
        major: 'Computer Science',
        age: 21,
        attendedPreviously: true,
        previousHackathons: 3,
        email: 'jane@doe.com',
      },
      {
        name: 'John Hack',
        school: 'UCSC',
        major: 'Computer Engineering',
        age: 18,
        attendedPreviously: false,
        previousHackathons: 2,
        email: 'jhack@usc.edu',
      }];

      return knex('hacker_models').insert(hackers);
    });
};
