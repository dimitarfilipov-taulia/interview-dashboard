import { useState, useEffect } from "react";
import QuoteDisplay from "./QuoteDisplay";
import { fetchQuote } from "../../lib/quotesApi";

// TODO: Build the CONTAINER logic here. This component owns ALL state
// and fetch logic, and passes data DOWN to QuoteDisplay
// QuoteDisplay must stay presentational-only
//
// BEHAVIOR:
//   - On initial load, call fetch a quote automatically.
//   - Clicking "New Quote" fetches a new quote.
//   - While the fetch is resolving, a "loading" indicator should be shown
//     and the "New Quote" button is disabled
export default function RandomQuoteGenerator() {
  // Your click handler and JSX go here. Remember to render
  // <QuoteDisplay quote={quote} isLoading={isLoading} />.
  return null;
}
