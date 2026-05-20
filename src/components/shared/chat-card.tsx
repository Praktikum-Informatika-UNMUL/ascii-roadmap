import { Check, Copy, MessageSquareText } from 'lucide-react';
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
      className='group/card rounded-xl border border-border/60 bg-card mt-3 overflow-hidden transition-colors hover:border-primary/20'
    >
      <AccordionItem value={title} className='border-none'>
        <AccordionTrigger className='px-5 py-4 hover:no-underline'>
          <span className='flex items-center gap-3 text-left'>
            <MessageSquareText className='w-4 h-4 text-primary shrink-0' />
            <span className='font-semibold'>{title}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent className='px-5 pb-5'>
          <p className='text-sm text-muted-foreground mb-3'>{description}</p>
          <pre className='bg-secondary/50 border border-border/40 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed'>
            <code>{template}</code>
          </pre>
          <div className='mt-4 flex justify-end'>
            <Button
              onClick={handleCopy}
              size='sm'
              variant={copied ? 'default' : 'outline'}
              className='transition-all'
            >
              {copied ? (
                <>
                  <Check className='w-3.5 h-3.5' />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className='w-3.5 h-3.5' />
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
