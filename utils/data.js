
const userData = [
    {
        username: "john_doe",
        email: "john.doe@example.com",
        thoughts: [
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
        ],
        friends: ["jane_smith", "alexander123"]
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        thoughts: [
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
        ],
        friends: ["john_doe"]
      },
    {
      username: "alexander123",
      email: "alexander123@example.com",
      thoughts: [          
        {
        thoughtText: "Just finished a great book!",
        username: "alexander123",
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
      {
        thoughtText: "Having a great day",
        username: "alexander123",
        reactions: [
          {
            reactionBody: "That's really greate.",
            username: "jane_smith",
            createdAt: new Date()
          }
        ]
      },],
      friends: []
    },
    {
      username: "lisa_miller",
      email: "lisa.miller@example.com",
      thoughts: [{
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
      thoughts: [],
      friends: []
    },
    {
      username: "emily_wang",
      email: "emily.wang@example.com",
      thoughts: [],
      friends: []
    },
    {
      username: "david_clark",
      email: "david.clark@example.com",
      thoughts: [],
      friends: []
    },
    {
      username: "sophia_brown",
      email: "sophia.brown@example.com",
      thoughts: [],
      friends: []
    },
    {
      username: "ryan_gonzalez",
      email: "ryan.gonzalez@example.com",
      thoughts: [],
      friends: []
    },
    {
      username: "olivia_wilson",
      email: "olivia.wilson@example.com",
      thoughts: [],
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



  