export const chatCompletion = `
<script>
    const chatCompletion = {
        create: async function (messages) {
            const response = await fetch("/api/chat_completion", {
            method: "POST",
            body: JSON.stringify({ messages }),
            headers: {
                "Content-Type": "application/json",
            },
            
            });

            const { message } = await response.json();
            return message;
        }
    };
</script>
`;
