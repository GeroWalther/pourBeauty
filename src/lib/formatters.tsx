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
