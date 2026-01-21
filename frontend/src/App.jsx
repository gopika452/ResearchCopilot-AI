import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", question);

    const res = await fetch("http://127.0.0.1:8000/research/ask", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>📄 ResearchCopilot AI</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Ask a question about the paper"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "400px", padding: "8px" }}
      />

      <br /><br />

      <button onClick={askQuestion} disabled={!file || !question}>
        Ask AI
      </button>

      <br /><br />

      {answer && (
        <>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </>
      )}
    </div>
  );
}

export default App;
