personal 2023 rec'd-recs tracker

new year's resolution – to listen to new music

every release someone recommends in the new year, we can log it!

- once someone listens to an album, they will add a liner note that will rate the album, and add any additional comments about their listening experience (if they want to)
- a user can add a standout track from that album if they wanted to (not required)
- maybe in the "liner notes", a user can add comments about the album


- Collections:
    - records
    - users
    - linerNotes

- a user can have many liner notes (1:M)
- a liner note belongs to one user (1:1)
((together, this is a 1:M relationship))

- a record can have one note (1:1)
((if the note is supposed to be 1 to 1 with a record it should just be an atrribute without a collection))
((if the intention of notes comment / usable / visible to multiple users then it will need owner))

- a record can have many liner notes (1:M)
- a user can have many records (1:M)
- a user can have many liner notes (1:M)


models:

record:
    - artistName: String
    - albumTitle: String
    - yearReleased: Number
    - comments: String
    - linerNote: [linerNoteSchema]

    // should this be written like so?
    - linerNotes {rating: Number, standoutTrack: String (not required), comments: String (not required)}
    // or in its own schema like so??

linerNote:
    - rating (required: true)
    - standoutTrack (required: false)
    - thoughts (required: false)
    - owner (required: true)

user:
    - email
    - password




features:























User Stories:

- As a user, I want to log an album recommended to me by someone else.
- As a user, I want to see a full list of recommended albums I've logged.
- As a user, I want to be able to update an album recommendation.
- As a user, I want to be able to delete an album recommendation.
- As a user, I want to be able to rate an album recommended to me after I have listened to the album.
- As a user, I want to be able to log a track that stood out to me after I listened to the album.
- As a user, I want to be able to write a comment about an album (defined as a "thought") (if I had a thought to write).
- As a user, I want to be able to update a "liner note" (album rating, standout track, or thought)
- As a user, I want to be able to create an account.
- As a user, I want to be able to sign in to my account.

Version 2:
- As a user, I want to be able to sign out of my account.
- As a user, I want to be able to rank my recommended albums by rating (high to low, low to high).
- As a user, I want to add the respective album cover to the logged album.
- As a user, I want a diary that will show me when I logged each album and liner note update.

Version 3 (Monthly Record Swap Feature):
- As a user, I want to recommend albums to other users.
- As a user, I want to be given a random album recommended to me.
- As a user, I want to be given an album recommendation for as many albums I choose to recommend (up to 5 records a month).
- As a user, I want the albums I am being recommended to come from another user recommending an album.
- As a user, I want to store previous album recommendations in a separate online log.
- As a user, I want to be able to separate my album recommendations from my "personal recommendations" log and my "online recommendations" log.