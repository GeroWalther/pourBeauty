import React from 'react';

const CURRENCY_FORMATTER = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  style: 'currency',
  minimumFractionDigits: 2,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat('de-DE');

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}

/**
 * Formats short description with bold text
 * Auto-bolds specific keywords like BEAUTY SUPPLEMENT
 * Returns inline content suitable for use in a <p> tag
 */
export function formatShortDescription(text: string): React.ReactNode {
  // Keywords to auto-bold
  const autoBoldKeywords = [
    'SCHÖNHEITS-NAHRUNGSERGÄNZUNGSMITTEL',
    'BEAUTY SUPPLEMENT',
  ];

  // Create a regex pattern that matches any of the keywords
  const pattern = autoBoldKeywords
    .map(k => k.replace(/[-]/g, '\\-'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  // Split text by keywords
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Check if this part matches any keyword (case-insensitive)
    const isKeyword = autoBoldKeywords.some(
      keyword => part.toUpperCase() === keyword.toUpperCase()
    );

    if (isKeyword) {
      return <strong key={index} className="font-bold">{part}</strong>;
    }
    return part;
  });
}

/**
 * Formats a product description with:
 * - Paragraphs (split on double newlines \n\n)
 * - Bold text (wrapped in **text**)
 * - Line breaks (single newlines \n)
 *
 * Usage in DB: "First paragraph.\n\n**HERO INGREDIENTS**\n\nDetails here..."
 */
export function formatDescription(text: string): React.ReactNode[] {
  // Split into paragraphs on double newlines
  const paragraphs = text.split(/\n\n+/);

  return paragraphs.map((paragraph, pIndex) => {
    // Process bold markers (**text**) and line breaks
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);

    const formattedParts = parts.map((part, partIndex) => {
      // Check if this part is bold (wrapped in **)
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={`${pIndex}-${partIndex}`} className="font-bold text-foreground">{boldText}</strong>;
      }

      // Handle line breaks within the part
      const lines = part.split('\n');
      if (lines.length === 1) {
        return part;
      }

      return lines.map((line, lineIndex) => (
        <span key={`${pIndex}-${partIndex}-${lineIndex}`}>
          {line}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      ));
    });

    return (
      <p key={pIndex} className="mb-4 last:mb-0">
        {formattedParts}
      </p>
    );
  });
}
