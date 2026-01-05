import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { ChatCardItem } from '@/lib/types';
import { Button } from '../ui/button';

export function ChatCard({ title, description, template }: ChatCardItem) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(template);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Accordion
      type='single'
      collapsible
      className='border bg-background px-4 rounded-md mt-2'
    >
      <AccordionItem value={title}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className='text-left'>
          <p className='mb-2'>{description}</p>
          <pre className='bg-secondary p-4 rounded-md overflow-x-auto'>
            <code>{template}</code>
          </pre>
          <div className='mt-4 text-right'>
            <Button onClick={handleCopy}>
              {copied ? (
                <>
                  <Check />
                  Copied!
                </>
              ) : (
                <>
                  <Copy />
                  Copy Template
                </>
              )}
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
