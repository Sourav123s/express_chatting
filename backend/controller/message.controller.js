const Message = require("../models/message.model.js");
const Conversation = require("../models/conversation.model.js");
const { getReceiverSocketId, io } = require("../socket/socket.js");

async function sendMessage(req, res) {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    // first try find if there any conversation between them
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    // if there no conversation found
    if (!conversation) {
      //create a new conversation
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      // we push the message id to the conversation message variables
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    //Here we connet the socket for getting new messages
    if (receiverSocketId) {
      // io.to(<socket.io>).emit() used to send events to specific clients
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    return res.json({
      result: newMessage,
      message: "Message send successful",
      statusCode: 201,
    });
  } catch (error) {
    console.log("Error sending message:", error);
    return res.json({
      error: "Something went wrong!",
      statusCode: 500,
    });
  }
}
async function getMessage(req, res) {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate({
      path: "messages",
      //   populate: { path: "reciverId", select: ["fullName", "userName", "-_id"] },
    });
    if (!conversation) {
      return res.status(200).json({
        result: [],
      });
    }

    const message = conversation.messages;

    return res.json({
      result: message,
      statusCode: 200,
    });
  } catch (error) {
    console.log("Error get message:", error);
    return res.json({
      error: "Something went wrong!",
      statusCode: 500,
    });
  }
}
module.exports = {
  sendMessage,
  getMessage,
};
