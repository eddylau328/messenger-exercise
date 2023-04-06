# messenger-exercise

## Aims

To create a messenger app which allow basic communication between two users. The users can input their own messages and send them to each other through the server.

The Frontend is a simple layout for the messages and input messsage form.

- Each message block should show
  - sender's name
  - sender's message
  - sent time
- The sender and receiver message should be shown in the message layout
- An input field for typing your message
- An send button for sending out the message

The Backend should provide storing message and retrieving message

- Users can to get the list of messages
- Users can to send the their messages to server
- The server should store the messages from the users

## Design Process

### Backend

- [ ] create a server with 3 APIs

  - [X] GET /message --> return list of message
  - [X] POST /message --> create a message
  - [ ] GET / --> return the home page (web)

- [X] create two service functions
  - [X] retrieving all the messages
  - [X] append message to the list

### Frontend

- [ ] Visual Representation
  - [ ] create a message box for each message
  - [ ] create a layout for all the messages
- [ ] Data input
  - [ ] create a input field for typing message
  - [ ] create a send button for sending message
- [ ] API Calling
  - [ ] connect create message API
  - [ ] connect retrieve message API
  - [ ] update message list
