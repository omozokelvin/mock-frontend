import { Box, Chip } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

export type RecommendationChipsProps = {
  chips: { label: string }[];
};

export default function RecommendationChips(props: RecommendationChipsProps) {
  const { chips } = props;
  const [hiddenCount, setHiddenCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return null;
    }

    if (container) {
      const containerWidth = container.offsetWidth;
      let totalWidth = 0;
      let count = 0;
      const gap = 8; // Gap between chips in pixels

      // Create a temporary hidden count chip to measure its width
      const hiddenCountChip = document.createElement('div');

      hiddenCountChip.innerText = `+${chips.length}`;
      document.body.appendChild(hiddenCountChip);
      const hiddenCountChipWidth = hiddenCountChip.offsetWidth;
      document.body.removeChild(hiddenCountChip);

      Array.from(container.children).forEach((chip, index) => {
        const chipElement = chip as HTMLElement; // Cast to HTMLElement

        totalWidth += chipElement.offsetWidth + gap; // Add gap to total width

        debugger;
        if (totalWidth + hiddenCountChipWidth > containerWidth) {
          count = chips.length - index;
          return;
        }
      });

      setHiddenCount(count);
    }
  }, [chips]);

  return (
    <Box
      ref={containerRef}
      sx={{ display: 'flex', flexWrap: 'nowrap', overflow: 'hidden' }}
    >
      {chips.slice(0, chips.length - hiddenCount).map((chip, index) => (
        <Chip key={index} label={chip.label} size="small" />
      ))}

      {hiddenCount > 0 && <Chip label={`+${hiddenCount}`} size="small" />}
    </Box>
  );
}
