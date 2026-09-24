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
