import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  HumanMessage,
  SystemMessage,
  AIMessage,
} from "@langchain/core/messages";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const parser = new StringOutputParser();
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
  });

  const messagesArray = messages.map((message: any) => {
    if (message.role === "assistant") {
      return new AIMessage(message.content);
    } else if (message.role === "system") {
      return new SystemMessage(message.content);
    } else {
      return new HumanMessage(message.content);
    }
  });

  const result = await model.invoke(messagesArray);

  const response = await parser.invoke(result);

  return Response.json({ message: { content: response, role: "assistant" } });
}
