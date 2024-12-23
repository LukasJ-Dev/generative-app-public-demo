import { generateCode } from "./ai_langchain";
import { chatCompletion } from "./javascript_libs";

export async function POST(request: Request) {
  const { idea } = await request.json();

  const { htmlCode, javascript } = await generateCode(idea);
  const appCode = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${idea}</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    ${chatCompletion}
</head>
<body>

${htmlCode}
</body>
    <script> 
    ${javascript}
    </script>
</html>
`;

  return Response.json({ appCode });
}
