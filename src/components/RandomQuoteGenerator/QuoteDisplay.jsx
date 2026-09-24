// QuoteDisplay.jsx
// PRESENTATIONAL COMPONENT ONLY -- receives all data/state via props.
// Do NOT add any state or fetch logic here; this must remain "dumb."
//
// PROPS:
//   quote: null | { text, author }
//   isLoading: boolean
//
// BEHAVIOR:
//   - While isLoading is true, show "Loading quote..." text.
//   - Once quote is loaded (!isLoading && quote), display the quote text
//     and author in a card.
//
// STRUCTURE (data-testid values, exact):
//   - Loading indicator: data-testid="loading-indicator" -> text "Loading quote..."
//   - Quote card: data-testid="quote-card" (shown when !isLoading && quote)
//   - Quote text: data-testid="quote-text" -> quote.text
//   - Quote author: data-testid="quote-author" -> "— " + quote.author
//
// REQUIRED CSS (inline style, exact values matter):
//   - loading-indicator: color "#6b7280", fontSize "14px"
//   - quote-card: backgroundColor "#f9fafb", borderRadius "8px",
//       padding "20px", marginTop "16px"
//   - quote-text: fontSize "18px", fontStyle "italic", marginBottom "12px"
//   - quote-author: fontSize "14px", color "#6b7280", textAlign "right"

export default function QuoteDisplay({ quote, isLoading }) {
  if (isLoading) {
    return (
      <div
        data-testid="loading-indicator"
        style={{ color: "#6b7280", fontSize: "14px" }}
      >
        Loading quote...
      </div>
    );
  }

  if (!quote) {
    return null;
  }

  return (
    <div
      data-testid="quote-card"
      style={{
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        padding: "20px",
        marginTop: "16px"
      }}
    >
      <div
        data-testid="quote-text"
        style={{ fontSize: "18px", fontStyle: "italic", marginBottom: "12px" }}
      >
        {quote.text}
      </div>
      <div
        data-testid="quote-author"
        style={{ fontSize: "14px", color: "#6b7280", textAlign: "right" }}
      >
        — {quote.author}
      </div>
    </div>
  );
}
