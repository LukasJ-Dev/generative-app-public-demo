import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { system_prompt } from "./system_prompt";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import z from "zod";

export async function generateCode(query: string) {
  const parser = new StringOutputParser();
  const model = new ChatOpenAI({
    model: "gpt-4o",
  });
  const messages = [new SystemMessage(system_prompt), new HumanMessage(query)];

  const instructions = await model.invoke([
    new SystemMessage(system_prompt),
    // Detailed instructions
    new SystemMessage(
      `Create a detailed plan & instructions on how to create the app based on the user query. It will later be used to generate the code.
      Include the following:
        - features
        - design
        - functionality
        - user interaction
        - use cases
        - constraints
        - wow factors
      Remember to make an useful app or/and a app with a very high wow factor.
      `
    ),
    new HumanMessage(query),
  ]);

  const format = z.object({
    htmlCode: z.string().describe("The html code"),
    javascript: z.string().describe("The javascript code"),
  });

  const structuredLlm = model.withStructuredOutput(format);

  console.log(instructions.content.toString());
  const response = await structuredLlm.invoke([
    new SystemMessage(system_prompt),
    new HumanMessage(instructions.content.toString()),
  ]);

  return response;
}
