import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
  };

  let messagesList = List.empty<Message>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async Message {
    let newMessage = {
      name;
      email;
      message;
    };
    if (name.size() == 0) { Runtime.trap("Name cannot be empty.") };
    if (email.size() == 0) { Runtime.trap("Email cannot be empty.") };
    if (message.size() == 0) { Runtime.trap("Message cannot be empty.") };
    messagesList.add(newMessage);
    newMessage;
  };

  public shared ({ caller }) func clearMessages() : async () {
    messagesList.clear();
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messagesList.values().toArray();
  };
};
