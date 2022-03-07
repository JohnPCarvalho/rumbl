# Phoenix Channels

## What the heck is a Phoenix Channel?

  A channel is the process in which the server and the client comunicate, is a conversation, per se. It receives messages and keeps state. 
  The state is put in a struct called "socket", and the messages are called "events".
  All of Phoenix's conversations are about a single 'topic', what is this topic? Is what the conversation is about. Think of a chat room application, or a game, or a local map,
  more than one user could be interested in using these resources (interested in the same 'topic'), at the same time. The Phoenix Channels gives us tools to help organize the code
  and the communication among users.
  The concept that makes channels powerful is that **each 'conversation' on a topic has its own *isolated dedicated process* **.

  Whereas the conversations are stateless or not, conversations in long run can be stateful, this means that
  the last one will be called to start off where it left last time.

## How sockets work? How to I access or manipulate the information of a socket?
  
  A socket is a struct (a map in Elixir) that stores its state via the Phoenix.Socket struct
  It is a responsibility of the socket to tie channels and transports as well.
  

## What is the use of a Phoenix Channel?

  It is useful to enable real-time communication between a large number of clients, some use cases like:
    - Chat rooms
    - APIS for messengers
    - Events in multiplayer games
    - monitoring sensors
  ... and so on.

  Because channels create a isolated and dedicated process to each one of the connections, the processes won't bleed into the others and they are also all independent from each other.


