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

- [x] create a server with 3 APIs

  - [x] GET /message --> return list of message
  - [x] POST /message --> create a message
  - [x] GET / --> return the home page (web)

- [x] create two service functions
  - [x] retrieving all the messages
  - [x] append message to the list

### Frontend

- [x] Visual Representation
  - [x] create a message box for each message
  - [X ] create a layout for all the messages
- [x] Data input
  - [x] create a input field for typing message
  - [x] create a send button for sending message
- [x] API Calling
  - [x] connect create message API
  - [x] connect retrieve message API
  - [x] update message list
