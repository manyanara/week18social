
const userData = [
    {
        username: "john_doe",
        email: "john.doe@example.com",
        thoughtId:[],
        friends: ["jane_smith", "alexander123"]
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        thoughtId:[],
        friends: ["john_doe"]
      },
    {
      username: "alexander123",
      email: "alexander123@example.com",
      thoughtId:[],
      friends: []
    },
    {
      username: "lisa_miller",
      email: "lisa.miller@example.com",
      thoughtId: [{
        thoughtText: "What a beautiful song!",
        username: "lisa_miller",
        reactions: [
          {
            reactionBody: "Wow, that sounds amazing!",
            username: "alexander123",
            createdAt: new Date()
          }
        ]
      },],
      friends: ["alexander123"]
    },
    {
      username: "mike_anderson",
      email: "mike.anderson@example.com",
      thoughtId: [],
      friends: []
    },
    {
      username: "emily_wang",
      email: "emily.wang@example.com",
      thoughtId: [],
      friends: []
    },
    {
      username: "david_clark",
      email: "david.clark@example.com",
      thoughtId: [],
      friends: []
    },
    {
      username: "sophia_brown",
      email: "sophia.brown@example.com",
      thoughtId: [],
      friends: []
    },
    {
      username: "ryan_gonzalez",
      email: "ryan.gonzalez@example.com",
      thoughtId: [],
      friends: []
    },
    {
      username: "olivia_wilson",
      email: "olivia.wilson@example.com",
      thoughtId: [],
      friends: []
    }
  ]
  

const thoughtData = [
    {
        thoughtText: "What a beautiful day!",
        username: "john_doe",
        reactions: [
          {
            reactionBody: "Wow, that sounds amazing!",
            username: "alice_smith",
            createdAt: new Date()
          },
          {
            reactionBody: "I completely agree!",
            username: "bob_jones",
            createdAt: new Date()
          }
        ]
      },
      {
        thoughtText: "Just finished a great book!",
        username: "jane_smith",
        reactions: [
          {
            reactionBody: "This made my day!",
            username: "charlie_brown",
            createdAt: new Date()
          },
          {
            reactionBody: "That's really interesting.",
            username: "diana_doe",
            createdAt: new Date()
          }
        ]
      },
]
    


module.exports = { userData, thoughtData };



  